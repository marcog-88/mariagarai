// Data layer for the public Exponencial event pages (/eventos, /eventos/:slug).
//
// Connects to the shared Exponencial Supabase project via the anon (public) key
// already configured in src/integrations/supabase/client.ts. This repo may only
// SELECT public event columns + page_settings and call the register_for_event
// RPC — never raw inserts, never the service-role key.
//
// NOTE: src/integrations/supabase/types.ts is empty boilerplate (no tables
// typed), so the generated client doesn't know these tables/RPC exist. We cast
// to `any` for these calls and lean on the local types below for safety.
import { supabase } from "@/integrations/supabase/client";

// `event_link` is intentionally absent: it is RLS-private (anon is denied) and
// must never be queried or rendered client-side. Selecting `*` errors by design.
export const EVENT_COLUMNS =
  "id,slug,title,description,cover_image_url,event_date,platform,tag,status,guest_count,active,order,created_at";

export type EventRow = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  cover_image_url: string | null;
  event_date: string; // ISO timestamptz
  platform: string | null;
  tag: string | null;
  status: string | null;
  guest_count: number | null;
  active: boolean;
  order: number | null;
  created_at: string;
};

export type PageSettings = {
  page_title: string | null;
  page_subtitle: string | null;
  profile_image_url: string | null;
  linkedin_url: string | null;
  website_url: string | null;
};

// The generated Database type is empty boilerplate — cast once, centrally.
const sb = supabase as any;

// ── Reads ──────────────────────────────────────────────────────────────────

export async function fetchEvents(): Promise<EventRow[]> {
  const { data, error } = await sb
    .from("events")
    .select(EVENT_COLUMNS)
    .eq("active", true)
    .order("event_date", { ascending: true });
  if (error) throw error;
  return (data ?? []) as EventRow[];
}

export async function fetchEventBySlug(slug: string): Promise<EventRow | null> {
  const { data, error } = await sb
    .from("events")
    .select(EVENT_COLUMNS)
    .eq("slug", slug)
    .eq("active", true)
    .maybeSingle();
  if (error) throw error;
  return (data ?? null) as EventRow | null;
}

export async function fetchEventosPageSettings(): Promise<PageSettings | null> {
  const { data, error } = await sb
    .from("page_settings")
    .select("page_title,page_subtitle,profile_image_url,linkedin_url,website_url")
    .eq("page_key", "eventos")
    .maybeSingle();
  if (error) throw error;
  return (data ?? null) as PageSettings | null;
}

// ── Registration (RPC only — never raw inserts) ──────────────────────────────

export type RegistrationInput = {
  eventSlug: string;
  name: string;
  email: string;
  whatsapp?: string | null;
  eventSource?: string | null; // e.g. the event title, for attribution
};

export class RegistrationError extends Error {
  /** true when the visitor is already registered for this event. */
  alreadyRegistered: boolean;
  constructor(message: string, alreadyRegistered = false) {
    super(message);
    this.name = "RegistrationError";
    this.alreadyRegistered = alreadyRegistered;
  }
}

/**
 * Registers an attendee via the register_for_event RPC. The RPC upserts the
 * contact (status set only on first insert, so a returning CLIENTE is never
 * downgraded), creates the registration, and bumps guest_count — all atomically.
 * We never insert into contacts/event_registrations directly and never send a
 * status from the client.
 */
export async function registerForEvent(input: RegistrationInput) {
  const { data, error } = await sb.rpc("register_for_event", {
    p_event_slug: input.eventSlug,
    p_name: input.name,
    p_email: input.email,
    p_whatsapp: input.whatsapp ?? null,
    p_source: "evento",
    p_event_source: input.eventSource ?? null,
  });

  if (error) {
    const msg = (error.message || "").toLowerCase();
    // UNIQUE violation, or the RPC's own "already registered" guard.
    if (
      error.code === "23505" ||
      msg.includes("ya estás") ||
      msg.includes("ya estas") ||
      msg.includes("already") ||
      msg.includes("duplicate")
    ) {
      throw new RegistrationError("Ya estás apuntada a este evento.", true);
    }
    // P0001: event not found or inactive.
    if (error.code === "P0001" || msg.includes("not found") || msg.includes("inactive")) {
      throw new RegistrationError("Este evento ya no está disponible.");
    }
    throw new RegistrationError("No hemos podido completar tu reserva. Inténtalo de nuevo.");
  }

  return data;
}

// ── Timezone-aware formatting (Intl only — no external library) ───────────────

export function getVisitorTimeZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
}

/** Pretty city label from an IANA zone, e.g. "Europe/Madrid" → "Madrid". */
export function timeZoneCity(tz = getVisitorTimeZone()): string {
  const part = tz.split("/").pop() || tz;
  return part.replace(/_/g, " ");
}

/** Header line: "Horarios en Madrid · 14:32" (visitor zone + live clock). */
export function formatHeaderTimes(now: Date, tz = getVisitorTimeZone()): string {
  const time = new Intl.DateTimeFormat("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: tz,
  }).format(now);
  return `Horarios en ${timeZoneCity(tz)} · ${time}`;
}

/** Per-event long form: "mar 16 jun · 17:00h (tu hora)". */
export function formatEventLong(iso: string, tz = getVisitorTimeZone()): string {
  const d = new Date(iso);
  const day = new Intl.DateTimeFormat("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: tz,
  })
    .format(d)
    .replace(/,/g, "")
    .replace(/\.$/, "");
  const time = new Intl.DateTimeFormat("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: tz,
  }).format(d);
  return `${day} · ${time}h (tu hora)`;
}

/** Just the time, e.g. "17:00". */
export function formatTime(iso: string, tz = getVisitorTimeZone()): string {
  return new Intl.DateTimeFormat("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: tz,
  }).format(new Date(iso));
}

/** Stable day key in the visitor's zone, e.g. "2026-06-16". */
export function dayKey(iso: string, tz = getVisitorTimeZone()): string {
  // en-CA yields YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: tz,
  }).format(new Date(iso));
}

export type DayLabel = { weekday: string; dayNum: string; month: string };

/** Heading parts for a day group: { weekday:"martes", dayNum:"16", month:"jun" }. */
export function dayLabel(iso: string, tz = getVisitorTimeZone()): DayLabel {
  const d = new Date(iso);
  const weekday = new Intl.DateTimeFormat("es-ES", { weekday: "long", timeZone: tz }).format(d);
  const dayNum = new Intl.DateTimeFormat("es-ES", { day: "numeric", timeZone: tz }).format(d);
  const month = new Intl.DateTimeFormat("es-ES", { month: "short", timeZone: tz })
    .format(d)
    .replace(/\.$/, "");
  return { weekday, dayNum, month };
}

export type DayGroup = { key: string; iso: string; label: DayLabel; events: EventRow[] };

/** Groups events by calendar day (visitor zone), preserving chronological order. */
export function groupByDay(events: EventRow[], tz = getVisitorTimeZone()): DayGroup[] {
  const map = new Map<string, DayGroup>();
  for (const ev of events) {
    const key = dayKey(ev.event_date, tz);
    if (!map.has(key)) {
      map.set(key, { key, iso: ev.event_date, label: dayLabel(ev.event_date, tz), events: [] });
    }
    map.get(key)!.events.push(ev);
  }
  return Array.from(map.values());
}

export function isPast(iso: string): boolean {
  return new Date(iso).getTime() < Date.now();
}

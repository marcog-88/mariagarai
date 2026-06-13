// Vercel serverless function — sends the Exponencial event confirmation email
// via Resend (REST API, no SDK dependency) with an .ics attachment.
//
// ENV (set in Vercel, server-side only — never VITE_ vars, never shipped to the
// browser):
//   RESEND_API_KEY            required to actually send; if unset, this no-ops.
//   SUPABASE_URL              project URL for the event_link lookup.
//   SUPABASE_SERVICE_ROLE_KEY reads the RLS-private event_link (see below).
//
// event_link sourcing: `event_link` is RLS-private, so the public browser
// client can never read it. Per the agreed approach, this function reads it
// server-side using the service-role key — scoped to selecting only
// event_link for the one event being confirmed. The key lives solely in the
// Vercel environment (never a VITE_ var, never shipped to the browser). If the
// service-role env vars are absent, the email still sends with the .ics but
// without the access link.

const FROM = "María Garaí <noreply@mariagarai.com>";
const SUPPORT = "hola@mariagarai.com";

const z = (n) => String(n).padStart(2, "0");

function formatICSDate(date) {
  const d = new Date(date);
  return (
    `${d.getUTCFullYear()}${z(d.getUTCMonth() + 1)}${z(d.getUTCDate())}` +
    `T${z(d.getUTCHours())}${z(d.getUTCMinutes())}${z(d.getUTCSeconds())}Z`
  );
}

// Escape per RFC 5545 (commas, semicolons, backslashes, newlines).
const icsEscape = (s = "") =>
  String(s).replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");

function generateICS({ title, startDate, description, location, uid }) {
  const start = new Date(startDate);
  const end = new Date(start.getTime() + 60 * 60 * 1000); // 60-min default
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Maria Garai//ES",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${formatICSDate(new Date())}`,
    `DTSTART:${formatICSDate(start)}`,
    `DTEND:${formatICSDate(end)}`,
    `SUMMARY:${icsEscape(title)}`,
    `DESCRIPTION:${icsEscape(description)}`,
    `LOCATION:${icsEscape(location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

// Reads the RLS-private event_link via service-role, if configured.
async function lookupEventLink(eventSlug) {
  const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key || !eventSlug) return null;
  try {
    const res = await fetch(
      `${url}/rest/v1/events?slug=eq.${encodeURIComponent(eventSlug)}&select=event_link`,
      { headers: { apikey: key, Authorization: `Bearer ${key}` } },
    );
    if (!res.ok) return null;
    const rows = await res.json();
    return rows?.[0]?.event_link || null;
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const { name, email, eventTitle, eventDate, platform, eventSlug } = body;

  if (!email || !eventTitle || !eventDate) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Dormant-safe: without a Resend key, log and succeed so registration never
  // breaks before the key/domain are configured.
  if (!process.env.RESEND_API_KEY) {
    console.warn("[send-confirmation] RESEND_API_KEY not set — skipping email send.");
    return res.status(200).json({ skipped: true });
  }

  // Read the RLS-private link server-side (service-role). Single source of
  // truth — the browser never sends it because it cannot read it.
  const eventLink = await lookupEventLink(eventSlug);

  const fechaEs = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Madrid",
  }).format(new Date(eventDate));

  const ics = generateICS({
    title: eventTitle,
    startDate: eventDate,
    description: eventLink ? `Tu enlace de acceso: ${eventLink}` : `Evento online · ${platform || "online"}`,
    location: eventLink || platform || "Online",
    uid: `${eventSlug || "evento"}-${Date.now()}@mariagarai.com`,
  });

  // One-click "add to calendar" links (reliable across email clients, unlike a
  // bare .ics which Gmail only offers as a download). The .ics stays attached
  // for Apple Calendar / Outlook desktop.
  const calStart = formatICSDate(eventDate);
  const calEnd = formatICSDate(new Date(new Date(eventDate).getTime() + 60 * 60 * 1000));
  const calDetails = eventLink ? `Tu enlace de acceso: ${eventLink}` : `Evento online · ${platform || "online"}`;
  const calLocation = eventLink || platform || "Online";
  const startISO = new Date(eventDate).toISOString();
  const endISO = new Date(new Date(eventDate).getTime() + 60 * 60 * 1000).toISOString();

  const googleUrl =
    `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent(eventTitle)}` +
    `&dates=${calStart}/${calEnd}` +
    `&details=${encodeURIComponent(calDetails)}` +
    `&location=${encodeURIComponent(calLocation)}`;
  const outlookUrl =
    `https://outlook.office.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent` +
    `&subject=${encodeURIComponent(eventTitle)}` +
    `&startdt=${encodeURIComponent(startISO)}` +
    `&enddt=${encodeURIComponent(endISO)}` +
    `&body=${encodeURIComponent(calDetails)}` +
    `&location=${encodeURIComponent(calLocation)}`;

  const calendarBlock = `<p style="margin:20px 0 8px;font-size:14px;color:#555;">Añádelo a tu calendario:</p>
    <p style="margin:0 0 4px;">
      <a href="${googleUrl}" target="_blank" style="display:inline-block;margin-right:8px;padding:9px 16px;border:1px solid #ddd;border-radius:9999px;color:#0c0d0e;text-decoration:none;font-size:14px;">📅 Google Calendar</a>
      <a href="${outlookUrl}" target="_blank" style="display:inline-block;padding:9px 16px;border:1px solid #ddd;border-radius:9999px;color:#0c0d0e;text-decoration:none;font-size:14px;">📅 Outlook</a>
    </p>
    <p style="margin:4px 0 0;font-size:12px;color:#999;">(Apple Calendar: abre el archivo .ics adjunto.)</p>`;

  const linkBlock = eventLink
    ? `<p style="margin:24px 0;">
         <a href="${eventLink}" style="background:#9378fe;color:#fff;text-decoration:none;padding:12px 24px;border-radius:9999px;display:inline-block;font-weight:600;">
           Acceder al evento
         </a>
       </p>`
    : `<p style="margin:24px 0;color:#555;">Te enviaremos el enlace de acceso antes del evento. Guarda este email y el archivo de calendario adjunto.</p>`;

  const html = `<div style="font-family:Inter,system-ui,sans-serif;max-width:520px;margin:0 auto;color:#0c0d0e;">
    <p>Hola ${name || ""},</p>
    <p>Tu plaza está confirmada.</p>
    <h2 style="font-family:Georgia,serif;font-size:22px;margin:20px 0 4px;">${eventTitle}</h2>
    <p style="color:#555;margin:0 0 8px;text-transform:capitalize;">${fechaEs}h (hora de Madrid)</p>
    <p style="color:#555;margin:0;">📍 ${platform || "Online"}</p>
    ${calendarBlock}
    ${linkBlock}
    <p>Guarda este email — es tu acceso al evento.</p>
    <p style="color:#777;font-size:14px;">¿Preguntas? ${SUPPORT}<br/>— María</p>
  </div>`;

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [email],
        subject: `Estás dentro — ${eventTitle}`,
        html,
        attachments: [
          {
            filename: "evento.ics",
            content: Buffer.from(ics).toString("base64"),
          },
        ],
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      console.error("[send-confirmation] Resend error:", resp.status, detail);
      return res.status(502).json({ error: "Email provider error" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[send-confirmation] send failed:", err);
    return res.status(500).json({ error: "Send failed" });
  }
}

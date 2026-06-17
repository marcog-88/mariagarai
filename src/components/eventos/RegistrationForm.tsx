import { useState } from "react";
import { Bell, Check, Loader2, X } from "lucide-react";
import { formatEventLong, registerForEvent, subscribeToEventNotifications, RegistrationError, type EventRow } from "@/lib/eventos";
import { AnadirAlCalendario } from "./AnadirAlCalendario";

type Props = { event: EventRow };
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function FormFields({
  event,
  name, setName,
  email, setEmail,
  whatsapp, setWhatsapp,
  notify, setNotify,
  status,
  errorMsg,
  submitting,
  onSubmit,
}: {
  event: EventRow;
  name: string; setName: (v: string) => void;
  email: string; setEmail: (v: string) => void;
  whatsapp: string; setWhatsapp: (v: string) => void;
  notify: boolean; setNotify: (v: boolean) => void;
  status: Status;
  errorMsg: string;
  submitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
}) {
  if (status === "success") {
    const calEvent = {
      title: event.title,
      startIso: event.event_date,
      location: event.event_link || undefined,
      description: event.description || undefined,
    };
    return (
      <div className="rounded-xl border border-accent/40 bg-accent/5 p-6 text-center">
        <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Check className="h-6 w-6" />
        </span>
        <p className="mt-4 font-serif text-xl text-foreground">¡Estás dentro!</p>
        <p className="mt-1 text-sm text-foreground/65">Revisa tu email para el enlace.</p>
        <AnadirAlCalendario event={calEvent} />
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-3">
        <div>
          <label htmlFor="reg-name" className="mb-1 block text-sm text-foreground/70">Nombre</label>
          <input
            id="reg-name" type="text" value={name} onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </div>
        <div>
          <label htmlFor="reg-email" className="mb-1 block text-sm text-foreground/70">Email</label>
          <input
            id="reg-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </div>
        <div>
          <label htmlFor="reg-whatsapp" className="mb-1 block text-sm text-foreground/70">
            WhatsApp <span className="text-foreground/40">(opcional)</span>
          </label>
          <input
            id="reg-whatsapp" type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="+34 600 000 000" autoComplete="tel"
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </div>
      </div>

      {/* Notify bell */}
      <label className="mt-4 flex cursor-pointer items-center gap-2.5 select-none">
        <input
          type="checkbox"
          checked={notify}
          onChange={(e) => setNotify(e.target.checked)}
          className="sr-only"
        />
        <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${notify ? "bg-accent border-accent text-accent-foreground" : "border-input bg-background text-transparent"}`}>
          <Check className="h-3 w-3" />
        </span>
        <span className="flex items-center gap-1.5 text-sm text-foreground/70">
          <Bell className="h-3.5 w-3.5 text-foreground/40" />
          Avísame de nuevos eventos
        </span>
      </label>

      {status === "error" && <p className="mt-3 text-sm text-destructive">{errorMsg}</p>}

      <button type="submit" disabled={submitting} className="btn-primary mt-5 w-full disabled:opacity-70">
        {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Reservando…</> : <>Reservar mi plaza →</>}
      </button>

      <p className="mt-3 text-center text-xs text-foreground/45">
        Gratuito · Online{event.platform ? ` · ${event.platform}` : ""}
      </p>
    </form>
  );
}

export const RegistrationForm = ({ event }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [notify, setNotify] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);

  const submitting = status === "submitting";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (name.trim().length < 2) { setStatus("error"); setErrorMsg("Escribe tu nombre."); return; }
    if (!EMAIL_RE.test(email.trim())) { setStatus("error"); setErrorMsg("Escribe un email válido."); return; }

    setStatus("submitting");
    setErrorMsg("");

    try {
      await registerForEvent({
        eventSlug: event.slug,
        name: name.trim(),
        email: email.trim(),
        whatsapp: whatsapp.trim() || null,
        eventSource: event.title,
      });

      try {
        await fetch("/api/send-confirmation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(), email: email.trim(),
            eventTitle: event.title, eventDate: event.event_date,
            platform: event.platform, eventSlug: event.slug,
          }),
        });
      } catch { /* non-blocking */ }

      if (notify) {
        try {
          await subscribeToEventNotifications(email.trim(), name.trim(), whatsapp.trim() || null);
        } catch { /* non-blocking */ }
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof RegistrationError
          ? err.message
          : "No hemos podido completar tu reserva. Inténtalo de nuevo.",
      );
    }
  };

  const formProps = { event, name, setName, email, setEmail, whatsapp, setWhatsapp, notify, setNotify, status, errorMsg, submitting, onSubmit: handleSubmit };

  return (
    <>
      {/* Desktop: inline card (hidden on mobile) */}
      <div className="hidden lg:block rounded-xl border border-border bg-card p-6 lg:sticky lg:top-24">
        <h3 className="font-serif text-2xl text-foreground">Reserva tu plaza gratis</h3>
        <p className="mt-1 text-sm text-foreground/60">{formatEventLong(event.event_date)}</p>
        <div className="mt-5">
          <FormFields {...formProps} />
        </div>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">{event.title}</p>
          <p className="text-xs text-foreground/50">{formatEventLong(event.event_date)}</p>
        </div>
        <button
          onClick={() => setSheetOpen(true)}
          className="btn-primary shrink-0 px-5 py-2.5 text-sm"
        >
          Reservar →
        </button>
      </div>

      {/* Mobile: bottom sheet modal */}
      {sheetOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSheetOpen(false)} />

          {/* Sheet — scrollable so bell checkbox is reachable when keyboard is open */}
          <div className="relative bg-background rounded-t-2xl px-5 pt-5 pb-8 shadow-2xl overflow-y-auto max-h-[90dvh]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-serif text-xl text-foreground">Reserva tu plaza gratis</h3>
                <p className="mt-0.5 text-sm text-foreground/60">{formatEventLong(event.event_date)}</p>
              </div>
              <button
                onClick={() => setSheetOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground/50 hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <FormFields {...formProps} />
          </div>
        </div>
      )}
    </>
  );
};

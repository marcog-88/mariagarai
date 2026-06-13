import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { formatEventLong, registerForEvent, RegistrationError, type EventRow } from "@/lib/eventos";

type Props = { event: EventRow };
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const RegistrationForm = ({ event }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const submitting = status === "submitting";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (name.trim().length < 2) {
      setStatus("error");
      setErrorMsg("Escribe tu nombre.");
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      setErrorMsg("Escribe un email válido.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      // Registration goes through the RPC (upsert contact + registration +
      // guest_count bump). Never a raw insert; never send a status.
      await registerForEvent({
        eventSlug: event.slug,
        name: name.trim(),
        email: email.trim(),
        whatsapp: whatsapp.trim() || null,
        eventSource: event.title,
      });

      // Fire the confirmation email (best-effort — never blocks the success
      // state). The serverless function owns the private event_link; we never
      // touch it here. In local dev the function isn't running, so this 404s
      // harmlessly.
      try {
        await fetch("/api/send-confirmation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            eventTitle: event.title,
            eventDate: event.event_date,
            platform: event.platform,
            eventSlug: event.slug,
          }),
        });
      } catch {
        /* email is non-blocking */
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

  if (status === "success") {
    return (
      <div className="rounded-xl border border-accent/40 bg-accent/5 p-6 text-center">
        <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Check className="h-6 w-6" />
        </span>
        <p className="mt-4 font-serif text-xl text-foreground">¡Estás dentro!</p>
        <p className="mt-1 text-sm text-foreground/65">Revisa tu email para el enlace.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6">
      <h3 className="font-serif text-2xl text-foreground">Reserva tu plaza gratis</h3>
      <p className="mt-1 text-sm text-foreground/60">{formatEventLong(event.event_date)}</p>

      <div className="mt-5 space-y-3">
        <div>
          <label htmlFor="reg-name" className="mb-1 block text-sm text-foreground/70">
            Nombre
          </label>
          <input
            id="reg-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </div>

        <div>
          <label htmlFor="reg-email" className="mb-1 block text-sm text-foreground/70">
            Email
          </label>
          <input
            id="reg-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </div>

        <div>
          <label htmlFor="reg-whatsapp" className="mb-1 block text-sm text-foreground/70">
            WhatsApp <span className="text-foreground/40">(opcional)</span>
          </label>
          <input
            id="reg-whatsapp"
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="+34 600 000 000"
            autoComplete="tel"
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </div>
      </div>

      {status === "error" && <p className="mt-3 text-sm text-destructive">{errorMsg}</p>}

      <button type="submit" disabled={submitting} className="btn-primary mt-5 w-full disabled:opacity-70">
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Reservando…
          </>
        ) : (
          <>Reservar mi plaza →</>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-foreground/45">
        Gratuito · Online{event.platform ? ` · ${event.platform}` : ""}
      </p>
    </form>
  );
};

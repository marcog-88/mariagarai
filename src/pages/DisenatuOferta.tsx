import { useState } from "react";
import {
  ArrowRight, ArrowDown, Loader2, Sparkles, Lock, Check,
  Target, Calendar, Rocket, Download, Gift, Ticket, Crown,
  Repeat, TrendingUp, Telescope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { downloadCareerPdf } from "@/lib/disena/careerPdf";
import type { CareerDesign, EcosystemOffer } from "@/lib/disena/career.types";

// ─── helpers ────────────────────────────────────────────────────────────────

function buildSummary(design: CareerDesign): string {
  const insignia = design.ecosystem.find((o) => o.type === "OFERTA INSIGNIA");
  const prospeccion = design.ecosystem.find((o) => o.type === "OFERTA DE PROSPECCION");
  const leadMagnet = design.ecosystem.find((o) => o.type === "LEAD MAGNET");
  const continuidad = design.ecosystem.find((o) => o.type === "CONTINUIDAD");
  const parts = [
    `Nicho recomendado: ${design.nicheEvaluation.recommendedNiche}`,
    insignia ? `Oferta insignia: ${insignia.name}${insignia.type === "OFERTA INSIGNIA" ? ` — ${insignia.transformation}` : ""}` : null,
    [prospeccion?.name, leadMagnet?.name, continuidad?.name].filter(Boolean).length
      ? `Satélites: ${[prospeccion?.name, leadMagnet?.name, continuidad?.name].filter(Boolean).join(" · ")}`
      : null,
  ].filter(Boolean).join("\n");
  return parts.slice(0, 600);
}

// ─── page ───────────────────────────────────────────────────────────────────

export default function DisenatuOferta() {
  const [step, setStep] = useState<"intro" | "form" | "loading" | "result">("intro");
  const [result, setResult] = useState<CareerDesign | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    linkedinOrTrajectory: "",
    avatarHint: "",
    currentNiche: "",
    otherNiches: "",
    bestClientProfile: "",
    hiddenGifts: "",
    notDoingAnymore: "",
    currentlySelling: "",
    firstThingToSell: "",
    consent: false,
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.linkedinOrTrajectory.trim().length < 20) {
      toast.error("Cuéntame un poco más sobre tu trayectoria (mínimo 20 caracteres).");
      return;
    }
    if (!form.consent) {
      toast.error("Debes aceptar para continuar.");
      return;
    }

    setStep("loading");

    try {
      const enrichedAvatarHint = [
        form.avatarHint && `A quién quiere ayudar y problema: ${form.avatarHint}`,
        form.currentNiche && `Nicho actual: ${form.currentNiche}`,
        form.otherNiches && `Otros nichos posibles (lluvia de ideas): ${form.otherNiches}`,
        form.bestClientProfile && `Perfil de cliente que más necesita y más puede pagar: ${form.bestClientProfile}`,
      ].filter(Boolean).join("\n\n");

      const enrichedTrajectory = [
        form.linkedinOrTrajectory,
        form.currentlySelling && `\n\nQué vende ahora mismo: ${form.currentlySelling}`,
      ].filter(Boolean).join("");

      const res = await fetch("/api/disena", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          linkedinOrTrajectory: enrichedTrajectory,
          avatarHint: enrichedAvatarHint,
          hiddenGifts: form.hiddenGifts,
          notDoingAnymore: form.notDoingAnymore,
          firstThingToSell: form.firstThingToSell,
        }),
      });

      const json = await res.json();

      if (!res.ok || !json.design) {
        toast.error(json.error || "Algo salió mal. Intenta de nuevo.");
        setStep("form");
        return;
      }

      setResult(json.design);
      setStep("result");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);

      // Lead capture — separate, non-blocking
      supabase.rpc("submit_disena_lead", {
        p_name: `${form.firstName} ${form.lastName}`.trim(),
        p_email: form.email,
        p_whatsapp: null,
        p_summary: buildSummary(json.design),
      } as never).then(({ error }) => {
        if (error) console.error("submit_disena_lead failed:", error);
      });

    } catch (err) {
      console.error(err);
      toast.error("Algo salió mal. Intenta de nuevo.");
      setStep("form");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── INTRO ── */}
      {step === "intro" && (
        <section className="hero-dark text-white">
          <div className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                <span>✦</span> Diseña tu oferta exponencial
              </span>
            </div>
            <h1
              className="mx-auto mt-8 max-w-4xl text-center text-5xl leading-[1.02] tracking-tight font-bold md:text-7xl lg:text-[5.5rem]"
            >
              Del <em className="italic text-accent">"no sé qué vender"</em> a una oferta de alto valor simple, escalable y rentable
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-white/70 md:text-xl">
              Convierte tu conocimiento en <strong className="font-semibold text-white">tu oferta insignia</strong>: simple, escalable y altamente rentable. La que la gente quiera comprar. Sin adivinar. Sin años de prueba y error.
            </p>

            <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-sm md:grid-cols-3">
              {[
                { icon: Target, t: "Tu posicionamiento, nicho e identidad de experta" },
                { icon: Crown, t: "Tu oferta insignia y tus ofertas satélite" },
                { icon: TrendingUp, t: "Tu visión de negocio a 1 y 5 años" },
              ].map(({ icon: Icon, t }) => (
                <div
                  key={t}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white/90"
                >
                  <Icon className="h-4 w-4 shrink-0 text-mint" />
                  <span className="font-medium">{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setStep("form")}
                className="btn-primary-lg"
              >
                Quiero ver mi oferta exponencial
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-mint" /> Sin pago</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-mint" /> Resultado en 30 segundos</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-mint" /> Hecho a tu medida</span>
            </div>
          </div>
        </section>
      )}

      {/* ── FORM ── */}
      {step === "form" && (
        <section className="bg-[#fafaf8]">
          <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/70">
                <span className="text-accent">✦</span> Paso 1 de 1
              </span>
              <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.05] md:text-6xl">Primero, cuéntame quién eres.</h2>
              <p className="mt-4 text-base text-foreground/70 md:text-lg">
                Te lleva unos 90 segundos. Sé concreta: cuanto mejor el input, mejor el resultado.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="mt-10 space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Nombre">
                  <Input required maxLength={80} value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="María" />
                </Field>
                <Field label="Apellido">
                  <Input required maxLength={80} value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Garai" />
                </Field>
              </div>

              <Field label="Email">
                <Input required type="email" maxLength={200} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@email.com" />
              </Field>

              <Field label="Pega aquí tu perfil de LinkedIn más actualizado y cuéntame brevemente tu trayectoria profesional">
                <Textarea required maxLength={4000} rows={5} value={form.linkedinOrTrajectory} onChange={(e) => setForm({ ...form, linkedinOrTrajectory: e.target.value })} placeholder="Ej: 10 años en marketing en multinacional, ahora quiero construir algo propio..." />
              </Field>

              <Field label="¿A quién quieres ayudar y con qué problema concreto?">
                <Textarea maxLength={2000} rows={3} value={form.avatarHint} onChange={(e) => setForm({ ...form, avatarHint: e.target.value })} placeholder="Si todavía no lo tienes claro, escribe lo que intuyas. La IA lo va a refinar." />
              </Field>

              <Field label="¿A qué nicho te diriges hoy?">
                <Textarea maxLength={2000} rows={2} value={form.currentNiche} onChange={(e) => setForm({ ...form, currentNiche: e.target.value })} placeholder="Ej: Mujeres profesionales de 35-50 en transición de carrera." />
              </Field>

              <Field label="¿Qué otros nichos se te ocurren a los que podrías dirigirte? Haz una lluvia de ideas, sin filtro.">
                <Textarea maxLength={2000} rows={3} value={form.otherNiches} onChange={(e) => setForm({ ...form, otherNiches: e.target.value })} placeholder="Suelta todo lo que se te ocurra, sin juzgar." />
              </Field>

              <Field label="De todos tus clientes, ¿cuál es el perfil que más necesita lo que ofreces y más puede pagar?">
                <Textarea maxLength={2000} rows={3} value={form.bestClientProfile} onChange={(e) => setForm({ ...form, bestClientProfile: e.target.value })} placeholder="Describe el perfil concreto: sector, momento profesional, capacidad de pago…" />
              </Field>

              <Field label="¿Qué más dones ocultos tienes que no aparecen en LinkedIn, pero que son muy tú?">
                <Textarea maxLength={2000} rows={3} value={form.hiddenGifts} onChange={(e) => setForm({ ...form, hiddenGifts: e.target.value })} placeholder="Ej: Se me da muy bien escribir y comunicar. Creo que tengo facilidades para vender y también me encantan la meditación y las terapias holísticas." />
              </Field>

              <Field label="¿Qué no quieres seguir haciendo?">
                <Textarea maxLength={2000} rows={3} value={form.notDoingAnymore} onChange={(e) => setForm({ ...form, notDoingAnymore: e.target.value })} placeholder="Ej: Reuniones interminables, gestionar equipos grandes, depender de un jefe, vivir pegada a Slack…" />
              </Field>

              <Field label="¿Qué vendes ahora mismo? (todos los servicios, sesiones, cursos o productos que ofreces hoy)">
                <Textarea maxLength={2000} rows={3} value={form.currentlySelling} onChange={(e) => setForm({ ...form, currentlySelling: e.target.value })} placeholder="Enumera todo lo que ofreces hoy: servicios, sesiones, cursos, productos, precios si quieres…" />
              </Field>

              <Field label="¿Qué es lo PRIMERO que venderías si tuvieras que generar 1.000€ en los próximos 7 días?">
                <Textarea maxLength={2000} rows={3} value={form.firstThingToSell} onChange={(e) => setForm({ ...form, firstThingToSell: e.target.value })} placeholder="No lo que te gustaría vender algún día ni lo que suena impresionante. Lo más inmediato por lo que te pagarían." />
              </Field>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-muted/30 p-4">
                <Checkbox
                  checked={form.consent}
                  onCheckedChange={(v) => setForm({ ...form, consent: v === true })}
                  className="mt-0.5"
                />
                <span className="text-sm leading-relaxed">
                  Acepto que María Garai me envíe Hazte Grande, su newsletter semanal sobre cómo construir un negocio de servicios de alto valor.
                </span>
              </label>

              <Button
                type="submit"
                size="lg"
                className="h-14 w-full rounded-full bg-accent text-base font-semibold text-accent-foreground hover:brightness-110"
              >
                Generar mi oferta exponencial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="flex items-center justify-center gap-1 text-center text-xs text-muted-foreground">
                <Lock className="h-3 w-3" /> Tus datos están 100% seguros.
              </p>
            </form>
          </div>
        </section>
      )}

      {/* ── LOADING ── */}
      {step === "loading" && (
        <section className="flex min-h-[80vh] flex-col items-center justify-center px-6">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-accent/30 blur-2xl" />
            <Loader2 className="relative h-12 w-12 animate-spin text-accent" />
          </div>
          <h3 className="mt-8 font-serif text-3xl">Analizando tu trayectoria…</h3>
          <p className="mt-2 max-w-md text-center text-muted-foreground">
            Diseñando tu posicionamiento, tu avatar y tu ecosistema de 4 ofertas. Tarda unos 15–30 segundos.
          </p>
        </section>
      )}

      {/* ── RESULT ── */}
      {step === "result" && result && (
        <>
          {/* Posicionamiento + Nicho + Avatar */}
          <section className="hero-dark text-white">
            <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                <span className="text-mint">✦</span> Oferta exponencial
              </span>
              <h2 className="mx-auto mt-6 max-w-3xl font-serif text-5xl font-bold leading-[1.02] md:text-7xl">
                Qué vendes. A quién. Y cómo.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">
                Tu posicionamiento, la evaluación de tu nicho y el avatar con más poder de compra — la base de tu oferta insignia.
              </p>

              <div className="mx-auto mt-12 max-w-3xl space-y-5 text-left">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:p-8">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-mint">
                    Posicionamiento
                  </div>
                  <p className="whitespace-pre-line text-base leading-[1.85] text-white/90 md:text-lg md:leading-[1.9]">
                    {result.expertIdentity}
                  </p>
                </div>

                <NicheEvaluationCard niche={result.nicheEvaluation} />
                <AvatarCard avatar={result.avatar} />
              </div>
            </div>
          </section>

          {/* Ecosystem */}
          <EcosystemSection offers={result.ecosystem} />

          {/* ¿Otro ángulo? */}
          <section className="bg-white">
            <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
              <h3 className="font-serif text-4xl font-bold leading-tight md:text-5xl">¿Quieres otro ángulo?</h3>
              <p className="mx-auto mt-4 max-w-xl text-foreground/70 md:text-lg">
                Ajusta tus respuestas y vuelve a generar — pequeños cambios dan diseños muy distintos.
              </p>
              <button
                onClick={() => { setResult(null); setStep("form"); }}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-white px-6 py-3 text-sm font-semibold transition hover:bg-[#fafaf8]"
              >
                Volver y reajustar
              </button>
              <div className="mt-16 flex flex-col items-center gap-4">
                <p className="font-serif text-2xl text-foreground/80 md:text-3xl">
                  ¿Estás contenta? Vamos a ver hacia dónde va tu negocio.
                </p>
                <ArrowDown className="h-8 w-8 animate-bounce text-accent" />
              </div>
            </div>
          </section>

          {/* Visión timeline */}
          <section className="bg-[#fafaf8]">
            <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
              <div className="text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/70">
                  <span className="text-accent">✦</span> Tu visión
                </span>
                <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.05] md:text-6xl">Hacia dónde vas.</h2>
                <p className="mx-auto mt-4 max-w-xl text-foreground/70 md:text-lg">
                  Tu línea de tiempo desde hoy hasta los próximos 5 años.
                </p>
              </div>

              <div className="relative mt-16 pl-10 md:pl-16">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-mint via-accent to-accent md:left-5" />

                <div className="relative pb-12">
                  <div className="absolute -left-[34px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#fafaf8] bg-foreground text-background md:-left-[44px] md:h-7 md:w-7">
                    <span className="h-2 w-2 rounded-full bg-background" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Hoy</div>
                  <p className="mt-2 text-base text-foreground/80 md:text-lg">
                    Tienes un borrador claro de tu oferta insignia y de las tres ofertas satélite que la alimentan.
                  </p>
                </div>

                <div className="relative pb-12">
                  <div className="absolute -left-[34px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#fafaf8] bg-mint text-mint-foreground md:-left-[44px] md:h-7 md:w-7">
                    <Rocket className="h-3 w-3" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-mint-foreground">
                    <Calendar className="h-3 w-3" /> A 1 año · El primer hito
                  </span>
                  <div className="mt-4 rounded-2xl border border-border bg-white p-7 md:p-8">
                    <p className="whitespace-pre-line text-sm leading-[1.85] text-foreground/85 md:text-base md:leading-[1.9]">
                      {result.vision1Year}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[34px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#fafaf8] bg-accent text-accent-foreground md:-left-[44px] md:h-7 md:w-7">
                    <Telescope className="h-3 w-3" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
                    <Sparkles className="h-3 w-3" /> A 5 años · La visión amplia
                  </span>
                  <div className="mt-4 rounded-2xl bg-white p-7 ring-2 ring-accent shadow-[0_8px_32px_-8px_rgba(147,120,254,0.45)] md:p-8">
                    <p className="whitespace-pre-line text-sm leading-[1.85] text-foreground/85 md:text-base md:leading-[1.9]">
                      {result.vision5Years}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Descargar PDF */}
          <section className="bg-[#fafaf8]">
            <div className="mx-auto max-w-3xl px-6 pb-12 text-center">
              <button
                onClick={() => downloadCareerPdf(result)}
                className="btn-primary-lg"
              >
                <Download className="h-4 w-4" />
                Descargar mi resultado en PDF
              </button>
            </div>
          </section>

          {/* CTA final */}
          <section className="bg-accent text-accent-foreground">
            <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                <span className="text-mint">✦</span> Siguiente paso
              </span>
              <h2 className="mt-8 font-serif text-5xl font-bold leading-[1.02] md:text-7xl">
                ¿Lista para dejar de <em className="italic text-mint">vender tu tiempo</em>?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
                Tienes el mapa de tu oferta. Ahora la pregunta es: ¿estás lista para dejar de vender tus horas sueltas y cursos a 97€, y crear tu oferta insignia de alto valor, la que multiplica tus ingresos y consolida tu autoridad? Te ayudo a pivotar tu negocio a un modelo más simple, escalable y sostenible.
              </p>
              <div className="mt-10 flex justify-center">
                <a
                  href="https://www.mariagarai.com/exponencial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-accent shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] transition hover:brightness-95"
                >
                  Ver cómo te ayudo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

// ─── sub-components ──────────────────────────────────────────────────────────

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium">{label}</Label>
      {children}
    </div>
  );
}

function NicheEvaluationCard({ niche }: { niche: CareerDesign["nicheEvaluation"] }) {
  return (
    <div className="rounded-2xl border border-mint/30 bg-mint/[0.06] p-7 md:p-8">
      <div className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-mint">
        <Target className="h-3.5 w-3.5" /> Evaluación de tu nicho
      </div>
      <div className="space-y-6">
        <div>
          <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/60">Cuán nichada estás hoy</div>
          <p className="whitespace-pre-line text-sm leading-[1.8] text-white/90 md:text-base md:leading-[1.85]">{niche.currentNicheLevel}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
          <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-accent">Nicho más rentable recomendado</div>
          <p className="text-base font-semibold leading-snug text-white md:text-lg">{niche.recommendedNiche}</p>
        </div>
        <div>
          <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/60">Por qué este nicho</div>
          <p className="whitespace-pre-line text-sm leading-[1.8] text-white/90 md:text-base md:leading-[1.85]">{niche.why}</p>
        </div>
      </div>
    </div>
  );
}

function AvatarCard({ avatar }: { avatar: CareerDesign["avatar"] }) {
  const blocks: { label: string; text: string }[] = [
    { label: "¿Quién es?", text: avatar.whoIs },
    { label: "¿En qué punto está?", text: avatar.pointA },
    { label: "¿Qué quiere?", text: avatar.pointB },
    { label: "Cómo le ayudas a pasar del punto A al B", text: avatar.transformation },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:p-8">
      <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Tu avatar</div>
      <p className="mb-5 text-xs italic text-white/60">El cliente con mayor poder de compra — el avatar de tu oferta insignia.</p>
      <div className="space-y-6">
        {blocks.map(({ label, text }) => (
          <div key={label}>
            <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-mint">{label}</div>
            <p className="whitespace-pre-line text-sm leading-[1.8] text-white/90 md:text-base md:leading-[1.85]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const OFFER_META: Record<EcosystemOffer["type"], { Icon: typeof Gift; pillBg: string; iconColor: string }> = {
  "OFERTA INSIGNIA": { Icon: Crown, pillBg: "bg-accent text-accent-foreground", iconColor: "text-accent-foreground" },
  "OFERTA DE PROSPECCION": { Icon: Ticket, pillBg: "bg-foreground text-background", iconColor: "text-background" },
  "LEAD MAGNET": { Icon: Gift, pillBg: "bg-mint text-mint-foreground", iconColor: "text-mint-foreground" },
  CONTINUIDAD: { Icon: Repeat, pillBg: "bg-foreground text-background", iconColor: "text-background" },
};

function EcosystemSection({ offers }: { offers: EcosystemOffer[] }) {
  const flagship = offers.find((o) => o.type === "OFERTA INSIGNIA");
  const satellites = offers.filter((o) => o.type !== "OFERTA INSIGNIA");

  return (
    <section className="bg-[#fafaf8]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/70">
            <span className="text-accent">✦</span> Tu oferta
          </span>
          <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.05] md:text-6xl">
            Tu oferta insignia y tus <em className="italic text-accent">ofertas satélite</em>.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/70 md:text-lg">
            <strong>Una sola</strong> oferta protagonista. Las otras tres orbitan a su alrededor para atraer, calentar y retener.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm italic text-foreground/55">
            Esto es un primer borrador de tu oferta. Un punto de partida con el que empezar a trabajar.
          </p>
        </div>

        {flagship && (
          <div className="mt-14">
            <div className="mb-4 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
              <Sparkles className="h-3.5 w-3.5" /> La estrella · 1 oferta
            </div>
            <OfferCard offer={flagship} flagship />
          </div>
        )}

        <div className="mt-16">
          <div className="mb-2 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/60">
            <Repeat className="h-3.5 w-3.5" /> Ofertas satélite · 3 orbitan a la insignia
          </div>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-foreground/65">
            Existen para alimentar y conducir a tu oferta insignia. <strong>No son ofertas iguales</strong> — son apoyos.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {satellites.map((o) => <OfferCard key={o.type} offer={o} satellite />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferCard({ offer, flagship = false, satellite = false }: { offer: EcosystemOffer; flagship?: boolean; satellite?: boolean }) {
  const meta = OFFER_META[offer.type];
  const satelliteRole: Record<string, string> = {
    "LEAD MAGNET": "Atrae · gratis · (este mismo quiz es un ejemplo)",
    "OFERTA DE PROSPECCION": "Calienta · primera venta de bajo riesgo",
    "CONTINUIDAD": "Retiene · recurrente, después de la insignia",
  };

  return (
    <div className={`relative flex flex-col rounded-2xl bg-card p-7 md:p-8 ${flagship ? "ring-2 ring-accent shadow-[0_8px_32px_-8px_rgba(147,120,254,0.45)]" : "ring-1 ring-border opacity-95"}`}>
      {flagship && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground whitespace-nowrap uppercase tracking-wider">
          <Sparkles className="h-3 w-3" /> Tu oferta insignia
        </span>
      )}
      {satellite && (
        <span className="absolute -top-2.5 left-4 inline-flex items-center gap-1 rounded-full bg-foreground/85 px-2.5 py-0.5 text-[10px] font-bold text-background uppercase tracking-wider">
          Satélite
        </span>
      )}

      <div className="flex items-center gap-2">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${meta.pillBg}`}>
          <meta.Icon className={`h-3 w-3 ${meta.iconColor}`} />
          {offer.type}
        </span>
      </div>

      {satellite && satelliteRole[offer.type] && (
        <p className="mt-2 text-[11px] font-medium uppercase tracking-wider text-foreground/55">
          {satelliteRole[offer.type]}
        </p>
      )}

      <h3 className="mt-4 font-serif text-2xl leading-tight md:text-3xl">{offer.name}</h3>

      <div className="mt-4 space-y-4 text-sm leading-[1.7] text-foreground/80">
        {offer.type === "OFERTA INSIGNIA" && (
          <>
            <Block label="Transformación" text={offer.transformation} />
            <div>
              <BlockLabel>Qué incluye</BlockLabel>
              <ul className="mt-1.5 space-y-1.5">
                {offer.includes.map((it) => (
                  <li key={it} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-accent/10 p-4">
              <BlockLabel>Precios por fase</BlockLabel>
              <ul className="mt-1.5 space-y-1 text-sm font-medium text-foreground">
                <li><span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Validación · </span>{offer.pricing.validation}</li>
                <li><span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Mercado · </span>{offer.pricing.market}</li>
                <li><span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Avanzado · </span>{offer.pricing.advanced}</li>
              </ul>
            </div>
            <Block label="Cuándo lanzarla" text={offer.whenToLaunch} />
          </>
        )}
        {offer.type === "OFERTA DE PROSPECCION" && (
          <>
            <Block label="Qué resuelve" text={offer.solves} />
            <PillRow leftLabel="Formato" leftText={offer.format} rightLabel="Precio" rightText={offer.price} />
            <Block label="Cuándo lanzarla" text={offer.whenToLaunch} />
          </>
        )}
        {offer.type === "LEAD MAGNET" && (
          <>
            <Block label="Qué resuelve" text={offer.solves} />
            <Block label="Por qué es valioso" text={offer.whyValuable} />
            <PillRow leftLabel="Formato" leftText={offer.format} rightLabel="Precio" rightText={offer.price} />
          </>
        )}
        {offer.type === "CONTINUIDAD" && (
          <>
            <Block label="Para quién" text={offer.forWhom} />
            <div>
              <BlockLabel>Incluye al mes</BlockLabel>
              <ul className="mt-1.5 space-y-1.5">
                {offer.includes.map((it) => (
                  <li key={it} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <PillRow leftLabel="Formato" leftText={offer.format} rightLabel="Precio" rightText={offer.price} />
            <Block label="Cuándo lanzarla" text={offer.whenToLaunch} />
          </>
        )}
      </div>
    </div>
  );
}

function BlockLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[10px] font-bold uppercase tracking-wider text-accent">{children}</div>;
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <BlockLabel>{label}</BlockLabel>
      <p className="mt-1 whitespace-pre-line text-foreground/80">{text}</p>
    </div>
  );
}

function PillRow({ leftLabel, leftText, rightLabel, rightText }: { leftLabel: string; leftText: string; rightLabel: string; rightText: string }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-lg bg-muted/60 p-3">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{leftLabel}</div>
        <div className="mt-0.5 text-sm font-medium text-foreground">{leftText}</div>
      </div>
      <div className="rounded-lg bg-mint/30 p-3">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{rightLabel}</div>
        <div className="mt-0.5 text-sm font-semibold text-foreground">{rightText}</div>
      </div>
    </div>
  );
}

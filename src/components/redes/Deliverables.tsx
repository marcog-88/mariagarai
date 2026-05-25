import { Star } from "lucide-react";
import { StripeBuyButton } from "@/components/redes/StripeBuyButton";
import deliverablesMockup from "@/assets/redes-deliverables-mockup-animated.gif";

const phases = [
  { n: "0", label: "Arranque", title: "FASE 0 — ARRANQUE", body: "Configuramos ambos canales. Todo a punto para arrancar sin líos técnicos ni procrastinación." },
  { n: "1", label: "Semana 1", title: "FASE 1 — ESTRATEGIA Y POSICIONAMIENTO", body: "Perfiles optimizados para autoridad y venta desde el día 1. Posicionamiento claro en ambos canales." },
  { n: "2", label: "Semana 2", title: "FASE 2 — CONSTRUCCIÓN Y CONTENIDO", body: "Pilares, formatos y estrategia de reutilización. Calendario de contenido. Activos que guían a la venta." },
  { n: "3", label: "Semana 3", title: "FASE 3 — CRECIMIENTO Y PROSPECCIÓN", body: "Estrategia de prospección activa en LinkedIn y Substack. Cómo abrir conversaciones que terminan en ventas — sin parecer spam ni una pesada. Tu manual de ventas para ambos canales." },
  { n: "4", label: "Semana 4", title: "FASE 4 — VENTAS AVANZADAS", body: "Automatizaciones exclusivas. Email marketing básico: secuencias y broadcasts que convierten suscriptores en clientes. Estrategias de prospección que solo el 1% usa en el mercado hispano." },
];

export const Deliverables = () => {
  return (
    <section id="metodo" className="pt-24 md:pt-32 pb-12 md:pb-16 bg-background">
      <div className="container-tight">
        <p className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          Lo que montamos
        </p>
        <p className="text-base md:text-2xl text-foreground/70 mb-12 font-sans">
          Cero teoría. 100% acción. 30 días. 30 acciones.
        </p>

        {/* Mockup */}
        <div className="mb-16 rounded-2xl overflow-hidden bg-[#f9f9f7] relative max-w-[85%] mx-auto">
          <img
            src={deliverablesMockup}
            alt="Lo que montamos en Redes que Venden: LinkedIn, Substack, prospección y crecimiento de suscriptoras"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>

        <div className="relative">
          <div className="space-y-8">
            {phases.map((step, idx) => (
              <div key={step.n} className="relative pl-16 md:pl-24">
                <div
                  className="absolute left-6 md:left-8 -translate-x-1/2 top-14 md:top-[4.5rem] -bottom-10 w-px"
                  style={{ background: "#0c0d0e" }}
                  aria-hidden
                />
                <div
                  className="absolute left-0 top-2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-serif text-base md:text-lg text-[#0c0d0e] shadow-md"
                  style={{ background: "hsl(var(--mint))", border: "2px solid #0c0d0e" }}
                >
                  {step.n}
                </div>

                <div className="rounded-xl bg-[#0c0d0e] text-white p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-4">
                    <span
                      className="self-start text-xs uppercase tracking-[0.18em] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 md:order-2"
                      style={{ background: "#e88f00", color: "#ffffff" }}
                    >
                      {step.label}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-white leading-tight md:order-1">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white/75 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live session panel */}
        <div className="relative pl-0 mt-8">
          {/* Connector line from step 5 down into the Live Session card */}
          <div
            className="absolute left-6 md:left-8 -translate-x-1/2 -top-8 h-8 w-px"
            style={{ background: "#0c0d0e" }}
            aria-hidden
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LEFT — Video panel */}
            <div className="rounded-xl bg-[#0c0d0e] p-5 flex flex-col gap-4">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-white/10">
                <video
                  src={new URL("@/assets/live-session.mp4", import.meta.url).href}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-label="Vista previa de una sesión en vivo con María y participantes"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#ff0000] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden />
                  LIVE SESSION
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Redes que Venden · 30 días</p>
                <p className="text-white/60 text-sm mt-1">
                  Las participantes convierten LinkedIn y Substack en su canal de autoridad, captación y ventas.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white font-bold text-sm">4.9</span>
                  <span className="text-white/60 text-sm">· 12 alumnas</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Info grid (2x2) */}
            <div className="grid grid-cols-2 gap-3 h-full">
              {[
                { label: "DURACIÓN", value: "30 DÍAS", sub: "Programa en vivo" },
                { label: "FORMATO", value: "EN VIVO", sub: "Sesiones semanales" },
                { label: "PRECIO", value: "€497", sub: "Pago único" },
                { label: "INICIO", value: "JUN 2026", sub: "Próxima cohorte" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border bg-[#0c0d0e] p-4 flex flex-col justify-center"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/50">{item.label}</p>
                  <p
                    className="text-xl md:text-3xl font-black leading-none mt-2"
                    style={{ color: "#e88f00" }}
                  >
                    {item.value}
                  </p>
                  <p className="text-xs text-white/60 mt-1.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 italic text-sm md:text-base text-center" style={{ color: "#e88f00" }}>
            Tu mayor activo no es el contenido. Es el acceso directo.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <StripeBuyButton />
        </div>
      </div>
    </section>
  );
};

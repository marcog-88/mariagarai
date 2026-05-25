import { Check, Star } from "lucide-react";
import { TidyCalButton } from "./TidyCalButton";
import deliverablesMockup from "@/assets/construye-deliverables-mockup-keyed.webp";
import liveSessionGif from "@/assets/live-session.gif";

const timeline = [
  {
    n: "1",
    week: "Semanas 1-2",
    phase: "Claridad y oferta",
    title: "Tu sistema operativo completo en Notion",
    body: "Todo tu negocio en un solo lugar. Personalizado para ti. Plug and play.",
    bullets: [
      "CRM — gestiona todos tus leads y clientes en un solo tablero.",
      "Dashboard financiero — tus ingresos, gastos y proyecciones visibles de un vistazo.",
      "Sistema de contenido — planifica, crea y reutiliza tu contenido desde un solo lugar.",
      "Seguimiento de clientes — cada cliente tiene su ficha con notas, sesiones y progreso.",
      "Planificación semanal y mensual — sabes exactamente qué toca hacer cada semana.",
    ],
    outcome: "Tu oferta está lista",
  },
  {
    n: "2",
    week: "Semanas 3-4",
    phase: "Presencia online",
    title: "Tu web personal en Lovable",
    body: "Una web profesional que dice quién eres, qué haces y cómo trabajar contigo.",
    bullets: [
      "Paso a paso de cómo montar tu web en Lovable",
      "El copy completo de tu web — escrito contigo en sesión",
      "Montada y publicada durante el programa",
      "Sin diseñador. Sin programador.",
    ],
    outcome: "Tu web está activa",
  },
  {
    n: "3",
    week: "Semanas 3-4",
    phase: "Presencia online",
    title: "Tu sales page",
    body: "La página que vende mientras tú duermes.",
    bullets: [
      "Sales page completa para tu oferta principal",
      "Copy escrito contigo en sesión",
      "Publicada y lista para recibir pagos",
    ],
    outcome: "Tu oferta acepta pagos",
  },
  {
    n: "4",
    week: "Semanas 5-6",
    phase: "Embudo y automatización",
    title: "Tu embudo de captación",
    body: "El sistema que capta leads y los convierte en clientes de forma automática.",
    bullets: [
      "Lead magnet creado y publicado",
      "Secuencia de emails de bienvenida",
      "Integración completa con tu web",
    ],
    outcome: "Tu embudo funciona solo",
  },
  {
    n: "5",
    week: "Semanas 7-8",
    phase: "Lanzamiento y primera venta",
    title: "Tu motor de contenido con IA",
    body: "Crea contenido de forma sistemática sin depender de la inspiración.",
    bullets: [
      "Sistema de repurposing: una idea, múltiples formatos",
      "Plantillas de LinkedIn y Substack",
      "Flujo de trabajo con IA integrado",
    ],
    outcome: "Primera venta cerrada",
  },
];

export const Deliverables = () => {
  return (
    <section id="metodo" className="py-24 md:py-32 bg-background">
      <div className="container-tight">
        <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#9378fe" }}>
          Lo que montamos
        </p>
        <p className="text-base md:text-2xl text-foreground/70 mb-12 font-sans">
          Sales con infraestructura real. No con apuntes.
        </p>

        {/* Mockup */}
        <div className="mb-16 rounded-2xl overflow-hidden bg-[#f9f9f7] relative">
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{ left: "29%", top: "23.31%", width: "43.17%", height: "44.92%", backgroundColor: "#000", zIndex: 0 }}
          />
          <img
            src={liveSessionGif}
            alt=""
            aria-hidden
            className="absolute pointer-events-none"
            style={{ left: "29%", top: "23.31%", width: "43.17%", height: "44.92%", zIndex: 1, objectFit: "cover" }}
          />
          <img
            src={deliverablesMockup}
            alt="Lo que montamos en Construye: web, dashboard Notion, embudo, automatización IA, CRM y primera venta"
            className="w-full h-auto block relative"
            style={{ zIndex: 2 }}
            loading="lazy"
          />
        </div>

        {/* Timeline header */}
        <p
          className="mt-16 md:mt-24 mb-10 text-xs md:text-xs lg:text-sm font-medium uppercase tracking-[0.24em] md:tracking-[0.08em] lg:tracking-[0.24em]"
          style={{ color: "#0c0d0e" }}
        >
          Qué pasa cada semana — los 5 sistemas que construimos juntas
        </p>

        {/* Vertical timeline: 5 modules + week info combined */}
        <div className="relative">
          <div className="space-y-8">
            {timeline.map((step, idx) => (
              <div key={step.n} className="relative pl-16 md:pl-24">
                {/* Connecting line segment (skip after last) */}
                <div
                  className="absolute left-6 md:left-8 -translate-x-1/2 top-14 md:top-[4.5rem] -bottom-10 w-px"
                  style={{ background: "#0c0d0e" }}
                  aria-hidden
                />
                {/* Numbered marker */}
                <div
                  className="absolute left-0 top-2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-serif text-xl md:text-2xl text-[#0c0d0e] shadow-md"
                  style={{ background: "#d0fcd0", border: "2px solid #0c0d0e" }}
                >
                  {step.n}
                </div>

                {/* Card */}
                <div className="rounded-xl bg-[#0c0d0e] text-white p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-3">
                    <span
                      className="self-start text-xs uppercase tracking-[0.18em] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 md:order-2"
                      style={{ background: "#d0fcd0", color: "#0c0d0e" }}
                    >
                      {step.week}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-white leading-tight md:order-1">
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="text-xs uppercase tracking-[0.18em] font-medium mb-5"
                    style={{ color: "#ffffff", opacity: 0.5 }}
                  >
                    {step.phase}
                  </p>
                  <p className="text-white/75 leading-relaxed mb-6">{step.body}</p>

                  <ul className="space-y-2.5 mb-6">
                    {step.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/85">
                        <Check
                          className="w-5 h-5 text-mint flex-shrink-0 mt-0.5"
                          strokeWidth={2.5}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-5 border-t border-white/10">
                    <span
                      className="inline-block text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{ background: "#d0fcd0", color: "#0c0d0e" }}
                    >
                      ✓ {step.outcome}
                    </span>
                  </div>
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
                <p className="text-white font-bold text-sm">Construye · 8 semanas</p>
                <p className="text-white/60 text-sm mt-1">
                  Las participantes construyen su negocio completo: web, embudo, sistemas y primera venta.
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
                { label: "DURACIÓN", value: "8 SEM", sub: "Programa en vivo" },
                { label: "FORMATO", value: "EN VIVO", sub: "Sesiones quincenales" },
                { label: "PRECIO", value: "€1997", sub: "Pago único" },
                { label: "INICIO", value: "JUL 2026", sub: "Próxima cohorte" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border bg-[#0c0d0e] p-4 flex flex-col justify-center"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/50">{item.label}</p>
                  <p
                    className="text-xl md:text-3xl font-black leading-none mt-2"
                    style={{ color: "#d0fcd0" }}
                  >
                    {item.value}
                  </p>
                  <p className="text-xs text-white/60 mt-1.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 italic text-sm md:text-base text-center" style={{ color: "#d0fcd0" }}>
            Tu mayor activo no es el contenido. Es el acceso directo.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <a href="https://mariagarai.activehosted.com/f/11" target="_blank" rel="noopener noreferrer" className="btn-mint-lg">
            Unirme a la lista de espera <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

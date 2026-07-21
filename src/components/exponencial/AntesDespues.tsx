import { Check } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

const formula = [
  {
    n: "1",
    label: "La Fórmula",
    title: "Tu Plan de Negocio",
    subtitle: "Qué vendes, a quién y por qué a ti",
    bullets: [
      "Aterrizamos tu nicho de experta, tu avatar con mayor capacidad de compra y tu propuesta de valor.",
    ],
    outcome: "Sabes exactamente qué vendes, a quién y cómo comunicarlo.",
  },
  {
    n: "2",
    label: "La Fórmula",
    title: "Tu Oferta de más de 2.000€",
    subtitle: "Tu método propio, empaquetado",
    bullets: [
      "Diseñamos la fórmula óptima de empaquetar tu conocimiento y aterrizamos tu programa: módulos, lecciones, bonos, precio.",
      "Sales al mercado antes de construirlo entero: con tus mensajes de venta redactados y nuestro apoyo, prevendes tu programa a clientes reales.",
    ],
    outcome: "La mejor oferta, lista para venderse.",
  },
  {
    n: "3",
    label: "La Fórmula",
    title: "Tu Embudo de Ventas",
    subtitle: "Motores de captación automatizados",
    bullets: [
      "Creamos un lead magnet de diagnóstico que genera un efecto wow y lanzamos un webinar que vende en directo.",
      "Montamos las secuencias de email marketing.",
    ],
    outcome: "Leads constantes, sin perseguir a nadie.",
  },
];

const maquina = [
  {
    title: "Tu página de venta de alta conversión, publicada.",
    body: "Sección a sección, con tu copy, tu historia y tu oferta, lista para vender.",
  },
  {
    title: "Tu lead magnet con IA",
    body: "Tu lead magnet de diagnóstico con IA que hace sentir a cada lead que le han leído la mente.",
  },
  {
    title: "Tu embudo captando clientes en automático.",
    body: "Tu secuencia de email marketing escrita y programada, y tu sistema de webinar para vender en directo.",
  },
  {
    title: "Tu academia, con tus módulos y tus lecciones dentro.",
    body: "Tu plataforma propia, con la imagen profesional que tu conocimiento merece, sin pagar cuotas a nadie.",
  },
  {
    title: "Tu CRM y panel de admin, sencillo y funcionando sin dolores de cabeza.",
    body: "",
  },
];

export const AntesDespues = () => {
  return (
    <section className="py-20 md:py-28" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <Reveal>
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
            Qué construimos
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight max-w-4xl mb-4">
            Tu programa online{" "}
            <em className="font-serif italic text-[#9378fe]">montado y vendiendo.</em>
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-foreground/60 mb-14">
            La estrategia con apoyo humano. La infraestructura con apoyo IA.
          </p>
        </Reveal>

        {/* LA FÓRMULA — defines, validas y vendes */}
        <Reveal>
          <div className="mb-10">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.24em]" style={{ color: "#9378fe" }}>
              La Fórmula
            </p>
            <p className="mt-2 text-base md:text-lg text-foreground/70">Defines, validas y vendes.</p>
          </div>
        </Reveal>

        {/* Vertical timeline */}
        <div className="relative">
          <div className="space-y-10">
            {formula.map((step, idx) => (
              <Reveal key={step.n} delay={80} className="relative pl-12 md:pl-20">
                {/* Connecting line segment that draws itself in */}
                {idx < formula.length - 1 && (
                  <div
                    className="timeline-seg absolute left-4 md:left-6 -translate-x-1/2 top-12 md:top-14 -bottom-12 w-px"
                    style={{ background: "linear-gradient(to bottom, #9378fe, rgba(147,120,254,0.25))" }}
                    aria-hidden
                  />
                )}
                {/* Numbered marker */}
                <div
                  className="absolute left-0 top-1 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center font-serif text-base md:text-xl"
                  style={{
                    background: "rgba(147,120,254,0.12)",
                    border: "1.5px solid #9378fe",
                    color: "#7c60e8",
                  }}
                >
                  {step.n}
                </div>

                {/* Card */}
                <div className="card-lift rounded-xl bg-[#0c0d0e] text-white p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-2">
                    <span
                      className="self-start text-[11px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 md:order-2"
                      style={{ background: "rgba(147,120,254,0.18)", color: "#b7a5ff", border: "1px solid rgba(147,120,254,0.4)" }}
                    >
                      {step.label}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-white leading-tight md:order-1">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs uppercase tracking-[0.18em] font-medium mb-6 text-white/45">
                    {step.subtitle}
                  </p>

                  <ul className="space-y-2.5">
                    {step.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/85">
                        <Check className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-[#9378fe]/30 flex flex-col gap-1">
                    <span
                      className="text-[10px] uppercase tracking-[0.18em] font-bold"
                      style={{ color: "#d0fcd0" }}
                    >
                      Resultado
                    </span>
                    <span className="font-serif italic text-lg leading-snug" style={{ color: "#b7a5ff" }}>
                      {step.outcome}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* LA MÁQUINA — lo montamos todo */}
        <Reveal>
          <div className="mt-20 mb-10">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.24em]" style={{ color: "#9378fe" }}>
              La Máquina
            </p>
            <p className="mt-2 text-base md:text-lg text-foreground/70">Lo montamos todo.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {maquina.map((m, i) => (
            <Reveal key={m.title} delay={(i % 2) * 130}>
              <div className="card-lift h-full rounded-xl bg-white border-2 border-[#9378fe]/25 p-8">
                <div className="flex items-start gap-3">
                  <span
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 mt-0.5 text-white text-xs"
                    style={{ background: "#9378fe" }}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <div>
                    <h3 className="font-serif text-lg md:text-xl leading-snug text-foreground">{m.title}</h3>
                    {m.body && <p className="mt-3 text-foreground/70 leading-relaxed">{m.body}</p>}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p
            className="mt-14 font-serif text-2xl md:text-3xl italic text-center max-w-3xl mx-auto"
            style={{ color: "#9378fe" }}
          >
            Convierte tu conocimiento en un activo exponencial: tu programa online, con tu método, academia propia y sistemas automatizados.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://tidycal.com/mariagarai/exploracion"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mint-lg !text-base md:!text-lg whitespace-nowrap border-2 border-[#0c0d0e] !text-[#0c0d0e]"
              style={{ boxShadow: "4px 4px 0 0 #0c0d0e" }}
            >
              Quiero construir esto
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

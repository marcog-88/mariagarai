import { Check } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

const months = [
  {
    n: "1",
    label: "MES 1",
    title: "Tu Programa Insignia",
    subtitle: "El modelo de negocio que lo cambia todo",
    bullets: [
      "Pivotamos tu negocio: de vender tiempo y servicios sueltos a un solo programa de formación de alto valor.",
      "Definimos tu método propio, tu avatar ideal y el currículum de tu programa.",
      "Manual de marca: tu mensaje, tu posicionamiento, tu diferenciación.",
      "Validamos rápido con clientes reales antes de construir nada.",
    ],
    outcome: "Tienes el modelo correcto y un programa que vende, no mil ideas sueltas.",
  },
  {
    n: "2",
    label: "MES 2",
    title: "Tu Marca de Autoridad",
    subtitle: "LinkedIn + Substack",
    bullets: [
      "Perfil de LinkedIn optimizado para autoridad y venta.",
      "Substack lanzado y creciendo.",
      "Estrategia de contenido con criterio (no publicar por publicar).",
      "Sistema de ideación y reutilización de contenido con IA.",
    ],
    outcome: "Dejas de ser invisible. Los clientes empiezan a llegar a ti.",
  },
  {
    n: "3",
    label: "MES 3",
    title: "Tus Ventas",
    subtitle: "El sistema que vende por ti",
    bullets: [
      "Manual de ventas adaptado a ti y guion de llamada.",
      "Guion de objeciones reales de tu cliente.",
      "El embudo de captación que mejor encaja con tu caso, montado.",
      "Sistema de prospección más allá de tu círculo.",
    ],
    outcome: "Vendes cada semana, sin presión y más allá de tu entorno.",
  },
  {
    n: "4",
    label: "MES 4",
    title: "Tu Infraestructura con IA",
    subtitle: "Tu máquina, llave en mano",
    bullets: [
      "Tu web y tu sales page que venden el programa.",
      "Tu academia montada, donde alojas tu formación.",
      "Notion como sistema operativo: CRM, finanzas, contenido, clientes.",
      "Claude configurado como tu socia operativa y las automatizaciones donde tocan.",
    ],
    outcome: "Sales siendo dueña de toda la máquina. Sin atascarte con lo técnico.",
  },
];

export const AntesDespues = () => {
  return (
    <section className="py-20 md:py-28" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <Reveal>
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
            Qué construimos cada mes
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight max-w-none md:whitespace-nowrap mb-14">
            Cuatro meses. Cuatro activos. <em className="font-serif italic text-[#9378fe]">Montados, no hablados.</em>
          </h2>
        </Reveal>

        {/* Vertical timeline */}
        <div className="relative">
          <div className="space-y-10">
            {months.map((step, idx) => (
              <Reveal key={step.n} delay={80} className="relative pl-12 md:pl-20">
                {/* Connecting line segment that draws itself in */}
                {idx < months.length - 1 && (
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

                  <div className="mt-6 pt-5 border-t border-[#9378fe]/30 flex items-start gap-3">
                    <span
                      className="text-[10px] uppercase tracking-[0.18em] font-bold mt-1 flex-shrink-0"
                      style={{ color: "#9378fe" }}
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

        <Reveal>
          <p className="mt-8 italic text-sm md:text-base text-center text-[#0c0d0e]/70">
            Máximo 2 clientas nuevas al mes.
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

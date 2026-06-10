import { Check } from "lucide-react";

const months = [
  {
    n: "1",
    label: "MES 1",
    title: "Tu Oferta Exponencial",
    subtitle: "Oferta de servicios y formación insignia",
    intro: "Claridad total sobre qué vendes, a quién y a qué precio.",
    bullets: [
      "Tu oferta insignia de alto valor empaquetada.",
      "Manual de marca personalizado: tu mensaje, tu posicionamiento, tu diferenciación.",
      "Primeras conversaciones de venta abiertas y validación con clientes reales.",
    ],
    outcome: "La forma optimizada de facturar el máximo sin quemarte.",
  },
  {
    n: "2",
    label: "MES 2",
    title: "Tu Marca de Autoridad",
    subtitle: "LinkedIn + Substack",
    intro: "Los clientes empiezan a llegar a ti.",
    bullets: [
      "Perfil de LinkedIn optimizado para autoridad y venta.",
      "Substack lanzado y creciendo.",
      "Estrategia de contenido mensual con criterio (no publicar por publicar).",
      "Sistema de ideación y reutilización de contenido con IA.",
    ],
    outcome: "Los clientes empiezan a llegar a ti.",
  },
  {
    n: "3",
    label: "MES 3",
    title: "Tus Ventas Automatizadas",
    subtitle: "Ventas + captación",
    intro: "Empiezan a llegar extraños que quieren comprarte.",
    bullets: [
      "Manual de ventas adaptado a ti y guión de llamada.",
      "Guión de objeciones reales de tu cliente.",
      "El embudo de captación que mejor encaja con tu caso, montado.",
      "Sistema de prospección activa más allá de tu círculo.",
    ],
    outcome: "Empiezan a llegar extraños que quieren comprarte.",
  },
  {
    n: "4",
    label: "MES 4",
    title: "Tu Infraestructura con IA",
    subtitle: "Tus escaparates y cimientos",
    intro: "Sales con un negocio que se ve tan profesional como tú.",
    bullets: [
      "Notion como sistema operativo: CRM, finanzas, contenido, clientes.",
      "Claude configurado como tu socia operativa.",
      "Automatizaciones donde tocan.",
      "Web y landing que sabes gestionar.",
    ],
    outcome: "Sales con un negocio que se ve tan profesional como tú.",
  },
];

export const AntesDespues = () => {
  return (
    <section className="py-20 md:py-28" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          Qué construimos cada mes
        </p>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight max-w-none whitespace-nowrap mb-14">
          Cuatro meses. Cuatro activos. Una dirección clara.
        </h2>

        {/* Vertical timeline */}
        <div className="relative">
          <div className="space-y-8">
            {months.map((step, idx) => (
              <div key={step.n} className="relative pl-16 md:pl-24">
                {/* Connecting line segment - skip after last item */}
                {idx < months.length - 1 && (
                  <div
                    className="absolute left-6 md:left-8 -translate-x-1/2 top-14 md:top-[4.5rem] -bottom-10 w-px"
                    style={{ background: "#9378fe" }}
                    aria-hidden
                  />
                )}
                {/* Numbered marker */}
                <div
                  className="absolute left-0 top-2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-serif text-xl md:text-2xl text-white shadow-md"
                  style={{ background: "#9378fe", border: "2px solid #0c0d0e" }}
                >
                  {step.n}
                </div>

                {/* Card */}
                <div className="rounded-xl bg-[#0c0d0e] text-white p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-3">
                    <span
                      className="self-start text-xs uppercase tracking-[0.18em] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 md:order-2"
                      style={{ background: "#9378fe", color: "#ffffff" }}
                    >
                      {step.label}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-white leading-tight md:order-1">
                      {step.title}
                    </h3>
                  </div>

                  <p
                    className="text-xs uppercase tracking-[0.18em] font-medium mb-5"
                    style={{ color: "#ffffff", opacity: 0.5 }}
                  >
                    {step.subtitle}
                  </p>
                  <p className="text-white/75 leading-relaxed mb-6">{step.intro}</p>

                  <ul className="space-y-2.5 mb-6">
                    {step.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/85">
                        <Check
                          className="w-5 h-5 text-white flex-shrink-0 mt-0.5"
                          strokeWidth={2.5}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-4 border-t border-[#9378fe]/40 flex items-start gap-3">
                    <Check
                      className="w-5 h-5 text-[#9378fe] flex-shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm font-semibold" style={{ color: "#9378fe" }}>
                      {step.outcome}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 italic text-sm md:text-base text-center text-[#0c0d0e]/70">
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
            Comprueba si encajas
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

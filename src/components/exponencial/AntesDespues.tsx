import { Check } from "lucide-react";

const months = [
  {
    n: "1",
    label: "MES 1",
    title: "Claridad total",
    subtitle: "Oferta",
    intro: "El trabajo que define todo lo demás. Sin esto, nada que construyas después funciona.",
    bullets: [
      "Claridad total sobre qué vendes, a quién y a qué precio.",
      "Manual de marca personal.",
      "Primeras conversaciones de venta abiertas.",
    ],
    outcome: "Ya no vas a ciegas.",
  },
  {
    n: "2",
    label: "MES 2",
    title: "Primeras ventas",
    subtitle: "Ventas",
    intro: "Dejamos de suponer y empezamos a cobrar. Aquí es donde el negocio se vuelve real.",
    bullets: [
      "Primeras ventas cerradas con clientes reales.",
      "Manual de ventas adaptado a ti.",
      "Sistema de prospección funcionando.",
    ],
    outcome: "El dinero empieza a moverse.",
  },
  {
    n: "3",
    label: "MES 3",
    title: "Activos trabajando",
    subtitle: "Presencia digital",
    intro: "Construimos los escaparates que atraen mientras tú vives. Una vez montados, trabajan sin ti.",
    bullets: [
      "Presencia digital profesional activa.",
      "LinkedIn publicando.",
      "Substack creciendo.",
      "Web y embudo publicados.",
    ],
    outcome: "Los activos trabajan mientras tú vives.",
  },
  {
    n: "4",
    label: "MES 4",
    title: "Sistema completo",
    subtitle: "Sistemas con IA",
    intro: "La infraestructura que convierte un negocio dependiente de tu tiempo en algo exponencial.",
    bullets: [
      "Infraestructura con IA montada.",
      "Notion como cerebro del negocio.",
      "Plan de escalado diseñado.",
    ],
    outcome: "Sales con un negocio que funciona sin ti cada hora.",
  },
];

export const AntesDespues = () => {
  return (
    <section className="py-20 md:py-28" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          Qué pasa cada mes
        </p>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight max-w-3xl mb-14">
          Cuatro meses con una dirección clara
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
            className="btn-mint-lg !text-base md:!text-lg whitespace-nowrap"
            style={{ boxShadow: "4px 4px 0 0 #0c0d0e" }}
          >
            Solicitar llamada
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

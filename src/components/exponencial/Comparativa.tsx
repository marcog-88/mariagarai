import { Reveal } from "@/components/landing/Reveal";

export const Comparativa = () => {
  const rows = [
    { item: "Definición y validación de oferta de más de 2.000€", market: "€1.500 – €3.000" },
    { item: "Copy y estructura de página de venta de alta conversión", market: "€1.500 – €3.500" },
    { item: "Academia montada con tus lecciones (plataforma propia)", market: "€2.000 – €4.000" },
    { item: "Lead magnet interactivo de diagnóstico con IA", market: "€2.000 – €3.000" },
    { item: "Embudo de captación + email marketing montado", market: "€1.000 – €2.500" },
    { item: "Sistema de webinar de venta", market: "€1.000 – €2.000" },
    { item: "CRM y sistema operativo del negocio", market: "€1.500 – €3.000" },
    { item: "Acompañamiento experto 1:1 y grupal durante 90 días", market: "€2.000 – €5.000" },
  ];

  return (
    <section className="pt-24 md:pt-32 pb-8 bg-background">
      <div className="container-tight">
        <Reveal>
          <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            Lo que te ahorras
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight">
            Lo que montas en 90 días, por separado, cuesta cinco veces más.
          </h2>
        </Reveal>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 pr-8 text-xs font-medium uppercase tracking-wider text-foreground/60">SERVICIO</th>
                <th className="pb-3 pr-8 text-xs font-medium uppercase tracking-wider text-foreground/60">PRECIO DE MERCADO</th>
                <th className="pb-3 text-xs font-medium uppercase tracking-wider text-mint">EN EXPONENCIAL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {rows.map((r, i) => (
                <Reveal key={r.item} as="tr" delay={Math.min(i * 60, 360)}>
                  <td className="py-4 pr-8 text-foreground/80">{r.item}</td>
                  <td className="py-4 pr-8 text-foreground/50 line-through">{r.market}</td>
                  <td className="py-4 text-mint font-medium">
                    <span className="inline-flex items-center gap-2">
                      <span aria-hidden>✓</span>
                      Incluido
                    </span>
                  </td>
                </Reveal>
              ))}
            </tbody>
          </table>
        </div>

        {/* The receipt moment */}
        <Reveal variant="scale">
          <div
            className="mt-10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{
              background: "#0c0d0e",
              boxShadow: "0 24px 60px -24px rgba(147,120,254,0.45)",
            }}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/50 mb-2">
                Contratado por separado
              </p>
              <p className="font-serif text-3xl md:text-4xl text-white/45 line-through decoration-[#9378fe]/70 decoration-2">
                €12.500 – €26.000
              </p>
            </div>
            <div
              aria-hidden
              className="hidden md:block text-3xl"
              style={{ color: "#9378fe" }}
            >
              →
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] mb-2" style={{ color: "#b7a5ff" }}>
                En Exponencial, todo incluido
              </p>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-2xl md:text-3xl text-white/40 line-through decoration-white/40">
                  €4500
                </span>
                <span className="font-serif text-5xl md:text-6xl" style={{ color: "#9378fe" }}>
                  €3000
                </span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.18em]" style={{ color: "#d0fcd0" }}>
                Precio de lanzamiento
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

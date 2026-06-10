export const Comparativa = () => {
  const rows = [
    { item: "Estrategia de marca personal y posicionamiento", market: "€2.000 – €4.000", expo: "Incluido" },
    { item: "Definición y validación de oferta de alto valor", market: "€1.500 – €3.000", expo: "Incluido" },
    { item: "Auditoría, montaje y optimización de redes (LinkedIn + Substack)", market: "€1.000 – €2.500", expo: "Incluido" },
    { item: "Estrategia de contenidos y sistema de reutilización con IA", market: "€1.500 – €3.000", expo: "Incluido" },
    { item: "Manual de ventas y sistema de prospección", market: "€1.000 – €2.500", expo: "Incluido" },
    { item: "Embudo de captación + email marketing montado", market: "€1.000 – €2.500", expo: "Incluido" },
    { item: "Copy y estructura de sales page", market: "€1.500 – €3.500", expo: "Incluido" },
    { item: "Lead magnet interactivo tipo app", market: "€2.000 – €3.000", expo: "Incluido" },
    { item: "Sistema operativo completo en Notion", market: "€1.500 – €3.000", expo: "Incluido" },
    { item: "Claude configurado + automatizaciones con IA", market: "€1.000 – €2.500", expo: "Incluido" },
    { item: "17 sesiones de consultoría estratégica 1:1", market: "€3.400 – €8.500", expo: "Incluido" },
  ];

  return (
    <section className="pt-24 md:pt-32 pb-8 bg-background">
      <div className="container-tight">
        <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          Lo que te ahorras
        </p>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight">
          Lo que montas en 4 meses, por separado, cuesta el triple.
        </h2>

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
              {rows.map((r) => (
                <tr key={r.item}>
                  <td className="py-4 pr-8 text-foreground/80">{r.item}</td>
                  <td className="py-4 pr-8 text-foreground/50 line-through">{r.market}</td>
                  <td className="py-4 text-mint font-medium">
                    <span className="inline-flex items-center gap-2">
                      <span aria-hidden>✓</span>
                      {r.expo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-border">
                <td className="pt-5 pb-2 pr-8 font-bold text-foreground">TOTAL</td>
                <td className="pt-5 pb-2 pr-8 text-foreground/50 line-through font-bold">€18.400 – €38.000</td>
                <td className="pt-5 pb-2 text-mint font-bold text-lg">€4.500</td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    </section>
  );
};

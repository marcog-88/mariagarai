const rows = [
  ["Web profesional diseñada", "€3000 – 5000"],
  ["Landing page / sales page", "€1500 – 2500"],
  ["Lead magnet interactivo tipo app", "€2000 – 3000"],
  ["Setup de Notion completo", "€1500 – 2500"],
  ["Embudo de captación montado", "€1500 – 2000"],
  ["Setup de IA y automatizaciones", "€1000 – 2000"],
  ["Asistente virtual 3 meses", "€1200 – 1800"],
];

export const Comparativa = () => {
  return (
    <section className="pt-24 md:pt-32 pb-8 bg-background">
      <div className="container-tight">
        <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#9378fe" }}>
          Lo que te ahorras
        </p>
        <h2 className="font-serif text-[clamp(1.25rem,4.5vw,3.25rem)] leading-tight tracking-tight max-w-3xl whitespace-nowrap md:whitespace-normal">
          Si contrataras todo esto por separado:
        </h2>

        {/* Desktop table */}
        <div className="mt-12 hidden md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="py-5 px-6 text-sm uppercase tracking-wider text-foreground/60 font-medium">
                  Item
                </th>
                <th className="py-5 px-6 text-sm uppercase tracking-wider text-foreground/60 font-medium">
                  Contratar fuera
                </th>
                <th className="py-5 px-6 text-sm uppercase tracking-wider text-foreground/60 font-medium">
                  En Construye
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-border/60">
                  <td className="py-5 px-6 text-foreground">{r[0]}</td>
                  <td className="py-5 px-6 text-foreground/60">{r[1]}</td>
                  <td className="py-5 px-6 text-foreground">
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-mint text-mint-foreground text-xs">✓</span>
                      Incluido
                    </span>
                  </td>
                </tr>
              ))}
              <tr style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}>
                <td className="py-8 px-6 font-serif text-xl md:text-2xl text-primary-foreground">TOTAL</td>
                <td className="py-8 px-6 text-primary-foreground/60 line-through text-lg">
                  €11700 – 18800
                </td>
                <td className="py-8 px-6">
                  <span className="font-serif text-3xl md:text-4xl font-bold text-mint">
                    €1997
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-12 md:hidden space-y-3">
          {rows.map((r, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-5">
              <p className="font-medium text-foreground mb-3">{r[0]}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Contratar fuera</p>
                  <p className="text-foreground/60 line-through">{r[1]}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground/50 mb-1">En Construye</p>
                  <p className="text-foreground inline-flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-mint text-mint-foreground text-xs">✓</span>
                    Incluido
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div
            className="rounded-xl p-6"
            style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
          >
            <p className="font-serif text-xl text-primary-foreground mb-4">TOTAL</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-1">Contratar fuera</p>
                <p className="text-primary-foreground/60 line-through">€11700 – 18800</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-1">En Construye</p>
                <p className="font-serif text-3xl font-bold text-mint">€1997</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

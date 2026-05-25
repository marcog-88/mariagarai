export const Comparativa = () => {
  const rows = [
    { item: "Mentoría de negocio 1:1 (4 meses)", market: "€3000–€8000", expo: "Incluido" },
    { item: "Estratega de marca personal", market: "€1500–€3000", expo: "Incluido" },
    { item: "Copywriter para sales page y web", market: "€800–€2000", expo: "Incluido" },
    { item: "Consultor de automatización con IA", market: "€1000–€2500", expo: "Incluido" },
    { item: "Setup de embudo y email marketing", market: "€500–€1500", expo: "Incluido" },
    { item: "Acceso a Lanza, Redes y Construye", market: "€3800", expo: "Incluido" },
  ];

  return (
    <section className="pt-24 md:pt-32 pb-8 bg-background">
      <div className="container-tight">
        <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          Lo que te ahorras
        </p>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight max-w-3xl">
          Lo que montas en 4 meses, por separado, cuesta el triple.
        </h2>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full max-w-3xl text-sm md:text-base">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-medium text-foreground/60 pr-8">Servicio</th>
                <th className="pb-3 font-medium text-foreground/60 pr-8">Precio de mercado</th>
                <th className="pb-3 font-medium text-mint">En Exponencial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {rows.map((r) => (
                <tr key={r.item}>
                  <td className="py-4 pr-8 text-foreground/80">{r.item}</td>
                  <td className="py-4 pr-8 text-foreground/50 line-through">{r.market}</td>
                  <td className="py-4 text-mint font-medium">{r.expo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="mt-12 rounded-2xl p-10 md:p-16"
          style={{ background: "#0c0d0e", color: "#ffffff" }}
        >
          <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            La regla del orden correcto
          </p>
          <h3 className="font-serif text-3xl md:text-4xl text-white leading-tight max-w-3xl mb-8">
            El problema no es lo que no sabes. Es el orden en que lo aplicas.
          </h3>
          <div className="max-w-3xl space-y-5 text-lg text-white/85 leading-relaxed">
            <p>
              La mayoría invierte en marketing antes de tener algo que vender. En contenido antes de tener posicionamiento. En herramientas antes de tener sistemas.
            </p>
            <p>
              En EXPONENCIAL hacemos todo en el orden correcto — y eso lo cambia todo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

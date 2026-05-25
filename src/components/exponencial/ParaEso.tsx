const items = [
  "Diseñamos la mejor forma de vender y monetizar tu conocimiento — con varias vías de ingreso que encajan con quien eres.",
  "Construimos tu autoridad en redes — LinkedIn y Substack como activos que trabajan mientras tú vives.",
  "Montamos la infraestructura digital que lo sostiene — web, embudo, IA, sistemas operativos en Notion.",
  "Revisamos cada paso, cada semana, durante 4 meses — no más ruido, acompañamiento que mueve la aguja.",
];

export const ParaEso = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          Para eso existe Exponencial
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-5xl">
          Donde entras con un proyecto a medio montar y sales con{" "}
          <em className="font-serif italic text-mint">una carrera moderna que factura.</em>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((it, i) => (
            <div key={i} className="border-l-2 border-mint pl-6 py-2">
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">{it}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 font-serif text-2xl md:text-3xl text-mint italic">
          No necesitas otro curso. Necesitas a alguien con criterio a tu lado.
        </p>
      </div>
    </section>
  );
};

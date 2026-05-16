const items = [
  "No es otro curso de \"cómo crear tu oferta.\" Es 8 semanas de trabajo real donde construyes tu ecosistema de ofertas completo, lanzas la primera inmediatamente y sales con el sistema para seguir vendiendo el resto.",
  "Ese es el punto de inflexión. No una oferta vendida. La capacidad de lanzar y vender cuando tú decidas.",
];

export const ParaEso = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          Para eso existe Lanza y Vende
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-5xl">
          Donde entras con una idea y sales con tu{" "}
          <em className="font-serif italic text-mint">primera venta cerrada.</em>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((it, i) => (
            <div key={i} className="border-l-2 border-mint pl-6 py-2">
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">{it}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

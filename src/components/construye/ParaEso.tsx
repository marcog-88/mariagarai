const items = [
  "Construye no es un curso de herramientas. Es montar tu negocio completo usando las herramientas correctas.",
  "Es crear activos e infraestructura real. Es que tu negocio tenga los escaparates que merece.",
  "Es que puedas crear un efecto WOW en tus leads y clientes.",
  "Y que esto no te cueste ni miles de euros ni un montón de tiempo.",
];

export const ParaEso = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          Para eso existe Construye
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-5xl">
          Donde entras con un negocio a medio montar y sales con uno que funciona como una{" "}
          <em className="font-serif italic text-mint">empresa seria.</em>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((it, i) => (
            <div key={i} className="border-l-2 border-mint pl-6 py-2">
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">{it}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 font-serif text-3xl md:text-3xl text-mint leading-snug max-w-4xl">
          Aquí no aprendes herramientas — construyes tu negocio con IA.
        </p>
      </div>
    </section>
  );
};

export const Truth = () => {
  const items = [
    { emoji: "🙅‍♀️", text: "Sin perfil técnico" },
    { emoji: "💻", text: "Sin saber programar" },
    { emoji: "🙋‍♀️", text: "Sin contratar a nadie" },
  ];
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          La verdad
        </p>
        <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] tracking-tight text-primary-foreground max-w-4xl">
          Antes costaba meses de trabajo o <em className="font-serif italic text-mint">€20000–€30000</em> en agencias.<br className="md:hidden" />{" "}
          <span className="text-mint">Eso ya no es verdad.</span>
        </h2>
        <p className="mt-10 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
          Con las herramientas correctas — Notion, Lovable, Claude — puedes tener tu negocio
          completamente montado en 8 semanas. Web, landing, embudo, lead magnet, sistemas
          internos. Todo.
        </p>

        <div className="mt-16 flex flex-row flex-wrap lg:flex-nowrap md:flex-nowrap gap-2 md:gap-3 mt-8">
          {items.map((it) => (
            <div
              key={it.text}
              className="inline-flex items-center gap-2 md:gap-2 lg:gap-3 rounded-full bg-primary text-mint px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3"
              style={{ boxShadow: "0 0 18px rgba(208, 252, 208, 0.45)" }}
            >
              <span className="text-base md:text-base lg:text-xl leading-none" aria-hidden>{it.emoji}</span>
              <p className="text-xs md:text-sm lg:text-lg text-mint whitespace-nowrap">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

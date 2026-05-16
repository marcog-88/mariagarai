export const Truth = () => {
  const items = [
    { emoji: "😰", text: "Salir a vender da miedo" },
    { emoji: "🗣️", text: "Hablar con personas reales" },
    { emoji: "💸", text: "Pedir dinero da terror" },
  ];
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          La verdad que nadie te dice
        </p>
        <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] tracking-tight text-primary-foreground max-w-4xl">
          El <em className="font-serif italic text-mint">87%</em> de las personas que compran cursos de "lanza tu oferta"<br className="md:hidden" />{" "}
          <span className="text-mint">nunca lanzan nada.</span>
        </h2>
        <p className="mt-10 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
          No porque los cursos sean malos. Porque salir a vender da miedo. Hablar con personas
          reales da miedo. Pedir dinero por algo que aún no has perfeccionado da terror.
        </p>

        <p className="mt-12 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
          Y entonces volvemos a "investigar". A consumir contenido. Al confort cálido y seguro
          de prepararnos sin nunca ejecutar.
        </p>
        <p className="mt-8 font-serif text-2xl md:text-3xl text-mint italic max-w-4xl">
          Validar no es complicado. Es incómodo.
        </p>
        <p className="mt-8 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
          Tu cuello de botella no es la oferta. Es que aún no has tenido suficientes
          conversaciones reales con clientes potenciales. Eso se resuelve en 8 semanas con el
          método correcto.
        </p>

        <div className="mt-16 flex flex-row flex-wrap lg:flex-nowrap md:flex-nowrap gap-2 md:gap-3">
          {items.map((it) => (
            <div
              key={it.text}
              className="inline-flex items-center gap-2 md:gap-2 lg:gap-3 rounded-full bg-primary text-mint px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3"
              style={{ boxShadow: "0 0 18px hsl(var(--mint) / 0.5)" }}
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

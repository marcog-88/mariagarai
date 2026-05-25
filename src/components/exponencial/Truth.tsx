export const Truth = () => {
  const pills = [
    "Múltiples vías de ingreso",
    "Marca que abre puertas",
    "Sistemas que trabajan sin ti",
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
          Una Carrera Moderna no es ser freelance. No es ser influencer.{" "}
          <em className="font-serif italic text-mint">No es montar una startup.</em>
        </h2>
        <p className="mt-10 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
          Es algo nuevo. Es ser dueña de tu mini-imperio profesional.
        </p>
        <p className="mt-8 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
          Una identidad profesional sólida que te define más allá de un sueldo o un puesto. Una marca personal que te abre puertas — colaboraciones, partnerships, oportunidades en medios. Varias vías de ingreso que se suman y se diversifican. Sistemas que sostienen tu negocio sin que tú estés presente cada hora. IA integrada en cada parte de tu negocio. Trabajar tres o cuatro horas al día y ganar más que en tu mejor empleo.
        </p>
        <p className="mt-8 font-serif text-2xl md:text-3xl text-mint italic max-w-4xl">
          Eres dueña de tu marca. De tu tiempo. De tu próxima década profesional.
        </p>

        <div className="mt-16 flex flex-row flex-wrap lg:flex-nowrap md:flex-nowrap gap-2 md:gap-3">
          {pills.map((pill) => (
            <div
              key={pill}
              className="inline-flex items-center gap-2 md:gap-2 lg:gap-3 rounded-full bg-primary text-mint px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3"
              style={{ boxShadow: "0 0 18px hsl(var(--mint) / 0.5)" }}
            >
              <p className="text-xs md:text-sm lg:text-lg text-mint whitespace-nowrap">{pill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Truth = () => {
  const pills = [
    "💰 Oferta de alto valor",
    "⭐ Marca de autoridad",
    "🤖 Sistemas con IA",
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
          Deja de leer sobre emprendimiento.{" "}
          <br />
          <em className="font-serif italic text-mint">Ya tienes suficiente ruido.</em>
        </h2>
        <p className="mt-10 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
          Intentas copiar las estrategias de otro o vas a clases grupales donde con suerte cuelas una pregunta. Nadie puede darte criterio en 5 minutos.
        </p>
        <p className="mt-8 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
          Lo que necesitas es alguien que se meta en tu negocio y te ayude a consolidar tu oferta insignia de alto valor, construir una marca de autoridad que te trae clientes cada semana, y crear sistemas que sostienen el negocio sin que tú estés en cada hora.
        </p>
        <p className="mt-8 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
          En el orden correcto. Sin el ruido. Sin las distracciones que te frenan.
        </p>
        <p className="mt-8 font-serif text-2xl md:text-3xl text-mint italic max-w-4xl">
          La IA y yo, tus socias estratégicas durante 4 meses.
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

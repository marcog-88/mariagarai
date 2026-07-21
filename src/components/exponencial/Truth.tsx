import { Reveal } from "@/components/landing/Reveal";

export const Truth = () => {
  const pills = [
    "🚫 Sin perseguir clientes",
    "💸 Sin pagar comisiones",
    "🔧 Sin pelearte con la parte técnica",
  ];
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <Reveal variant="blur">
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            La verdad
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] tracking-tight text-primary-foreground max-w-4xl">
            Lo que te falta es el modelo correcto{" "}
            <em className="font-serif italic text-mint">y la infraestructura que lo sostiene.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-10 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Cuando das sesiones, pasas consulta o vendes tu servicio estás cambiando tu tiempo por dinero. Y eso tiene un techo. Lo que te falta es un activo digital que te dé ingresos escalables y consolide tu autoridad en tu nicho.
          </p>
          <p className="mt-8 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            No vendes información, vendes una transformación de cero a héroe por la que tu cliente está dispuesto a pagar un precio más alto.
          </p>
          <p className="mt-8 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Montar esto costaba meses y miles de euros en agencias o comisiones a plataformas. Hoy lo construyes tú en 90 días, con la Máquina Exponencial y apoyo experto a cada paso. Y por el camino te conviertes en una pro de la IA: sabrás mantener, cambiar y hacer crecer tu negocio sin depender de nadie. Desde ahí, el cielo es el límite.
          </p>
          <p className="mt-8 font-serif text-2xl md:text-3xl text-mint italic max-w-4xl">
            Un negocio con más ingresos, autoridad y calma.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-row flex-wrap justify-center md:justify-start lg:flex-nowrap md:flex-nowrap gap-2 md:gap-3">
          {pills.map((pill, i) => (
            <Reveal key={pill} delay={i * 130} variant="scale">
              <div
                className="inline-flex items-center gap-2 md:gap-2 lg:gap-3 rounded-full bg-primary text-mint px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3"
                style={{ boxShadow: "0 0 18px hsl(var(--mint) / 0.5)" }}
              >
                <p className="text-xs md:text-sm lg:text-lg text-mint whitespace-nowrap">{pill}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

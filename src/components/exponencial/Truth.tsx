import { Reveal } from "@/components/landing/Reveal";

export const Truth = () => {
  const pills = [
    "🚫 Sin perseguir clientes",
    "📵 Sin publicar 24/7 en redes",
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
            Ya tienes el conocimiento. Lo que te falta es pivotar al modelo de negocio correcto{" "}
            <em className="font-serif italic text-mint">y montar la infraestructura que lo sostiene.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-10 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Deja de vender tu tiempo por horas y de inventarte cursos y membresías a 97€. Deja de copiar estrategias de otros y de probar un poco de todo. Deja de ver tutoriales en Youtube sobre qué plataforma usar.
          </p>
          <p className="mt-8 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Eso no es creatividad, es dispersión y te mantiene estancada, ocupada e invisible.
          </p>
          <p className="mt-8 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            La solución es simplificar. Transitar a un modelo de formación online altamente rentable: vendes un solo programa de alto valor que combina formación, acompañamiento e implementación. Una transformación real para un avatar con alto poder de compra.
          </p>
          <p className="mt-8 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Este es el mejor modelo para consultores, terapeutas y expertos que quieren dejar de vender servicios sueltos y ser reconocidos como referentes.
          </p>
          <p className="mt-8 max-w-4xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Y aquí está lo que cambia todo: montar esto ya no es lo que era. Antes, tener tu programa, tu web, tu academia y tus sistemas costaba meses de trabajo y miles de euros en agencias y freelancers. Hoy, usando la IA como tu socia, lo puedes montar en meses, no años. Profesional, sin gastar una fortuna, sin demoras.{" "}
            <br className="hidden md:block" />
            Un negocio con más ingresos, autoridad y calma.
          </p>
          <p className="mt-8 font-serif text-2xl md:text-3xl text-mint italic max-w-4xl">
            Sales con todo funcionando, llave en mano.
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

import { Reveal } from "@/components/landing/Reveal";

export const OnlyDifference = () => {
  return (
    <section
      className="pt-0 pb-24 md:pb-32"
      style={{ background: "#0c0d0e", color: "#ffffff" }}
    >
      <div className="container-tight">
        <Reveal>
          <p className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            La única diferencia
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-white max-w-4xl">
            Por qué yo
          </h2>
        </Reveal>
        <Reveal delay={150} className="mt-10 max-w-3xl space-y-6 text-lg text-white/80 leading-relaxed">
          <p>
            Te podría decir que trabajé 10 años en la ONU y el mundo corporativo en 8 países. Que he acompañado a profesionales a montar su negocio. O que mi forma de trabajar integra la IA como infraestructura, algo que casi nadie hace en el mercado hispano.
          </p>
          <p>Pero si me preguntas "por qué yo", te diré esto:</p>
          <p>
            Porque he caído en cada trampa de las que tú estás esquivando ahora. Y sé exactamente cómo salir de ellas.
          </p>
          <p>
            No me avergüenza haber pasado por cada miseria de emprender. Algunos lo tuvieron fácil. Yo no.
          </p>
          <p>
            Sé todo lo que NO tienes que hacer. Sé lo que NO vende. Sé cómo te saboteas. Las trampas en las que caes y el ruido que te distrae.
          </p>
          <p>
            Trabajar conmigo no tiene escapatoria: voy a derribar cada objeción y obligarte a pensar en grande. Por eso cada hora de estos 4 meses tendrá un impacto exponencial.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

import sobreMi from "@/assets/maria-sitting-no-background.webp";
import { Reveal } from "./Reveal";

export const About = () => {
  return (
    <section
      id="about"
      className="border-t border-border"
      style={{ background: "#f9f9f7" }}
    >
      <div className="flex flex-col lg:flex-row lg:items-end">

        {/* Left column: all text, 55% width */}
        <div
          className="flex flex-col lg:w-[55%] px-6 pt-16 pb-8 lg:pt-24 lg:pb-24"
          style={{ paddingLeft: "clamp(24px, 5vw, 96px)", paddingRight: "clamp(24px, 4vw, 64px)" }}
        >
          <Reveal>
            <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
              Quién está detrás
            </p>
            <h2 className="display-md">
              ¡Hola! Soy María Garai.
            </h2>
          </Reveal>
          <Reveal delay={150} className="mt-10 space-y-6 text-lg md:text-xl lg:text-sm text-foreground/75 leading-relaxed">
            <p>
              El modelo de trabajo tradicional no es para mí. Jurista de formación. Dejé
              una carrera internacional en la ONU y el mundo corporativo para abrir mi
              propio camino.
            </p>
            <p>
              Esto es lo que pienso: hay otra forma de vivir de tu conocimiento que no sea
              intercambiando tu tiempo por dinero, ya sea por cuenta ajena o propia.
            </p>
            <p>
              El negocio de educación online es un mercado de 250 mil millones de dólares
              que crece cada año. La oportunidad en el mundo hispano es inmensa: en todos
              los sectores hay espacio para voces referentes que entreguen su valor a escala
              y tengan un impacto, autoridad e ingresos exponenciales.
            </p>
            <p>
              Mi misión es ponértelo fácil: ayudarte a diseñar, montar y vender un curso
              online que te permita llegar a más personas y volverte exponencial.
            </p>
          </Reveal>
        </div>

        {/* Right column: image fixed height on desktop, anchored to bottom */}
        <Reveal variant="right" className="flex-shrink-0 lg:w-[45%] overflow-hidden lg:h-[667px] px-6 lg:px-0">
          <img
            src={sobreMi}
            alt="María Garaí"
            className="mx-auto w-full max-w-xs sm:max-w-sm h-auto block lg:mx-0 lg:max-w-none lg:h-full lg:object-contain lg:object-bottom"
            loading="lazy"
          />
        </Reveal>

      </div>
    </section>
  );
};

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
              Esta es mi historia
            </p>
            <h2 className="display-md">
              Más de una década en corporate.{" "}
              <span className="font-serif italic text-accent md:block">
                <span className="md:hidden"><br />Y aun así, salir al mercado fue un desastre.</span>
                <span className="hidden md:inline">Y aun así, salir al mercado fue un desastre.</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="mt-10 space-y-6 text-lg md:text-xl lg:text-sm text-foreground/75 leading-relaxed">
            <p>
              ONU. Procter &amp; Gamble. Startups tech. Títulos rimbombantes y sueldo de
              seis cifras. Pero cuando reuní el coraje de soltar la jaula de oro me hice
              pequeña.
            </p>
            <p>
              Tenía el conocimiento, pero vendía servicios sueltos, por debajo de mi valor.
            </p>
            <p>
              Copiaba lo que otros hacían y probaba cosas, pero sin claridad. Me daba miedo
              sonar como todos, pero tampoco quería ennicharme. Vivía persiguiendo clientes,
              pero abrumada entre reuniones de Zoom.
            </p>
            <p>
              Toqué fondo. Pasé por burnout. Me desesperé.
            </p>
            <p>
              El punto de inflexión llegó cuando trabajé mi mentalidad y estrategia para
              apostar por el mejor modelo de negocio para expertos que venden servicios.
              Dejé de vender mi tiempo y cursos a 97€ y decidí crear un solo programa de
              formación que empaquetara mi conocimiento y resolviera un problema muy concreto
              a un avatar específico.
            </p>
            <p>
              <strong className="text-foreground">Resultado: ingresos escalables, agenda más vacía, satisfacción plena.</strong>
            </p>
            <p>
              Esto es exactamente lo que te enseño a hacer.
            </p>
            <p>
              Haberla cagado tanto tiene una ventaja: conozco tu caos, sé dónde fallas y
              sé cómo ayudarte a salir de ahí. Mi misión es ayudarte a pivotar a un modelo
              de negocio donde puedas brillar y vivir de lo tuyo, sin años de prueba y error.
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

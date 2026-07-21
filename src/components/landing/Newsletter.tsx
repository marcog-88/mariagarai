import mariaCafe from "@/assets/maria-cafe.png";
import { Reveal } from "./Reveal";

export const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="py-24 md:py-32 border-t border-border bg-secondary/40"
    >
      <div className="container-tight">
        {/* Headline + subheadline — full width */}
        <Reveal>
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Hazte Grande · Newsletter
          </p>
          <h2 className="display-md">
            Crea un negocio al servicio de{" "}
            <span className="font-serif italic text-accent">una vida grande.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-4xl">
            Artículos sobre estrategia y mentalidad para dejar de jugar en
            pequeño y vivir de lo tuyo, sin años de prueba y error.
          </p>
        </Reveal>

        {/* Embed on left, photo on right */}
        <div className="mt-16 grid md:grid-cols-12 gap-12 md:gap-16 items-stretch">
          <Reveal variant="left" delay={120} className="md:col-span-6 flex justify-center md:justify-start">
            <div className="w-full">
              <iframe
                src="https://haztegrande.substack.com/embed"
                width="100%"
                height="320"
                style={{ border: "1px solid #EEE", background: "white", borderRadius: "1rem" }}
                frameBorder="0"
                scrolling="no"
                title="Suscríbete a Hazte Grande"
              />
            </div>
          </Reveal>

          {/* María writing — real, warm, weekly */}
          <Reveal variant="right" delay={250} className="hidden md:block md:col-span-6">
            <div className="rounded-2xl overflow-hidden h-full">
              <img
                src={mariaCafe}
                alt="María Garaí escribiendo su newsletter desde una cafetería"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

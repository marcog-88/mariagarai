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
              ONU. Procter &amp; Gamble. Startup tech. Títulos rimbombantes y sueldo de
              seis cifras. Pero cuando reuní el coraje de soltar la jaula de oro me hice
              pequeña. Me perdí. Fundí{" "}
              <span className="underline-accent">100.000 euros</span> de ahorros sin saber
              cómo generar ingresos por mi cuenta.
            </p>
            <p>
              El problema: vendía cosas sueltas, por debajo de mi valor. Copiaba lo que
              otros hacían. Estaba en comunidades de emprendedores donde solo había ruido.
              Publicaba a trompicones, sin crear autoridad.
            </p>
            <p>
              Toqué fondo. Me endeudé. Pasé por burnout. Me desesperé. Y desde ese agujero,
              lo entendí. Necesitaba:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>aterrizar una oferta de alto valor</li>
              <li>construir autoridad en redes para que los clientes llegaran a mí</li>
              <li>usar la IA para acelerar la ejecución y escalar impacto</li>
            </ul>
            <p>
              Haberla cagado tanto tiene una ventaja: conozco tu caos, sé dónde fallas y
              sé cómo ayudarte a salir de ahí. Mi misión es convertirme en la socia
              operativa que te ayude a tomar decisiones.
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

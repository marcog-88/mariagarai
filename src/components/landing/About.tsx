import sobreMi from "@/assets/maria-sitting-no-background.png";

export const About = () => {
  return (
    <section
      id="about"
      className="border-t border-border"
      style={{ background: "#f9f9f7", minHeight: "600px" }}
    >
      <div className="flex flex-col md:flex-row" style={{ minHeight: "600px" }}>

        {/* Left column: all text, 55% width, vertically centered */}
        <div
          className="flex flex-col justify-center md:w-[55%] px-6 py-16 md:py-20"
          style={{ paddingLeft: "clamp(24px, 5vw, 64px)", paddingRight: "clamp(24px, 4vw, 48px)" }}
        >
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Hola, soy María
          </p>
          <h2 className="display-md">
            Más de una década en corporate.{" "}
            <span className="font-serif italic text-accent md:block">
              <span className="md:hidden"><br />Y aun así, salir al mercado fue un desastre.</span>
              <span className="hidden md:inline">Y aun así, salir al mercado fue un desastre.</span>
            </span>
          </h2>
          <div className="mt-10 space-y-6 text-xl md:text-[22px] text-foreground/75 leading-relaxed">
            <p>
              Cuando dejé el mundo corporativo, creía que lo tenía todo a mi
              favor. Me perdí. Me saboteé. Gasté más de{" "}
              <span className="underline-accent">100.000 euros</span> sin saber
              exactamente qué estaba construyendo ni para quién. Pasé de tener
              ahorros a tener deudas.
            </p>
            <p>
              Lo que nadie me había enseñado era esto: tener el conocimiento no
              es suficiente. Estaba creando antes de validar, construyendo
              antes de vender, invirtiendo antes de ganar.
            </p>
            <p className="font-serif italic text-2xl md:text-3xl text-foreground pt-3 leading-snug">
              "Lo que cambió para mí fue ordenar y hacer solo lo que toca. Para
              quienes venimos de corporate, el problema no es no actuar — es
              actuar mal. Demasiado, disperso y sin criterio."
            </p>
            <p>
              Hoy tengo algo que en corporate nunca tuve: una carrera que es
              completamente mía. Independiente. Que funciona desde cualquier
              parte. Que crece exponencialmente, en la dirección que yo marque.
            </p>
          </div>
        </div>

        {/* Right column: image 45%, full height, flush to right edge */}
        <div className="flex-shrink-0 md:w-[45%] h-72 md:h-auto">
          <img
            src={sobreMi}
            alt="María Garaí"
            className="w-full h-full object-contain block"
            style={{ objectPosition: "bottom center" }}
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

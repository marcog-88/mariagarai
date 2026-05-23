import portrait from "@/assets/maria-portrait-hero.webp";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="container-tight">
        <div className="max-w-3xl">
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Sobre MarÃ­a
          </p>
          <img
            src={portrait}
            alt="MarÃ­a GaraÃ­"
            className="lg:hidden mb-10 md:mb-16 w-full max-w-sm mx-auto h-auto"
            loading="lazy"
          />
          <h2 className="display-md">

            MÃ¡s de una dÃ©cada en corporate.{" "}
            <span className="font-serif italic text-accent md:block">
              <span className="md:hidden"><br />Y aun asÃ­, salir al mercado fue un desastre.</span>
              <span className="hidden md:inline">Y aun asÃ­, salir al mercado fue un desastre.</span>
            </span>
          </h2>
          <div className="mt-10 space-y-6 text-xl md:text-[22px] text-foreground/75 leading-relaxed">
            <p>
              Cuando dejÃ© el mundo corporativo, creÃ­a que lo tenÃ­a todo a mi
              favor. Me perdÃ­. Me saboteÃ©. GastÃ© mÃ¡s de{" "}
              <span className="underline-accent">100.000 euros</span> sin saber
              exactamente quÃ© estaba construyendo ni para quiÃ©n. PasÃ© de tener
              ahorros a tener deudas.
            </p>
            <p>
              Lo que nadie me habÃ­a enseÃ±ado era esto: tener el conocimiento no
              es suficiente. Estaba creando antes de validar, construyendo
              antes de vender, invirtiendo antes de ganar.
            </p>
            <p className="font-serif italic text-2xl md:text-3xl text-foreground pt-3 leading-snug">
              "Lo que cambiÃ³ para mÃ­ fue ordenar y hacer solo lo que toca. Para
              quienes venimos de corporate, el problema no es no actuar â€” es
              actuar mal. Demasiado, disperso y sin criterio."
            </p>
            <p>
              Hoy tengo algo que en corporate nunca tuve: una carrera que es
              completamente mÃ­a. Independiente. Que funciona desde cualquier
              parte. Que crece exponencialmente, en la direcciÃ³n que yo marque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

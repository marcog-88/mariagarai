import sobreMi from "@/assets/maria-sitting-no-background.webp";

export const About = () => {
  return (
    <section
      id="about"
      className="border-t border-border py-24 md:py-32"
      style={{ background: "#f9f9f7" }}
    >
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column: all text */}
          <div className="flex flex-col">
            <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
              Hola, soy María
            </p>
            <h2 className="display-md">
              Más de una década en corporate.{" "}
              <span className="font-serif italic text-accent">
                Y aun así, salir al mercado fue un desastre.
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

          {/* Right column: image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={sobreMi}
              alt="María Garaí"
              className="w-full max-w-sm lg:max-w-md object-contain object-bottom min-h-[440px] lg:min-h-0 lg:max-h-[560px]"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

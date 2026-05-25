import mockup from "@/assets/escuela-mockup.webp";

export const Escuela = () => {
  return (
    <section id="escuela" className="py-24 md:py-32 border-t border-border">
      <div className="container-tight">
        {/* Heading block */}
        <div className="max-w-3xl">
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
            La escuela
          </p>
          <h2 className="display-md">
            <span className="font-serif italic text-accent">Carreras Modernas.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-foreground/75 leading-relaxed">
            La escuela de habla hispana para founders que quieren construir un
            negocio boutique con <span className="underline-accent">IA como sistema</span>.
          </p>
        </div>

        {/* Mockup image — full width below the heading */}
        <div className="mt-14 md:mt-16">
          <div className="w-full overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-primary">
            <img
              src={mockup}
              alt="Mockup del programa Negocio Boutique con IA — laptop, tablet y móvil mostrando el contenido de la Escuela de Carreras Modernas."
              className="w-full h-auto block"
              width={1536}
              height={1152}
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#cta" className="btn-primary-lg">
            Entrar a la escuela
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

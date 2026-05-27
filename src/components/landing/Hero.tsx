import portrait from "@/assets/maria-portrait-hero.webp";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden hero-gradient pt-32 pb-24 md:pt-36 md:pb-20 lg:pb-0"
    >
      <div className="container-tight px-8 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:items-stretch">
          {/* Copy column */}
          <div className="animate-fade-up order-2 lg:order-1 flex flex-col justify-center w-full lg:w-[50%] py-8 lg:py-0 lg:pb-24">
            <h1 className="font-serif text-[clamp(3.75rem,12vw,3.5rem)] md:text-[clamp(4rem,7vw,6.25rem)] lg:text-[clamp(3.5rem,6vw,5.75rem)] leading-[1.02] md:leading-[1.05] tracking-tight text-foreground">
              <span className="block md:inline lg:block">Por fin, tu</span>
              <em className="font-serif italic text-accent block md:inline lg:block md:ml-3 lg:ml-0">propio negocio</em>
            </h1>
            <p className="mt-6 max-w-xl font-serif text-[clamp(1.35rem,2.2vw,1.75rem)] font-light text-foreground/85 leading-snug">
              <span className="block font-normal text-foreground mb-4 text-[clamp(1.75rem,3vw,2.5rem)] leading-tight">Vales para más que para un 9 a 5.</span>
              Ahora es el momento de construir una carrera independiente con varias vías de ingreso para vivir bien de lo tuyo.
            </p>
            <div className="mt-12 sm:mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="/construye#top"
                className="btn-primary-lg justify-center w-full md:w-auto"
                style={{ boxShadow: "4px 4px 0 0 #0c0d0e" }}
              >
                Trabaja conmigo
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* Portrait column */}
          <div className="hidden lg:flex order-3 lg:order-2 w-full lg:w-[50%] items-end justify-center mt-10 lg:mt-0">
            <img
              src={portrait}
              alt="María Garaí"
              className="animate-fade-up w-full h-auto max-w-sm lg:max-w-none mx-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

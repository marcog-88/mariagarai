import portrait from "@/assets/maria-portrait-hero.webp";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden hero-gradient pt-32 pb-24 md:pt-36 md:pb-20 lg:pb-0"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 md:h-56"
        style={{ background: "linear-gradient(to bottom, transparent, #f9f9f7)" }}
      />
      <div className="container-tight px-8 sm:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:items-stretch">
          {/* Copy column */}
          <div className="animate-fade-up order-2 lg:order-1 flex flex-col justify-center w-full lg:w-[60%] py-8 lg:py-0 lg:pb-24">
            <h1 className="font-serif text-[clamp(3.75rem,12vw,3.5rem)] md:text-[clamp(4rem,7vw,6.25rem)] lg:text-[clamp(3rem,4vw,4.25rem)] lg:whitespace-nowrap leading-[1.02] md:leading-[1.05] tracking-tight text-foreground">
              <span className="block md:inline">Por fin tu</span>
              <em className="font-serif italic text-accent block md:inline md:ml-3">propio negocio.</em>
            </h1>
            <p className="mt-6 max-w-xl font-sans text-[clamp(0.875rem,1.8vw,1.5rem)] font-normal text-foreground/85 leading-snug">
              <span className="block font-serif font-medium text-foreground mb-4 text-2xl md:text-4xl leading-tight">Vales más que para un trabajo de 9 a 5.</span>
              Construye una carrera independiente con múltiples vías de ingreso.
            </p>
            <p className="mt-4 max-w-xl font-sans italic text-[clamp(0.875rem,1.8vw,1.5rem)] font-light text-[#9378fe] leading-snug">
              Con IA para acelerar y escalar tu impacto.
            </p>
            <div className="mt-12 sm:mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="#programa-estrella"
                className="btn-primary-lg justify-center w-full md:w-auto !text-white"
                style={{ boxShadow: "4px 4px 0 0 #0c0d0e" }}
              >
                Trabaja conmigo
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* Portrait column */}
          <div className="hidden lg:flex order-3 lg:order-2 w-full lg:w-[40%] items-end justify-center mt-10 lg:mt-0">
            <img
              src={portrait}
              alt="María Garaí"
              width={1281}
              height={1920}
              className="animate-fade-up w-full h-auto max-w-sm lg:max-w-none mx-auto"
              loading="eager"
              fetchpriority="high"
              decoding="sync"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

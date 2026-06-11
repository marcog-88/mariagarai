import portrait from "@/assets/maria-hero-cutout.webp";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden hero-dark pt-24 pb-24 md:pt-36 md:pb-20 lg:pb-0"
    >
      <div className="container-tight px-8 sm:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:items-stretch">
          {/* Copy column */}
          <div className="order-2 lg:order-1 flex flex-col justify-center w-full lg:w-[60%] pt-0 pb-8 lg:py-0 lg:pb-24">
            {/* Mobile avatar — human anchor without the full portrait cost */}
            <img
              src={portrait}
              alt="María Garaí"
              className="animate-fade-up lg:hidden mb-10 h-28 w-28 rounded-full object-cover object-top ring-2 ring-accent/60 ring-offset-2 ring-offset-[#0c0d0e]"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
            <h1
              className="animate-fade-up font-serif text-[clamp(2.5rem,8vw,3.5rem)] md:text-[clamp(2.75rem,5vw,4.5rem)] lg:text-[clamp(2.5rem,3.5vw,3.75rem)] leading-[1.05] md:leading-[1.08] tracking-tight text-white"
              style={{ animationDelay: "0ms" }}
            >
              Tú, la IA y yo,{" "}
              <em className="font-serif italic text-accent block">el equipo que despega tu negocio.</em>
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-xl font-sans text-[clamp(0.875rem,1.8vw,1.125rem)] font-normal text-white/75 leading-relaxed"
              style={{ animationDelay: "150ms" }}
            >
              Si tienes un negocio de servicios, terapia o consultoría, te ayudo a crear una oferta de alto valor, generar ventas todas las semanas y construir la infraestructura con IA que lo hace más profesional.
            </p>

            <div
              className="animate-fade-up mt-10 sm:mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href="#programa-estrella"
                className="btn-primary-lg justify-center w-full md:w-auto !text-white"
                style={{
                  boxShadow:
                    "0 8px 28px rgba(147, 120, 254, 0.55), 0 14px 56px rgba(147, 120, 254, 0.3)",
                }}
              >
                Trabaja conmigo
                <span aria-hidden>→</span>
              </a>
            </div>

            {/* Credentials — one quiet, confident line */}
            <p
              className="animate-fade-up mt-10 lg:mt-14 text-xs md:text-sm italic font-light text-white/35 leading-relaxed whitespace-nowrap"
              style={{ animationDelay: "450ms" }}
            >
              <span className="text-white/70">ONU</span> ·{" "}
              <span className="text-white/70">Procter &amp; Gamble</span> ·{" "}
              <span className="text-white/70">Startups</span> · +10 años<span className="hidden md:inline"> de experiencia</span>
            </p>
          </div>

          {/* Portrait column */}
          <div className="hidden lg:flex relative order-3 lg:order-2 w-full lg:w-[40%] items-end justify-center mt-10 lg:mt-0">
            {/* Purple glow — sits fully behind the cutout, so it never touches her */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(60% 70% at 50% 55%, rgba(147,120,254,0.28) 0%, rgba(147,120,254,0.10) 55%, transparent 80%)",
                filter: "blur(12px)",
              }}
            />
            <img
              src={portrait}
              alt="María Garaí"
              width={683}
              height={1024}
              className="animate-fade-up relative w-full h-auto max-w-sm lg:max-w-none mx-auto"
              style={{ animationDelay: "200ms" }}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
            {/* Intentional bottom fade into the section background */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, #0c0d0e)" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/35"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <svg
          className="scroll-cue w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

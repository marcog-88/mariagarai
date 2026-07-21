import portrait from "@/assets/maria-hero-cutout.webp";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden hero-dark pt-24 pb-24 md:pt-36 md:pb-20 lg:pb-0"
    >
      <div className="container-tight px-8 sm:px-8 relative">

        {/* Mobile + Tablet layout (hidden on lg+) */}
        <div className="flex flex-col gap-10 md:gap-12 lg:hidden">
          {/* Copy column */}
          <div className="flex flex-col justify-center w-full pt-0 pb-8">
            {/* Mobile/tablet avatar */}
            <img
              src={portrait}
              alt="María Garaí"
              className="animate-fade-up mb-6 h-28 w-28 md:h-44 md:w-44 rounded-full object-cover object-top ring-2 ring-accent/60 ring-offset-2 ring-offset-[#0c0d0e]"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
            <p
              className="animate-fade-up mb-8 font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-accent"
              style={{ animationDelay: "0ms" }}
            >
              Tu conocimiento es exponencial
            </p>
            <h1
              className="animate-fade-up font-serif text-[clamp(2.5rem,8vw,3.5rem)] md:text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-white"
              style={{ animationDelay: "80ms" }}
            >
              Monetiza tu conocimiento{" "}
              <em className="font-serif italic text-accent block">sin vender solo tu tiempo</em>
            </h1>
            <p
              className="animate-fade-up mt-8 max-w-xl font-sans text-[clamp(0.875rem,1.8vw,1.125rem)] font-normal text-white/75 leading-normal"
              style={{ animationDelay: "150ms" }}
            >
              Ayudo a emprendedoras y profesionales independientes a crear un <strong className="text-white font-semibold">programa de formación online</strong> que les da ingresos escalables y autoridad consolidada, sin vender más horas. Todo montado, validado y sin pagar comisiones.
            </p>

            <div
              className="animate-fade-up mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href="/exponencial"
                className="btn-primary-lg justify-center w-full md:w-auto !text-white"
                style={{
                  boxShadow:
                    "0 8px 28px rgba(147, 120, 254, 0.55), 0 14px 56px rgba(147, 120, 254, 0.3)",
                }}
              >
                Conoce Exponencial
                <span aria-hidden>→</span>
              </a>
            </div>

            <p
              className="animate-fade-up mt-10 text-xs md:text-sm italic font-light text-white/35 leading-relaxed whitespace-nowrap"
              style={{ animationDelay: "450ms" }}
            >
              <span className="text-white/70">ONU</span> ·{" "}
              <span className="text-white/70">Procter &amp; Gamble</span> ·{" "}
              <span className="text-white/70">Startups</span> · +10 años<span className="hidden md:inline"> de experiencia</span>
            </p>
          </div>
        </div>

        {/* Desktop layout (lg+) */}
        <div className="hidden lg:flex lg:flex-row lg:gap-12 lg:items-stretch">

          {/* Copy column */}
          <div className="flex flex-col justify-between w-full lg:w-[58%] pt-0 pb-8">
            {/* Headline group */}
            <div>
              <p
                className="animate-fade-up mb-10 font-sans text-sm font-semibold uppercase tracking-widest text-accent"
                style={{ animationDelay: "0ms" }}
              >
                Tu conocimiento es exponencial
              </p>
              <span
                className="animate-fade-up font-serif text-[clamp(2.5rem,3.5vw,3.75rem)] leading-[1.05] tracking-tight text-white"
                style={{ animationDelay: "80ms" }}
              >
                Monetiza tu conocimiento
              </span>
              <em
                className="animate-fade-up mt-3 font-serif italic text-accent text-[clamp(3rem,4.2vw,4.5rem)] leading-[1.02] tracking-tight block"
                style={{ animationDelay: "160ms" }}
              >
                sin vender solo tu tiempo
              </em>
            </div>
            <p
              className="animate-fade-up max-w-xl font-sans text-[clamp(0.875rem,1.8vw,1.125rem)] font-normal text-white/75 leading-normal"
              style={{ animationDelay: "240ms" }}
            >
              Ayudo a emprendedoras y profesionales independientes a crear un <strong className="text-white font-semibold">programa de formación online</strong> que les da ingresos escalables y autoridad consolidada, sin vender más horas. Todo montado, validado y sin pagar comisiones.
            </p>
            <div
              className="animate-fade-up flex items-center gap-6"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href="/exponencial"
                className="btn-primary-lg justify-center !text-white"
                style={{
                  boxShadow:
                    "0 8px 28px rgba(147, 120, 254, 0.55), 0 14px 56px rgba(147, 120, 254, 0.3)",
                }}
              >
                Conoce Exponencial
                <span aria-hidden>→</span>
              </a>
            </div>
            <p
              className="animate-fade-up text-xs italic font-light text-white/35 leading-relaxed whitespace-nowrap"
              style={{ animationDelay: "450ms" }}
            >
              <span className="text-white/70">ONU</span> ·{" "}
              <span className="text-white/70">Procter &amp; Gamble</span> ·{" "}
              <span className="text-white/70">Startups</span> · +10 años de experiencia
            </p>
          </div>

          {/* Portrait column — full-body cutout, top-aligned */}
          <div className="relative flex w-full lg:w-[42%] items-start justify-center lg:mt-0">
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

import portrait from "@/assets/maria-hero-cutout.webp";
import { CONTAINER } from "@/components/home/primitives";

// /exponencial retired here (Phase 1 migration) — laexponencial.com is now the
// only live sales page. Repointed the same way LeadMagnet.tsx was in Session 5.
const LA_EXPONENCIAL = "https://www.laexponencial.com/";

export const Hero = () => {
  return (
    // pt = fixed 64px Nav + the design's 88px.
    <section id="top" className="overflow-hidden bg-[#0c0d0e] pt-[120px] pb-24 text-white lg:pt-[152px] lg:pb-0">
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[1fr_380px] lg:items-stretch`}>
        {/* Copy column */}
        <div className="flex min-w-0 flex-col justify-between gap-10 lg:pb-24">
          <div className="lg:h-[236px]">
            {/* Mobile/tablet avatar (below lg): round crop instead of the full cutout. */}
            <img
              src={portrait}
              alt="María Garai"
              className="mb-6 h-28 w-28 rounded-full object-cover object-top ring-2 ring-[#9378fe]/60 ring-offset-2 ring-offset-[#0c0d0e] md:h-44 md:w-44 lg:hidden"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
            <p
              className="mb-8 text-[13px] font-semibold leading-normal uppercase tracking-[0.1em] text-[#9378fe] sm:text-[14px] lg:mb-10"
            >
              FUNDADORA DE EXPONENCIAL · CONSULTORA DE NEGOCIO
            </p>
            <h1
              className="m-0 font-serif text-[40px] leading-[1.05] tracking-[-0.01em] text-white sm:text-[48px] lg:text-[60px]"
            >
              Tu siguiente etapa profesional puede ser mucho más&nbsp;
              <em className="font-serif italic tracking-[-0.01em] text-[#9378fe] text-[48px] sm:text-[58px] lg:text-[72px]">
                grande
              </em>
            </h1>
          </div>
          <p
            className="m-0 max-w-[576px] text-[16px] leading-normal text-white/75 sm:text-[18px]"
          >
            Ayudo a profesionales con experiencia a construir un modelo de negocio altamente rentable alrededor de un programa propio, que escale sus ingresos y les posicione como referentes en su sector.
          </p>
          <div>
            <a
              href={LA_EXPONENCIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#9378fe] px-7 py-3.5 text-[16px] font-medium text-white transition-transform duration-300 hover:-translate-y-px sm:px-8 sm:py-4 sm:text-[18px] leading-normal"
              style={{
                boxShadow:
                  "0 8px 28px rgba(147, 120, 254, 0.55), 0 14px 56px rgba(147, 120, 254, 0.3)",
              }}
            >
              Trabaja Conmigo <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Portrait column */}
        <div
          className="hidden min-w-0 items-start justify-center lg:flex"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 55%, rgba(147,120,254,0.28) 0%, rgba(147,120,254,0.10) 55%, transparent 80%)",
          }}
        >
          <img
            src={portrait}
            alt="María Garai"
            width={683}
            height={1024}
            className="block h-auto w-full max-w-[460px]"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
      </div>
    </section>
  );
};

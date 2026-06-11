import mockup from "@/assets/talleres-live-mockup.png";
import { Reveal } from "./Reveal";

const LUMA_TALLERES = "https://luma.com/corporateafounder";

export const LeadMagnet = () => {
  return (
    <section className="py-24 md:py-32 bg-[#f9f9f7]">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-center md:gap-16 lg:gap-24">
          {/* Left: text + CTA */}
          <Reveal variant="left" className="flex-1 min-w-0">
            <div className="mb-8 flex flex-wrap items-center gap-2">
              <p
                className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: "#9378fe" }}
              >
                En directo · Martes 6pm España
              </p>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-white"
                style={{ background: "#9378fe" }}
              >
                <span
                  className="badge-pulse-dot rounded-full bg-white flex-shrink-0"
                  style={{ width: 6, height: 6 }}
                  aria-hidden
                />
                Gratis
              </span>
            </div>
            <h2 className="display-md">
              Cada semana te enseño a conseguir{" "}
              <span className="font-serif italic" style={{ color: "#9378fe" }}>
                clientes con IA.
              </span>
            </h2>

            <div className="mt-8 md:hidden">
              <img
                src={mockup}
                alt="Exponencial Live — sesión grupal con María Garaí y participantes"
                className="w-full h-auto rounded-2xl"
                style={{ filter: "drop-shadow(0px 6px 20px rgba(0,0,0,0.13))" }}
                loading="lazy"
              />
            </div>

            <p className="mt-6 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl">
              Una herramienta, sistema o aplicación de IA en cada sesión, para conseguir
              más clientes y ordenar tu negocio. Es la forma más fácil de probar cómo
              trabajo antes de Exponencial.
            </p>
            <a
              href={LUMA_TALLERES}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 block w-full md:inline-block md:w-auto text-center rounded-full px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg font-medium text-white whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ background: "#9378fe", boxShadow: "4px 4px 0 0 #0c0d0e" }}
            >
              Inscríbete gratis →
            </a>
            <p className="mt-6 text-sm text-foreground/55 italic">
              +300 founders ya han pasado por el Live.
            </p>
          </Reveal>

          {/* Right: mockup image (desktop) */}
          <Reveal variant="right" delay={150} className="hidden md:block md:w-[42%] lg:w-[40%] flex-shrink-0">
            <img
              src={mockup}
              alt="Taller en vivo — sesión grupal con María Garaí y participantes"
              className="w-full h-auto rounded-2xl"
              style={{ filter: "drop-shadow(0px 6px 20px rgba(0,0,0,0.13))" }}
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

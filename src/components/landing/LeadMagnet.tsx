import mockup from "@/assets/talleres-live-mockup.png";
import { Reveal } from "./Reveal";

const LUMA_TALLERES = "https://www.mariagarai.com/eventos";

export const LeadMagnet = () => {
  return (
    <section className="py-24 md:py-32 bg-[#f9f9f7]">
      <div className="container-tight">
        {/* Pill — above the two columns so image aligns with h2 */}
        <Reveal>
          <a
            href={LUMA_TALLERES}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 inline-flex items-center gap-2 self-start rounded-full px-3 py-1.5 md:px-4 text-[10px] md:text-xs uppercase tracking-[0.12em] md:tracking-[0.24em] text-foreground transition-opacity hover:opacity-70"
            style={{
              border: "1px solid rgba(147,120,254,0.6)",
              background: "#ffffff",
            }}
          >
            <span
              className="badge-pulse-dot rounded-full bg-red-500 flex-shrink-0"
              style={{ width: 8, height: 8 }}
              aria-hidden
            />
            Live<span className="hidden sm:inline"> · Martes 6pm España</span>
          </a>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_42%] lg:grid-cols-[1fr_40%] gap-12 md:gap-16 lg:gap-24 md:items-stretch">
          {/* Left: text + CTA */}
          <Reveal variant="left" className="min-w-0">
            <h2 className="display-md">
              Deja de ser invisible y{" "}
              <span className="font-serif italic" style={{ color: "#9378fe" }}>
                jugar en pequeño.
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
              Cada semana, en directo, trabajamos una pieza concreta del modelo de formación
              online de alto valor para consultores, terapeutas y expertos que quieren escalar
              ingresos, impacto y autoridad: cómo diseñar tu programa, cómo conseguir clientes,
              cómo usar la IA como tu socia. Sales con algo que aplicar ese mismo día.
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
          </Reveal>

          {/* Right: mockup image (desktop) — fills column height */}
          <Reveal variant="right" delay={150} className="hidden md:block relative rounded-2xl overflow-hidden self-stretch min-h-0">
            <img
              src={mockup}
              alt="Taller en vivo — sesión grupal con María Garaí y participantes"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              style={{ filter: "drop-shadow(0px 6px 20px rgba(0,0,0,0.13))" }}
              loading="lazy"
            />
          </Reveal>
        </div>
        <p className="mt-6 text-sm text-foreground/55 italic">
          +300 founders ya han pasado por el Live.
        </p>
      </div>
    </section>
  );
};

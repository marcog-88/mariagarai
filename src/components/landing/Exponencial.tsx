import { TidyCalButton } from "@/components/construye/TidyCalButton";
import expoMockup from "@/assets/exponencial-premium-card.webp";

export const Exponencial = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#0c0d0e", borderTop: "1px solid rgba(147,120,254,0.2)" }}
    >
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left — text */}
          <div>
            <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#9378fe" }}>
              El Programa Flagship
            </p>
            <h2 className="display-md text-white">
              Construye tu{" "}
              <span className="font-serif italic" style={{ color: "#9378fe" }}>
                Carrera Moderna
              </span>
            </h2>
            <p className="mt-12 text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
              El programa flagship para construir tu carrera moderna desde cero.
            </p>
            <div className="mt-4 border-l-2 border-[#9378fe] pl-4">
              <ul className="text-base md:text-lg text-white max-w-xl">
                {[
                  { main: "Un negocio boutique funcionando en 4 meses", sub: "📅 17 sesiones 1:1 con María" },
                  { main: "Presencia digital que abre puertas mientras vives", sub: "⚡ Acompañamiento semanal intensivo" },
                  { main: "Sistemas con IA que trabajan sin ti", sub: "🔒 Por aplicación · Plazas limitadas" },
                ].map((item) => (
                  <li key={item.main} className="flex items-start gap-2 mb-4">
                    <span style={{ color: "#9378fe" }} aria-hidden className="mt-0.5">✓</span>
                    <div>
                      <span>{item.main}</span>
                      <p className="text-base mt-0.5" style={{ color: "#9378fe" }}>{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <a
                href="/exponencial"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: "#9378fe" }}
              >
                Ver el programa →
              </a>
              <p className="mt-3 text-sm text-white/40">Plazas limitadas · Por aplicación</p>
            </div>
          </div>

          {/* Right — mockup image */}
          <div className="rounded-[1.25rem] overflow-hidden border border-white/10 md:mt-[9.5rem]">
            <img
              src={expoMockup}
              alt="Exponencial — Notion, Claude, LinkedIn y Substack."
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

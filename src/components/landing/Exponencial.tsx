import { TidyCalButton } from "@/components/construye/TidyCalButton";
import expoMockup from "@/assets/exponencial-premium-card.webp";

export const Exponencial = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#0c0d0e", borderTop: "1px solid rgba(147,120,254,0.2)" }}
    >
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#9378fe" }}>
              El Programa Flagship
            </p>
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight leading-tight text-white">
              Construye tu{" "}
              <span className="font-serif italic" style={{ color: "#9378fe" }}>
                Carrera Moderna
              </span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
              El programa flagship para construir tu carrera moderna desde cero.
            </p>
            <ul className="mt-4 space-y-2 text-base md:text-lg text-white max-w-xl">
              {[
                "Un negocio boutique funcionando en 4 meses",
                "Presencia digital que abre puertas mientras vives",
                "Sistemas con IA que trabajan sin ti",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "#9378fe" }} aria-hidden>→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              {["17 sesiones 1:1", "4 meses intensivos", "Por aplicación"].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full px-4 py-2 text-sm font-medium"
                  style={{ background: "transparent", border: "1px solid #9378fe", color: "#ffffff", boxShadow: "0 0 8px #9378fe" }}
                >
                  {pill}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="/exponencial"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: "#9378fe" }}
              >
                Ver el programa →
              </a>
            </div>
          </div>

          {/* Right — mockup image */}
          <div className="aspect-[4/3] rounded-[1.25rem] overflow-hidden border border-white/10">
            <img
              src={expoMockup}
              alt="Exponencial — Notion, Claude, LinkedIn y Substack."
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

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
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] md:text-xs uppercase tracking-[0.24em] text-white"
              style={{
                background: "linear-gradient(180deg, #2a2a2a 0%, #141414 100%)",
                border: "1.5px solid #9378fe",
                boxShadow:
                  "4px 0 12px rgba(147,120,254,0.5), -4px 0 12px rgba(147,120,254,0.5), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.3)",
              }}
            >
              <style>{`@keyframes expoDotPulse{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
              <span
                className="rounded-full flex-shrink-0"
                style={{
                  width: "10px",
                  height: "10px",
                  background: "#9378fe",
                  animation: "expoDotPulse 2s ease-in-out infinite",
                }}
                aria-hidden
              />
              Programa Flagship · Por Aplicación
            </div>
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
              <TidyCalButton className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 bg-[#9378fe]">
                Solicitar llamada de valoración →
              </TidyCalButton>
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

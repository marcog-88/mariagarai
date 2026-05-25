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
            <ul className="mt-4 text-base md:text-lg text-white max-w-xl">
              {[
                { main: "Un negocio boutique funcionando en 4 meses", sub: "📅 17 sesiones 1:1 con María" },
                { main: "Presencia digital que abre puertas mientras vives", sub: "⚡ Acompañamiento semanal intensivo" },
                { main: "Sistemas con IA que trabajan sin ti", sub: "🔒 Por aplicación · Plazas limitadas" },
              ].map((item) => (
                <li key={item.main} className="flex items-start gap-2 mb-4">
                  <span style={{ color: "#9378fe" }} aria-hidden className="mt-0.5">→</span>
                  <div>
                    <span>{item.main}</span>
                    <p className="text-sm text-white/50 mt-0.5">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <style>{`@keyframes expoDotPulse{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] md:text-xs uppercase tracking-[0.24em] text-white"
                style={{
                  background: "linear-gradient(180deg, #2a2a2a 0%, #141414 100%)",
                  border: "1.5px solid #9378fe",
                  boxShadow: "4px 0 12px rgba(147,120,254,0.5), -4px 0 12px rgba(147,120,254,0.5), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.3)",
                }}
              >
                <span
                  className="rounded-full flex-shrink-0"
                  style={{ width: "10px", height: "10px", background: "#9378fe", animation: "expoDotPulse 2s ease-in-out infinite" }}
                  aria-hidden
                />
                Por Aplicación
              </div>
            </div>
            <div className="mt-6">
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

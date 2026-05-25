import expoMockup from "@/assets/exponencial-premium-card.webp";

export const Exponencial = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#0c0d0e", borderTop: "1px solid rgba(147,120,254,0.2)" }}
    >
      <div className="container-tight">

        {/* Full-width label + headline */}
        <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#9378fe" }}>
          El Programa Flagship
        </p>
        <h2 className="text-5xl md:text-6xl font-serif tracking-tight leading-tight text-white whitespace-nowrap">
          Construye tu{" "}
          <span className="font-serif italic" style={{ color: "#9378fe" }}>
            Carrera Moderna
          </span>
        </h2>

        {/* Two-column below headline: body left, image right */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-stretch mt-12">

          {/* Left — body + bullets + CTA */}
          <div className="flex flex-col">
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
              El programa flagship para construir tu carrera moderna desde cero.
            </p>
            <ul className="mt-4 text-base md:text-lg text-white max-w-xl">
              {[
                { main: "Un negocio boutique funcionando en 4 meses", sub: "📅 17 sesiones 1:1 con María" },
                { main: "Presencia digital que abre puertas mientras vives", sub: "🛠️ LinkedIn, Substack y web incluidos" },
                { main: "Sistemas con IA que trabajan sin ti", sub: "🤖 Notion + Claude como infraestructura" },
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
            <div className="mt-8">
              <a href="/exponencial" className="btn-primary !px-6 !py-3 !text-sm">
                Ver el programa →
              </a>
              <p className="mt-3 text-xs text-white/40">Plazas limitadas · Por aplicación</p>
            </div>
          </div>

          {/* Right — image, stretches to match left column height */}
          <div className="rounded-[1.25rem] overflow-hidden border border-white/10 h-full">
            <img
              src={expoMockup}
              alt="Exponencial — Notion, Claude, LinkedIn y Substack."
              className="w-full h-full object-cover object-center block"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

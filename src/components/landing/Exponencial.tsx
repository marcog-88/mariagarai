import expoMockup from "@/assets/exponencial-premium-card.webp";

export const Exponencial = () => {
  return (
    <section
      id="programa-estrella"
      className="py-24 md:py-32"
      style={{ background: "#0c0d0e", borderTop: "1px solid rgba(147,120,254,0.2)" }}
    >
      <div className="container-tight">

        {/* Full-width label + headline */}
        <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#9378fe" }}>
          El Programa Estrella
        </p>
        <h2 className="text-5xl md:text-6xl font-serif tracking-tight leading-tight text-white">
          Exponencial: Construye tu{" "}
          <span className="font-serif italic" style={{ color: "#9378fe" }}>
            Carrera Moderna
          </span>{" "}
          en 90 días
        </h2>

        {/* Two-column below headline: body left, image right */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-center mt-12">

          {/* Left — body + bullets + CTA */}
          <div className="flex flex-col order-2 md:order-1">
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
              Con múltiples vías de ingreso, autoridad en redes y un sistema con IA que lo sostenga. Aunque sigas en corporate y no sepas por dónde empezar.
            </p>
            <ul className="mt-8 md:mt-10 text-base md:text-lg text-white max-w-xl">
              {[
                { main: "Un negocio propio facturando en 12 semanas", sub: "📅 1:1 semanal con María" },
                { main: "Presencia digital que genera ventas y autoridad", sub: "🛠️ LinkedIn, newsletter y web" },
                { main: "Sistemas con IA que facilitan tu trabajo", sub: "🤖 Notion + Claude" },
              ].map((item) => (
                <li key={item.main} className="flex items-start gap-2 mb-4">
                  <span
                    aria-hidden
                    className="flex-shrink-0 mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full"
                    style={{ background: "#9378fe" }}
                  >
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2.5,6.2 5,8.5 9.5,3.5" />
                    </svg>
                  </span>
                  <div>
                    <span>{item.main}</span>
                    <p className="text-base mt-0.5" style={{ color: "#9378fe" }}>{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="/exponencial" className="btn-primary w-full md:w-[220px] justify-center">
                Quiero saber más →
              </a>
              <p className="mt-3 text-xs italic text-white/40">Plazas limitadas · Por aplicación</p>
            </div>
          </div>

          {/* Right — image, natural ratio with curved corners */}
          <div className="flex items-center order-1 md:order-2">
            <a href="/exponencial" className="block w-full">
              <img
                src={expoMockup}
                alt="Exponencial — Notion, Claude, LinkedIn y Substack."
                className="w-full block rounded-[1.25rem]"
                loading="lazy"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

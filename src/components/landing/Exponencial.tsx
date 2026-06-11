import expoMockup from "@/assets/exponencial-premium-card.webp";
import { Reveal } from "./Reveal";

export const Exponencial = () => {
  return (
    <section
      id="programa-estrella"
      className="py-24 md:py-32"
      style={{ background: "#0c0d0e", borderTop: "1px solid rgba(147,120,254,0.2)" }}
    >
      <div className="container-tight">

        {/* Full-width label + headline */}
        <Reveal variant="blur">
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-white/40">
            Trabaja conmigo
          </p>
          <h2 className="text-5xl md:text-6xl font-serif italic tracking-tight leading-tight" style={{ color: "#9378fe" }}>
            Fórmula Exponencial
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
            El sistema para construir el negocio de servicios, consultoría o coaching que quieres en 4 meses.
          </p>
        </Reveal>

        {/* Two-column below headline: body left, image right */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-center mt-12">

          {/* Left — body + bullets + CTA */}
          <Reveal variant="left" delay={120} className="flex flex-col order-2 md:order-1">
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
              Tres activos que construimos juntas:
            </p>
            <ul className="mt-8 md:mt-10 text-base md:text-lg text-white max-w-xl">
              {[
                { main: "Tu Oferta Exponencial", sub: "Aterrizamos qué vendes, a quién, a qué precio. Validamos con clientes reales, subimos precios y optimizamos el modelo para vender lo que haces." },
                { main: "Tu Autoridad", sub: "Construimos tu marca en LinkedIn y Substack para la captación continua de clientes." },
                { main: "Tu IA", sub: "Configuramos Notion y Claude como tu socia operativa. La infraestructura que sostiene el negocio sin que tú estés en cada hora." },
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
            <p className="mt-6 text-base md:text-lg text-white/80 italic">
              Tú, la IA y yo. El equipo que escala tu negocio.
            </p>
            <div className="mt-8">
              <a
                href="/exponencial"
                className="btn-primary w-full md:w-auto justify-center whitespace-nowrap border-2 border-[#0c0d0e] !text-[#0c0d0e]"
                style={{
                  boxShadow:
                    "4px 4px 0 0 #0c0d0e, 8px 8px 28px rgba(147, 120, 254, 0.6), 14px 14px 56px rgba(147, 120, 254, 0.35)",
                }}
              >
                Conoce la Fórmula Exponencial →
              </a>
              <p className="mt-8 text-xs italic text-white/40">Plazas limitadas · Por aplicación</p>
            </div>
          </Reveal>

          {/* Right — image, natural ratio with curved corners */}
          <Reveal variant="scale" delay={250} className="flex items-center order-1 md:order-2">
            <a href="/exponencial" className="block w-full card-lift rounded-[1.25rem]">
              <img
                src={expoMockup}
                alt="Exponencial — Notion, Claude, LinkedIn y Substack."
                className="w-full block rounded-[1.25rem]"
                loading="lazy"
              />
            </a>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

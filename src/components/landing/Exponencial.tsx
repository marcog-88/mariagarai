import expoMockup from "@/assets/exponencial-premium-card.webp";
import { Reveal } from "./Reveal";

export const Exponencial = () => {
  return (
    <section
      id="programa-estrella"
      className="pt-24 pb-12 md:pt-32 md:pb-16"
      style={{ background: "#0c0d0e", borderTop: "1px solid rgba(147,120,254,0.2)" }}
    >
      <div className="container-tight">

        {/* Full-width label + headline + subhead */}
        <Reveal variant="blur">
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            Trabaja conmigo
          </p>
          <h2 className="text-5xl md:text-6xl font-serif italic tracking-tight leading-tight" style={{ color: "#9378fe" }}>
            Fórmula Exponencial
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
            El sistema para construir el negocio de servicios, consultoría o coaching que quieres en 4 meses.
          </p>
        </Reveal>

        {/* Mockup image — right after title/subhead */}
        <Reveal variant="scale" delay={150} className="mt-12">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 1px rgba(147,120,254,0.15), 0 24px 60px -12px rgba(147,120,254,0.45), 0 8px 32px -8px rgba(147,120,254,0.25)",
            }}
          >
            <div
              aria-hidden
              className="absolute -inset-px rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 0%, rgba(147,120,254,0.18) 0%, transparent 100%)",
              }}
            />
            <a href="/exponencial" className="block w-full">
              <img
                src={expoMockup}
                alt="Exponencial — Notion, Claude, LinkedIn y Substack."
                className="w-full block"
                loading="lazy"
              />
            </a>
          </div>
        </Reveal>

        {/* Body — single column, full width */}
        <Reveal delay={120} className="mt-12">
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
            Tres activos que construimos juntas:
          </p>
          <ul className="mt-8 md:mt-10 text-base md:text-lg text-white max-w-2xl">
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
        </Reveal>

        {/* CTA */}
        <Reveal delay={280} className="mt-10">
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
        </Reveal>
      </div>
    </section>
  );
};

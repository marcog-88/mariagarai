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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-tight text-white">
            La fórmula{" "}
            <em className="italic" style={{ color: "#9378fe" }}>EXPONENCIAL</em>{" "}
            para vivir de tu conocimiento.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
            En 90 días creamos tu <strong className="text-white/80 font-semibold">programa online de más de 2.000€</strong>: montado, validado con clientes reales y en propiedad.{" "}
            <span className="text-white/80">Todo funcionando, ya vendiendo, sin fricción técnica.</span>
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
          <div className="max-w-2xl space-y-8">
            <div className="flex items-start gap-4">
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
                <p className="text-lg md:text-xl font-semibold text-white">
                  <span style={{ color: "#9378fe" }}>LA FÓRMULA</span> · Defines, validas y vendes.
                </p>
                <p className="mt-2 text-base md:text-lg text-white/80 leading-relaxed">
                  Tu plan de negocio, tu avatar con capacidad de compra y tu oferta de más de 2.000€, con tu método propio y tu currículum. Sales al mercado con nuestro apoyo, prevendes tu programa y consigues tus primeras ventas antes de construirlo entero.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
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
                <p className="text-lg md:text-xl font-semibold text-white">
                  <span style={{ color: "#9378fe" }}>LA MÁQUINA</span> · Lo montamos todo.
                </p>
                <p className="mt-2 text-base md:text-lg text-white/80 leading-relaxed">
                  Tu página de venta, tu web, tu embudo con lead magnet de diagnóstico con IA, tu email marketing, tu academia con tus lecciones dentro y tu CRM. Montado paso a paso contigo, tuyo para siempre, sin pagar comisiones a plataformas ni agencias.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-10 max-w-2xl text-base md:text-lg text-white/50 leading-relaxed italic">
            Las plataformas te alquilan una habitación. De aquí sales con tu casa en propiedad.
          </p>
          <div className="mt-8 max-w-2xl text-base md:text-lg text-white/60 leading-relaxed">
            <p>
              Exponencial es un programa de formación, acompañamiento e implementación: te entregamos la infraestructura de tu programa llave en mano y trabajamos contigo la estrategia y las ventas. Sales con todo montado, con tu programa validado y con tus primeras ventas hechas.
            </p>
          </div>
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

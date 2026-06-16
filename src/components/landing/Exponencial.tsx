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
            En 4 meses construimos tu programa de formación online altamente rentable para ganar autoridad e ingresos escalables sin depender de tu tiempo.{" "}
            <span className="text-white/80">Todo montado, ya vendiendo, sin fricción técnica.</span>
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
          <p className="text-lg md:text-xl text-white/80 font-semibold leading-relaxed max-w-2xl">
            Construimos cuatro activos:
          </p>
          <ul className="mt-8 md:mt-10 text-base md:text-lg text-white max-w-2xl">
            {[
              { main: "Tu Programa Insignia.", sub: "Pivotamos tu negocio hacia un modelo de formación altamente rentable. Definimos tu método propio, tu avatar y el currículum de tu programa. Lo validamos rápido con clientes reales antes de construirlo entero." },
              { main: "Tu Autoridad.", sub: "Construimos tu marca en LinkedIn y tu newsletter para que te posiciones como referente de tu tema. Dejas de ser invisible y empiezas a atraer clientes en vez de perseguirlos." },
              { main: "Tus Ventas.", sub: "Testamos hasta encontrar el sistema de ventas que mejor encaja contigo y lo automatizamos. Tu embudo, tu guión, tus objeciones resueltas. Para vender cada semana sin presión y más allá de tu entorno." },
              { main: "Tu Infraestructura con IA.", sub: "La web que vende tu programa, tus sistemas de gestión internos, el email marketing y, por supuesto, tu academia. Todo montado, paso a paso, contigo. Sin fricción técnica ni pagar una fortuna en agencias." },
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
                  <span style={{ color: "#9378fe" }}>{item.main}</span>
                  <p className="text-base mt-0.5 text-white/80">{item.sub}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 max-w-2xl space-y-4 text-base md:text-lg text-white/60 leading-relaxed">
            <p>
              <span className="font-semibold text-white">Importante:</span> <em>No es una mentoría para hablar de tu negocio. No es una comunidad donde solo hay ruido. No es una agencia que te desconecta del proceso.</em>
            </p>
            <p>
              <em>Exponencial es un programa de formación, acompañamiento e implementación donde te damos la infraestructura de tu programa "llave en mano" y trabajamos contigo la estrategia de autoridad y ventas. Sales con todo montado, no con apuntes.</em>
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

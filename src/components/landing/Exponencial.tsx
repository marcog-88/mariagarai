import { Reveal } from "./Reveal";

// /exponencial retired here (Phase 1 migration) — laexponencial.com is now the
// only live sales page.
const LA_EXPONENCIAL = "https://www.laexponencial.com/";

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
            Crea y lanza tu programa online en 90 días
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
            El sistema para empaquetar tu conocimiento en un programa online con toda la infraestructura digital montada, sin bloqueos técnicos ni dudas al venderlo.
          </p>
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
                  <span style={{ color: "#9378fe" }}>FASE 1: LA FÓRMULA</span> · Diseñamos y validamos.
                </p>
                <p className="mt-2 text-base md:text-lg text-white/80 leading-relaxed">
                  Definimos tu plan de negocio, tu perfil de cliente ideal, tu oferta y su precio. Te ayudamos a salir al mercado y conseguir tus primeras ventas, sin redes ni anuncios.
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
                  <span style={{ color: "#9378fe" }}>FASE 2: LA MÁQUINA</span> · Lo montamos todo.
                </p>
                <p className="mt-2 text-base md:text-lg text-white/80 leading-relaxed">
                  Toda la parte digital que tu negocio requiere. Tu página de venta, tu embudo de captación automatizado, tu email marketing, tu academia con lecciones dentro y tus sistemas de gestión. Montado paso a paso contigo, tuyo para siempre, sin pagar comisiones a plataformas ni agencias.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 max-w-2xl text-base md:text-lg text-white/60 leading-relaxed">
            <p>
              Exponencial te ofrece algo que no existe en el mercado: te entregamos la infraestructura de tu programa llave en mano y trabajamos contigo la estrategia y las ventas. No sales con apuntes, sino con todo ya montado, tu programa validado y tus primeras ventas hechas.
            </p>
          </div>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-white/50 leading-relaxed italic">
            Las plataformas como Skool o Systeme te alquilan una habitación. De aquí sales con tu casa en propiedad, ya amueblada, hecha por y para ti. ¿Ves la diferencia?
          </p>
        </Reveal>

        {/* CTA */}
        <Reveal delay={280} className="mt-10">
          <a
            href={LA_EXPONENCIAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full md:w-auto justify-center whitespace-nowrap border-2 border-[#0c0d0e] !text-[#0c0d0e]"
            style={{
              boxShadow:
                "4px 4px 0 0 #0c0d0e, 8px 8px 28px rgba(147, 120, 254, 0.6), 14px 14px 56px rgba(147, 120, 254, 0.35)",
            }}
          >
            Conoce Exponencial →
          </a>
          <p className="mt-8 text-xs italic text-white/40">Plazas limitadas · Por aplicación</p>
        </Reveal>
      </div>
    </section>
  );
};

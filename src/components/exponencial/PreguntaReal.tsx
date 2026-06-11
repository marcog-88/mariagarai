import { TidyCalButton } from "@/components/construye/TidyCalButton";
import { Reveal } from "@/components/landing/Reveal";

const cardA = [
  "Otro mes vendiendo solo a tu entorno",
  "Otro mes con tu negocio a medio montar",
  "Otro mes facturando menos de lo que podrías",
  "La brecha con las que ya han empezado se hace más grande",
];

const cardB = [
  "Una oferta de alto valor con clientes reales pagando",
  "Una marca de autoridad que atrae oportunidades",
  "Sistemas con IA que trabajan sin ti cada hora",
  "Un negocio que se ve tan profesional como tú eres",
];

export const PreguntaReal = () => {
  return (
    <section className="pt-20 pb-24 md:py-32" style={{ background: "#ffffff" }}>
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-14">
            <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]">
              <span className="inline-block px-3 py-1 rounded-full" style={{ background: "#9378fe", color: "#ffffff" }}>
                La pregunta real
              </span>
            </p>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight text-foreground">
              No es si puedes permitirte entrar.
            </h2>
            <p className="mt-4 text-lg md:text-2xl text-foreground/70">
              Es si puedes permitirte no hacerlo. Cada mes que esperas tiene un coste real.
            </p>
          </div>
        </Reveal>

        {/* Vertical ledger: the cost of waiting fades, the payoff lands */}
        <div className="max-w-xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-foreground/45 mb-5 font-medium text-center">
              Si no haces nada
            </p>
            <ul className="space-y-3">
              {cardA.map((it, i) => (
                <li
                  key={it}
                  className="flex gap-3 justify-center text-center leading-relaxed"
                  style={{ color: `rgba(12,13,14,${0.6 - i * 0.1})` }}
                >
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="scale" delay={150}>
            <div className="my-10 flex flex-col items-center gap-2" aria-hidden>
              <span className="w-px h-10 bg-gradient-to-b from-transparent to-[#9378fe]" />
              <span className="font-serif italic text-lg" style={{ color: "#9378fe" }}>
                o
              </span>
              <span className="w-px h-10 bg-gradient-to-b from-[#9378fe] to-transparent" />
            </div>
          </Reveal>

          <Reveal variant="blur" delay={200}>
            <div
              className="rounded-2xl p-8 md:p-10 text-center"
              style={{
                background: "#0c0d0e",
                boxShadow: "0 24px 60px -24px rgba(147,120,254,0.5)",
              }}
            >
              <p className="text-xs uppercase tracking-[0.18em] mb-5 font-semibold" style={{ color: "#b7a5ff" }}>
                En 4 meses
              </p>
              <ul className="space-y-3.5">
                {cardB.map((it) => (
                  <li key={it} className="text-white leading-relaxed">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-12 text-center font-semibold text-lg md:text-xl text-foreground max-w-2xl mx-auto">
            El dinero que inviertes hoy es el coste de no pasar otros años en prueba y error.
          </p>

          <div className="mt-8 flex justify-center">
            <TidyCalButton
              className="btn-mint-lg whitespace-nowrap border-2 border-[#0c0d0e] !text-[#0c0d0e]"
              style={{ boxShadow: "4px 4px 0 0 #0c0d0e" }}
            >
              Empieza ahora <span aria-hidden>→</span>
            </TidyCalButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

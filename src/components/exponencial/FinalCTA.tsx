import { Reveal } from "@/components/landing/Reveal";

const TIDYCAL = "https://tidycal.com/mariagarai/exploracion";

export const FinalCTA = () => {
  return (
    <section
      className="relative overflow-hidden pt-24 md:pt-32 pb-12 md:pb-16"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div aria-hidden className="aurora" />
      <div className="container-tight relative">
        <Reveal variant="blur">
          <h2 className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-5xl">
            En 90 días,{" "}
            <br className="md:hidden" />
            <em className="font-serif italic text-mint">tú no eres la misma.</em>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-12 max-w-3xl space-y-4 text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
            <li className="flex gap-3"><span>✨</span><span>Tu programa online de más de 2.000€ con clientes reales pagando</span></li>
            <li className="flex gap-3"><span>🌟</span><span>Tu academia, tu web y tu embudo montados, tuyos, sin comisiones</span></li>
            <li className="flex gap-3"><span>⚡</span><span>La IA trabajando como tu socia operativa, y tú sabiendo manejarla como una pro</span></li>
          </ul>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.24em] text-mint mb-2">Tu inversión</p>
            <div className="flex items-baseline gap-4 flex-wrap">
              <span className="font-serif text-3xl md:text-4xl text-primary-foreground/40 line-through decoration-primary-foreground/40">
                €4500
              </span>
              <span className="font-serif text-6xl md:text-7xl text-primary-foreground">€3000</span>
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-mint font-semibold">Precio de lanzamiento</p>
            <p className="mt-2 text-primary-foreground/60 italic text-sm">Pago único o fraccionado · Por aplicación</p>
          </div>

          <div className="mt-10 flex flex-col items-start gap-10">
            <a
              href={TIDYCAL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mint-lg !text-lg w-full md:w-auto justify-center whitespace-nowrap border-2 border-[#0c0d0e] !text-[#0c0d0e]"
              style={{
                boxShadow:
                  "4px 4px 0 0 #0c0d0e, 8px 8px 28px rgba(147, 120, 254, 0.6), 14px 14px 56px rgba(147, 120, 254, 0.35)",
              }}
            >
              Reserva tu plaza
              <span aria-hidden>→</span>
            </a>
            <a
              href={TIDYCAL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] sm:text-sm italic whitespace-nowrap text-primary-foreground/65 hover:text-mint underline underline-offset-4"
            >
              ¿Tienes dudas? → Llamada de exploración
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

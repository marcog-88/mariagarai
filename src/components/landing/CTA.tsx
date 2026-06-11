import { Reveal } from "./Reveal";

export const CTA = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden pt-28 pb-12 md:py-40 border-t border-border"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div aria-hidden className="aurora" />
      <div className="container-tight relative">
        <Reveal variant="blur">
          <h2 className="display text-primary-foreground max-w-5xl">
            Es momento de{" "}
            <em className="font-serif italic text-accent md:block">volverte exponencial.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-10 max-w-4xl text-lg md:text-xl text-primary-foreground leading-relaxed">
            Reserva una llamada y lo vemos juntas.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-16 md:mt-20">
            <a
              href="https://tidycal.com/mariagarai/exploracion"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full md:w-auto border-2 border-[#0c0d0e] !text-[#0c0d0e]"
              style={{
                boxShadow:
                  "4px 4px 0 0 #0c0d0e, 8px 8px 28px rgba(147, 120, 254, 0.6), 14px 14px 56px rgba(147, 120, 254, 0.35)",
              }}
            >
              Reservar llamada a coste 0
              <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

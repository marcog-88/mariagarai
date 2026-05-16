export const CTA = () => {
  return (
    <section
      id="cta"
      className="py-28 md:py-40 border-t border-border"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <h2 className="display text-primary-foreground max-w-5xl">
          Es momento de construir{" "}
          <em className="font-serif italic text-accent md:block">algo que sea tuyo.</em>
        </h2>
        <p className="mt-10 max-w-4xl text-lg md:text-xl text-primary-foreground leading-relaxed">
          Trabaja conmigo dentro de la Escuela de Carreras Modernas.
        </p>

        <div className="mt-8 md:mt-10">
          <a
            href="https://tidycal.com/mariagarai/exploracion"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Reservar llamada a coste 0
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
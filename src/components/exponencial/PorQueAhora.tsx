export const PorQueAhora = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          Por qué ahora
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-4xl">
          Cada mes que no construyes algo propio{" "}
          <em className="font-serif italic text-mint">no es neutral.</em>
        </h2>

        <div className="mt-12 max-w-3xl space-y-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
          <p>
            Es un mes en el que pierdes dinero, seguridad y la oportunidad de crear algo alineado que te dé libertad y satisfacción.
          </p>
          <p>
            No es una cuestión de si el momento es perfecto. El momento perfecto no llega. Es una cuestión de cuánto más te vas a costar a ti misma esperando.
          </p>
          <p>
            La ventana de ventaja competitiva con IA es ahora. Las profesionales que construyen sus sistemas este año tendrán una infraestructura que en 18 meses costará el doble de tiempo replicar.
          </p>
          <p className="font-serif italic text-2xl md:text-3xl text-mint leading-snug">
            Máximo 2 clientas nuevas al mes. No es urgencia fabricada — es la realidad de trabajar en formato 1:1 con seguimiento semanal real.
          </p>
        </div>
      </div>
    </section>
  );
};

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
        <h2 className="font-serif text-[clamp(1.5rem,6.5vw,2rem)] md:text-4xl leading-tight md:leading-[1.05] tracking-tight text-primary-foreground max-w-5xl">
          La tecnología te permite hacer en 8 semanas lo que antes costaba{" "}
          <span className="text-mint italic md:block">6 meses y €20000–€30000.</span>
        </h2>
        <p className="mt-10 max-w-4xl text-sm md:text-xl text-primary-foreground/80 leading-relaxed">
          Cada mes que pasa sin infraestructura es un mes en el que pierdes leads que no
          captas, clientes que no encuentran tu web, oportunidades que se van porque tu
          negocio no se ve profesional.
        </p>
      </div>
    </section>
  );
};

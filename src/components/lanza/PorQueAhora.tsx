export const PorQueAhora = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          Por qué ahora · El error de los 100.000 euros
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-4xl">
          Yo también lo hice <em className="font-serif italic text-mint">mal.</em>
        </h2>

        <div className="mt-12 max-w-3xl space-y-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
          <p>
            Salí del corporate con 10 años de experiencia. ONU. P&amp;G. Startups
            internacionales. Creía que lo tenía todo a mi favor.
          </p>
          <p>
            Invertí más de 100.000 euros sin saber qué estaba construyendo ni para quién. Pasé
            de tener ahorros a tener deudas.
          </p>
          <p>
            Construí la web antes de tener clientes. Diseñé el branding antes de validar la
            oferta. Creé contenido durante meses antes de vender mi primera plaza.
          </p>
          <p className="text-primary-foreground">
            Lo que cambió todo no fue trabajar más. Fue trabajar al revés.
          </p>
          <p className="font-serif italic text-2xl md:text-3xl text-mint leading-snug">
            Validar antes de crear. Vender antes de perfeccionar. Hablar con personas reales
            antes de construir nada.
          </p>
          <p>
            Eso es exactamente lo que te enseño en Lanza y Vende. En 8 semanas. Para que no
            tardes 3 años en aprender lo que yo aprendí a un coste enorme.
          </p>
        </div>
      </div>
    </section>
  );
};

export const Comparativa = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-tight">
        <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#9378fe" }}>
          Lo que te ahorras
        </p>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight max-w-3xl">
          Cómo es diferente de lo que lees gratis en internet.
        </h2>

        <div className="mt-12 max-w-3xl space-y-6 text-base md:text-lg leading-relaxed text-foreground/85">
          <p>
            La teoría la puedes encontrar en cualquier sitio. Los tips gratuitos te dicen
            "valida tu idea" y "habla con tu cliente ideal."
          </p>
          <p className="font-serif text-2xl md:text-3xl text-foreground italic">
            Esto no es teoría. Es implementación con seguimiento.
          </p>
          <p>
            Lanzas tu primera oferta en las primeras semanas. No creas cosas por crear — todo
            está orientado a vender desde la primera acción. Tienes a María revisando tu
            estrategia, tu oferta y tus conversaciones de venta cada semana.
          </p>
          <p>
            La diferencia entre leer sobre validación y tener tu primera venta cerrada es
            exactamente eso: alguien que te acompaña a hacer el trabajo, no solo a entenderlo.
          </p>
        </div>

        <p className="mt-16 mb-10 text-base md:text-lg text-mint font-medium max-w-3xl">
          Cada mes que pasa sin validar son ingresos que no entran. La diferencia entre
          lanzar este mes y dentro de 6 meses son €15000–30000 que no facturas. Ese es el
          coste real de esperar.
        </p>

        <div
          className="mt-12 rounded-2xl p-10 md:p-16"
          style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
        >
          <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            La regla de las 10 reuniones
          </p>
          <h3 className="font-serif text-3xl md:text-4xl text-primary-foreground leading-tight max-w-3xl mb-8">
            No tienes una oferta validada hasta que has tenido 10 reuniones de venta uno a
            uno. Punto.
          </h3>
          <div className="max-w-3xl space-y-5 text-lg text-primary-foreground/85 leading-relaxed">
            <p>
              Estas reuniones no son solo para vender. Son para obtener consultoría gratuita
              de tus clientes potenciales sobre qué les detiene a comprar.
            </p>
            <p>
              Después de 10, sabes exactamente qué funciona, qué objeciones tienen y cómo
              ajustar tu oferta para que venda sola.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

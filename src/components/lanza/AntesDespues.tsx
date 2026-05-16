export const AntesDespues = () => {
  return (
    <section className="pt-0 pb-24 md:pb-32 bg-background">
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          🎯 Caso real · Marián
        </p>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight max-w-4xl">
          De empleada a empresa de eventos.
        </h2>

        <div className="mt-12 max-w-3xl space-y-6 text-base md:text-lg leading-relaxed text-foreground/85">
          <p>
            <span className="font-medium text-foreground">Su impulso inicial:</span>{" "}
            "Monto la web, hago el branding, espero a que me compren."
          </p>
          <p className="font-serif text-2xl md:text-3xl text-foreground italic">
            Lo que hicimos al revés.
          </p>
          <p>Trabajamos en dos frentes a la vez:</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="rounded-xl border-l-4 p-6 bg-muted/40" style={{ borderLeftColor: "hsl(var(--mint))" }}>
            <h3 className="font-serif text-xl mb-3 text-foreground">🎪 Eventos boutique en su ciudad</h3>
            <p className="text-foreground/75 leading-relaxed">
              Empezó haciendo encuentros pequeños para mujeres como vía de validación. Eso le
              abrió visibilidad rápida con su comunidad y los primeros encargos de eventos
              corporativos a través de las asistentes.
            </p>
          </div>
          <div className="rounded-xl border-l-4 p-6 bg-muted/40" style={{ borderLeftColor: "hsl(var(--mint))" }}>
            <h3 className="font-serif text-xl mb-3 text-foreground">🔗 Activación de red y prospección estructurada</h3>
            <p className="text-foreground/75 leading-relaxed">
              Reactivó sus contactos. Profesionalizó las conversaciones. Hizo seguimiento
              sistemático. Empezó a prospectar en LinkedIn con una oferta concreta y un
              mensaje claro.
            </p>
          </div>
        </div>

        <div
          className="mt-10 rounded-2xl p-8 md:p-10 max-w-5xl"
          style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
        >
          <p className="text-xs uppercase tracking-[0.24em] text-mint mb-3">🏆 Resultado</p>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            Pasó de empleada a tener encargos pagados antes de tener web, branding o nada
            construido.
          </p>
        </div>

        <p className="mt-10 text-center font-serif italic text-lg md:text-2xl" style={{ color: "#ff4295" }}>
          Esto es lo que pasa cuando vendes primero.
        </p>
      </div>
    </section>
  );
};

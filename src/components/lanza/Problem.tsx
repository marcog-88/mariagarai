export const Problem = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          El problema
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight max-w-4xl">
          Has rediseñado tu oferta tres veces. La has vendido cero.
        </h2>

        <div className="mt-16 max-w-3xl space-y-8 text-sm md:text-base leading-relaxed text-foreground/80">
          <p>
            Tienes diez cosas que podrías enseñar. Diez ideas en la cabeza. Llevas meses
            dándole vueltas — qué vender, a quién, cómo cobrar.
          </p>
          <p>Te pasas horas perfeccionando. Luego no vendes.</p>
          <p>
            Te ilusionas con una idea. La medio intentas. Desistes. Vuelves a empezar con otra.
          </p>
          <p>Mientras tanto, llevas un año (o más) sin facturar nada.</p>
          <p>
            No es que te falte conocimiento. Es que estás construyendo en el vacío. Creando
            antes de validar. Perfeccionando antes de vender. Esperando a tenerlo todo listo
            antes de salir.
          </p>
        </div>
      </div>
    </section>
  );
};

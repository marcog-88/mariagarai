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
          Cada mes invisible es un mes que{" "}
          <em className="font-serif italic text-mint">le regalas a tu competencia.</em>
        </h2>

        <div className="mt-10 max-w-3xl space-y-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
          <p>
            No es que no tengas tiempo. Es que llevas tiempo esperando el momento perfecto
            para empezar.
          </p>
          <p>
            Mientras tanto, hay alguien con menos experiencia que tú, pero con LinkedIn y
            Substack activos, que está teniendo las conversaciones que podrían ser tuyas.
            Consiguiendo los clientes que podrían ser tuyos.
          </p>
          <p>
            Substack está creciendo a pasos agigantados. Es el momento de poner tu bandera y
            reclamar tu voz antes de que el espacio se llene.
          </p>
          <p className="font-serif italic text-2xl md:text-3xl text-mint leading-snug">
            Tu conocimiento no caduca. Pero el momento de posicionarte, sí.
          </p>
        </div>
      </div>
    </section>
  );
};

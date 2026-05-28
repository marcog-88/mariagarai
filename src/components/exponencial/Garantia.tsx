import mariaGarantia from "@/assets/maria-garantia.webp";

export const Garantia = () => {
  const items = [
    "Tu oferta validada con clientes reales",
    "Tu LinkedIn y Substack activos y con seguimiento creciente",
    "Tu web profesional publicada",
    "Tu lead magnet capturando leads automáticamente",
    "Tu Notion funcionando como sistema operativo",
  ];

  return (
    <section
      className="pt-12 md:pt-16 pb-8"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.03] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start">
            <img
              src={mariaGarantia}
              alt="María Garaí"
              className="aspect-[4/5] md:w-[280px] lg:w-[300px] flex-shrink-0 rounded-2xl object-cover border border-primary-foreground/20"
              style={{ boxShadow: "0 0 32px hsl(var(--mint) / 0.4)" }}
            />
            <div>
              <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
                Garantía de resultados
              </p>
              <h2 className="font-serif text-2xl md:text-2xl lg:text-4xl font-bold text-mint">
                Si haces el trabajo, yo garantizo los resultados.
              </h2>
              <p className="mt-8 text-sm md:text-sm lg:text-base text-primary-foreground/80 leading-relaxed">
                Me comprometo a que al final de los 4 meses tengas:
              </p>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-primary-foreground/80 leading-relaxed text-sm md:text-base">
                    <span className="text-mint flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm md:text-sm lg:text-base text-primary-foreground/80 leading-relaxed">
                Si has hecho el trabajo cada semana y algo de esto no está al final, seguimos sin coste adicional hasta que lo esté.
              </p>
              <p className="text-sm text-primary-foreground/60 mt-4 leading-snug italic">
                Máximo 2 clientas nuevas al mes. Cuando los huecos están llenos, la lista de espera puede durar semanas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

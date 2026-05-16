import mariaGarantia from "@/assets/maria-garantia.jpg";

export const Garantia = () => {
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
              style={{ boxShadow: "0 0 32px rgba(208,252,208,0.4)" }}
            />
            <div>
              <p className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
                Garantía de resultados
              </p>
              <h2 className="font-serif text-2xl md:text-2xl lg:text-4xl font-bold text-mint">
                Si haces el trabajo, yo garantizo los resultados.
              </h2>
              <p className="mt-8 text-sm md:text-sm lg:text-base text-primary-foreground/80 leading-relaxed">
                Me comprometo a que al final de las 8 semanas tengas tu web, tu landing y tus
                sistemas montados y funcionando. Si llegamos al final del programa y algo no está
                completo, seguimos trabajando hasta que lo esté. Sin coste adicional.
              </p>
              <p className="text-sm md:text-sm lg:text-base text-mint mt-4 leading-snug">
                Solo acepto 2 clientes nuevos en Construye cada mes para poder dar el nivel de
                atención que esto requiere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

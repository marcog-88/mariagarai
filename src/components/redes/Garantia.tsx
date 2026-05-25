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
              style={{ boxShadow: "0 0 32px hsl(var(--mint) / 0.4)" }}
            />
            <div>
              <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
                Garantía de resultados
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-mint max-w-3xl">
                Si haces el trabajo, los resultados llegan.
              </h2>
              <div className="mt-8 max-w-3xl space-y-5 text-base md:text-lg text-primary-foreground/85 leading-relaxed">
                <p>
                  Redes que Venden no es un curso que ves y olvidas. Es un programa de
                  implementación acompañada. Si completas las 30 acciones y las 8 sesiones grupales y
                  no tienes ambos canales operativos y una estrategia de prospección activa,
                  hablamos.
                </p>
                <p>
                  No doy garantías de ingresos — nadie honesto las da. Sí garantizo que si haces
                  el trabajo, sales con los dos canales montados, un sistema de contenido
                  funcionando y claridad total sobre cómo vender desde ellos.
                </p>
              </div>
              <p className="mt-8 text-sm md:text-base text-mint italic">
                Acepto un máximo de 20 personas por cohorte para mantener la calidad del acompañamiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

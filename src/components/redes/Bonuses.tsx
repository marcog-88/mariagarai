const bonuses = [
  {
    n: "01",
    title: "🏫 Acceso 3 meses a la comunidad de la Escuela de Carreras Modernas",
    valor: "€497",
    body: "Rodeada de founders en transición. Celebramos logros, compartimos aprendizajes, no estás sola en esto.",
  },
  {
    n: "02",
    title: "👥 6 sesiones grupales quincenales de la Escuela",
    valor: "€400",
    body: "Sesiones en directo donde trabajamos redes, ventas y automatizaciones cada 2 semanas durante tus 3 meses de acceso.",
  },
  {
    n: "03",
    title: "🤖 Sistema de Contenido y Automatizaciones con IA",
    valor: "€397",
    body: "De un contenido largo en Substack a 10 piezas cortas para LinkedIn. Con prompts y automatizaciones listas para usar en Claude.",
  },
  {
    n: "04",
    title: "📋 Plantillas de contenido LinkedIn plug and play",
    valor: "€197",
    body: "Los 10 formatos de post que funcionan para vender sin parecer que estás vendiendo. Copia, adapta, publica.",
  },
  {
    n: "05",
    title: "🎙️ Monta tu podcast en Substack desde cero",
    valor: "€297",
    body: "Tutorial paso a paso para lanzar tu podcast directamente dentro de Substack. Sin edición compleja, sin plataformas extra.",
  },
  {
    n: "06",
    title: "📅 Rutina semanal y mensual de mantenimiento",
    valor: "€147",
    body: "El sistema exacto para mantener ambos canales activos con mínimo esfuerzo después de los 30 días. Sin volver a caer en el silencio.",
  },
];

export const Bonuses = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-tight">
        <p className="mb-12 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          🎁 Bonuses incluidos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonuses.map((b) => (
            <div key={b.n} className="rounded-2xl bg-mint/15 border border-mint/30 p-8 text-foreground">
              <div className="flex items-baseline justify-start md:justify-end mb-4">
                <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-primary text-primary-foreground font-medium">
                  Valor {b.valor}
                </span>
              </div>
              <h3 className="font-serif text-xl md:text-2xl mb-3 leading-tight">
                {b.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-16 rounded-2xl p-10 md:p-16"
          style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
        >
          <div className="space-y-4 text-center">
            <p className="text-sm md:text-base text-primary-foreground/60">
              Valor total en bonuses: <span className="font-medium">€1935</span>
            </p>
            <p className="text-xl font-medium text-primary-foreground/40 line-through">
              Valor total del programa: €2735
            </p>
            <div className="pt-8">
              <p className="text-xs uppercase tracking-[0.24em] text-mint mb-3">
                Tu inversión hoy
              </p>
              <p className="font-serif text-7xl md:text-8xl font-bold text-mint leading-none">
                €800
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

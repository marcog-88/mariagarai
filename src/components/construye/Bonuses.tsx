const bonuses = [
  {
    n: "01",
    title: "🏫 Acceso 3 meses a la Escuela",
    valor: "€497",
    body: "Rodeada de founders en transición. Celebramos logros, compartimos aprendizajes, te sientes arropada.",
  },
  {
    n: "02",
    title: "🎙️ 6 sesiones quincenales",
    valor: "€400",
    body: "Sesiones en directo donde trabajamos redes, ventas y automatizaciones. Cada 2 semanas durante tus 3 meses de acceso.",
  },
  {
    n: "03",
    title: "🔍 Auditoría inicial de negocio",
    valor: "€297",
    body: "En la primera sesión hacemos un diagnóstico completo — qué tienes, qué falta, por dónde empezamos.",
  },
  {
    n: "04",
    title: "✅ Checklist de lanzamiento web",
    valor: "€197",
    body: "La lista exacta de todo lo que necesitas revisar antes de publicar tu web. SEO básico, textos legales, velocidad, móvil, enlaces.",
  },
  {
    n: "05",
    title: "📅 Guía de mantenimiento mensual",
    valor: "€197",
    body: "Qué revisar cada mes en tu Notion, tu web, tu embudo y tu lead magnet para que todo siga funcionando. 30 minutos al mes.",
  },
  {
    n: "06",
    title: "🤖 Biblioteca de recursos IA",
    valor: "€297",
    body: "Acceso a la selección de herramientas, prompts y recursos de IA que María usa en su negocio. Actualizada continuamente.",
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
            <div key={b.n} className="rounded-2xl bg-mint/15 border border-[#2d8a4e]/40 p-8 text-foreground">
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
              Valor total en bonuses:{" "}
              <span className="font-medium">€1885</span>
            </p>
            <p className="text-xl font-medium text-primary-foreground/40 line-through">
              Valor total del programa: €5882
            </p>
            <div className="pt-8">
              <p className="text-xs uppercase tracking-[0.24em] text-mint mb-3">
                Tu inversión hoy
              </p>
              <p className="font-serif text-7xl md:text-8xl font-bold text-mint leading-none">
                €1997
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

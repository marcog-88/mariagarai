const bonuses = [
  {
    n: "01",
    title: "🧠 Manual de Marca + Claude",
    valor: "€397",
    body: "Te ayudamos a crear tu manual de marca y a configurar Claude para que sepa todo de tu negocio. Tu co-piloto de contenido desde el día 1.",
  },
  {
    n: "02",
    title: "📊 CRM Notion + Colaboraciones",
    valor: "€297",
    body: "Dos plantillas listas para usar: gestiona tus leads y prospectos con un CRM profesional, y organiza tus colaboraciones estratégicas en Substack y LinkedIn.",
  },
  {
    n: "03",
    title: "🤖 Contenido y Automatizaciones IA",
    valor: "€397",
    body: "Prompts, workflows y automatizaciones para crear contenido en la mitad de tiempo. Desde la ideación hasta la publicación — con IA como motor.",
  },
  {
    n: "04",
    title: "📋 Plantillas LinkedIn + Substack",
    valor: "€197",
    body: "Los formatos de post y newsletter que funcionan para vender sin parecer que estás vendiendo. Copia, adapta, publica.",
  },
  {
    n: "05",
    title: "✉️ Plantillas de Email Marketing",
    valor: "€197",
    body: "Emails de venta listos para rellenar. Sin adivinar qué escribir. Rellena los huecos y envía. Para lanzamientos, seguimiento y conversión.",
  },
  {
    n: "06",
    title: "🎙️ Monta tu podcast en Substack",
    valor: "€297",
    body: "Tutorial paso a paso para lanzar tu podcast directamente dentro de Substack. Sin edición compleja, sin plataformas extra.",
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
              Valor total en bonuses: <span className="font-medium">€1.782</span>
            </p>
            <p className="text-xl font-medium text-primary-foreground/40 line-through">
              Valor total del programa: €2.279
            </p>
            <div className="pt-8">
              <p className="text-xs uppercase tracking-[0.24em] text-mint mb-3">
                Tu inversión hoy
              </p>
              <p className="font-serif text-7xl md:text-8xl font-bold text-mint leading-none">
                €497
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

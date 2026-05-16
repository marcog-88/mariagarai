const bonuses = [
  {
    n: "01",
    title: "📄 Dossier de Venta",
    valor: "€297",
    body: "El documento con toda la estructura, los argumentos y el copy de tu propuesta de servicios. Listo para enviar a potenciales clientes.",
  },
  {
    n: "02",
    title: "🧲 Lead Magnet Express",
    valor: "€197",
    body: "Tutorial paso a paso para construir tu primer lead magnet en versión beta. Sin necesitar perfil técnico.",
  },
  {
    n: "03",
    title: "✉️ Email Marketing Básico",
    valor: "€297",
    body: "La secuencia básica que convierte suscriptores en clientes. Setup mínimo en ConvertKit. Sin complejidad.",
  },
  {
    n: "04",
    title: "🛠️ Tech Stack Recomendado",
    valor: "€97",
    body: "Las herramientas exactas que necesitas para operar tu negocio desde el día 1. Sin pagar de más. Sin distraerte con lo que no toca.",
  },
  {
    n: "05",
    title: "🔄 Traductor de Habilidades Corporativas",
    valor: "€297",
    body: "Convierte tu experiencia en corporate en propuestas de valor concretas para el mercado independiente.",
  },
  {
    n: "06",
    title: "💰 Calculadora de Precios",
    valor: "€197",
    body: "Herramienta personalizada que te ayuda a saber qué cobrar en cada momento de tu negocio. Sin adivinanzas.",
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
              Valor total en bonuses:{" "}
              <span className="font-medium">€1382</span>
            </p>
            <p className="text-xl font-medium text-primary-foreground/40 line-through">
              Valor total del programa: €4382
            </p>
            <div className="pt-8">
              <p className="text-xs uppercase tracking-[0.24em] text-mint mb-3">
                Tu inversión hoy
              </p>
              <p className="font-serif text-7xl md:text-8xl font-bold text-mint leading-none">
                €1750
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

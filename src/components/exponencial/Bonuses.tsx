import { Reveal } from "@/components/landing/Reveal";

const bonuses = [
  {
    emoji: "📄",
    title: "La Sales Page que Vende Sola",
    valor: "€1.500",
    body: "La estructura y el copy de página de ventas de alta conversión que usan los emprendedores anglosajones para facturar millones. Montada en Lovable, lista para Stripe, lista para duplicar y reutilizar en 90 segundos. Para que subas precios sin que el envoltorio te perjudique.",
  },
  {
    emoji: "🧲",
    title: "El Lead Magnet que Engancha",
    valor: "€997",
    body: "Tu lead magnet interactivo en formato app, conectado a Notion y email marketing, con vídeo de ventas incluido. Deja de mandar PDFs que nadie lee. Sé la primera en ofrecer algo así en tu sector.",
  },
  {
    emoji: "🏛️",
    title: "Monta tu Academia",
    valor: "€1.200",
    body: "Desde tu portal en Notion hasta construir tu propia plataforma con IA. Te enseño dónde y cómo alojar tu formación de alto valor, qué herramientas elegir según tu caso, y cómo montar tu propia academia con Claude. Para que vendas formación con una plataforma que se ve profesional.",
  },
  {
    emoji: "🤖",
    title: "Claude como tu Cofundador",
    valor: "€997",
    body: "Configuración pro de Claude. Cómo nutrirlo con el contexto de tu negocio (manual de marca, branding, estrategia). Claude Design y otras IAs que te ahorran horas en Canva. Conexión Notion + Claude. Los prompts y automatizaciones que yo uso cada día.",
  },
];

export const Bonuses = () => {
  return (
    <section className="py-24 md:py-32" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <Reveal>
          <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
            🎁 Bonuses incluidos
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-foreground max-w-3xl mb-12">
            €4.694 en bonuses.{" "}
            <em className="font-serif italic" style={{ color: "#9378fe" }}>
              Más que el precio del programa.
            </em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonuses.map((b, i) => (
            <Reveal key={i} delay={(i % 2) * 130}>
              <div className="card-lift h-full rounded-2xl bg-white border border-border p-8 text-foreground">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full text-2xl"
                    style={{ background: "rgba(147,120,254,0.12)" }}
                  >
                    {b.emoji}
                  </span>
                  <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-primary text-primary-foreground font-medium">
                    Valor {b.valor}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl mb-3 leading-tight">
                  {b.title}
                </h3>
                <p className="text-foreground/75 leading-relaxed">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

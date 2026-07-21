import { Reveal } from "@/components/landing/Reveal";

const bonuses = [
  {
    emoji: "✅",
    title: "Kit de Validación",
    valor: "497€",
    body: "Templates y scripts para validar y prevender tu programa antes de construirlo.",
  },
  {
    emoji: "💬",
    title: "Kit de Ventas",
    valor: "997€",
    body: "Tu manual de ventas, guion de llamada y objeciones resueltas.",
  },
  {
    emoji: "🎬",
    title: "Kit de Lecciones",
    valor: "697€",
    body: "Crea tus lecciones con IA y Claude Design, paso a paso.",
  },
  {
    emoji: "🗂️",
    title: "Kit Notion",
    valor: "497€",
    body: "El sistema operativo de tu negocio: gestión, planificación y plantillas de María.",
  },
  {
    emoji: "🤖",
    title: "Kit Claude",
    valor: "997€",
    body: "Conviértete en una pro de Claude: configuración, prompts y automatizaciones.",
  },
  {
    emoji: "🌐",
    title: "Kit Web",
    valor: "597€",
    body: "Tu landing page adicional para lo que necesites.",
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
            4.282€ en bonuses incluidos.{" "}
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

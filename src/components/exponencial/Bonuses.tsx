const bonuses = [
  {
    title: "🗂️ Notion Starter Pack",
    valor: "€297",
    body: "La plantilla completa de Notion que usa María para gestionar su negocio. CRM, tracker de contenido, finanzas, pipeline de clientes. Lista para usar desde la primera sesión.",
  },
  {
    title: "🤖 Biblioteca de Prompts",
    valor: "€197",
    body: "Más de 50 prompts personalizados para crear contenido, escribir emails, preparar llamadas de venta y gestionar clientes. Claude configurado para tu negocio.",
  },
  {
    title: "📧 Secuencia de Bienvenida",
    valor: "€397",
    body: "La secuencia de 5 emails que convierte nuevos suscriptores en clientes potenciales. Adaptada a tu voz y tu oferta durante las sesiones.",
  },
  {
    title: "🎙️ Guión de Llamada de Venta",
    valor: "€197",
    body: "El guión exacto de llamada de valoración que usa María. Con preguntas, estructura y cierres que convierten — sin manipulación, con criterio.",
  },
  {
    title: "🔗 LinkedIn Profile Audit",
    valor: "€297",
    body: "Revisión y reescritura completa de tu perfil de LinkedIn — titular, extracto, experiencia y sección destacada. Hecho durante las primeras sesiones.",
  },
  {
    title: "♾️ Workshops Mensuales",
    valor: "Incluido",
    body: "Todos los workshops de Carreras Modernas mientras el programa esté activo. Ventas, IA, contenido y sistemas — cada mes.",
  },
];

export const Bonuses = () => {
  return (
    <section className="py-24 md:py-32" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <p className="mb-12 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          🎁 Bonuses incluidos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonuses.map((b, i) => (
            <div key={i} className="rounded-2xl bg-white border border-border p-8 text-foreground">
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
      </div>
    </section>
  );
};

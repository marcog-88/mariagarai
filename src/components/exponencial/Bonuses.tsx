const bonuses = [
  {
    title: "🗂️ Notion Starter Pack — Tu sistema operativo desde el día 1",
    valor: "€297",
    body: "La plantilla de Notion completa que usa María para gestionar su negocio. CRM, tracker de contenido, finanzas, pipeline de clientes. Lista para usar desde la primera sesión.",
  },
  {
    title: "🤖 Biblioteca de Prompts CM — Claude configurado para tu negocio",
    valor: "€197",
    body: "Más de 50 prompts personalizados para crear contenido, escribir emails, preparar llamadas de venta y gestionar clientes. El mismo sistema que usa María cada día.",
  },
  {
    title: "📧 Secuencia de Bienvenida — Tu embudo de email desde el día 1",
    valor: "€397",
    body: "La secuencia de 5 emails que convierte nuevos suscriptores en clientes potenciales. Adaptada a tu voz y tu oferta durante las sesiones.",
  },
  {
    title: "🎙️ Guión de Llamada de Venta — Cierra sin presión",
    valor: "€197",
    body: "El guión exacto de llamada de valoración que usa María. Con preguntas, estructura y cierres que convierten — sin manipulación, con criterio.",
  },
  {
    title: "🔗 LinkedIn Profile Audit — Optimización completa",
    valor: "€297",
    body: "Revisión y reescritura de tu perfil de LinkedIn desde cero: titular, extracto, experiencia y sección destacada. Hecho durante las primeras sesiones.",
  },
  {
    title: "♾️ Acceso Vitalicio a Workshops Mensuales CM",
    valor: "Incluido",
    body: "Todos los workshops mensuales de Carreras Modernas mientras el programa esté activo. Nuevas sesiones sobre ventas, IA, contenido y sistemas cada mes.",
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

const cards = [
  {
    title: "Ya tienes clientes pero todo es manual",
    body: "Vendes, pero cada proceso está a medio montar. No tienes sistemas, no tienes web, no tienes embudo. Aquí montamos todo.",
  },
  {
    title: "Tienes un negocio pero no se siente profesional",
    body: "Sabes que lo que ofreces es bueno pero tu presencia digital no lo refleja. Aquí le damos a tu negocio los escaparates que merece.",
  },
  {
    title: "Has intentado montarlo sola y te has perdido",
    body: "Has probado Notion. Has mirado Lovable. Has jugado con Claude. Pero no has conseguido que todo funcione junto. Aquí lo hacemos contigo, paso a paso.",
  },
];

const si = [
  "Ya tienes una oferta validada o clientes pagando.",
  "Quieres dejar de operar a medio montar y montar la infraestructura real.",
  "Estás abierta a aprender herramientas nuevas aunque no seas técnica.",
  "Quieres que tu negocio funcione como si tuvieras un equipo detrás.",
];

const no = [
  "Todavía no sabes qué vendes ni a quién — para eso está Lanza y Vende primero.",
  "Buscas que alguien lo haga todo por ti sin que tú aprendas nada.",
  "No estás dispuesta a dedicar tiempo a montar los sistemas.",
  "Quieres una web de diseñador — aquí hacemos webs funcionales que venden, no portfolios de diseño.",
];

export const ForYou = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-tight">
        <p className="mb-12 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          Este programa es para ti si...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((c, i) => (
            <div key={i} className="rounded-2xl bg-neutral-50 border-2 border-mint text-foreground p-8">
              <h3 className="font-serif text-2xl mb-4 leading-tight">
                {c.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-10 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:divide-x md:divide-mint/30">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6 text-mint">Sí, si:</h3>
              <ul className="space-y-4">
                {si.map((s, i) => (
                  <li key={i} className="flex gap-3 text-primary-foreground leading-relaxed">
                    <span className="flex-shrink-0 mt-0.5" aria-hidden>✅</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:pl-12 border-t border-mint/30 pt-12 md:border-t-0 md:pt-0">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary-foreground">No, si:</h3>
              <ul className="space-y-4">
                {no.map((n, i) => (
                  <li key={i} className="flex gap-3 text-primary-foreground/70 leading-relaxed">
                    <span className="flex-shrink-0 mt-0.5" aria-hidden>❌</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

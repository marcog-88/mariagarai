const cards = [
  {
    title: "Eres nueva en ambas plataformas",
    body: "No tienes LinkedIn activo ni Substack. Empezamos de cero en las dos. En 30 días tienes ambos canales montados, alineados y funcionando.",
  },
  {
    title: "Tienes LinkedIn pero no Substack",
    body: "Ya usas LinkedIn pero no le estás sacando todo el partido. Optimizamos lo que ya tienes y lanzamos Substack para que se potencien mutuamente.",
  },
  {
    title: "Tienes ambas pero no te están vendiendo",
    body: "Publicas, pero no ves resultados. No sabes cómo conectar ambos canales con tus ofertas. Aquí convertimos tus redes en un sistema de captación y ventas real.",
  },
];

const si = [
  "Vendes servicios, formación o consultoría.",
  "Quieres conseguir clientes a través de las redes.",
  "Estás dispuesta a escribir con transparencia, sin esconderte detrás de ChatGPT.",
  "Ya sabes qué vendes. Ahora necesitas visibilidad y captación.",
];

const no = [
  "Quieres hacerte viral y vivir de vender ebooks y cursos a 27€.",
  "No estás dispuesta a mostrar tu cara ni a que te lean.",
  "Quieres estar en Instagram y TikTok.",
  "Todavía no tienes claro qué vendes — para eso está Valida tu Oferta primero.",
];

export const ForYou = () => {
  return (
    <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-background">
      <div className="container-tight">
        <p className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          Este programa es para ti si...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((c, i) => (
            <div key={i} className="rounded-2xl bg-neutral-50 border-2 border-mint text-foreground p-8">
              <h3 className="font-serif text-2xl mb-4 leading-tight">{c.title}</h3>
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

const cards = [
  {
    title: "Estás empezando de cero",
    body: "No tienes oferta, no tienes clientes, no tienes presencia. Empezamos desde la base — qué vender, a quién, cómo. En 8 semanas tienes todo montado.",
  },
  {
    title: "Tienes una idea pero no la has validado",
    body: "Sabes más o menos qué podrías ofrecer pero no has vendido nada todavía. Aquí dejas de darle vueltas y sales a venderlo.",
  },
  {
    title: "Ya has intentado vender pero no te ha funcionado",
    body: "Has probado cosas, has tenido conversaciones, pero no cierras. Aquí revisamos tu oferta, tu mensaje y tu proceso de venta y los afinamos hasta que funcione.",
  },
];

const si = [
  "Tienes trayectoria profesional y quieres convertirla en ingresos independientes.",
  "Estás dispuesta a tener conversaciones de venta aunque te dé vértigo.",
  "Quieres resultados en 8 semanas, no en 6 meses.",
  "Vas a hacer el trabajo. No solo a tomar notas.",
  "Has dado el salto del corporate o estás a punto de darlo.",
];

const no = [
  "Quieres seguir perfeccionando la oferta sin venderla todavía.",
  "No estás dispuesta a exponerte ni hablar con clientes reales.",
  "Crees que necesitas más tiempo para estar lista. Ya lo estás.",
  "Buscas un curso para consumir. Aquí se ejecuta.",
  "Quieres copiar a otros creadores en lugar de encontrar tu modelo.",
];

export const ForYou = () => {
  return (
    <section className="pt-0 pb-24 md:pb-32 bg-background">
      <div className="container-tight">
        <p className="mb-12 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
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

const cards = [
  {
    title: "Tienes experiencia profesional sólida",
    body: "8–15 años en empresas, consultoría o instituciones. Ya has dejado atrás el corporate o estás a punto. Tienes el conocimiento. Lo que necesitas es construir tu próximo capítulo.",
  },
  {
    title: "Llevas tiempo intentándolo pero no acabas de despegar",
    body: "Tienes clientes sueltos, una idea validada o presencia en redes. Pero llevas meses dando vueltas. Necesitas acompañamiento intensivo, no más teoría.",
  },
  {
    title: "Valoras tu tiempo más que tu dinero",
    body: "Quieres acortar la curva. No quieres pasar 3 años en prueba y error. Sabes que la inversión correcta hoy se convierte en libertad mañana.",
  },
];

const si = [
  "Tienes experiencia profesional y quieres convertirla en un negocio propio",
  "Quieres acompañamiento personalizado, no más cursos grupales",
  "Estás dispuesta a hacer el trabajo cada semana durante 4 meses",
  "Estás abierta a usar IA como infraestructura, no solo como gadget",
];

const no = [
  "Estás empezando de cero sin experiencia profesional previa",
  "Buscas un curso para consumir a tu ritmo",
  "Esperas resultados sin hacer el trabajo cada semana",
  "No estás abierta a usar herramientas digitales nuevas",
];

export const ForYou = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
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
                    <span className="flex-shrink-0 mt-0.5" aria-hidden>✓</span>
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
                    <span className="flex-shrink-0 mt-0.5" aria-hidden>✗</span>
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

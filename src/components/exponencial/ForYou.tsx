const cards = [
  {
    title: "Ya tienes algo en marcha",
    body: "Tienes experiencia y conocimiento. Ya estás emprendiendo con un servicio, programa o consultoría. Tienes clientes, aunque vengan de tu entorno. Lo que necesitas es estructura y más impacto.",
  },
  {
    title: "Has intentado montarlo sola y te has perdido",
    body: "Has probado Notion. Has mirado herramientas. Has jugado con Claude. Pero no has conseguido que todo funcione junto. No sabes muy bien cómo aplicar la IA a tu negocio.",
  },
  {
    title: "Tienes un negocio pero no se siente profesional",
    body: "Tu presencia digital no refleja lo buena que eres. No tienes autoridad en redes. La parte comercial se te atasca. Quieres que te vean como referente.",
  },
];

const si = [
  "Ya tienes una oferta o estás construyendo algo propio con clientes",
  "Quieres acompañamiento personalizado, no más cursos grupales",
  "Estás abierta a aprender herramientas nuevas aunque no seas técnica",
  "Quieres dejar de operar a medio montar y montar la infraestructura real",
  "Estás dispuesta a hacer el trabajo cada semana durante 4 meses",
  "Quieres que tu negocio funcione como si tuvieras un equipo detrás",
];

const no = [
  "Sigues trabajando por cuenta ajena y no vas a tener tiempo para esto",
  "Todavía no tienes claro si quieres emprender",
  "Solo quieres vender cursos de bajo coste",
  "No quieres trabajar tu marca personal ni aparecer en redes",
  "Quieres una web de diseñador perfecta (aquí ejecutamos rápido y bien, no perfeccionismo)",
  "No estás dispuesta a usar IA como infraestructura",
];

import { Reveal } from "@/components/landing/Reveal";

export const ForYou = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-tight">
        <Reveal>
          <p className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
            Este programa es para ti si...
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 130}>
              <div className="card-lift h-full rounded-2xl bg-neutral-50 border-2 border-mint text-foreground p-8">
                <h3 className="font-serif text-2xl mb-4 leading-tight">{c.title}</h3>
                <p className="text-foreground/75 leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="scale" className="bg-primary rounded-2xl p-10 mt-12">
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
        </Reveal>
      </div>
    </section>
  );
};

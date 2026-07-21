const cards = [
  {
    title: "Ya tienes algo en marcha",
    body: "Eres experto en lo tuyo y ya vendes: coaching, terapia, consultoría, servicios, formación. Tienes clientes, online u offline, aunque vengan de tu entorno. Lo que necesitas es pivotar al modelo correcto y escalar.",
  },
  {
    title: "Has intentado montarlo sola y te has perdido",
    body: "Has creado algún curso o programa. Has mirado herramientas. Has jugado con Claude. Pero no has conseguido que funcione, ni sabes cómo aplicar la IA para dejar de hacer tareas manuales.",
  },
  {
    title: "Vendes tu tiempo y no escala",
    body: "Cada cliente es más horas, más reuniones, más carga. Sabes que tu conocimiento vale para algo más grande que sesiones sueltas, pero no sabes cómo empaquetarlo ni cómo dar el salto.",
  },
];

const si = [
  "Ya vendes servicios, coaching o consultoría (online u offline)",
  "Quieres dejar de vender tu tiempo y crear un programa online de más de 2.000€",
  "Quieres acompañamiento personalizado, no más cursos grupales",
  "Estás abierta a aprender herramientas nuevas aunque no seas técnica",
  "Estás dispuesta a hacer el trabajo cada semana durante 90 días",
];

const no = [
  "Sigues por cuenta ajena y no vas a tener tiempo para esto",
  "No tienes muy claro que quieras emprender y estás explorando",
  "No tienes conocimiento o experiencia que enseñar",
  "Solo quieres vender cursos de bajo coste",
  "No quieres ser referente de tu tema",
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

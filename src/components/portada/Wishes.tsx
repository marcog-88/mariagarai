import { useState } from "react";

// "Esto es lo que quieres": the first line is the heading, the rest are tags
// the visitor can tap. Two start selected so the interaction is visible.
const wishes = [
  "Pasar de idea a realidad.",
  "Menos reuniones de Zoom.",
  "Más autonomía para decidir cómo trabajas.",
  "Ser referente en tu sector.",
  "Un programa que transforme vidas.",
  "Sentir orgullo por lo que has creado.",
  "Que nuevas personas te descubran y entiendan tu valor.",
  "Aprovechar todo tu potencial profesional.",
  "Utilizar la IA como palanca.",
  "Disfrutar trabajando. Decidir sobre tu tiempo.",
];

export const Wishes = () => {
  const [picked, setPicked] = useState<Set<number>>(() => new Set([1, 4]));

  const toggle = (i: number) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section className="pd-want">
      <div className="pd-wrap">
        <div>
          <span className="pd-label">Esto es lo que quieres</span>
          <h2 className="pd-want__h2">
            Un negocio que te de paz y <em>autoridad.</em>
          </h2>
        </div>
        <div className="pd-tags">
          {wishes.map((w, i) => (
            <button
              key={w}
              type="button"
              className={`pd-tag${i === wishes.length - 1 ? " pd-tag--last" : ""}`}
              aria-pressed={picked.has(i)}
              onClick={() => toggle(i)}
            >
              {w}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

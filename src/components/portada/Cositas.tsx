import type { ReactNode } from "react";

// "Cositas de mí que tal vez te sorprendan" (oct 2026): a playful, personal
// break under "Quién está detrás". Each card is a <details> toggle: the title
// shows, the text opens on click. Copy is María's, verbatim; the short card
// titles were drafted by Claude and approved by her.

const NOVELA_URL = "https://www.amazon.es/Desnudas-Hacia-Amor-revoluci%C3%B3n-personal/dp/8409614618";

const COSITAS: { emoji: string; title: string; text: ReactNode }[] = [
  {
    emoji: "🌿",
    title: "Mi lado hippie",
    text: "Tengo un lado hippie. Monté un negocio de coaching y retiros con terapias de psicodélicos.",
  },
  {
    emoji: "🧘‍♀️",
    title: "Mi obsesión",
    text: "También soy profe de yoga y breathwork. Estoy obsesionada con el desarrollo personal y la neurociencia.",
  },
  {
    emoji: "💜",
    title: "El origen de Hazte Grande",
    text: "Tuve anorexia a los 12 y estuve ingresada 6 meses. De ahí nació mi filosofía Hazte Grande.",
  },
  {
    emoji: "📖",
    title: "Escribí una novela",
    text: (
      <>
        Adoro escribir. Escribí una novela de romance bastante autobiográfica. Gustó mucho.{" "}
        <a href={NOVELA_URL} target="_blank" rel="noopener noreferrer">
          Mírala aquí
        </a>
      </>
    ),
  },
  {
    emoji: "✈️",
    title: "Viajo sola",
    text: "Me gusta viajar sola. India, Nepal, Tailandia, China...",
  },
  {
    emoji: "📍",
    title: "De Bilbao al mundo",
    text: "Soy de Bilbao. He vivido en Lisboa, Ginebra, Oxford, Venecia, Copenhague, Lovaina y Maastricht.",
  },
  {
    emoji: "☕",
    title: "Foodie y Coffee Snob",
    text: "Me encanta comer en restaurantes, probar cafeterías y hacerme listas en Google Maps. Ah, y me chifla la tortilla de patata.",
  },
  {
    emoji: "💃",
    title: "Mi vena artística",
    text: "Hice teatro y ballet. Adoro las manualidades. Y sueño con bailar flamenco. Pero lo que más me gusta es cantar con mi padre y su guitarra.",
  },
];

export const Cositas = () => (
  <section className="pd-cositas" aria-labelledby="cositas-title">
    <h2 id="cositas-title" className="pd-cositas__h2">
      Cositas de mí que tal vez <em>te sorprendan</em>
    </h2>
    <p className="pd-cositas__sub">Haz clic y verás.</p>
    <div className="pd-cositas__grid">
      {COSITAS.map((c, i) => (
        <details key={c.title} className={`pd-cosita pd-cosita--${i + 1}`}>
          <summary>
            <span className="pd-cosita__row">
              <span className="pd-cosita__emoji" aria-hidden>
                {c.emoji}
              </span>
              <span className="pd-cosita__plus" aria-hidden>
                +
              </span>
            </span>
            <span className="pd-cosita__n">{String(i + 1).padStart(2, "0")}</span>
            <span className="pd-cosita__t">{c.title}</span>
          </summary>
          <p>{c.text}</p>
        </details>
      ))}
    </div>
  </section>
);

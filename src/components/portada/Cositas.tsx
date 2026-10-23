import type { ReactNode } from "react";
import fotoHippie from "@/assets/cosa-hippie.webp";
import fotoObsesion from "@/assets/cosa-obsesion.webp";
import fotoNovela from "@/assets/cosa-novela.webp";
import fotoViajes from "@/assets/cosa-viajes.webp";
import fotoBilbao from "@/assets/cosa-bilbao.webp";
import fotoHazteGrande from "@/assets/cosa-hazte-grande.webp";
import fotoFoodie from "@/assets/cosa-foodie.webp";
import fotoArte from "@/assets/cosa-arte.webp";

// "Cosas de mí que tal vez te sorprendan" (oct 2026): a playful, personal
// break under "Quién está detrás", as polaroids (María chose option 2). Each
// polaroid is a <details> toggle: photo + title show, the text opens on click.
// Copy is María's, verbatim; the short titles were drafted by Claude and
// approved by her.

const NOVELA_URL = "https://www.amazon.es/Desnudas-Hacia-Amor-revoluci%C3%B3n-personal/dp/8409614618";

const COSITAS: { emoji: string; title: string; text: ReactNode; img: string; pos?: string }[] = [
  {
    emoji: "🌿",
    title: "Mi lado hippie",
    img: fotoHippie,
    pos: "50% 45%",
    text: "Tengo un lado hippie. Monté un negocio de coaching y retiros con terapias de psicodélicos.",
  },
  {
    emoji: "🧘‍♀️",
    title: "Mi obsesión",
    img: fotoObsesion,
    text: "También soy profe de yoga y breathwork. Estoy obsesionada con el desarrollo personal y la neurociencia.",
  },
  {
    emoji: "💜",
    title: "El origen de Hazte Grande",
    img: fotoHazteGrande,
    pos: "50% 22%",
    text: "Tuve anorexia a los 12 y estuve ingresada 6 meses. De ahí nació mi filosofía Hazte Grande.",
  },
  {
    emoji: "📖",
    title: "Escribí una novela",
    img: fotoNovela,
    pos: "50% 40%",
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
    img: fotoViajes,
    pos: "62% 72%",
    text: "Me gusta viajar sola. India, Nepal, Tailandia, China...",
  },
  {
    emoji: "📍",
    title: "De Bilbao al mundo",
    img: fotoBilbao,
    pos: "62% 50%",
    text: "Soy de Bilbao. He vivido en Lisboa, Ginebra, Oxford, Venecia, Copenhague, Lovaina y Maastricht.",
  },
  {
    emoji: "☕",
    title: "Foodie y Coffee Snob",
    img: fotoFoodie,
    text: "Me encanta comer en restaurantes, probar cafeterías y hacerme listas en Google Maps. Ah, y me chifla la tortilla de patata.",
  },
  {
    emoji: "💃",
    title: "Mi vena artística",
    img: fotoArte,
    pos: "45% 55%",
    text: "Hice teatro y ballet. Adoro las manualidades. Y sueño con bailar flamenco. Pero lo que más me gusta es cantar con mi padre y su guitarra.",
  },
];

export const Cositas = () => (
  <section className="pd-cositas" aria-labelledby="cositas-title">
    <h2 id="cositas-title" className="pd-cositas__h2">
      Cosas de mí que tal vez <em>te sorprendan</em>
    </h2>
    <p className="pd-cositas__hint">Haz clic y verás.</p>
    <div className="pd-cositas__board">
      {COSITAS.map((c) => (
        <details key={c.title} className="pd-pola">
          <summary>
            <span className="pd-pola__tape" aria-hidden />
            <span className="pd-pola__ph">
              <img src={c.img} alt="" loading="lazy" style={c.pos ? { objectPosition: c.pos } : undefined} />
              <span className="pd-pola__sticker" aria-hidden>
                {c.emoji}
              </span>
            </span>
            <span className="pd-pola__cap">
              <span className="pd-pola__t">{c.title}</span>
              <span className="pd-pola__more" aria-hidden>
                Leer +
              </span>
            </span>
          </summary>
          <p>{c.text}</p>
        </details>
      ))}
    </div>
  </section>
);

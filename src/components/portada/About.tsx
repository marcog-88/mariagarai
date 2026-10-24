import { Fragment, useEffect, useRef } from "react";
import chaqueta from "@/assets/maria-bio-chaqueta.webp";
import terraza from "@/assets/maria-bio-terraza.webp";
import libros from "@/assets/maria-bio-libros.webp";
import escribiendo from "@/assets/maria-bio-escribiendo.webp";
import logoNacionesUnidas from "@/assets/logos/logo-naciones-unidas.webp";
import logoPG from "@/assets/logos/logo-pg.webp";
import logoWWF from "@/assets/logos/logo-wwf.webp";

// "Quién está detrás": photo wall, then María's bio as four cards on a violet
// line that fills as you read (approved direction D, B + C). Her paragraphs are
// verbatim from the previous About; only the card labels and the first card's
// headline are new.

/**
 * Splits a string into per-letter spans for the headline entrance. Letters are
 * grouped per word (nowrap) so a line never breaks in the middle of a word.
 */
const letters = (text: string, start: number) => {
  let i = start;
  return text.split(/(\s+)/).map((word, k) =>
    /\S/.test(word) ? (
      <span key={k} className="pd-word">
        {word.split("").map((c, j) => (
          <span key={j} className="pd-ch" style={{ ["--i" as string]: i++ }}>
            {c}
          </span>
        ))}
      </span>
    ) : (
      <Fragment key={k}>{word}</Fragment>
    ),
  );
};

/** Splits a string into per-word spans for the mission's word-by-word light-up. */
const words = (text: string) =>
  text.split(/(\s+)/).map((w, k) =>
    /\S/.test(w) ? (
      <span key={k} className="pd-w">
        {w}
      </span>
    ) : (
      <Fragment key={k}>{w}</Fragment>
    ),
  );

// Order = tile position: 1 big, 2 wide, 3-4 small. The hero portrait and the
// conference photo were dropped here (both already appear elsewhere on the page).
const photos = [
  { src: chaqueta, alt: "María Garai en la calle con chaqueta rosa", px: 0.1 },
  { src: terraza, alt: "María Garai trabajando en una terraza", px: 0.06 },
  { src: libros, alt: "María Garai en una librería", px: 0.14 },
  { src: escribiendo, alt: "María Garai escribiendo en un cuaderno", px: 0.08 },
];

export const About = () => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Reveal: hide only what starts below the fold, so the first frame is complete.
    const reveal = Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));
    reveal.forEach((n) => {
      if (n.getBoundingClientRect().top > window.innerHeight) n.classList.add("pd-wait");
    });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("pd-wait");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 },
    );
    reveal.forEach((n) => io.observe(n));

    const imgs = Array.from(el.querySelectorAll<HTMLImageElement>("[data-px]"));
    const rail = el.querySelector<HTMLElement>(".pd-journey");
    const steps = Array.from(el.querySelectorAll<HTMLElement>(".pd-journey__step"));
    const mission = el.querySelector<HTMLElement>(".pd-about__mission");
    const ws = Array.from(el.querySelectorAll<HTMLElement>(".pd-w"));
    mission?.classList.add("is-armed");

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const mid = vh * 0.55;
      imgs.forEach((img) => {
        const b = img.parentElement!.getBoundingClientRect();
        const off = b.top + b.height / 2 - vh / 2;
        img.style.transform = `translateY(${-off * Number(img.dataset.px)}px)`;
      });
      if (rail) {
        const t = rail.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, (mid - t.top) / (t.height * 0.95)));
        rail.style.setProperty("--pd-fill", `${p * 100}%`);
      }
      steps.forEach((s) => {
        const dot = s.querySelector(".pd-journey__dot")!.getBoundingClientRect();
        s.classList.toggle("is-lit", dot.top < mid);
      });
      ws.forEach((w, k) => w.classList.toggle("is-lit", w.getBoundingClientRect().top < vh * 0.78 - k * 4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="pd-about" id="sobre-maria" ref={root}>
      <div className="pd-about__intro">
        <span className="pd-label">Quién está detrás</span>
        <h2 className="pd-about__h2" data-reveal aria-label="¡Hola! Soy María Garai.">
          <span aria-hidden>
            {letters("¡Hola! Soy ", 0)}
            <em>{letters("María Garai.", 11)}</em>
          </span>
        </h2>
      </div>

      <div className="pd-bento">
        {photos.map((p, i) => (
          <div key={p.src} className={`pd-bento__tile pd-bento__tile--${i + 1}`}>
            <img src={p.src} alt={p.alt} data-px={p.px} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="pd-journey">
        <div className="pd-journey__rail" aria-hidden>
          <i />
        </div>

        <div className="pd-journey__step">
          <span className="pd-journey__dot" aria-hidden />
          <article className="pd-story" data-reveal>
            <span className="pd-story__k">La trayectoria</span>
            <h3 className="pd-story__h3">Jurista, ocho países.</h3>
            <div className="pd-story__bd">
              <p>Soy jurista de formación y he desarrollado mi carrera entre Naciones Unidas, la Unión Europea, Procter &amp; Gamble y el mundo de las startups, trabajando en proyectos y equipos internacionales en ocho países.</p>
            </div>
            <div className="pd-story__logos">
              <img src={logoNacionesUnidas} alt="Naciones Unidas" width={122} height={120} loading="lazy" />
              <img src={logoPG} alt="Procter & Gamble" width={120} height={120} loading="lazy" />
              <img src={logoWWF} alt="World Wildlife Fund" width={86} height={120} loading="lazy" />
              <span>Startups</span>
            </div>
          </article>
        </div>

        <div className="pd-journey__step">
          <span className="pd-journey__dot" aria-hidden />
          <article className="pd-story" data-reveal>
            <span className="pd-story__k">El giro</span>
            <h3 className="pd-story__h3">Hasta que decidí emprender.</h3>
            <div className="pd-story__bd">
              <p>Ahí descubrí que construir un negocio propio es una disciplina completamente distinta. No basta con tener conocimientos, trabajar mucho o acumular cursos. Hay que encontrar una oportunidad de mercado, convertirla en una oferta, posicionarla con autoridad y construir los sistemas digitales para venderla a desconocidos.</p>
            </div>
          </article>
        </div>

        <div className="pd-journey__step">
          <span className="pd-journey__dot" aria-hidden />
          <article className="pd-story" data-reveal>
            <span className="pd-story__k">Lo que aprendí</span>
            <h3 className="pd-story__h3">La cuestión no es pasar de cuenta ajena a propia, sino pasar del modelo de vender tu tiempo a ser dueño de negocio.</h3>
            <div className="pd-story__bd">
              <p>Y&nbsp;lo mejor es empezar empaquetando lo que ya sabes en un programa de formación y acompañamiento de alto valor.</p>
              <p>No necesitas convertirte en experto en programación, marketing, automatizaciones y tecnología para conseguirlo.</p>
            </div>
          </article>
        </div>

        <div className="pd-journey__step">
          <span className="pd-journey__dot" aria-hidden />
          <article className="pd-story pd-story--dark" data-reveal>
            <span className="pd-story__k">Exponencial</span>
            <h3 className="pd-story__h3">Por eso creé Exponencial.</h3>
            <div className="pd-story__bd">
              <p>Para unir el trabajo estratégico con la implementación y ayudar a profesionales a desarrollar su propio programa, construir su infraestructura digital y un sistema comercial multi-canal.</p>
              <p>Quiero que más profesionales puedan decidir cómo desarrollar su carrera, crear algo que lleve su nombre y ampliar las posibilidades de vivir muy bien de lo que saben.</p>
            </div>
          </article>
        </div>
      </div>

      <p className="pd-about__mission">
        {words("Mi misión es ayudarte a construir esa siguiente etapa profesional. Y, por el camino,")}{" "}
        <em>{words("hacerte grande.")}</em>
      </p>
    </section>
  );
};

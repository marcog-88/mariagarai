import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import mariaCafe from "@/assets/maria-quien-2.webp";
import conferencia from "@/assets/maria-bio-conferencia.webp";
import { EXTERNAL, SUBSTACK, SUBSTACK_EMBED, TIDYCAL } from "./links";

const cases = [
  { icon: "reach", text: "Quizá ya tienes clientes y quieres un servicio digitalizado para llegar a más gente." },
  { icon: "stack", text: "Quizá has desarrollado una metodología propia y quieres comercializarla." },
  { icon: "path", text: "O quizá quieres iniciar otra etapa profesional por tu cuenta y sentar las bases con un programa rentable desde el principio." },
];

const professions = ["Consultores", "profesionales de la salud", "juristas", "formadores", "coaches", "mentores", "profesores"];

/** Three of María's most-read Hazte Grande posts (evergreen, so they don't go stale). */
const popular = [
  { title: "15 ideas de vías de ingreso para vivir de tu conocimiento", href: "https://haztegrande.substack.com/p/15-ideas-de-vias-de-ingreso-para" },
  { title: "de 100.000€ a 3€. Mi historia honesta de corporate a emprendedora.", href: "https://haztegrande.substack.com/p/de-100000-a-3-mi-historia-honesta" },
  { title: "Historia de Grandeza de David Domínguez (Substack Mafia)", href: "https://haztegrande.substack.com/p/historia-de-grandeza-de-david-dominguez" },
];

const talks = [
  {
    title: "Del conocimiento al negocio propio.",
    body: "Cómo transformar una especialidad profesional en un programa, una metodología y una nueva oportunidad empresarial.",
  },
  {
    title: "IA para profesionales que no vienen del mundo técnico.",
    body: "Cómo integrar herramientas de inteligencia artificial en procesos y modelos de negocio con criterio práctico.",
  },
  {
    title: "Autoridad profesional que genera oportunidades.",
    body: "Cómo utilizar tu posicionamiento, LinkedIn y los canales de contenido para desarrollar una voz reconocible y apoyar tu estrategia comercial.",
  },
];

const LEGAL_LINKS = [
  { to: "/legal", label: "Aviso legal" },
  { to: "/privacy-policy", label: "Privacidad" },
  { to: "/terms-of-service", label: "Términos" },
  { to: "/cookie-policy", label: "Cookies" },
];

const CaseIcon = ({ kind }: { kind: string }) => {
  if (kind === "reach")
    return (
      <span className="pd-ci pd-ci--reach" aria-hidden>
        <i />
        <b />
        <b />
        <b />
        <b />
      </span>
    );
  if (kind === "stack")
    return (
      <span className="pd-ci pd-ci--stack" aria-hidden>
        <span />
        <span />
        <span />
      </span>
    );
  return (
    <span className="pd-ci pd-ci--path" aria-hidden>
      <svg viewBox="0 0 36 36">
        <path d="M3 31 C 12 31, 10 16, 20 14 S 30 6, 32 4" />
        <circle cx="32" cy="4" r="4" />
      </svg>
    </span>
  );
};

export const ForWho = () => {
  const root = useRef<HTMLElement>(null);

  // Highlighter sweep on the professions and the cards rising in, once each.
  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const profs = el.querySelector<HTMLElement>(".pd-who__profs");
    const cards = Array.from(el.querySelectorAll<HTMLElement>(".pd-case"));
    profs?.classList.add("is-armed");
    cards.forEach((c) => {
      if (c.getBoundingClientRect().top > window.innerHeight) c.classList.add("pd-wait");
    });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.remove("pd-wait");
          e.target.classList.add("is-on");
          io.unobserve(e.target);
        }),
      { threshold: 0.5 },
    );
    [profs, ...cards].forEach((n) => n && io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section className="pd-who" ref={root}>
      <div className="pd-who__l">
        <span className="pd-label">A quién puedo ayudar</span>
        <h2 className="pd-who__h2">
          Si sabes que puedes construir algo más, <em>hablemos.</em>
        </h2>
      </div>
      <div className="pd-who__r">
        <p className="pd-who__intro">Trabajo con profesionales que quieren construir un modelo de negocio más rentable y escalable.</p>
        <p className="pd-who__profs">
          {professions.map((p, i) => (
            <span key={p}>
              <span className="pd-mk" style={{ ["--i" as string]: i }}>
                {p}
              </span>
              {i < professions.length - 1 ? ", " : " y "}
            </span>
          ))}
          <span className="pd-mk" style={{ ["--i" as string]: professions.length }}>
            especialistas
          </span>{" "}
          con una trayectoria valiosa.
        </p>
        <ul className="pd-cases">
          {cases.map((c, i) => (
            <li key={c.icon} className="pd-case" style={{ ["--d" as string]: i }}>
              <CaseIcon kind={c.icon} />
              <span>{c.text}</span>
            </li>
          ))}
        </ul>
        <p className="pd-who__close">En Exponencial trabajamos en grupos reducidos y en 1:1, con acompañamiento cercano y visión a largo plazo.</p>
        <div>
          <a href={TIDYCAL} {...EXTERNAL} className="pd-btn">
            Reservar llamada <span className="pd-arrow" aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

/**
 * Newsletter (real Substack embed, so subscriptions land in Substack) beside
 * the speaking card. On phones the newsletter is trimmed to headline, form and
 * the most-read posts.
 */
export const NewsletterSpeaking = () => {
  const [open, setOpen] = useState(0);
  return (
    <div className="pd-news" id="newsletter">
      <article className="pd-news__box pd-news__nl">
        <div className="pd-news__in">
          <div className="pd-news__head">
            <div>
              <span className="pd-label">Hazte Grande · Newsletter</span>
              <h3 className="pd-news__h3">
                Crea un negocio al servicio de una vida <em>grande.</em>
              </h3>
            </div>
            <div className="pd-news__cover" aria-hidden>
              <img src={mariaCafe} alt="" loading="lazy" />
              <b>Hazte Grande</b>
              <small>Mi psiquiatra me dijo las 3 palabras más importantes de mi vida</small>
            </div>
          </div>
          <p className="pd-news__desc">Estrategia, mentalidad, experiencias personales y reflexiones para quienes tienen ambición y ganas de superarse cada día.</p>
          <iframe src={SUBSTACK_EMBED} title="Suscríbete a Hazte Grande" loading="lazy" scrolling="no" />
          <div>
            <span className="pd-posts__k">Lo más leído</span>
            {popular.map((p, i) => (
              <a key={p.href} className="pd-post" href={p.href} {...EXTERNAL}>
                <i>{i + 1}</i>
                <span>{p.title}</span>
                <b aria-hidden>→</b>
              </a>
            ))}
          </div>
          <a href={SUBSTACK} {...EXTERNAL} className="pd-link pd-news__more">
            Leer Hazte Grande →
          </a>
        </div>
      </article>

      <article className="pd-news__box pd-news__sp">
        <div className="pd-news__ph">
          <img src={conferencia} alt="María Garai dando una conferencia" loading="lazy" />
          <span className="pd-label pd-label--dark">Conferencias y formación</span>
        </div>
        <div className="pd-news__in">
          <h3 className="pd-news__h3">Hablo en tu Evento</h3>
          <p className="pd-news__lead">
            Participo en conferencias, encuentros profesionales y formaciones de equipos donde hablamos del futuro del trabajo, los nuevos modelos de negocio y las oportunidades que abre la inteligencia artificial.
          </p>
          <div>
            {talks.map((t, i) => (
              <div key={t.title} className={`pd-talk${open === i ? " is-open" : ""}`} onMouseEnter={() => setOpen(i)} onFocus={() => setOpen(i)} tabIndex={0}>
                <i aria-hidden>{i + 1}</i>
                <div>
                  <b>{t.title}</b>
                  <span>{t.body}</span>
                </div>
              </div>
            ))}
          </div>
          <a href={TIDYCAL} {...EXTERNAL} className="pd-link">
            Contáctame ↗
          </a>
        </div>
      </article>
    </div>
  );
};

export const Closing = () => (
  <section className="pd-end" id="cta">
    <h2 className="pd-end__h2">
      Es momento de volverte <em>exponencial.</em>
    </h2>
    <div className="pd-end__row">
      <p>
        Si quieres desarrollar un programa propio y construir una nueva línea de negocio alrededor de tus conocimientos, hablemos. Una conversación de 30 minutos para conocer tu punto de partida, entender qué quieres construir y valorar si Exponencial encaja contigo.
      </p>
      <a href={TIDYCAL} {...EXTERNAL} className="pd-btn pd-btn--v">
        Reserva llamada de valoración <span aria-hidden>↗</span>
      </a>
    </div>
    <footer className="pd-foot">
      <span>© 2026 María Garai · Exponencial</span>
      <nav aria-label="Legal">
        {LEGAL_LINKS.map((l) => (
          <Link key={l.to} to={l.to}>
            {l.label}
          </Link>
        ))}
      </nav>
    </footer>
  </section>
);

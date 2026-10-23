import { Link } from "react-router-dom";
import { EXTERNAL, SUBSTACK, SUBSTACK_EMBED, TIDYCAL } from "./links";

const cases = [
  "Quizá ya tienes clientes y quieres un servicio digitalizado para llegar a más gente.",
  "Quizá has desarrollado una metodología propia y quieres comercializarla.",
  "O quizá quieres iniciar otra etapa profesional por tu cuenta y sentar las bases con un programa rentable desde el principio.",
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

export const ForWho = () => (
  <section className="pd-who">
    <div>
      <span className="pd-label">A quién puedo ayudar</span>
      <h2 className="pd-who__h2">
        Si sabes que puedes construir algo más, <em>hablemos.</em>
      </h2>
    </div>
    <div>
      <p className="pd-who__intro">Trabajo con profesionales que quieren construir un modelo de negocio más rentable y escalable.</p>
      <p className="pd-who__profs">
        Consultores, profesionales de la salud, juristas, formadores, coaches, mentores, profesores y especialistas con una trayectoria valiosa.
      </p>
      <ul>
        {cases.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p className="pd-who__close">En Exponencial trabajamos de forma individual, con acompañamiento cercano y visión a largo plazo.</p>
      <div style={{ marginTop: 22 }}>
        <a href={TIDYCAL} {...EXTERNAL} className="pd-btn">
          Reservar llamada <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  </section>
);

/** Newsletter signup (Substack's own embed, so subscriptions land in Substack) beside the speaking card. */
export const NewsletterSpeaking = () => (
  <div className="pd-news" id="newsletter">
    <div className="pd-news__n1">
      <span className="pd-label">Hazte Grande · Newsletter</span>
      <h3 className="pd-news__h3">
        Crea un negocio al servicio de una vida <em>grande.</em>
      </h3>
      <p>Estrategia, mentalidad, experiencias personales y reflexiones para quienes tienen ambición y ganas de superarse cada día.</p>
      <iframe src={SUBSTACK_EMBED} title="Suscríbete a Hazte Grande" loading="lazy" scrolling="no" />
      <a href={SUBSTACK} {...EXTERNAL} className="pd-link">
        Leer Hazte Grande →
      </a>
    </div>
    <div className="pd-news__n2">
      <span className="pd-label pd-label--dark">Conferencias y formación</span>
      <h3 className="pd-news__h3">Hablo en tu Evento</h3>
      <p>
        Participo en conferencias, encuentros profesionales y formaciones de equipos donde hablamos del futuro del trabajo, los nuevos modelos de negocio y las oportunidades que abre la inteligencia artificial.
      </p>
      <div className="pd-talks">
        {talks.map((t) => (
          <div key={t.title}>
            <b>{t.title}</b>
            <span>{t.body}</span>
          </div>
        ))}
      </div>
      <a href={TIDYCAL} {...EXTERNAL} className="pd-link">
        Contáctame ↗
      </a>
    </div>
  </div>
);

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

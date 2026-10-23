import mariaCutout from "@/assets/maria-hero-cutout.webp";
import mariaCafe from "@/assets/maria-quien-2.webp";
import { DISENA_TU_PROGRAMA, EVENTOS, EXTERNAL, SUBSTACK } from "./links";

/**
 * Card visuals are drawn in HTML/CSS (see "Card visuals" in portada.css), not
 * images, so they stay sharp and light. They're decorative: each card's own
 * heading and text carry the content for screen readers.
 */

/** The free tool, in the new Diseña tu programa style on laexponencial.com. */
const ToolVisual = () => (
  <div className="pd-viz pd-viz--tool" aria-hidden>
    <div className="pd-tool__top">
      <span className="pd-tool__wm">
        E<em>X</em>PONENCIAL<em>.</em>
      </span>
      <span className="pd-tool__free">✦ Gratis</span>
    </div>
    <p className="pd-tool__h">
      Empaqueta <em>lo que ya sabes</em>
    </p>
    <div className="pd-tool__gets">
      <span className="pd-tool__get">
        <i className="p">♛</i>Tu programa insignia: módulos, formato y precio
      </span>
    </div>
    <span className="pd-tool__sticker">Resultado en 30 seg</span>
    <div className="pd-tool__band">
      <span>
        {[0, 1].map((k) => (
          <span key={k}>
            <b>Nicho</b>
            <i>✦</i>
            <b>Programa</b>
            <i>✦</i>
            <b>Precio</b>
            <i>✦</i>
            <b>Lanzamiento</b>
            <i>✦</i>
          </span>
        ))}
      </span>
    </div>
  </div>
);

/** The Wednesday workshop as a live show hosted by María (no stock photo). */
const LiveVisual = () => (
  <div className="pd-viz pd-viz--live" aria-hidden>
    <div className="pd-live__ring" />
    <img className="pd-live__img" src={mariaCutout} alt="" loading="lazy" />
    <span className="pd-live__badge">
      <i />
      EN DIRECTO
    </span>
    <span className="pd-live__eq">
      <i />
      <i />
      <i />
      <i />
    </span>
    <div className="pd-live__tt">
      <small>Exponencial Live</small>
      <p>
        De profesional a <em>dueño de negocio</em>
      </p>
    </div>
    <div className="pd-live__info">
      <span>Cada miércoles · 17:00 h</span>
      <span>Online · Gratis</span>
    </div>
  </div>
);

/** Hazte Grande as a magazine cover, with a real post title as the cover line. */
const NewsletterVisual = () => (
  <div className="pd-viz pd-viz--news" aria-hidden>
    <div className="pd-mag__cover">
      <img src={mariaCafe} alt="" loading="lazy" />
      <span className="pd-mag__mast">Hazte Grande</span>
      <span className="pd-mag__by">
        <span>Por María Garai</span>
        <span>Cada semana</span>
      </span>
      <span className="pd-mag__line">Mi psiquiatra me dijo las 3 palabras más importantes de mi vida</span>
    </div>
    <div className="pd-mag__side">
      <small>Newsletter</small>
      <p>
        Tu futuro te quiere <em>más grande.</em>
      </p>
      <span>Hazte coach. Pero vuelve al Derecho.</span>
    </div>
  </div>
);

export const Doors = () => (
  <div className="pd-doors" id="empieza">
    <article className="pd-door">
      <div className="pd-door__ph">
        <ToolVisual />
      </div>
      <div className="pd-door__in">
        <span className="pd-eyebrow">Herramienta gratuita</span>
        <h3 className="pd-door__h3">Diseña tu Programa</h3>
        <p className="pd-door__p">
          Tienes conocimientos, una especialidad o una idea que te gustaría convertir en una oferta digital propia, pero ¿por dónde empiezas?
        </p>
        <a href={DISENA_TU_PROGRAMA} {...EXTERNAL} className="pd-link">
          Diseña tu programa gratis →
        </a>
      </div>
    </article>

    <article className="pd-door">
      <div className="pd-door__ph">
        <LiveVisual />
      </div>
      <div className="pd-door__in">
        <span className="pd-eyebrow">Cada miércoles · Taller en vivo</span>
        <h3 className="pd-door__h3">De profesional a dueño de negocio</h3>
        <p className="pd-door__p">
          Una clase práctica en directo para enseñarte a crear un programa propio y desarrollar un negocio muy rentable alrededor de él.
        </p>
        <a href={EVENTOS} {...EXTERNAL} className="pd-link">
          Inscríbete gratis →
        </a>
      </div>
    </article>

    <article className="pd-door">
      <div className="pd-door__ph">
        <NewsletterVisual />
      </div>
      <div className="pd-door__in">
        <span className="pd-eyebrow">Hazte Grande · Newsletter</span>
        <h3 className="pd-door__h3">Crea un negocio al servicio de una vida grande.</h3>
        <p className="pd-door__p">
          Hazte Grande es mi espacio para escribir sobre ambición, decisiones, emprendimiento y la parte más caótica de construir una vida y una carrera a tu manera.
        </p>
        <a href={SUBSTACK} {...EXTERNAL} className="pd-link">
          Suscríbete →
        </a>
      </div>
    </article>
  </div>
);

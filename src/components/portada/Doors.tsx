import type { ReactNode } from "react";
import captura from "@/assets/disena-tu-programa-captura.webp";
import talleres from "@/assets/talleres-live-mockup.png";
import haztegrande from "@/assets/hg-mini-logo.png";
import { DISENA_TU_PROGRAMA, EVENTOS, EXTERNAL, SUBSTACK } from "./links";

/** Laptop drawn in CSS around a screen. */
const Laptop = ({ children }: { children: ReactNode }) => (
  <div className="pd-laptop">
    <div className="pd-laptop__screen">
      <div>{children}</div>
    </div>
    <div className="pd-laptop__base" aria-hidden />
  </div>
);

/**
 * Hazte Grande front page, drawn in CSS so it carries the current newsletter
 * name and logo (the old Carreras Modernas mockup image is retired). The
 * newsletter branding may change again: edit it here.
 */
const HazteGrandeScreen = () => (
  <div className="pd-hg">
    <div className="pd-hg__top">
      <span>
        <img src={haztegrande} alt="" /> Hazte Grande
      </span>
      <span className="pd-hg__sub">Subscribe</span>
    </div>
    <div className="pd-hg__mid">
      <img src={haztegrande} alt="" />
      <p className="pd-hg__title">
        Hazte Grande<span>Newsletter</span>
      </p>
      <p className="pd-hg__tag">Crea un negocio al servicio de una vida grande.</p>
    </div>
  </div>
);

export const Doors = () => (
  <div className="pd-doors">
    <article className="pd-door">
      <div className="pd-door__ph" style={{ position: "relative" }}>
        <div className="pd-dev">
          <Laptop>
            <img src={captura} alt="Captura de la herramienta Diseña tu Programa" className="h-full w-full object-cover object-top" loading="lazy" />
          </Laptop>
        </div>
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
        <img src={talleres} alt="Taller en vivo, sesión grupal con María Garai y participantes" loading="lazy" />
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
      <div className="pd-door__ph" style={{ position: "relative" }}>
        <div className="pd-dev" aria-label="Hazte Grande en ordenador y móvil" role="img">
          <Laptop>
            <HazteGrandeScreen />
          </Laptop>
          <div className="pd-phone">
            <div>
              <HazteGrandeScreen />
            </div>
          </div>
        </div>
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

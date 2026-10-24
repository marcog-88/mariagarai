// Same white-shirt cutout as before, rebuilt from the full-resolution original
// (maria-garantia.webp) with a clean edge on the trousers; two widths so phones
// load ~32 KB and retina desktops ~69 KB.
import portrait520 from "@/assets/maria-hero-520.webp";
import portrait940 from "@/assets/maria-hero-940.webp";
import logoNacionesUnidas from "@/assets/logos/logo-naciones-unidas.webp";
import logoPG from "@/assets/logos/logo-pg.webp";
import logoWWF from "@/assets/logos/logo-wwf.webp";
import { DISENA_TU_PROGRAMA, EVENTOS, EXTERNAL, LA_EXPONENCIAL } from "./links";

/** Editorial index beside the intro. "Hablo en tu Evento" was dropped (oct 2026). */
const lines = [
  { k: "Herramienta gratuita", t: "Diseña tu Programa", href: DISENA_TU_PROGRAMA, external: true },
  { k: "Cada miércoles", t: "De profesional a dueño de negocio", href: EVENTOS, external: true },
  { k: "Newsletter", t: "Hazte Grande", href: "#newsletter", external: false },
];

export const Hero = () => (
  <>
    <div className="pd-wrap">
      <div className="pd-mast">
        <span>Fundadora de Exponencial · Consultora de negocio</span>
        <a href="#newsletter">Hazte Grande · Newsletter →</a>
      </div>

      {/* "grande" sits on its own row at poster size, María stands in front of it. */}
      <div className="pd-hero">
        <h1 className="pd-hero__h1">
          Tu siguiente etapa profesional puede ser mucho más<span className="pd-sr"> grande</span>
        </h1>
        <div className="pd-hero__arch" aria-hidden />
        <div className="pd-hero__grande" aria-hidden>
          grande
        </div>
        <figure className="pd-hero__fig">
          <img
            src={portrait520}
            srcSet={`${portrait520} 520w, ${portrait940} 940w`}
            sizes="(max-width: 700px) 260px, 470px"
            alt="María Garai"
            width={520}
            height={779}
            fetchPriority="high"
          />
        </figure>
      </div>

      <div className="pd-under">
        <div>
          <p className="pd-under__lead">
            Ayudo a profesionales con experiencia a construir un modelo de negocio altamente rentable alrededor de un programa propio, que escale sus ingresos y les posicione como referentes en su sector.
          </p>
          <div className="pd-under__cta">
            <a href={LA_EXPONENCIAL} {...EXTERNAL} className="pd-btn pd-btn--v">
              Trabaja Conmigo <span aria-hidden>→</span>
            </a>
          </div>
        </div>
        <nav className="pd-lines" aria-label="Empieza aquí">
          {lines.map((l) => (
            <a key={l.t} className="pd-line" href={l.href} {...(l.external ? EXTERNAL : {})}>
              <span className="pd-line__k">{l.k}</span>
              <span className="pd-line__t">{l.t}</span>
              <span className="pd-line__ar" aria-hidden>
                →
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>

    <section className="pd-trust" aria-label="He trabajado y colaborado con">
      <div className="pd-wrap">
        <span className="pd-eyebrow">He trabajado y colaborado con:</span>
        <div className="pd-logos">
          <img src={logoNacionesUnidas} alt="Naciones Unidas" width={122} height={120} loading="lazy" />
          <img src={logoPG} alt="Procter & Gamble" width={120} height={120} loading="lazy" />
          <img src={logoWWF} alt="World Wildlife Fund" width={86} height={120} loading="lazy" />
          <span className="pd-logos__txt">Startups</span>
          <span className="pd-logos__num">
            +15<small>Negocios de clientes trabajados</small>
          </span>
        </div>
      </div>
    </section>
  </>
);

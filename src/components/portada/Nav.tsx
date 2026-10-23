import { useEffect, useState } from "react";
import { Logo } from "@/components/landing/Logo";
import { EVENTOS, EXTERNAL, LA_EXPONENCIAL, TIDYCAL } from "./links";

/**
 * Violet announcement bar for the Wednesday workshop (it replaces the floating
 * "Cada miércoles · Live" card that used to sit on the hero photo), then the
 * sticky nav. On phones the links fold into a menu under the bar.
 */
export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <div className="pd-bar">
        <a href={EVENTOS} {...EXTERNAL}>
          <span className="pd-live-dot" aria-hidden />
          <b>Cada miércoles</b>
          <span className="pd-bar__long">Taller en vivo · De profesional a dueño de negocio</span>
          <u>Inscríbete gratis →</u>
        </a>
      </div>

      <header className={`pd-nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="pd-wrap">
          <nav className="pd-nav__row" aria-label="Principal">
            <a href="/" className="pd-nav__logo" aria-label="María Garai">
              <Logo />
            </a>
            <ul className="pd-nav__links">
              <li>
                <a href={LA_EXPONENCIAL} {...EXTERNAL}>Exponencial</a>
              </li>
              <li>
                <a href={EVENTOS} {...EXTERNAL}>
                  Live <span className="pd-live-dot" aria-hidden />
                </a>
              </li>
              <li>
                <a href="#newsletter">Newsletter</a>
              </li>
              <li>
                <a href={TIDYCAL} {...EXTERNAL} className="pd-btn pd-btn--sm">
                  Reservar llamada
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="pd-nav__burger"
              aria-expanded={open}
              aria-controls="pd-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </nav>
          {open && (
            <div className="pd-menu" id="pd-menu">
              <a href={LA_EXPONENCIAL} {...EXTERNAL} onClick={close}>Exponencial</a>
              <a href={EVENTOS} {...EXTERNAL} onClick={close}>
                Live <span className="pd-live-dot" aria-hidden />
              </a>
              <a href="#newsletter" onClick={close}>Newsletter</a>
              <a href={TIDYCAL} {...EXTERNAL} onClick={close} className="pd-btn">
                Reservar llamada <span aria-hidden>→</span>
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

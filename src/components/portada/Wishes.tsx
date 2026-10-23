import { useEffect, useRef, useState, type ReactNode } from "react";

// "Esto es lo que quieres" as a deck: one card per wish, each with a small
// icon animation. Desktop pins for ~1.5 screens of scroll and deals the cards;
// phones (and reduced motion) get a horizontal swipe row with no pinning, so
// nobody is ever held in place. Wishes are María's copy, verbatim.

const wishes: { text: ReactNode; icon: ReactNode }[] = [
  { text: "Pasar de idea a realidad.", icon: <div className="pd-ico pd-ico--idea"><i /><b /></div> },
  {
    text: "Menos reuniones de Zoom.",
    icon: (
      <div className="pd-ico pd-ico--zoom">
        <div className="g">
          {Array.from({ length: 9 }, (_, k) => (
            <span key={k} />
          ))}
        </div>
      </div>
    ),
  },
  { text: "Más autonomía para decidir cómo trabajas.", icon: <div className="pd-ico pd-ico--switch"><span className="t" /><span className="k" /></div> },
  {
    text: "Ser referente en tu sector.",
    icon: (
      <div className="pd-ico pd-ico--chart">
        <svg viewBox="0 0 100 100">
          <path d="M6 86 L32 64 L52 72 L94 18" />
          <circle cx="94" cy="18" r="7" />
        </svg>
      </div>
    ),
  },
  { text: "Un programa que transforme vidas.", icon: <div className="pd-ico pd-ico--mods"><span /><span /><span /></div> },
  {
    text: "Sentir orgullo por lo que has creado.",
    icon: (
      <div className="pd-ico pd-ico--star">
        <svg viewBox="0 0 100 100">
          <path d="M50 4 L61 37 L96 38 L68 59 L78 93 L50 73 L22 93 L32 59 L4 38 L39 37 Z" />
        </svg>
      </div>
    ),
  },
  { text: "Que nuevas personas te descubran y entiendan tu valor.", icon: <div className="pd-ico pd-ico--ripple"><i /><i /><i /><b /></div> },
  {
    text: "Aprovechar todo tu potencial profesional.",
    icon: (
      <div className="pd-ico pd-ico--ring">
        <svg viewBox="0 0 80 80">
          <circle className="bg" cx="40" cy="40" r="36" />
          <circle className="fg" cx="40" cy="40" r="36" />
        </svg>
      </div>
    ),
  },
  {
    text: "Utilizar la IA como palanca.",
    icon: (
      <div className="pd-ico pd-ico--ai">
        <span className="sp" />
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    ),
  },
  {
    text: (
      <>
        Disfrutar trabajando. <em>Decidir sobre tu tiempo.</em>
      </>
    ),
    icon: <div className="pd-ico pd-ico--clock"><span className="face" /><span className="hh" /><span className="mm" /></div>,
  },
];

const N = wishes.length;
const pad = (n: number) => String(n).padStart(2, "0");
/** Matches the sticky nav height in portada.css (.pd-nav__row min-height). */
const NAV = 72;

export const Wishes = () => {
  const track = useRef<HTMLDivElement>(null);
  const pile = useRef<HTMLOListElement>(null);
  const [swipe, setSwipe] = useState(true);
  const [idx, setIdx] = useState(0);

  // Choose the layout: pinned deck only on wide screens without reduced motion.
  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 760px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pick = () => setSwipe(narrow.matches || reduce.matches);
    pick();
    narrow.addEventListener("change", pick);
    reduce.addEventListener("change", pick);
    return () => {
      narrow.removeEventListener("change", pick);
      reduce.removeEventListener("change", pick);
    };
  }, []);

  // Desktop: scroll position through the track picks the top card.
  useEffect(() => {
    if (swipe) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = track.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const max = el.offsetHeight - (window.innerHeight - NAV);
      const p = Math.max(0, Math.min(0.999, (NAV - r.top) / max));
      setIdx(Math.floor(p * N));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [swipe]);

  // Swipe row: the card most in view is the current one (counter + icon).
  useEffect(() => {
    if (!swipe || !pile.current) return;
    const cards = Array.from(pile.current.children);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setIdx(cards.indexOf(e.target));
        }),
      { root: pile.current, threshold: 0.6 },
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [swipe]);

  return (
    <section className={`pd-want${swipe ? " pd-deck--swipe" : ""}`} aria-labelledby="pd-want-h">
      <div className="pd-wrap">
        <div className="pd-deck__track" ref={track}>
          <div className="pd-deck__stage">
            <div className="pd-deck__left">
              <span className="pd-label">Esto es lo que quieres</span>
              <h2 className="pd-want__h2" id="pd-want-h">
                Un negocio que te de paz y <em>autoridad.</em>
              </h2>
              <div className="pd-deck__count" aria-hidden>
                <b>{pad(idx + 1)}</b>
                <span>/ {N}</span>
              </div>
              <div className="pd-deck__bars" aria-hidden>
                {wishes.map((_, k) => (
                  <i key={k} className={k <= idx ? "is-on" : undefined} />
                ))}
              </div>
              <a className="pd-deck__skip" href="#empieza">
                Saltar ↓
              </a>
              <span className="pd-deck__hint" aria-hidden>
                Desliza →
              </span>
            </div>

            <ol className="pd-deck__pile" ref={pile}>
              {wishes.map((w, k) => {
                const depth = Math.min(idx - k, 3);
                const style =
                  !swipe && k <= idx
                    ? {
                        transform: `translateY(${-depth * 14}px) scale(${1 - depth * 0.045}) rotate(${(k % 2 ? 1 : -1) * depth * 1.2}deg)`,
                        opacity: idx - k > 3 ? 0 : 1,
                        zIndex: k + 1,
                      }
                    : { zIndex: k + 1 };
                const cls = [
                  "pd-wish",
                  k === N - 1 ? "pd-wish--last" : "",
                  !swipe && k > idx ? "is-waiting" : "",
                  k === idx ? "is-on" : "",
                ]
                  .filter(Boolean)
                  .join(" ");
                return (
                  <li key={k} className={cls} style={style}>
                    <span aria-hidden>{w.icon}</span>
                    <div>
                      <p className="pd-wish__n">Esto es lo que quieres · {pad(k + 1)}</p>
                      <p className="pd-wish__t">{w.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

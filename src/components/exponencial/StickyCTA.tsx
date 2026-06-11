import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const TIDYCAL = "https://tidycal.com/mariagarai/exploracion";

/** Sticky bottom CTA — visible on mobile + tablet (below lg), hidden on desktop. */
export const StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const nearBottom =
        window.innerHeight + window.scrollY > doc.scrollHeight - 900;
      setShow(window.scrollY > 700 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bar = (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-[9999] px-4 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!show}
    >
      <a
        href={TIDYCAL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full justify-center flex items-center gap-2 rounded-full font-semibold text-white"
        style={{
          fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
          padding: "0.85rem 1.5rem",
          background: "#9378fe",
          boxShadow: "0 10px 30px rgba(147,120,254,0.45), 0 2px 8px rgba(147,120,254,0.3)",
        }}
        tabIndex={show ? 0 : -1}
      >
        Comprueba si encajas
        <span aria-hidden>→</span>
      </a>
    </div>
  );

  return createPortal(bar, document.body);
};

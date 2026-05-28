import { useEffect, useRef, useState } from "react";
import substackCard from "@/assets/substack-card.webp";

const IFRAME_W = 533;
const IFRAME_H = 488;

export const Newsletter = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.9);

  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) {
        const w = e.contentRect.width;
        setScale(w / IFRAME_W);
      }
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      id="newsletter"
      className="py-24 md:py-32 border-t border-border bg-secondary/40"
    >
      <div className="container-tight">
        {/* Headline + subheadline — full width */}
        <div>
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Newsletter
          </p>
          <h2 className="display-md whitespace-normal md:whitespace-nowrap">
            Aprende a construir tu{" "}
            <span className="font-serif italic text-accent">negocio</span>{" "}
            con <span className="font-serif italic text-accent">IA</span>.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-4xl">
            Cada semana escribo sobre monetización, redes que venden y herramientas que
            ahorran tiempo. Destripo la trastienda de mi negocio y entrevisto a otros
            founders con carreras únicas.
          </p>
        </div>

        {/* Form on left, mockups on right — beneath subheadline */}
        <div className="mt-16 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-6 flex justify-center md:justify-start">
            <div ref={wrapRef} className="w-full max-w-[480px] relative mx-auto md:mx-0">
              {/* Soft purple + mint glow */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(55% 60% at 25% 35%, rgba(139,92,246,0.30) 0%, rgba(139,92,246,0.08) 50%, rgba(139,92,246,0) 75%), radial-gradient(55% 60% at 80% 75%, rgba(208,252,208,0.55) 0%, rgba(208,252,208,0.18) 50%, rgba(208,252,208,0) 75%)",
                  filter: "blur(22px)",
                  zIndex: 0,
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden bg-background border border-border w-full"
                style={{
                  boxShadow:
                    "0 20px 40px -20px rgba(139,92,246,0.35), 0 8px 24px -12px rgba(139,92,246,0.2), 0 0 0 1px rgba(139,92,246,0.06)",
                  height: `${IFRAME_H * scale}px`,
                }}
              >
                {import.meta.env.DEV ? (
                  <div
                    aria-hidden
                    className="absolute inset-0 flex items-center justify-center text-foreground/40 text-sm"
                  >
                    Substack embed (hidden in dev)
                  </div>
                ) : (
                  <iframe
                    src="https://mariagarai.substack.com/embed"
                    width={IFRAME_W}
                    height={IFRAME_H}
                    title="Suscripción a Carreras Modernas en Substack"
                    frameBorder="0"
                    scrolling="no"
                    className="absolute top-0 left-0 origin-top-left block"
                    style={{
                      border: "none",
                      background: "transparent",
                      width: `${IFRAME_W}px`,
                      height: `${IFRAME_H}px`,
                      transform: `scale(${scale})`,
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Device mockup */}
          <div className="hidden md:flex md:col-span-6 items-start justify-start">
            <img
              src={substackCard}
              alt="Carreras Modernas en Substack — vista en escritorio y móvil"
              className="w-auto max-w-full max-h-[440px] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

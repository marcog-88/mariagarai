import { useEffect, useRef, useState } from "react";
import mariaCafe from "@/assets/maria-cafe.png";
import { Reveal } from "./Reveal";

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
        <Reveal>
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Hazte Grande · Newsletter
          </p>
          <h2 className="display-md whitespace-normal md:whitespace-nowrap">
            Aprende a construir tu{" "}
            <br className="md:hidden" />
            <span className="font-serif italic text-accent">negocio</span>{" "}
            con <span className="font-serif italic text-accent">IA</span>.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-4xl">
            Cada semana escribo sobre monetización, redes que venden y la IA como socia.
            Destripo la trastienda de mi negocio y entrevisto a otros founders que se
            hacen grandes.
          </p>
        </Reveal>

        {/* Form on left, mockups on right — beneath subheadline */}
        <div className="mt-16 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <Reveal variant="left" delay={120} className="md:col-span-6 flex justify-center md:justify-start">
            <div ref={wrapRef} className="w-full relative mx-auto md:mx-0">
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
                className="relative rounded-2xl overflow-hidden bg-background border border-border w-full h-[420px]"
                style={{
                  boxShadow:
                    "0 20px 40px -20px rgba(139,92,246,0.35), 0 8px 24px -12px rgba(139,92,246,0.2), 0 0 0 1px rgba(139,92,246,0.06)",
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
                    src="https://haztegrande.substack.com/embed"
                    width={IFRAME_W}
                    height={IFRAME_H}
                    title="Suscripción a Hazte Grande en Substack"
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
          </Reveal>

          {/* María writing — real, warm, weekly */}
          <Reveal variant="right" delay={250} className="hidden md:block md:col-span-6">
            <div className="rounded-2xl overflow-hidden h-[420px]">
              <img
                src={mariaCafe}
                alt="María Garaí escribiendo su newsletter desde una cafetería"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef, useState } from "react";
import substackLaptop from "@/assets/substack-laptop.png";
import substackMobile from "@/assets/substack-mobile.png";

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
            Aprende a construir un<br className="md:hidden" />{" "}
            <span className="font-serif italic text-accent">negocio boutique</span>{" "}
            con <span className="font-serif italic text-accent">IA</span>.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-4xl">
            Cada semana escribo sobre cómo founders ex-corporate están
            construyendo carreras modernas — con criterio, con marca y con IA
            como infraestructura. Gratis, en tu bandeja.
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
              </div>
            </div>
          </div>

          {/* Device mockups */}
          <div className="hidden md:block md:col-span-6">
            <div className="relative w-full aspect-[5/4]">
              {/* MacBook mockup */}
              <div className="absolute left-0 right-[18%] top-[6%] mx-auto">
                <div
                  className="rounded-[14px] p-[8px] pb-[10px]"
                  style={{
                    background: "linear-gradient(180deg, #2a2a2c 0%, #1a1a1c 100%)",
                    boxShadow:
                      "0 30px 60px -25px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04) inset",
                  }}
                >
                  <div className="flex justify-center pb-[4px]">
                    <span className="w-[3px] h-[3px] rounded-full bg-[#3a3a3c]" />
                  </div>
                  <div className="aspect-[16/10] overflow-hidden rounded-[4px] bg-white">
                    <img
                      src={substackLaptop}
                      alt="Carreras Modernas en Substack — vista en escritorio"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div
                    className="h-[10px] w-[110%] -ml-[5%] rounded-b-[14px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #d8dadd 0%, #b6b9bd 55%, #8a8d92 100%)",
                      boxShadow:
                        "0 14px 22px -12px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.5) inset",
                    }}
                  />
                  <div
                    className="h-[4px] w-[14%] mx-auto rounded-b-[6px]"
                    style={{ background: "#7e8186" }}
                  />
                </div>
              </div>

              {/* iPhone mockup */}
              <div className="absolute right-0 bottom-0 w-[26%] aspect-[9/19.5] z-10">
                <div
                  className="h-full w-full rounded-[2.25rem] p-[3px]"
                  style={{
                    background:
                      "linear-gradient(160deg, #5a5a5d 0%, #2a2a2c 50%, #4a4a4d 100%)",
                    boxShadow:
                      "0 25px 45px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="h-full w-full rounded-[2.1rem] bg-black p-[3px] relative">
                    <div className="h-full w-full rounded-[1.95rem] overflow-hidden bg-white relative">
                      <img
                        src={substackMobile}
                        alt="Carreras Modernas en Substack — vista en móvil"
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

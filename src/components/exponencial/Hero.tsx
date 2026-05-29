import expoMockup from "@/assets/exponencial-hero.webp";

const TIDYCAL = "https://tidycal.com/mariagarai/exploracion";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-20 md:pt-28 lg:pt-36 pb-20 md:pb-24 lg:pb-36 overflow-hidden"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 65% at 92% 8%, hsl(var(--mint) / 0.18), transparent 70%)",
        }}
      />
      <div className="container-tight relative">
        <div className="max-w-5xl animate-fade-up flex flex-col md:block">
          <div
            className="mb-4 md:mb-14 order-[-2] md:order-none inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] md:text-xs uppercase tracking-[0.24em] text-white"
            style={{
              background: "linear-gradient(180deg, #2a2a2a 0%, #141414 100%)",
              border: "1.5px solid #9378fe",
              boxShadow:
                "4px 0 12px rgba(147,120,254,0.5), -4px 0 12px rgba(147,120,254,0.5), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.3)",
            }}
          >
            <style>{`@keyframes expoDotPulse{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
            <span
              className="rounded-full"
              style={{
                width: "12px",
                height: "12px",
                background: "#ffffff",
                animation: "expoDotPulse 2s ease-in-out infinite",
              }}
              aria-hidden
            />
            EXPONENCIAL · 4 MESES · 1:1
          </div>
          <h1 className="mt-6 md:mt-0 font-serif text-[2rem] md:text-[clamp(2.75rem,6vw,5rem)] leading-[1.15] md:leading-[1.05] tracking-tight text-primary-foreground">
            Construye tu Carrera Moderna.{" "}
            <br />
            <em className="font-serif italic text-mint">Tu nuevo modelo profesional.</em>
          </h1>
          <p className="mt-10 text-sm md:text-base lg:text-xl text-primary-foreground/80 leading-snug max-w-4xl">
            Con múltiples vías de ingreso, autoridad en redes y un sistema con IA que lo sostenga.
          </p>
          <p className="mt-8 hidden lg:block text-base md:text-base lg:text-xl text-primary-foreground/80 leading-relaxed max-w-4xl">
            Para profesionales con trayectoria corporativa que quieren monetizar su conocimiento con un negocio propio que reemplace su sueldo y les dé libertad. Aunque sigas en corporate y no sepas por dónde empezar.
          </p>

          {/* Hero mockup */}
          <div className="mt-14 mx-auto order-[-1] md:order-none" style={{ maxWidth: "1000px" }}>
            <img
              src={expoMockup}
              alt="Exponencial — Notion, Claude, LinkedIn y Substack como herramientas de tu negocio moderno."
              className="w-full rounded-2xl object-cover"
              loading="eager"
            />
          </div>

          <div className="flex flex-col-reverse md:flex-row md:items-center gap-4 md:gap-8 mt-12">
            <a
              href={TIDYCAL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mint-lg !text-base md:!text-lg w-full md:w-auto justify-center self-start md:self-auto whitespace-nowrap border-2 border-[#0c0d0e] !text-[#0c0d0e]"
              style={{
                boxShadow:
                  "4px 4px 0 0 #0c0d0e, 8px 8px 28px rgba(147, 120, 254, 0.6), 14px 14px 56px rgba(147, 120, 254, 0.35)",
              }}
            >
              Solicitar llamada
              <span aria-hidden>→</span>
            </a>
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-widest text-primary-foreground/60">TU INVERSIÓN</p>
              <p className="font-serif text-6xl font-bold text-primary-foreground">€4500</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import heroMockup from "@/assets/redes-hero-mockup.png";

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
            className="mb-12 md:mb-14 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] md:text-xs uppercase tracking-[0.24em] text-white"
            style={{
              background: "linear-gradient(180deg, #2a2a2a 0%, #141414 100%)",
              border: "1.5px solid #e88f00",
              boxShadow:
                "4px 0 12px rgba(232,143,0,0.5), -4px 0 12px rgba(232,143,0,0.5), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.3)",
            }}
          >
            <style>{`@keyframes redesDotPulse{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
            <span
              className="rounded-full"
              style={{
                width: "12px",
                height: "12px",
                background: "#ffffff",
                animation: "redesDotPulse 2s ease-in-out infinite",
              }}
              aria-hidden
            />
            Próxima cohorte · Junio 2026 · 30 días
          </div>
          <h1 className="font-serif text-[2rem] md:text-[clamp(2.75rem,6vw,5rem)] leading-[1.15] md:leading-[1.05] tracking-tight text-primary-foreground">
            La combinación que abre{" "}
            <em className="font-serif italic text-mint">carteras y oportunidades.</em>
          </h1>
          <p className="mt-10 text-sm md:text-base lg:text-xl text-primary-foreground/80 leading-snug max-w-4xl">
            En 30 días convierte LinkedIn y Substack en tu canal de autoridad, captación y
            ventas, aunque empieces de cero.
          </p>
          <p className="mt-8 hidden lg:block text-base md:text-base lg:text-xl text-primary-foreground/80 leading-relaxed max-w-4xl">
            Sin hablarle al silencio. Sin perder horas creando diseños. Sin esperar a tener
            miles de seguidores para monetizar.
          </p>

          {/* Mockup block */}
          <div className="mt-14 mx-auto order-last md:order-none" style={{ maxWidth: "1000px" }}>
            <img
              src={heroMockup}
              alt="Redes que Venden: LinkedIn + Substack, sesiones en vivo, prospección y comunidad de mujeres"
              className="w-full h-auto"
              loading="eager"
            />
          </div>

          <div className="flex flex-col-reverse md:flex-row md:items-center gap-4 md:gap-8 mt-12">
            <a href="#precio" className="btn-mint-lg !text-lg self-start md:self-auto">
              Pagar ahora
              <span aria-hidden>→</span>
            </a>
            <div>
              <p className="text-xs uppercase tracking-widest text-primary-foreground/60">TU INVERSIÓN</p>
              <p className="font-serif text-6xl font-bold text-primary-foreground">€497</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroPrivada = () => {
  return (
    <section
      id="top"
      className="relative pt-20 md:pt-28 lg:pt-36 pb-20 md:pb-24 lg:pb-36 overflow-hidden"
      style={{ background: "#0c0d0e", color: "#ffffff" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 65% at 92% 8%, rgba(208,252,208,0.18), transparent 70%)",
        }}
      />
      <div className="container-tight relative">
        <div className="max-w-5xl animate-fade-up">
          <p
            className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em]"
            style={{ color: "#d0fcd0" }}
          >
            Construye · 8 semanas
          </p>
          <h1 className="font-serif text-[2rem] md:text-[clamp(2.75rem,6vw,5rem)] leading-[1.15] md:leading-[1.05] tracking-tight text-white">
            Ya vendes.
            <br />
            Pero todo está{" "}
            <em className="font-serif italic" style={{ color: "#d0fcd0" }}>
              a medio montar.
            </em>
          </h1>
          <p className="mt-10 text-sm md:text-base lg:text-xl text-white/80 leading-snug max-w-4xl">
            Tienes clientes. Tienes una oferta. Pero no tienes web, ni embudo, ni sistemas.
            Todo vive en tu cabeza, en WhatsApp y en un link de Calendly.
          </p>

          <div className="flex flex-col-reverse md:flex-row md:items-center gap-4 md:gap-8 mt-12">
            <a
              href="#precio"
              className="btn-mint-lg !text-lg self-start md:self-auto"
            >
              Quiero entrar
              <span aria-hidden>→</span>
            </a>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">TU INVERSIÓN</p>
              <p className="font-serif text-6xl font-bold text-white">€1997</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

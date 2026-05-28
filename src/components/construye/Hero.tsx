import heroMockup from "@/assets/construye-hero.webp";

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
            }}
          >
            <span
              className="rounded-full"
              style={{
                width: "12px",
                height: "12px",
                background: "#ffffff",
              }}
              aria-hidden
            />
            Cohorte · Próximamente
          </div>
          <h1 className="mt-6 md:mt-0 font-serif text-[2rem] md:text-[clamp(2.75rem,6vw,5rem)] leading-[1.15] md:leading-[1.05] tracking-tight text-primary-foreground">
            Ya vendes.
            <br />
            Pero todo está{" "}
            <em className="font-serif italic text-mint">a medio montar.</em>
          </h1>
          <p className="mt-10 text-sm md:text-base lg:text-xl text-primary-foreground/80 leading-snug max-w-4xl">
            Tienes clientes. Tienes una oferta. Pero no tienes web, ni embudo, ni sistemas.
            Todo vive en tu cabeza, en WhatsApp y en un link de Calendly.
          </p>
          <p className="mt-8 hidden lg:block text-base md:text-base lg:text-xl text-primary-foreground/80 leading-relaxed max-w-4xl">
            En 8 semanas montamos toda la infraestructura de tu negocio — web, landing,
            lead magnet, sistemas, automatizaciones — para que tu negocio se vea tan bueno
            como lo que ofreces. Siendo tú sola. Con IA.
          </p>

          {/* Mockup block */}
          <div className="mt-14 mx-auto order-[-1] md:order-none" style={{ maxWidth: "1000px" }}>
            <img
              src={heroMockup}
              alt="Construye: video calls 1:1, dashboard en Notion, automatización con IA y agenda integrada"
              className="w-full h-auto"
              loading="eager"
            />
          </div>

          <div className="flex flex-col-reverse md:flex-row md:items-center gap-4 md:gap-8 mt-12">
            <a href="https://mariagarai.activehosted.com/f/11" target="_blank" rel="noopener noreferrer" className="btn-mint-lg !text-lg self-start md:self-auto">
              Unirme a la lista de espera
              <span aria-hidden>→</span>
            </a>
            <div>
              <p className="text-xs uppercase tracking-widest text-primary-foreground/60">TU INVERSIÓN</p>
              <p className="font-serif text-6xl font-bold text-primary-foreground">€1997</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

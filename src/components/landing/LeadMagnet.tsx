import mockup from "@/assets/talleres-live-mockup.png";

const LUMA_TALLERES = "https://luma.com/corporateafounder";

export const LeadMagnet = () => {
  return (
    <section className="py-24 md:py-32 bg-[#f9f9f7]">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-center md:gap-16 lg:gap-24">
          {/* Left: text + CTA */}
          <div className="flex-1 min-w-0">
            <p
              className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em]"
              style={{ color: "#9378fe" }}
            >
              Talleres
            </p>
            <h2 className="display-md">
              Un taller en vivo
              <br />
              <span className="font-serif italic" style={{ color: "#9378fe" }}>
                cada semana.
              </span>
              {" "}Gratis.
            </h2>

            <div className="mt-8 md:hidden">
              <img
                src={mockup}
                alt="Taller en vivo — sesión grupal con María Garaí y participantes"
                className="w-full h-auto rounded-2xl"
                style={{ filter: "drop-shadow(0px 6px 20px rgba(0,0,0,0.13))" }}
                loading="lazy"
              />
            </div>

            <p className="mt-6 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl">
              Cada semana abro una sesión en vivo sobre negocios boutique, ventas, IA y
              sistemas. Sin coste, sin permanencia. Entras, aprendes y sales con algo que puedes
              aplicar ese mismo día.
            </p>
            <a
              href={LUMA_TALLERES}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 block w-full md:inline-block md:w-[235px] text-center rounded-full px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg font-medium text-white whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ background: "#9378fe", boxShadow: "4px 4px 0 0 #0c0d0e" }}
            >
              Apuntarme →
            </a>
          </div>

          {/* Right: mockup image (desktop) */}
          <div className="hidden md:block md:w-[42%] lg:w-[40%] flex-shrink-0">
            <img
              src={mockup}
              alt="Taller en vivo — sesión grupal con María Garaí y participantes"
              className="w-full h-auto rounded-2xl"
              style={{ filter: "drop-shadow(0px 6px 20px rgba(0,0,0,0.13))" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

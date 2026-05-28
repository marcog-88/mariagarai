import mockup from "@/assets/lead-magnet-white.webp";

export const LeadMagnet = () => {
  return (
    <section className="py-24 md:py-32 bg-[#f9f9f7]">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-center md:gap-16 lg:gap-24">
          {/* Left: text + form */}
          <div className="flex-1 min-w-0">
            <p
              className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em]"
              style={{ color: "#9378fe" }}
            >
              Diseña tu Carrera Moderna
            </p>
            <h2 className="display-md">
              ¿Qué puedes{" "}
              <span className="font-serif italic" style={{ color: "#9378fe" }}>
                vender hoy
              </span>
              <br className="hidden md:inline" />
              {" "}con lo que ya sabes?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl">
              Deja de darle vueltas. Descubre cómo monetizar tu trayectoria con un negocio
              propio: qué vender, a quién, por cuánto y por dónde empezar. Descúbrelo en 90 segundos.
            </p>
            <a
              href="https://tunuevacarrera.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full px-6 py-3 md:px-8 md:py-4 text-sm font-medium text-white whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ background: "#9378fe", boxShadow: "4px 4px 0 0 #0c0d0e" }}
            >
              Quiero probarlo →
            </a>
          </div>

          {/* Right: mockup image */}
          <div className="mt-14 md:mt-0 md:w-[42%] lg:w-[40%] flex-shrink-0">
            <img
              src={mockup}
              alt="Tu mapa de monetización personalizado con IA"
              className="w-full h-auto"
              style={{ filter: "drop-shadow(0px 6px 20px rgba(0,0,0,0.13))" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

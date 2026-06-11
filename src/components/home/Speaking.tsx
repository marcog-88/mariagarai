import mariaSpeaker from "@/assets/maria-street-suit.png";
import { Reveal } from "@/components/landing/Reveal";

export const Speaking = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#f9f9f7" }}
    >
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left column */}
          <Reveal variant="left" className="order-2 md:order-1">
            <p
              className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em]"
              style={{ color: "#9378fe" }}
            >
              Conferencias y Formación
            </p>
            <h2 className="display-md" style={{ color: "#0c0d0e" }}>
              Hablo en tu Evento
            </h2>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "#666" }}>
              Disponible para eventos corporativos, conferencias y formaciones de equipo.
            </p>
            <ul className="mt-4 space-y-2 text-base leading-relaxed" style={{ color: "#666" }}>
              <li>🤖 IA aplicada a negocios<span className="hidden md:inline">: cómo usar IA sin ser técnico para automatizar procesos</span></li>
              <li>🚀 Carreras modernas<span className="hidden md:inline">: el nuevo modelo profesional, múltiples ingresos, marca personal y reinvención</span></li>
              <li>📲 Redes que venden<span className="hidden md:inline">: cómo convertir LinkedIn en tu canal de ventas</span></li>
            </ul>
            <div className="mt-10">
              <a
                href="https://tidycal.com/mariagarai/exploracion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto justify-center md:justify-start items-center gap-2 rounded-full px-6 py-3 md:px-8 md:py-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: "#9378fe", boxShadow: "4px 4px 0 0 #0c0d0e" }}
              >
                Contáctame ↗
              </a>
            </div>
          </Reveal>

          {/* Right column: speaking photo */}
          <Reveal variant="scale" delay={150} className="aspect-[4/3] rounded-[1.25rem] overflow-hidden order-1 md:order-2">
            <img
              src={mariaSpeaker}
              alt="María Garaí, retrato profesional"
              className="w-full h-full object-cover object-[50%_22%]"
              loading="lazy"
            />
          </Reveal>

        </div>
      </div>
    </section>
  );
};

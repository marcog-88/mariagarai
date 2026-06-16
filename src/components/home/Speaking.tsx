import mariaSpeaker from "@/assets/maria-street-suit.png";
import { Reveal } from "@/components/landing/Reveal";

export const Speaking = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#f9f9f7" }}
    >
      <div className="container-tight">
        <Reveal>
          <p
            className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em]"
            style={{ color: "#9378fe" }}
          >
            Conferencias y Formación
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* Left column */}
          <Reveal variant="left" className="order-2 md:order-1">
            <h2 className="display-md" style={{ color: "#0c0d0e" }}>
              Hablo en tu Evento
            </h2>
            {/* Mobile-only image: shows between h2 and body */}
            <div className="md:hidden mt-8 rounded-[1.25rem] overflow-hidden aspect-[4/3]">
              <img
                src={mariaSpeaker}
                alt="María Garaí, retrato profesional"
                className="w-full h-full object-cover object-[50%_22%]"
                loading="lazy"
              />
            </div>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "#666" }}>
              Disponible para eventos corporativos, conferencias y formaciones de equipo.
            </p>
            <ul className="mt-4 space-y-2 text-base leading-relaxed" style={{ color: "#666" }}>
              <li>🚀 Revolucionando la formación online<span className="hidden md:inline">: el mejor modelo de negocio para expertos que venden servicios.</span></li>
              <li>🤖 IA aplicada a negocios<span className="hidden md:inline">: cómo usar IA sin ser técnico para automatizar procesos</span></li>
              <li>📲 Redes que venden<span className="hidden md:inline">: cómo convertir LinkedIn y Substack en tu canal de ventas</span></li>
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

          {/* Right column: speaking photo — desktop only */}
          <Reveal variant="scale" delay={150} className="hidden md:block relative rounded-[1.25rem] overflow-hidden md:order-2 self-stretch">
            <img
              src={mariaSpeaker}
              alt="María Garaí, retrato profesional"
              className="absolute inset-0 w-full h-full object-cover object-[50%_22%]"
              loading="lazy"
            />
          </Reveal>

        </div>
      </div>
    </section>
  );
};

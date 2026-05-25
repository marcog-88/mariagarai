import mariaSpeaker from "@/assets/maria-speaker.jpg";

export const Speaking = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#f9f9f7" }}
    >
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left column */}
          <div>
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.24em]"
              style={{ color: "#9378fe" }}
            >
              Conferencias y Formación
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-snug" style={{ color: "#0c0d0e" }}>
              Hablo en tu Evento
            </h2>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "#666" }}>
              Disponible para eventos corporativos, conferencias y formaciones de equipo.
            </p>
            <ul className="mt-4 space-y-2 text-base leading-relaxed" style={{ color: "#666" }}>
              <li>🤖 IA aplicada a negocios: cómo usar IA sin ser técnico para automatizar procesos</li>
              <li>🚀 Carreras modernas: el nuevo modelo profesional, múltiples ingresos, marca personal y reinvención</li>
              <li>📲 Redes que venden: cómo convertir LinkedIn en tu canal de ventas</li>
            </ul>
            <div className="mt-10">
              <a
                href="https://tidycal.com/mariagarai/exploracion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: "#9378fe" }}
              >
                Contáctame ↗
              </a>
            </div>
          </div>

          {/* Right column: speaking photo */}
          <div className="aspect-[4/3] rounded-[1.25rem] overflow-hidden">
            <img
              src={mariaSpeaker}
              alt="María Garaí hablando en un evento"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

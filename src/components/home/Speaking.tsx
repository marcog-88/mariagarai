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
                href="mailto:hola@mariagarai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: "#9378fe" }}
              >
                Contáctame ↗
              </a>
            </div>
          </div>

          {/* Right column: image placeholder */}
          <div
            className="aspect-[4/3] rounded-lg flex items-center justify-center text-sm font-medium"
            style={{ background: "#e8e8e8", border: "1px solid #d0d0d0", color: "#999" }}
          >
            Imagen
          </div>

        </div>
      </div>
    </section>
  );
};

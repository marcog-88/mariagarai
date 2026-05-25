export const Speaking = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#0c0d0e" }}
    >
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left column */}
          <div>
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[0.24em]"
              style={{ color: "#9378fe" }}
            >
              Conferencias y Ponencias
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-white leading-snug tracking-tight">
              Habla de IA y carreras modernas en tu empresa o evento.
            </h2>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "#888" }}>
              [Descripción pendiente]
            </p>
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
            className="aspect-[4/3] rounded-lg border border-[#333]"
            style={{ background: "#1a1a1a" }}
          />

        </div>
      </div>
    </section>
  );
};

const phases = [
  {
    mes: "MES 1",
    title: "Claridad y Posicionamiento",
    body: "Tu mapa de carrera moderna — qué vendes, a quién, a qué precio. Tu manual de marca personal. Tu propuesta que se vende sola en 10 segundos. Primeras conversaciones de venta abiertas.",
  },
  {
    mes: "MES 2",
    title: "Ventas y Primeros Clientes",
    body: "Tu manual de ventas 100% adaptado a ti. Tu sistema de prospección activa. Primeras ventas cerradas con clientes reales. Proceso de captación documentado y replicable.",
  },
  {
    mes: "MES 3",
    title: "Activos Digitales",
    body: "LinkedIn optimizado y publicando con criterio. Substack lanzado y creciendo. Tu web personal publicada. Tu sales page con copy y estructura. Tu lead magnet interactivo con IA. Tu embudo de captación completo.",
  },
  {
    mes: "MES 4",
    title: "Infraestructura y Escalado",
    body: "Tu Notion completo como sistema operativo. Claude configurado como cofundador. Tu biblioteca de prompts personalizada. Tu sistema de contenido con IA. Plan de escalado diseñado para el siguiente nivel.",
  },
];

export const Deliverables = () => {
  return (
    <section className="py-24 md:py-32" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <p className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          Lo que montamos
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight max-w-4xl">
          Cuatro meses. Cinco fases.{" "}
          <em className="font-serif italic text-mint">Un negocio boutique funcionando.</em>
        </h2>

        <div className="mt-14 space-y-8">
          {phases.map((p) => (
            <div
              key={p.mes}
              className="relative rounded-2xl bg-white border border-border p-8 md:p-10"
            >
              <span
                className="absolute top-6 right-6 text-xs uppercase tracking-[0.18em] font-semibold px-2.5 py-1 rounded-full"
                style={{ background: "#9378fe", color: "#ffffff" }}
              >
                {p.mes}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground pr-24">{p.title}</h3>
              <p className="mt-4 text-base md:text-lg text-foreground/75 leading-relaxed max-w-3xl">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="mt-10 rounded-2xl p-8 md:p-10"
          style={{ background: "#0c0d0e", color: "#ffffff" }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
            <div className="flex items-center gap-4">
              <p className="font-serif text-5xl font-bold text-mint">17</p>
              <p className="text-base text-white/80 leading-tight">Sesiones 1:1<br />con María</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div>
              <p className="text-base text-white/80">📞 WhatsApp directo entre sesiones</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <p className="font-serif text-lg text-white/60 italic">
              El acompañamiento más intensivo que existe en el mercado hispano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

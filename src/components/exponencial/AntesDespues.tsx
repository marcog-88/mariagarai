const months = [
  {
    label: "MES 1",
    title: "Claridad total",
    body: "Claridad total sobre qué vendes, a quién y a qué precio. Manual de marca personal. Primeras conversaciones de venta abiertas. Ya no vas a ciegas.",
  },
  {
    label: "MES 2",
    title: "Primeras ventas",
    body: "Primeras ventas cerradas con clientes reales. Manual de ventas adaptado a ti. Sistema de prospección funcionando. El dinero empieza a moverse.",
  },
  {
    label: "MES 3",
    title: "Activos trabajando",
    body: "Presencia digital profesional activa. LinkedIn publicando. Substack creciendo. Web y embudo publicados. Los activos trabajan mientras tú vives.",
  },
  {
    label: "MES 4",
    title: "Sistema completo",
    body: "Infraestructura con IA montada. Notion como cerebro del negocio. Plan de escalado diseñado. Sales con un negocio que funciona sin ti cada hora.",
  },
];

export const AntesDespues = () => {
  return (
    <section className="py-20 md:py-28" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          Qué pasa cada mes
        </p>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight max-w-3xl">
          Cuatro meses con una dirección clara
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {months.map((m) => (
            <div key={m.label}>
              <div
                className="mb-4 pb-4 border-b-2"
                style={{ borderColor: "#9378fe" }}
              >
                <p
                  className="text-xs uppercase tracking-[0.2em] font-semibold mb-1"
                  style={{ color: "#9378fe" }}
                >
                  {m.label}
                </p>
                <h3 className="font-serif text-xl text-foreground">{m.title}</h3>
              </div>
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const pillars = [
  {
    n: "01",
    title: "Validar",
    body: "Antes de crear nada. Antes de invertir en nada. Hablas con personas reales hasta que el mercado te confirma qué quiere comprar.",
  },
  {
    n: "02",
    title: "Gestionar la incomodidad",
    body: "La venta no falla por estrategia. Falla porque no soportamos exponernos. Aquí trabajas el músculo de hacer lo que toca aunque dé vértigo.",
  },
  {
    n: "03",
    title: "Detectar y dar sentido al feedback del mercado",
    body: "No todo lo que te dicen es importante. Aprendes a separar el ruido de la señal — y a ajustar tu oferta con criterio, no con cada opinión que escuchas.",
  },
  {
    n: "04",
    title: "Lanzar rápido",
    body: "La Oferta Aperitivo. Algo pequeño que pruebas en una semana. Sin grandes producciones. Sin esperar a tenerlo todo perfecto.",
  },
  {
    n: "05",
    title: "Empaquetar en formatos optimizados",
    body: "Tu conocimiento puede vivir en muchos formatos — auditoría, taller, sesión, programa. Aprendes a empaquetarlo según lo que tu mercado quiere comprar. Sin copiar a otros — el modelo que funciona para ti.",
  },
  {
    n: "06",
    title: "[PRÓXIMAMENTE]",
    body: "Pilar en construcción. Disponible pronto.",
    placeholder: true,
  },
];

export const OnlyDifference = () => {
  return (
    <section className="pt-0 pb-24 md:pb-32" style={{ background: "#0c0d0e", color: "#ffffff" }}>
      <div className="container-tight">
        <div className="text-center">
          <p className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            La única diferencia · Método Ventas Modernas
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-white max-w-4xl mx-auto">
            No es un método de ventas tradicional.
          </h2>
          <p className="mt-6 text-lg md:text-2xl font-light text-white/80 max-w-3xl mx-auto leading-snug">
            No es un curso de copywriting. No es otra fórmula mágica.
          </p>
          <p className="mt-10 text-base md:text-lg text-white/70 leading-relaxed max-w-[640px] mx-auto">
            Es el método que combina las cinco cosas que de verdad mueven el dinero cuando empiezas:
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {pillars.map((p) => (
            <div
              key={p.n}
              className="rounded-xl bg-white/[0.04] border border-white/10 p-7 md:p-8"
              style={p.placeholder ? { opacity: 0.5 } : undefined}
            >
              <p className="font-serif text-2xl text-mint mb-3">{p.n}</p>
              <h3 className="font-serif text-xl md:text-2xl text-white leading-tight mb-3">
                {p.title}
              </h3>
              <p className="text-white/75 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

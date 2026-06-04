const sin = [
  "Llevas meses dando vueltas sin avanzar de verdad",
  "No sabes exactamente qué vender ni a quién",
  "Creas contenido pero nadie te compra",
  "Tu sueldo sigue dependiendo de otro",
  "Sientes que te falta algo pero no sabes qué",
  "Ves cómo otras lo consiguen y no entiendes por qué",
];

const con = [
  "Sabes exactamente qué vendes, a quién y a qué precio",
  "Tienes clientes reales pagando en los primeros 60 días",
  "Tu LinkedIn y Substack trabajan mientras tú vives",
  "Operas sola con leverage de equipo gracias a la IA",
  "Tienes una carrera que es completamente tuya",
  "Sales de los 4 meses con un negocio funcionando",
];

export const Comparacion = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#0c0d0e", color: "#ffffff" }}
    >
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          Antes y después
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-white/60">
              😔 SIN EXPONENCIAL
            </h3>
            <ul className="space-y-5">
              {sin.map((s, i) => (
                <li key={i} className="flex gap-3 text-white/55 leading-relaxed">
                  <span className="text-white/40 flex-shrink-0">✕</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-mint">
              🚀 CON EXPONENCIAL
            </h3>
            <ul className="space-y-5">
              {con.map((c, i) => (
                <li key={i} className="flex gap-3 text-white leading-relaxed">
                  <span className="text-mint flex-shrink-0">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

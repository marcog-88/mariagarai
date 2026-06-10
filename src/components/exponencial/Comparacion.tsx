const sin = [
  "Vendes solo a contactos y referidos",
  "No sabes qué vender, cambias de enfoque",
  "Cobras por debajo de tu valor y te da miedo subir",
  "Lo haces todo a mano, dependes de tu tiempo cada hora",
  "Tu negocio no se ve tan profesional como tú eres",
  "Sabes que la IA podría ayudarte pero no sabes cómo",
  "Ves cómo otras lo consiguen y no entiendes por qué tú no",
];

const con = [
  "Una oferta de alto valor validada con clientes pagando",
  "Sabes exactamente qué vendes, a quién y a qué precio",
  "Subes precios con criterio y los defiendes sin culpa",
  "Tu LinkedIn y Substack te traen clientes mientras tú vives",
  "Un negocio que se ve tan profesional como tú eres",
  "La IA trabajando como tu socia operativa",
  "Sistemas que venden sin que estés en cada paso",
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

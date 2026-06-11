import { Reveal } from "@/components/landing/Reveal";

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
        <Reveal>
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            Antes y después
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          <Reveal variant="left">
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
              <h3 className="font-serif text-2xl md:text-3xl mb-8 text-white/50">
                Sin Exponencial
              </h3>
              <ul className="space-y-5">
                {sin.map((s, i) => (
                  <li key={i} className="flex gap-3 text-white/50 leading-relaxed">
                    <span className="text-white/30 flex-shrink-0">✕</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal variant="right" delay={150}>
            <div
              className="card-lift h-full rounded-2xl p-8 md:p-10"
              style={{
                border: "1px solid rgba(147,120,254,0.5)",
                background:
                  "linear-gradient(160deg, rgba(147,120,254,0.14) 0%, rgba(147,120,254,0.04) 100%)",
                boxShadow: "0 24px 60px -28px rgba(147,120,254,0.5)",
              }}
            >
              <h3 className="font-serif text-2xl md:text-3xl mb-8 text-mint">
                Con Exponencial
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
          </Reveal>
        </div>
      </div>
    </section>
  );
};

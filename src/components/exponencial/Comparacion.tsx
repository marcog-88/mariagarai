import { Reveal } from "@/components/landing/Reveal";

const sin = [
  "Cada venta es más trabajo, más reuniones, más carga mental",
  "Cambias tu tiempo por dinero y eso tiene un techo",
  "Cobras por debajo de tu valor y te da miedo subir",
  "Sirves a todos por miedo a sonar específica",
  "Tu negocio no se ve tan profesional como tú eres",
  "Lo técnico te abruma y te paraliza",
  "Lo haces todo a mano, sabes que la IA podría ayudarte pero no sabes cómo",
  "Atada a plataformas de alquiler que se quedan comisión de cada venta",
];

const con = [
  "Un solo programa de más de 2.000€ que escala sin devorarte",
  "Tu programa validado y vendido antes de construirlo entero",
  "Tu academia, tu web, tu embudo y tu CRM montados, tuyos, sin comisiones",
  "Subes precios con criterio y los defiendes sin culpa",
  "Un negocio que se ve tan profesional como tú eres",
  "Eres una pro de la IA: sabes mantener y hacer crecer tu infraestructura sin depender de nadie",
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

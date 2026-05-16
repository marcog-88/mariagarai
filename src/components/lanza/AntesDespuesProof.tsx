import { TidyCalButton } from "@/components/construye/TidyCalButton";

const sin = [
  "Llevas 8 meses \"trabajando en tu oferta\"",
  "0 ventas",
  "Sigues pensando que necesitas más audiencia",
  "Googleando \"cómo monetizar mi conocimiento\" a las 2am",
  "\"Quizás debería hacer un curso...\"",
  "La oferta cambia cada vez que hablas con alguien",
];

const con = [
  "En 8 semanas has lanzado",
  "Tus primeras ventas cerradas",
  "Sabes exactamente a quién vendes y por qué",
  "Una oferta clara que puedes describir en 10 segundos",
  "Un sistema de prospección que funciona sin audiencia masiva",
  "Confianza para tener conversaciones de venta sin sentirte vendedora",
];

export const AntesDespuesProof = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16" style={{ background: "#0c0d0e", color: "#ffffff" }}>
      <div className="container-tight">
        <div className="text-center mb-14">
          <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            Lo que cambia en 8 semanas
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-white">
            Antes y después de Lanza y Vende.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-white/60">
              🤯 SIN Lanza y Vende
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
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-mint">🙌 CON Lanza y Vende</h3>
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

        <div className="mt-12 flex justify-center">
          <TidyCalButton>
            Quiero este resultado <span aria-hidden>→</span>
          </TidyCalButton>
        </div>
      </div>
    </section>
  );
};

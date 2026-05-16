import { TidyCalButton } from "@/components/construye/TidyCalButton";

const cardA = [
  "Sigues sin saber si lo que publicas le importa a alguien.",
  "LinkedIn y Substack dormidos mientras tu competencia crece.",
  "Clientes esporádicos o ninguno desde redes.",
  "Otro año sin construir autoridad en los canales que funcionan.",
];

const cardB = [
  "Dos canales activos y alineados con tu oferta en 30 días.",
  "Un sistema de contenido de 3 horas semanales que funciona solo.",
  "Conversaciones de venta abiertas desde el primer mes.",
  "Autoridad construida en los canales donde están tus clientes.",
];

export const PreguntaReal = () => {
  return (
    <section className="pt-20 pb-24 md:py-32" style={{ background: "#ffffff" }}>
      <div className="container-tight">
        <div className="text-center mb-14">
          <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#0c0d0e" }}>
            <span className="inline-block px-3 py-1 rounded-full text-white" style={{ background: "hsl(var(--mint))" }}>
              La pregunta real
            </span>
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight text-foreground">
            No es si puedes permitirte €800.
          </h2>
          <p className="mt-4 text-lg md:text-2xl text-foreground/70">
            Es cuánto te está costando cada mes que sigues invisible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-xl p-8 bg-muted/60 border border-border">
            <p className="text-xs uppercase tracking-[0.18em] text-foreground/50 mb-3 font-medium">Camino A</p>
            <h3 className="font-serif text-2xl mb-5 text-foreground/80">Sin Redes que Venden</h3>
            <ul className="space-y-3 text-foreground/70">
              {cardA.map((it) => (
                <li key={it} className="flex gap-2"><span>—</span><span>{it}</span></li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-xl p-8 border border-transparent text-white"
            style={{ background: "hsl(var(--mint))" }}
          >
            <p className="text-xs uppercase tracking-[0.18em] mb-3 font-semibold text-white/90">Camino B</p>
            <h3 className="font-serif text-2xl mb-5 text-white">Con Redes que Venden</h3>
            <ul className="space-y-3 text-white">
              {cardB.map((it) => (
                <li key={it} className="flex gap-2"><span>✓</span><span>{it}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center font-semibold text-lg md:text-xl text-foreground max-w-2xl mx-auto">
          La decisión no es €800. La decisión es cuándo dejas de ser invisible.
        </p>

        <div className="mt-8 flex justify-center">
          <TidyCalButton>
            Quiero entrar <span aria-hidden>→</span>
          </TidyCalButton>
        </div>
      </div>
    </section>
  );
};

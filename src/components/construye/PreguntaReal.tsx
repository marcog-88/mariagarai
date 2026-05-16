import { TidyCalButton } from "./TidyCalButton";

const cardA = [
  "Otro mes sin sistema",
  "Otra semana creando contenido que no convierte",
  "Otra llamada que no llega",
  "Otro año construyendo despacio, sola, a ciegas",
];

const cardB = [
  "Web profesional activa",
  "Embudo que capta y convierte",
  "Sistema de contenido que funciona solo",
  "Una carrera moderna que ya está vendiendo",
];

export const PreguntaReal = () => {
  return (
    <section className="pt-20 pb-24 md:py-32" style={{ background: "#ffffff" }}>
      <div className="container-tight">
        <div className="text-center mb-14">
          <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#0c0d0e" }}>
            <span className="inline-block px-3 py-1 rounded-full" style={{ background: "#d0fcd0" }}>
              La pregunta real
            </span>
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight text-foreground">
            No es si puedes permitírtelo.
          </h2>
          <p className="mt-4 text-lg md:text-2xl text-foreground/70">
            Es cuánto te está costando no tenerlo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-xl p-8 bg-muted/60 border border-border">
            <p className="text-xs uppercase tracking-[0.18em] text-foreground/50 mb-3 font-medium">Camino A</p>
            <h3 className="font-serif text-2xl mb-5 text-foreground/80">Seguir como estás</h3>
            <ul className="space-y-3 text-foreground/70">
              {cardA.map((it) => (
                <li key={it} className="flex gap-2"><span>—</span><span>{it}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl p-8 border border-transparent" style={{ background: "#d0fcd0" }}>
            <p className="text-xs uppercase tracking-[0.18em] mb-3 font-semibold" style={{ color: "#0c0d0e" }}>Camino B</p>
            <h3 className="font-serif text-2xl mb-5" style={{ color: "#0c0d0e" }}>Tener la infraestructura</h3>
            <ul className="space-y-3" style={{ color: "#0c0d0e" }}>
              {cardB.map((it) => (
                <li key={it} className="flex gap-2"><span>✓</span><span>{it}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center font-semibold text-lg md:text-xl text-foreground max-w-2xl mx-auto">
          Los dos caminos cuestan 8 semanas. Solo uno construye algo.
        </p>

        <div className="mt-8 flex justify-center">
          <TidyCalButton>
            Quiero el Camino B <span aria-hidden>→</span>
          </TidyCalButton>
        </div>
      </div>
    </section>
  );
};

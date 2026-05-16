import { TidyCalButton } from "./TidyCalButton";

const colA = {
  header: "Tú sola",
  sub: "La ruta del ensayo y error",
  items: [
    "2-3 años de prueba y error",
    "Coste real: meses de ingresos perdidos",
    "Sin sistema, sin estructura",
    "Dependes de ti en cada paso",
    "Resultado: quizás",
  ],
  bottom: "Coste real: el tiempo que no vuelve",
};

const colC = {
  header: "Contratar una agencia",
  sub: "La ruta cara y dependiente",
  items: [
    "3-6 meses de espera",
    "€15000–30000 de inversión",
    "Tú no aprendes nada",
    "Dependes de ellos para siempre",
    "Sin control sobre tu propio sistema",
  ],
  bottom: "Y cuando terminen, empiezas de cero",
};

const colB = {
  header: "Construye",
  sub: "8 semanas. Sistema completo.",
  items: [
    "8 semanas con estructura clara",
    "Inversión: €1500",
    "4 sesiones 1:1 + 6 grupales",
    "Web + embudo + automatización listos",
    "Resultado: garantizado",
  ],
};

const SideCol = ({ data }: { data: typeof colA }) => (
  <div className="rounded-xl border border-border bg-white/60 overflow-hidden flex flex-col">
    <div className="bg-muted px-6 py-6">
      <h3 className="font-serif text-2xl text-foreground/70">{data.header}</h3>
      <p className="mt-1 text-sm text-foreground/50">{data.sub}</p>
    </div>
    <ul className="px-6 py-6 space-y-3 flex-1">
      {data.items.map((it) => (
        <li key={it} className="flex gap-3 text-foreground/55">
          <span className="text-foreground/40 flex-shrink-0">✗</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
    <p className="px-6 pb-6 text-sm text-foreground/50 italic">{data.bottom}</p>
  </div>
);

export const TresOpciones = () => {
  return (
    <section className="pt-24 md:pt-32 pb-24 md:pb-32" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#9378fe" }}>
          Las tres opciones
        </p>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight text-foreground max-w-4xl mb-16">
          Tienes tres caminos. Solo uno te lleva donde quieres ir.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Col A — order 2 mobile to keep B first */}
          <div className="order-2 md:order-1">
            <SideCol data={colA} />
          </div>

          {/* Col B — featured */}
          <div className="order-1 md:order-2 md:-my-4 relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ background: "#d0fcd0", color: "#0c0d0e" }}
              >
                La opción inteligente
              </span>
            </div>
            <div
              className="rounded-xl overflow-hidden flex flex-col h-full shadow-2xl"
              style={{ background: "#ffffff", boxShadow: "0 20px 60px -20px rgba(0,0,0,0.25)" }}
            >
              <div className="px-6 py-7" style={{ background: "#0c0d0e" }}>
                <h3 className="font-serif text-3xl text-white">{colB.header}</h3>
                <p className="mt-1 text-sm" style={{ color: "#d0fcd0" }}>
                  {colB.sub}
                </p>
              </div>
              <ul className="px-6 py-6 space-y-3 flex-1">
                {colB.items.map((it) => (
                  <li key={it} className="flex gap-3 text-foreground">
                    <span style={{ color: "#0c0d0e" }} className="inline-flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 text-xs" >
                      <span style={{ background: "#d0fcd0" }} className="w-5 h-5 rounded-full inline-flex items-center justify-center">✓</span>
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="px-6 pb-6">
                <TidyCalButton className="btn-mint-lg !text-base w-full justify-center">
                  Empieza aquí <span aria-hidden>→</span>
                </TidyCalButton>
              </div>
            </div>
          </div>

          <div className="order-3">
            <SideCol data={colC} />
          </div>
        </div>
      </div>
    </section>
  );
};

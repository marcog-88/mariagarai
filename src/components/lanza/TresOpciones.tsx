import { TidyCalButton } from "@/components/construye/TidyCalButton";

const colA = {
  header: "Tú sola",
  sub: "La ruta del ensayo y error",
  items: [
    "Meses dándole vueltas a la oferta",
    "Sin sistema de ventas, sin método",
    "Conversaciones que no acaban en cierre",
    "Cada semana sin facturar pesa más",
    "Resultado: quizás",
  ],
  bottom: "Coste real: el tiempo que no vuelve",
};

const colC = {
  header: "Otro curso pregrabado",
  sub: "La ruta de consumir sin ejecutar",
  items: [
    "Mucha teoría, cero acompañamiento",
    "Sin nadie revisando tus conversaciones",
    "El 87% nunca lanza nada",
    "Te quedas sola cuando aparece el miedo",
    "Sin sistema personalizado a tu caso",
  ],
  bottom: "Y al final vuelves a empezar de cero",
};

const colB = {
  header: "Lanza y Vende",
  sub: "8 semanas. Tus primeros 3K.",
  items: [
    "Oferta validada con clientes reales",
    "Inversión: €1750",
    "4 sesiones 1:1 + 2 grupales",
    "Método Ventas Modernas completo",
    "Resultado: tu primera venta cerrada",
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
    <section className="pt-0 pb-24 md:pb-32" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#9378fe" }}>
          Las tres opciones
        </p>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight text-foreground max-w-4xl mb-16">
          Tienes tres caminos. Solo uno te lleva donde quieres ir.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="order-2 md:order-1">
            <SideCol data={colA} />
          </div>

          <div className="order-1 md:order-2 md:-my-4 relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ background: "hsl(var(--mint))", color: "#0c0d0e" }}
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
                <p className="mt-1 text-sm text-mint">{colB.sub}</p>
              </div>
              <ul className="px-6 py-6 space-y-3 flex-1">
                {colB.items.map((it) => (
                  <li key={it} className="flex gap-3 text-foreground">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 text-xs">
                      <span style={{ background: "hsl(var(--mint))" }} className="w-5 h-5 rounded-full inline-flex items-center justify-center text-[#0c0d0e]">✓</span>
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

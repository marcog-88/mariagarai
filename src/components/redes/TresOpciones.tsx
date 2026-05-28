import { StripeBuyButton } from "@/components/redes/StripeBuyButton";

const colA = {
  header: "Aprenderlo sola",
  sub: "Gratis, pero lento y costoso en tiempo",
  items: [
    "Meses probando sin resultados visibles",
    "Sin nadie que corrija el rumbo cuando te pierdes",
    "Contenido sin estrategia de venta detrás",
    "Prospección a ciegas sin método",
  ],
  bottom: "Posible. Pero doloroso. Y muy lento.",
};

const colC = {
  header: "Externalizar a una agencia",
  sub: "Caro y sin marca personal real",
  items: [
    "Mínimo €1500/mes en gestión de contenido",
    "Ellos no conocen tu voz ni tu posicionamiento",
    "Dependes de ellos para cada post",
    "No aprendes — cuando pares de pagar, vuelves a cero",
  ],
  bottom: "El dinero sale, pero la marca personal no crece.",
};

const colB = {
  header: "Redes que Venden",
  sub: "30 días · Sistema completo · €497",
  items: [
    "Los dos canales montados y alineados desde el día 1",
    "María contigo para corregir y empujar en cada fase",
    "Método orientado a vender, no a conseguir likes",
    "Sistema que sigue funcionando después de los 30 días",
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
    <section className="py-24 md:py-32" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#9378fe" }}>
          Las tres opciones
        </p>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight text-foreground max-w-4xl mb-16">
          Tienes exactamente tres caminos.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="order-2 md:order-1">
            <SideCol data={colA} />
          </div>

          <div className="order-1 md:order-2 md:-my-4 relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ background: "hsl(var(--mint))", color: "#ffffff" }}
              >
                Recomendado
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
                    <span
                      className="inline-flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 text-xs text-white"
                      style={{ background: "hsl(var(--mint))" }}
                    >
                      ✓
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="px-6 pb-6">
                <div className="flex justify-center">
                  <StripeBuyButton />
                </div>
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

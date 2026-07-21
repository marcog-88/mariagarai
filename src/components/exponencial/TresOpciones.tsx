import { TidyCalButton } from "@/components/construye/TidyCalButton";
import { Reveal } from "@/components/landing/Reveal";

const colA = {
  header: "Seguir sola",
  sub: "El camino más largo",
  items: [
    "Sin nadie que revise tu dirección cada semana",
    "Años de prueba y error que cuestan dinero y energía",
    "Riesgo de construir lo que no vende",
    "Vendes solo a tu entorno, sin sistema",
    "Intentar montarlo por tu cuenta en una plataforma de alquiler y atarte a pagar comisiones para siempre",
    "El mismo negocio a medio montar dentro de 12 meses",
  ],
  bottom: "La mayoría sigue aquí. Es la opción más cara a largo plazo.",
};

const colC = {
  header: "Contratar por separado",
  sub: "La opción más cara",
  items: [
    "Mentora + copywriter + consultor IA + estratega = €14.000–€29.000",
    "Nadie integra las piezas como un todo",
    "Tú coordinas a 4 personas distintas",
    "Meses de onboarding antes de ver resultados",
    "Sin garantía de que las piezas funcionen juntas",
  ],
  bottom: "Funciona. Pero cuesta cinco veces más y tarda el doble.",
};

const colB = {
  header: "EXPONENCIAL",
  sub: "90 días · Todo montado · En propiedad",
  items: [
    "Tu programa definido, validado y vendido con la Fórmula",
    "Tu academia, tu página de venta y tu embudo montados con la Máquina",
    "Asesoría experta 1:1 y apoyo diario en comunidad",
    "Todo tuyo y funcionando en 90 días",
  ],
};

const SideCol = ({ data }: { data: typeof colA }) => (
  <div className="h-full rounded-xl border border-border bg-white/60 overflow-hidden flex flex-col">
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
        <Reveal>
          <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            Las tres opciones
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight text-foreground max-w-4xl mb-16">
            Siempre hay tres caminos. Solo uno tiene sentido.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <Reveal variant="left" delay={150} className="order-2 md:order-1">
            <SideCol data={colA} />
          </Reveal>

          <Reveal variant="scale" className="order-1 md:order-2 md:-my-4 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ background: "hsl(var(--mint))", color: "#ffffff" }}
              >
                Recomendado
              </span>
            </div>
            <div
              className="card-lift rounded-xl overflow-hidden flex flex-col h-full shadow-2xl"
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
                      <span style={{ background: "hsl(var(--mint))" }} className="w-5 h-5 rounded-full inline-flex items-center justify-center text-white">✓</span>
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="px-6 pb-6">
                <TidyCalButton
                  className="btn-mint-lg !text-base w-full justify-center whitespace-nowrap border-2 border-[#0c0d0e] !text-[#0c0d0e]"
                  style={{ boxShadow: "4px 4px 0 0 #0c0d0e" }}
                >
                  Comprueba si encajas <span aria-hidden>→</span>
                </TidyCalButton>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={150} className="order-3">
            <SideCol data={colC} />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

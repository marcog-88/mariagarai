import { Reveal } from "@/components/landing/Reveal";

const groups = [
  {
    title: "La Fórmula",
    items: [
      "Tu Plan de Negocio: tu nicho de experta, tu avatar con mayor capacidad de compra y tu propuesta de valor",
      "Tu Oferta de más de 2.000€: módulos, lecciones, bonos y precio, más la preventa a clientes reales con tus mensajes de venta redactados",
      "Tu Embudo de Ventas: lead magnet de diagnóstico, webinar que vende en directo y secuencias de email marketing",
    ],
  },
  {
    title: "La Máquina",
    items: [
      "Tu página de venta de alta conversión, publicada",
      "Tu lead magnet de diagnóstico con IA",
      "Tu embudo con tu email marketing montado",
      "Tu sistema de webinar de venta",
      "Tu academia con tus lecciones dentro, en plataforma propia",
      "Tu CRM y panel de admin, sencillo y funcionando sin dolores de cabeza",
    ],
  },
  {
    title: "El acompañamiento",
    items: [
      "Sesiones 1:1 con tu asesora experta para revisar y planear cada fase contigo",
      "Sesión grupal semanal",
      "Apoyo diario en la comunidad: para dudas, logros, retos y mindset",
      "Mínimo 3 meses de soporte tras la construcción",
    ],
  },
];

const TIDYCAL = "https://tidycal.com/mariagarai/exploracion";

export const Pricing = () => {
  return (
    <section
      id="precio"
      className="pt-12 pb-24 md:pb-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <Reveal>
          <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            Qué incluye exactamente
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-tight tracking-tight text-primary-foreground">
            EXPONENCIAL · 90 DÍAS
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 100} className={gi === groups.length - 1 ? "md:col-span-2" : ""}>
              <h3 className="text-sm uppercase tracking-[0.18em] font-semibold mb-5" style={{ color: "#b7a5ff" }}>
                {g.title}
              </h3>
              <ul className="space-y-3.5">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-3 text-primary-foreground/90 leading-relaxed text-base md:text-lg">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-mint text-white text-xs flex-shrink-0 mt-1.5">
                      ✓
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal variant="scale">
          <div className="mt-20 max-w-2xl">
            <p className="text-sm text-primary-foreground/50">
              Valor de mercado por separado:{" "}
              <span className="line-through decoration-[#9378fe]/70">€14.000 – €29.000</span>
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-mint mb-2">Tu inversión</p>
            <div className="flex items-baseline gap-4 flex-wrap">
              <span className="font-serif text-4xl md:text-5xl text-primary-foreground/40 line-through decoration-primary-foreground/40">
                €4500
              </span>
              <span className="font-serif text-7xl md:text-8xl text-primary-foreground">€3000</span>
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-mint font-semibold">
              Precio de lanzamiento
            </p>
            <p className="mt-3 text-sm text-primary-foreground/70">Pago único o fraccionado.</p>
            <p className="mt-1 text-xs italic text-primary-foreground/50">Precio sin IVA.</p>
            <p className="mt-0.5 text-xs italic text-primary-foreground/50">Aplicable según legislación fiscal de tu país de residencia.</p>

            <div
              className="mt-6 inline-flex items-center gap-3 rounded-full px-5 py-3"
              style={{
                border: "1px solid rgba(147,120,254,0.5)",
                background: "rgba(147,120,254,0.08)",
              }}
            >
              <p className="text-xs italic text-primary-foreground/50">Por aplicación</p>
            </div>

            <div>
              <a
                href={TIDYCAL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mint-lg !text-lg mt-12 mb-6 w-full md:w-auto justify-center whitespace-nowrap border-2 border-[#0c0d0e] !text-[#0c0d0e]"
                style={{
                  boxShadow:
                    "4px 4px 0 0 #0c0d0e, 8px 8px 28px rgba(147, 120, 254, 0.6), 14px 14px 56px rgba(147, 120, 254, 0.35)",
                }}
              >
                Reserva tu plaza
                <span aria-hidden>→</span>
              </a>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

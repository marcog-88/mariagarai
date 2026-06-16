import { Reveal } from "@/components/landing/Reveal";

const groups = [
  {
    title: "01 · Tu Programa Insignia",
    items: [
      "Diseño completo de tu programa de formación de alto valor: qué enseñas, a quién, a qué precio",
      "Mi paso a paso exacto para crear tu currículum y estructurar tus lecciones",
      "Tu manual de marca personalizado: mensaje, posicionamiento, diferenciación",
    ],
  },
  {
    title: "02 · Tu Marca de Autoridad",
    items: [
      "Tu LinkedIn optimizado para abrir carteras y oportunidades",
      "Tu newsletter en Substack lanzado y creciendo",
      "Tu estrategia de contenido mensual con sistema de reutilización con IA",
    ],
  },
  {
    title: "03 · Tus Ventas",
    items: [
      "Tu manual de ventas adaptado 100% a ti, con guion de objeciones reales",
      "Tu embudo de captación montado y tu sistema de prospección más allá de tu entorno",
      "Sistema de webinar de venta: primer webinar lanzado paso a paso",
    ],
  },
  {
    title: "04 · Tu Infraestructura con IA",
    items: [
      "Tu web y tu sales page que venden el programa",
      "Tu academia montada (te enseño a montarla y te doy el sistema)",
      "Tu Notion como sistema operativo: CRM, finanzas, contenido, clientes",
    ],
  },
  {
    title: "El acompañamiento",
    items: [
      "17 sesiones 1:1 con María (60 minutos, semanales)",
      "WhatsApp directo entre sesiones para dudas urgentes",
      "Reunión de Socias mensual (comunidad de founders)",
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
            EXPONENCIAL · 4 MESES · 1:1
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
              <span className="line-through decoration-[#9378fe]/70">€18.400 – €38.000</span>
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-mint mb-2">Tu inversión</p>
            <p className="font-serif text-7xl md:text-8xl text-primary-foreground">€4500</p>
            <p className="mt-1 text-xs italic text-primary-foreground/50">Precio sin IVA.</p>
            <p className="mt-0.5 text-xs italic text-primary-foreground/50">Aplicable según legislación fiscal de tu país de residencia.</p>

            {/* Scarcity — elevated from an italic whisper to a visible commitment */}
            <div
              className="mt-6 inline-flex items-center gap-3 rounded-full px-5 py-3"
              style={{
                border: "1px solid rgba(147,120,254,0.5)",
                background: "rgba(147,120,254,0.08)",
              }}
            >
              <p className="text-xs italic text-primary-foreground/50">
                Máx. <strong>2 clientas nuevas al mes</strong> · Por aplicación
              </p>
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

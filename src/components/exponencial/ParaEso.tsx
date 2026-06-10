const activos = [
  {
    n: "1",
    title: "Tu Oferta Exponencial",
    sub: "por la que te paguen 2–8k€",
    body: "Aterrizamos qué vendes, a quién y a qué precio. La empaquetamos en una oferta de alto valor, subimos precios y optimizamos el modelo para que vendas lo que sabes de la mejor forma posible. Validada con clientes reales.",
  },
  {
    n: "2",
    title: "Tu Marca de Autoridad",
    sub: "que abre carteras y oportunidades",
    body: "Construimos tu marca en LinkedIn y Substack para que los clientes lleguen a ti, no al revés. Substack te da autoridad. LinkedIn te da clientes. Los dos juntos se potencian. Sin perseguir seguidores, sin ser influencer.",
  },
  {
    n: "3",
    title: "Tus Ventas Automatizadas",
    sub: "que disfrutas haciendo",
    body: "Tu manual de ventas adaptado a ti, tu guión de llamada, tus objeciones resueltas y el embudo que mejor encaja con tu caso, montado y funcionando. Para que vendas con facilidad y más allá de tu entorno.",
  },
  {
    n: "4",
    title: "Tu Infraestructura Digital con IA",
    sub: "que sostiene todo",
    body: "Web que sabes editar. Notion como cerebro del negocio. Claude como tu socia operativa. Las automatizaciones donde tocan. Todo lo que hace que el negocio se vea tan profesional como tú.",
  },
];

const comoTrabajamos = [
  { emoji: "🗓️", label: "17 SESIONES", desc: "Una sesión 1:1 conmigo cada semana (60 min)" },
  { emoji: "👥", label: "REUNIÓN DE SOCIAS", desc: "Una vez al mes, en directo con todas las founders del programa" },
  { emoji: "💬", label: "WHATSAPP DIRECTO", desc: "Acceso a mí entre sesiones para dudas urgentes" },
  { emoji: "🎓", label: "ACADEMIA", desc: "Acceso a todo el contenido y plantillas, para siempre" },
];

export const ParaEso = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          La fórmula Exponencial
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-5xl">
          Donde entras con un proyecto a medio montar y sales con{" "}
          <em className="font-serif italic text-mint">un negocio profesional que vende precios altos cada semana.</em>
        </h2>

        <p className="mt-10 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-4xl">
          La IA y yo nos convertimos en tus socias para hacer posible lo que hoy te abruma. Construimos 4 activos:
        </p>

        <ol className="mt-16 space-y-10">
          {activos.map((a) => (
            <li key={a.n} className="flex gap-6">
              <span className="font-serif text-3xl flex-shrink-0 leading-none" style={{ color: "#9378fe" }}>
                0{a.n}
              </span>
              <div>
                <h3 className="font-bold text-primary-foreground text-lg mb-2 tracking-wide uppercase">{a.title}</h3>
                <p className="text-primary-foreground/75 leading-relaxed">{a.body}</p>
                <p className="mt-2 text-sm italic text-[#9378fe]">→ {a.sub}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-16 font-serif text-2xl md:text-3xl text-mint italic">
          Tú, la IA y yo. El equipo que escala tu negocio.
        </p>

        <div className="mt-20">
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            Cómo trabajamos
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-10">
            4 meses, codo con codo. No un curso que ves sola.
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {comoTrabajamos.map((c) => (
              <div key={c.label} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.04] p-6">
                <p className="text-2xl mb-3">{c.emoji}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-mint font-semibold mb-3">{c.label}</p>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

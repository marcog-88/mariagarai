import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/landing/Reveal";

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
  { value: "17", countTo: 17, label: "sesiones 1:1", desc: "Una sesión conmigo cada semana, de 60 minutos" },
  { value: "1×", label: "reunión de socias al mes", desc: "En directo con todas las founders del programa" },
  { value: "24/7", label: "WhatsApp directo", desc: "Acceso a mí entre sesiones para dudas urgentes" },
  { value: "∞", label: "academia para siempre", desc: "Todo el contenido y plantillas, acceso de por vida" },
];

const useCountUp = (target: number, start: boolean, duration = 1200) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let raf: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return value;
};

const StatValue = ({ stat, start }: { stat: (typeof comoTrabajamos)[number]; start: boolean }) => {
  const counted = useCountUp(stat.countTo ?? 0, start && stat.countTo !== undefined);
  return (
    <span className="font-serif text-6xl md:text-7xl leading-none tabular-nums" style={{ color: "#9378fe" }}>
      {stat.countTo !== undefined ? counted : stat.value}
    </span>
  );
};

export const ParaEso = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <Reveal>
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            La fórmula Exponencial
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-5xl">
            Donde entras con un proyecto a medio montar y sales con{" "}
            <em className="font-serif italic text-mint">un negocio profesional que vende precios altos cada semana.</em>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-10 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-4xl">
            La IA y yo nos convertimos en tus socias para hacer posible lo que hoy te abruma. Construimos 4 activos:
          </p>
        </Reveal>

        <ol className="mt-16 space-y-10">
          {activos.map((a, i) => (
            <Reveal key={a.n} as="li" delay={i * 100} className="flex gap-6">
              <span className="font-serif text-3xl flex-shrink-0 leading-none" style={{ color: "#9378fe" }}>
                0{a.n}
              </span>
              <div>
                <h3 className="font-bold text-primary-foreground text-lg mb-2 tracking-wide uppercase">{a.title}</h3>
                <p className="text-primary-foreground/75 leading-relaxed">{a.body}</p>
                <p className="mt-2 text-sm italic text-[#9378fe]">→ {a.sub}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="mt-16 font-serif text-2xl md:text-3xl text-mint italic">
            Tú, la IA y yo. El equipo que escala tu negocio.
          </p>
        </Reveal>

        <div className="mt-20" ref={statsRef}>
          <Reveal>
            <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
              Cómo trabajamos
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-12">
              4 meses, codo con codo. No un curso que ves sola.
            </h3>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {comoTrabajamos.map((c, i) => (
              <Reveal key={c.label} delay={i * 120} className="flex flex-col items-start">
                <StatValue stat={c} start={statsVisible} />
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-mint font-semibold">
                  {c.label}
                </p>
                <p className="mt-2 text-sm text-primary-foreground/65 leading-relaxed max-w-[230px]">
                  {c.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

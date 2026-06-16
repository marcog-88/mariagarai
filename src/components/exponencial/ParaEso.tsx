import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/landing/Reveal";

const activos = [
  {
    n: "1",
    title: "Tu Programa Insignia",
    body: "Pivotamos tu negocio hacia un modelo de formación altamente rentable. Definimos tu método propio, tu avatar y el currículum de tu programa. Lo validamos rápido con clientes reales antes de construirlo entero.",
  },
  {
    n: "2",
    title: "Tu Autoridad",
    body: "Construimos tu marca en LinkedIn y tu newsletter para que te posiciones como referente de tu tema. Dejas de ser invisible y empiezas a atraer clientes en vez de perseguirlos.",
  },
  {
    n: "3",
    title: "Tus Ventas",
    body: "Testamos hasta encontrar el sistema de ventas que mejor encaja contigo y lo automatizamos. Tu embudo, tu guión, tus objeciones resueltas. Para vender cada semana sin presión y más allá de tu entorno.",
  },
  {
    n: "4",
    title: "Tu Infraestructura con IA",
    body: "La web que vende tu programa, tus sistemas de gestión internos, el email marketing y, por supuesto, tu academia. Todo montado, paso a paso, contigo. Sin que toques una línea técnica.",
  },
];

const comoTrabajamos = [
  { value: "17", countTo: 17, label: "sesiones 1:1", desc: "Una sesión conmigo cada semana, de 60 minutos" },
  { value: "1×", label: "reunión de socias al mes", desc: "En directo con todas las founders del programa" },
  { value: "10/10", label: "Todo montado", desc: "Tu web · Tu academia · Tu embudo · Tu newsletter" },
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
            El programa
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-5xl">
            La fórmula <em className="font-serif italic text-mint">EXPONENCIAL</em> para vivir de tu conocimiento.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-10 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-4xl">
            En 4 meses construimos tu <strong>programa de formación online altamente rentable</strong> para ganar autoridad e ingresos escalables sin depender de tu tiempo. Todo montado, ya vendiendo, sin fricción técnica.
          </p>
          <p className="mt-6 text-lg md:text-xl font-semibold text-primary-foreground/90 leading-relaxed max-w-4xl">
            Construimos cuatro activos:
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
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="mt-16 font-serif text-2xl md:text-3xl text-mint italic">
            Tú, la IA y yo. El equipo que convierte tu conocimiento en un activo exponencial.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 max-w-4xl space-y-4 text-lg text-primary-foreground/70 leading-relaxed">
            <p>
              <span className="font-semibold text-primary-foreground">Importante:</span>{" "}
              <em>Esto no es una mentoría para hablar de tu negocio. No es una comunidad donde solo hay ruido. No es una agencia que te desconecta del proceso.</em>
            </p>
            <p>
              <em>Exponencial es un programa de acompañamiento e implementación donde te damos la infraestructura de tu programa llave en mano y trabajamos contigo la estrategia de autoridad y ventas.</em>
            </p>
          </div>
        </Reveal>

        <div className="mt-20" ref={statsRef}>
          <Reveal>
            <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
              Cómo trabajamos
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-12">
              4 meses, codo con codo. No te llevas apuntes. Te llevas la máquina montada.
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

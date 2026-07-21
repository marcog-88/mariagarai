import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/landing/Reveal";

const comoTrabajamos = [
  { value: "90", countTo: 90, label: "días", desc: "De la idea al programa vendido y montado" },
  { value: "1:1", label: "sesiones con tu asesora experta", desc: "Para revisar y bloquear cada activo contigo" },
  { value: "1×/sem", label: "apoyo constante", desc: "Sesión grupal semanal y apoyo diario en la comunidad: para dudas, logros, retos y mindset" },
  { value: "3+", label: "meses de soporte después", desc: "Mínimo 3 meses tras la construcción, y después todo el que tú quieras. La idea es que te vuelvas autosuficiente, y que nos tengas cerca siempre que lo necesites" },
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
            En 90 días construimos tu <strong>programa online de más de 2.000€</strong> para generar ingresos escalables sin depender de tu tiempo. Todo montado, ya vendiendo, sin fricción técnica.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 max-w-4xl space-y-4 text-lg text-primary-foreground/70 leading-relaxed">
            {/* Reescrito: el bloque original usaba la antítesis "esto no es X... es Y", prohibida por las reglas de voz. */}
            <p>
              <span className="font-semibold text-primary-foreground">Importante:</span>{" "}
              <em>Exponencial es un programa de acompañamiento e implementación. Te damos la infraestructura de tu programa llave en mano y trabajamos contigo la estrategia de validación y ventas.</em>
            </p>
          </div>
        </Reveal>

        <div className="mt-20" ref={statsRef}>
          <Reveal>
            <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
              Cómo trabajamos
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-12">
              90 días, codo con codo. No te llevas apuntes. Te llevas la máquina montada.
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

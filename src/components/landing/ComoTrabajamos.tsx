import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const items = [
  { value: "12", countTo: 12, label: "sesiones en vivo", desc: "Una sesión grupal cada semana con el equipo de asesoras" },
  { value: "1×", label: "reunión de comunidad al mes", desc: "En directo con todas las founders del programa" },
  { value: "24/7", label: "WhatsApp de soporte", desc: "Acceso al equipo entre sesiones para dudas urgentes" },
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

type Item = (typeof items)[number];

const StatValue = ({ item, start }: { item: Item; start: boolean }) => {
  const counted = useCountUp(item.countTo ?? 0, start && item.countTo !== undefined);
  return (
    <span className="font-serif text-6xl md:text-7xl leading-none tabular-nums" style={{ color: "#9378fe" }}>
      {item.countTo !== undefined ? counted : item.value}
    </span>
  );
};

export const ComoTrabajamos = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
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
      className="pt-12 pb-24 md:pt-16 md:pb-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <Reveal>
          <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            Cómo trabajamos
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-12">
            90 días, codo con codo. Formación, acompañamiento e implementación.
          </h2>
        </Reveal>
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 120} className="flex flex-col items-start">
              <StatValue item={item} start={started} />
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-mint font-semibold">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/65 leading-relaxed max-w-[230px]">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 10, prefix: "+", label: "años en corporate: ONU, P&G y startups" },
  { value: 12, label: "semanas hasta tu negocio facturando" },
  { value: 1, suffix: ":1", label: "sesión semanal con María, como una cofundadora" },
  { value: 5, label: "activos construidos juntas" },
];

const useCountUp = (target: number, start: boolean, duration = 1400) => {
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
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
};

const StatItem = ({ stat, start, delay }: { stat: Stat; start: boolean; delay: number }) => {
  const value = useCountUp(stat.value, start);
  return (
    <Reveal delay={delay} className="flex flex-col items-start">
      <div className="font-serif text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none tabular-nums">
        {stat.prefix}
        {value}
        <span className="text-[#9378fe]">{stat.suffix}</span>
      </div>
      <p className="mt-4 text-base md:text-lg leading-snug max-w-[220px]" style={{ color: "#9378fe" }}>
        {stat.label}
      </p>
    </Reveal>
  );
};

export const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
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
      ref={ref}
      className="py-20 md:py-28"
      style={{ background: "#0c0d0e" }}
    >
      <div className="container-tight">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} start={start} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
};

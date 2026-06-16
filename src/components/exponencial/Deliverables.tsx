import { useEffect, useRef, useState } from "react";
import deliverablesMockup from "@/assets/exponencial-deliverables-nobg-final.webp";

const stats = [
  { value: "17", countTo: 17, label: "sesiones 1:1", desc: "Una sesión conmigo cada semana, de 60 minutos" },
  { value: "1×", label: "reunión de socias al mes", desc: "En directo con todas las founders del programa" },
  { value: "24/7", label: "WhatsApp directo", desc: "Acceso a mí entre sesiones para dudas urgentes" },
  { value: "∞", label: "academia para siempre", desc: "Todo el contenido y plantillas, acceso de por vida" },
];

const useCountUp = (target: number, start: boolean, duration = 1200) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setValue(target); return; }
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

type Stat = (typeof stats)[number];
const StatValue = ({ item, start }: { item: Stat; start: boolean }) => {
  const counted = useCountUp(item.countTo ?? 0, start && item.countTo !== undefined);
  return (
    <span className="font-serif text-6xl md:text-7xl leading-none tabular-nums" style={{ color: "#9378fe" }}>
      {item.countTo !== undefined ? counted : item.value}
    </span>
  );
};

const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-10 rounded-2xl p-8 md:p-10"
      style={{ background: "#0c0d0e", color: "#ffffff" }}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-col items-start">
            <StatValue item={item} start={started} />
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-mint font-semibold">
              {item.label}
            </p>
            <p className="mt-2 text-sm text-white/65 leading-relaxed max-w-[230px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const phases = [
  {
    mes: "MES 1",
    title: "Tu Programa Insignia",
    sub: "El modelo de negocio que lo cambia todo",
    items: [
      "Pivotamos tu negocio: de vender tiempo y servicios sueltos a un solo programa de formación de alto valor.",
      "Definimos tu método propio, tu avatar ideal y el currículum de tu programa.",
      "Manual de marca: tu mensaje, tu posicionamiento, tu diferenciación.",
      "Validamos rápido con clientes reales antes de construir nada.",
    ],
    resultado: "Tienes el modelo correcto y un programa que vende, no mil ideas sueltas.",
  },
  {
    mes: "MES 2",
    title: "Tu Marca de Autoridad",
    sub: "LinkedIn + Substack",
    items: [
      "Perfil de LinkedIn optimizado para autoridad y venta.",
      "Substack lanzado y creciendo.",
      "Estrategia de contenido con criterio (no publicar por publicar).",
      "Sistema de ideación y reutilización de contenido con IA.",
    ],
    resultado: "Dejas de ser invisible. Los clientes empiezan a llegar a ti.",
  },
  {
    mes: "MES 3",
    title: "Tus Ventas",
    sub: "El sistema que vende por ti",
    items: [
      "Manual de ventas adaptado a ti y guion de llamada.",
      "Guion de objeciones reales de tu cliente.",
      "El embudo de captación que mejor encaja con tu caso, montado.",
      "Sistema de prospección más allá de tu círculo.",
    ],
    resultado: "Vendes cada semana, sin presión y más allá de tu entorno.",
  },
  {
    mes: "MES 4",
    title: "Tu Infraestructura con IA",
    sub: "Tu máquina, llave en mano",
    items: [
      "Tu web y tu sales page que venden el programa.",
      "Tu academia montada, donde alojas tu formación.",
      "Notion como sistema operativo: CRM, finanzas, contenido, clientes.",
      "Claude configurado como tu socia operativa y las automatizaciones donde tocan.",
    ],
    resultado: "Sales siendo dueña de toda la máquina. Sin atascarte con lo técnico.",
  },
];

export const Deliverables = () => {
  return (
    <section className="py-24 md:py-32" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <p className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          Lo que montamos
        </p>

        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight max-w-4xl">
          Cuatro meses. Cuatro activos.{" "}
          <em className="font-serif italic text-mint">Montados, no hablados.</em>
        </h2>

        <div className="mt-12 md:mt-16 mb-0 md:-mb-24 -mx-6 sm:-mx-16 md:-mx-24 lg:-mx-32">
          <img
            src={deliverablesMockup}
            alt="Lo que montamos en Exponencial: sesiones 1:1 con María, Notion como sistema operativo, newsletter, LinkedIn optimizado y dashboard de ventas"
            className="w-full h-auto block max-w-[84rem] mx-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-8">
          {phases.map((p) => (
            <div
              key={p.mes}
              className="relative rounded-2xl bg-white border border-border p-8 md:p-10"
            >
              <span
                className="absolute top-6 right-6 text-xs uppercase tracking-[0.18em] font-semibold px-2.5 py-1 rounded-full"
                style={{ background: "#9378fe", color: "#ffffff" }}
              >
                {p.mes}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground pr-24">{p.title}</h3>
              <p className="mt-1 text-sm italic text-foreground/50">{p.sub}</p>
              <ul className="mt-4 space-y-2">
                {p.items.map((item) => (
                  <li key={item} className="flex gap-2 text-base md:text-lg text-foreground/75 leading-relaxed">
                    <span className="flex-shrink-0 text-[#9378fe] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-foreground/60">
                <span className="uppercase tracking-widest text-xs text-[#9378fe] mr-2">Resultado</span>
                <em>{p.resultado}</em>
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar — animated counters */}
        <StatsBar />
      </div>
    </section>
  );
};

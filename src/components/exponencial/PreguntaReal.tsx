import { TidyCalButton } from "@/components/construye/TidyCalButton";

const cardA = [
  "Otro año con ingresos esporádicos o ninguno",
  "Otro año construyendo en la dirección equivocada",
  "Otro año viendo cómo otras lo consiguen mientras tú esperas",
  "La brecha con las que ya han empezado se hace más grande cada mes",
];

const cardB = [
  "Negocio boutique funcionando con clientes reales",
  "Presencia digital profesional que atrae oportunidades",
  "Sistemas con IA que trabajan sin ti cada hora",
  "Una carrera moderna que es completamente tuya",
];

export const PreguntaReal = () => {
  return (
    <section className="pt-20 pb-24 md:py-32" style={{ background: "#ffffff" }}>
      <div className="container-tight">
        <div className="text-center mb-14">
          <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]">
            <span className="inline-block px-3 py-1 rounded-full" style={{ background: "#9378fe", color: "#ffffff" }}>
              La pregunta real
            </span>
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-tight tracking-tight text-foreground">
            No es si puedes permitirte entrar.
          </h2>
          <p className="mt-4 text-lg md:text-2xl text-foreground/70">
            Es si puedes permitirte no hacerlo. Cada mes que esperas tiene un coste real. Cuantifícalo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-xl p-8 bg-muted/60 border border-border">
            <p className="text-xs uppercase tracking-[0.18em] text-foreground/50 mb-3 font-medium">Si no haces nada</p>
            <ul className="space-y-3 text-foreground/70">
              {cardA.map((it) => (
                <li key={it} className="flex gap-2"><span>—</span><span>{it}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl p-8" style={{ background: "rgba(147, 120, 254, 0.15)", border: "1px solid #9378fe" }}>
            <p className="text-xs uppercase tracking-[0.18em] mb-3 font-semibold" style={{ color: "#9378fe" }}>En 4 meses</p>
            <ul className="space-y-3" style={{ color: "#0c0d0e" }}>
              {cardB.map((it) => (
                <li key={it} className="flex gap-2"><span style={{ color: "#9378fe" }}>✓</span><span>{it}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center font-semibold text-lg md:text-xl text-foreground max-w-2xl mx-auto">
          El dinero que inviertes hoy es el coste de no pasar otros 3 años en prueba y error.
        </p>

        <div className="mt-8 flex justify-center">
          <TidyCalButton className="btn-mint-lg" style={{ boxShadow: "4px 4px 0 0 #0c0d0e" }}>
            Quiero esto para mi negocio <span aria-hidden>→</span>
          </TidyCalButton>
        </div>
      </div>
    </section>
  );
};

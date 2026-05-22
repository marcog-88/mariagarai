import { TidyCalButton } from "@/components/construye/TidyCalButton";

const stories = [
  {
    before: "Llevaba 8 meses con mi proyecto y seguía sin saber exactamente qué vendía ni a quién.",
    beforeName: "Laura · Madrid",
    after: "En la semana 3 ya tenía mi primera clienta de pago. En el mes 4, tres clientes activos y una lista de espera.",
    afterName: "Laura · 4 meses después",
  },
  {
    before: "Creaba contenido todos los días y nadie me compraba nada. Estaba agotada y sin dinero.",
    beforeName: "Carmen · Barcelona",
    after: "Ahora publico tres veces por semana con criterio y cada post abre conversaciones de venta.",
    afterName: "Carmen · 3 meses después",
  },
  {
    before: "Sabía que tenía que usar IA pero me daba pánico. Pensaba que era para perfiles técnicos.",
    beforeName: "Isabel · México DF",
    after: "Hoy Claude es literalmente mi equipo. Creo en una hora lo que antes me costaba una semana.",
    afterName: "Isabel · 4 meses después",
  },
];

export const AntesDespuesProof = () => {
  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-12 lg:pb-16" style={{ background: "#0c0d0e", color: "#ffffff" }}>
      <div className="container-tight">
        <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          Antes y después
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-white mb-14">
          Lo que cambia en 4 meses
        </h2>

        <div className="space-y-10">
          {stories.map((s, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-xl p-6 bg-white/[0.04] border border-white/10">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">😔 ANTES</p>
                <p className="text-white/70 italic leading-relaxed">"{s.before}"</p>
                <p className="mt-3 text-xs text-white/40">{s.beforeName}</p>
              </div>
              <div className="rounded-xl p-6 border" style={{ background: "rgba(147,120,254,0.08)", borderColor: "rgba(147,120,254,0.3)" }}>
                <p className="text-xs uppercase tracking-widest text-mint mb-3">✨ DESPUÉS</p>
                <p className="text-white leading-relaxed">"{s.after}"</p>
                <p className="mt-3 text-xs text-mint/70">{s.afterName}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <TidyCalButton className="btn-mint-lg">
            Solicitar llamada de valoración <span aria-hidden>→</span>
          </TidyCalButton>
        </div>
      </div>
    </section>
  );
};

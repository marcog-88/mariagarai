import { Reveal } from "@/components/landing/Reveal";

export const PorQueAhora = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <Reveal variant="blur">
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            Por qué ahora
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-4xl">
            Tres razones.{" "}
            <br />
            Tres cosas que han cambiado{" "}
            <em className="font-serif italic text-mint">en el mercado.</em>
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-12 max-w-3xl space-y-10 text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
          {[
            { n: "1", title: "Antes se pagaba por información, ahora por transformación.", body: "Hoy la información es gratis: está en Google, en YouTube, en la IA. La gente paga transformación, acompañamiento, resultados. Eso es exactamente lo que vende un programa de formación de alto valor, y lo que ningún curso de 97€ puede dar." },
            { n: "2", title: "Ser genérico cada vez vende menos.", body: "Quien tiene impacto exponencial (autoridad e ingresos que escalan) es quien se vuelve muy claro: un dolor, un avatar, un programa. Operativamente más simple, más fácil de escalar, y que no depende de ti cada hora." },
            { n: "3", title: "Montarlo ya no cuesta lo que costaba.", body: "Lo que antes costaba años, un equipo y 30.000€ en agencias hoy con IA se construye en 90 días." },
          ].map((item) => (
            <div key={item.n}>
              <h3 className="font-serif text-xl md:text-2xl text-primary-foreground mb-3 flex items-center gap-3">
                <span
                  className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold font-sans"
                  style={{ background: "rgba(147,120,254,0.2)", color: "#9378fe", border: "1.5px solid #9378fe" }}
                >
                  {item.n}
                </span>
                {item.title}
              </h3>
              <p className="pl-11">{item.body}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={250}>
          <div
            className="mt-14 rounded-2xl p-8 md:p-10 border border-mint/30"
            style={{ background: "rgba(147,120,254,0.08)" }}
          >
            <p className="font-serif text-2xl md:text-3xl text-mint italic leading-snug">
              Cada mes que pasa sin esta infraestructura es un mes en el que facturas menos de lo que podrías.
            </p>
            <p className="mt-4 text-base text-primary-foreground/60 leading-relaxed">
              No es una cuestión de si el momento es perfecto. El momento perfecto no llega. Es una cuestión de cuánto más te va a costar a ti misma esperar.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

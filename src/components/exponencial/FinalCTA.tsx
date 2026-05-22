const TIDYCAL = "https://tidycal.com/mariagarai/exploracion";

export const FinalCTA = () => {
  return (
    <section
      className="pt-24 md:pt-32 pb-12 md:pb-16"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <h2 className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-5xl">
          En 4 meses,{" "}
          <em className="font-serif italic text-mint">tú no eres la misma.</em>
        </h2>

        <ul className="mt-12 max-w-3xl space-y-4 text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
          <li className="flex gap-3"><span>→</span><span>Un negocio boutique con clientes reales y varias vías de ingreso</span></li>
          <li className="flex gap-3"><span>→</span><span>Una presencia digital que abre puertas mientras tú vives</span></li>
          <li className="flex gap-3"><span>→</span><span>Sistemas con IA que trabajan sin que tú estés presente cada hora</span></li>
        </ul>

        <div className="mt-16">
          <p className="text-xs uppercase tracking-[0.24em] text-mint mb-2">Tu inversión</p>
          <p className="font-serif text-6xl md:text-7xl text-primary-foreground">€4500</p>
          <p className="mt-2 text-primary-foreground/60 italic text-sm">Máximo 2 clientas nuevas al mes · Por aplicación</p>
        </div>

        <div className="mt-10 flex flex-col items-start gap-5">
          <a
            href={TIDYCAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mint-lg !text-lg"
          >
            Solicitar llamada de valoración
            <span aria-hidden>→</span>
          </a>
          <a
            href={TIDYCAL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-sm whitespace-nowrap text-primary-foreground/65 hover:text-mint underline underline-offset-4"
          >
            ¿Tienes dudas antes de entrar? → Reservar llamada de exploración
          </a>
        </div>
      </div>
    </section>
  );
};

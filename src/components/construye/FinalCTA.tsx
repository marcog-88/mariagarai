const TIDYCAL = "https://tidycal.com/mariagarai/exploracion";

const outcomes = [
  "Una web profesional que puedes enseñar con orgullo",
  "Un lead magnet que vuela la cabeza a tus leads",
  "Sistemas que funcionan solos",
];

export const FinalCTA = () => {
  return (
    <section
      className="pt-24 md:pt-32 pb-12 md:pb-16"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <h2 className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-5xl">
          Tu negocio funciona. Pero funciona{" "}
          <span className="font-italic text-mint">a medio montar,</span> con escaparates que no están a la altura de lo que ofreces.
        </h2>
        <p className="mt-10 text-xl md:text-2xl text-primary-foreground/80">
          <span className="text-mint">Eso cambia en 8 semanas.</span>
        </p>

        <ul className="mt-12 space-y-4 max-w-3xl">
          {outcomes.map((o, i) => (
            <li key={i} className="flex gap-3 text-mint text-lg md:text-xl leading-relaxed">
              <span className="flex-shrink-0">→</span>
              <span>{o}</span>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <p className="text-xs uppercase tracking-[0.24em] text-mint mb-2">Tu inversión</p>
          <p className="font-serif text-6xl md:text-7xl text-primary-foreground">€1997</p>
        </div>

        <div className="mt-10 flex flex-col items-start gap-5">
          <p className="text-sm text-mint">
            Solo acepto 2 clientes nuevos al mes.
          </p>
          <a href="#" className="btn-mint-lg !text-lg">
            QUIERO ENTRAR
            <span aria-hidden>→</span>
          </a>
          <a
            href={TIDYCAL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-sm whitespace-nowrap text-primary-foreground/65 hover:text-mint underline underline-offset-4"
          >
            ¿Tienes dudas antes de entrar? → Reservar llamada de valoración
          </a>
        </div>
      </div>
    </section>
  );
};

import { StripeBuyButton } from "@/components/redes/StripeBuyButton";

const outcomes = [
  "Dos canales activos y alineados con tu oferta en 30 días.",
  "Un sistema de contenido que funciona sin que estés tú en cada paso.",
  "Conversaciones de venta abiertas desde el primer mes.",
];

export const FinalCTA = () => {
  return (
    <section
      className="pt-24 md:pt-32 pb-12 md:pb-16"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <h2 className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-5xl">
          Llevas demasiado tiempo{" "}
          <span className="font-italic text-mint">invisible.</span>
        </h2>

        <ul className="mt-12 max-w-3xl space-y-4 text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
          {outcomes.map((o) => (
            <li key={o} className="flex gap-3">
              <span className="text-mint flex-shrink-0">→</span>
              <span>{o}</span>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <p className="text-xs uppercase tracking-[0.24em] text-mint mb-2">Tu inversión</p>
          <p className="font-serif text-6xl md:text-7xl text-primary-foreground">€497</p>
        </div>

        <div className="mt-10 flex flex-col items-start gap-5">
          <p className="text-sm text-mint">Máximo 20 personas por cohorte.</p>
          <StripeBuyButton />
        </div>
      </div>
    </section>
  );
};

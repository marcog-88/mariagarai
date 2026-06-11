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
            Lo que antes costaba años y 30.000€{" "}
            <br className="hidden md:block" />
            <em className="font-serif italic text-mint">hoy con IA se construye en 4 meses.</em>
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-12 max-w-3xl space-y-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
          <p>
            Antes, montar todo esto costaba meses de trabajo y miles de euros en agencias y freelancers. Crear una oferta, una marca, un embudo, los sistemas. Eso ya no es cierto.
          </p>
          <p>
            Hoy, con criterio y con la IA bien usada, puedes construir en semanas lo que antes requería un equipo y varios años.
          </p>
          <p>
            Cada mes que pasa sin esta infraestructura es un mes en el que facturas menos de lo que podrías. Sigues vendiendo tu valor, sigues haciendo el trabajo, pero no estás activando las palancas que ya están a tu alcance.
          </p>
          <p className="font-serif italic text-2xl md:text-3xl text-mint leading-snug">
            No es una cuestión de si el momento es perfecto. El momento perfecto no llega. Es una cuestión de cuánto más te va a costar a ti misma esperar.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

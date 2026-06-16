import { Reveal } from "./Reveal";

const desires = [
  "Un negocio que te dé calma y autoridad.",
  "Simplificar tu caos.",
  "Menos reuniones de Zoom.",
  "Simplicidad y alta rentabilidad.",
  "Ser referente, no invisible.",
  "Montar algo sólido que se vea profesional.",
  "__Un programa que transforme vidas.__",
  "Sentir orgullo por lo que has creado.",
  "Vender cada semana sin presión.",
  "Que los clientes te encuentren.",
  "Aprovechar la IA a tu favor.",
];

export const Thoughts = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border text-foreground" style={{ backgroundColor: "#f9f9f7" }}>
      <div className="container-tight">
        <div className="text-left">
          <Reveal>
            <p className="mb-16 md:mb-20 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
              Esto es lo que quieres
            </p>
          </Reveal>

          <div className="font-serif text-3xl md:text-[2.75rem] leading-[1.3] tracking-tight text-foreground space-y-6">
            {desires.map((line, i) => {
              const highlighted = line.startsWith("__");
              const text = highlighted ? line.replace(/__/g, "") : line;
              return (
                <Reveal key={i} as="p" variant="blur" delay={(i % 3) * 90}>
                  {highlighted ? (
                    <span
                      className="px-2"
                      style={{
                        backgroundColor: "rgba(147, 120, 254, 0.4)",
                        boxDecorationBreak: "clone",
                        WebkitBoxDecorationBreak: "clone",
                      }}
                    >
                      {text}
                    </span>
                  ) : (
                    text
                  )}
                </Reveal>
              );
            })}
            <Reveal as="p" variant="scale" className="font-bold text-accent !mt-12 text-4xl md:text-6xl">
              Disfrutar trabajando. Ser dueña de tu tiempo.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

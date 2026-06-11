import { Reveal } from "./Reveal";

const desires = [
  "Poner orden en todas las ideas locas de mi cabeza.",
  "Claridad total.",
  "Montar algo sólido. Que se vea profesional.",
  "Un servicio que funciona.",
  "Listo para salir y vender.",
  "__Algo real que me pague.__",
  "Proyectos que me ilusionen.",
  "Varios días libres a la semana.",
  "No desperdiciar dinero ni tiempo.",
  "Ganar más que en corporate.",
  "Independencia. Ser mi propia jefa.",
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
              Construir algo que sea mío.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

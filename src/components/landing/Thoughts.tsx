import { Reveal } from "./Reveal";
import { CONTAINER, SectionLabel } from "@/components/home/primitives";

// Copy is María's, verbatim from docs/mariagarai-home-diseno.html.
const desires = [
  "Un negocio que te de paz y autoridad.",
  "Pasar de idea a realidad.",
  "Menos reuniones de Zoom.",
  "Más autonomía para decidir cómo trabajas.",
  "Ser referente en tu sector.",
  "__Un programa que transforme vidas.__",
  "Sentir orgullo por lo que has creado.",
  "Que nuevas personas te descubran y entiendan tu valor.",
  "Aprovechar todo tu potencial profesional.",
  "Utilizar la IA como palanca.",
];

export const Thoughts = () => {
  return (
    <section className="border-t border-[#e6e4df] bg-[#f9f9f7] py-24 text-[#0c0d0e] lg:py-40">
      <div
        className={`${CONTAINER} flex flex-col gap-6 font-serif text-[28px] leading-[1.3] tracking-[-0.01em] sm:text-[36px] lg:text-[44px]`}
      >
        <Reveal>
          <SectionLabel className="mb-14 font-sans">Esto es lo que quieres</SectionLabel>
        </Reveal>
        {desires.map((line, i) => {
          const highlighted = line.startsWith("__");
          const text = highlighted ? line.replace(/__/g, "") : line;
          return (
            <Reveal key={i} as="p" variant="blur" delay={(i % 3) * 90} className="m-0">
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
        <Reveal
          as="p"
          variant="scale"
          className="mb-0 mt-6 font-sans text-[26px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#9378fe] sm:text-[32px] lg:text-[40px]"
        >
          Disfrutar trabajando. Decidir sobre tu tiempo.
        </Reveal>
      </div>
    </section>
  );
};

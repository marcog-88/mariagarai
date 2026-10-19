import { Reveal } from "./Reveal";
import { BTN_DARK } from "@/components/home/primitives";

const TIDYCAL = "https://tidycal.com/mariagarai/exploracion";

export const CTA = () => {
  return (
    <section id="cta" className="bg-[#0c0d0e] px-6 py-28 text-center text-[#f9f9f7] sm:px-8 lg:py-44">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-7">
        <Reveal variant="blur">
          <h2 className="m-0 font-serif text-[44px] leading-[1.02] tracking-[-0.01em] sm:text-[60px] lg:text-[72px]">
            Es momento de <span className="italic text-[#9378fe]">volverte exponencial.</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="m-0 max-w-[680px] text-[18px] leading-[1.6] text-[#f9f9f7]/80 sm:text-[20px]">
            Si quieres desarrollar un programa propio y construir una nueva línea de negocio alrededor de tus conocimientos, hablemos.
          </p>
        </Reveal>
        <Reveal delay={300} className="flex flex-col items-center gap-7">
          <a href={TIDYCAL} target="_blank" rel="noopener noreferrer" className={BTN_DARK}>
            Reserva llamada de valoración <span aria-hidden>↗</span>
          </a>
          <p className="m-0 max-w-[560px] text-[15px] leading-[1.6] text-[#f9f9f7]/60">
            Una conversación de 30 minutos para conocer tu punto de partida, entender qué quieres construir y valorar si Exponencial encaja contigo.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

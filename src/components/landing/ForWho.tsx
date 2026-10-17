import { Reveal } from "./Reveal";
import { BTN_LIGHT, CONTAINER, Dot, SectionLabel } from "@/components/home/primitives";

const TIDYCAL = "https://tidycal.com/mariagarai/exploracion";

const cases = [
  "Quizá ya tienes clientes y quieres abrir una línea de negocio.",
  "Quizá estás desarrollando una metodología nueva.",
  "O quizá quieres iniciar otra etapa profesional sin empezar desde cero.",
];

export const ForWho = () => {
  return (
    <section className="bg-[#f9f9f7] py-24 lg:py-[152px]">
      <div className={`${CONTAINER} grid items-start gap-12 lg:grid-cols-[524fr_564fr] lg:gap-16`}>
        <Reveal className="flex min-w-0 flex-col gap-5">
          <SectionLabel>A quién puedo ayudar</SectionLabel>
          {/* Two non-breaking spaces before «hablemos.», as in the design. */}
          <h2 className="m-0 font-serif text-[40px] leading-[1.05] tracking-[-0.01em] sm:text-[48px] lg:text-[56px]">
            Si sabes que puedes construir algo más&nbsp;&nbsp;
            <span className="italic text-[#9378fe]">hablemos.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="flex min-w-0 flex-col gap-5">
          <p className="m-0 text-[18px] leading-[1.6] text-[#0c0d0e] sm:text-[20px]">
            Trabajo con profesionales que tienen una base sólida de conocimientos y capacidades y quieren desarrollar una oferta propia.
          </p>
          <p className="m-0 text-[16px] italic leading-[1.65] text-[#0c0d0e]/60 sm:text-[17px]">
            Consultores, profesionales de la salud, psicólogos, juristas, formadores, coaches, mentores y especialistas de distintos sectores que quieren dar un nuevo recorrido comercial a sus conocimientos.
          </p>
          <ul className="m-0 flex list-none flex-col gap-3 p-0 text-[16px] leading-[1.65] text-[#0c0d0e]/75 sm:text-[17px]">
            {cases.map((c) => (
              <li key={c} className="flex gap-3">
                <Dot />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="m-0 text-[16px] font-semibold leading-[1.65] text-[#0c0d0e] sm:text-[17px]">
            No necesitas tener tu oferta clara. Sí necesitas una base profesional desde la que construir y disposición para implicarte en el proyecto.
          </p>
          <div className="mt-2">
            <a href={TIDYCAL} target="_blank" rel="noopener noreferrer" className={BTN_LIGHT}>
              Reservar llamada →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

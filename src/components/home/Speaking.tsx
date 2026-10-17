import mariaSpeaker from "@/assets/maria-street-suit.png";
import { Reveal } from "@/components/landing/Reveal";
import { BTN_LIGHT, CONTAINER, Dot, H2, SectionLabel } from "./primitives";

const TIDYCAL = "https://tidycal.com/mariagarai/exploracion";

const talks = [
  {
    title: "Del conocimiento al negocio propio.",
    body: "Cómo transformar una especialidad profesional en un programa, una metodología y una nueva oportunidad empresarial.",
  },
  {
    title: "IA para profesionales que no vienen del mundo técnico.",
    body: "Cómo integrar herramientas de inteligencia artificial en procesos y modelos de negocio con criterio práctico.",
  },
  {
    title: "Autoridad profesional que genera oportunidades.",
    body: "Cómo utilizar tu posicionamiento, LinkedIn y los canales de contenido para desarrollar una voz reconocible y apoyar tu estrategia comercial.",
  },
];

export const Speaking = () => {
  return (
    <section className="border-t border-[#e6e4df] bg-[#f9f9f7] py-24 lg:py-[152px]">
      <div className={`${CONTAINER} flex flex-col gap-10`}>
        <SectionLabel>Conferencias y Formación</SectionLabel>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          <Reveal variant="left" className="flex min-w-0 flex-col gap-6">
            <h2 className={`m-0 text-[#0c0d0e] ${H2}`}>Hablo en tu Evento</h2>
            <p className="m-0 text-[18px] leading-[1.6] text-[#666666] sm:text-[20px]">
              Participo en conferencias, encuentros profesionales y formaciones de equipos donde hablamos del futuro del trabajo, los nuevos modelos de negocio y las oportunidades que abre la inteligencia artificial.
            </p>
            <ul className="m-0 flex list-none flex-col gap-[18px] p-0 text-[16px] leading-[1.6] text-[#666666] sm:text-[17px]">
              {talks.map((t) => (
                <li key={t.title} className="flex gap-3">
                  <Dot />
                  <span>
                    <strong className="block font-semibold text-[#0c0d0e]">{t.title}</strong>
                    {t.body}
                  </span>
                </li>
              ))}
            </ul>
            <div>
              <a href={TIDYCAL} target="_blank" rel="noopener noreferrer" className={BTN_LIGHT}>
                Contáctame ↗
              </a>
            </div>
          </Reveal>

          <Reveal variant="scale" delay={150} className="min-w-0 overflow-hidden rounded-2xl">
            <img
              src={mariaSpeaker}
              alt="María Garai, retrato profesional"
              className="block h-auto w-full"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

import { Reveal } from "@/components/landing/Reveal";
import { BTN_LIGHT, CONTAINER, H2_56, SectionLabel } from "./primitives";

// Lead magnet on laexponencial.com (exponencial repo, app/disena-tu-programa).
// Not to be confused with this repo's retired /disena-tu-oferta (301 in vercel.json).
const DISENA_TU_PROGRAMA = "https://www.laexponencial.com/disena-tu-programa";

export const DisenaTuPrograma = () => {
  return (
    <section className="bg-[#f1edff] py-24 lg:py-[152px]">
      <div className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-[380px_1fr] lg:gap-[72px]`}>
        {/* Placeholder: the screenshot/photo of the tool arrives later. */}
        <Reveal
          variant="left"
          className="box-border flex aspect-[4/3] min-w-0 items-center justify-center rounded-2xl p-6 text-center text-[15px] text-[#4a4258] shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
          style={{ background: "linear-gradient(160deg, #e4dcff 0%, #cfc2ff 100%)" }}
        >
          [Foto o captura de la herramienta Diseña tu Programa]
        </Reveal>

        <Reveal className="flex min-w-0 flex-col gap-5">
          <SectionLabel onLilac>Herramienta gratuita</SectionLabel>
          <h2 className={`m-0 ${H2_56}`}>Diseña tu Programa</h2>
          <p className="m-0 text-[18px] leading-[1.6] text-[#0c0d0e] sm:text-[20px]">
            Tienes conocimientos, una especialidad o una idea que te gustaría convertir en una oferta digital propia, pero ¿por dónde empiezas?
          </p>
          <p className="m-0 text-[16px] leading-[1.65] text-[#0c0d0e]/75 sm:text-[17px]">
            Utiliza esta herramienta gratuita para empezar a dar forma a tu programa: a quién quieres ayudar, qué problema vas a resolver, qué transformación puedes ofrecer y qué precio ponerle.
          </p>
          <p className="m-0 font-serif text-[24px] italic leading-[1.3] text-[#6342c9] sm:text-[30px]">
            Visualizar tu modelo de negocio es el primer paso.
          </p>
          <div className="mt-2">
            <a href={DISENA_TU_PROGRAMA} target="_blank" rel="noopener noreferrer" className={BTN_LIGHT}>
              Diseña tu programa gratis →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

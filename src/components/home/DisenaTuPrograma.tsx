import captura from "@/assets/disena-tu-programa-captura.webp";
import { Reveal } from "@/components/landing/Reveal";
import { BTN_LIGHT, CONTAINER, H2_56, SectionLabel } from "./primitives";

// Lead magnet on laexponencial.com (exponencial repo, app/disena-tu-programa).
// Not to be confused with this repo's retired /disena-tu-oferta (301 in vercel.json).
const DISENA_TU_PROGRAMA = "https://www.laexponencial.com/disena-tu-programa";

/**
 * Laptop drawn in CSS around the lead-magnet screenshot: dark bezel with a
 * camera dot, then a wider silver base with the opening notch. The screen keeps
 * the screenshot's own ratio (2586x1440) so nothing is cropped.
 */
const Laptop = () => (
  <div className="mx-auto w-full max-w-[460px] px-[6%]">
    <div className="relative rounded-t-[14px] rounded-b-[4px] bg-[#1b1c1f] p-[3%] pb-[3.5%] shadow-[0_24px_48px_-16px_rgba(42,31,85,0.45)] ring-1 ring-black/50">
      <span aria-hidden className="absolute left-1/2 top-[1.2%] h-1 w-1 -translate-x-1/2 rounded-full bg-[#3a3b40]" />
      <div className="aspect-[2586/1440] overflow-hidden rounded-[3px] bg-[#0c0d0e]">
        <img
          src={captura}
          alt="Captura de la herramienta Diseña tu Programa"
          width={1200}
          height={668}
          loading="lazy"
          className="block h-full w-full object-cover object-top"
        />
      </div>
    </div>
    <div
      aria-hidden
      className="relative -mx-[7%] h-[12px] rounded-b-[12px] shadow-[0_12px_20px_-8px_rgba(42,31,85,0.4)] sm:h-[14px]"
      style={{ background: "linear-gradient(180deg, #ecebf2 0%, #c9c5d6 60%, #aaa5bb 100%)" }}
    >
      <span className="absolute left-1/2 top-0 h-[5px] w-[18%] -translate-x-1/2 rounded-b-[6px] bg-[#b3aec4]" />
    </div>
  </div>
);

export const DisenaTuPrograma = () => {
  return (
    <section className="bg-[#f1edff] py-24 lg:py-[152px]">
      <div className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-[380px_1fr] lg:gap-[72px]`}>
        {/* Screenshot of the tool inside a CSS laptop mockup (no image frame asset). */}
        <Reveal className="min-w-0">
          <Laptop />
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

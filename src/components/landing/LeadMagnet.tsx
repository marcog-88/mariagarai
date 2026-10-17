import mockup from "@/assets/talleres-live-mockup.png";
import { Reveal } from "./Reveal";
import { BTN_LIGHT, CONTAINER, H2, SectionLabel } from "@/components/home/primitives";

// Events moved to laexponencial.com (Phase 1 migration, Session 5). This is a
// homepage body CTA rather than a nav link — repointed for the same reason the
// navs were: the /eventos 301 would have caught it, but a redirect is the net
// for external inbound links, not for our own site linking at a route we just
// deleted.
const LUMA_TALLERES = "https://www.laexponencial.com/eventos";

export const LeadMagnet = () => {
  return (
    <section className="bg-[#f9f9f7] py-24 lg:py-40">
      <div className={`${CONTAINER} flex flex-col gap-8`}>
        <SectionLabel>Miércoles · Taller en vivo</SectionLabel>

        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-stretch lg:gap-24">
          <Reveal variant="left" className="flex min-w-0 flex-col gap-5">
            <h2 className={`m-0 ${H2}`}>De Experto a Negocio</h2>
            <p className="mt-1 mb-0 text-[18px] italic leading-[1.6] text-[#0c0d0e]/60 sm:text-[20px]">
              Cada miércoles en directo.
            </p>
            <div className="my-5 space-y-5 text-[18px] leading-[1.6] text-[#0c0d0e]/75 sm:text-[20px]">
              <p className="m-0">
                Una clase práctica cada miércoles para profesionales que quieren convertir sus conocimientos en un programa propio y desarrollar un negocio alrededor de él.
              </p>
              <p className="m-0">
                Hablamos de metodología, ofertas de alto valor, ventas, infraestructura digital e IA aplicada. Sin fórmulas mágicas ni necesidad de convertirte en especialista en todo.
              </p>
              <p className="m-0">
                Cada semana abordamos un problema distinto y trabajamos sobre ejemplos y herramientas que puedes aplicar a tu proyecto.
              </p>
            </div>
            <div className="mt-5">
              <a href={LUMA_TALLERES} target="_blank" rel="noopener noreferrer" className={BTN_LIGHT}>
                Inscríbete gratis →
              </a>
            </div>
          </Reveal>

          <Reveal
            variant="right"
            delay={150}
            className="relative min-w-0 overflow-hidden rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.13)] lg:min-h-[360px]"
          >
            <img
              src={mockup}
              alt="Taller en vivo, sesión grupal con María Garai y participantes"
              className="block h-auto w-full object-cover lg:absolute lg:inset-0 lg:h-full"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

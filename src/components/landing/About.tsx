import fotoQuien1 from "@/assets/maria-quien-1.webp";
import fotoQuien2 from "@/assets/maria-quien-2.webp";
import { Reveal } from "./Reveal";
import { CONTAINER, H2, SectionLabel } from "@/components/home/primitives";

const BODY = "m-0 text-[16px] leading-[1.7] text-[#0c0d0e]/75 sm:text-[17px]";
const STRONG = "m-0 text-[16px] leading-[1.7] font-semibold text-[#0c0d0e] sm:text-[17px]";

/** 4:5 portrait, smaller on mobile. `focus` keeps the face in the crop. */
const Photo = ({ src, focus }: { src: string; focus: string }) => (
  <img
    src={src}
    alt="María Garai"
    width={900}
    height={1350}
    loading="lazy"
    className="mx-auto block aspect-[4/5] w-full max-w-[240px] rounded-2xl object-cover shadow-[0_6px_20px_rgba(0,0,0,0.08)] sm:max-w-[300px] lg:max-w-none"
    style={{ objectPosition: focus }}
  />
);

// Same 1152px column as the other sections. The bio is split in two blocks,
// each beside a photo, so the lines stay a readable length (20 oct 2026).
export const About = () => {
  return (
    <section id="about" className="bg-white py-24 lg:py-40">
      <div className={`${CONTAINER} flex flex-col gap-20 lg:gap-28`}>
        {/* Block 1: text left, photo right */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-24">
          <div className="flex min-w-0 flex-col gap-6">
            <Reveal>
              <SectionLabel className="mb-10">Quién está detrás</SectionLabel>
              <h2 className={`mb-4 mt-0 ${H2}`}>¡Hola! Soy María Garai.</h2>
            </Reveal>
            <Reveal delay={150} className="flex flex-col gap-6">
              <p className={BODY}>Soy jurista de formación y he desarrollado mi carrera entre Naciones Unidas, la Unión Europea, Procter &amp; Gamble y el mundo de las startups, trabajando en proyectos y equipos internacionales en ocho países.</p>
              <p className={STRONG}>Hasta que decidí emprender.</p>
              <p className={BODY}>Ahí descubrí que construir un negocio propio es una disciplina completamente distinta. No basta con tener conocimientos, trabajar mucho o acumular cursos. Hay que encontrar una oportunidad de mercado, convertirla en una oferta, posicionarla con autoridad y construir los sistemas digitales para venderla a desconocidos.</p>
              <p className={BODY}>La cuestión no es pasar de cuenta ajena a propia, sino pasar del modelo de vender tu tiempo a ser dueño de negocio. Y&nbsp;lo mejor es empezar empaquetando lo que ya sabes en un programa de formación y acompañamiento de alto valor.</p>
            </Reveal>
          </div>
          <Reveal variant="right" className="min-w-0">
            <Photo src={fotoQuien1} focus="50% 20%" />
          </Reveal>
        </div>

        {/* Block 2: photo left, text right (text first on mobile) */}
        <div className="grid items-center gap-12 lg:grid-cols-[380px_1fr] lg:gap-24">
          <Reveal variant="left" className="order-2 min-w-0 lg:order-1">
            <Photo src={fotoQuien2} focus="50% 30%" />
          </Reveal>
          <Reveal delay={150} className="order-1 flex min-w-0 flex-col gap-6 lg:order-2">
            <p className={BODY}>No necesitas convertirte en experto en programación, marketing, automatizaciones y tecnología para conseguirlo.</p>
            <p className={BODY}>Por eso creé Exponencial: para unir el trabajo estratégico con la implementación y ayudar a profesionales a desarrollar su propio programa, construir su infraestructura digital y un sistema comercial multi-canal.</p>
            <p className={BODY}>Quiero que más profesionales puedan decidir cómo desarrollar su carrera, crear algo que lleve su nombre y ampliar las posibilidades de vivir muy bien de lo que saben.</p>
            <p className={BODY}>Mi misión es ayudarte a construir esa siguiente etapa profesional. Y, por el camino, hacerte grande.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

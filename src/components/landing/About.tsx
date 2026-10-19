import sobreMi from "@/assets/maria-sitting-no-background.webp";
import { Reveal } from "./Reveal";
import { H2, SectionLabel } from "@/components/home/primitives";

const BODY = "m-0 text-[15px] leading-[1.7] text-[#0c0d0e]/75";
const STRONG = "m-0 text-[15px] leading-[1.7] font-semibold text-[#0c0d0e]";

export const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="grid lg:grid-cols-[1fr_420px] lg:items-end">
        {/* Text column */}
        <div className="flex min-w-0 flex-col gap-6 px-6 py-24 sm:px-8 lg:pb-36 lg:pl-24 lg:pr-16 lg:pt-36">
          <Reveal>
            <SectionLabel className="mb-10">Quién está detrás</SectionLabel>
            <h2 className={`mb-4 mt-0 ${H2}`}>¡Hola! Soy María Garai.</h2>
          </Reveal>
          <Reveal delay={150} className="flex flex-col gap-6">
            <p className={BODY}>Soy jurista de formación y he desarrollado mi carrera entre Naciones Unidas, la Unión Europea, Procter &amp; Gamble y el mundo de las startups, trabajando en proyectos y equipos internacionales en ocho países.</p>
            <p className={STRONG}>Hasta que decidí emprender.</p>
            <p className={BODY}>Ahí descubrí que construir un negocio propio es una disciplina completamente distinta. No basta con tener conocimientos, trabajar mucho o acumular cursos. Hay que encontrar una oportunidad de mercado, convertirla en una oferta, posicionarla con autoridad y construir los sistemas digitales para venderla a desconocidos.</p>
            <p className={BODY}>Probé diferentes modelos de negocio, profundicé en ventas y empecé a trabajar con herramientas digitales e inteligencia artificial. Por el camino entendí algo que hoy está en el centro de todo lo que hacemos en Exponencial:</p>
            <p className={STRONG}>La cuestión no es pasar de cuenta ajena a propia, sino pasar del modelo de vender tu tiempo a ser dueño de negocio. Y&nbsp;lo mejor es empezar empaquetando lo que ya sabes en un programa de formación y acompañamiento de alto valor.</p>
            <p className={BODY}>No necesitas convertirte en experto en programación, marketing, automatizaciones y tecnología para conseguirlo.</p>
            <p className={BODY}>Por eso creé Exponencial: para unir el trabajo estratégico con la implementación y ayudar a profesionales a desarrollar su propio programa, construir su infraestructura digital y un sistema comercial multi-canal.</p>
            <p className={BODY}>Quiero que más profesionales puedan decidir cómo desarrollar su carrera, crear algo que lleve su nombre y ampliar las posibilidades de vivir muy bien de lo que saben.</p>
            <p className={BODY}>Mi misión es ayudarte a construir esa siguiente etapa profesional. Y, por el camino, hacerte grande.</p>
          </Reveal>
        </div>

        {/* Photo column: 667px tall on desktop, anchored to the bottom */}
        <Reveal variant="right" className="flex min-w-0 items-end justify-center px-6 lg:h-[667px] lg:px-0">
          <img
            src={sobreMi}
            alt="María Garai"
            className="block h-auto w-full max-w-xs object-contain object-bottom sm:max-w-sm lg:h-full lg:w-auto lg:max-w-full"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
};

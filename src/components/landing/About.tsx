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
            <p className={BODY}>Soy jurista de formación y he desarrollado mi carrera entre Naciones Unidas, la Unión Europea, P&amp;G y el mundo de las startups, trabajando en proyectos y equipos internacionales en ocho países.</p>
            <p className={BODY}>Durante años conocí el mundo profesional desde dentro: las grandes organizaciones, los procesos corporativos, los objetivos comerciales, la presión por conseguir resultados y las oportunidades que aparecen cuando aprendes a combinar estrategia y ejecución.</p>
            <p className={STRONG}>Hasta que decidí emprender.</p>
            <p className={BODY}>Y descubrí que construir un negocio propio es una disciplina completamente distinta. No basta con tener conocimientos, trabajar mucho o acumular cursos. Hay que encontrar una oportunidad real, convertirla en una oferta, aprender a venderla y construir los sistemas que permitan llevarla a la práctica.</p>
            <p className={BODY}>Probé diferentes modelos de negocio, profundicé en ventas y empecé a trabajar con herramientas digitales e inteligencia artificial. Por el camino entendí algo que hoy está en el centro de todo lo que hacemos en Exponencial:</p>
            <p className={STRONG}>No necesitas empezar otra carrera desde cero para construir algo propio. Puedes desarrollar una nueva línea de negocio a partir de los conocimientos, capacidades e intereses profesionales que ya tienes.</p>
            <p className={BODY}>Y tampoco necesitas convertirte en experto en programación, marketing, automatizaciones y tecnología para conseguirlo.</p>
            <p className={BODY}>Por eso creamos Exponencial: para unir el trabajo estratégico con la implementación y ayudar a profesionales a desarrollar su propio programa, construir su infraestructura digital y poner en marcha un sistema comercial.</p>
            <p className={BODY}>Quiero que más profesionales puedan decidir cómo desarrollar su carrera, crear algo que lleve su nombre y ampliar las posibilidades de vivir de lo que saben.</p>
            <p className={BODY}>No se trata de trabajar menos por arte de magia ni de abandonar necesariamente tu profesión. Se trata de construir más opciones y dejar de depender de una única manera de generar ingresos.</p>
            <p className={STRONG}>Mi misión es ayudarte a construir esa siguiente etapa profesional. Y, por el camino, hacerte grande.</p>
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

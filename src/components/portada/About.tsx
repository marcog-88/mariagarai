import fotoCafe from "@/assets/maria-quien-2.webp";
import fotoCalle from "@/assets/maria-street-suit.png";
import fotoEvento from "@/assets/maria-speaker.jpg";

// Photo collage (no captions) beside one readable column of María's bio,
// verbatim from the previous About.tsx.
export const About = () => (
  <section className="pd-about" id="sobre-maria">
    <div className="pd-collage">
      <figure className="f1">
        <img src={fotoCafe} alt="María Garai sonriendo en una cafetería" loading="lazy" />
      </figure>
      <figure className="f2">
        <img src={fotoCalle} alt="María Garai con traje en la calle" loading="lazy" />
      </figure>
      <figure className="f3">
        <img src={fotoEvento} alt="María Garai dando una conferencia" loading="lazy" />
      </figure>
    </div>
    <div>
      <span className="pd-label">Quién está detrás</span>
      <h2 className="pd-about__h2">
        ¡Hola! Soy <em>María Garai.</em>
      </h2>
      <div className="pd-about__body">
        <p>Soy jurista de formación y he desarrollado mi carrera entre Naciones Unidas, la Unión Europea, Procter &amp; Gamble y el mundo de las startups, trabajando en proyectos y equipos internacionales en ocho países.</p>
        <p>
          <strong>Hasta que decidí emprender.</strong>
        </p>
        <p>Ahí descubrí que construir un negocio propio es una disciplina completamente distinta. No basta con tener conocimientos, trabajar mucho o acumular cursos. Hay que encontrar una oportunidad de mercado, convertirla en una oferta, posicionarla con autoridad y construir los sistemas digitales para venderla a desconocidos.</p>
        <p>La cuestión no es pasar de cuenta ajena a propia, sino pasar del modelo de vender tu tiempo a ser dueño de negocio. Y&nbsp;lo mejor es empezar empaquetando lo que ya sabes en un programa de formación y acompañamiento de alto valor.</p>
        <p>No necesitas convertirte en experto en programación, marketing, automatizaciones y tecnología para conseguirlo.</p>
        <p>Por eso creé Exponencial: para unir el trabajo estratégico con la implementación y ayudar a profesionales a desarrollar su propio programa, construir su infraestructura digital y un sistema comercial multi-canal.</p>
        <p>Quiero que más profesionales puedan decidir cómo desarrollar su carrera, crear algo que lleve su nombre y ampliar las posibilidades de vivir muy bien de lo que saben.</p>
      </div>
      <p className="pd-about__pull">
        Mi misión es ayudarte a construir esa siguiente etapa profesional. Y, por el camino, <em>hacerte grande.</em>
      </p>
    </div>
  </section>
);

import monograma from "@/assets/brand/monograma-m-lila.svg";
import { EXTERNAL, LA_EXPONENCIAL } from "./links";

const pillars = [
  {
    n: "01",
    title: "Tu metodología y programa propio",
    body: [
      "Definimos tu posicionamiento, la oportunidad de negocio, el cliente al que quieres ayudar y la oferta que vas a llevar al mercado.",
      "Damos forma a tu metodología y diseñamos el programa, su estructura, sus contenidos y la experiencia que vas a ofrecer a tus clientes.",
    ],
  },
  {
    n: "02",
    title: "Tu infraestructura comercial y operativa",
    body: [
      "Construimos contigo el entorno digital para entregar tu programa: plataforma, procesos, automatizaciones y organización interna.",
      "Integramos la IA donde aporta valor y utilizamos nuestro Program OS para ayudarte a organizar los procesos y las rutinas de tu negocio.",
    ],
  },
  {
    n: "03",
    title: "Tu Sistema de Captación Multicanal",
    body: [
      "Trabajamos tu posicionamiento y construimos las piezas comerciales necesarias para dar a conocer tu programa y convertir el interés en oportunidades de venta.",
      "Página de ventas, perfiles profesionales, diagnóstico, email marketing, talleres en directo y los canales de captación más adecuados para tu proyecto.",
    ],
  },
];

/** Dark Exponencial-style card with María's M in the corner; the first pillar starts open. */
export const TrabajaConmigo = () => (
  <section className="pd-prog" id="trabaja-conmigo">
    <img src={monograma} alt="" className="pd-prog__m" aria-hidden />
    <span className="pd-label pd-label--dark">Trabaja conmigo</span>
    <h2 className="pd-prog__h2">
      Te ayudo a convertir lo que sabes en un negocio que vaya <em>más allá de tus horas.</em>
    </h2>
    <p className="pd-prog__intro">
      Exponencial es un programa de seis meses en el que mi equipo y yo te ayudamos a transformar tus conocimientos en un programa propio y construimos contigo la infraestructura digital y comercial necesaria para convertirlo en una línea de negocio muy rentable.
    </p>
    <p className="pd-prog__intro">
      No tienes que llegar con una metodología definida ni las ideas listas. Partimos de tu trayectoria y tu potencial para sentar las bases de tu negocio y crear los activos digitales que lo escalen.
    </p>
    <div className="pd-acc">
      {pillars.map((p, i) => (
        <details key={p.n} open={i === 0}>
          <summary>
            <span className="pd-acc__n">{p.n}</span>
            <h3 className="pd-acc__t">{p.title}</h3>
            <span className="pd-acc__pl" aria-hidden>
              +
            </span>
          </summary>
          <div className="pd-acc__bd">
            {p.body.map((b) => (
              <p key={b}>{b}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
    <div className="pd-prog__foot">
      <a href={LA_EXPONENCIAL} {...EXTERNAL} className="pd-btn pd-btn--v">
        Conoce Exponencial <span aria-hidden>→</span>
      </a>
      <small>Programa de seis meses · Acceso mediante valoración previa</small>
    </div>
  </section>
);

import { Reveal } from "./Reveal";
import { BTN_DARK, CONTAINER, H2, SectionLabel } from "@/components/home/primitives";

// /exponencial retired here (Phase 1 migration) — laexponencial.com is now the
// only live sales page.
const LA_EXPONENCIAL = "https://www.laexponencial.com/";

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
    title: "Tu infraestructura digital y operativa",
    body: [
      "Construimos contigo el entorno digital necesario para entregar tu programa: plataforma, procesos, accesos, automatizaciones y organización interna.",
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

export const Exponencial = () => {
  return (
    <section
      id="programa-estrella"
      className="border-t border-[rgba(147,120,254,0.2)] bg-[#0c0d0e] py-24 text-white lg:py-40"
    >
      <div className={`${CONTAINER} flex flex-col gap-14`}>
        <Reveal variant="blur" className="flex max-w-[900px] flex-col gap-5">
          <SectionLabel>Trabaja conmigo</SectionLabel>
          <h2 className={`m-0 ${H2}`}>
            Te ayudo a convertir lo que sabes en un negocio que&nbsp;
            <span className="italic text-[#9378fe]">vaya más allá de tus horas.</span>
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] text-white/85 sm:text-[20px]">
            Exponencial es un programa de seis meses en el que mi equipo y yo te ayudamos a transformar tus conocimientos en un programa propio y construimos contigo la infraestructura digital y comercial necesaria para convertirlo en una nueva línea de negocio.
          </p>
          <p className="m-0 text-[16px] leading-[1.6] text-white/65 sm:text-[18px]">
            No tienes que llegar con una metodología perfectamente definida ni con toda la parte técnica resuelta. Partimos de tus conocimientos, capacidades y objetivos para construir un proyecto con fundamento.
          </p>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.n}
              className="flex flex-col gap-4 rounded-[20px] border border-[rgba(147,120,254,0.3)] bg-[rgba(147,120,254,0.06)] px-7 py-8"
            >
              <span className="text-[14px] font-semibold tracking-[0.12em] text-[#9378fe]">{p.n}</span>
              <h3 className="m-0 font-serif text-[28px] leading-[1.15] text-white sm:text-[32px]">{p.title}</h3>
              {p.body.map((t) => (
                <p key={t} className="m-0 text-[16px] leading-[1.65] text-white/70">
                  {t}
                </p>
              ))}
            </article>
          ))}
        </Reveal>

        <Reveal className="flex max-w-[900px] flex-col gap-5 border-t border-[rgba(147,120,254,0.25)] pt-12">
          <h3 className="m-0 font-serif text-[30px] leading-[1.15] text-white sm:text-[36px]">
            Estrategia, acompañamiento e implementación en el mismo equipo.
          </h3>
          <p className="m-0 text-[16px] leading-[1.65] text-white/70 sm:text-[17px]">
            Durante seis meses combinamos sesiones individuales conmigo, sesiones grupales de estrategia, ventas e IA aplicada, acompañamiento continuado y trabajo técnico de implementación.
          </p>
          <p className="mb-0 mt-2 font-serif text-[24px] italic leading-[1.3] text-[#9378fe] sm:text-[30px]">
            No inviertes únicamente en aprender a construir un negocio. Inviertes en construirlo.
          </p>
        </Reveal>

        <Reveal className="flex flex-col items-start gap-3.5">
          <a href={LA_EXPONENCIAL} target="_blank" rel="noopener noreferrer" className={BTN_DARK}>
            Descubre el programa Exponencial →
          </a>
          <p className="m-0 text-[13px] tracking-[0.08em] text-white/50">
            Programa de seis meses · Acceso mediante valoración previa
          </p>
        </Reveal>
      </div>
    </section>
  );
};

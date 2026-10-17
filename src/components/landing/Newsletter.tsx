import mariaCafe from "@/assets/maria-cafe.png";
import { Reveal } from "./Reveal";
import { CONTAINER, H2, SectionLabel } from "@/components/home/primitives";

export const Newsletter = () => {
  return (
    <section id="newsletter" className="border-t border-[#e6e4df] bg-white py-24 lg:py-[152px]">
      <div className={`${CONTAINER} flex flex-col gap-12`}>
        <Reveal className="flex max-w-[820px] flex-col gap-5">
          <SectionLabel>Hazte Grande · Newsletter</SectionLabel>
          <h2 className={`m-0 ${H2}`}>
            Crea un negocio al servicio de{" "}
            <span className="italic text-[#9378fe]">una vida grande.</span>
          </h2>
          <div className="my-5 space-y-5 text-[18px] leading-[1.6] text-[#0c0d0e]/70 sm:text-[20px]">
            <p className="m-0">
              Hazte Grande es mi espacio para escribir sobre ambición, decisiones, emprendimiento y la parte menos visible de construir una vida y una carrera a tu manera.
            </p>
            <p className="m-0">
              Estrategia, mentalidad, experiencias personales y reflexiones para quienes saben que todavía tienen mucho por construir y no quieren quedarse pequeños por el camino.
            </p>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-12 lg:grid-cols-[572fr_532fr]">
          {/* Substack embed: the design's form only marks where it goes. */}
          <Reveal variant="left" delay={120} className="flex min-w-0 items-center">
            <iframe
              src="https://haztegrande.substack.com/embed"
              width="100%"
              height="320"
              style={{ border: "1px solid #EEE", background: "white", borderRadius: "1rem" }}
              frameBorder="0"
              scrolling="no"
              title="Suscríbete a Hazte Grande"
            />
          </Reveal>

          <Reveal variant="right" delay={250} className="min-h-[320px] min-w-0 overflow-hidden rounded-2xl">
            <img
              src={mariaCafe}
              alt="María Garai escribiendo su newsletter desde una cafetería"
              className="block h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

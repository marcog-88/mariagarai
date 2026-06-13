import { Reveal } from "./Reveal";
import wa2200 from "@/assets/whatsapp-2200-euros.jpg";
import waVentaLinkedin from "@/assets/whatsapp-venta-linkedin.jpg";
import waDosSesiones from "@/assets/whatsapp-dos-sesiones-opciones.jpg";
import waSesion90 from "@/assets/whatsapp-sesion-90-minutos.jpg";
import waWebLanding from "@/assets/whatsapp-web-landing-montada.jpg";
import waPrimeraSesion from "@/assets/whatsapp-primera-sesion-vendida.jpg";
import waDosVersiones from "@/assets/whatsapp-dos-versiones-landing.jpg";
import waEmpuje from "@/assets/whatsapp-empuje-aprender.png";

const screenshots = [
  {
    src: wa2200,
    alt: "WhatsApp de clienta: «Ayer cerré la primera venta con el precio alto. Al final 2.200€. Esto era impensable hace un mes.»",
    rotate: -1.5,
  },
  {
    src: waVentaLinkedin,
    alt: "WhatsApp de clienta: «Mariaaaa me ha contestado! Venta hecha!! Y cuatro personas preguntándome por LinkedIn.»",
    rotate: 1.2,
  },
  {
    src: waDosSesiones,
    alt: "WhatsApp de clienta sobre sus dos opciones de sesión.",
    rotate: -1.0,
  },
  {
    src: waSesion90,
    alt: "WhatsApp de clienta: «Ya he tenido la sesión de 90 minutos con mi primera clienta y la venta ha ido genial. Primera venta hecha!»",
    rotate: 1.5,
  },
  {
    src: waWebLanding,
    alt: "WhatsApp de clienta: «Ya tengo la web y la landing montada! Flipo con cómo se ve. Esto con una agencia hubiera sido un pastizal.»",
    rotate: -0.8,
  },
  {
    src: waPrimeraSesion,
    alt: "WhatsApp de clienta: «He vendido la primera sesión, estoy muy feliz y muy agradecida.»",
    rotate: 1.0,
  },
  {
    src: waDosVersiones,
    alt: "WhatsApp de clienta: «He hecho dos versiones para la landing page usando Claude.»",
    rotate: -1.2,
  },
  {
    src: waEmpuje,
    alt: "WhatsApp de clienta: «Lo que me ha venido mejor ha sido el empuje. Llevo años aprendiendo pero sin acabar de atreverme del todo.»",
    rotate: 1.3,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-secondary/40">
      <div className="container-tight">
        <div className="mb-14 md:mb-20">
          <Reveal>
            <p className="mb-4 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
              Testimonios
            </p>
            <h2 className="display-md max-w-lg">
              Lo que dicen
            </h2>
            <p className="mt-5 text-base text-foreground/65 leading-relaxed max-w-xl">
              Capturas de WhatsApp de clientas dentro de Exponencial. Primeras ventas y activos construidos con IA, en sus propias palabras.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {screenshots.map((s, i) => (
            <Reveal key={s.alt} delay={i * 100}>
              <figure
                className="card-lift rounded-2xl overflow-hidden border border-border bg-white shadow-md"
                style={{ transform: `rotate(${s.rotate}deg)` }}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Reveal } from "@/components/landing/Reveal";
import wa2200 from "@/assets/whatsapp-2200-euros.jpg";
import waDosVersiones from "@/assets/whatsapp-dos-versiones-landing.jpg";
import waVentaLinkedin from "@/assets/whatsapp-venta-linkedin.jpg";
import waHazteGrande from "@/assets/whatsapp-hazte-grande-proceso.png";
import waWebLanding from "@/assets/whatsapp-web-landing-montada.jpg";
// import waSubstack from "@/assets/whatsapp-substack-prospectar.jpg"; // add file to enable
import waSesion90 from "@/assets/whatsapp-sesion-90-minutos.jpg";
import waDosSesiones from "@/assets/whatsapp-dos-sesiones-opciones.jpg";
import waEmpuje from "@/assets/whatsapp-empuje-aprender.png";

const screenshots = [
  { src: wa2200,        alt: "WhatsApp: «Ayer cerré la primera venta con el precio alto. Al final 2.200€.»",                                       rotate: -1.5 },
  { src: waDosVersiones,alt: "WhatsApp: «He hecho dos versiones para la landing page usando Claude.»",                                               rotate:  1.2 },
  { src: waVentaLinkedin,alt: "WhatsApp: «Venta hecha!! Y cuatro personas preguntándome por LinkedIn.»",                                             rotate: -1.0 },
  { src: waHazteGrande, alt: "WhatsApp: «Hazte Grande está siendo un proceso brutal de autoconocimiento.»",                                          rotate:  1.5 },
  { src: waWebLanding,  alt: "WhatsApp: «Ya tengo la web y la landing montada! Esto con una agencia hubiera sido un pastizal.»",                     rotate: -0.8 },
  // { src: waSubstack, alt: "WhatsApp sobre Substack y prospectar.", rotate: 1.0 },
  { src: waSesion90,    alt: "WhatsApp: «Ya he tenido la sesión de 90 minutos con mi primera clienta. Primera venta hecha!»",                        rotate:  1.0 },
  { src: waDosSesiones, alt: "WhatsApp sobre dos opciones de sesión.",                                                                               rotate: -1.3 },
  { src: waEmpuje,      alt: "WhatsApp: «Lo que me ha venido mejor ha sido el empuje. Llevo años aprendiendo sin acabar de atreverme del todo.»",    rotate:  0.8 },
];

export const Testimonios = () => {
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

        <div
          className="grid grid-cols-1 md:grid-cols-3 items-start"
          style={{ gap: "24px" }}
        >
          {screenshots.map((s, i) => (
            <Reveal key={s.alt} delay={i * 80}>
              <figure
                className="card-lift rounded-2xl overflow-hidden border border-border bg-white shadow-md self-start"
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

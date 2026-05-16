import escuelaMockup from "@/assets/escuela-mockup.png";
import disenaCarreraMockup from "@/assets/disena-carrera-mockup.png";
import corporateFounderMockup from "@/assets/corporate-founder-mockup.png";

type Forma = {
  eyebrow: string;
  eyebrowBadge?: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
};

const formas: Forma[] = [
  {
    eyebrow: "Encuentro",
    eyebrowBadge: "A coste 0",
    title: "De Corporate a Founder",
    subtitle:
      "Los primeros 90 días de tu negocio con orden y criterio. Reunión en directo a coste cero para profesionales en transición.",
    cta: "Apuntarme",
    href: "https://luma.com/corporateafounder",
    image: corporateFounderMockup,
    imageAlt: "Mockup del encuentro De Corporate a Founder — laptop mostrando una videollamada con siluetas de mujeres founders.",
  },
  {
    eyebrow: "Herramienta",
    eyebrowBadge: "A coste 0",
    title: "Diseña tu Carrera",
    subtitle:
      "La herramienta que te ayuda a decidir tu dirección y convertir tu conocimiento en vías de monetización rentables.",
    cta: "La pruebo",
    href: "https://tunuevacarrera.lovable.app",
    image: disenaCarreraMockup,
    imageAlt: "Mockup de la herramienta Diseña tu Carrera — iMac, tablet y móvil mostrando worksheets y ofertas validadas.",
  },
  {
    eyebrow: "Escuela",
    title: "Carreras Modernas",
    subtitle:
      "La escuela completa para construir tu negocio boutique con IA. Cuatro programas, un camino, desde la idea hasta el negocio funcionando.",
    cta: "Ver la Escuela",
    href: "/escuela",
    image: escuelaMockup,
    imageAlt: "Mockup de la Escuela Carreras Modernas — iMac, tablet y móvil mostrando los cuatro programas, comunidad y mentoría 1:1.",
  },
];

export const Formas = () => {
  return (
    <section
      id="formas"
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="container-tight">
        <div className="max-w-3xl">
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Esto es lo que puedo hacer por ti
          </p>
          <h2 className="display-md">
            Tres formas de{" "}
            <span className="font-serif italic text-accent block md:inline">
              trabajar conmigo.
            </span>
          </h2>
        </div>

        <div className="mt-14 md:mt-20 grid gap-16 md:gap-8 md:grid-cols-3 divide-y divide-border md:divide-y-0">
          {formas.map((f, i) => (
            <article
              key={f.title}
              className={`flex flex-col ${i > 0 ? "pt-16 md:pt-0" : ""}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] bg-secondary border border-border">
                {f.image ? (
                  <img
                    src={f.image}
                    alt={f.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.2em] text-foreground/40">
                    Placeholder
                  </div>
                )}
              </div>

              <div className="mt-6 flex flex-col flex-1">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/50 flex items-center flex-wrap gap-y-1">
                  <span>{f.eyebrow}</span>
                  {f.eyebrowBadge && (
                    <>
                      <span aria-hidden className="mx-2 text-foreground/30">·</span>
                      <span className="inline-flex items-center rounded-full bg-hot-pink text-hot-pink-foreground px-2 py-0.5 text-[10px] font-medium tracking-[0.16em] uppercase">
                        {f.eyebrowBadge}
                      </span>
                    </>
                  )}
                </p>
                <h3 className="mt-3 font-serif text-3xl md:text-4xl tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-base text-foreground/70 leading-relaxed">
                  {f.subtitle}
                </p>
                <div className="mt-auto pt-10 md:pt-6 flex justify-start">
                  <a
                    href={f.href}
                    target={f.href.startsWith("http") ? "_blank" : undefined}
                    rel={f.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="btn-primary w-[220px] justify-center"
                  >
                    {f.cta}
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

import talleresMockup from "@/assets/talleres-premium-card.webp";
import construyeMockup from "@/assets/construye-premium-card.webp";
import redesHeroMockup from "@/assets/redes-premium-card.webp";

type Forma = {
  eyebrow: string;
  eyebrowBadge?: string;
  badgeColor?: "hot-pink" | "mint" | "orange";
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image?: string;
  imageAlt?: string;
  imagePlaceholderText?: string;
  imageFit?: "cover" | "contain";
  cardBg?: string;
};

const formas: Forma[] = [
  {
    eyebrow: "WORKSHOP",
    eyebrowBadge: "EN VIVO",
    badgeColor: "hot-pink",
    title: "Talleres",
    subtitle:
      "Para founders y profesionales en transición que quieren múltiples vías de ingreso y varios días libres a la semana.",
    cta: "Apuntarme",
    href: "https://luma.com/corporateafounder",
    image: talleresMockup,
    imageAlt: "Talleres en vivo — sesión grupal con María Garaí.",
    imageFit: "cover",
    cardBg: "#0c0d0e",
  },
  {
    eyebrow: "PROGRAMA",
    eyebrowBadge: "ABRIENDO LISTA",
    badgeColor: "mint",
    title: "Construye",
    subtitle:
      "El único programa en español para construir la infraestructura de tu negocio con IA. Aunque seas de letras.",
    cta: "Quiero saber más",
    href: "/construye",
    image: construyeMockup,
    imageAlt: "Mockup del programa Construye — pantallas mostrando el programa completo.",
    imageFit: "cover",
    cardBg: "#0c0d0e",
  },
  {
    eyebrow: "PROGRAMA",
    eyebrowBadge: "JULIO 2026",
    badgeColor: "orange",
    title: "Redes que Venden",
    subtitle:
      "LinkedIn + Substack como activos de autoridad y ventas. La mejor combinación para founders que venden servicios online.",
    cta: "Quiero saber más",
    href: "/redes-que-venden",
    image: redesHeroMockup,
    imageAlt: "Mockup del programa Redes que Venden — pantallas mostrando el programa.",
    imageFit: "cover",
    cardBg: "#0c0d0e",
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
            Programas Grupales
          </p>
          <h2 className="display-md">
            Otras formas de{" "}
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
              <a
                href={f.href}
                target={f.href.startsWith("http") ? "_blank" : undefined}
                rel={f.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] border border-border block ${f.cardBg ? "" : "bg-secondary"}`}
                style={f.cardBg ? { background: f.cardBg } : undefined}
              >
                {f.image ? (
                  <img
                    src={f.image}
                    alt={f.imageAlt}
                    className={`h-full w-full ${f.imageFit === "contain" ? "object-contain" : "object-cover"}`}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center text-sm font-medium text-white px-6 text-center"
                    style={{ background: "#0c0d0e" }}
                  >
                    {f.imagePlaceholderText || f.title}
                  </div>
                )}
              </a>

              <div className="mt-6 flex flex-col flex-1">
                <h3 className="font-serif text-3xl md:text-4xl tracking-tight">
                  {f.title}
                  {f.eyebrowBadge && (
                    <span
                      className={`ml-2 inline-block align-middle font-sans text-xs rounded-full px-2 py-0.5 ${
                        f.badgeColor === "mint"
                          ? "bg-gray-100 text-gray-400"
                          : "bg-[#9378fe]/15 text-[#9378fe]"
                      } ${f.badgeColor === "hot-pink" ? "animate-pulse" : ""}`}
                    >
                      {f.eyebrowBadge}
                    </span>
                  )}
                </h3>
                <p className="mt-3 text-base text-foreground/70 leading-relaxed">
                  {f.subtitle}
                </p>
                <div className="mt-auto pt-10 md:pt-6 flex justify-start">
                  <a
                    href={f.href}
                    target={f.href.startsWith("http") ? "_blank" : undefined}
                    rel={f.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`btn-primary justify-center w-full whitespace-nowrap !text-sm md:!text-base !text-white ${f.title === "Construye" ? "md:w-fit" : "md:w-[220px]"}`}
                    style={{ boxShadow: "4px 4px 0 0 #0c0d0e" }}
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

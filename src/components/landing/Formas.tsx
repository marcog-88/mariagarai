import construyeMockup from "@/assets/construye-mockup.png";
import redesHeroMockup from "@/assets/redes-card-template.png";

type Forma = {
  eyebrow: string;
  eyebrowBadge?: string;
  badgeColor?: "hot-pink" | "mint";
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image?: string;
  imageAlt?: string;
  imagePlaceholderText?: string;
  imageFit?: "cover" | "contain";
};

const formas: Forma[] = [
  {
    eyebrow: "WORKSHOP",
    eyebrowBadge: "EN VIVO",
    badgeColor: "hot-pink",
    title: "De Corporate a Founder",
    subtitle:
      "Encuentros en directo para profesionales en transición. Cada mes, un tema. Criterio, dirección y comunidad.",
    cta: "Apuntarme",
    href: "https://luma.com/corporateafounder",
    imagePlaceholderText: "De Corporate a Founder",
  },
  {
    eyebrow: "PROGRAMA",
    eyebrowBadge: "COHORT · SEPT 2026",
    badgeColor: "mint",
    title: "Construye",
    subtitle:
      "El programa para construir tu negocio boutique con IA como infraestructura. Del conocimiento al negocio que factura.",
    cta: "Quiero construir",
    href: "/construye",
    image: construyeMockup,
    imageAlt: "Mockup del programa Construye — pantallas mostrando el programa completo.",
  },
  {
    eyebrow: "PROGRAMA",
    title: "Redes que Venden",
    subtitle:
      "LinkedIn y Substack como activos de autoridad. Los escaparates que atraen clientes mientras vives.",
    cta: "Ver el programa",
    href: "/redes-que-venden",
    image: redesHeroMockup,
    imageAlt: "Mockup del programa Redes que Venden — pantallas mostrando el programa.",
    imageFit: "contain",
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
            Así es como{" "}
            <span className="font-serif italic text-accent block md:inline">
              te puedo ayudar.
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
              </div>

              <div className="mt-6 flex flex-col flex-1">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/50 flex items-center flex-wrap gap-y-1">
                  <span>{f.eyebrow}</span>
                  {f.eyebrowBadge && (
                    <>
                      <span aria-hidden className="mx-2 text-foreground/30">·</span>
                      {f.badgeColor === "mint" ? (
                        <span
                          className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium tracking-[0.16em] uppercase animate-pulse"
                          style={{ background: "#d0fcd0", color: "#0c0d0e" }}
                        >
                          {f.eyebrowBadge}
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-hot-pink text-hot-pink-foreground px-2 py-0.5 text-[10px] font-medium tracking-[0.16em] uppercase animate-pulse">
                          {f.eyebrowBadge}
                        </span>
                      )}
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

const testimonios = [
  {
    quote: "Llevaba meses publicando en LinkedIn sin ningún resultado. En 30 días con María restructuré mi perfil, empecé a escribir con intención y cerré mi primera clienta desde un mensaje directo.",
    name: "Laura F.",
    role: "Ex-directora de comunicación, Salamanca",
    result: "Primera clienta desde LinkedIn",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    quote: "No entendía Substack para nada. Ahora tengo 180 suscriptoras en 6 semanas y dos de ellas se han convertido en clientas de consultoría.",
    name: "Marta G.",
    role: "Ex-consultora de RRHH, Valladolid",
    result: "180 suscriptoras en 6 semanas",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    quote: "María me enseñó a usar LinkedIn como canal de venta real, no como escaparate de CV. En un mes abrí 8 conversaciones y cerré 3 proyectos.",
    name: "Cristina B.",
    role: "Ex-responsable de marketing, Zaragoza",
    result: "3 proyectos cerrados en 30 días",
    avatar: "https://i.pravatar.cc/150?img=34",
  },
];

const Stars = () => (
  <div className="flex gap-1 text-2xl" style={{ color: "#f5b800" }} aria-label="5 estrellas">
    {"★★★★★".split("").map((s, i) => (
      <span key={i}>{s}</span>
    ))}
  </div>
);

export const Testimonios = () => {
  return (
    <section className="pt-20 md:pt-28 pb-12 md:pb-16" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <p className="mb-12 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          Lo que dicen
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {testimonios.map((t, i) => (
            <figure
              key={i}
              className="rounded-xl bg-white p-5 md:p-5 lg:p-8 shadow-sm border border-border/40 flex flex-col min-w-0 overflow-hidden"
            >
              <Stars />
              <blockquote className="mt-5 italic text-foreground leading-relaxed flex-1 break-words hyphens-auto text-sm md:text-sm lg:text-base">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 flex flex-col md:flex-col lg:flex-row md:items-start lg:items-center gap-3 min-w-0">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-sm text-foreground break-words">{t.name}</p>
                  <p className="text-xs text-foreground/60 break-words">{t.role}</p>
                  <p className="mt-1 text-[10px] md:text-xs leading-tight break-words" style={{ color: "#0c0d0e" }}>
                    ✓ Resultado · {t.result}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex justify-center">
          <a href="#precio" className="btn-mint-lg">
            Unirme a la lista de espera →
          </a>
        </div>
      </div>
    </section>
  );
};

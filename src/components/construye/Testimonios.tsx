const testimonios = [
  {
    quote:
      "Llevaba dos años dando vueltas al mismo proyecto sin avanzar. En 8 semanas con María monté mi web, lancé mi primera oferta y cerré mis primeras 3 clientas. No me lo podía creer.",
    name: "Lucía M., ex-directora de marketing, Madrid",
    result: "Primera venta en semana 6",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    quote:
      "Tenía el conocimiento pero no sabía cómo estructurarlo ni venderlo. Construye me dio el orden que necesitaba. Ahora tengo un negocio que funciona mientras yo duermo.",
    name: "Carmen R., ex-consultora financiera, Barcelona",
    result: "Sistema completo en 8 semanas",
    avatar: "https://i.pravatar.cc/150?img=48",
  },
  {
    quote:
      "Lo que más me sorprendió fue la claridad. Cada semana sabía exactamente qué hacer. Sin agobios, sin perderte. Y María siempre ahí cuando la necesitabas.",
    name: "Sofía D., ex-responsable de RRHH, Valencia",
    result: "Embudo activo desde semana 5",
    avatar: "https://i.pravatar.cc/150?img=49",
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
    <section className="py-20 md:py-28" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <p className="mb-12 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          Lo que dicen
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {testimonios.map((t, i) => (
            <figure
              key={i}
              className="rounded-xl bg-white p-4 md:p-5 lg:p-8 shadow-sm border border-border/40 flex flex-col"
            >
              <Stars />
              <blockquote className="mt-5 italic text-foreground leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 flex flex-col md:flex-col lg:flex-row md:items-start lg:items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <p className="font-bold text-sm text-foreground break-words">{t.name}</p>
                  <p className="mt-1 text-[10px] md:text-xs leading-tight break-words" style={{ color: "#0c0d0e" }}>
                    ✓ Clienta verificada · {t.result}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex justify-center">
          <a href="https://mariagarai.activehosted.com/f/11" target="_blank" rel="noopener noreferrer" className="btn-mint-lg">
            Unirme a la lista de espera →
          </a>
        </div>
      </div>
    </section>
  );
};

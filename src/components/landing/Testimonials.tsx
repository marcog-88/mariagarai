
const items = [
  {
    quote:
      "Llevaba dos años intentando lanzar mi consultora y dando vueltas. En seis semanas validé mi oferta, cobré mis primeros 4.500€ y dejé de crear contenido en el vacío.",
    name: "[ Testimonio 1 ]",
    role: "Ex-Directora de Marketing · Madrid",
  },
  {
    quote:
      "Pensaba que necesitaba una audiencia grande. Lo que necesitaba era un sistema. Hoy facturo desde un negocio boutique que opera sin que yo esté en cada paso.",
    name: "[ Testimonio 2 ]",
    role: "Ex-Consultora Big Four · Barcelona",
  },
  {
    quote:
      "El orden lo cambió todo. Validar antes de construir me ahorró meses y miles de euros que estaba a punto de quemar.",
    name: "[ Testimonio 3 ]",
    role: "Ex-Product Lead · CDMX",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-secondary/40">
      <div className="container-tight">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
              Testimonios
            </p>
            <h2 className="display-md max-w-2xl">
              Founders con los que he trabajado.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              className="bg-background border border-border p-8 flex flex-col"
            >
              <div className="flex gap-1.5 text-yellow-400" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-xl leading-snug flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-medium text-sm">{t.name}</div>
                <div className="text-xs text-foreground/55 mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

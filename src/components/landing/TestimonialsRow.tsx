const Stars = () => (
  <div className="flex gap-1 text-2xl" style={{ color: "#f5b800" }} aria-label="5 estrellas">
    {"★★★★★".split("").map((s, i) => (
      <span key={i}>{s}</span>
    ))}
  </div>
);

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Trabajar con María me dio el orden y el criterio que necesitaba para dejar de dar vueltas y empezar a facturar.",
    name: "Cliente 1",
    role: "Ex-Directora de Marketing",
  },
  {
    quote:
      "En 4 meses construí lo que llevaba 2 años intentando hacer sola. El acompañamiento semanal marca la diferencia.",
    name: "Cliente 2",
    role: "Ex-Consultora Senior",
  },
  {
    quote:
      "Por fin entendí qué vender, a quién y cómo. Y lo validé con clientes reales antes de construir nada.",
    name: "Cliente 3",
    role: "Ex-Responsable de Comunicación",
  },
];

export const TestimonialsRow = () => {
  return (
    <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-[#f9f9f7]">
      <div className="container-tight">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-xl bg-white p-4 md:p-5 lg:p-8 shadow-sm border border-border/40 flex flex-col"
            >
              <Stars />
              <blockquote className="mt-4 italic text-foreground leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full bg-border flex-shrink-0"
                  aria-hidden
                />
                <div>
                  <p className="font-bold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/60">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonios = [
  {
    quote:
      "Entré con una idea difusa y salí con un negocio funcionando. En 4 meses hice lo que sola me hubiera costado años.",
    name: "[Nombre] · Ex directiva · [Sector]",
    result: "Primeras ventas en semana 6",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    quote:
      "María no te da palmaditas. Te da criterio. Y eso vale más que cualquier curso.",
    name: "[Nombre] · Ex consultora · [Sector]",
    result: "Negocio boutique activo",
    avatar: "https://i.pravatar.cc/150?img=48",
  },
  {
    quote:
      "La inversión más rentable que he hecho en mi vida profesional. Sin exagerar.",
    name: "[Nombre] · Ex [Cargo] · [Empresa]",
    result: "Reemplazó su sueldo en 5 meses",
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
      </div>
    </section>
  );
};

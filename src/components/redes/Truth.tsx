export const Truth = () => {
  const items = [
    { emoji: "📚", text: "Tu contenido vive años." },
    { emoji: "💼", text: "Clientes sin audiencia masiva." },
    { emoji: "🔁", text: "Un sistema que se retroalimenta." },
  ];
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <div className="mb-12">
          <h2 className="font-serif text-[clamp(2.75rem,7vw,5rem)] leading-[1.05] tracking-tight text-primary-foreground">
            Sprint Redes que Venden
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-mint font-medium">
            LinkedIn + Substack: la combinación más inteligente.
          </p>
        </div>

        <div className="max-w-4xl space-y-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
          <p>
            <span className="text-mint font-medium">Substack te da autoridad. LinkedIn te da clientes.</span>{" "}
            Los dos juntos se potencian.
          </p>
          <p>
            Substack es el lugar donde tus ideas viven años, no 48 horas. Donde construyes
            cercanía real con tu audiencia, el tipo de cercanía de la que nacen las ventas.
            Personas, no personajes. Conversaciones, no likes.
          </p>
          <p>
            LinkedIn es el canal de ventas más potente que existe para servicios profesionales.
            No necesitas miles de seguidores. Necesitas el perfil correcto, el mensaje correcto
            y saber cómo abrir conversaciones que terminan en ventas.
          </p>
          <p>
            Lo que publicas en Substack alimenta tu LinkedIn. Lo que prospectas en LinkedIn se
            convierte en suscriptores de Substack. Un sistema que se retroalimenta.
          </p>
        </div>

        <div className="mt-16 flex flex-row flex-wrap lg:flex-nowrap md:flex-nowrap gap-2 md:gap-3">
          {items.map((it) => (
            <div
              key={it.text}
              className="inline-flex items-center gap-2 md:gap-2 lg:gap-3 rounded-full bg-primary text-mint px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3"
              style={{ boxShadow: "0 0 18px hsl(var(--mint) / 0.5)" }}
            >
              <span className="text-base md:text-base lg:text-xl leading-none" aria-hidden>{it.emoji}</span>
              <p className="text-xs md:text-sm lg:text-base text-mint">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

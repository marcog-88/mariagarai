const pillars = [
  { n: "01", title: "ESTRATEGIA", body: "Qué publicar, dónde, cuándo y para qué. Con criterio de negocio, no de influencer." },
  { n: "02", title: "POSICIONAMIENTO", body: "Perfiles que comunican qué vendes, a quién y por qué elegirte." },
  { n: "03", title: "CONTENIDO", body: "Un sistema de 3 horas semanales que exprime cada idea al máximo." },
  { n: "04", title: "PROSPECCIÓN", body: "Cómo abrir conversaciones que terminan en ventas, sin parecer pesada." },
  { n: "05", title: "AUTOMATIZACIÓN", body: "Herramientas y flujos que publican, programan y hacen seguimiento por ti." },
  { n: "06", title: "RESULTADOS", body: "Mides lo que funciona y ajustas. Sin adivinar. Con datos reales de tus dos canales." },
];

export const OnlyDifference = () => {
  return (
    <section className="pt-0 pb-24 md:pb-32" style={{ background: "#0c0d0e", color: "#ffffff" }}>
      <div className="container-tight">
        <div className="text-center">
          <p className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            La única diferencia
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-white max-w-4xl mx-auto">
            La teoría la puedes encontrar en Internet.
          </h2>
          <p className="mt-10 text-lg md:text-2xl font-light text-white/80 max-w-3xl mx-auto leading-snug">
            Los tips gratuitos te dicen "publica con constancia" y "aporta valor." Esto no es
            teoría. Es implementación y seguimiento.
          </p>
          <p className="mt-10 text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            Empiezas a publicar desde el día 1. No creas más contenido por crear — orientas tus
            redes a la venta desde la primera acción. Tienes a María revisando tu estrategia y
            empujándote a hacer lo que toca, no lo que es cómodo.
          </p>
          <p className="mt-10 font-serif italic text-2xl md:text-3xl text-mint">
            Método Redes que Venden
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {pillars.map((p) => (
            <div
              key={p.n}
              className="rounded-xl bg-white/[0.04] border border-white/10 p-7 md:p-8"
            >
              <p className="font-serif text-2xl text-mint mb-3">{p.n}</p>
              <h3 className="font-serif text-xl md:text-2xl text-white leading-tight mb-3">
                {p.title}
              </h3>
              <p className="text-white/75 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const pain = [
  "Publicas y nadie reacciona. Hablas al silencio.",
  "Pierdes horas creando algo que dura 48 horas y desaparece.",
  "No sabes qué publicar ni si lo que publicas le importa a alguien.",
  "Tienes miedo de cómo te van a juzgar tus contactos de corporate.",
  "Ya hay mucho de lo mismo. No sabes cómo vender con tu contenido.",
];

export const Problem = () => {
  return (
    <section className="py-24 md:py-32" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          El problema
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight max-w-4xl">
          Tú no eres influencer. Eres una profesional que vende.
        </h2>

        <div className="mt-16 max-w-3xl space-y-6 text-base md:text-lg leading-relaxed text-foreground/80">
          <p>
            Ya has intentado estar en redes. Publicaste durante un tiempo. Nada. Dejaste de
            publicar. Normal.
          </p>
          <p>Lo que sientes es esto:</p>
          <ul className="space-y-3 pl-0">
            {pain.map((p) => (
              <li key={p} className="flex gap-3"><span className="text-foreground/40 flex-shrink-0">✕</span><span>{p}</span></li>
            ))}
          </ul>
          <p>
            El problema es que estás jugando al juego equivocado. Te han enseñado a
            conseguir seguidores. Necesitas clientes.
          </p>
          <p>
            Y clientes no se consiguen construyendo audiencias. Se consiguen construyendo
            relaciones. Tengas 200 seguidores o 20.000, puedes monetizar ya. Lo que necesitas
            es dejar de pensar como creadora de contenido y empezar a pensar como dueña de
            negocio que usa las redes como canal de venta.
          </p>
        </div>
      </div>
    </section>
  );
};

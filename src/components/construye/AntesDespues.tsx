const sin = [
  "Tu negocio vive en WhatsApp, Calendly y Google Drive",
  "No tienes web — envías PDFs por mensaje",
  "Cada cliente nuevo es un proceso manual desde cero",
  "No capturas leads — dependes de que te recomienden",
  "Tus escaparates se sienten a medio montar comparados con otros",
  "Pierdes horas haciendo cosas que podrías automatizar",
];

const con = [
  "Todo en Notion — clientes, finanzas, contenido, planificación",
  "Una web profesional que puedes enseñar con orgullo",
  "Una landing que vende tu oferta sin que tú estés presente",
  "Un lead magnet en formato app que vuela la cabeza a tus leads",
  "Claude trabajando para ti — contenido, emails, gestión",
  "Un negocio que se siente real, sólido, profesional",
];

export const AntesDespues = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          Antes y después
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-primary-foreground/60">
              🤯 SIN CONSTRUYE
            </h3>
            <ul className="space-y-5">
              {sin.map((s, i) => (
                <li key={i} className="flex gap-3 text-primary-foreground/55 leading-relaxed">
                  <span className="text-primary-foreground/40 flex-shrink-0">✕</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-mint">🙌 CON CONSTRUYE</h3>
            <ul className="space-y-5">
              {con.map((c, i) => (
                <li key={i} className="flex gap-3 text-primary-foreground leading-relaxed">
                  <span className="text-mint flex-shrink-0">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

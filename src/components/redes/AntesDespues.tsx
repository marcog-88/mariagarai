import { StripeBuyButton } from "@/components/redes/StripeBuyButton";

const sin = [
  "Publicas de vez en cuando. Nadie reacciona.",
  "Pierdes horas creando diseños que duran 48 horas.",
  "Tu LinkedIn parece el de alguien que busca trabajo, no el de alguien que vende.",
  "Substack te suena pero no lo dominas.",
  "No sabes si lo que publicas le importa a alguien.",
  "Clientes esporádicos. O ninguno desde redes.",
];

const con = [
  "Publicas con intención. Cada post tiene un propósito.",
  "Tu LinkedIn atrae al cliente correcto semana tras semana.",
  "Substack activo y construyendo autoridad cada semana.",
  "Leads que llegan solos porque tus canales trabajan por ti.",
  "Un sistema de contenido de 3 horas semanales.",
  "Clientes reales desde ambos canales.",
];

export const AntesDespues = () => {
  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-background">
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          Lo que cambia en 30 días
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight max-w-4xl">
          Antes y después de Redes que Venden.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-8 text-foreground/60">
              🤯 SIN Redes que Venden
            </h3>
            <ul className="space-y-5">
              {sin.map((s, i) => (
                <li key={i} className="flex gap-3 text-foreground/65 leading-relaxed">
                  <span className="text-foreground/40 flex-shrink-0">✕</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-8" style={{ color: "#e88f00" }}>
              🙌 CON Redes que Venden
            </h3>
            <ul className="space-y-5">
              {con.map((c, i) => (
                <li key={i} className="flex gap-3 text-foreground leading-relaxed">
                  <span className="flex-shrink-0" style={{ color: "#e88f00" }}>✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <StripeBuyButton />
        </div>
      </div>
    </section>
  );
};

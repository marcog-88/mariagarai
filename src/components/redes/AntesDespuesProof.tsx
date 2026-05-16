import { TidyCalButton } from "@/components/construye/TidyCalButton";
import avatarElena from "@/assets/avatar-elena.jpg";
import avatarNatalia from "@/assets/avatar-natalia.jpg";
import avatarIsabel from "@/assets/avatar-isabel.jpg";

const ACCENT = "#e88f00";

const rows = [
  {
    photo: avatarElena,
    antes: {
      quote:
        "Sabía que tenía algo que aportar pero mi LinkedIn llevaba 2 años sin actividad. Publicaba una vez al mes y desaparecía. Sin estrategia, sin resultados.",
      name: "Elena P., Bilbao",
    },
    despues: {
      quote:
        "En 30 días tenía el perfil optimizado, 3 posts publicados con intención y mi primera conversación de venta abierta desde LinkedIn.",
      name: "Elena P., 30 días después",
    },
  },
  {
    photo: avatarNatalia,
    antes: {
      quote:
        "Intenté Substack dos veces y lo abandoné. No sabía qué escribir ni para quién. Me parecía una pérdida de tiempo.",
      name: "Natalia R., Pamplona",
    },
    despues: {
      quote:
        "Substack activo con 140 suscriptoras en 5 semanas. Dos de ellas ya son clientas de consultoría.",
      name: "Natalia R., 30 días después",
    },
  },
  {
    photo: avatarIsabel,
    antes: {
      quote:
        "Tenía miedo de que mis contactos de corporate me vieran vendiendo en LinkedIn. No publiqué nada en un año.",
      name: "Isabel M., Logroño",
    },
    despues: {
      quote:
        "Perdí el miedo, empecé a publicar con criterio y cerré 2 proyectos en el primer mes desde mensajes directos.",
      name: "Isabel M., 30 días después",
    },
  },
];

const Avatar = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    width={512}
    height={512}
    className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-white/20"
  />
);

export const AntesDespuesProof = () => {
  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-12 lg:pb-16" style={{ background: "#0c0d0e", color: "#ffffff" }}>
      <div className="container-tight">
        <div className="text-center mb-14">
          <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: ACCENT }}>
            Lo que cambia en 30 días
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-white">
            Antes y después de Redes que Venden.
          </h2>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-stretch"
            >
              <div className="rounded-xl p-6 bg-white/5 border border-white/10">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50 mb-3">Antes</p>
                <p className="text-white/85 italic leading-relaxed">"{r.antes.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <Avatar src={r.photo} alt={r.antes.name} />
                  <span className="text-sm text-white/60">— {r.antes.name}</span>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center text-2xl" style={{ color: ACCENT }}>
                →
              </div>
              <div
                className="rounded-xl p-6 bg-white/[0.08] border-l-4"
                style={{ borderLeftColor: ACCENT }}
              >
                <p className="text-xs uppercase tracking-[0.18em] mb-3" style={{ color: ACCENT }}>Después</p>
                <p className="text-white/95 italic leading-relaxed">"{r.despues.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <Avatar src={r.photo} alt={r.despues.name} />
                  <span className="text-sm" style={{ color: ACCENT }}>— {r.despues.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <TidyCalButton>
            Quiero este resultado <span aria-hidden>→</span>
          </TidyCalButton>
        </div>
      </div>
    </section>
  );
};

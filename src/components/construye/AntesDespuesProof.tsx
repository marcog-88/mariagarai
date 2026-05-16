import { TidyCalButton } from "./TidyCalButton";
import avatarLucia from "@/assets/avatar-lucia.jpg";
import avatarCarmen from "@/assets/avatar-carmen.jpg";
import avatarSofia from "@/assets/avatar-sofia.jpg";

const rows = [
  {
    photo: avatarLucia,
    antes: {
      quote:
        "Llevaba 18 meses con la misma idea en la cabeza. Web a medias. Sin saber cómo cobrar. Sin sistema.",
      name: "Lucía M., Madrid",
    },
    despues: {
      quote:
        "Semana 8: web activa, primera clienta cerrada a €900, embudo funcionando. Ahora sé exactamente qué hacer cada semana.",
      name: "Lucía M., 8 semanas después",
    },
  },
  {
    photo: avatarCarmen,
    antes: {
      quote:
        "Tenía clientes sueltos pero nada estructurado. Cobraba poco porque no sabía cómo justificar más. Agotada de improvisar.",
      name: "Carmen R., Barcelona",
    },
    despues: {
      quote:
        "Oferta clara, precio subido a €1500, sistema de captación montado. El mes pasado cerré 3 clientas sin hacer nada especial.",
      name: "Carmen R., 8 semanas después",
    },
  },
  {
    photo: avatarSofia,
    antes: {
      quote:
        "Sabía que tenía algo que aportar pero no conseguía que nadie lo viera. LinkedIn muerto. Sin embudo. Sin claridad.",
      name: "Sofía D., Valencia",
    },
    despues: {
      quote:
        "Substack con 200 suscriptoras en 6 semanas, LinkedIn reactivado, primera venta digital. Ya no dependo solo del boca a boca.",
      name: "Sofía D., 8 semanas después",
    },
  },
];

const Avatar = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-white/20"
  />
);

export const AntesDespuesProof = () => {
  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-12 lg:pb-16" style={{ background: "#0c0d0e", color: "#ffffff" }}>
      <div className="container-tight">
        <div className="text-center mb-14">
          <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#d0fcd0" }}>
            Lo que cambia en 8 semanas
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-white">
            Antes y después de Construye.
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
              <div className="hidden md:flex items-center justify-center text-2xl" style={{ color: "#d0fcd0" }}>
                →
              </div>
              <div
                className="rounded-xl p-6 bg-white/[0.08] border-l-4"
                style={{ borderLeftColor: "#d0fcd0" }}
              >
                <p className="text-xs uppercase tracking-[0.18em] mb-3" style={{ color: "#d0fcd0" }}>Después</p>
                <p className="text-white/95 italic leading-relaxed">"{r.despues.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <Avatar src={r.photo} alt={r.despues.name} />
                  <span className="text-sm" style={{ color: "#d0fcd0" }}>— {r.despues.name}</span>
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

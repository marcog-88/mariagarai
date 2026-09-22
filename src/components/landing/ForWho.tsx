import { Reveal } from "./Reveal";

const LA_EXPONENCIAL = "https://www.laexponencial.com/";

const profiles = [
  {
    icon: "🚀",
    text: "Has pasado de cuenta ajena a emprender",
  },
  {
    icon: "⚙️",
    text: "Quieres montar la parte digital de tu negocio",
  },
  {
    icon: "📈",
    text: "Quieres escalar tus ingresos con un programa de alto valor",
  },
];

export const ForWho = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <Reveal>
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
            A quién puedo ayudar
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {profiles.map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-5 rounded-2xl p-8 border border-border bg-white"
            >
              <span className="text-4xl" aria-hidden>{p.icon}</span>
              <p className="text-lg md:text-xl font-medium text-foreground leading-snug">{p.text}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={250} className="mt-12 flex justify-center">
          <a
            href={LA_EXPONENCIAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full md:w-auto justify-center"
          >
            Conoce Exponencial →
          </a>
        </Reveal>
      </div>
    </section>
  );
};

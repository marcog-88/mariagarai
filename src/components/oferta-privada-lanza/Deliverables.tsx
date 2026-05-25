import { Check, User } from "lucide-react";
import { TidyCalButton } from "@/components/construye/TidyCalButton";
import deliverablesMockup from "@/assets/lanza-deliverables-mockup-cutout.webp";
import mariaProfileZoom from "@/assets/maria-profile-zoom-lanza.webp";

const modules = [
  { n: "1", week: "Semana 1", title: "Tu manual de marca + tu pitch", body: "Quién eres, a quién ayudas, qué problema resuelves, y cómo presentarlo en 30 segundos. La base de todo lo que viene después." },
  { n: "2", week: "Semana 2", title: "Tu ecosistema de ofertas completo", body: "Diseñado, estructurado y con precios. Las cuatro ofertas que vas a poder vender — empezando por la primera." },
  { n: "3", week: "Semana 3", title: "Tu primer producto creado + portal de clientes", body: "El formato de entrega más sencillo posible. Montado y listo para vender. Con un portal en Notion profesional desde el día 1." },
  { n: "4", week: "Semana 4", title: "Tu oferta validada con clientes reales", body: "Conversaciones reales. Feedback real. La confirmación de que lo que vendes tiene mercado — antes de construir nada grande." },
  { n: "5", week: "Semana 5", title: "Tu estrategia de prospección", body: "Cómo activar tu entorno, qué decir, cómo empezar conversaciones que acaban en ventas. Sin audiencia masiva. Sin spam." },
  { n: "6", week: "Semana 6", title: "[PRÓXIMAMENTE]", body: "Módulo en construcción. Disponible pronto.", placeholder: true },
  { n: "7", week: "Semana 7", title: "Tu webinar de arranque", body: "En Luma. Donde presentas tu oferta a personas reales y consigues tus primeras ventas." },
  { n: "8", week: "Semana 8", title: "Tu sistema de ventas LAPS + manual humano + rutina y CRM", body: "El método LAPS con script de llamadas, los principios para vender sin manipulación ni falsa urgencia, y la rutina diaria + CRM en Notion para que las ventas no dependan de tu energía." },
];

export const Deliverables = () => {
  return (
    <section id="metodo" className="py-24 md:py-32 bg-background">
      <div className="container-tight">
        <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#9378fe" }}>
          Lo que montamos
        </p>
        <p className="text-base md:text-2xl text-foreground/70 mb-12 font-sans">
          Sales con activos. No con apuntes.
        </p>

        {/* Mockup */}
        <div className="mb-16 rounded-2xl overflow-hidden relative" style={{ backgroundColor: "#f1f3e6" }}>
          <img
            src={deliverablesMockup}
            alt="Lo que montamos en Lanza y Vende: oferta validada, portal en Notion, dashboard CRM, webinar y primera venta"
            className="w-full h-auto block"
            decoding="async"
          />
        </div>

        <p
          className="mt-16 md:mt-24 mb-10 text-xs md:text-xs lg:text-sm font-medium uppercase tracking-[0.24em] md:tracking-[0.08em] lg:tracking-[0.24em]"
          style={{ color: "#0c0d0e" }}
        >
          Qué pasa cada semana — los 10 activos que construyes en 8 semanas
        </p>

        <div className="relative">
          <div className="space-y-8">
            {modules.map((step, idx) => (
              <div key={step.n} className="relative pl-16 md:pl-24" style={step.placeholder ? { opacity: 0.5 } : undefined}>
                {idx < modules.length - 1 && (
                  <div
                    className="absolute left-6 md:left-8 -translate-x-1/2 top-14 md:top-[4.5rem] -bottom-10 w-px"
                    style={{ background: "#0c0d0e" }}
                    aria-hidden
                  />
                )}
                <div
                  className="absolute left-0 top-2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-serif text-base md:text-lg text-[#0c0d0e] shadow-md"
                  style={{ background: "hsl(var(--mint))", border: "2px solid #0c0d0e" }}
                >
                  {step.n}
                </div>

                <div className="rounded-xl bg-[#0c0d0e] text-white p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-4">
                    <span
                      className="self-start text-xs uppercase tracking-[0.18em] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 md:order-2"
                      style={{ background: "#ff4295", color: "#ffffff" }}
                    >
                      {step.week}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-white leading-tight md:order-1">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white/75 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats banner */}
        <div className="relative pl-16 md:pl-24 mt-8">
          <div className="rounded-xl py-8 px-4 md:py-10 md:px-8" style={{ background: "#0c0d0e" }}>
            <div className="flex items-start justify-center">
              <div className="flex flex-col min-w-0 items-center">
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-5xl leading-none" aria-hidden>📞</span>
                  <span className="text-3xl md:text-6xl font-black text-mint leading-none">4</span>
                </div>
                <p className="text-white text-xs md:text-sm mt-1 md:whitespace-nowrap">Sesiones 1:1 con María</p>
              </div>
            </div>
            <p className="mt-6 italic text-sm md:text-base text-center text-mint">
              Tu mayor activo no es el contenido. Es el acceso directo.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <TidyCalButton>
            Quiero entrar <span aria-hidden>→</span>
          </TidyCalButton>
        </div>
      </div>
    </section>
  );
};

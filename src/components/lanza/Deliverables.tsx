import { Check, Star } from "lucide-react";
import { TidyCalButton } from "@/components/construye/TidyCalButton";
import deliverablesMockup from "@/assets/lanza-deliverables-mockup-cutout.png";

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

        {/* Mockup — GIF underlay shows through the transparent iMac screen of the cutout PNG */}
        <div className="mb-16 rounded-2xl overflow-hidden bg-[#f9f9f7] relative">
          {/* Black backdrop to hide any cream gap around GIF inside iMac bezel */}
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{ left: "28.71%", top: "22.27%", width: "43.39%", height: "45.57%", backgroundColor: "#000", zIndex: 0 }}
          />
          {/* GIF behind */}
          <img
            src={new URL("@/assets/live-session.gif", import.meta.url).href}
            alt=""
            aria-hidden
            className="absolute pointer-events-none object-cover"
            style={{
              left: "28.71%",
              top: "22.27%",
              width: "43.39%",
              height: "45.57%",
              zIndex: 1,
            }}
          />
          {/* Mockup PNG with iMac screen cut out, on top */}
          <img
            src={deliverablesMockup}
            alt="Lo que montamos en Lanza y Vende: oferta validada, portal en Notion, dashboard CRM, webinar y primera venta"
            className="w-full h-auto block relative"
            decoding="async"
            width={1376}
            height={768}
            style={{ imageRendering: "-webkit-optimize-contrast", zIndex: 2 }}
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
                <div
                  className="absolute left-6 md:left-8 -translate-x-1/2 top-14 md:top-[4.5rem] -bottom-10 w-px"
                  style={{ background: "#0c0d0e" }}
                  aria-hidden
                />
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

        {/* Live session panel */}
        <div className="relative pl-0 mt-8">
          {/* Connector line from step 5 down into the Live Session card */}
          <div
            className="absolute left-6 md:left-8 -translate-x-1/2 -top-8 h-8 w-px"
            style={{ background: "#0c0d0e" }}
            aria-hidden
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LEFT — Video panel */}
            <div className="rounded-xl bg-[#0c0d0e] p-5 flex flex-col gap-4">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-white/10">
                <video
                  src={new URL("@/assets/live-session.mp4", import.meta.url).href}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-label="Vista previa de una sesión en vivo con María y participantes"
                />
                {/* LIVE pill */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#ff0000] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden />
                  LIVE SESSION
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Lanza y Vende · 8 semanas</p>
                <p className="text-white/60 text-sm mt-1">
                  Las participantes validan su oferta y consiguen sus primeras ventas en vivo.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white font-bold text-sm">4.9</span>
                  <span className="text-white/60 text-sm">· 12 alumnas</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Info grid (2x2) */}
            <div className="grid grid-cols-2 gap-3 h-full">
              {[
                { label: "DURACIÓN", value: "8 SEM", sub: "Programa en vivo" },
                { label: "FORMATO", value: "EN VIVO", sub: "Sesiones quincenales" },
                { label: "PRECIO", value: "€1750", sub: "Pago único" },
                { label: "INICIO", value: "SEP 2026", sub: "Próxima cohorte" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border bg-[#0c0d0e] p-4 flex flex-col justify-center"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/50">{item.label}</p>
                  <p
                    className="text-xl md:text-3xl font-black leading-none mt-2"
                    style={{ color: "#ff4295" }}
                  >
                    {item.value}
                  </p>
                  <p className="text-xs text-white/60 mt-1.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 italic text-sm md:text-base text-center text-mint">
            Tu mayor activo no es el contenido. Es el acceso directo.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <TidyCalButton>
            Unirme a la lista de espera <span aria-hidden>→</span>
          </TidyCalButton>
        </div>
      </div>
    </section>
  );
};

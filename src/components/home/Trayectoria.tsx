import logoNacionesUnidas from "@/assets/logos/logo-naciones-unidas.png";
import logoPG from "@/assets/logos/logo-pg.png";
import { CONTAINER } from "./primitives";

// Logos supplied by María (src/assets/logos), checkerboard background removed.
// The startup slot stays a placeholder until she sends a clean file.
// Do not draw or download logos here.
const items: { logo: string; src?: string; name: string; desc: string }[] = [
  { logo: "[Logo Naciones Unidas]", src: logoNacionesUnidas, name: "Naciones Unidas", desc: "Experiencia internacional" },
  { logo: "[Logo P&G]", src: logoPG, name: "Procter & Gamble", desc: "Entorno corporativo" },
  { logo: "[Logo startup]", name: "Startups SaaS", desc: "Desarrollo de negocio" },
];

// Dark band directly under the hero (19 oct 2026 design).
export const Trayectoria = () => {
  return (
    <section aria-label="Trayectoria" className="border-t border-white/[0.08] bg-[#0c0d0e] py-24">
      <div className={`${CONTAINER} flex flex-col gap-8`}>
        {/* 13px in the design (the other eyebrows are 14px). */}
        <p className="m-0 text-center text-[13px] font-medium leading-normal uppercase tracking-[0.24em] text-[#9378fe]">
          Trayectoria
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-3.5 px-4 py-2 text-center">
              {item.src ? (
                <div className="flex h-16 w-[140px] items-center justify-center">
                  <img src={item.src} alt={item.name} className="block h-full w-auto object-contain" loading="lazy" />
                </div>
              ) : (
                <div className="box-border flex h-16 w-[140px] items-center justify-center rounded-[10px] border border-dashed border-white/30 p-1.5 text-center text-[12px] text-white/55">
                  {item.logo}
                </div>
              )}
              <div className="flex flex-col gap-1">
                <span className="text-[17px] font-semibold text-white">{item.name}</span>
                <span className="text-[14px] text-white/60">{item.desc}</span>
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center gap-3.5 px-4 py-2 text-center">
            <div className="flex h-16 items-center justify-center font-serif text-[60px] leading-none text-[#9378fe]">+15</div>
            <div className="flex flex-col gap-1">
              <span className="text-[17px] font-semibold text-white">Negocios trabajados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

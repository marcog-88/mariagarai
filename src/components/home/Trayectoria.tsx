import type { ReactNode } from "react";
import { Rocket } from "lucide-react";
import logoNacionesUnidas from "@/assets/logos/logo-naciones-unidas.png";
import logoPG from "@/assets/logos/logo-pg.png";
import logoWWF from "@/assets/logos/logo-wwf.png";
import { CONTAINER } from "./primitives";

// Logos supplied by María (src/assets/logos), checkerboard background removed.
// WWF is black-on-white by design, so it sits on a small white plate.
// Startup Tech uses Lucide's rocket icon: the supplied stock file carried a
// 123RF watermark.
const LOGO_BOX = "flex h-16 w-[140px] items-center justify-center";

export const Trayectoria = () => {
  return (
    <section aria-label="He trabajado y colaborado con" className="border-t border-white/[0.08] bg-[#0c0d0e] py-24">
      <div className={`${CONTAINER} flex flex-col gap-8`}>
        {/* 13px in the design (the other eyebrows are 14px). */}
        <p className="m-0 text-center text-[13px] font-medium leading-normal uppercase tracking-[0.24em] text-[#9378fe]">
          He trabajado y colaborado con:
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          <Cell name="Naciones Unidas">
            <img src={logoNacionesUnidas} alt="" className="block h-full w-auto object-contain" loading="lazy" />
          </Cell>
          <Cell name="Procter & Gamble">
            <img src={logoPG} alt="" className="block h-full w-auto object-contain" loading="lazy" />
          </Cell>
          <Cell name="World Wildlife Fund">
            <span className="flex h-full items-center rounded-lg bg-white px-2 py-1">
              <img src={logoWWF} alt="" className="block h-full w-auto object-contain" loading="lazy" />
            </span>
          </Cell>
          <Cell name="Startup Tech">
            <Rocket aria-hidden className="h-14 w-14 text-white" strokeWidth={1.5} />
          </Cell>
          {/* Odd one out on the 2-column mobile grid: span both columns so it centres. */}
          <Cell name="Negocios de clientes trabajados" className="col-span-2 sm:col-span-1">
            <span className="font-serif text-[60px] leading-none text-[#9378fe]">+15</span>
          </Cell>
        </div>
      </div>
    </section>
  );
};

const Cell = ({ name, children, className = "" }: { name: string; children: ReactNode; className?: string }) => (
  <div className={`flex flex-col items-center gap-3.5 px-2 py-2 text-center ${className}`}>
    <div className={LOGO_BOX}>{children}</div>
    <span className="text-[15px] font-semibold text-white sm:text-[17px]">{name}</span>
  </div>
);

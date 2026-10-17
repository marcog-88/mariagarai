import type { ReactNode } from "react";

// Shared building blocks for the Oct 2026 home redesign
// (docs/mariagarai-home-diseno.html). Values mirror the design file; kept as
// scoped classes here so nothing touches src/index.css or global tokens.

/** 1152px content column + 32px gutters, as in the design. */
export const CONTAINER = "mx-auto w-full max-w-[1216px] px-6 sm:px-8";

/** Section H2: 60px serif on desktop, scaled down proportionally. */
export const H2 = "font-serif text-[40px] sm:text-[48px] lg:text-[60px] leading-[1.05] tracking-[-0.01em]";

/** Purple pill with the solid offset shadow used on light backgrounds. */
export const BTN_LIGHT =
  "inline-flex items-center justify-center gap-3 rounded-full bg-[#9378fe] px-7 py-3.5 sm:px-8 sm:py-4 text-[16px] sm:text-[18px] font-medium leading-normal text-white shadow-[4px_4px_0_0_#0c0d0e] transition-transform duration-300 hover:-translate-y-px";

/** Same pill, with the lilac halo used on the dark sections. */
export const BTN_DARK =
  "inline-flex items-center justify-center gap-3 rounded-full bg-[#9378fe] px-7 py-3.5 sm:px-8 sm:py-4 text-[16px] sm:text-[18px] font-medium leading-normal text-white shadow-[4px_4px_0_0_#0c0d0e,8px_8px_28px_rgba(147,120,254,0.6),14px_14px_56px_rgba(147,120,254,0.35)] transition-transform duration-300 hover:-translate-y-px";

/** Section eyebrow: 14px, 500, 0.24em, uppercase. No pill, no border, no dot. */
export const SectionLabel = ({
  children,
  onLilac = false,
  className = "",
}: {
  children: ReactNode;
  /** Darker accent (#6342c9), only on the #f1edff bands. */
  onLilac?: boolean;
  className?: string;
}) => (
  <p
    className={`m-0 text-[13px] sm:text-[14px] font-medium leading-normal uppercase tracking-[0.24em] ${
      onLilac ? "text-[#6342c9]" : "text-[#9378fe]"
    } ${className}`}
  >
    {children}
  </p>
);

/** Purple bullet dot used in the ForWho and Speaking lists. */
export const Dot = () => (
  <span aria-hidden className="mt-[10px] h-2 w-2 flex-shrink-0 rounded-full bg-[#9378fe]" />
);

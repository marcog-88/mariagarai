import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Kept for call-site compatibility; no longer used (animations removed). */
  delay?: number;
  /** Kept for call-site compatibility; no longer used (animations removed). */
  variant?: "up" | "left" | "right" | "scale" | "blur";
  /** Extra classes on the wrapper */
  className?: string;
  /** Render as a different element (default div) */
  as?: keyof JSX.IntrinsicElements;
  style?: CSSProperties;
};

/**
 * Static wrapper. The scroll-triggered reveal animation was removed at
 * María's request (20 oct 2026): content renders in place, no fade or slide.
 * The component stays so the existing sections keep their markup.
 */
export const Reveal = ({ children, className = "", as: Tag = "div", style }: RevealProps) => {
  const Element = Tag as "div";
  return (
    <Element className={className} style={style}>
      {children}
    </Element>
  );
};

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
  type RefObject,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in ms before the animation starts once visible */
  delay?: number;
  /** Animation variant */
  variant?: "up" | "left" | "right" | "scale" | "blur";
  /** Extra classes on the wrapper */
  className?: string;
  /** Render as a different element (default div) */
  as?: keyof JSX.IntrinsicElements;
  style?: CSSProperties;
};

/**
 * Scroll-triggered reveal wrapper. Animates once when ~15% of the
 * element enters the viewport. Respects prefers-reduced-motion.
 */
export const Reveal = ({
  children,
  delay = 0,
  variant = "up",
  className = "",
  as: Tag = "div",
  style,
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Element = Tag as "div";

  return (
    <Element
      ref={ref as RefObject<HTMLDivElement>}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Element>
  );
};

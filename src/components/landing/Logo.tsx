import logoSvg from "@/assets/maria-garai-logo.svg?raw";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <span
      aria-label="María Garaí"
      role="img"
      className={className}
      // The SVG uses fill="currentColor" so it inherits text color.
      dangerouslySetInnerHTML={{ __html: logoSvg }}
    />
  );
};

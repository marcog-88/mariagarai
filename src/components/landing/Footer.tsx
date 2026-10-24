import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const LEGAL_LINKS = [
  { to: "/legal", label: "Aviso legal" },
  { to: "/privacy-policy", label: "Privacidad" },
  { to: "/terms-of-service", label: "Términos" },
  { to: "/cookie-policy", label: "Cookies" },
];

/** Footer of the legal pages. (The home has its own, in portada/Closing.) */
export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-tight flex flex-wrap items-center justify-between gap-6">
        <a href="#top" className="flex items-center text-foreground" aria-label="María Garai, volver arriba">
          <Logo className="block h-5 [&>svg]:h-full [&>svg]:w-auto" />
        </a>
        <ul className="flex flex-wrap gap-4 text-sm text-foreground/60">
          {LEGAL_LINKS.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="hover:text-foreground transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-xs text-foreground/40 w-full md:w-auto">
          © 2026 María Garai · Exponencial
        </p>
      </div>
    </footer>
  );
};

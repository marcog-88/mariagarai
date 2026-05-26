import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-tight flex flex-wrap items-center justify-between gap-6">
        <a href="#top" className="flex items-center text-foreground" aria-label="María Garaí">
          <Logo className="block h-5 [&>svg]:h-full [&>svg]:w-auto" />
        </a>
        <ul className="flex flex-wrap gap-4 text-sm text-foreground/60">
          <li>
            <Link to="/legal" className="hover:text-foreground transition-colors">
              Aviso legal
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacidad
            </Link>
          </li>
          <li>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">
              Términos
            </Link>
          </li>
          <li>
            <Link to="/cookie-policy" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </li>
        </ul>
        <p className="text-xs text-foreground/40 w-full md:w-auto">
          © 2026 María Garaí · Carreras Modernas
        </p>
      </div>
    </footer>
  );
};

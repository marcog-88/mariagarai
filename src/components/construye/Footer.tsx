import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-tight flex flex-wrap items-center justify-between gap-3">
        <a
          href="https://mariagarai.com"
          aria-label="María Garaí"
          className="flex items-center text-foreground"
        >
          <Logo className="block h-4 [&>svg]:h-full [&>svg]:w-auto" />
        </a>
        <ul className="flex flex-wrap gap-4 text-xs text-foreground/60">
          <li>
            <a href="https://mariagarai.com/legal" className="hover:text-foreground transition-colors">
              Aviso legal
            </a>
          </li>
          <li>
            <a href="https://mariagarai.com/privacy-policy" className="hover:text-foreground transition-colors">
              Privacidad
            </a>
          </li>
          <li>
            <a href="https://mariagarai.com/terms-of-service" className="hover:text-foreground transition-colors">
              Términos
            </a>
          </li>
          <li>
            <a href="https://mariagarai.com/cookie-policy" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </li>
        </ul>
        <p className="text-xs text-foreground/40 w-full md:w-auto">
          © 2026 María Garaí · Carreras Modernas
        </p>
      </div>
    </footer>
  );
};

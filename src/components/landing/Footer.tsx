import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const LEGAL_LINKS = [
  { to: "/legal", label: "Aviso legal" },
  { to: "/privacy-policy", label: "Privacidad" },
  { to: "/terms-of-service", label: "Términos" },
  { to: "/cookie-policy", label: "Cookies" },
];

/**
 * `dark` is the Oct 2026 home footer (docs/mariagarai-home-diseno.html).
 * The legal pages (LegalLayout) keep the light default, unchanged.
 */
export const Footer = ({ dark = false }: { dark?: boolean } = {}) => {
  if (dark) {
    return (
      <footer className="border-t border-white/[0.08] bg-[#0c0d0e] px-6 py-10 sm:px-8">
        <div className="mx-auto flex max-w-[1152px] flex-wrap items-center justify-between gap-5">
          <Link to="/" className="flex items-center text-white" aria-label="María Garai, inicio">
            <Logo className="block h-[18px] [&>svg]:h-full [&>svg]:w-auto" />
          </Link>
          <ul className="m-0 flex list-none flex-wrap gap-6 p-0 text-sm">
            {LEGAL_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="inline-flex min-h-[44px] items-center text-white/60 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="m-0 text-[13px] text-white/45">© 2026 María Garai · Exponencial</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="py-12 border-t border-border">
      <div className="container-tight flex flex-wrap items-center justify-between gap-6">
        <Link to="/" className="flex items-center text-foreground" aria-label="María Garai, inicio">
          <Logo className="block h-5 [&>svg]:h-full [&>svg]:w-auto" />
        </Link>
        <ul className="flex flex-wrap gap-4 text-sm text-foreground/60">
          {LEGAL_LINKS.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="inline-flex min-h-[44px] items-center hover:text-foreground transition-colors">
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

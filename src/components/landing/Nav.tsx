import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links: { label: string; href: string; isExternal?: boolean; hasDot?: boolean }[] = [
  { label: "Programas", href: "#formas" },
  { label: "Talleres", href: "https://luma.com/corporateafounder", isExternal: true, hasDot: true },
  { label: "Sobre María", href: "#about" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
          open
            ? "bg-transparent"
            : "bg-background/85 backdrop-blur-md border-b border-border"
        }`}
      >
        <nav
          className="container-tight flex h-16 items-center justify-between"
          aria-label="Principal"
        >
          <a
            href="#top"
            className="flex items-center text-foreground"
            aria-label="María Garaí"
          >
            <Logo className="block h-4 md:h-5 [&>svg]:h-full [&>svg]:w-auto" />
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target={l.isExternal ? "_blank" : undefined}
                  rel={l.isExternal ? "noopener noreferrer" : undefined}
                  className="group relative flex items-center gap-1.5 text-sm text-foreground/70 transition-colors duration-200 ease-out hover:text-accent"
                >
                  {l.hasDot && (
                    <span
                      className="inline-block w-2 h-2 rounded-full animate-pulse flex-shrink-0"
                      style={{ background: "#ff4295" }}
                      aria-hidden
                    />
                  )}
                  {l.label}
                  <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-200 ease-out group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="/construye#top"
              className="btn-primary mobile-device-hidden hidden md:inline-flex !px-6 !py-3 !text-sm"
            >
              Trabaja conmigo
            </a>
            <button
              className={`md:hidden relative p-2 group z-[60] ${
                open ? "text-primary-foreground" : "text-accent"
              }`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              <span className="sr-only">Menú</span>
              <span
                className={`block w-6 h-[2px] rounded-full bg-current transition-all duration-300 ease-out group-hover:w-7 ${
                  open ? "translate-y-[3px] rotate-45" : "-translate-y-[3px]"
                }`}
              />
              <span
                className={`block w-6 h-[2px] rounded-full bg-current transition-all duration-300 ease-out group-hover:w-7 ${
                  open ? "-translate-y-[1px] -rotate-45" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen overlay menu */}
      <div
        className={`md:hidden fixed inset-0 z-[55] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "#0c0d0e" }}
        aria-hidden={!open}
      >
        <nav
          className="h-full w-full flex flex-col px-8 pt-24 pb-12"
          aria-label="Menú móvil"
        >
          <ul className="flex-1 flex flex-col gap-7">
            {links.map((l, i) => (
              <li
                key={l.href}
                className={`transition-all duration-500 ease-out ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                <a
                  href={l.href}
                  target={l.isExternal ? "_blank" : undefined}
                  rel={l.isExternal ? "noopener noreferrer" : undefined}
                  className="font-serif text-3xl text-white hover:text-accent transition-colors flex items-center gap-3"
                  onClick={() => setOpen(false)}
                >
                  {l.hasDot && (
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0"
                      style={{ background: "#ff4295" }}
                      aria-hidden
                    />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/construye#top"
            className="btn-primary-lg w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Trabaja conmigo
            <span aria-hidden>→</span>
          </a>
        </nav>
      </div>
    </>
  );
};

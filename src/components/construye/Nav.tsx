import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const TIDYCAL = "https://tidycal.com/mariagarai/exploracion";
const LUMA_LIVE = "https://luma.com/corporateafounder";

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

  const onDark = !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
          scrolled && !open
            ? "bg-background/85 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container-tight flex h-16 items-center justify-between" aria-label="Principal">
          <a
            href="/"
            aria-label="María Garaí"
            className={`block transition-colors ${
              onDark ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            <Logo className="block h-4 md:h-5 [&>svg]:h-full [&>svg]:w-auto" />
          </a>

          <ul className="hidden md:flex items-center gap-10">
            <li>
              <a
                href="/exponencial"
                className={`group relative flex items-center gap-1.5 text-sm transition-colors duration-200 ease-out hover:text-[#9378fe] ${
                  onDark ? "text-primary-foreground/70" : "text-foreground/70"
                }`}
              >
                Exponencial
                <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-mint transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </a>
            </li>

            <li>
              <a
                href={LUMA_LIVE}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-2 text-sm transition-colors duration-200 ease-out hover:text-[#9378fe] ${
                  onDark ? "text-primary-foreground/70" : "text-foreground/70"
                }`}
              >
                <span
                  aria-hidden
                  className="badge-pulse-dot inline-block rounded-full"
                  style={{ width: 7, height: 7, background: "#f43f5e" }}
                />
                Live
                <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-mint transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </a>
            </li>

            <li>
              <a
                href="https://haztegrande.substack.com/embed"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative text-sm transition-colors duration-200 ease-out hover:text-[#9378fe] ${
                  onDark ? "text-primary-foreground/70" : "text-foreground/70"
                }`}
              >
                Newsletter
                <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-mint transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={TIDYCAL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mint hidden md:inline-flex transition-shadow duration-300"
              style={scrolled ? { boxShadow: "4px 4px 0 0 #0c0d0e" } : undefined}
            >
              Reservar llamada
            </a>
            <button
              className={`md:hidden relative p-2 group z-[60] ${
                open ? "text-primary-foreground" : onDark ? "text-mint" : "text-foreground"
              }`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              <span className="sr-only">Menú</span>
              <span
                className={`block w-6 h-[2px] rounded-full bg-current transition-all duration-300 ease-out ${
                  open ? "translate-y-[3px] rotate-45" : "-translate-y-[3px]"
                }`}
              />
              <span
                className={`block w-6 h-[2px] rounded-full bg-current transition-all duration-300 ease-out ${
                  open ? "-translate-y-[1px] -rotate-45" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-[55] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "#0c0d0e" }}
        aria-hidden={!open}
      >
        <nav className="h-full w-full flex flex-col px-8 pt-24 pb-12" aria-label="Menú móvil">
          <ul className="flex-1 flex flex-col gap-7">
            <li
              className={`transition-all duration-500 ease-out ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: open ? "120ms" : "0ms" }}
            >
              <a
                href="/exponencial"
                className="font-serif text-3xl text-white transition-colors hover:text-[#9378fe]"
                onClick={() => setOpen(false)}
              >
                Exponencial
              </a>
            </li>

            <li
              className={`transition-all duration-500 ease-out ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: open ? "180ms" : "0ms" }}
            >
              <a
                href={LUMA_LIVE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-serif text-3xl text-white transition-colors hover:text-[#9378fe]"
                onClick={() => setOpen(false)}
              >
                <span
                  aria-hidden
                  className="badge-pulse-dot inline-block rounded-full"
                  style={{ width: 9, height: 9, background: "#f43f5e" }}
                />
                Live
              </a>
            </li>

            <li
              className={`transition-all duration-500 ease-out ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: open ? "240ms" : "0ms" }}
            >
              <a
                href="https://haztegrande.substack.com/embed"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-3xl text-white hover:text-[#9378fe] transition-colors"
                onClick={() => setOpen(false)}
              >
                Newsletter
              </a>
            </li>
          </ul>
          <a
            href={TIDYCAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mint-lg w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Reservar llamada
            <span aria-hidden>↗</span>
          </a>
        </nav>
      </div>
    </>
  );
};

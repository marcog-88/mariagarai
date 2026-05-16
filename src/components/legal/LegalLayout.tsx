import { Link } from "react-router-dom";
import { Logo } from "@/components/landing/Logo";
import { Footer } from "@/components/landing/Footer";
import { useEffect } from "react";

interface LegalLayoutProps {
  title: string;
  updated?: string;
  children: React.ReactNode;
}

export const LegalLayout = ({ title, updated, children }: LegalLayoutProps) => {
  useEffect(() => {
    document.title = `${title} · María Garaí`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container-tight py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="María Garaí — Inicio">
            <Logo className="block h-5 [&>svg]:h-full [&>svg]:w-auto" />
          </Link>
          <Link to="/" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16 md:py-24">
        <article className="container-tight max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display tracking-tight mb-4">{title}</h1>
          {updated && (
            <p className="text-sm text-foreground/50 mb-12">Última actualización: {updated}</p>
          )}
          <div className="prose-legal space-y-6 text-foreground/80 leading-relaxed">
            {children}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

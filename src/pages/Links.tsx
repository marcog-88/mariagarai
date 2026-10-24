import type { CSSProperties, ReactNode } from "react";
import { Globe, Instagram, Linkedin, Youtube } from "lucide-react";
import portrait from "@/assets/maria-hero-cutout.webp";
import { usePageMeta } from "@/lib/usePageMeta";

// Instagram bio link page (Linktree-style). Design: docs/links-diseno.html
// (390px, 19 oct 2026). Copy is María's, verbatim. Standalone: no Nav/Footer.

// --- URLs (edit here) --------------------------------------------------------
// Corporate to Founder OS waitlist page doesn't exist yet. While empty, the
// card is hidden (it looked clickable but did nothing); set the URL to show it.
const WAITLIST_URL: string = "";
const DISENA_TU_PROGRAMA_URL = "https://www.laexponencial.com/disena-tu-programa";
const EVENTOS_URL = "https://www.laexponencial.com/eventos";
const LA_EXPONENCIAL_URL = "https://www.laexponencial.com/";
const SUBSTACK_URL = "https://haztegrande.substack.com";
const WEB_URL = "https://www.mariagarai.com";
const INSTAGRAM_URL = "https://www.instagram.com/_mariagarai_/";
const LINKEDIN_URL = "https://www.linkedin.com/in/mariagarai/";
const YOUTUBE_URL = "https://www.youtube.com/@MariaGarai";

const BIO =
  "Para quienes se reinventan de profesionales a dueños de negocio. Estrategia y mindset para vivir muy bien de tu conocimiento.";

// --- Building blocks -----------------------------------------------------------
const LABEL = "m-0 text-[11px] font-medium uppercase leading-[normal] tracking-[0.22em] text-[#9378fe]";

const CardButton = ({ children, glow = false }: { children: ReactNode; glow?: boolean }) => (
  <span
    className={`mt-2 flex items-center justify-center gap-2 rounded-full bg-[#9378fe] px-5 py-3.5 text-[16px] font-medium leading-[normal] text-white ${
      glow ? "shadow-[0_6px_22px_rgba(147,120,254,0.55)]" : ""
    }`}
  >
    {children} <span aria-hidden>→</span>
  </span>
);

const CARD_BASE = "flex flex-col gap-2.5 rounded-[20px] p-6 no-underline transition-transform duration-200";
const CARD_FEATURED = `${CARD_BASE} border border-[rgba(147,120,254,0.55)] text-white shadow-[0_10px_34px_rgba(147,120,254,0.35)]`;
const CARD_WHITE = `${CARD_BASE} border border-[#ebe8e1] bg-white text-[#0c0d0e] shadow-[0_2px_10px_rgba(12,13,14,0.04)]`;
const FEATURED_BG = { background: "linear-gradient(160deg, #2a1f55 0%, #0c0d0e 75%)" };

/** The whole card is the link; same tab (works best in Instagram's browser). */
const CardLink = ({ href, className, style, children }: { href: string; className: string; style?: CSSProperties; children: ReactNode }) =>
  href ? (
    <a href={href} className={`${className} hover:-translate-y-0.5`} style={style}>
      {children}
    </a>
  ) : (
    <div className={className} style={style}>
      {children}
    </div>
  );

const FeaturedCard = ({ href, pill, title, accent, text, cta }: { href: string; pill: string; title: string; accent: string; text: string; cta: string }) => (
  <CardLink href={href} className={CARD_FEATURED} style={FEATURED_BG}>
    <span className="self-start rounded-full bg-[#c9bbff] px-2.5 py-[5px] text-[11px] font-semibold uppercase leading-[normal] tracking-[0.18em] text-[#0c0d0e]">
      {pill}
    </span>
    <h2 className="mb-0 mt-1 font-serif text-[32px] font-normal leading-[1.05]">
      {title} <span className="italic text-[#b4a2ff]">{accent}</span>
    </h2>
    <p className="m-0 text-[15px] leading-[1.55] text-white/75">{text}</p>
    <CardButton glow>{cta}</CardButton>
  </CardLink>
);

const WhiteCard = ({ href, label, title, text, cta }: { href: string; label: string; title: string; text: string; cta: string }) => (
  <CardLink href={href} className={CARD_WHITE}>
    <p className={LABEL}>{label}</p>
    <h2 className="m-0 font-serif text-[28px] font-normal leading-[1.1]">{title}</h2>
    <p className="m-0 text-[15px] leading-[1.55] text-[#0c0d0e]/70">{text}</p>
    <CardButton>{cta}</CardButton>
  </CardLink>
);

/** Substack's mark (monochrome); Lucide has no Substack icon. */
const SubstackIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const SocialPill = ({ href, icon, children }: { href: string; icon: ReactNode; children: ReactNode }) => (
  <a
    href={href}
    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#ddd8ce] bg-white px-4 py-2.5 text-[14px] font-medium leading-[normal] text-[#0c0d0e] no-underline transition-colors hover:border-[#9378fe]"
  >
    {icon}
    {children}
  </a>
);

const ICON = "h-4 w-4";

// --- Page ----------------------------------------------------------------------
const Links = () => {
  // SEO: own title + description, and noindex so it doesn't compete with the home.
  usePageMeta({ title: "María Garai · Links", description: BIO, noindex: true });

  return (
    <div className="min-h-screen bg-[#f9f9f7] font-sans text-[#0c0d0e]">
      <header className="flex flex-col items-center gap-3.5 rounded-b-[32px] bg-[#0c0d0e] px-6 pb-[72px] pt-12 text-center text-white">
        <div
          className="h-[132px] w-[132px] overflow-hidden rounded-full border-2 border-[rgba(147,120,254,0.6)]"
          style={{ background: "radial-gradient(70% 70% at 50% 40%, rgba(147,120,254,0.55) 0%, rgba(147,120,254,0.18) 60%, #1a1530 100%)" }}
        >
          <img
            src={portrait}
            alt="María Garai"
            width={683}
            height={1024}
            className="block h-full w-full object-cover"
            style={{ objectPosition: "50% 4%", transform: "scale(1.35)", transformOrigin: "50% 0" }}
            fetchPriority="high"
          />
        </div>
        <h1 className="mb-0 mt-1.5 font-serif text-[40px] font-normal leading-none">María Garai</h1>
        <p className={LABEL}>Fundadora de Exponencial · Consultora de negocio</p>
        <p className="mb-0 mt-1 max-w-[320px] text-[15px] leading-[1.55] text-white/75">
          {BIO}
          <br />
          <br />
          Así te puedo ayudar:
        </p>
      </header>

      <main className="mx-auto -mt-10 flex max-w-[440px] flex-col gap-3.5 px-4 pb-12">
        {WAITLIST_URL && (
          <FeaturedCard
            href={WAITLIST_URL}
            pill="Nuevo · Lista de espera"
            title="Corporate to"
            accent="Founder OS"
            text="El sistema operativo para diseñar tu oferta, optimizar tus redes para vender y gestionar tu nueva rutina laboral."
            cta="Únete a la lista de espera"
          />
        )}
        <WhiteCard
          href={DISENA_TU_PROGRAMA_URL}
          label="Herramienta gratuita"
          title="Diseña tu Programa"
          text="Da forma a tu programa en unos minutos: a quién ayudas, qué problema resuelves, qué transformación ofreces y qué precio ponerle. Visualizarlo ayuda."
          cta="Diseña tu programa gratis"
        />
        <WhiteCard
          href={EVENTOS_URL}
          label="Cada miércoles en directo"
          title="Eventos y Clase Semanal"
          text="Ofertas de alto valor, sistemas de ventas, infraestructura digital y Claude como co-fundador. Conoce mi método y resuelve tus dudas."
          cta="Inscríbete gratis"
        />
        <FeaturedCard
          href={LA_EXPONENCIAL_URL}
          pill="Trabaja conmigo 1:1"
          title="Programa"
          accent="Exponencial"
          text="Convierte lo que sabes en un programa propio y construye con mi equipo la infraestructura digital y comercial para venderlo."
          cta="Conoce Exponencial"
        />
        <WhiteCard
          href={SUBSTACK_URL}
          label="Newsletter"
          title="Hazte Grande"
          text="Ambición, carreras modernas y emprendimiento. Confidencias sobre el proceso de construir una vida y un negocio más grandes."
          cta="Suscríbete gratis"
        />

        <div className="mt-[18px] flex flex-col items-center gap-3.5">
          <p className={LABEL}>Encuéntrame en</p>
          <div className="flex flex-wrap justify-center gap-2">
            <SocialPill href={WEB_URL} icon={<Globe aria-hidden className={ICON} />}>Web</SocialPill>
            <SocialPill href={INSTAGRAM_URL} icon={<Instagram aria-hidden className={ICON} />}>Instagram</SocialPill>
            <SocialPill href={LINKEDIN_URL} icon={<Linkedin aria-hidden className={ICON} />}>LinkedIn</SocialPill>
            <SocialPill href={SUBSTACK_URL} icon={<SubstackIcon className="h-3.5 w-3.5" />}>Substack</SocialPill>
            <SocialPill href={YOUTUBE_URL} icon={<Youtube aria-hidden className={ICON} />}>YouTube</SocialPill>
          </div>
        </div>

        <p className="mb-0 mt-6 text-center text-[12px] text-[#0c0d0e]/45">© 2026 María Garai · Exponencial</p>
      </main>
    </div>
  );
};

export default Links;

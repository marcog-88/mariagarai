import { Linkedin, Globe } from "lucide-react";
import mariaFallback from "@/assets/maria-profile-zoom.jpg";
import { formatHeaderTimes, type PageSettings } from "@/lib/eventos";

const LINKEDIN_URL = "https://www.linkedin.com/in/mariagarai/";

type Props = { settings: PageSettings | null; now: Date };

/**
 * Full-bleed dark hero band. Dark background keeps the reused landing <Nav>
 * (white text while unscrolled) legible at the top of the page and matches the
 * site's dark-hero → light-body rhythm. Header content is admin-editable via
 * page_settings — never hardcode title/subtitle/profile pic.
 */
export const PageHeader = ({ settings, now }: Props) => {
  const profile = settings?.profile_image_url || mariaFallback;
  const title = settings?.page_title || "Encuentros en vivo";
  const subtitle = settings?.page_subtitle;

  return (
    <header className="bg-[#0c0d0e] pt-24 pb-12 text-white">
      <div className="container-tight">
        {/* BANNER PLACEHOLDER — a full-width banner will sit here later, above the
            profile picture. Not built in this pass; do not add an image yet. */}
        {/* <div className="mb-6 h-40 w-full rounded-xl bg-white/5" /> */}

        <img
          src={profile}
          alt={title}
          className="h-20 w-20 rounded-2xl object-cover ring-1 ring-white/15"
        />

        <h1 className="mt-4 display-md text-white">{title}</h1>

        <p className="mt-2 text-sm text-white/50">{formatHeaderTimes(now)}</p>

        {subtitle && <p className="mt-3 max-w-2xl text-base text-white/70">{subtitle}</p>}

        {(settings?.linkedin_url || LINKEDIN_URL || settings?.website_url) && (
          <div className="mt-5 flex items-center gap-3">
            {(settings?.linkedin_url || LINKEDIN_URL) && (
              <a
                href={settings?.linkedin_url || LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/55 transition-colors hover:text-accent"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {settings?.website_url && (
              <a
                href={settings.website_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sitio web"
                className="text-white/55 transition-colors hover:text-accent"
              >
                <Globe className="h-5 w-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

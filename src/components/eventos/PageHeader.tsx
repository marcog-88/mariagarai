import { Linkedin, Globe } from "lucide-react";
import mariaFallback from "@/assets/maria-profile-zoom.jpg";
import { formatHeaderTimes, type PageSettings } from "@/lib/eventos";

const LINKEDIN_URL = "https://www.linkedin.com/in/mariagarai/";

type Props = { settings: PageSettings | null; now: Date };

/**
 * Luma-style header: full-width banner → profile pic overlapping the banner's
 * lower-left edge → title / TZ line / subtitle / social icons below.
 * Falls back to the banner-less layout when banner_url is null/empty.
 */
export const PageHeader = ({ settings, now }: Props) => {
  const profile = settings?.profile_image_url || mariaFallback;
  const banner = settings?.banner_url || null;
  const title = settings?.page_title || "Encuentros en vivo";
  const subtitle = settings?.page_subtitle;

  if (!banner) {
    // Banner-less fallback — original layout, unchanged.
    return (
      <header className="bg-[#0c0d0e] pt-24 pb-12 text-white">
        <div className="container-tight">
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
  }

  // Luma layout — banner present.
  return (
    <header className="bg-[#0c0d0e] pt-20 pb-10 text-white">
      {/* Banner — full-width relative to the page, not the content container */}
      <div className="container-tight">
        <div className="w-full rounded-2xl overflow-hidden h-40 sm:h-56 md:h-[300px]">
          <img
            src={banner}
            alt=""
            role="presentation"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Profile pic overlapping lower-left of banner */}
        <div className="-mt-10 sm:-mt-12 flex items-end">
          <img
            src={profile}
            alt={title}
            className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover ring-2 ring-[#0c0d0e]"
          />
        </div>

        {/* Content below the pic */}
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

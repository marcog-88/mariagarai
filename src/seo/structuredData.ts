// schema.org JSON-LD for the home (written into dist/index.html by the build,
// see vite.config.ts). Plain data only: vite.config.ts imports this file.
// Validate changes with https://validator.schema.org or Google's Rich Results
// Test; src/seo/structuredData.test.ts checks the basics.
import { HOME_DESCRIPTION, SITE } from "./routes";

const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;
const ORG_URL = "https://www.laexponencial.com/";
const ORG_ID = `${ORG_URL}#organization`;

/** Profiles linked from the site (Links page, footer, newsletter). */
export const SAME_AS = [
  ORG_URL,
  "https://haztegrande.substack.com",
  "https://www.instagram.com/_mariagarai_/",
  "https://www.linkedin.com/in/mariagarai/",
  "https://www.youtube.com/@MariaGarai",
];

export const HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "María Garai",
      url: `${SITE}/`,
      image: `${SITE}/maria-garai.jpg`,
      jobTitle: "Fundadora de Exponencial · Consultora de negocio",
      description: HOME_DESCRIPTION,
      worksFor: { "@id": ORG_ID },
      knowsAbout: ["Exponencial", "Modelos de negocio", "Programas de formación y acompañamiento", "IA aplicada a negocio"],
      sameAs: SAME_AS,
    },
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "La Exponencial",
      url: ORG_URL,
      founder: { "@id": PERSON_ID },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "María Garai",
      url: `${SITE}/`,
      inLanguage: "es",
      publisher: { "@id": PERSON_ID },
    },
  ],
};

/** Safe to inline in a <script>: JSON with "<" escaped so it can't close the tag. */
export const jsonLdScript = (data: unknown) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

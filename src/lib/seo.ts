type SchemaType =
  | "Organization"
  | "LocalBusiness"
  | "AboutPage"
  | "Service"
  | "ContactPage"
  | "CollectionPage";

type SeoMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
  schemaType?: SchemaType;
};

const BASE_TITLE = "NRS and Associates";
const BASE_DESCRIPTION =
  "Partner-led chartered accountancy and advisory services across India and the UAE, including audit, tax, compliance, NRI advisory, and cross-border support.";
const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.nrsassociates.in";
const OG_IMAGE_PATH = "/og-image.png";
const CONTACT_EMAIL = "info@nrsassociates.in";
const CONTACT_PHONE = "+91 22 1234 5678";
const PRIMARY_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Manjeri",
  addressLocality: "Manjeri",
  addressRegion: "Kerala",
  addressCountry: "IN",
};

const DEFAULT_META: SeoMeta = {
  title: `${BASE_TITLE} | Chartered Accountants in Manjeri, Calicut & Dubai`,
  description: BASE_DESCRIPTION,
  canonicalPath: "/",
  robots: "index,follow",
  schemaType: "Organization",
};

const PAGE_META: Record<string, SeoMeta> = {
  "/": DEFAULT_META,
  "/about": {
    title: `${BASE_TITLE} | About the Firm`,
    description:
      "Learn how NRS and Associates was founded in 2016 and how its partner-led model supports clients across India and the UAE.",
    canonicalPath: "/about",
    robots: "index,follow",
    schemaType: "AboutPage",
  },
  "/services": {
    title: `${BASE_TITLE} | Services`,
    description:
      "Explore audit, direct tax, indirect tax, compliance, NRI advisory, bank audit, and overseas setup services.",
    canonicalPath: "/services",
    robots: "index,follow",
    schemaType: "Service",
  },
  "/team": {
    title: `${BASE_TITLE} | Leadership Team`,
    description:
      "Meet the partners and core team behind NRS and Associates' advisory, tax, compliance, and international practice.",
    canonicalPath: "/team",
    robots: "index,follow",
    schemaType: "CollectionPage",
  },
  "/insights": {
    title: `${BASE_TITLE} | Insights`,
    description:
      "Read practical insight on compliance, virtual CFO strategy, ERP transformation, and India-GCC advisory.",
    canonicalPath: "/insights",
    robots: "index,follow",
    schemaType: "CollectionPage",
  },
  "/careers": {
    title: `${BASE_TITLE} | Careers`,
    description:
      "Build a career through mentorship, client exposure, and growth at NRS and Associates.",
    canonicalPath: "/careers",
    robots: "index,follow",
    schemaType: "CollectionPage",
  },
  "/contact": {
    title: `${BASE_TITLE} | Contact`,
    description:
      "Contact NRS and Associates for audit, tax, compliance, NRI advisory, or cross-border business support.",
    canonicalPath: "/contact",
    robots: "index,follow",
    schemaType: "ContactPage",
  },
};

function setOrCreateMeta(selector: string, attribute: "name" | "property", attrValue: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, attrValue);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(url: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}

function setJsonLd(meta: SeoMeta, url: string) {
  let script = document.head.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": meta.schemaType,
    name: meta.title,
    alternateName: BASE_TITLE,
    description: meta.description,
    url,
    logo: new URL(OG_IMAGE_PATH, SITE_URL).toString(),
    image: new URL(OG_IMAGE_PATH, SITE_URL).toString(),
  };

  if (meta.schemaType === "Organization" || meta.schemaType === "LocalBusiness") {
    schema.foundingDate = "2016";
    schema.email = CONTACT_EMAIL;
    schema.telephone = CONTACT_PHONE;
    schema.address = PRIMARY_ADDRESS;
    schema.areaServed = ["India", "United Arab Emirates", "GCC"];
    schema.knowsAbout = [
      "Audit and assurance",
      "Direct tax",
      "Indirect tax",
      "NRI taxation",
      "Cross-border advisory",
      "Corporate compliance",
      "ERP advisory",
    ];
    schema.contactPoint = [
      {
        "@type": "ContactPoint",
        telephone: CONTACT_PHONE,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["en", "ml"],
      },
    ];
  }

  if (meta.schemaType === "Service") {
    schema.provider = {
      "@type": "Organization",
      name: BASE_TITLE,
      url,
    };
  }

  if (meta.schemaType === "ContactPage") {
    schema.mainEntity = {
      "@type": "Organization",
      name: BASE_TITLE,
      url,
    };
  }

  script.textContent = JSON.stringify(schema);
}

export function applySeo(pathname: string) {
  const meta = PAGE_META[pathname] ?? DEFAULT_META;
  const canonicalUrl = new URL(meta.canonicalPath, SITE_URL).toString();
  const ogImageUrl = new URL(OG_IMAGE_PATH, SITE_URL).toString();

  document.title = meta.title;
  setCanonical(canonicalUrl);

  setOrCreateMeta('meta[name="description"]', "name", "description", meta.description);
  setOrCreateMeta('meta[name="robots"]', "name", "robots", meta.robots ?? "index,follow");
  setOrCreateMeta('meta[name="author"]', "name", "author", BASE_TITLE);

  setOrCreateMeta('meta[property="og:type"]', "property", "og:type", "website");
  setOrCreateMeta('meta[property="og:locale"]', "property", "og:locale", "en_IN");
  setOrCreateMeta('meta[property="og:title"]', "property", "og:title", meta.title);
  setOrCreateMeta('meta[property="og:description"]', "property", "og:description", meta.description);
  setOrCreateMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
  setOrCreateMeta('meta[property="og:image"]', "property", "og:image", ogImageUrl);
  setOrCreateMeta('meta[property="og:site_name"]', "property", "og:site_name", BASE_TITLE);

  setOrCreateMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  setOrCreateMeta('meta[name="twitter:title"]', "name", "twitter:title", meta.title);
  setOrCreateMeta('meta[name="twitter:description"]', "name", "twitter:description", meta.description);
  setOrCreateMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImageUrl);
  setOrCreateMeta('meta[name="twitter:site"]', "name", "twitter:site", BASE_TITLE);

  if (meta.schemaType) {
    setJsonLd(meta, canonicalUrl);
  }
}

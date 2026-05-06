type SeoMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
  schemaType?: "Organization" | "LocalBusiness" | "AboutPage" | "Service" | "ContactPage" | "CollectionPage";
};

const BASE_TITLE = "NRS & Associates";

const DEFAULT_META: SeoMeta = {
  title: `${BASE_TITLE} — Financial Advisory & Business Solutions`,
  description:
    "Trusted financial advisory and business solutions across India, including tax, compliance, audit, and business setup services.",
  canonicalPath: "/",
  robots: "index,follow",
  schemaType: "Organization",
};

const PAGE_META: Record<string, SeoMeta> = {
  "/india": {
    title: `${BASE_TITLE} India — Financial Advisory & Cross-Border Solutions`,
    description:
      "NRS India offers audit, assurance, CFO services, ERP consulting, and cross-border advisory for growing businesses.",
    canonicalPath: "/india",
    robots: "index,follow",
    schemaType: "LocalBusiness",
  },
  "/india/about": {
    title: `${BASE_TITLE} India — About`,
    description: "Learn about NRS India’s mission, leadership, and client-first advisory approach.",
    canonicalPath: "/india/about",
    robots: "index,follow",
    schemaType: "AboutPage",
  },
  "/india/services": {
    title: `${BASE_TITLE} India — Services`,
    description: "Explore NRS India services: audit, CFO, ERP implementation, and compliance support.",
    canonicalPath: "/india/services",
    robots: "index,follow",
    schemaType: "Service",
  },
  "/india/team": {
    title: `${BASE_TITLE} India — Team`,
    description: "Meet the leadership team behind NRS India’s advisory and financial expertise.",
    canonicalPath: "/india/team",
    robots: "index,follow",
    schemaType: "AboutPage",
  },
  "/india/insights": {
    title: `${BASE_TITLE} India — Insights`,
    description: "Read insights on compliance, CFO strategy, and technology-led financial operations.",
    canonicalPath: "/india/insights",
    robots: "index,follow",
    schemaType: "CollectionPage",
  },
  "/india/careers": {
    title: `${BASE_TITLE} India — Careers`,
    description: "Build your career with NRS India in advisory, audit, and business finance roles.",
    canonicalPath: "/india/careers",
    robots: "index,follow",
    schemaType: "CollectionPage",
  },
  "/india/contact": {
    title: `${BASE_TITLE} India — Contact`,
    description: "Contact NRS India for financial advisory, compliance support, and business solutions.",
    canonicalPath: "/india/contact",
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

function setJsonLd(schemaType: string, url: string, title: string, description: string) {
  let script = document.head.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": title,
    "description": description,
    "url": url,
    "logo": "https://www.nrsassociates.in/og-image.png",
    "image": "https://www.nrsassociates.in/og-image.png",
    "telephone": "+918111956108",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ground Floor, 108, 1st Cross, 5th Main, 1st Block, Koramangala",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560034",
      "addressCountry": "IN"
    }
  };

  script.textContent = JSON.stringify(baseSchema);
}

export function applySeo(pathname: string) {
  const meta = PAGE_META[pathname] ?? DEFAULT_META;
  const baseUrl = import.meta.env.VITE_SITE_URL || "https://www.nrsassociates.in";
  const canonicalUrl = new URL(meta.canonicalPath, baseUrl).toString();
  const ogImageUrl = new URL("/og-image.png", baseUrl).toString();

  document.title = meta.title;
  setCanonical(canonicalUrl);

  setOrCreateMeta('meta[name="description"]', "name", "description", meta.description);
  setOrCreateMeta('meta[name="robots"]', "name", "robots", meta.robots ?? "index,follow");

  setOrCreateMeta('meta[property="og:type"]', "property", "og:type", "website");
  setOrCreateMeta('meta[property="og:title"]', "property", "og:title", meta.title);
  setOrCreateMeta('meta[property="og:description"]', "property", "og:description", meta.description);
  setOrCreateMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
  setOrCreateMeta('meta[property="og:image"]', "property", "og:image", ogImageUrl);
  setOrCreateMeta('meta[property="og:site_name"]', "property", "og:site_name", BASE_TITLE);

  setOrCreateMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  setOrCreateMeta('meta[name="twitter:title"]', "name", "twitter:title", meta.title);
  setOrCreateMeta('meta[name="twitter:description"]', "name", "twitter:description", meta.description);
  setOrCreateMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImageUrl);

  if (meta.schemaType) {
    setJsonLd(meta.schemaType, canonicalUrl, meta.title, meta.description);
  }
}

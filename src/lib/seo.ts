type SeoMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
};

const BASE_TITLE = "NRS & Associates";

const DEFAULT_META: SeoMeta = {
  title: `${BASE_TITLE} — Financial Advisory & Business Solutions`,
  description:
    "Trusted financial advisory and business solutions across India and Dubai, including tax, compliance, audit, and business setup services.",
  canonicalPath: "/",
  robots: "index,follow",
};

const PAGE_META: Record<string, SeoMeta> = {
  "/india": {
    title: `${BASE_TITLE} India — Financial Advisory & Cross-Border Solutions`,
    description:
      "NRS India offers audit, assurance, CFO services, ERP consulting, and cross-border advisory for growing businesses.",
    canonicalPath: "/india",
    robots: "index,follow",
  },
  "/india/about": {
    title: `${BASE_TITLE} India — About`,
    description: "Learn about NRS India’s mission, leadership, and client-first advisory approach.",
    canonicalPath: "/india/about",
    robots: "index,follow",
  },
  "/india/services": {
    title: `${BASE_TITLE} India — Services`,
    description: "Explore NRS India services: audit, CFO, ERP implementation, and compliance support.",
    canonicalPath: "/india/services",
    robots: "index,follow",
  },
  "/india/team": {
    title: `${BASE_TITLE} India — Team`,
    description: "Meet the leadership team behind NRS India’s advisory and financial expertise.",
    canonicalPath: "/india/team",
    robots: "index,follow",
  },
  "/india/insights": {
    title: `${BASE_TITLE} India — Insights`,
    description: "Read insights on compliance, CFO strategy, and technology-led financial operations.",
    canonicalPath: "/india/insights",
    robots: "index,follow",
  },
  "/india/careers": {
    title: `${BASE_TITLE} India — Careers`,
    description: "Build your career with NRS India in advisory, audit, and business finance roles.",
    canonicalPath: "/india/careers",
    robots: "index,follow",
  },
  "/india/contact": {
    title: `${BASE_TITLE} India — Contact`,
    description: "Contact NRS India for financial advisory, compliance support, and business solutions.",
    canonicalPath: "/india/contact",
    robots: "index,follow",
  },
  "/dubai": {
    title: `${BASE_TITLE} Dubai — Tax & Business Advisory`,
    description:
      "NRS Dubai supports businesses with UAE tax advisory, compliance, business setup, and corporate finance services.",
    canonicalPath: "/dubai",
    robots: "index,follow",
  },
  "/dubai/about": {
    title: `${BASE_TITLE} Dubai — About`,
    description: "Learn about NRS Dubai’s values, mission, and financial advisory leadership.",
    canonicalPath: "/dubai/about",
    robots: "index,follow",
  },
  "/dubai/services": {
    title: `${BASE_TITLE} Dubai — Services`,
    description: "Explore NRS Dubai services: UAE tax, compliance, business setup, and finance advisory.",
    canonicalPath: "/dubai/services",
    robots: "index,follow",
  },
  "/dubai/team": {
    title: `${BASE_TITLE} Dubai — Team`,
    description: "Meet the experts leading NRS Dubai’s tax and business advisory practice.",
    canonicalPath: "/dubai/team",
    robots: "index,follow",
  },
  "/dubai/insights": {
    title: `${BASE_TITLE} Dubai — Insights`,
    description: "Read NRS Dubai insights on UAE corporate tax, VAT, and business compliance.",
    canonicalPath: "/dubai/insights",
    robots: "index,follow",
  },
  "/dubai/careers": {
    title: `${BASE_TITLE} Dubai — Careers`,
    description: "Explore career opportunities at NRS Dubai across advisory and corporate services.",
    canonicalPath: "/dubai/careers",
    robots: "index,follow",
  },
  "/dubai/contact": {
    title: `${BASE_TITLE} Dubai — Contact`,
    description: "Contact NRS Dubai for UAE tax, compliance, and business advisory support.",
    canonicalPath: "/dubai/contact",
    robots: "index,follow",
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

export function applySeo(pathname: string) {
  const meta = PAGE_META[pathname] ?? DEFAULT_META;
  const baseUrl = import.meta.env.VITE_SITE_URL || "https://www.nrsassociates.in";
  const canonicalUrl = new URL(meta.canonicalPath, baseUrl).toString();

  document.title = meta.title;
  setCanonical(canonicalUrl);

  setOrCreateMeta('meta[name="description"]', "name", "description", meta.description);
  setOrCreateMeta('meta[name="robots"]', "name", "robots", meta.robots ?? "index,follow");

  setOrCreateMeta('meta[property="og:type"]', "property", "og:type", "website");
  setOrCreateMeta('meta[property="og:title"]', "property", "og:title", meta.title);
  setOrCreateMeta('meta[property="og:description"]', "property", "og:description", meta.description);
  setOrCreateMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);

  setOrCreateMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  setOrCreateMeta('meta[name="twitter:title"]', "name", "twitter:title", meta.title);
  setOrCreateMeta('meta[name="twitter:description"]', "name", "twitter:description", meta.description);
}

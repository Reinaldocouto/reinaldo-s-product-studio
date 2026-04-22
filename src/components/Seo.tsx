import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  image: string;
  url: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const upsertMeta = (selector: string, attrs: Record<string, string>) => {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }

  Object.entries(attrs).forEach(([k, v]) => el?.setAttribute(k, v));
};

export const Seo = ({ title, description, image, url, jsonLd }: SeoProps) => {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });

    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const previous = document.getElementById("seo-jsonld");
    if (previous) previous.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.id = "seo-jsonld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const cleanup = document.getElementById("seo-jsonld");
      if (cleanup) cleanup.remove();
    };
  }, [description, image, jsonLd, title, url]);

  return null;
};

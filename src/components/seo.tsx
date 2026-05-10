// src/components/Seo.tsx
import React from "react";
import { Helmet } from "react-helmet-async";

type Hreflang = { hrefLang: string; href: string };

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  url?: string;
  image?: string;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  hreflangs?: Hreflang[];
  breadcrumbs?: { position: number; name: string; item: string }[];
  lang?: string;
}

export default function Seo({
  title,
  description,
  canonical,
  url,
  image,
  keywords = [],
  publishedTime,
  modifiedTime,
  author,
  hreflangs = [],
  breadcrumbs,
  lang = "en",
}: SeoProps) {
  const siteName = "Your Company Name";
  const safeTitle = title ? `${title} | ${siteName}` : siteName;

  const webpageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: url || canonical,
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: "https://example.com", // change to your site
    logo: "https://example.com/logo.png",
  };

  const articleLd = publishedTime
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: { "@type": "WebPage", "@id": url || canonical },
        headline: title,
        image: image ? [image] : undefined,
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: { "@type": "Person", name: author || siteName },
        publisher: { "@type": "Organization", name: siteName, logo: { "@type": "ImageObject", url: "https://example.com/logo.png" } },
        description,
      }
    : null;

  const breadcrumbLd = Array.isArray(breadcrumbs) && breadcrumbs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b) => ({
          "@type": "ListItem",
          position: b.position,
          name: b.name,
          item: b.item,
        })),
      }
    : null;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{safeTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical || url} />

      {hreflangs.map((h) => (
        <link key={h.hrefLang} rel="alternate" hrefLang={h.hrefLang} href={h.href} />
      ))}

      <meta property="og:type" content={publishedTime ? "article" : "website"} />
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url || canonical} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      <script type="application/ld+json">{JSON.stringify(webpageLd)}</script>
      <script type="application/ld+json">{JSON.stringify(orgLd)}</script>
      {articleLd && <script type="application/ld+json">{JSON.stringify(articleLd)}</script>}
      {breadcrumbLd && <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>}
    </Helmet>
  );
}

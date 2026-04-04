import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';
import { LOCATIONS, SERVICES, getAllCombos } from '@/lib/locationData';

// ─────────────────────────────────────────────────────────────────────────────
// SITEMAP — tdgutterandwindows.com
//
// CRITICAL: Use real hardcoded dates — NOT new Date().
// new Date() changes on every build → Google sees every page "modified" every
// deploy → it learns your lastmod signal is noise and ignores it entirely.
// ─────────────────────────────────────────────────────────────────────────────

const BASE            = 'https://tdgutterandwindows.com';
const SITE_LAUNCH     = '2025-03-20';
const CONTENT_AUDIT   = '2025-03-20';
const SEO_REBUILD     = '2026-04-04'; // locationData.ts rebuild + new pages

export default function sitemap(): MetadataRoute.Sitemap {

  // ── STATIC CORE PAGES ──────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                          lastModified: SITE_LAUNCH,   changeFrequency: 'weekly',  priority: 1.00 },
    { url: `${BASE}/service-request`,     lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.90 },
    { url: `${BASE}/contact`,             lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.90 },
    { url: `${BASE}/faqs`,                lastModified: CONTENT_AUDIT, changeFrequency: 'monthly', priority: 0.80 },
    { url: `${BASE}/services`,            lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.80 },
    { url: `${BASE}/locations`,           lastModified: SEO_REBUILD,   changeFrequency: 'monthly', priority: 0.80 },
    { url: `${BASE}/blog`,                lastModified: blogPosts[blogPosts.length - 1]?.isoDate ?? SITE_LAUNCH, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${BASE}/price-matching`,      lastModified: SITE_LAUNCH,   changeFrequency: 'monthly', priority: 0.70 },
    { url: `${BASE}/about`,               lastModified: SITE_LAUNCH,   changeFrequency: 'yearly',  priority: 0.50 },
    { url: `${BASE}/more`,                lastModified: SITE_LAUNCH,   changeFrequency: 'yearly',  priority: 0.30 },
  ];

  // ── SERVICE HUB PAGES (/services/[service]) ────────────────────────────────
  // Priority 0.80 — these are category pages, not transactional
  const serviceHubPages: MetadataRoute.Sitemap = SERVICES.map((svc) => ({
    url: `${BASE}/services/${svc.slug}`,
    lastModified: SEO_REBUILD,
    changeFrequency: 'monthly' as const,
    priority: 0.80,
  }));

  // ── CITY HUB PAGES (/locations/[city]) ────────────────────────────────────
  const cityHubPages: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${BASE}/locations/${loc.slug}`,
    lastModified: SEO_REBUILD,
    changeFrequency: 'monthly' as const,
    priority:
      loc.priority === 'primary'
        ? 0.90
        : loc.priority === 'secondary'
        ? 0.80
        : 0.70,
  }));

  // ── CITY × SERVICE COMBO PAGES (/locations/[city]/[service]) ──────────────
  const comboPages: MetadataRoute.Sitemap = getAllCombos().map(({ city, service }) => {
    const loc = LOCATIONS.find((l) => l.slug === city)!
    return {
      url: `${BASE}/locations/${city}/${service}`,
      lastModified: SEO_REBUILD,
      changeFrequency: 'monthly' as const,
      priority:
        loc.priority === 'primary'
          ? 0.85
          : loc.priority === 'secondary'
          ? 0.75
          : 0.70,
    }
  });

  // ── BLOG POSTS (/blog/[slug]) ──────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.isoDate,
    changeFrequency: 'never' as const,
    priority: 0.65,
  }));

  return [
    ...staticPages,
    ...serviceHubPages,
    ...cityHubPages,
    ...comboPages,
    ...blogPages,
  ];
}

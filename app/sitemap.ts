import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';
import { services } from '@/lib/services';
import { locations } from '@/lib/locations';
import {
  getAllCityServiceCombos,
  ALL_CITY_SLUGS,
  ALL_SERVICE_SLUGS,
  cities,
} from '@/lib/gutter-seo-data';

// ─────────────────────────────────────────────────────────────────────────────
// SITEMAP — tdgutterandwindows.com
//
// CRITICAL: Use real hardcoded dates — NOT new Date().
// new Date() changes on every build → Google sees every page "modified" every
// deploy → it learns your lastmod signal is noise and ignores it entirely.
// Real dates = Google trusts lastmod → prioritises recrawl correctly.
// ─────────────────────────────────────────────────────────────────────────────

const BASE = 'https://tdgutterandwindows.com';

const SITE_LAUNCH      = '2025-03-20'; // original launch
const CONTENT_AUDIT    = '2025-03-20'; // bump when rewriting static copy
const LOCATION_REBUILD = '2026-03-28'; // city landing pages fully rebuilt
const COMBO_LAUNCH     = '2026-04-04'; // city+service combo pages launched

export default function sitemap(): MetadataRoute.Sitemap {

  // ── STATIC CORE PAGES ───────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/service-request`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/contact`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/faqs`,
      lastModified: CONTENT_AUDIT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/blog`,
      lastModified: blogPosts[blogPosts.length - 1]?.isoDate ?? SITE_LAUNCH,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/services`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/locations`,
      lastModified: LOCATION_REBUILD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/price-matching`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/about`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE}/more`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // ── EXISTING SERVICE PAGES (/services/[slug]) ────────────────────────────
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE}/services/${service.id}`,
    lastModified: LOCATION_REBUILD,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // ── CITY LANDING PAGES (/locations/[city]) ───────────────────────────────
  // Existing 8 cities from lib/locations.ts
  const existingLocationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE}/locations/${loc.slug}`,
    lastModified: LOCATION_REBUILD,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // New cities from gutter-seo-data (excludes slugs already covered above)
  const existingSlugs = new Set(locations.map((l) => l.slug));
  const newCityPages: MetadataRoute.Sitemap = ALL_CITY_SLUGS.filter(
    (slug) => !existingSlugs.has(slug)
  ).map((slug) => ({
    url: `${BASE}/locations/${slug}`,
    lastModified: COMBO_LAUNCH,
    changeFrequency: 'monthly' as const,
    priority: cities[slug]?.tier === 'primary' ? 0.9 : 0.75,
  }));

  // ── GUTTER SERVICE PAGES (/services/[gutter-slug]) ───────────────────────
  // These are the 5 gutter-specific service slugs used in combo pages.
  // They overlap with existing /services/[slug] pages but use different slugs,
  // so they are additional entries pointing to the combo landing pattern.
  const gutterServicePages: MetadataRoute.Sitemap = ALL_SERVICE_SLUGS.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: COMBO_LAUNCH,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // ── CITY + SERVICE COMBO PAGES (/locations/[city]/[service]) ────────────
  const comboPages: MetadataRoute.Sitemap = getAllCityServiceCombos().map(
    ({ city, service }) => ({
      url: `${BASE}/locations/${city}/${service}`,
      lastModified: COMBO_LAUNCH,
      changeFrequency: 'monthly' as const,
      priority: cities[city]?.tier === 'primary' ? 0.85 : 0.70,
    })
  );

  // ── BLOG POSTS (/blog/[slug]) ────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.isoDate,
    changeFrequency: 'never' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...existingLocationPages,
    ...newCityPages,
    ...gutterServicePages,
    ...comboPages,
    ...blogPages,
  ];
}

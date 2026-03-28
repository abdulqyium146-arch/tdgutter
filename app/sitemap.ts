import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';
import { services } from '@/lib/services';
import { locations } from '@/lib/locations';

const BASE = 'https://tdgutterandwindows.com';

// ─────────────────────────────────────────────────────────────────────────────
// CRITICAL: Use real hardcoded dates — NOT new Date().
// new Date() changes on every build → Google sees every page "modified" every
// deploy → it learns your lastmod signal is noise and ignores it entirely.
// Real dates = Google trusts lastmod → prioritises recrawl correctly.
// ─────────────────────────────────────────────────────────────────────────────

// Site launch / last substantive content update per page
const SITE_LAUNCH      = '2025-03-20';
const CONTENT_AUDIT    = '2025-03-20'; // bump this when you rewrite copy
const LOCATION_REBUILD = '2026-03-28'; // location pages fully rebuilt with gutter SEO content

export default function sitemap(): MetadataRoute.Sitemap {
  return [

    // ── TIER 1 — Homepage (highest authority, weekly recrawl signal) ──────
    {
      url: BASE,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ── TIER 2 — Primary conversion pages ────────────────────────────────
    // These pages drive bookings — signal Google they matter
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

    // ── TIER 3 — High-value informational / rich-result pages ────────────
    // FAQs can earn FAQ rich results in SERP — treat as high priority
    {
      url: `${BASE}/faqs`,
      lastModified: CONTENT_AUDIT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Blog index — updated whenever new posts publish
    {
      url: `${BASE}/blog`,
      lastModified: blogPosts[blogPosts.length - 1]?.isoDate ?? SITE_LAUNCH,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Price-matching can rank for "cheapest gutter cleaning [city]" queries
    {
      url: `${BASE}/price-matching`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ── TIER 4 — Supporting pages ─────────────────────────────────────────
    {
      url: `${BASE}/about`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // /more is a thin hub — low priority but keep indexed for internal linking
    {
      url: `${BASE}/more`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    // ── SERVICES HUB ─────────────────────────────────────────────────────
    {
      url: `${BASE}/services`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },

    // ── LOCATIONS HUB ────────────────────────────────────────────────────
    {
      url: `${BASE}/locations`,
      lastModified: LOCATION_REBUILD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },

    // ── INDIVIDUAL SERVICE PAGES ─────────────────────────────────────────
    ...services.map((service) => ({
      url: `${BASE}/services/${service.id}`,
      lastModified: '2025-03-20',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // ── INDIVIDUAL LOCATION PAGES ────────────────────────────────────────
    ...locations.map((loc) => ({
      url: `${BASE}/locations/${loc.slug}`,
      lastModified: LOCATION_REBUILD,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),

    // ── BLOG POSTS — real publish dates, evergreen = changeFreq 'never' ──
    // 'never' = "content is stable, don't waste crawl budget rechecking it"
    // Google still recrawls these but at low priority, which is correct.
    ...blogPosts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post.isoDate,          // real date, not new Date()
      changeFrequency: 'never' as const,   // evergreen articles
      priority: 0.7,
    })),
  ];
}

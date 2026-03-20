import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block Next.js internals and form/API paths from crawlers
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
      {
        // Block AI training crawlers (optional but increasingly standard)
        userAgent: ['GPTBot', 'CCBot', 'anthropic-ai', 'Claude-Web'],
        disallow: '/',
      },
    ],
    sitemap: 'https://tdgutterandwindows.com/sitemap.xml',
    host: 'https://tdgutterandwindows.com',
  };
}

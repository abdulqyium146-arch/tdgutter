import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── PRIMARY SEARCH ENGINES — full access, no delay ─────────────────
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',      // no server routes
          '/_next/',    // no build artifacts
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Slurp', // Yahoo
        allow: '/',
        disallow: ['/api/', '/_next/'],
        crawlDelay: 2,
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'facebookexternalhit', // Facebook link previews / OG cards
        allow: '/',
      },
      {
        userAgent: 'Twitterbot', // Twitter/X card previews
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },

      // ── SEO TOOLS — throttled so they don't burn crawl budget ──────────
      // (they don't affect rankings but are useful for your own audits)
      {
        userAgent: 'SemrushBot',
        allow: '/',
        crawlDelay: 10,
      },
      {
        userAgent: 'AhrefsBot',
        allow: '/',
        crawlDelay: 10,
      },
      {
        userAgent: 'MJ12bot', // Majestic
        allow: '/',
        crawlDelay: 10,
      },
      {
        userAgent: 'DotBot', // Moz
        allow: '/',
        crawlDelay: 10,
      },

      // ── AI TRAINING CRAWLERS — fully blocked ───────────────────────────
      // These scrape content to train models — no SEO benefit, only costs
      {
        userAgent: [
          'GPTBot',             // OpenAI
          'ChatGPT-User',       // OpenAI ChatGPT browsing
          'OAI-SearchBot',      // OpenAI search
          'CCBot',              // Common Crawl (feeds GPT training)
          'anthropic-ai',       // Anthropic
          'Claude-Web',         // Anthropic Claude
          'PerplexityBot',      // Perplexity AI
          'Bytespider',         // ByteDance / TikTok
          'PetalBot',           // Huawei
          'cohere-ai',          // Cohere
          'omgili',             // Content aggregator
          'YouBot',             // You.com AI
          'Diffbot',            // Data extraction AI
          'ia_archiver',        // Alexa / Internet Archive mass scraper
        ],
        disallow: '/',
      },

      // ── JUNK BOTS — malicious / spam / content thieves ─────────────────
      {
        userAgent: [
          'MegaIndex',
          'BLEXBot',
          'SeznamBot',
          'Cliqzbot',
          'CrawlBot',
        ],
        disallow: '/',
      },

      // ── DEFAULT — all other bots ────────────────────────────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
    ],

    sitemap: 'https://tdgutterandwindows.com/sitemap.xml',
    host: 'https://tdgutterandwindows.com',
  };
}

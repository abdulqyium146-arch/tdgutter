import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, Bebas_Neue } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BASE_URL = 'https://tdgutterandwindows.com';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display-var',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body-var',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-label-var',
  display: 'swap',
});

export const metadata: Metadata = {
  // ── Base URL — makes ALL og/twitter image paths absolute ──
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Top Down Gutter & Windows | Northern California Exterior Cleaning',
    template: '%s | Top Down Gutter & Windows',
  },
  description:
    'Professional gutter cleaning, roof washing, window cleaning & more — serving Redding, Chico, Oroville, Yuba City and Northern California. Licensed & insured. Free inspections.',
  keywords: [
    'gutter cleaning Chico CA',
    'gutter cleaning Redding CA',
    'roof washing Northern California',
    'window cleaning Chico',
    'house washing Oroville',
    'solar panel cleaning Yuba City',
    'gutter installation Northern California',
    'gutter repair Chico',
    'soft washing roof California',
    'exterior cleaning Northern California',
  ],
  authors: [{ name: 'Top Down Gutter & Windows', url: BASE_URL }],
  creator: 'Top Down Gutter & Windows',
  publisher: 'Top Down Gutter & Windows',

  // ── Explicit crawl/index directive ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── OpenGraph defaults (each page overrides as needed) ──
  openGraph: {
    type: 'website',
    siteName: 'Top Down Gutter & Windows',
    locale: 'en_US',
    url: BASE_URL,
    title: 'Top Down Gutter & Windows | Northern California Exterior Cleaning',
    description:
      'Professional gutter cleaning, roof washing, window cleaning & more — serving Redding to Yuba City. Licensed & insured.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Top Down Gutter & Windows — Northern California Exterior Cleaning Experts',
      },
    ],
  },

  // ── Twitter / X Card ──
  twitter: {
    card: 'summary_large_image',
    title: 'Top Down Gutter & Windows | Northern California Exterior Cleaning',
    description:
      'Professional gutter cleaning, roof washing, window cleaning & more — serving Redding to Yuba City.',
    images: ['/opengraph-image'],
  },

  // ── Favicons & touch icons ──
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },

  // ── Default canonical (overridden per-page) ──
  alternates: {
    canonical: BASE_URL,
  },

  // ── Google Search Console verification (add your token here) ──
  // verification: { google: 'YOUR_VERIFICATION_TOKEN' },
};

// ── Global JSON-LD: WebSite + Organization ──
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Top Down Gutter & Windows',
  url: BASE_URL,
  description:
    'Professional gutter cleaning, roof washing, window cleaning & more — serving Northern California.',
  publisher: {
    '@type': 'Organization',
    name: 'Top Down Gutter & Windows',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/opengraph-image`,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-619-885-3894',
      contactType: 'customer service',
      areaServed: 'Northern California',
      availableLanguage: 'English',
    },
  },
  // Sitelinks SearchBox signal (optional, helps Google)
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/faqs?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} ${bebasNeue.variable}`}
    >
      <head>
        {/* Favicon fallback links for maximum browser compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        {/* Preconnect to Google Fonts origin for faster font load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Global WebSite + Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-navy-900 text-white min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link font-body">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

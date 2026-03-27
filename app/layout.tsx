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
    'gutter cleaning Oroville CA',
    'gutter guard installation Chico',
    'gutter cleaning Red Bluff CA',
    'gutter cleaning Grass Valley CA',
    'free gutter inspection Chico',
    'licensed insured exterior cleaning California',
    'gutter cleaning Paradise CA',
    'gutter cleaning Orland CA',
    'gutter cleaning Yuba City CA',
    'roof soft wash Northern California',
  ],
  category: 'Home Services',
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
      noimageindex: false,
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

  // ── Default canonical (overridden per-page) ──
  alternates: {
    canonical: BASE_URL,
  },

  // ── Google Search Console verification (add your token here) ──
  // verification: { google: 'YOUR_VERIFICATION_TOKEN' },
};

// ── Global JSON-LD: Combined @graph (WebSite + Organization) ──
const globalGraphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Top Down Gutter & Windows',
      description:
        'Professional gutter cleaning, roof washing, window cleaning & more — serving Northern California.',
      publisher: { '@id': `${BASE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_URL}/faqs?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': ['Organization', 'LocalBusiness', 'HomeAndConstructionBusiness'],
      '@id': `${BASE_URL}/#organization`,
      name: 'Top Down Gutter & Windows',
      legalName: 'Top Down Gutter & Windows',
      alternateName: 'Top Down Gutter and Window Cleaning Services',
      description:
        'Licensed and insured exterior cleaning company serving Northern California since 2024. Specializing in gutter cleaning, roof soft-washing, window cleaning, solar panel cleaning, and house washing.',
      slogan: 'From Roof to Windows, Let Us Clean Your Home From The Top Down',
      url: BASE_URL,
      telephone: '+1-614-350-5978',
      email: 'TopDown.GutterAndWindow@gmail.com',
      foundingDate: '2024',
      numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 10 },
      logo: {
        '@type': 'ImageObject',
        '@id': `${BASE_URL}/#logo`,
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        caption: 'Top Down Gutter & Windows',
      },
      image: { '@id': `${BASE_URL}/#logo` },
      address: {
        '@type': 'PostalAddress',
        '@id': `${BASE_URL}/#address`,
        streetAddress: '1180 E Lassen Ave',
        addressLocality: 'Chico',
        addressRegion: 'CA',
        postalCode: '95928',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 39.7285,
        longitude: -121.8375,
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+1-614-350-5978',
          contactType: 'customer service',
          contactOption: 'TollFree',
          areaServed: 'US-CA',
          availableLanguage: { '@type': 'Language', name: 'English' },
          hoursAvailable: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '07:00',
              closes: '19:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Saturday',
              opens: '08:00',
              closes: '17:00',
            },
          ],
        },
        {
          '@type': 'ContactPoint',
          email: 'TopDown.GutterAndWindow@gmail.com',
          contactType: 'sales',
          areaServed: 'US-CA',
          availableLanguage: { '@type': 'Language', name: 'English' },
        },
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'California Contractor License',
          credentialCategory: 'license',
          recognizedBy: { '@type': 'Organization', name: 'State of California' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'General Liability Insurance',
          credentialCategory: 'insurance',
        },
      ],
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Free Inspections', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Licensed & Insured', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Price Match Guarantee', value: true },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Veteran & First Responder Discounts',
          value: true,
        },
      ],
      areaServed: [
        {
          '@type': 'City',
          name: 'Chico',
          containedInPlace: { '@type': 'State', name: 'California' },
        },
        {
          '@type': 'City',
          name: 'Redding',
          containedInPlace: { '@type': 'State', name: 'California' },
        },
        {
          '@type': 'City',
          name: 'Oroville',
          containedInPlace: { '@type': 'State', name: 'California' },
        },
        {
          '@type': 'City',
          name: 'Yuba City',
          containedInPlace: { '@type': 'State', name: 'California' },
        },
        {
          '@type': 'City',
          name: 'Red Bluff',
          containedInPlace: { '@type': 'State', name: 'California' },
        },
        {
          '@type': 'City',
          name: 'Orland',
          containedInPlace: { '@type': 'State', name: 'California' },
        },
        {
          '@type': 'City',
          name: 'Paradise',
          containedInPlace: { '@type': 'State', name: 'California' },
        },
        {
          '@type': 'City',
          name: 'Grass Valley',
          containedInPlace: { '@type': 'State', name: 'California' },
        },
      ],
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: 39.7285, longitude: -121.8375 },
        geoRadius: '250000',
      },
      knowsAbout: [
        'Gutter Cleaning',
        'Roof Soft-Washing',
        'Window Cleaning',
        'Solar Panel Cleaning',
        'House Washing',
        'Gutter Installation',
        'Gutter Repair',
        'Gutter Guard Installation',
        'Exterior Home Cleaning',
        'Northern California Home Maintenance',
      ],
      sameAs: [
        'https://www.facebook.com/p/Top-Down-Gutter-and-Window-Cleaning-Services-61568901527821/',
        'https://www.yelp.com/biz/top-down-gutter-and-windows-chico-4',
        'https://sites.google.com/view/tdgutterandwindows/home',
      ],
    },
  ],
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
        {/* Preconnect to Google Fonts origin for faster font load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Global @graph: WebSite + Organization knowledge graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalGraphSchema) }}
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

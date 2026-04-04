import type { Metadata } from 'next';
import Link from 'next/link';
import { locations } from '@/lib/locations';
import TrustBar from '@/components/TrustBar';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';

export const metadata: Metadata = {
  title: 'Northern California Service Areas | Top Down Gutter & Windows',
  description:
    'Top Down Gutter & Windows serves Chico, Redding, Oroville, Yuba City, Red Bluff, Orland, Paradise & Grass Valley. Gutter cleaning, roof washing, window cleaning & more across Northern California.',
  keywords: [
    'northern california gutter cleaning',
    'chico redding oroville gutter service',
    'grass valley paradise exterior cleaning',
    'yuba city red bluff gutter company',
    'butte county shasta county nevada county gutter',
  ],
  alternates: {
    canonical: 'https://tdgutterandwindows.com/locations',
  },
  openGraph: {
    url: 'https://tdgutterandwindows.com/locations',
    title: 'Northern California Service Areas | Top Down Gutter & Windows',
    description:
      'Serving 8 communities across Northern California with professional gutter cleaning, roof washing, window cleaning & exterior services.',
    siteName: 'Top Down Gutter & Windows',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Top Down Gutter & Windows — Northern California Service Areas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern California Service Areas | Top Down Gutter & Windows',
    description:
      'Serving 8 communities across Northern California with professional gutter cleaning, roof washing, window cleaning & exterior services.',
    images: ['/opengraph-image'],
  },
};

export default function LocationsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tdgutterandwindows.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: 'https://tdgutterandwindows.com/locations',
      },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Northern California Service Areas — Top Down Gutter & Windows',
    description: 'Cities and communities served by Top Down Gutter & Windows in Northern California',
    url: 'https://tdgutterandwindows.com/locations',
    numberOfItems: locations.length,
    itemListElement: locations.map((loc, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${loc.city}, CA`,
      url: `https://tdgutterandwindows.com/locations/${loc.slug}`,
      item: {
        '@type': 'City',
        name: loc.city,
        containedInPlace: { '@type': 'State', name: 'California' },
      },
    })),
  };

  const locationsCollectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://tdgutterandwindows.com/locations#webpage',
    url: 'https://tdgutterandwindows.com/locations',
    name: 'Northern California Service Areas | Top Down Gutter & Windows',
    isPartOf: { '@id': 'https://tdgutterandwindows.com/#website' },
    about: { '@id': 'https://tdgutterandwindows.com/#organization' },
    datePublished: '2025-03-20',
    dateModified: '2026-03-27',
    inLanguage: 'en-US',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsCollectionPageSchema) }} />

      {/* ── HERO ── */}
      <section className="relative bg-navy-950 hero-pattern py-24 px-4 overflow-hidden" aria-labelledby="locations-hero-heading">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center top, rgba(201,144,42,0.08) 0%, transparent 60%), radial-gradient(ellipse at center bottom, rgba(6,14,28,0.8) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <SectionLabel className="mb-4">Where We Work</SectionLabel>
          <h1
            id="locations-hero-heading"
            className="font-display font-black text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.1 }}
          >
            Areas We Serve in Northern California
          </h1>
          <GoldDivider className="mx-auto mb-6" />
          <p className="font-body text-slate text-lg max-w-2xl mx-auto leading-relaxed">
            Based in Chico, we serve 8 communities across Northern California — from the Sacramento River corridor to the Sierra Nevada foothills. Every location receives the same professional service: licensed, insured, and backed by a free inspection guarantee.
          </p>
        </div>
      </section>

      {/* ── CITY CARDS GRID ── */}
      <section className="py-20 px-4 bg-navy-900" aria-labelledby="cities-grid-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel className="mb-3">Service Areas</SectionLabel>
            <h2 id="cities-grid-heading" className="font-display font-bold text-white text-3xl mb-4">
              Our 8 Northern California Communities
            </h2>
            <GoldDivider className="mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locations.map((loc) => {
              const firstSentence = loc.intro.split('.')[0] + '.';
              return (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group bg-navy-800 border border-navy-700 rounded-xl p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-navy-950/50 transition-all duration-300 flex flex-col"
                >
                  <div className="mb-4">
                    <h2 className="font-display font-bold text-white text-xl group-hover:text-gold transition-colors duration-200 mb-1">
                      {loc.city}
                    </h2>
                    <p className="font-label text-gold text-xs tracking-[0.15em] uppercase">{loc.county}</p>
                  </div>
                  <p className="font-body text-slate text-sm leading-relaxed flex-1 mb-4">
                    {firstSentence}
                  </p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-body font-medium group-hover:gap-2 transition-all duration-200 mt-auto">
                    View Services in {loc.city}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES AVAILABLE ── */}
      <section className="py-20 px-4 bg-navy-800" aria-labelledby="all-services-heading">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <SectionLabel className="mb-3">Full Service Coverage</SectionLabel>
            <h2 id="all-services-heading" className="font-display font-bold text-white text-3xl mb-4">
              All Services Available in Every Area
            </h2>
            <GoldDivider />
          </div>
          <p className="font-body text-slate leading-relaxed text-lg mb-8">
            Every one of our nine exterior cleaning and maintenance services — gutter cleaning, roof soft-washing, gutter repairs, gutter installation, gutter guard installation, solar panel cleaning, house washing, window cleaning, and free gutter inspections — is available throughout our entire Northern California service area. Whether you are in Chico, in the Sierra foothills of Grass Valley, along the Sacramento River in Red Bluff, or in the agricultural heartland of Yuba City and Orland, you receive the same licensed, insured, professional service from a team that understands your local environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gold text-navy-900 font-body font-semibold px-7 py-3 rounded-full hover:bg-gold-light transition-colors duration-200"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+16143505978"
              className="inline-flex items-center gap-2 border-2 border-gold text-gold font-body font-semibold px-7 py-3 rounded-full hover:bg-gold/10 transition-colors duration-200"
            >
              Call Now — (614) 350-5978
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <TrustBar />
    </>
  );
}

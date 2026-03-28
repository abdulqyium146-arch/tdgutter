import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { locations } from '@/lib/locations';
import { services } from '@/lib/services';
import FAQAccordion from '@/components/FAQAccordion';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';
import type { FAQ } from '@/lib/faqs';

interface Props {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return locations.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = locations.find((loc) => loc.slug === city);
  if (!location) return { title: 'Location Not Found', robots: { index: false } };
  const canonicalUrl = `https://tdgutterandwindows.com/locations/${city}`;

  const keywords = [
    `gutter cleaning ${location.city.toLowerCase()} ca`,
    `gutter cleaning ${location.city.toLowerCase()} california`,
    `gutter cleaning near me`,
    `gutter repair ${location.city.toLowerCase()} ca`,
    `gutter installation ${location.city.toLowerCase()}`,
    `gutter cleaning service ${location.city.toLowerCase()}`,
    `rain gutter cleaning ${location.city.toLowerCase()}`,
    `seamless gutter installation ${location.city.toLowerCase()} ca`,
    `gutter guard installation ${location.city.toLowerCase()}`,
    `downspout cleaning ${location.city.toLowerCase()} ca`,
    `${location.city.toLowerCase()} gutter company`,
    `${location.county.toLowerCase()} gutter services`,
    `gutter cleaning companies near me ${location.city.toLowerCase()}`,
    `gutter repair near me ${location.city.toLowerCase()}`,
  ];

  return {
    title: location.pageTitle,
    description: location.metaDescription,
    keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      url: canonicalUrl,
      title: location.pageTitle,
      description: location.metaDescription,
      siteName: 'Top Down Gutter & Windows',
      type: 'website',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: `Top Down Gutter & Windows — Gutter Services in ${location.city}, CA`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: location.pageTitle,
      description: location.metaDescription,
      images: ['/opengraph-image'],
    },
  };
}

// ─── REUSABLE INLINE CTA ───────────────────────────────────────────────────────
function InlineCTA({ city }: { city: string }) {
  return (
    <div className="my-12 bg-navy-900 border border-gold/20 rounded-2xl p-8 text-center">
      <p className="font-display font-bold text-white text-xl mb-2">
        Need gutter service in {city}?
      </p>
      <p className="font-body text-slate text-sm mb-6">
        Same-day availability — call before noon and we&rsquo;ll aim for today.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="tel:6143505978"
          className="inline-flex items-center justify-center gap-2 bg-gold text-navy-900 font-body font-semibold px-7 py-3 rounded-full hover:bg-gold-light transition-colors duration-200 text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call (614) 350-5978
        </a>
        <Link
          href="/service-request"
          className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold font-body font-semibold px-7 py-3 rounded-full hover:bg-gold/10 transition-colors duration-200 text-sm"
        >
          Get a Free Estimate
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// ─── GUTTER SERVICE DEEP CARD ──────────────────────────────────────────────────
function ServiceDeepCard({
  id,
  icon,
  title,
  localParagraph,
  bullets,
  linkLabel,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  localParagraph: string;
  bullets: string[];
  linkLabel: string;
}) {
  return (
    <div className="bg-navy-800 border border-navy-700 rounded-2xl overflow-hidden">
      <div className="border-b border-navy-700 px-6 py-5 flex items-center gap-4">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
          {icon}
        </span>
        <h3 className="font-display font-bold text-white text-xl">{title}</h3>
      </div>
      <div className="px-6 py-5">
        <p className="font-body text-slate leading-relaxed text-sm mb-5">{localParagraph}</p>
        <ul className="space-y-2 mb-6">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 font-body text-slate text-sm">
              <span className="flex-shrink-0 mt-1 w-4 h-4 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <svg className="w-2 h-2 text-gold" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </span>
              {b}
            </li>
          ))}
        </ul>
        <Link
          href={`/services/${id}`}
          className="inline-flex items-center gap-1.5 text-gold font-body font-semibold text-sm hover:text-gold-light transition-colors duration-200"
        >
          {linkLabel}
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// ─── ICONS ─────────────────────────────────────────────────────────────────────
const IconGutter = (
  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6M4 6l2-4h12l2 4" />
  </svg>
);
const IconWrench = (
  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const IconInstall = (
  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);
const IconShield = (
  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const IconDownspout = (
  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4v16m0 0l-4-4m4 4l4-4M4 6h16" />
  </svg>
);

// ─── WARNING SIGN ITEM ─────────────────────────────────────────────────────────
function WarnSign({ label, desc }: { label: string; desc: string }) {
  return (
    <li className="flex items-start gap-4 bg-navy-800 border border-navy-700 rounded-xl p-4">
      <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
        <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        </svg>
      </span>
      <div>
        <span className="font-body font-semibold text-white text-sm">{label} </span>
        <span className="font-body text-slate text-sm">{desc}</span>
      </div>
    </li>
  );
}

// ─── PROCESS STEP ──────────────────────────────────────────────────────────────
function ProcessStep({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0 flex flex-col items-center">
        <span className="w-9 h-9 rounded-full bg-gold text-navy-900 font-label text-base flex items-center justify-center font-bold">
          {n}
        </span>
        {n < 7 && <span className="flex-1 w-px bg-gold/20 mt-2" />}
      </div>
      <div className="pb-8">
        <p className="font-body font-semibold text-white text-base mb-1">{title}</p>
        <p className="font-body text-slate text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ─── TRUST PILL ───────────────────────────────────────────────────────────────
function TrustPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 bg-navy-800 border border-navy-700 rounded-full px-5 py-2.5">
      <span className="text-gold flex-shrink-0">{icon}</span>
      <span className="font-body text-white text-sm font-medium">{label}</span>
    </div>
  );
}

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const location = locations.find((loc) => loc.slug === city);
  if (!location) notFound();

  const faqs: FAQ[] = location.faqs;
  const nearbyLocationObjects = locations.filter((loc) => location.nearbyCities.includes(loc.city));

  // ── SCHEMA ─────────────────────────────────────────────────────────────────

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'HomeAndConstructionBusiness'],
    '@id': 'https://tdgutterandwindows.com/#business',
    name: 'Top Down Gutter & Windows',
    legalName: 'Top Down Gutter & Windows',
    slogan: 'From Roof to Windows, Let Us Clean Your Home From The Top Down',
    foundingDate: '2024',
    description: `Professional gutter cleaning, gutter repair, gutter installation, gutter guard installation, and downspout services in ${location.city}, ${location.stateAbbr}. Licensed & insured. Serving ${location.county}.`,
    url: `https://tdgutterandwindows.com/locations/${location.slug}`,
    telephone: '+1-614-350-5978',
    email: 'TopDown.GutterAndWindow@gmail.com',
    image: 'https://tdgutterandwindows.com/opengraph-image',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.stateAbbr,
      postalCode: location.zipCodes[0],
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Free Gutter Inspections', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Licensed & Insured', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Same-Day Service Available', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Price Match Guarantee', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Veteran & First Responder Discounts', value: true },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: location.city,
        containedInPlace: { '@type': 'State', name: 'California' },
      },
      ...location.nearbyCities.map((nc) => ({
        '@type': 'City',
        name: nc,
        containedInPlace: { '@type': 'State', name: 'California' },
      })),
      {
        '@type': 'AdministrativeArea',
        name: location.county,
        containedInPlace: { '@type': 'State', name: 'California' },
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: location.lat,
        longitude: location.lng,
      },
      geoRadius: '80000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Gutter Services in ${location.city}, CA`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Gutter Cleaning ${location.city} CA`,
            description: location.gutterServices.cleaning,
            areaServed: { '@type': 'City', name: location.city },
          },
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Gutter Repair ${location.city} CA`,
            description: location.gutterServices.repair,
            areaServed: { '@type': 'City', name: location.city },
          },
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Gutter Installation ${location.city} CA`,
            description: location.gutterServices.installation,
            areaServed: { '@type': 'City', name: location.city },
          },
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Gutter Guard Installation ${location.city} CA`,
            description: location.gutterServices.guards,
            areaServed: { '@type': 'City', name: location.city },
          },
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Downspout Cleaning & Repair ${location.city} CA`,
            description: location.gutterServices.downspouts,
            areaServed: { '@type': 'City', name: location.city },
          },
          availability: 'https://schema.org/InStock',
        },
      ],
    },
    makesOffer: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        url: `https://tdgutterandwindows.com/services/${s.id}`,
      },
      availability: 'https://schema.org/InStock',
      areaServed: {
        '@type': 'City',
        name: location.city,
        containedInPlace: { '@type': 'State', name: 'California' },
      },
    })),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.location-intro'],
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://tdgutterandwindows.com/locations/${location.slug}#webpage`,
    url: `https://tdgutterandwindows.com/locations/${location.slug}`,
    name: location.pageTitle,
    isPartOf: { '@id': 'https://tdgutterandwindows.com/#website' },
    about: { '@id': 'https://tdgutterandwindows.com/#organization' },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://tdgutterandwindows.com/opengraph-image',
    },
    datePublished: '2025-03-20',
    dateModified: '2026-03-28',
    inLanguage: 'en-US',
    keywords: `gutter cleaning ${location.city.toLowerCase()} ca, gutter repair ${location.city.toLowerCase()}, gutter installation ${location.city.toLowerCase()}, gutter cleaning near me`,
  };

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${location.city}, California`,
    description: location.intro,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng,
    },
    containedInPlace: {
      '@type': 'State',
      name: 'California',
      containedInPlace: { '@type': 'Country', name: 'United States' },
    },
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(location.city + ', CA')}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tdgutterandwindows.com' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://tdgutterandwindows.com/locations' },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Gutter Cleaning ${location.city}, CA`,
        item: `https://tdgutterandwindows.com/locations/${location.slug}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      {/* ── JSON-LD SCHEMA STACK ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />

      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative bg-navy-950 hero-pattern py-24 px-4 overflow-hidden"
        aria-labelledby="location-hero-heading"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center top, rgba(201,144,42,0.08) 0%, transparent 60%), radial-gradient(ellipse at center bottom, rgba(6,14,28,0.8) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <SectionLabel className="mb-4">
            {location.county} &mdash; California
          </SectionLabel>
          <h1
            id="location-hero-heading"
            className="font-display font-black text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.1 }}
          >
            Gutter Cleaning &amp; Repair in{' '}
            <span className="text-gold">{location.city}</span>, CA
          </h1>
          <GoldDivider className="mx-auto mb-6" />
          <p className="location-intro font-body text-slate text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {location.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/service-request"
              className="inline-flex items-center gap-2 bg-gold text-navy-900 font-body font-semibold px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors duration-200 text-base"
            >
              Get a Free Estimate
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:6143505978"
              className="inline-flex items-center gap-2 border-2 border-gold text-gold font-body font-semibold px-8 py-3.5 rounded-full hover:bg-gold/10 transition-colors duration-200 text-base"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (614) 350-5978
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. TRUST PILLS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-8 px-4 bg-navy-900 border-b border-navy-800" aria-label="Trust signals">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          <TrustPill
            label="Licensed & Insured"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
          />
          <TrustPill
            label="Same-Day Available"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <TrustPill
            label="Free Gutter Inspection"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
          />
          <TrustPill
            label="Price Match Guarantee"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <TrustPill
            label="No Mess Left Behind"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            }
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. GUTTER CLEANING
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-navy-800" aria-labelledby="gutter-cleaning-heading">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <SectionLabel className="mb-3">Service</SectionLabel>
            <h2
              id="gutter-cleaning-heading"
              className="font-display font-bold text-white text-3xl mb-4"
            >
              Gutter Cleaning in {location.city}, CA
            </h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="font-body text-slate leading-relaxed text-base mb-6">
                {location.gutterServices.cleaning}
              </p>
              <p className="font-body text-slate leading-relaxed text-base mb-6">
                Clogged gutters are the single most common cause of preventable water damage to{' '}
                {location.city} homes. When a blocked trough overflows, water runs behind the fascia
                board, wicks into the soffit, pools at the foundation, and stains the siding — all
                from a problem that a single professional cleaning eliminates completely. Don&rsquo;t
                wait for visible damage inside your home to act.
              </p>
              <Link
                href="/services/gutter-cleaning"
                className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm hover:text-gold-light transition-colors duration-200"
              >
                Learn more about our gutter cleaning service
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="space-y-3">
              {[
                'Manual debris removal by hand — no blowing onto your roof',
                'Full water flush of every trough section',
                'Complete downspout clearing from inlet to discharge',
                'Visual inspection of all hangers, seams, and end caps',
                'Before-and-after photos provided on every job',
                'All debris bagged and removed from your property',
                'Free written report of any damage or repair needs found',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 font-body text-slate text-sm">
                  <svg
                    className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <InlineCTA city={location.city} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. GUTTER REPAIR
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-navy-900" aria-labelledby="gutter-repair-heading">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <SectionLabel className="mb-3">Service</SectionLabel>
            <h2
              id="gutter-repair-heading"
              className="font-display font-bold text-white text-3xl mb-4"
            >
              Gutter Repair in {location.city}, CA
            </h2>
            <GoldDivider />
          </div>

          <p className="font-body text-slate leading-relaxed text-base mb-10 max-w-3xl">
            {location.gutterServices.repair}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Sagging Gutter Rehang', desc: 'Re-pitch and re-hang trough sections; replace failed spike fasteners with hidden screw hangers.' },
              { label: 'Leaking Seam Resealing', desc: 'Re-seal all lap joints and end cap seams with commercial-grade gutter sealant.' },
              { label: 'Hole & Rust Patching', desc: 'Patch small holes with matching material; replace severely rusted sections.' },
              { label: 'End Cap Replacement', desc: 'Replace cracked or missing end caps to stop water escaping at trough terminations.' },
              { label: 'Hanger & Bracket Replacement', desc: 'Replace failing spike hangers with modern screw-style hidden hangers rated for California code.' },
              { label: 'Pitch & Slope Correction', desc: 'Rehang sections to restore the correct ¼-inch-per-10-foot drainage slope.' },
            ].map(({ label, desc }) => (
              <div key={label} className="bg-navy-800 border border-navy-700 border-t-2 border-t-gold rounded-xl p-5">
                <h3 className="font-body font-semibold text-white text-sm mb-2">{label}</h3>
                <p className="font-body text-slate text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/services/gutter-repairs"
            className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm hover:text-gold-light transition-colors duration-200"
          >
            View all gutter repair services
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. GUTTER INSTALLATION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-navy-800" aria-labelledby="gutter-installation-heading">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <SectionLabel className="mb-3">Service</SectionLabel>
            <h2
              id="gutter-installation-heading"
              className="font-display font-bold text-white text-3xl mb-4"
            >
              Gutter Installation in {location.city}, CA
            </h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="font-body text-slate leading-relaxed text-base mb-6">
                {location.gutterServices.installation}
              </p>
              <p className="font-body text-slate leading-relaxed text-base mb-8">
                Every installation includes a written warranty on labor and materials. We
                fabricate on-site, so there are no standard lengths cut to approximate fit — your
                gutters are made for your specific roofline, eliminating the seam joints where most
                leaks originate.
              </p>
              <Link
                href="/services/gutter-installation"
                className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm hover:text-gold-light transition-colors duration-200"
              >
                View gutter installation options
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-navy-900 border border-navy-700 rounded-2xl p-6">
              <h3 className="font-body font-semibold text-gold text-xs uppercase tracking-wide mb-5">
                Installation Options
              </h3>
              <div className="space-y-4">
                {[
                  { profile: '5-Inch K-Style', detail: 'Standard for most single and two-story homes; ideal for moderate debris and rainfall.' },
                  { profile: '6-Inch K-Style', detail: 'Recommended for large roof areas, high-pitch rooflines, or heavy debris environments.' },
                  { profile: '4–5 Inch Half-Round', detail: 'Period-appropriate for Victorian, Edwardian, and craftsman homes.' },
                  { profile: 'Copper Gutters', detail: 'Premium option — develops a natural patina and lasts 50+ years.' },
                  { profile: 'Heavy-Gauge Aluminum (.027 / .032)', detail: '25+ color options to match your trim; standard on all our installations.' },
                ].map(({ profile, detail }) => (
                  <div key={profile} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                    <div>
                      <span className="font-body font-semibold text-white text-sm">{profile} </span>
                      <span className="font-body text-slate text-sm">{detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <InlineCTA city={location.city} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. GUARDS + DOWNSPOUTS (2-column)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-navy-950" aria-labelledby="guards-downspouts-heading">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <SectionLabel className="mb-3">Services</SectionLabel>
            <h2
              id="guards-downspouts-heading"
              className="font-display font-bold text-white text-3xl mb-4"
            >
              Gutter Guards &amp; Downspout Services in {location.city}
            </h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceDeepCard
              id="gutter-guard"
              icon={IconShield}
              title="Gutter Guard Installation"
              localParagraph={location.gutterServices.guards}
              bullets={[
                'Micro-mesh systems block pine needles and fine debris',
                'Reverse-curve guards for leaf-heavy environments',
                'Aluminum guard systems rated for California\'s temperature extremes',
                'Reduces cleaning frequency — often to once annually',
                'Repair or replacement of existing failing guard systems',
              ]}
              linkLabel="Learn about gutter guard options"
            />

            <ServiceDeepCard
              id="gutter-cleaning"
              icon={IconDownspout}
              title="Downspout Cleaning & Repair"
              localParagraph={location.gutterServices.downspouts}
              bullets={[
                'High-pressure flush from top inlet to ground discharge',
                'Mechanical snaking for compacted debris blockages',
                'Bracket re-attachment and additional bracket installation',
                'Elbow replacement for clogged or damaged sections',
                'Downspout extensions to move discharge from foundation',
                'Underground drain connection inspection',
              ]}
              linkLabel="View downspout services"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. WARNING SIGNS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-navy-900" aria-labelledby="warning-signs-heading">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <SectionLabel className="mb-3">Warning Signs</SectionLabel>
            <h2
              id="warning-signs-heading"
              className="font-display font-bold text-white text-3xl mb-4"
            >
              Signs Your {location.city} Gutters Need Service Now
            </h2>
            <GoldDivider />
          </div>

          <p className="font-body text-slate text-base leading-relaxed mb-8 max-w-3xl">
            {location.environment} Don&rsquo;t wait for visible water damage inside your home. These
            warning signs mean your gutters need professional attention.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10" role="list">
            <WarnSign
              label="Water overflowing during rain."
              desc="Gutters are blocked and cannot handle the volume reaching them from your roof."
            />
            <WarnSign
              label="Sagging or pulling away from the roofline."
              desc="Debris weight and standing water are overstressing the hanger system."
            />
            <WarnSign
              label="Staining streaks on your siding."
              desc="Overflow is running down the face of your home, leaving mineral and organic deposits."
            />
            <WarnSign
              label="Mold or dark streaks below the gutter."
              desc="Persistent moisture is escaping the trough and contacting exterior wall surfaces."
            />
            <WarnSign
              label="Plants growing in the gutter."
              desc="Seeds have taken root in compacted organic debris — a major and long-standing blockage."
            />
            <WarnSign
              label="Pooling water near your foundation."
              desc="Downspouts are blocked or discharging too close to the structure on flat ground."
            />
            <WarnSign
              label="It's been more than 6 months since cleaning."
              desc="Debris has had time to pack down and compact — don't skip the fall cleaning."
            />
            <WarnSign
              label="Pest activity near the roofline."
              desc="Standing water and organic debris in gutters attract mosquitoes, rodents, and birds."
            />
          </ul>

          <InlineCTA city={location.city} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. OUR PROCESS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-navy-800" aria-labelledby="process-heading">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <SectionLabel className="mb-3">How It Works</SectionLabel>
            <h2
              id="process-heading"
              className="font-display font-bold text-white text-3xl mb-4"
            >
              Our Gutter Cleaning Process in {location.city}
            </h2>
            <GoldDivider />
          </div>

          <div>
            <ProcessStep
              n={1}
              title="On-Site Assessment"
              desc={`Our technician walks your entire property and inspects every accessible gutter section, downspout, and drainage outlet before touching a ladder. We identify blockage points, damage, pitch problems, and any structural concerns specific to your ${location.city} property.`}
            />
            <ProcessStep
              n={2}
              title="Before-Photo Documentation"
              desc="We photograph the condition of your gutters before work begins. You see exactly what the problem was before we fixed it."
            />
            <ProcessStep
              n={3}
              title="Manual Debris Removal"
              desc="All debris is removed by hand, section by section, and placed directly in bags — not blown onto your roof or dropped into your landscaping. This includes leaves, needles, seed pods, moss, bird nesting material, shingle grit, and compacted organic matter."
            />
            <ProcessStep
              n={4}
              title="Gutter Trough Flush"
              desc="Each section is flushed with water from the high end toward the outlet. This clears fine particulate, tests drainage slope, and reveals any areas holding standing water that indicate pitch problems."
            />
            <ProcessStep
              n={5}
              title="Downspout Clearing"
              desc="Every downspout is flushed from the top inlet to ground discharge. Stubborn blockages are cleared mechanically. We confirm full, unobstructed flow through every downspout before leaving."
            />
            <ProcessStep
              n={6}
              title="Inspection Report"
              desc="With gutters clean and flushed, we inspect all hangers, seams, end caps, outlets, and downspout connections. Any damage found is photographed and reported with a clear description and cost — no obligation to proceed."
            />
            <ProcessStep
              n={7}
              title="Clean Departure"
              desc="All debris bags are removed from your property. We leave no mess behind. You receive a completion summary with after photos and confirmation that your gutters are flowing properly."
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          9. WHY CHOOSE US
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-navy-950" aria-labelledby="why-us-heading">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <SectionLabel className="mb-3">Why Top Down</SectionLabel>
            <h2
              id="why-us-heading"
              className="font-display font-bold text-white text-3xl mb-4"
            >
              Why {location.city} Homeowners Choose Us
            </h2>
            <GoldDivider className="mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Licensed & Fully Insured',
                desc: 'We carry full general liability and workers\' compensation insurance on all employees. You are never exposed to liability when our crew is on your property. Certificate available on request.',
              },
              {
                title: 'Gutter Specialists Only',
                desc: 'We specialize in gutter systems — cleaning, repair, installation, and guards. That focus means deeper expertise, faster diagnosis, and better long-term results than a general handyman service.',
              },
              {
                title: `Local ${location.city} Knowledge`,
                desc: `We work in ${location.city} and ${location.county} daily. We know the local tree species, the debris calendar, the common failure patterns on local housing stock, and what your gutters face through each season.`,
              },
              {
                title: 'No Subcontractors',
                desc: 'Every technician is a direct Top Down Gutter & Windows employee, trained to our standards and familiar with Northern California conditions. We never hand your job to a third party.',
              },
              {
                title: 'Flat-Rate Transparent Pricing',
                desc: 'You receive a firm quote before we start. The price we quote is the price you pay. No surprise add-ons discovered mid-job, no fees added at invoice.',
              },
              {
                title: 'Same-Day & Emergency Service',
                desc: `We hold capacity for urgent ${location.city} jobs. A leaking gutter during an active storm, overflow damaging your foundation, or pre-storm preparation — we move fast when it matters.`,
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-navy-800 border border-navy-700 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <h3 className="font-body font-semibold text-white text-sm">{title}</h3>
                </div>
                <p className="font-body text-slate text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          10. ALL SERVICES GRID
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-navy-900" aria-labelledby="all-services-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel className="mb-3">Complete Service Menu</SectionLabel>
            <h2
              id="all-services-heading"
              className="font-display font-bold text-white text-3xl mb-4"
            >
              All Services Available in {location.city}
            </h2>
            <GoldDivider className="mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-navy-800 border border-navy-700 rounded-xl p-5 hover:border-gold/50 transition-all duration-300 flex items-start gap-4"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-body font-semibold text-white text-base group-hover:text-gold transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="font-body text-slate text-sm mt-1 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          11. LOCAL ENVIRONMENT + COMMON ISSUES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-navy-800" aria-labelledby="environment-heading">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <SectionLabel className="mb-3">Local Knowledge</SectionLabel>
            <h2
              id="environment-heading"
              className="font-display font-bold text-white text-3xl mb-4"
            >
              Why {location.city} Homes Have Demanding Gutter Needs
            </h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {location.commonIssues.map((issue, i) => (
              <div
                key={i}
                className="bg-navy-900 border border-navy-700 border-t-2 border-t-gold rounded-xl p-6"
              >
                <h3 className="font-body font-semibold text-white text-base mb-3">{issue.title}</h3>
                <p className="font-body text-slate text-sm leading-relaxed">{issue.description}</p>
              </div>
            ))}
          </div>

          <InlineCTA city={location.city} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          12. NEIGHBORHOODS & AREAS WE SERVE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-navy-950" aria-labelledby="neighborhoods-heading">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <SectionLabel className="mb-3">Coverage Area</SectionLabel>
            <h2
              id="neighborhoods-heading"
              className="font-display font-bold text-white text-3xl mb-4"
            >
              {location.city} Neighborhoods &amp; Areas We Serve
            </h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="font-body font-semibold text-gold text-xs uppercase tracking-wide mb-4">
                {location.city} Neighborhoods
              </h3>
              <ul className="space-y-2" role="list">
                {location.neighborhoods.map((neighborhood) => (
                  <li key={neighborhood} className="flex items-center gap-3 font-body text-slate text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                    {neighborhood}
                  </li>
                ))}
              </ul>
            </div>

            {nearbyLocationObjects.length > 0 && (
              <div>
                <h3 className="font-body font-semibold text-gold text-xs uppercase tracking-wide mb-4">
                  Nearby Areas &amp; Cities We Also Serve
                </h3>
                <ul className="space-y-2" role="list">
                  {nearbyLocationObjects.map((nearby) => (
                    <li key={nearby.slug}>
                      <Link
                        href={`/locations/${nearby.slug}`}
                        className="flex items-center gap-3 font-body text-slate text-sm hover:text-gold transition-colors duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                        Gutter Cleaning {nearby.city}, {nearby.stateAbbr} &mdash; {nearby.county}
                      </Link>
                    </li>
                  ))}
                  {/* non-linked nearby cities not yet in locations data */}
                  {location.nearbyCities
                    .filter((nc) => !nearbyLocationObjects.find((l) => l.city === nc))
                    .map((nc) => (
                      <li key={nc} className="flex items-center gap-3 font-body text-slate text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                        {nc}, CA
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>

          <div className="bg-navy-800 border border-navy-700 rounded-xl p-5 mb-8">
            <p className="font-body text-slate text-sm leading-relaxed">
              <span className="font-semibold text-white">Searching for gutter cleaning near me</span> in{' '}
              {location.city} or surrounding {location.county}? Top Down Gutter &amp; Windows dispatches
              crews daily across {location.county} and the surrounding Northern California region.
              If you&rsquo;re outside these listed areas, call us — we serve a wide radius and may cover
              your address.
            </p>
          </div>

          <Link
            href="/locations"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold font-body font-semibold px-7 py-3 rounded-full hover:bg-gold/10 transition-colors duration-200"
          >
            View All Northern California Service Areas
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          13. FAQs
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-navy-900" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <SectionLabel className="mb-3">Common Questions</SectionLabel>
            <h2
              id="faq-heading"
              className="font-display font-bold text-white text-3xl mb-4"
            >
              Gutter Service FAQs — {location.city}, CA
            </h2>
            <GoldDivider />
          </div>
          <FAQAccordion faqs={faqs} />
          <p className="mt-8 font-body text-slate text-sm">
            Have a question not answered here?{' '}
            <a href="tel:6143505978" className="text-gold hover:text-gold-light transition-colors duration-200 font-semibold">
              Call (614) 350-5978
            </a>{' '}
            or{' '}
            <Link href="/contact" className="text-gold hover:text-gold-light transition-colors duration-200 font-semibold">
              send us a message
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          14. FINAL CTA STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-gold text-center" aria-labelledby="location-cta-heading">
        <div className="max-w-3xl mx-auto">
          <p
            id="location-cta-heading"
            className="font-display italic font-bold text-navy-900 text-2xl md:text-3xl mb-2"
          >
            Serving {location.city} and all of {location.county}
          </p>
          <p className="font-body text-navy-800 text-sm mb-6">
            Same-day availability &mdash; limited slots &mdash; book now before the season fills up.
          </p>
          <a
            href="tel:6143505978"
            className="font-label text-navy-900 block mb-6"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', letterSpacing: '0.05em' }}
            aria-label="Call Top Down Gutter & Windows at (614) 350-5978"
          >
            (614) 350-5978
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/service-request"
              className="inline-flex items-center gap-2 bg-navy-900 text-white font-body font-semibold px-8 py-3.5 rounded-full hover:bg-navy-800 transition-colors duration-200"
            >
              Schedule Online — Free Estimate
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/services/free-gutter-inspections"
              className="inline-flex items-center gap-2 border-2 border-navy-900 text-navy-900 font-body font-semibold px-8 py-3.5 rounded-full hover:bg-navy-900/10 transition-colors duration-200"
            >
              Book a Free Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

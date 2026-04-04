import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getAllCityServiceCombos,
  getPageData,
  BUSINESS_NAME,
  BUSINESS_URL,
  BUSINESS_PHONE,
  BUSINESS_PHONE_DISPLAY,
} from '@/lib/gutter-seo-data';

// ── TYPES ─────────────────────────────────────────────────────────────────────

interface Props {
  params: Promise<{ city: string; service: string }>;
}

// ── STATIC PARAMS ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllCityServiceCombos().map(({ city, service }) => ({ city, service }));
}

// ── METADATA ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, service } = await params;
  let data;
  try { data = getPageData(city, service); } catch { return { title: 'Not Found', robots: { index: false } }; }

  const keywords = [
    `${service.replace(/-/g, ' ')} ${data.city.name.toLowerCase()} ca`,
    `${service.replace(/-/g, ' ')} ${data.city.name.toLowerCase()} california`,
    `${service.replace(/-/g, ' ')} near me ${data.city.name.toLowerCase()}`,
    `${service.replace(/-/g, ' ')} ${data.city.county.toLowerCase()}`,
    `best ${service.replace(/-/g, ' ')} ${data.city.name.toLowerCase()}`,
    `${data.city.name.toLowerCase()} ${service.replace(/-/g, ' ')} company`,
    `${service.replace(/-/g, ' ')} cost ${data.city.name.toLowerCase()}`,
  ];

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords,
    alternates: { canonical: data.canonicalUrl },
    robots: { index: true, follow: true },
    openGraph: {
      url: data.canonicalUrl,
      title: data.metaTitle,
      description: data.metaDescription,
      siteName: BUSINESS_NAME,
      type: 'website',
      images: [{ url: `${BUSINESS_URL}/opengraph-image`, width: 1200, height: 630, alt: data.h1 }],
    },
    twitter: { card: 'summary_large_image', title: data.metaTitle, description: data.metaDescription },
  };
}

// ── INLINE COMPONENTS (pure RSC) ──────────────────────────────────────────────

function ChevronRight() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
function CheckMark() {
  return (
    <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default async function CityServicePage({ params }: Props) {
  const { city: citySlug, service: serviceSlug } = await params;

  let data;
  try { data = getPageData(citySlug, serviceSlug); } catch { notFound(); }

  const { city, service, h1, quickAnswer, intro, localRelevance, pricingNote, faqs, nearbyTownsCopy, siblingLinks, canonicalUrl } = data;
  const serviceRequestHref = `/service-request?city=${citySlug}&service=${serviceSlug}`;
  const mapsUrl = `https://www.google.com/maps/search/gutter+cleaning+${encodeURIComponent(city.name + ' CA')}`;

  // ── SCHEMA STACK ─────────────────────────────────────────────────────────
  // 1. LocalBusiness — geo-anchored to the served city
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${BUSINESS_URL}/#business`,
    name: BUSINESS_NAME,
    url: BUSINESS_URL,
    telephone: BUSINESS_PHONE,
    email: 'TopDown.GutterAndWindow@gmail.com',
    priceRange: '$$',
    image: `${BUSINESS_URL}/opengraph-image`,
    logo: `${BUSINESS_URL}/icon.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1180 E Lassen Ave',
      addressLocality: 'Chico',
      addressRegion: 'CA',
      postalCode: '95928',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: city.county,
        containedInPlace: { '@type': 'State', name: 'California' },
      },
      geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
      geoRadius: '40000',
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '17:00' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Gutter Services in ${city.name}, CA`,
      itemListElement: [service].map((svc) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `${svc.name} in ${city.name}, CA`,
          description: quickAnswer,
        },
        availability: 'https://schema.org/InStock',
        areaServed: { '@type': 'City', name: city.name },
      })),
    },
    sameAs: ['https://www.facebook.com/topdowngutterandwindows'],
  };

  // 2. Service — with geo-specific offer
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: `${service.name} in ${city.name}, CA`,
    serviceType: service.schemaServiceType,
    description: quickAnswer,
    provider: { '@type': 'LocalBusiness', '@id': `${BUSINESS_URL}/#business`, name: BUSINESS_NAME },
    areaServed: {
      '@type': 'City',
      name: city.name,
      geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: city.county,
        containedInPlace: { '@type': 'State', name: 'California', sameAs: 'https://en.wikipedia.org/wiki/California' },
      },
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${BUSINESS_URL}/service-request`,
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD' },
      areaServed: `${city.name}, ${city.county}, CA`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} Options in ${city.name}`,
    },
  };

  // 3. HowTo — process steps as rich result
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How ${service.name} Works in ${city.name}, CA`,
    description: `Step-by-step ${service.name.toLowerCase()} process for ${city.name} homeowners.`,
    step: service.processSteps.map((s) => ({
      '@type': 'HowToStep',
      position: s.step,
      name: s.title,
      text: s.description,
    })),
    tool: [{ '@type': 'HowToTool', name: 'Professional gutter cleaning equipment' }],
    totalTime: 'PT2H',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', minValue: '99', maxValue: '399' },
  };

  // 4. FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  // 5. BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_URL },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${BUSINESS_URL}/locations` },
      { '@type': 'ListItem', position: 3, name: city.name, item: `${BUSINESS_URL}/locations/${citySlug}` },
      { '@type': 'ListItem', position: 4, name: service.name, item: canonicalUrl },
    ],
  };

  // 6. Place — geo-entity for the served city (AEO entity disambiguation)
  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${BUSINESS_URL}/locations/${citySlug}#place`,
    name: `${city.name}, California`,
    description: `${city.name} is a community in ${city.county}, ${city.region}, California.`,
    geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: 'CA',
      postalCode: city.zipCode,
      addressCountry: 'US',
    },
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: city.county,
      containedInPlace: { '@type': 'State', name: 'California' },
    },
    hasMap: mapsUrl,
  };

  // 7. WebPage — with Speakable spec (AEO / voice search)
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: data.metaTitle,
    description: data.metaDescription,
    isPartOf: { '@type': 'WebSite', '@id': `${BUSINESS_URL}/#website`, name: BUSINESS_NAME, url: BUSINESS_URL },
    about: { '@type': 'Service', '@id': `${canonicalUrl}#service` },
    datePublished: '2026-04-04',
    dateModified: '2026-04-04',
    inLanguage: 'en-US',
    primaryImageOfPage: { '@type': 'ImageObject', url: `${BUSINESS_URL}/opengraph-image` },
    breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#page-h1', '#quick-answer', '#faq-heading'],
      xpath: [
        "//h1[@id='page-h1']",
        "//div[@id='quick-answer']",
      ],
    },
    keywords: `${service.name.toLowerCase()} ${city.name.toLowerCase()} ca, ${service.name.toLowerCase()} ${city.county.toLowerCase()}, gutter service ${city.name.toLowerCase()}`,
    mainEntity: { '@type': 'Service', '@id': `${canonicalUrl}#service` },
  };

  return (
    <>
      {/* ── JSON-LD SCHEMA STACK (7 schemas) ────────────────────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — BREADCRUMB NAV
      ══════════════════════════════════════════════════════════════════════ */}
      <nav aria-label="Breadcrumb" className="bg-navy-950 border-b border-navy-800 px-4 py-3">
        <ol className="max-w-5xl mx-auto flex items-center gap-1.5 flex-wrap font-body text-xs text-slate" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" className="hover:text-gold transition-colors duration-150" itemProp="item"><span itemProp="name">Home</span></Link>
            <meta itemProp="position" content="1" />
          </li>
          <li aria-hidden="true" className="text-navy-600">/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/locations" className="hover:text-gold transition-colors duration-150" itemProp="item"><span itemProp="name">Locations</span></Link>
            <meta itemProp="position" content="2" />
          </li>
          <li aria-hidden="true" className="text-navy-600">/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href={`/locations/${citySlug}`} className="hover:text-gold transition-colors duration-150" itemProp="item"><span itemProp="name">{city.name}</span></Link>
            <meta itemProp="position" content="3" />
          </li>
          <li aria-hidden="true" className="text-navy-600">/</li>
          <li className="text-white font-medium" aria-current="page" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{service.name}</span>
            <meta itemProp="position" content="4" />
          </li>
        </ol>
      </nav>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-navy-950 hero-pattern py-20 px-4 overflow-hidden" aria-labelledby="page-h1">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(201,144,42,0.09) 0%, transparent 60%), radial-gradient(ellipse at center bottom, rgba(6,14,28,0.85) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Geo + region badge */}
          <span className="inline-block font-label text-gold text-xs tracking-[0.18em] uppercase mb-4 px-4 py-1.5 border border-gold/30 rounded-full bg-gold/5">
            {city.county} &mdash; {city.region}, CA
          </span>

          {/* H1 — speakable target */}
          <h1
            id="page-h1"
            className="font-display font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(1.9rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            itemProp="name"
          >
            {h1}
          </h1>

          <p className="font-body text-slate text-sm mb-2">
            Licensed &amp; Insured &nbsp;•&nbsp; Serving {city.county} &nbsp;•&nbsp; Free Estimates
          </p>
          <p className="font-body text-gold/80 text-xs mb-6">
            Call before noon — same-day slots available &nbsp;•&nbsp; Lines open Mon–Sat 7am–7pm
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href={`tel:${BUSINESS_PHONE}`}
              className="inline-flex flex-col items-center justify-center gap-0 bg-gold text-navy-900 font-body font-bold px-8 py-3 rounded-full hover:bg-amber-400 transition-colors duration-200 leading-tight"
            >
              <span className="flex items-center gap-2 text-base">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now — {BUSINESS_PHONE_DISPLAY}
              </span>
              <span className="text-navy-900/70 text-xs font-medium">Same-day available</span>
            </a>
            <Link
              href={serviceRequestHref}
              className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold font-body font-semibold px-8 py-3.5 rounded-full hover:bg-gold/10 transition-colors duration-200"
            >
              Get Free Quote <ChevronRight />
            </Link>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {['Licensed', 'Insured', 'Local Crew', 'Price Match'].map((label) => (
              <span key={label} className="inline-flex items-center gap-1.5 bg-navy-800 border border-navy-700 rounded-full px-4 py-1.5 font-body text-white text-xs font-medium">
                <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M10.28 2.28L4.5 8.06 1.72 5.28A1 1 0 10.28 6.72l3.5 3.5a1 1 0 001.44 0l6.5-6.5a1 1 0 10-1.44-1.44z" />
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          AEO: QUICK ANSWER BOX — featured snippet target, speakable target
          40-60 words, directly answers "What is [service] in [city]?"
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-navy-800 border-y border-gold/20 px-4 py-6" aria-label="Quick answer">
        <div className="max-w-3xl mx-auto flex items-start gap-4">
          <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center" aria-hidden="true">
            <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <div>
            <p className="font-label text-gold text-xs tracking-[0.14em] uppercase mb-1">Quick Answer</p>
            <p
              id="quick-answer"
              className="font-body text-white text-sm leading-relaxed"
              itemProp="description"
            >
              {quickAnswer}
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — INTRO  (primary keyword in first 100 words)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-navy-900" aria-labelledby="intro-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="intro-heading" className="font-display font-bold text-white text-2xl sm:text-3xl mb-6 leading-snug">
            {service.name} Services in {city.name}, CA
          </h2>
          <div className="space-y-5">
            <p className="font-body text-slate leading-relaxed speakable-intro">{intro}</p>
            <p className="font-body text-slate leading-relaxed">{localRelevance}</p>
          </div>

          {/* Geo trust strip */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 font-body text-xs text-slate border border-navy-700 rounded-full px-3 py-1.5">
              <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {city.name}, {city.county}
            </span>
            <span className="inline-flex items-center gap-1.5 font-body text-xs text-slate border border-navy-700 rounded-full px-3 py-1.5">
              <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Licensed &amp; Insured in CA
            </span>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-xs text-slate border border-navy-700 rounded-full px-3 py-1.5 hover:text-gold hover:border-gold/40 transition-colors duration-150"
            >
              <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              View {city.name} on Maps
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — WHY CHOOSE US
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-navy-800" aria-labelledby="why-us-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="why-us-heading" className="font-display font-bold text-white text-2xl sm:text-3xl mb-10 text-center">
            Why {city.name} Homeowners Choose {BUSINESS_NAME}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ...service.benefitPoints,
              `Licensed & fully insured in California — we carry liability and workers' comp`,
              `Price match guarantee — show us a lower written quote and we will match it`,
              `Local ${city.name} crew — familiar with the neighborhoods, trees, and seasonal timing`,
              `Same-week scheduling available — most ${city.name} jobs booked within 5 business days`,
            ].map((point) => (
              <div key={point} className="flex items-start gap-4 bg-navy-900 border border-navy-700 rounded-xl p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mt-0.5">
                  <CheckMark />
                </span>
                <p className="font-body text-slate text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 5 — PROCESS (drives HowTo rich result)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-navy-900" aria-labelledby="process-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="process-heading" className="font-display font-bold text-white text-2xl sm:text-3xl mb-2">
            Our {service.name} Process in {city.name}
          </h2>
          <p className="font-body text-slate text-sm mb-10">
            Every job follows the same systematic process — no shortcuts for any {city.county} home.
          </p>
          <div>
            {service.processSteps.map((step, i) => (
              <div key={step.step} className="flex gap-5" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className="w-9 h-9 rounded-full bg-gold text-navy-900 font-label text-base flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </span>
                  {i < service.processSteps.length - 1 && <span className="flex-1 w-px bg-gold/20 mt-2" />}
                </div>
                <div className="pb-8">
                  <p className="font-body font-semibold text-white text-base mb-1.5" itemProp="name">{step.title}</p>
                  <p className="font-body text-slate text-sm leading-relaxed" itemProp="text">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 6 — PRICING (question-format H2 for AEO)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-navy-800" aria-labelledby="pricing-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="pricing-heading" className="font-display font-bold text-white text-2xl sm:text-3xl mb-6">
            How Much Does {service.name} Cost in {city.name}, CA?
          </h2>
          <p className="font-body text-slate leading-relaxed mb-3">{pricingNote}</p>
          <p className="font-body text-slate leading-relaxed mb-8">
            Factors that affect the final price include linear footage of gutters, roof pitch, debris
            volume and type, access difficulty, and the overall condition of the system. We provide an
            exact written quote before any work begins — no surprises on the invoice.
          </p>
          <Link
            href={serviceRequestHref}
            className="inline-flex items-center gap-2 bg-gold text-navy-900 font-body font-bold px-7 py-3 rounded-full hover:bg-amber-400 transition-colors duration-200"
          >
            Get My Free {city.name} Estimate <ChevronRight />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 7 — SERVICE AREA (geo entity reinforcement)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-navy-900" aria-labelledby="area-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="area-heading" className="font-display font-bold text-white text-2xl sm:text-3xl mb-6">
            Serving {city.name} and Nearby {city.county} Communities
          </h2>
          <p className="font-body text-slate leading-relaxed mb-4">
            {nearbyTownsCopy} We are familiar with the local neighborhoods, housing stock, and
            specific tree species in each of these {city.county} communities — that local knowledge
            translates into faster scheduling and more accurate first-visit quotes.
          </p>
          <p className="font-body text-slate leading-relaxed text-sm">
            {city.name} sits in {city.region} at approximately {city.lat.toFixed(4)}°N,{' '}
            {Math.abs(city.lng).toFixed(4)}°W — our service radius covers all of {city.county} and
            surrounding areas.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 8 — FAQ (pure HTML details/summary; drives FAQPage rich result)
          H2 is speakable target for voice search
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-navy-800" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="font-display font-bold text-white text-2xl sm:text-3xl mb-2">
            {service.name} FAQs — {city.name}, CA
          </h2>
          <p className="font-body text-slate text-sm mb-8">
            Common questions from {city.name} and {city.county} homeowners.
          </p>
          <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-navy-900 border border-navy-700 rounded-xl overflow-hidden"
                itemProp="mainEntity"
                itemScope
                itemType="https://schema.org/Question"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-body font-semibold text-white text-sm hover:text-gold transition-colors duration-150 select-none" itemProp="name">
                  {faq.q}
                  <svg className="w-4 h-4 text-gold flex-shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1 font-body text-slate text-sm leading-relaxed border-t border-navy-700" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <span itemProp="text">{faq.a}</span>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 9 — RELATED GUTTER SERVICES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-navy-900" aria-labelledby="related-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="related-heading" className="font-display font-bold text-white text-2xl sm:text-3xl mb-8">
            More Gutter Services in {city.name}, CA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {siblingLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group bg-navy-800 border border-navy-700 rounded-xl p-6 hover:border-gold/40 hover:shadow-lg hover:shadow-navy-950/50 transition-all duration-300 flex flex-col">
                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-gold transition-colors duration-200">{link.name}</h3>
                <p className="font-body text-slate text-sm leading-relaxed flex-1 mb-4">{link.description}</p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-body font-medium group-hover:gap-2 transition-all duration-200 mt-auto">
                  Learn More <ChevronRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 10 — FINAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-gold" aria-labelledby="final-cta-heading">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block font-label text-navy-900/70 text-xs tracking-[0.18em] uppercase mb-4 px-4 py-1.5 border border-navy-900/20 rounded-full">
            {city.name}, {city.county}
          </span>
          <h2 id="final-cta-heading" className="font-display font-black text-navy-950 text-2xl sm:text-4xl mb-3 leading-tight">
            Don&apos;t Wait — Book {service.name} in {city.name} Today
          </h2>
          <p className="font-body text-navy-900/80 text-base leading-relaxed mb-2">
            Call before noon and we&apos;ll aim to be there same-day. Free no-obligation quote.
          </p>
          <p className="font-label text-navy-900/70 text-xs tracking-wide mb-6">
            Lines open Mon–Sat 7am–7pm &nbsp;•&nbsp; Licensed &amp; insured &nbsp;•&nbsp; Veteran discounts available
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${BUSINESS_PHONE}`} className="inline-flex flex-col items-center justify-center gap-0 bg-navy-950 text-white font-body font-bold px-9 py-3.5 rounded-full hover:bg-navy-800 transition-colors duration-200 leading-tight">
              <span className="flex items-center gap-2 text-base">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now — {BUSINESS_PHONE_DISPLAY}
              </span>
              <span className="text-white/60 text-xs font-medium">Tap to call · Same-day available</span>
            </a>
            <Link href={serviceRequestHref} className="inline-flex items-center justify-center gap-2 border-2 border-navy-950 text-navy-950 font-body font-semibold px-7 py-4 rounded-full hover:bg-navy-950/10 transition-colors duration-200 text-base">
              Schedule Online <ChevronRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

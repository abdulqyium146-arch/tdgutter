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
  return {
    title: location.pageTitle,
    description: location.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      url: canonicalUrl,
      title: location.pageTitle,
      description: location.metaDescription,
      siteName: 'Top Down Gutter & Windows',
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const location = locations.find((loc) => loc.slug === city);

  if (!location) {
    notFound();
  }

  const faqs: FAQ[] = location.faqs;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `https://tdgutterandwindows.com/locations/${location.slug}#business`,
    name: 'Top Down Gutter & Windows',
    description: `Professional gutter cleaning, roof washing, window cleaning, solar panel cleaning & exterior services in ${location.city}, ${location.stateAbbr}. Licensed & insured.`,
    url: `https://tdgutterandwindows.com/locations/${location.slug}`,
    telephone: '+1-614-350-5978',
    email: 'TopDown.GutterAndWindow@gmail.com',
    image: 'https://tdgutterandwindows.com/opengraph-image',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.stateAbbr,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng,
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: { '@type': 'State', name: 'California' },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Exterior Cleaning Services in ${location.city}, CA`,
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.description },
      })),
    },
  };

  const nearbyLocationObjects = locations.filter(
    (loc) => location.nearbyCities.includes(loc.city)
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* ── HERO ── */}
      <section className="relative bg-navy-950 hero-pattern py-24 px-4 overflow-hidden" aria-labelledby="location-hero-heading">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center top, rgba(201,144,42,0.08) 0%, transparent 60%), radial-gradient(ellipse at center bottom, rgba(6,14,28,0.8) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <SectionLabel className="mb-4">{location.county} &mdash; Northern California</SectionLabel>
          <h1
            id="location-hero-heading"
            className="font-display font-black text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.1 }}
          >
            Gutter Cleaning &amp; Exterior Services in{' '}
            <span className="text-gold">{location.city}</span>, CA
          </h1>
          <GoldDivider className="mx-auto mb-6" />
          <p className="font-body text-slate text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {location.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/service-request"
              className="inline-flex items-center gap-2 bg-gold text-navy-900 font-body font-semibold px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors duration-200 text-base"
            >
              Request a Free Estimate
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:6143505978"
              className="inline-flex items-center gap-2 border-2 border-gold text-gold font-body font-semibold px-8 py-3.5 rounded-full hover:bg-gold/10 transition-colors duration-200 text-base"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (614) 350-5978
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES IN THIS CITY ── */}
      <section className="py-20 px-4 bg-navy-900" aria-labelledby="city-services-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel className="mb-3">What We Offer</SectionLabel>
            <h2 id="city-services-heading" className="font-display font-bold text-white text-3xl mb-4">
              Services We Offer in {location.city}
            </h2>
            <GoldDivider className="mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-navy-800 border border-navy-700 rounded-xl p-5 hover:border-gold/50 hover:bg-navy-800 transition-all duration-300 flex items-start gap-4"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* ── WHY THIS CITY NEEDS PROFESSIONAL CARE ── */}
      <section className="py-20 px-4 bg-navy-800" aria-labelledby="environment-heading">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <SectionLabel className="mb-3">Local Knowledge</SectionLabel>
            <h2 id="environment-heading" className="font-display font-bold text-white text-3xl mb-4">
              Why {location.city} Homes Need Professional Care
            </h2>
            <GoldDivider />
          </div>
          <p className="font-body text-slate leading-relaxed text-lg mb-12">{location.environment}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {location.commonIssues.map((issue, i) => (
              <div key={i} className="bg-navy-900 border border-navy-700 border-t-2 border-t-gold rounded-xl p-6">
                <h3 className="font-body font-semibold text-white text-base mb-3">{issue.title}</h3>
                <p className="font-body text-slate text-sm leading-relaxed">{issue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOODS & NEARBY CITIES ── */}
      <section className="py-20 px-4 bg-navy-950" aria-labelledby="neighborhoods-heading">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <SectionLabel className="mb-3">Coverage Area</SectionLabel>
            <h2 id="neighborhoods-heading" className="font-display font-bold text-white text-3xl mb-4">
              Neighborhoods We Serve in {location.city}
            </h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-body font-semibold text-gold text-sm uppercase tracking-wide mb-4">
                {location.city} Neighborhoods
              </h3>
              <ul className="space-y-2">
                {location.neighborhoods.map((neighborhood) => (
                  <li key={neighborhood} className="flex items-center gap-3 font-body text-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                    {neighborhood}
                  </li>
                ))}
              </ul>
            </div>

            {nearbyLocationObjects.length > 0 && (
              <div>
                <h3 className="font-body font-semibold text-gold text-sm uppercase tracking-wide mb-4">
                  Nearby Areas We Also Serve
                </h3>
                <ul className="space-y-2">
                  {nearbyLocationObjects.map((nearby) => (
                    <li key={nearby.slug}>
                      <Link
                        href={`/locations/${nearby.slug}`}
                        className="flex items-center gap-3 font-body text-slate hover:text-gold transition-colors duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                        {nearby.city}, {nearby.stateAbbr} &mdash; {nearby.county}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/locations"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold font-body font-semibold px-7 py-3 rounded-full hover:bg-gold/10 transition-colors duration-200"
          >
            View All Northern California Service Areas
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 px-4 bg-navy-900" aria-labelledby="location-faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <SectionLabel className="mb-3">Common Questions</SectionLabel>
            <h2 id="location-faq-heading" className="font-display font-bold text-white text-3xl mb-4">
              {location.city} FAQs
            </h2>
            <GoldDivider />
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-16 px-4 bg-gold text-center" aria-labelledby="location-cta-heading">
        <div className="max-w-3xl mx-auto">
          <p id="location-cta-heading" className="font-display italic font-bold text-navy-900 text-2xl md:text-3xl mb-4">
            Serving {location.city} and all of {location.county}
          </p>
          <a
            href="tel:6143505978"
            className="font-label text-navy-900 block mb-6"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', letterSpacing: '0.05em' }}
            aria-label="Call us at (614) 350-5978"
          >
            (614) 350-5978
          </a>
          <Link
            href="/service-request"
            className="inline-flex items-center gap-2 bg-navy-900 text-white font-body font-semibold px-8 py-3.5 rounded-full hover:bg-navy-800 transition-colors duration-200"
          >
            Schedule Online
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

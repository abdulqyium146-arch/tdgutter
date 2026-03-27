import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { serviceContent } from '@/lib/serviceContent';
import { services } from '@/lib/services';
import { locations } from '@/lib/locations';
import FAQAccordion from '@/components/FAQAccordion';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';
import type { FAQ } from '@/lib/faqs';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = serviceContent.find((s) => s.slug === slug);
  if (!content) return { title: 'Service Not Found', robots: { index: false } };
  const canonicalUrl = `https://tdgutterandwindows.com/services/${slug}`;

  const keywords = [
    ...locations.map((loc) => `${content.pageTitle.split('|')[0].trim().toLowerCase()} ${loc.city.toLowerCase()} ca`),
    `${content.pageTitle.split('|')[0].trim().toLowerCase()} northern california`,
    `${content.pageTitle.split('|')[0].trim().toLowerCase()} chico redding oroville`,
    `top down gutter ${slug.replace(/-/g, ' ')}`,
  ];

  return {
    title: content.pageTitle,
    description: content.metaDescription,
    keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      url: canonicalUrl,
      title: content.pageTitle,
      description: content.metaDescription,
      siteName: 'Top Down Gutter & Windows',
      type: 'website',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: content.headline,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.pageTitle,
      description: content.metaDescription,
      images: ['/opengraph-image'],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const content = serviceContent.find((s) => s.slug === slug);
  const service = services.find((s) => s.id === slug);

  if (!content || !service) {
    notFound();
  }

  const relatedServices = services.filter((s) => content.relatedServiceIds.includes(s.id));
  const faqs: FAQ[] = content.faqs;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: content.intro,
    url: `https://tdgutterandwindows.com/services/${slug}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.service-intro'],
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Top Down Gutter & Windows',
      url: 'https://tdgutterandwindows.com',
      telephone: '+1-614-350-5978',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1180 E Lassen Ave',
        addressLocality: 'Chico',
        addressRegion: 'CA',
        postalCode: '95928',
        addressCountry: 'US',
      },
    },
    areaServed: locations.map((loc) => ({
      '@type': 'City',
      name: loc.city,
      containedInPlace: { '@type': 'State', name: 'California' },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

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
        name: 'Services',
        item: 'https://tdgutterandwindows.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://tdgutterandwindows.com/services/${slug}`,
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How ${service.title} Works`,
    description: content.intro,
    step: content.processSteps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.step,
      text: step.description,
    })),
    tool: [{ '@type': 'HowToTool', name: 'Professional exterior cleaning equipment' }],
    supply: [{ '@type': 'HowToSupply', name: 'Biodegradable cleaning solutions' }],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://tdgutterandwindows.com/services/${slug}#webpage`,
    url: `https://tdgutterandwindows.com/services/${slug}`,
    name: content.pageTitle,
    isPartOf: { '@id': 'https://tdgutterandwindows.com/#website' },
    about: { '@id': 'https://tdgutterandwindows.com/#organization' },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://tdgutterandwindows.com/opengraph-image',
    },
    datePublished: '2025-03-20',
    dateModified: '2026-03-27',
    inLanguage: 'en-US',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tdgutterandwindows.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://tdgutterandwindows.com/services' },
        {
          '@type': 'ListItem',
          position: 3,
          name: service.title,
          item: `https://tdgutterandwindows.com/services/${slug}`,
        },
      ],
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: service.title,
    description: content.intro,
    brand: { '@id': 'https://tdgutterandwindows.com/#organization' },
    category: 'Home Services > Exterior Cleaning',
    url: `https://tdgutterandwindows.com/services/${slug}`,
    image: 'https://tdgutterandwindows.com/opengraph-image',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      areaServed: locations.map((loc) => ({
        '@type': 'City',
        name: loc.city,
        containedInPlace: { '@type': 'State', name: 'California' },
      })),
      seller: { '@id': 'https://tdgutterandwindows.com/#organization' },
      url: 'https://tdgutterandwindows.com/service-request',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        valueAddedTaxIncluded: false,
        description: content.pricingNote,
      },
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Service Area', value: 'Northern California' },
      { '@type': 'PropertyValue', name: 'Licensed & Insured', value: 'Yes' },
      { '@type': 'PropertyValue', name: 'Free Inspection', value: 'Yes' },
    ],
  };

  const serviceChannelSchema = {
    '@context': 'https://schema.org',
    '@type': 'ServiceChannel',
    name: `Book ${service.title} Online`,
    serviceUrl: 'https://tdgutterandwindows.com/service-request',
    servicePhone: '+1-614-350-5978',
    availableLanguage: { '@type': 'Language', name: 'English' },
    processingTime: 'P1D',
    providesService: {
      '@type': 'Service',
      name: service.title,
      provider: { '@id': 'https://tdgutterandwindows.com/#organization' },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceChannelSchema) }} />

      {/* ── HERO ── */}
      <section className="relative bg-navy-950 hero-pattern py-24 px-4 overflow-hidden" aria-labelledby="service-hero-heading">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center top, rgba(201,144,42,0.08) 0%, transparent 60%), radial-gradient(ellipse at center bottom, rgba(6,14,28,0.8) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <SectionLabel className="mb-4">Northern California</SectionLabel>
          <h1
            id="service-hero-heading"
            className="font-display font-black text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.1 }}
          >
            {content.headline}
          </h1>
          <GoldDivider className="mx-auto mb-6" />
          <p className="service-intro font-body text-slate text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {content.intro}
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

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 px-4 bg-navy-900" aria-labelledby="included-heading">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <SectionLabel className="mb-3">Every Job Includes</SectionLabel>
            <h2 id="included-heading" className="font-display font-bold text-white text-3xl mb-4">
              What&apos;s Included with {service.title}
            </h2>
            <GoldDivider />
          </div>
          <ul className="space-y-4">
            {content.included.map((item, i) => (
              <li key={i} className="flex items-start gap-4 bg-navy-800 border border-navy-700 rounded-xl p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-body text-slate leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="py-20 px-4 bg-navy-800" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <SectionLabel className="mb-3">How We Work</SectionLabel>
            <h2 id="process-heading" className="font-display font-bold text-white text-3xl mb-4">
              Our {service.title} Process
            </h2>
            <GoldDivider />
          </div>
          <div className="space-y-6">
            {content.processSteps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <span className="font-label text-navy-900 text-xl">{i + 1}</span>
                </div>
                <div className="bg-navy-900 border border-navy-700 rounded-xl p-6 flex-1">
                  <h3 className="font-body font-semibold text-white text-lg mb-2">{step.step}</h3>
                  <p className="font-body text-slate leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-20 px-4 bg-navy-900" aria-labelledby="why-heading">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <SectionLabel className="mb-3">Why It Matters</SectionLabel>
            <h2 id="why-heading" className="font-display font-bold text-white text-3xl mb-4">
              The Cost of Neglect
            </h2>
            <GoldDivider />
          </div>
          <div className="bg-navy-800 border-l-4 border-gold rounded-xl p-8 mb-8">
            <p className="font-body text-slate leading-relaxed text-lg">{content.whyItMatters}</p>
          </div>
          <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
            <h3 className="font-body font-semibold text-gold text-base mb-3 uppercase tracking-wide">Pricing Factors</h3>
            <p className="font-body text-slate leading-relaxed">{content.pricingNote}</p>
          </div>
        </div>
      </section>

      {/* ── AREAS WE SERVE ── */}
      <section className="py-20 px-4 bg-navy-950" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel className="mb-3">Where We Work</SectionLabel>
            <h2 id="areas-heading" className="font-display font-bold text-white text-3xl mb-4">
              {service.title} in Northern California
            </h2>
            <GoldDivider className="mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group bg-navy-900 border border-navy-700 rounded-xl p-5 hover:border-gold/50 hover:bg-navy-800 transition-all duration-300"
              >
                <p className="font-body font-semibold text-white group-hover:text-gold transition-colors duration-200 text-base">
                  {loc.city}
                </p>
                <p className="font-body text-slate text-sm mt-1">{loc.county}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      {relatedServices.length > 0 && (
        <section className="py-20 px-4 bg-navy-900" aria-labelledby="related-heading">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <SectionLabel className="mb-3">You May Also Need</SectionLabel>
              <h2 id="related-heading" className="font-display font-bold text-white text-3xl mb-4">
                Related Services
              </h2>
              <GoldDivider />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/services/${rel.id}`}
                  className="group bg-navy-800 border border-navy-700 border-l-4 border-l-navy-700 rounded-xl p-6 hover:border-l-gold hover:shadow-lg hover:shadow-navy-950/50 transition-all duration-300"
                >
                  <h3 className="font-body font-semibold text-white text-lg mb-2 group-hover:text-gold transition-colors duration-200">
                    {rel.title}
                  </h3>
                  <p className="font-body text-slate text-sm leading-relaxed line-clamp-3">{rel.description}</p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-body font-medium mt-4 group-hover:gap-2 transition-all duration-200">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQs ── */}
      <section className="py-20 px-4 bg-navy-800" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <SectionLabel className="mb-3">Common Questions</SectionLabel>
            <h2 id="faq-heading" className="font-display font-bold text-white text-3xl mb-4">
              {service.title} FAQs
            </h2>
            <GoldDivider />
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-16 px-4 bg-gold text-center" aria-labelledby="service-cta-heading">
        <div className="max-w-3xl mx-auto">
          <p id="service-cta-heading" className="font-display italic font-bold text-navy-900 text-2xl md:text-3xl mb-4">
            Ready to schedule your {service.title.toLowerCase()}?
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

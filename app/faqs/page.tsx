import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';
import { faqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'FAQs — Gutter Cleaning, Roof Washing & More',
  description:
    'Answers to common questions about gutter cleaning, roof washing, window cleaning, pricing, service areas, veteran discounts and more from Top Down Gutter & Windows in Chico, CA.',
  alternates: { canonical: 'https://tdgutterandwindows.com/faqs' },
  openGraph: {
    url: 'https://tdgutterandwindows.com/faqs',
    title: 'FAQs — Gutter Cleaning, Roof Washing & More | Top Down Gutter & Windows',
    description: 'Common questions answered — gutter cleaning, roof washing, service areas, pricing, and veteran discounts.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tdgutterandwindows.com' },
    { '@type': 'ListItem', position: 2, name: 'FAQs', item: 'https://tdgutterandwindows.com/faqs' },
  ],
};

export default function FAQsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="bg-navy-900 min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionLabel className="mb-3">Have Questions?</SectionLabel>
          <h1 className="font-display font-bold text-white text-5xl mb-4">
            Top Down Gutter FAQs
          </h1>
          <GoldDivider className="mx-auto mb-4" />
          <p className="font-body text-slate max-w-xl mx-auto">
            Everything you need to know about our services, pricing, and service area.
            Can&apos;t find your answer? Just call us.
          </p>
        </div>

        {/* Accordion */}
        <FAQAccordion faqs={faqs} />

        {/* Bottom CTA */}
        <div className="mt-14 bg-navy-800 border border-navy-700 rounded-2xl p-8 text-center">
          <h2 className="font-display font-bold text-white text-2xl mb-3">
            Still have questions?
          </h2>
          <p className="font-body text-slate mb-6">
            Our team is ready to help. Call us or send a message and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:6198853894"
              className="bg-gold text-navy-900 font-body font-semibold px-7 py-3 rounded-full hover:bg-gold-light transition-colors duration-200 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (619) 885-3894
            </a>
            <Link
              href="/contact"
              className="border-2 border-gold text-gold font-body font-semibold px-7 py-3 rounded-full hover:bg-gold/10 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

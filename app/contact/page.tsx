import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';

export const metadata: Metadata = {
  title: 'Contact Us — Free Estimates | Top Down Gutter & Windows',
  description:
    "Contact Top Down Gutter & Windows in Chico, CA. Request a free estimate for gutter cleaning, roof washing, window cleaning & more. We respond within 24 hours. Call (614) 350-5978.",
  keywords: [
    'contact top down gutter windows',
    'free gutter inspection chico ca',
    'gutter cleaning estimate northern california',
    'schedule gutter cleaning chico',
    'exterior cleaning quote redding oroville',
  ],
  alternates: { canonical: 'https://tdgutterandwindows.com/contact' },
  openGraph: {
    type: 'website',
    url: 'https://tdgutterandwindows.com/contact',
    title: 'Contact Top Down Gutter & Windows — Free Estimates',
    description: 'Contact Top Down Gutter & Windows for a free estimate on gutter cleaning, roof washing, window cleaning and exterior services in Northern California.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Contact Top Down Gutter & Windows — Chico, CA' }],
    siteName: 'Top Down Gutter & Windows',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Top Down Gutter & Windows — Free Estimates',
    description: 'Request a free gutter cleaning or exterior cleaning estimate in Northern California. We respond within 24 hours.',
    images: ['/opengraph-image'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tdgutterandwindows.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://tdgutterandwindows.com/contact' },
  ],
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://tdgutterandwindows.com/contact#webpage',
  url: 'https://tdgutterandwindows.com/contact',
  name: 'Contact Top Down Gutter & Windows — Free Estimates',
  isPartOf: { '@id': 'https://tdgutterandwindows.com/#website' },
  about: { '@id': 'https://tdgutterandwindows.com/#organization' },
  description:
    'Contact Top Down Gutter & Windows for a free estimate on gutter cleaning, roof washing, window cleaning and exterior services in Northern California.',
  datePublished: '2025-03-20',
  dateModified: '2026-03-27',
  inLanguage: 'en-US',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Top Down Gutter & Windows',
    telephone: '+1-614-350-5978',
    email: 'TopDown.GutterAndWindow@gmail.com',
    openingHoursSpecification: [
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
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
    <div className="bg-navy-900 min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionLabel className="mb-3">Get In Touch</SectionLabel>
          <h1 className="font-display font-bold text-white text-5xl mb-4">Contact Us</h1>
          <GoldDivider className="mx-auto mb-4" />
          <p className="font-body text-slate max-w-lg mx-auto">
            Have a question or ready to schedule? Fill out the form below and we&apos;ll be
            in touch within 24 hours.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 bg-navy-800 border border-navy-700 rounded-2xl p-8">
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Phone */}
            <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body font-semibold text-white text-sm mb-1">Phone</p>
                  <a
                    href="tel:6143505978"
                    className="font-body text-gold text-xl font-semibold hover:underline"
                  >
                    (614) 350-5978
                  </a>
                  <p className="font-body text-slate text-xs mt-1">Mon–Sat, 7am–7pm</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="font-body font-semibold text-white text-sm mb-1">Email</p>
                  <a
                    href="mailto:TopDown.GutterAndWindow@gmail.com"
                    className="font-body text-gold text-sm hover:underline break-all"
                  >
                    TopDown.GutterAndWindow@gmail.com
                  </a>
                  <p className="font-body text-slate text-xs mt-1">Response within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Service area */}
            <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body font-semibold text-white text-sm mb-2">Service Area</p>
                  <p className="font-body text-slate text-xs leading-relaxed">
                    Redding • Red Bluff • Orland • Chico • Oroville • Paradise • Grass Valley • Yuba City
                  </p>
                </div>
              </div>
            </div>

            {/* Veteran badge */}
            <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <p className="font-body font-semibold text-gold text-sm">Veteran &amp; First Responder Discount</p>
              </div>
              <p className="font-body text-slate text-xs leading-relaxed">
                Mention your service status when you reach out — we&apos;re proud to offer exclusive
                discounts to those who serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

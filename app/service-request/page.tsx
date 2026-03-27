import type { Metadata } from 'next';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';

export const metadata: Metadata = {
  title: 'Request a Free Estimate | Top Down Gutter & Windows — Northern California',
  description:
    'Submit a service request for gutter cleaning, roof washing, window cleaning, or any Northern California exterior cleaning service. Free estimates. Veteran discounts available.',
  keywords: [
    'request gutter cleaning estimate chico ca',
    'free exterior cleaning quote northern california',
    'schedule gutter cleaning redding oroville',
    'book roof washing northern california',
    'gutter inspection request chico',
  ],
  alternates: { canonical: 'https://tdgutterandwindows.com/service-request' },
  openGraph: {
    type: 'website',
    url: 'https://tdgutterandwindows.com/service-request',
    title: 'Request a Free Estimate | Top Down Gutter & Windows — Northern California',
    description: 'Request a free estimate for gutter cleaning, roof washing, window cleaning and exterior services in Northern California. We respond within 24 hours.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Request a Free Exterior Cleaning Estimate — Top Down Gutter & Windows' }],
    siteName: 'Top Down Gutter & Windows',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request a Free Estimate | Top Down Gutter & Windows — Northern California',
    description: 'Free estimates on gutter cleaning, roof washing, window cleaning and more in Northern California. Respond within 24 hours.',
    images: ['/opengraph-image'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tdgutterandwindows.com' },
    { '@type': 'ListItem', position: 2, name: 'Service Request', item: 'https://tdgutterandwindows.com/service-request' },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Request a Free Gutter Cleaning Estimate — Northern California',
  url: 'https://tdgutterandwindows.com/service-request',
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://tdgutterandwindows.com/service-request',
      inLanguage: 'en',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'Reservation',
      name: 'Free Exterior Cleaning Estimate',
    },
  },
};

export default function ServiceRequestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
    <div className="bg-navy-900 min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <SectionLabel className="mb-3">Book Your Service</SectionLabel>
          <h1 className="font-display font-bold text-white text-5xl mb-4">
            Service Request
          </h1>
          <GoldDivider className="mx-auto mb-4" />
          <p className="font-body text-slate max-w-lg mx-auto">
            Fill out the form below and we&apos;ll contact you within 24 hours to confirm your
            appointment. Free estimates on all services.
          </p>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['Free Estimates', 'Licensed & Insured', 'Price Match Guarantee', 'Veteran Discounts'].map((item) => (
            <span
              key={item}
              className="font-body text-xs font-semibold bg-navy-800 border border-navy-700 text-slate px-4 py-1.5 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Form */}
        <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6 sm:p-8">
          <ServiceRequestForm />
        </div>

        {/* Call option */}
        <div className="mt-8 text-center">
          <p className="font-body text-slate text-sm">
            Prefer to talk?{' '}
            <a href="tel:6143505978" className="text-gold hover:underline font-semibold">
              Call us at (614) 350-5978
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

import type { Metadata } from 'next';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';

export const metadata: Metadata = {
  title: 'Request a Service — Gutter & Window Cleaning | Top Down',
  description:
    'Submit a service request for gutter cleaning, roof washing, window cleaning, or any Northern California exterior cleaning service. Free estimates. Veteran discounts available.',
  alternates: { canonical: 'https://tdgutterandwindows.com/service-request' },
  openGraph: { url: 'https://tdgutterandwindows.com/service-request', title: 'Request a Service — Top Down Gutter & Windows' },
};

export default function ServiceRequestPage() {
  return (
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
            <a href="tel:6198853894" className="text-gold hover:underline font-semibold">
              Call us at (619) 885-3894
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

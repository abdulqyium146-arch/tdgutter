import type { Metadata } from 'next';
import Link from 'next/link';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';

export const metadata: Metadata = {
  title: "Price-Match Guarantee — We Beat Any Competitor | Top Down Gutter",
  description:
    "Top Down Gutter & Windows will match any licensed competitor's price for gutter cleaning, roof washing, window cleaning & more in Northern California. Guaranteed.",
  alternates: { canonical: 'https://tdgutterandwindows.com/price-matching' },
  openGraph: { url: 'https://tdgutterandwindows.com/price-matching', title: "Price-Match Guarantee — Top Down Gutter & Windows" },
};

const steps = [
  {
    num: '01',
    title: 'Get a Competitor Quote',
    description:
      "Collect a written estimate from any licensed, insured competitor for the same service and scope of work at your property. Must be a current, valid quote.",
  },
  {
    num: '02',
    title: 'Share It With Us',
    description:
      "Call us or email the quote to TopDown.GutterAndWindow@gmail.com. We'll review it and verify the scope matches what we'd provide.",
  },
  {
    num: '03',
    title: "We Match It — Guaranteed",
    description:
      "We'll match the competitor's price on the spot. No haggling, no runaround. Same quality work, same professional team, at the price you found.",
  },
];

export default function PriceMatchingPage() {
  return (
    <div className="bg-navy-900 min-h-screen pt-24 pb-20">
      {/* Hero */}
      <div
        className="py-20 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #060E1C 0%, #122040 100%)' }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionLabel className="mb-3">Our Guarantee</SectionLabel>
          <h1 className="font-display font-bold text-white text-5xl md:text-6xl mb-4 leading-tight">
            {"We'll Match Any Competitor's Price —"}{' '}
            <span className="text-gold">Guaranteed</span>
          </h1>
          <GoldDivider className="mx-auto mb-6" />
          <p className="font-body text-slate text-lg max-w-xl mx-auto">
            {"You deserve professional service at a fair price. If you find a lower quote from a licensed, insured competitor, we'll match it."}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* How it works */}
        <section aria-labelledby="steps-heading">
          <div className="text-center mb-12">
            <SectionLabel className="mb-3">How It Works</SectionLabel>
            <h2 id="steps-heading" className="font-display font-bold text-white text-4xl mb-4">
              3 Simple Steps
            </h2>
            <GoldDivider className="mx-auto" />
          </div>

          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex flex-col sm:flex-row items-start gap-6 bg-navy-800 border border-navy-700 rounded-2xl p-7 hover:border-gold/40 transition-colors duration-300"
              >
                <div className="flex-shrink-0">
                  <span
                    className="font-label text-5xl leading-none"
                    style={{ color: 'rgba(201,144,42,0.3)' }}
                  >
                    {step.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">{step.title}</h3>
                  <p className="font-body text-slate leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Policy */}
        <section aria-labelledby="policy-heading" className="bg-navy-800 border border-navy-700 rounded-2xl p-8">
          <SectionLabel className="mb-3">Policy Details</SectionLabel>
          <h2 id="policy-heading" className="font-display font-bold text-white text-3xl mb-4">
            What Our Price Match Covers
          </h2>
          <GoldDivider className="mb-6" />
          <ul className="space-y-4">
            {[
              'Applies to all services we offer — gutter cleaning, roof washing, window cleaning, solar panel cleaning, house washing, and more.',
              'Competitor must be licensed, insured, and actively operating in Northern California.',
              'Quote must be for the same scope, service type, and property.',
              'Competitor quote must be current (within 30 days) and in writing.',
              'Does not apply to promotional codes, seasonal flash sales, or quotes below our cost of materials.',
              'We reserve the right to inspect the property before finalizing the matched price.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-slate">
                <span className="text-gold mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="font-display font-bold text-white text-3xl mb-4">
            Ready to Get the Best Price?
          </h2>
          <p className="font-body text-slate mb-8 max-w-lg mx-auto">
            Call us today or submit a service request. Bring your competitor quote and
            {"we'll match it — simple as that."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6198853894"
              className="bg-gold text-navy-900 font-body font-semibold px-8 py-4 rounded-full hover:bg-gold-light transition-colors duration-200 text-base"
            >
              Call (619) 885-3894
            </a>
            <Link
              href="/service-request"
              className="border-2 border-gold text-gold font-body font-semibold px-8 py-4 rounded-full hover:bg-gold/10 transition-colors duration-200 text-base"
            >
              Submit a Service Request
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

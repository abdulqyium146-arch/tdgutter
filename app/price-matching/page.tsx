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
      "Get a written estimate from any licensed, insured exterior cleaning company operating in Northern California. It needs to cover the same service type and scope at your specific property — apples to apples, not a generic ballpark.",
  },
  {
    num: '02',
    title: 'Share It With Us',
    description:
      "Call (614) 350-5978 or email the quote to TopDown.GutterAndWindow@gmail.com. We'll review the scope and confirm it matches what we'd actually do at your property. This usually takes one conversation.",
  },
  {
    num: '03',
    title: "We Match It — No Runaround",
    description:
      "We match the price. No negotiation theater, no surprise add-ons, no pressure to upsell you past the original scope. You get the same trained crew and the same professional process at the matched rate.",
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
            Finding the right price for exterior cleaning in Northern California shouldn&apos;t require
            three phone calls and two broken promises. If a licensed, insured competitor
            quotes you less for the same job, we match it. No conditions, no negotiation.
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
              'Covers all services we provide — gutter cleaning, roof soft-washing, window cleaning, solar panel cleaning, house washing, gutter guard installation, and more.',
              'The competing company must hold a valid California contractor\'s license, carry general liability insurance, and be actively operating in Northern California.',
              'The quote must be for the identical scope — same service, same linear footage or surface area, same property.',
              'Competitor quote must be in writing and dated within the last 30 days. Screenshots of text or email estimates are accepted.',
              'Does not apply to promotional or coupon pricing, first-time-customer flash sales, or quotes that fall below our verifiable cost of materials and labor.',
              'We may request a brief property review before confirming the matched price on jobs involving unusual access conditions or structural concerns.',
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
            Have a Competitor Quote? Let&apos;s Talk.
          </h2>
          <p className="font-body text-slate mb-8 max-w-lg mx-auto">
            Call us or submit a service request and bring your written quote. We&apos;ll confirm
            scope and match the price — most of the time in one phone call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6143505978"
              className="bg-gold text-navy-900 font-body font-semibold px-8 py-4 rounded-full hover:bg-gold-light transition-colors duration-200 text-base"
            >
              Call (614) 350-5978
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

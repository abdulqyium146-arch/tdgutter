import type { Metadata } from 'next';
import Link from 'next/link';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';

export const metadata: Metadata = {
  title: 'About Us — Top Down Gutter & Windows | Chico, CA',
  description:
    'Learn about Top Down Gutter & Windows — a Northern California exterior cleaning company based in Chico, CA. Built on honest service, veteran pride, and real results. Serving Redding to Yuba City.',
  alternates: { canonical: 'https://tdgutterandwindows.com/about' },
  openGraph: { url: 'https://tdgutterandwindows.com/about', title: 'About Top Down Gutter & Windows — Chico, CA' },
};

const serviceAreas = [
  'Redding', 'Red Bluff', 'Orland', 'Chico',
  'Oroville', 'Paradise', 'Grass Valley', 'Yuba City',
  'Durham', 'Corning', 'Willows', 'Gridley',
  'Marysville', 'Colusa', 'Los Molinos',
];

export default function AboutPage() {
  return (
    <div className="bg-navy-900 min-h-screen pt-24 pb-20">
      {/* Hero strip */}
      <div
        className="py-20 px-4 text-center"
        style={{
          background: 'linear-gradient(135deg, #060E1C 0%, #122040 50%, #0B1628 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionLabel className="mb-3">Our Story</SectionLabel>
          <h1 className="font-display font-bold italic text-white text-5xl md:text-6xl mb-4">
            Built on Service.{' '}
            <span className="text-gold">Driven by Pride.</span>
          </h1>
          <GoldDivider className="mx-auto" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* Company story */}
        <section aria-labelledby="story-heading">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel className="mb-3">Who We Are</SectionLabel>
              <h2 id="story-heading" className="font-display font-bold text-white text-3xl mb-4">
                Northern California&apos;s Exterior Cleaning Experts
              </h2>
              <GoldDivider className="mb-6" />
              <div className="space-y-4 font-body text-slate leading-relaxed">
                <p>
                  Top Down Gutter &amp; Windows was built out of a straightforward frustration:
                  finding a reliable exterior cleaning company in Northern California that
                  didn&apos;t cut corners, pad quotes, or disappear after one season was harder
                  than it should be. So we built one.
                </p>
                <p>
                  We&apos;re based in Chico and cover a wide radius — from Redding and Red Bluff
                  in the north down through the Sacramento Valley to Yuba City and Marysville.
                  Every crew member we put on your roof or near your gutters is someone we
                  trained ourselves and trust to represent us the way we&apos;d want to be treated.
                </p>
                <p>
                  Our double rain gutter washing process, ARMA-aligned soft-wash roof protocols, and
                  deionized water solar cleaning aren&apos;t marketing language — they&apos;re how we
                  actually work, on every job, every time. The results speak for themselves
                  in referrals that have driven most of our growth from the beginning.
                </p>
                <p>
                  In early 2025, part of our team left Northern California to help with relief
                  efforts during the LA fires. We&apos;re grateful for every customer who was
                  patient with us during that time. We&apos;re home now — and fully ready to serve.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '5,000+', label: 'Homes Served' },
                { num: '8+', label: 'Service Areas' },
                { num: '100%', label: 'Licensed & Insured' },
                { num: 'Free', label: 'Inspections' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-navy-800 border border-navy-700 rounded-xl p-6 text-center"
                >
                  <div className="font-display font-black text-gold text-3xl mb-1">{stat.num}</div>
                  <div className="font-body text-slate text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section aria-labelledby="mission-heading" className="bg-navy-800 border border-navy-700 rounded-2xl p-8">
          <SectionLabel className="mb-3">Our Mission</SectionLabel>
          <h2 id="mission-heading" className="font-display font-bold text-white text-3xl mb-4">
            Clean Homes. Honest Prices. Real Service.
          </h2>
          <GoldDivider className="mb-6" />
          <div className="space-y-4 font-body text-slate leading-relaxed">
            <p>
              The Sacramento Valley is a demanding environment for homes. Agricultural dust,
              wildfire smoke, hard water mineral deposits, and concentrated winter rains
              put real stress on gutters, rooflines, siding, and solar panels every year.
              Our job is to stay ahead of that damage cycle — not just respond to it.
            </p>
            <p>
              We don&apos;t upsell services you don&apos;t need, and we don&apos;t send an untrained crew
              to your property to figure it out on the job. We tell you what we found,
              photograph anything worth documenting, and explain what needs to happen
              and why — then we let you decide.
            </p>
            <p>
              We back that approach with our <strong className="text-gold">Price Match Guarantee</strong> —
              if a licensed, insured competitor quotes you less for the same scope of work,
              we&apos;ll match it. Not because we race to the bottom, but because we&apos;re confident
              in the value we deliver at every price point.
            </p>
          </div>
        </section>

        {/* Veterans */}
        <section
          aria-labelledby="veterans-about-heading"
          className="bg-navy-800 border-l-4 border-gold rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #C9902A, #9B6D1A)' }}
              aria-hidden="true"
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <SectionLabel className="mb-2">Veterans &amp; First Responders</SectionLabel>
              <h2 id="veterans-about-heading" className="font-display font-bold text-white text-3xl mb-4">
                Honoring Those Who Serve
              </h2>
              <GoldDivider className="mb-4" />
              <div className="space-y-4 font-body text-slate leading-relaxed">
                <p>
                  Top Down Gutter &amp; Windows offers meaningful discounts to U.S. military veterans,
                  active-duty service members, and first responders — law enforcement, firefighters,
                  and emergency medical personnel. Not a token percentage, but a real reduction
                  on every service we provide.
                </p>
                <p>
                  Northern California has one of the highest concentrations of active and retired
                  military in the state, and our first responder communities here — especially
                  in Butte County after the Camp Fire — have shouldered more than most. This
                  discount is a direct acknowledgment of that, not a marketing line.
                </p>
                <p>
                  Mention your service when you call or submit a request online. That&apos;s it.
                  No forms, no verification process, no fine print. We trust you, and we&apos;re
                  glad you&apos;re here.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-gold text-gold font-body font-semibold px-7 py-3 rounded-full hover:bg-gold/10 transition-colors duration-200 mt-5"
              >
                Contact Us for Your Discount
              </Link>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section aria-labelledby="area-heading">
          <SectionLabel className="mb-3">Where We Work</SectionLabel>
          <h2 id="area-heading" className="font-display font-bold text-white text-3xl mb-4">
            Our Service Area
          </h2>
          <GoldDivider className="mb-6" />
          <p className="font-body text-slate leading-relaxed mb-8">
            We cover a significant radius out of Chico — from Shasta and Tehama counties in the
            north through Glenn, Butte, Colusa, and into Sutter and Yuba counties to the south.
            If you&apos;re not sure whether we reach your area, call us directly. We&apos;d rather
            tell you honestly than have you chase a quote that goes nowhere.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3">
            {serviceAreas.map((city, i) => (
              <span key={`${city}-${i}`} className="font-body text-slate text-sm inline-flex items-center gap-2">
                <span className="text-gold">•</span>
                {city}
              </span>
            ))}
            <span className="font-body text-slate text-sm italic">and surrounding areas</span>
          </div>

          <div className="mt-8 p-5 bg-navy-800 border border-navy-700 rounded-xl">
            <p className="font-body text-slate text-sm">
              <strong className="text-white">Not sure if we serve your area?</strong>{' '}
              Call us at{' '}
              <a href="tel:6143505978" className="text-gold hover:underline">(614) 350-5978</a>
              {' '}and we&apos;ll let you know right away.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

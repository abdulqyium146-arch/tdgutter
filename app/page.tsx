import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import MarqueeBand from '@/components/MarqueeBand';
import TrustBar from '@/components/TrustBar';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';
import { services } from '@/lib/services';
import { locations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Gutter Cleaning & Exterior Washing | Top Down Gutter & Windows — Chico, CA',
  description:
    'Top Down Gutter & Windows serves Chico, Redding, Oroville, Yuba City and Northern California. Gutter cleaning, roof soft-washing, window cleaning, solar panel cleaning — licensed, insured, free inspections.',
  alternates: {
    canonical: 'https://tdgutterandwindows.com',
  },
  openGraph: {
    url: 'https://tdgutterandwindows.com',
    title: 'Gutter Cleaning & Exterior Washing | Top Down Gutter & Windows — Chico, CA',
    description:
      'Gutter cleaning, soft-wash roof cleaning, window washing & solar panel cleaning in Chico, Redding, Oroville, and Yuba City. Licensed & insured. Free inspections.',
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD LocalBusiness Schema — full signal set */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['LocalBusiness', 'ProfessionalService'],
            '@id': 'https://tdgutterandwindows.com/#business',
            name: 'Top Down Gutter & Windows',
            alternateName: 'Top Down Gutter and Window Cleaning Services',
            description:
              'Professional gutter cleaning, roof washing, window cleaning, solar panel cleaning & more — serving Northern California. Licensed & insured. Free inspections.',
            url: 'https://tdgutterandwindows.com',
            telephone: '+1-614-350-5978',
            email: 'TopDown.GutterAndWindow@gmail.com',
            image: 'https://tdgutterandwindows.com/opengraph-image',
            logo: 'https://tdgutterandwindows.com/opengraph-image',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '1180 E Lassen Ave',
              addressLocality: 'Chico',
              addressRegion: 'CA',
              postalCode: '95928',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 39.7285,
              longitude: -121.8375,
            },
            hasMap: 'https://maps.google.com/?q=1180+E+Lassen+Ave,+Chico,+CA+95928',
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
            areaServed: [
              { '@type': 'City', name: 'Redding', containedInPlace: { '@type': 'State', name: 'California' } },
              { '@type': 'City', name: 'Red Bluff', containedInPlace: { '@type': 'State', name: 'California' } },
              { '@type': 'City', name: 'Chico', containedInPlace: { '@type': 'State', name: 'California' } },
              { '@type': 'City', name: 'Oroville', containedInPlace: { '@type': 'State', name: 'California' } },
              { '@type': 'City', name: 'Paradise', containedInPlace: { '@type': 'State', name: 'California' } },
              { '@type': 'City', name: 'Orland', containedInPlace: { '@type': 'State', name: 'California' } },
              { '@type': 'City', name: 'Grass Valley', containedInPlace: { '@type': 'State', name: 'California' } },
              { '@type': 'City', name: 'Yuba City', containedInPlace: { '@type': 'State', name: 'California' } },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Exterior Cleaning Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gutter Cleaning', description: 'Professional double-wash gutter cleaning removing debris, leaf litter and sediment.' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Cleaning', description: 'Safe soft-washing roof cleaning that restores shingle color without voiding warranties.' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Window Cleaning', description: 'Residential and commercial window washing, including hard water stain removal.' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solar Panel Cleaning', description: 'Purified-water solar panel cleaning that maximizes energy output.' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'House Washing', description: 'Soft-wash exterior house cleaning for all siding types.' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gutter Repair', description: 'Troubleshooting, sealing, and realignment of leaking or damaged gutters.' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gutter Installation', description: 'New gutter installation and replacement with quality materials.' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gutter Guard Installation', description: 'Gutter guard installation and repair to prevent clogging.' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Free Gutter Inspection', description: 'No-cost professional gutter inspection to diagnose issues.' } },
              ],
            },
            sameAs: [
              'https://www.facebook.com/p/Top-Down-Gutter-and-Window-Cleaning-Services-61568901527821/',
              'https://www.yelp.com/biz/top-down-gutter-and-windows-chico-4',
              'https://sites.google.com/view/tdgutterandwindows/home',
            ],
          }),
        }}
      />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 bg-navy-950 hero-pattern overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center top, rgba(201,144,42,0.08) 0%, transparent 60%), radial-gradient(ellipse at center bottom, rgba(6,14,28,0.8) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionLabel className="mb-4">
            Chico, CA &mdash; Serving Northern California
          </SectionLabel>

          <h1
            id="hero-heading"
            className="font-display font-black text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.08 }}
          >
            From Roof to Windows,{' '}
            <span className="text-gold">Let Us Clean</span>{' '}
            Your Home From The Top Down
          </h1>

          <p className="font-body text-slate text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Gutter cleaning, soft-wash roof washing, window cleaning, solar panel cleaning &amp; more.
            Serving Redding, Chico, Oroville, Yuba City, and the Sacramento Valley — licensed, insured, and free inspections on every job.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/service-request"
              className="inline-flex items-center gap-2 bg-gold text-navy-900 font-body font-semibold px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors duration-200 text-base"
            >
              Schedule an Estimate
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

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold"
          aria-hidden="true"
          style={{ animation: 'bounce 2s infinite' }}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── MARQUEE BAND ── */}
      <MarqueeBand />

      {/* ── LA FIRES RETURN BANNER ── */}
      <div
        className="py-5 px-4"
        style={{ background: 'linear-gradient(135deg, #1a0a00 0%, #0B1628 100%)' }}
      >
        <div className="max-w-4xl mx-auto flex items-start gap-4 bg-navy-900/50 border border-amber-900/40 rounded-xl p-5">
          <div className="flex-shrink-0 text-amber-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C9.5 6 6 9 6 13a6 6 0 0012 0c0-4-3.5-7-6-11zm0 16a4 4 0 01-4-4c0-2.5 1.8-4.8 3.3-7C12.7 9.2 16 11.5 16 15a4 4 0 01-4 4z"/>
            </svg>
          </div>
          <p className="font-display italic text-amber-200 text-sm leading-relaxed">
            A sincere thank you to every customer who waited patiently while our team was on the ground helping with the 2025 LA fires relief effort.
            We&apos;re back home in Northern California and fully operational — ready to take care of you and your home.
          </p>
        </div>
      </div>

      {/* ── SERVICES SECTION ── */}
      <section className="py-20 px-4 bg-navy-900" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel className="mb-3">What We Do</SectionLabel>
            <h2
              id="services-heading"
              className="font-display font-bold text-white text-4xl mb-4"
            >
              Exterior Cleaning Services in Northern California
            </h2>
            <GoldDivider className="mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section
        className="py-16 px-4 bg-gold text-center"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-3xl mx-auto">
          <p
            id="cta-heading"
            className="font-display italic font-bold text-navy-900 text-2xl md:text-3xl mb-4"
          >
            Call now and schedule an estimate today!
          </p>
          <a
            href="tel:6143505978"
            className="font-label text-navy-900 block animate-pulse-glow mb-6"
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

      {/* ── VETERANS SECTION ── */}
      <section
        className="py-16 px-4 bg-navy-800"
        style={{ borderLeft: '4px solid #C9902A' }}
        aria-labelledby="veterans-heading"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Star badge */}
          <div className="flex-shrink-0">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #C9902A, #9B6D1A)' }}
              aria-hidden="true"
            >
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>
          <div className="text-center md:text-left">
            <SectionLabel className="mb-2">Veterans &amp; First Responders</SectionLabel>
            <h3
              id="veterans-heading"
              className="font-display font-bold text-white text-3xl mb-3"
            >
              Honoring Those Who Serve
            </h3>
            <GoldDivider className="mb-4 mx-auto md:mx-0" />
            <p className="font-body text-slate leading-relaxed mb-6 max-w-xl">
              Top Down Gutter &amp; Windows is a proud supporter of veterans and first responders.
              We offer meaningful discounts to all U.S. military veterans, active-duty service members,
              and first responders — including law enforcement, firefighters, and EMTs.
              Just mention your service when you call or request a quote. No paperwork, no hoops.
              Thank you for everything you do.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-gold text-gold font-body font-semibold px-7 py-3 rounded-full hover:bg-gold/10 transition-colors duration-200"
            >
              Contact Us for Your Discount
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <TrustBar />

      {/* ── AREAS WE SERVE ── */}
      <section className="py-20 px-4 bg-navy-950" aria-labelledby="areas-serve-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel className="mb-3">Where We Work</SectionLabel>
            <h2
              id="areas-serve-heading"
              className="font-display font-bold text-white text-4xl mb-4"
            >
              Serving 8 Communities Across Northern California
            </h2>
            <GoldDivider className="mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group bg-navy-900 border border-navy-700 rounded-xl p-5 hover:border-gold/50 hover:bg-navy-800 transition-all duration-300"
              >
                <p className="font-body font-semibold text-white group-hover:text-gold transition-colors duration-200 text-base mb-1">
                  {loc.city}
                </p>
                <p className="font-body text-slate text-xs mb-3">{loc.county}</p>
                <p className="font-body text-slate-dark text-xs leading-relaxed">
                  {loc.commonIssues[0].title}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 border-2 border-gold text-gold font-body font-semibold px-7 py-3 rounded-full hover:bg-gold/10 transition-colors duration-200"
            >
              View All Service Areas
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom bounce animation */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </>
  );
}

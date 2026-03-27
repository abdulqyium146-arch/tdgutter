import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/services';
import { locations } from '@/lib/locations';
import TrustBar from '@/components/TrustBar';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';

export const metadata: Metadata = {
  title: 'Exterior Cleaning Services in Northern California | Top Down Gutter & Windows',
  description:
    'Gutter cleaning, roof soft-washing, window cleaning, solar panel cleaning, house washing & more in Northern California. Serving Chico, Redding, Oroville, Yuba City & beyond. Licensed & insured. Free inspections.',
  alternates: {
    canonical: 'https://tdgutterandwindows.com/services',
  },
  openGraph: {
    url: 'https://tdgutterandwindows.com/services',
    title: 'Exterior Cleaning Services in Northern California | Top Down Gutter & Windows',
    description:
      'Professional exterior cleaning services across Northern California — gutters, roofs, windows, solar panels, house washing & more. Free inspections.',
    siteName: 'Top Down Gutter & Windows',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-navy-950 hero-pattern py-24 px-4 overflow-hidden" aria-labelledby="services-hub-heading">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center top, rgba(201,144,42,0.08) 0%, transparent 60%), radial-gradient(ellipse at center bottom, rgba(6,14,28,0.8) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <SectionLabel className="mb-4">What We Do</SectionLabel>
          <h1
            id="services-hub-heading"
            className="font-display font-black text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.1 }}
          >
            Our Exterior Cleaning Services in Northern California
          </h1>
          <GoldDivider className="mx-auto mb-6" />
          <p className="font-body text-slate text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            From gutter cleaning and soft-wash roof treatments to window washing, solar panel cleaning, and seamless gutter installation — we are the complete exterior maintenance solution for Northern California homeowners. Licensed, insured, and free inspections on every job.
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

      {/* ── SERVICES GRID ── */}
      <section className="py-20 px-4 bg-navy-900" aria-labelledby="services-grid-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel className="mb-3">All Services</SectionLabel>
            <h2 id="services-grid-heading" className="font-display font-bold text-white text-3xl mb-4">
              Everything We Offer
            </h2>
            <GoldDivider className="mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-navy-800 border border-navy-700 border-l-4 border-l-navy-700 rounded-xl p-6 hover:border-l-gold hover:shadow-lg hover:shadow-navy-950/50 transition-all duration-300"
              >
                <h3 className="font-body font-semibold text-white text-lg mb-3 group-hover:text-gold transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="font-body text-slate text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-body font-medium group-hover:gap-2 transition-all duration-200">
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

      {/* ── CITIES WE SERVE ── */}
      <section className="py-20 px-4 bg-navy-800" aria-labelledby="cities-heading">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <SectionLabel className="mb-3">Where We Work</SectionLabel>
            <h2 id="cities-heading" className="font-display font-bold text-white text-3xl mb-4">
              Serving 8 Communities Across Northern California
            </h2>
            <GoldDivider />
          </div>
          <p className="font-body text-slate leading-relaxed mb-8 text-lg">
            Top Down Gutter &amp; Windows provides all nine of our exterior cleaning services throughout Northern California.
            Every service — from gutter cleaning and roof washing to solar panel cleaning and window cleaning — is available
            in{' '}
            {locations.map((loc, i) => (
              <span key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-gold hover:underline font-medium"
                >
                  {loc.city}
                </Link>
                {i < locations.length - 2 && ', '}
                {i === locations.length - 2 && ', and '}
              </span>
            ))}{' '}
            and the surrounding communities. We are locally based in Chico and understand the specific seasonal demands that Northern California&apos;s climate, tree cover, and agricultural environment place on your home&apos;s exterior.
          </p>
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
      </section>

      {/* ── TRUST BAR ── */}
      <TrustBar />
    </>
  );
}

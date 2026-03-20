import type { Metadata } from 'next';
import Link from 'next/link';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';

export const metadata: Metadata = {
  title: 'More Resources — Top Down Gutter & Windows',
  description:
    'Explore blog posts, FAQs, price matching, veteran discounts, service areas, and booking for Top Down Gutter & Windows — Northern California exterior cleaning experts.',
  alternates: { canonical: 'https://tdgutterandwindows.com/more' },
  openGraph: { url: 'https://tdgutterandwindows.com/more' },
};

const links = [
  {
    href: '/blog',
    label: 'Blog',
    sublabel: 'From the Gutter-Vine',
    description: 'Expert tips, guides, and insights on exterior home maintenance.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    href: '/faqs',
    label: 'FAQs',
    sublabel: 'Top Down Gutter FAQs',
    description: 'Answers to the most common questions about our services and process.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/price-matching',
    label: 'Price-Matching',
    sublabel: 'Our Price Match Guarantee',
    description: "We'll match any competitor's price for the same scope of work.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/about#veterans-about-heading',
    label: 'Veteran Discount',
    sublabel: 'Honoring Those Who Serve',
    description: 'Exclusive discounts for veterans, active military, and first responders.',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    href: '/about#area-heading',
    label: 'Service Area',
    sublabel: 'Where We Operate',
    description: 'Redding, Chico, Oroville, Yuba City, and the surrounding Northern California communities.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    href: '/service-request',
    label: 'Book a Service',
    sublabel: 'Schedule Now',
    description: 'Submit a service request and get a free estimate for any of our 9 services.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function MorePage() {
  return (
    <div className="bg-navy-900 min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel className="mb-3">Explore</SectionLabel>
          <h1 className="font-display font-bold text-white text-5xl mb-4">More From Us</h1>
          <GoldDivider className="mx-auto mb-4" />
          <p className="font-body text-slate max-w-lg mx-auto">
            Everything you need to know about Top Down Gutter &amp; Windows, all in one place.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-navy-800 border border-navy-700 rounded-2xl p-6 hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors duration-200">
                  {item.icon}
                </div>
                <div>
                  <p className="font-body font-semibold text-white text-sm">{item.label}</p>
                  <p className="font-label text-gold text-xs tracking-[0.1em]">{item.sublabel}</p>
                </div>
              </div>
              <p className="font-body text-slate text-sm leading-relaxed flex-1">{item.description}</p>
              <div className="mt-4 flex items-center gap-1 text-gold text-sm font-body font-medium">
                Explore
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-gold/10 border border-gold/30 rounded-2xl p-8 text-center">
          <h2 className="font-display font-bold text-white text-3xl mb-3">
            Ready to Get Started?
          </h2>
          <p className="font-body text-slate mb-6 max-w-lg mx-auto">
            Call us now or submit a service request. We respond within 24 hours and offer
            free estimates on all services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6198853894"
              className="bg-gold text-navy-900 font-body font-semibold px-8 py-4 rounded-full hover:bg-gold-light transition-colors duration-200"
            >
              Call (619) 885-3894
            </a>
            <Link
              href="/service-request"
              className="border-2 border-gold text-gold font-body font-semibold px-8 py-4 rounded-full hover:bg-gold/10 transition-colors duration-200"
            >
              Request a Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

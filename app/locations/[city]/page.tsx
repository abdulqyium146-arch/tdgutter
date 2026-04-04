import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LOCATIONS, SERVICES, getLocation } from '@/lib/locationData'
import TrustBar from '@/components/gutters/TrustBar'
import CTABanner from '@/components/gutters/CTABanner'
import LocalBusinessSchema from '@/components/gutters/LocalBusinessSchema'
import NearbyLinks from '@/components/gutters/NearbyLinks'

interface Props {
  params: Promise<{ city: string }>
}

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ city: loc.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const location = getLocation(city)
  if (!location) return { title: 'Not Found', robots: { index: false } }
  const title = `Gutter Services in ${location.name}, CA | Top Down Gutter & Windows`
  const description = `Top Down Gutter & Windows provides professional gutter cleaning, repair, installation, and guard services in ${location.name}, CA (${location.county}). Licensed, insured, free inspections. Call (614) 350-5978.`
  const url = `https://tdgutterandwindows.com/locations/${city}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: 'Top Down Gutter & Windows', type: 'website' },
  }
}

const serviceIcons: Record<string, React.ReactNode> = {
  'gutter-cleaning': (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  ),
  'gutter-repair': (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  'gutter-installation': (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  'gutter-guard': (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  'gutter-inspection': (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
}

export default async function CityHubPage({ params }: Props) {
  const { city } = await params
  const location = getLocation(city)
  if (!location) notFound()

  return (
    <>
      <LocalBusinessSchema city={location.name} countyName={location.county} />

      {/* HERO */}
      <section className="bg-navy-950 pt-28 pb-14 px-4" aria-labelledby="city-hub-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-label text-gold text-xs tracking-[0.2em] uppercase mb-3">
            {location.county} · Northern California
          </p>
          <h1
            id="city-hub-heading"
            className="font-display font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            Gutter Services in {location.name}, CA
          </h1>
          <p className="font-body text-slate text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {location.gutterPainPoint} Top Down Gutter &amp; Windows provides professional gutter cleaning, repair,
            installation, guard installation, and free inspections throughout {location.county}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+16143505978"
              className="inline-flex flex-col items-center justify-center bg-gold text-navy-950 font-body font-bold px-8 py-3.5 rounded-full hover:bg-amber-400 transition-colors duration-200 leading-tight"
              aria-label="Call Top Down Gutter and Windows at (614) 350-5978"
            >
              <span className="flex items-center gap-2 text-base">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now — (614) 350-5978
              </span>
              <span className="text-navy-900/70 text-xs font-normal">Same-day slots available</span>
            </a>
            <Link
              href="/service-request"
              className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold font-body font-semibold px-8 py-3.5 rounded-full hover:bg-gold/10 transition-colors duration-200 text-base"
            >
              Get a Free Estimate
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* SERVICE CARDS GRID */}
      <section className="py-16 px-4 bg-navy-900" aria-labelledby="services-grid-heading">
        <div className="max-w-4xl mx-auto">
          <h2
            id="services-grid-heading"
            className="font-display font-bold text-white text-2xl sm:text-3xl mb-2 text-center"
          >
            Gutter Services Available in {location.name}
          </h2>
          <p className="font-body text-slate text-center text-base mb-8">
            Select a service for full details, process steps, and FAQs specific to {location.name}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                href={`/locations/${city}/${svc.slug}`}
                className="group bg-navy-800 border border-navy-700 rounded-2xl p-6 hover:border-gold/50 hover:bg-navy-700/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    {serviceIcons[svc.slug]}
                  </span>
                  <h3 className="font-display font-bold text-white text-base group-hover:text-gold transition-colors duration-200">
                    {svc.name}
                  </h3>
                </div>
                <p className="font-body text-slate text-sm leading-relaxed mb-4">
                  {svc.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 font-body text-gold text-sm font-medium">
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section className="py-14 px-4 bg-navy-950" aria-labelledby="local-context-heading">
        <div className="max-w-3xl mx-auto">
          <h2
            id="local-context-heading"
            className="font-display font-bold text-white text-2xl mb-4"
          >
            Why Gutters Fail in {location.name}
          </h2>
          <p className="font-body text-slate text-base leading-relaxed mb-4">
            {location.gutterPainPoint} Understanding these conditions is the foundation of every service decision we make in {location.county}.
          </p>
          <p className="font-body text-slate text-base leading-relaxed">
            Most gutter failures in {location.name} follow a predictable pattern: debris accumulates throughout dry season, the
            first heavy rain overflows and saturates the fascia line, and by the time a homeowner notices, wood rot has already
            started behind the gutter. This cycle is entirely preventable with a maintenance schedule calibrated to what your
            specific trees, climate, and roofline demand.
          </p>
        </div>
      </section>

      {/* NEARBY CITIES */}
      <NearbyLinks
        slugs={location.nearbyCities}
        service="gutter-cleaning"
        serviceName="Gutter Cleaning"
        variant="hub"
      />

      {/* CTA */}
      <CTABanner city={location.name} />
    </>
  )
}

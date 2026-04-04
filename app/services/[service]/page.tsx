// NOTE: This file lives at app/services/[service]/ which conflicts with the
// existing app/services/[slug]/ folder. Before deploying, DELETE the old
// [slug] folder (or merge its non-gutter service content here).

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  SERVICES,
  getService,
  getPrimaryAndSecondaryLocations,
} from '@/lib/locationData'
import TrustBar from '@/components/gutters/TrustBar'
import CTABanner from '@/components/gutters/CTABanner'
import FAQAccordion from '@/components/gutters/FAQAccordion'

interface Props {
  params: Promise<{ service: string }>
}

export function generateStaticParams() {
  return SERVICES.map((svc) => ({ service: svc.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params
  const svc = getService(service)
  if (!svc) return { title: 'Not Found', robots: { index: false } }

  const title = `${svc.name} in Northern California | Top Down Gutter & Windows`
  const description = `Top Down Gutter & Windows provides professional ${svc.name.toLowerCase()} across Northern California. ${svc.shortDescription} Licensed, insured. Call (614) 350-5978.`
  const url = `https://tdgutterandwindows.com/services/${service}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: 'Top Down Gutter & Windows', type: 'website' },
  }
}

export default async function ServiceHubPage({ params }: Props) {
  const { service } = await params
  const svc = getService(service)
  if (!svc) notFound()

  const eligibleLocations = getPrimaryAndSecondaryLocations()

  return (
    <>
      {/* HERO */}
      <section className="bg-navy-950 pt-28 pb-14 px-4" aria-labelledby="service-hub-heading">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-label text-gold text-xs tracking-[0.2em] uppercase mb-3">
            Northern California · Top Down Gutter &amp; Windows
          </p>
          <h1
            id="service-hub-heading"
            className="font-display font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            {svc.name} in Northern California
          </h1>
          <p className="font-body text-slate text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            {svc.shortDescription}
          </p>
          <p className="font-body text-slate text-base leading-relaxed max-w-2xl mx-auto mb-8">
            {svc.painSentence} Licensed and insured crews, free inspection on every job, lines open Monday through Saturday 7am–7pm.
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
              <span className="text-navy-900/70 text-xs font-normal">Same-day available</span>
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

      {/* SERVICE DETAIL */}
      <section className="py-16 px-4 bg-navy-900" aria-labelledby="service-detail-heading">
        <div className="max-w-3xl mx-auto">
          <h2
            id="service-detail-heading"
            className="font-display font-bold text-white text-2xl sm:text-3xl mb-6"
          >
            How We Perform {svc.name}
          </h2>
          <div className="space-y-6">
            {svc.process.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-label text-gold text-sm font-bold">
                  {i + 1}
                </span>
                <p className="font-body text-slate text-base leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITY GRID — primary + secondary only */}
      <section className="py-16 px-4 bg-navy-950" aria-labelledby="service-areas-heading">
        <div className="max-w-5xl mx-auto">
          <h2
            id="service-areas-heading"
            className="font-display font-bold text-white text-2xl sm:text-3xl mb-3"
          >
            {svc.name} Service Areas
          </h2>
          <p className="font-body text-slate text-base mb-8">
            We provide professional {svc.name.toLowerCase()} across {eligibleLocations.length} cities and communities in Northern California. Select your city for local pricing notes, process details, and FAQs.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {eligibleLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}/${service}`}
                className={`group rounded-xl p-3 border transition-all duration-200 text-center hover:border-gold/50 hover:bg-navy-800 ${
                  loc.priority === 'primary'
                    ? 'bg-navy-800 border-navy-600'
                    : 'bg-navy-900 border-navy-700'
                }`}
              >
                <p className="font-body font-semibold text-white text-sm group-hover:text-gold transition-colors duration-200">
                  {loc.name}
                </p>
                <p className="font-body text-slate-dark text-xs mt-0.5">{loc.county.replace(' County', '')}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-16 px-4 bg-navy-900" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2
            id="faq-heading"
            className="font-display font-bold text-white text-2xl sm:text-3xl mb-8"
          >
            {svc.name} — Common Questions
          </h2>
          <FAQAccordion faqs={svc.faqs} serviceName={svc.name} />
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-12 px-4 bg-navy-950 border-t border-navy-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-white text-xl mb-6">
            Other gutter services we provide:
          </h2>
          <ul className="flex flex-wrap gap-3" role="list">
            {SERVICES.filter((s) => s.slug !== service).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 bg-navy-800 border border-navy-700 rounded-full px-4 py-2 font-body text-slate text-sm hover:border-gold/50 hover:text-gold transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  )
}

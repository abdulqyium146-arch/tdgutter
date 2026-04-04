import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  LOCATIONS,
  SERVICES,
  getAllCombos,
  getLocation,
  getService,
} from '@/lib/locationData'
import TrustBar from '@/components/gutters/TrustBar'
import CTABanner from '@/components/gutters/CTABanner'
import FAQAccordion from '@/components/gutters/FAQAccordion'
import LocalBusinessSchema from '@/components/gutters/LocalBusinessSchema'
import NearbyLinks from '@/components/gutters/NearbyLinks'

// ── TYPES ─────────────────────────────────────────────────────────────────────
interface Props {
  params: Promise<{ city: string; service: string }>
}

// ── STATIC PARAMS ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return getAllCombos()
}

// ── METADATA ──────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, service } = await params
  const location = getLocation(city)
  const svc = getService(service)
  if (!location || !svc) return { title: 'Not Found', robots: { index: false } }

  const title = `${svc.name} in ${location.name}, CA | Top Down Gutter & Windows`
  const description = `Top Down Gutter & Windows offers professional ${svc.name.toLowerCase()} in ${location.name}, CA (${location.county}). Licensed, insured, free inspection. Call (614) 350-5978.`
  const url = `https://tdgutterandwindows.com/locations/${city}/${service}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Top Down Gutter & Windows',
      type: 'website',
    },
  }
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default async function LocationServicePage({ params }: Props) {
  const { city, service } = await params
  const location = getLocation(city)
  const svc = getService(service)
  if (!location || !svc) notFound()

  const otherServices = SERVICES.filter((s) => s.slug !== service)

  // ── Body copy: 400+ words across 3 paragraphs ──────────────────────────────
  const para1 = buildPara1(svc.name, svc.slug, location.name)
  const para2 = buildPara2(location, svc.name)
  const para3 = buildPara3(svc, location.name)

  return (
    <>
      <LocalBusinessSchema
        city={location.name}
        service={svc.name}
        countyName={location.county}
      />

      {/* ── 1. HERO ── */}
      <section
        className="bg-navy-950 pt-28 pb-16 px-4"
        aria-labelledby="page-h1"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-label text-gold text-xs tracking-[0.2em] uppercase mb-3">
            {location.county} · Northern California
          </p>
          <h1
            id="page-h1"
            className="font-display font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {svc.name} in {location.name}, CA
          </h1>
          <p className="font-body text-slate text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Serving {location.county} — {location.gutterPainPoint.split('.')[0]}.
            Local crews, licensed and insured, free inspection on every job.
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
                Call (614) 350-5978
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

      {/* ── 2. TRUST BAR ── */}
      <TrustBar />

      {/* ── 3. SERVICE DETAIL ── */}
      <section className="py-16 px-4 bg-navy-900" aria-labelledby="service-detail-heading">
        <div className="max-w-3xl mx-auto">
          <h2
            id="service-detail-heading"
            className="font-display font-bold text-white text-2xl sm:text-3xl mb-6"
          >
            Professional {svc.name} in {location.name}
          </h2>

          <div className="space-y-5 font-body text-slate text-base leading-relaxed">
            <p>{para1}</p>
            <p>{para2}</p>
            <p>{para3}</p>
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US ── */}
      <section className="py-16 px-4 bg-navy-950" aria-labelledby="why-us-heading">
        <div className="max-w-4xl mx-auto">
          <h2
            id="why-us-heading"
            className="font-display font-bold text-white text-2xl sm:text-3xl mb-8 text-center"
          >
            Why {location.name} Homeowners Choose Top Down
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-navy-900 border border-navy-700 rounded-2xl p-6 flex gap-4"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  {card.icon}
                </span>
                <div>
                  <h3 className="font-display font-bold text-white text-base mb-1">{card.title}</h3>
                  <p className="font-body text-slate text-sm leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ── */}
      <section className="py-16 px-4 bg-navy-900" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2
            id="faq-heading"
            className="font-display font-bold text-white text-2xl sm:text-3xl mb-8"
          >
            {svc.name} Questions — Answered
          </h2>
          <FAQAccordion faqs={svc.faqs} serviceName={svc.name} />
        </div>
      </section>

      {/* ── 6. NEARBY CITIES ── */}
      <NearbyLinks
        slugs={location.nearbyCities}
        service={service}
        serviceName={svc.name}
        variant="service"
      />

      {/* ── 7. OTHER SERVICES IN THIS CITY ── */}
      <section className="py-12 px-4 bg-navy-950 border-t border-navy-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-white text-xl mb-6">
            Other gutter services in {location.name}:
          </h2>
          <ul className="flex flex-wrap gap-3" role="list">
            {otherServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/locations/${city}/${s.slug}`}
                  className="inline-flex items-center gap-2 bg-navy-800 border border-navy-700 rounded-full px-4 py-2 font-body text-slate text-sm hover:border-gold/50 hover:text-gold transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {s.name} in {location.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 8. CTA BANNER ── */}
      <CTABanner city={location.name} />
    </>
  )
}

// ── WHY CHOOSE US CARDS ───────────────────────────────────────────────────────
const whyCards = [
  {
    title: 'Licensed & Insured',
    body: 'Every job in California is covered by full general liability insurance. Your property is protected — no exceptions.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Double-Stage Process',
    body: 'We manually remove all debris before flushing — not just hose it down. That is the difference between a clean gutter and a cleared-looking one.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Same-Day Available',
    body: 'Call before noon and we will aim to be at your property the same day. Lines open Monday through Saturday, 7am to 7pm.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Free Inspection on Every Job',
    body: 'Every appointment includes a written inspection report. You will know exactly what we found — and we will tell you honestly if something does not need work.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
]

// ── BODY COPY BUILDERS ────────────────────────────────────────────────────────

function buildPara1(serviceName: string, serviceSlug: string, cityName: string): string {
  switch (serviceSlug) {
    case 'gutter-cleaning':
      return `Gutter cleaning is the single most impactful maintenance task a Northern California homeowner can perform before the rainy season. Gutters exist to do one job: collect rainfall from the roof and direct it safely away from the foundation. When they fill with leaves, pine needles, seed pods, and organic debris — which happens faster in tree-heavy areas than most homeowners expect — they stop doing that job entirely. Overflowing gutters send water cascading down exterior walls, saturating soil against foundation walls, and driving moisture into the fascia boards and soffits behind the gutter line. Fascia rot is the silent consequence of missed cleanings: by the time you see paint peeling or wood softening, the damage is already extensive and expensive. Staying ahead of that cycle with professional ${serviceName.toLowerCase()} in ${cityName} is the lowest-cost maintenance decision you can make for your home's exterior.`

    case 'gutter-repair':
      return `Gutters are under constant physical stress. Every season brings thermal expansion in summer, added weight from debris in fall, wind loads from winter storms, and the slow fatigue of fasteners working loose from aging wood. Over time, even professionally installed gutters develop problems: seams begin to separate and weep water, hangers pull away from the fascia board, downspout connections loosen, and sections of gutter begin to sag and hold standing water rather than draining toward the downspout. These are not cosmetic issues. A sagging gutter holds water that breeds mosquitoes and accelerates rust. A leaking seam sends a steady stream of water down your exterior wall toward the foundation every time it rains. Professional ${serviceName.toLowerCase()} in ${cityName} addresses these issues before they cascade into fascia rot, soil erosion, or basement water intrusion — problems that cost ten to twenty times more than the repair would have.`

    case 'gutter-installation':
      return `New gutter installation is the right solution when your home has no gutters, when existing gutters are beyond repair, or when original gutters were improperly sized for your roof's actual drainage load. A correct installation requires more than simply attaching a channel to the fascia. The gutter must be sized for the square footage of roof it drains, installed at a precise pitch of one-quarter inch per ten feet of run toward the downspout, and positioned at the correct depth below the drip edge to capture the full volume of water during heavy rain events. Most homes in Northern California were originally built with four-inch or five-inch K-style gutters that are undersized by today's standards — and undersized gutters overflow in exactly the same way as clogged ones. Professional ${serviceName.toLowerCase()} in ${cityName} ensures your home gets a system sized and pitched for actual performance, not just appearance.`

    case 'gutter-guard':
      return `Gutter guard installation is the long-term answer to the perpetual cleaning cycle. Guards work by creating a barrier across the top of the gutter channel that blocks solid debris while allowing water to flow in freely. The critical variable is the quality of the guard system. Low-quality foam inserts, cheap plastic screens, and thin roll-stock guards degrade within two to three seasons and ultimately make gutter maintenance harder, not easier — they trap debris against the gutter instead of keeping it out. The gold standard today is micro-mesh gutter protection: a rigid aluminum frame covered with fine stainless steel mesh whose perforations are small enough to block pine needles, shingle grit, and maple seeds while providing full water flow capacity. Professional ${serviceName.toLowerCase()} in ${cityName} uses quality materials that perform for fifteen or more years — not the products sold at big-box stores.`

    case 'gutter-inspection':
      return `A professional gutter inspection is not simply looking up at the gutters from the driveway. A thorough inspection means getting on a ladder at multiple points around the home, examining the gutter interior for debris accumulation, testing every seam for separation or weeping, checking hanger spacing and security, running water through each downspout to confirm unrestricted flow, and inspecting fascia boards behind the gutter for soft spots or rot. Most homeowners only discover gutter problems after the damage is done — a water stain appearing on a soffit, paint peeling from exterior siding, or a puddle consistently forming against the foundation after rain. A professional ${serviceName.toLowerCase()} in ${cityName} catches the upstream cause before it becomes a downstream remediation project, and often saves homeowners many times the cost of the inspection in avoided repairs.`

    default:
      return `Professional gutter services in ${cityName} protect your home's most critical drainage system. Properly maintained gutters are the frontline defense against water intrusion, foundation damage, and exterior wood rot.`
  }
}

function buildPara2(location: ReturnType<typeof getLocation>, serviceName: string): string {
  if (!location) return ''
  return `Homeowners in ${location.name}, ${location.county} face a specific set of conditions that make professional ${serviceName.toLowerCase()} more important here than in many California communities. ${location.gutterPainPoint} Add to that the seasonal rainfall patterns typical of ${location.county} — where the first significant storms of the year often arrive quickly and heavily, with little warning — and the case for staying ahead of gutter maintenance becomes clear. Gutter systems that were clear in September can be completely blocked by November in this environment, and a blocked gutter in the first heavy rain is a guaranteed overflow event. At Top Down Gutter & Windows, we have worked extensively throughout ${location.county} and understand exactly what ${location.name}'s rooftops and tree canopy throw at a gutter system each year. That local knowledge shapes every decision we make on the job — from where to start the inspection to which downspouts are likely to be the first to fail.`
}

function buildPara3(svc: ReturnType<typeof getService>, cityName: string): string {
  if (!svc) return ''
  const steps = svc.process
  return `When Top Down Gutter & Windows performs ${svc.name.toLowerCase()} in ${cityName}, the process follows a consistent three-step approach designed to produce verifiable results rather than just a visual pass. ${steps[0]} ${steps[1]} ${steps[2]} Every job ends with the same question we ask ourselves: would we be comfortable if the homeowner tested the system in a heavy rain tonight? If the answer is not an unambiguous yes, the job is not finished. That standard — held to on every property in ${cityName} and across Northern California — is what separates a professional gutter company from a pressure washing crew with a ladder.`
}

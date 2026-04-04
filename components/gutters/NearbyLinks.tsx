import Link from 'next/link'
import { LOCATIONS } from '@/lib/locationData'

interface NearbyLinksProps {
  slugs: string[]
  service: string   // service slug, e.g. "gutter-cleaning"
  serviceName: string // display name, e.g. "Gutter Cleaning"
  variant?: 'service' | 'hub' // link to service combo page or city hub page
}

export default function NearbyLinks({
  slugs,
  service,
  serviceName,
  variant = 'service',
}: NearbyLinksProps) {
  const neighbors = slugs
    .map((slug) => LOCATIONS.find((l) => l.slug === slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof LOCATIONS.find>>[]

  if (neighbors.length === 0) return null

  return (
    <section className="py-12 px-4 bg-navy-900 border-t border-navy-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-white text-xl mb-6">
          {variant === 'service'
            ? `Also serving nearby communities:`
            : `Gutter services in nearby cities:`}
        </h2>
        <ul className="flex flex-wrap gap-3" role="list">
          {neighbors.map((loc) => (
            <li key={loc.slug}>
              <Link
                href={
                  variant === 'service'
                    ? `/locations/${loc.slug}/${service}`
                    : `/locations/${loc.slug}`
                }
                className="inline-flex items-center gap-1.5 bg-navy-800 border border-navy-700 rounded-full px-4 py-2 font-body text-slate text-sm hover:border-gold/50 hover:text-gold transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {loc.name}
                {variant === 'service' ? ` ${serviceName}` : ' Gutter Services'}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

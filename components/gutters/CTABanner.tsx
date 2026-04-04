import Link from 'next/link'

interface CTABannerProps {
  city?: string
}

export default function CTABanner({ city }: CTABannerProps) {
  return (
    <section
      className="bg-gold py-14 px-4 text-center"
      aria-labelledby="cta-banner-heading"
    >
      <div className="max-w-2xl mx-auto">
        {city && (
          <p className="font-label text-navy-900/70 text-xs tracking-[0.2em] uppercase mb-3">
            Serving {city}, CA
          </p>
        )}
        <h2
          id="cta-banner-heading"
          className="font-display font-black text-navy-950 text-2xl sm:text-3xl mb-3 leading-tight"
        >
          Ready to book? Call now — same-day slots available.
        </h2>
        <p className="font-body text-navy-900/80 text-sm mb-6">
          Free inspection&nbsp;&middot;&nbsp;Same-day available&nbsp;&middot;&nbsp;Licensed &amp; insured&nbsp;&middot;&nbsp;Mon–Sat 7am–7pm
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+16143505978"
            className="inline-flex flex-col items-center justify-center gap-0 bg-navy-950 text-white font-body font-bold px-8 py-3.5 rounded-full hover:bg-navy-800 transition-colors duration-200 leading-tight"
            aria-label="Call Top Down Gutter and Windows at (614) 350-5978"
          >
            <span className="flex items-center gap-2 text-base">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now — (614) 350-5978
            </span>
            <span className="text-white/60 text-xs font-normal">Tap to call</span>
          </a>
          <Link
            href="/service-request"
            className="inline-flex items-center justify-center gap-2 border-2 border-navy-950 text-navy-950 font-body font-semibold px-8 py-3.5 rounded-full hover:bg-navy-950/10 transition-colors duration-200 text-base"
          >
            Get a Free Estimate
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link';
import { services } from '@/lib/services';
import { locations } from '@/lib/locations';

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/p/Top-Down-Gutter-and-Window-Cleaning-Services-61568901527821/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: 'Yelp',
    href: 'https://www.yelp.com/biz/top-down-gutter-and-windows-chico-4',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.196 12.72l-3.03 1.43c-.43.203-.94-.112-.94-.59v-8.1c0-.5.54-.81.97-.57l7.4 4.22c.41.234.41.82 0 1.055l-4.4 2.555zM3.284 14.027l2.59 1.37c.43.227.95-.075.95-.566V9.613c0-.5-.53-.8-.95-.567l-2.59 1.37a.65.65 0 000 1.133v2.477zm9.898 6.104l-2.59-1.37a.65.65 0 010-1.133l2.59-1.37c.42-.227.95.067.95.567v2.74c0 .49-.53.793-.95.566zm-5.056-1.37l-2.59 1.37c-.42.227-.95-.076-.95-.566v-2.74c0-.5.53-.794.95-.567l2.59 1.37a.65.65 0 010 1.133zm5.056-13.494l-2.59 1.37a.65.65 0 010 1.133l2.59 1.37c.42.227.95-.067.95-.567V5.834c0-.49-.53-.793-.95-.566z"/>
      </svg>
    ),
  },
  {
    label: 'Google',
    href: 'https://sites.google.com/view/tdgutterandwindows/home',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
      </svg>
    ),
  },
];


export default function Footer() {
  return (
    <footer
      className="bg-navy-950"
      style={{ borderTop: '2px solid #C9902A' }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="inline-flex flex-col leading-none mb-4">
              <span className="font-display font-bold text-white text-xl">TOP DOWN</span>
              <span className="font-label text-gold text-sm tracking-[0.15em]">GUTTER &amp; WINDOWS</span>
            </Link>
            <p className="font-body text-slate text-sm leading-relaxed max-w-xs">
              From Roof to Windows, Let Us Clean Your Home From The Top Down!
            </p>
            <div className="flex items-center gap-2 mt-5 p-3 bg-navy-800 rounded-lg w-fit">
              <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span className="font-body text-gold text-xs font-semibold">Veteran &amp; First Responder Proud</span>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${s.label}`}
                  className="w-8 h-8 rounded-full bg-navy-800 border border-navy-700 flex items-center justify-center text-slate hover:text-gold hover:border-gold transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="font-label text-gold text-sm tracking-[0.2em] uppercase mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="font-body text-slate text-sm hover:text-gold transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Locations */}
          <div>
            <h3 className="font-label text-gold text-sm tracking-[0.2em] uppercase mb-4">Locations</h3>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="font-body text-slate text-sm hover:text-gold transition-colors duration-200"
                  >
                    {loc.city}, {loc.stateAbbr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-label text-gold text-sm tracking-[0.2em] uppercase mb-4">Contact</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <div className="flex items-start gap-2 font-body text-slate text-sm">
                  <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>1180 E Lassen Ave<br />Chico, CA</span>
                </div>
              </li>
              <li>
                <a
                  href="tel:6143505978"
                  className="flex items-center gap-2 font-body text-slate text-sm hover:text-gold transition-colors duration-200"
                >
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (614) 350-5978
                </a>
              </li>
              <li>
                <a
                  href="mailto:TopDown.GutterAndWindow@gmail.com"
                  className="flex items-center gap-2 font-body text-slate text-sm hover:text-gold transition-colors duration-200 break-all"
                >
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  TopDown.GutterAndWindow@gmail.com
                </a>
              </li>
            </ul>

            {/* Guest Post WhatsApp */}
            <div className="mb-6 p-3 bg-navy-800 rounded-lg border border-navy-700">
              <p className="font-label text-gold text-xs tracking-[0.15em] uppercase mb-2">Guest Post Inquiries</p>
              <a
                href="https://wa.me/923474825228"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp for guest post availability"
                className="flex items-center gap-2 font-body text-slate text-sm hover:text-gold transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp: +92 347 482 5228
              </a>
            </div>
          </div>
        </div>

        {/* Trusted Partners */}
        <div className="border-t border-navy-800 pt-8 mb-6">
          <h3 className="font-label text-gold text-sm tracking-[0.2em] uppercase mb-3">Trusted Partners</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <div>
              <a
                href="https://kjsupremepressurewashing.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-slate text-sm hover:text-gold transition-colors duration-200 font-semibold"
                aria-label="KJ Supreme Pressure Washing – Pressure Washing Services in Central Florida"
              >
                KJ Supreme Pressure Washing
              </a>
              <p className="font-body text-slate-dark text-xs mt-0.5">
                Trusted pressure washing services in Central Florida
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-slate-dark text-xs">
            © {new Date().getFullYear()} Top Down Gutter &amp; Windows. All rights reserved.
          </p>
          <p className="font-body text-slate-dark text-xs">
            Serving Northern California with Pride
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found — Top Down Gutter & Windows',
  description: 'The page you were looking for could not be found.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="bg-navy-950 min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-lg">
        {/* 404 number */}
        <div
          className="font-label text-navy-800 select-none pointer-events-none"
          style={{ fontSize: 'clamp(8rem, 20vw, 14rem)', lineHeight: 1, letterSpacing: '-0.02em' }}
          aria-hidden="true"
        >
          404
        </div>

        <div className="-mt-4 relative z-10">
          <h1 className="font-display font-bold text-white text-4xl mb-3">
            Page Not Found
          </h1>
          <div className="h-0.5 w-16 bg-gold rounded-full mx-auto mb-5" />
          <p className="font-body text-slate text-lg mb-8 leading-relaxed">
            Looks like this page went down the drain. Let&apos;s get you back to
            clean gutters and clear windows.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="bg-gold text-navy-900 font-body font-semibold px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors duration-200"
            >
              Back to Home
            </Link>
            <Link
              href="/service-request"
              className="border-2 border-gold text-gold font-body font-semibold px-8 py-3.5 rounded-full hover:bg-gold/10 transition-colors duration-200"
            >
              Request a Service
            </Link>
          </div>

          <p className="font-body text-slate-dark text-sm mt-8">
            Need help?{' '}
            <a href="tel:+16143505978" className="text-gold hover:underline">
              Call (614) 350-5978
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

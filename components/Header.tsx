'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/service-request', label: 'Service Request' },
  { href: '/price-matching', label: 'Price-Matching' },
  { href: '/more', label: 'More' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(11, 22, 40, 0.85)',
        borderBottom: scrolled ? '1px solid #1A3560' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group" aria-label="Top Down Gutter & Windows - Home">
            <span className="font-display font-bold text-white text-lg group-hover:text-gold transition-colors duration-200">
              TOP DOWN
            </span>
            <span className="font-label text-gold text-xs tracking-[0.15em]">
              GUTTER &amp; WINDOWS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body font-medium text-sm transition-colors duration-200 relative group ${
                  pathname === link.href ? 'text-gold' : 'text-slate hover:text-gold'
                }`}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold transition-transform duration-200 origin-left"
                  style={{ transform: pathname === link.href ? 'scaleX(1)' : 'scaleX(0)' }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:6198853894"
              className="hidden sm:inline-flex items-center gap-2 bg-gold text-navy-900 font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-gold-light transition-colors duration-200"
              aria-label="Call us at (619) 885-3894"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (619) 885-3894
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-navy-800 transition-colors"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              <span
                className="block w-5 h-0.5 bg-white transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none' }}
              />
              <span
                className="block w-5 h-0.5 bg-white transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-0.5 bg-white transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className="lg:hidden fixed inset-0 bg-navy-950 z-40 transition-all duration-300 flex flex-col"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          top: '64px',
        }}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col px-6 py-8 gap-2" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body font-medium text-xl py-3 border-b border-navy-800 transition-all duration-200 ${
                pathname === link.href ? 'text-gold' : 'text-white hover:text-gold'
              }`}
              style={{
                transitionDelay: menuOpen ? `${i * 40}ms` : '0ms',
                transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:6198853894"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-gold text-navy-900 font-body font-semibold text-lg px-8 py-4 rounded-full hover:bg-gold-light transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (619) 885-3894
          </a>
        </nav>
      </div>
    </header>
  );
}

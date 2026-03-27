'use client';

import Link from 'next/link';
import { Service } from '@/lib/services';

const icons: Record<string, React.ReactNode> = {
  roof: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <path d="M3 12L12 3L21 12" stroke="#0B1628" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 10V20H19V10" stroke="#0B1628" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="9" y="14" width="6" height="6" rx="0.5" stroke="#0B1628" strokeWidth="2"/>
    </svg>
  ),
  gutter: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <rect x="2" y="4" width="20" height="4" rx="1" stroke="#0B1628" strokeWidth="2"/>
      <path d="M6 8V18M18 8V14" stroke="#0B1628" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 14C18 16.2 16.2 18 14 18H6" stroke="#0B1628" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 16L2 20M8 16L6 20" stroke="#0B1628" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#0B1628" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <path d="M3 21l9-9" stroke="#0B1628" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12.22 6.22A6.002 6.002 0 0016.95 7.6a6 6 0 00.87-5.66l-2.97 2.97-1.42-1.42 2.97-2.97A6 6 0 0010.74 7.4a6.002 6.002 0 001.48-1.18z" stroke="#0B1628" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5 14.5l5.5 5.5a2.121 2.121 0 003-3l-6-6" stroke="#0B1628" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#0B1628" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="#0B1628" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  solar: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <circle cx="12" cy="12" r="4" stroke="#0B1628" strokeWidth="2"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#0B1628" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  house: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <path d="M3 12L12 3L21 12V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V12Z" stroke="#0B1628" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 17C9 15 11 14 12 14C13 14 15 15 16 17" stroke="#0B1628" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 21V17M14 21V17" stroke="#0B1628" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  window: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#0B1628" strokeWidth="2"/>
      <path d="M12 3V21M3 12H21" stroke="#0B1628" strokeWidth="2"/>
    </svg>
  ),
  magnify: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <circle cx="11" cy="11" r="8" stroke="#0B1628" strokeWidth="2"/>
      <path d="M21 21l-4.35-4.35" stroke="#0B1628" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className="service-card group relative bg-navy-800 border border-navy-700 border-l-4 border-l-navy-700 rounded-xl p-6 transition-all duration-300 hover:border-l-gold hover:shadow-lg hover:shadow-navy-950/50"
      style={{ transition: 'all 0.3s ease' }}
    >
      <div className="flex flex-col gap-4">
        <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
          {icons[service.icon]}
        </div>
        <div>
          <h3 className="font-body font-semibold text-white text-lg mb-2">{service.title}</h3>
          <p className="font-body text-slate text-sm leading-relaxed">{service.description}</p>
        </div>
        <Link
          href={`/services/${service.id}`}
          className="inline-flex items-center gap-1 text-gold text-sm font-body font-medium hover:underline transition-all group-hover:gap-2 mt-auto"
        >
          Learn More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

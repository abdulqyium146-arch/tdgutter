'use client';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`font-label text-gold text-sm tracking-[0.2em] uppercase block ${className}`}
    >
      {children}
    </span>
  );
}

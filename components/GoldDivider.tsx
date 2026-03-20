interface GoldDividerProps {
  className?: string;
}

export default function GoldDivider({ className = '' }: GoldDividerProps) {
  return (
    <div
      className={`h-0.5 w-16 bg-gold rounded-full ${className}`}
      aria-hidden="true"
    />
  );
}

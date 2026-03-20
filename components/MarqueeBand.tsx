export default function MarqueeBand() {
  const text = 'NOW SERVICING → REDDING • RED BLUFF • ORLAND • CHICO • OROVILLE • PARADISE • GRASS VALLEY • YUBA CITY •';
  const repeated = `${text} ${text}`;

  return (
    <div
      className="w-full bg-gold overflow-hidden py-3"
      aria-label="Service areas: Redding, Red Bluff, Orland, Chico, Oroville, Paradise, Grass Valley, Yuba City"
    >
      <div className="animate-marquee">
        <span
          className="font-label text-navy-900 text-sm px-4"
          style={{ letterSpacing: '0.15em', whiteSpace: 'nowrap' }}
        >
          {repeated}
        </span>
        <span
          className="font-label text-navy-900 text-sm px-4"
          style={{ letterSpacing: '0.15em', whiteSpace: 'nowrap' }}
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}

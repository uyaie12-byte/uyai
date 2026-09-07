const ITEMS = [
  "MUSIC",
  "CULTURE",
  "INTERVIEWS",
  "NEW MUSIC FRIDAY",
  "THE CAMP",
  "ARTIST PICKS",
  "THE ARCHIVE",
  "COMMENTARY",
];

/**
 * A wire-service-style scrolling strip of section names — cheap, constant
 * motion that signals "this is a live, dense magazine" the moment the
 * page loads, before a visitor has scrolled or hovered anything. Purely
 * decorative (duplicated content for the seamless loop), so it's hidden
 * from assistive tech rather than read twice.
 */
export function Ticker() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-ink bg-ink py-2.5">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-4 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-paper"
          >
            {item}
            <span className="text-red">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

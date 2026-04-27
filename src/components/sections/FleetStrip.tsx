export default function FleetStrip() {
  const items = ['BONSUR', '●', 'LOGÍSTICA', '●', 'TRANSPORTE', '●', 'ALMACENAMIENTO', '●']

  const track = items.map((item, i) =>
    item === '●'
      ? <span key={i} className="text-accent" style={{ fontSize: 60, WebkitTextStroke: 0, alignSelf: 'center', lineHeight: 1 }}>●</span>
      : <span key={i}>{item}</span>
  )

  return (
    <div className="relative py-20 border-t border-line overflow-hidden"
         style={{ background: 'linear-gradient(180deg,var(--color-bg) 0%,var(--color-bg-2) 100%)' }}>
      <div className="flex gap-[60px] animate-slide-slow whitespace-nowrap select-none"
           style={{
             fontFamily: 'var(--font-display)',
             fontSize: 108,
             fontWeight: 600,
             color: 'transparent',
             WebkitTextStroke: '1px var(--color-line-2)',
             letterSpacing: '-.03em',
           }}>
        {track}
        {track}
      </div>
    </div>
  )
}

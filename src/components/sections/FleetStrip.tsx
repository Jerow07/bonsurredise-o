export default function FleetStrip() {
  const items = ['BONSUR', '●', 'LOGÍSTICA', '●', 'TRANSPORTE', '●', 'ALMACENAMIENTO', '●',
                 'BONSUR', '●', 'LOGÍSTICA', '●', 'TRANSPORTE', '●', 'ALMACENAMIENTO', '●']

  const renderItems = (offset: number) =>
    items.map((item, i) =>
      item === '●'
        ? <span key={offset + i} className="text-accent" style={{ fontSize: 60, WebkitTextStroke: 0, alignSelf: 'center', lineHeight: 1, flexShrink: 0 }}>●</span>
        : <span key={offset + i} style={{ flexShrink: 0 }}>{item}</span>
    )

  return (
    <div className="relative py-20 border-t border-line overflow-hidden"
         style={{ background: 'linear-gradient(180deg,var(--color-bg) 0%,var(--color-bg-2) 100%)' }}>
      {/* Dos bloques idénticos — la animación mueve -50% y vuelve a 0 sin salto visible */}
      <div className="flex animate-marquee whitespace-nowrap select-none"
           style={{
             fontFamily: 'var(--font-display)',
             fontSize: 108,
             fontWeight: 600,
             color: 'transparent',
             WebkitTextStroke: '1.5px rgba(255,255,255,0.25)',
             letterSpacing: '-.03em',
             gap: '60px',
             width: 'max-content',
           }}>
        <div className="flex gap-[60px]">{renderItems(0)}</div>
        <div className="flex gap-[60px]">{renderItems(200)}</div>
      </div>
    </div>
  )
}

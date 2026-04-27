export default function FleetStrip() {
  const items = ['BONSUR', '●', 'LOGÍSTICA', '●', 'TRANSPORTE', '●', 'ALMACENAMIENTO', '●']

  const makeTrack = (offset: number) =>
    items.map((item, i) =>
      item === '●'
        ? <span key={offset + i} className="text-accent" style={{ fontSize: 60, WebkitTextStroke: 0, alignSelf: 'center', lineHeight: 1 }}>●</span>
        : <span key={offset + i}>{item}</span>
    )

  // 4 copias: la animación mueve -50% (2 copias), las otras 2 garantizan
  // que la pantalla esté siempre llena en cualquier resolución
  return (
    <div className="relative py-20 border-t border-line overflow-hidden"
         style={{ background: 'linear-gradient(180deg,var(--color-bg) 0%,var(--color-bg-2) 100%)' }}>
      <div className="flex gap-[60px] animate-slide-slow whitespace-nowrap select-none"
           style={{
             fontFamily: 'var(--font-display)',
             fontSize: 108,
             fontWeight: 600,
             color: 'transparent',
             WebkitTextStroke: '1.5px rgba(255,255,255,0.25)',
             letterSpacing: '-.03em',
           }}>
        {makeTrack(0)}
        {makeTrack(100)}
        {makeTrack(200)}
        {makeTrack(300)}
      </div>
    </div>
  )
}

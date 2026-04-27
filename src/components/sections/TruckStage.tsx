import { useEffect, useRef } from 'react'

interface Props {
  src: string
  reverse?: boolean
  id: string
  style?: React.CSSProperties
}

export default function TruckStage({ src, reverse = false, id, style }: Props) {
  const stageRef = useRef<HTMLDivElement>(null)
  const slotRef  = useRef<HTMLDivElement>(null)
  const pctRef   = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const update = () => {
      const stage = stageRef.current
      const slot  = slotRef.current
      const pct   = pctRef.current
      if (!stage || !slot) return
      const vh = window.innerHeight
      const r  = stage.getBoundingClientRect()
      let p = (vh - r.top) / (vh + r.height)
      p = Math.min(1, Math.max(0, p))
      const x = Math.min(100, p * 160)
      slot.style.setProperty('--truck-x', x + '%')
      if (pct) pct.textContent = String(Math.round(p * 100)).padStart(3, '0')
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const kmLabels = reverse
    ? ['← REGRESO', 'KM 0 · BENAVIDEZ', 'KM 200', 'KM 500', 'KM 1.000+']
    : ['KM 0', 'KM 38.3 · BENAVIDEZ', 'KM 200', 'KM 500', 'KM 1.000+']

  return (
    <div
      id={id}
      ref={stageRef}
      className="relative overflow-hidden"
      style={{
        height: 340,
        margin: '80px auto -120px',
        maxWidth: 1480,
        ...style,
        borderTop: '1px solid var(--color-line)',
        borderBottom: '1px solid var(--color-line)',
        background: 'repeating-linear-gradient(90deg,transparent 0 60px, rgba(43,127,214,.10) 60px 64px)',
      }}
    >
      {/* Road line */}
      <div className="absolute inset-x-0 bottom-[30px] h-[2px] opacity-45" style={{ background: 'var(--color-accent)' }} />
      <div className="absolute inset-x-0 bottom-[27px] h-[8px] opacity-45"
           style={{ background: 'repeating-linear-gradient(90deg,var(--color-accent) 0 30px, transparent 30px 60px)' }} />

      {/* KM markers */}
      <div className={`absolute top-[14px] left-0 right-0 flex justify-between px-7 z-[2] ${reverse ? 'flex-row-reverse' : ''}`}
           style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-ink-3)', textTransform: 'uppercase', letterSpacing: '.2em' }}>
        {kmLabels.map(k => <span key={k}>{k}</span>)}
      </div>

      {/* Truck slot — position driven by CSS var */}
      <div
        ref={slotRef}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-[10px] overflow-hidden"
        style={{
          left: 'var(--truck-x, 10%)',
          width: 520,
          height: 280,
          boxShadow: '0 30px 80px -20px rgba(0,0,0,.7)',
          background: '#000',
          transition: 'left .1s linear',
        }}
      >
        <video src={src} autoPlay loop muted playsInline className="w-full h-full object-cover block" />
      </div>

      {/* Progress readout */}
      <div
        className={`absolute bottom-[14px] z-[2] ${reverse ? 'right-7' : 'left-7'}`}
        style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-accent)', letterSpacing: '.2em' }}
      >
        {reverse ? 'REGRESO · ' : 'SCROLL · '}<b ref={pctRef}>000</b>%
      </div>
    </div>
  )
}

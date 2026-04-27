import { motion } from 'framer-motion'

const stats = [
  { v: '+25', em: true, l: 'años en ruta' },
  { v: '120', em: true, l: 'unidades activas' },
  { v: '12k', em: true, suffix: 'm²', l: 'almacenaje cubierto' },
  { v: '24', em: true, suffix: '/7', l: 'despacho operativo' },
]

const routes = [
  { code: 'BNS-014 · Benavidez → Rosario', status: 'EN TRÁNSITO', ok: true },
  { code: 'BNS-027 · Zárate → Mendoza',    status: 'EN TRÁNSITO', ok: true },
  { code: 'BNS-041 · Bs.As. → Córdoba',    status: 'CARGANDO',    ok: true },
  { code: 'BNS-052 · Pilar → Bahía Blanca', status: 'ENTREGADO',  ok: false },
]

export default function Hero() {
  return (
    <header
      id="inicio"
      className="relative overflow-hidden px-7 pt-20 pb-[120px]"
      style={{
        minHeight: '92vh',
        background: `
          linear-gradient(180deg, transparent 0%, #0a0a0a 95%),
          linear-gradient(rgba(43,127,214,.06) 1px, transparent 1px) 0 0/64px 64px,
          linear-gradient(90deg, rgba(43,127,214,.06) 1px, transparent 1px) 0 0/64px 64px,
          #0a0a0a
        `,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[60px] max-w-[1480px] mx-auto relative z-[2]">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-flex items-center gap-[10px] border border-line-2 rounded-full px-3 py-[6px] bg-white/[.02]"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-ink-2)', textTransform: 'uppercase', letterSpacing: '.2em' }}>
            <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-dot" style={{ boxShadow: '0 0 12px var(--color-accent)' }} />
            TRANSPORTE · ALMACENAMIENTO · LOGÍSTICA
          </span>

          <h1
            className="font-semibold my-6"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px,6.5vw,108px)', letterSpacing: '-.02em', lineHeight: '.95', color: 'var(--color-ink)' }}
          >
            Movemos lo que<br />
            tu operación<br />
            <em className="not-italic text-accent">no puede frenar.</em>
          </h1>

          <p className="text-ink-2 text-[18px] leading-[1.55] max-w-[540px] mb-9">
            Más de 25 años conectando industrias con flota propia, depósitos habilitados y un equipo que entiende que cada minuto en ruta cuenta. Logística integral, profesional, a su servicio.
          </p>

          <div className="flex flex-wrap gap-[14px] items-center">
            <a href="#contacto"
               className="bg-accent text-[#0b0c0e] px-[26px] py-4 rounded-lg font-semibold text-[14px] inline-flex items-center gap-[10px] transition-all hover:bg-white hover:-translate-y-px">
              Solicitar cotización <span>→</span>
            </a>
            <a href="#servicios"
               className="border border-line-2 text-ink px-[22px] py-4 rounded-lg font-medium text-[14px] inline-flex items-center gap-[10px] transition-all hover:border-accent hover:text-accent">
              Ver servicios
            </a>
          </div>
        </motion.div>

        {/* HUD */}
        <motion.aside
          className="rounded-[14px] p-[22px] flex flex-col gap-[18px]"
          style={{ border: '1px solid var(--color-line-2)', background: 'linear-gradient(180deg,rgba(255,255,255,.02),rgba(0,0,0,.3))' }}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex justify-between items-center" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-ink-3)', textTransform: 'uppercase', letterSpacing: '.2em' }}>
            <span>Panel · Flota Bonsur</span>
            <span className="text-accent flex gap-[6px] items-center">
              <span className="w-[6px] h-[6px] bg-accent rounded-full animate-pulse-live" />
              EN VIVO
            </span>
          </div>

          <div className="grid grid-cols-2 gap-px bg-line rounded-[10px] overflow-hidden">
            {stats.map(s => (
              <div key={s.l} className="bg-bg-2 p-[18px]">
                <div className="font-semibold tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)', fontSize: 34, color: 'var(--color-ink)' }}>
                  {s.em ? <em className="not-italic text-accent">{s.v}</em> : s.v}{s.suffix}
                </div>
                <div className="mt-[6px]" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-ink-3)', textTransform: 'uppercase', letterSpacing: '.18em' }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div className="bg-bg-2 rounded-[10px] p-4">
            {routes.map((r, i) => (
              <div key={r.code}
                   className={`flex justify-between items-center text-[12px] text-ink-2 py-2 ${i < routes.length - 1 ? 'border-b border-dashed border-line' : ''}`}>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-ink)' }}>{r.code}</span>
                <span className="text-accent" style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>{r.status}</span>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </header>
  )
}

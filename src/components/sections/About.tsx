import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

const meta = [
  { v: '+25', suffix: ' años', l: 'en operación' },
  { v: '1.000', suffix: '+', l: 'clientes acompañados' },
  { v: '24', suffix: ' provincias', l: 'cobertura nacional' },
  { v: '99.4', suffix: '%', l: 'entregas en término' },
]

const slides = [
  { src: '/quienes_somos.webp',     label: 'QUIÉNES SOMOS' },
  { src: '/nuestros_servicios.webp', label: 'NUESTROS SERVICIOS' },
  { src: '/nuestras_unidades.webp',  label: 'NUESTRA FLOTA' },
]

const INTERVAL = 4000

export default function About() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), INTERVAL)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="nosotros" className="px-7 py-[120px] border-t border-line">
      <div className="max-w-[1480px] mx-auto">
        <SectionHeader
          num="02 · QUIÉNES SOMOS"
          title={<>Una compañía<br />en movimiento<br />desde 1998.</>}
          lede="Bonsur nace en Benavidez con una premisa simple: hacer logística profesional, confiable y trazable. Hoy somos referencia para industrias que no pueden permitirse una sola demora."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">

          {/* Slideshow */}
          <motion.div
            className="rounded-[14px] border border-line-2 relative overflow-hidden bg-bg-3"
            style={{ aspectRatio: '4/5' }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Images */}
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current].src}
                alt={slides[current].label}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              />
            </AnimatePresence>

            {/* Dark overlay so text is always readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

            {/* Badge */}
            <span className="absolute top-6 left-6 bg-accent text-black rounded px-3 py-[6px] z-10"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.2em' }}>
              DESDE 1998
            </span>

            {/* Slide label */}
            <AnimatePresence mode="wait">
              <motion.span
                key={current + '-label'}
                className="absolute top-6 right-6 z-10 text-ink-3"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.2em' }}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3 }}
              >
                {slides[current].label}
              </motion.span>
            </AnimatePresence>

            {/* Quote */}
            <div className="absolute left-6 right-6 bottom-16 rounded-lg p-4 z-10"
                 style={{ background: 'rgba(0,0,0,.7)', backdropFilter: 'blur(8px)', border: '1px solid var(--color-line)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-ink-2)', lineHeight: 1.5, margin: 0 }}>
                " Operamos sobre la columna vertebral de la Argentina industrial: la Panamericana. Cerca de los puertos, cerca de los parques, cerca de la ruta. "
              </p>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-[6px] z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 20 : 6,
                    height: 6,
                    background: i === current ? 'var(--color-accent)' : 'rgba(255,255,255,.35)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-ink-2 text-[17px] leading-[1.65] mb-[22px]">
              <b className="text-ink font-semibold">Transporte, almacenamiento y logística profesional a su servicio.</b> Combinamos flota propia, depósitos habilitados y un equipo coordinador que trabaja codo a codo con operaciones, abastecimiento y compras.
            </p>
            <p className="text-ink-2 text-[17px] leading-[1.65]">
              Nuestro foco está puesto en la confiabilidad operativa: cumplir lo prometido, documentar cada paso, y mantener canales abiertos en cada punto del recorrido. Sin sorpresas en el destino.
            </p>

            <div className="grid grid-cols-2 gap-px bg-line border border-line rounded-[10px] overflow-hidden mt-9">
              {meta.map(m => (
                <div key={m.l} className="bg-bg p-[22px]">
                  <div className="font-semibold tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)', fontSize: 38, color: 'var(--color-ink)' }}>
                    <em className="not-italic text-accent">{m.v}</em>{m.suffix}
                  </div>
                  <div className="mt-[6px]" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-ink-3)', textTransform: 'uppercase', letterSpacing: '.2em' }}>{m.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

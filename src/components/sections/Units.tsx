import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

const units = [
  {
    tag: 'U / 01',
    title: 'Tractor + Semi baranda',
    desc: 'Cargas generales paletizadas hasta 30 tn. Lona corrediza para carga lateral.',
    specs: ['30 TN', '14m', 'SIDER'],
  },
  {
    tag: 'U / 02',
    title: 'Semi batea',
    desc: 'Para cargas a granel, áridos, hierros y materiales de construcción.',
    specs: ['28 TN', 'BATEA', 'VOLCABLE'],
  },
  {
    tag: 'U / 03',
    title: 'Furgón térmico',
    desc: 'Carga seca protegida, ideal para electrodomésticos, alimentos y embalaje sensible.',
    specs: ['14 TN', 'FURGÓN', 'SENASA'],
  },
  {
    tag: 'U / 04',
    title: 'Maquinaria pesada',
    desc: 'Plataformas y cama baja para traslado de equipos viales y agrícolas.',
    specs: ['40 TN', 'CAMA BAJA', 'ESCOLTA'],
  },
]

export default function Units() {
  return (
    <section id="unidades" className="px-7 py-[120px] border-t border-line">
      <div className="max-w-[1480px] mx-auto">
        <SectionHeader
          num="03 · UNIDADES DE SERVICIO"
          title={<>Flota lista<br />para operar.</>}
          lede="Cada unidad mantenida bajo plan preventivo, GPS activo y documentación al día. Elegí la configuración que necesita tu carga."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px]">
          {units.map((u, i) => (
            <motion.div
              key={u.tag}
              className="border border-line-2 rounded-[12px] p-6 bg-bg-2 transition-all hover:border-accent hover:-translate-y-[3px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="text-accent" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.2em' }}>{u.tag}</div>
              <h4 className="font-semibold mt-[14px] mb-2 tracking-[-0.01em]"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--color-ink)' }}>
                {u.title}
              </h4>
              <p className="text-ink-2 text-[13px] leading-[1.55]">{u.desc}</p>
              <div className="flex flex-wrap gap-[6px] mt-[18px]">
                {u.specs.map(s => (
                  <span key={s} className="text-ink-2 px-2 py-1 rounded bg-bg-3 border border-line"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: 10 }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Container, Triangle, Truck, BarChart3, UtensilsCrossed, ShieldCheck } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const services = [
  {
    icon: Container,
    id: 'SVC / 01',
    title: 'Transporte de contenedores',
    desc: 'Destinos nacionales e internacionales. Cargas IMO, refrigeradas, ISTA y proyectos de importación con trazabilidad punto a punto.',
  },
  {
    icon: Triangle,
    id: 'SVC / 02',
    title: 'Transporte de áridos',
    desc: 'Arena, piedra, granza y materiales a granel para obra civil, industria y construcción. Equipos volcables y batea disponibles.',
  },
  {
    icon: Truck,
    id: 'SVC / 03',
    title: 'Transporte de carga general',
    desc: 'Semirremolques modernos para cargas paletizadas, gran volumen y mercadería sensible. Entregas puntuales en todo el país.',
  },
  {
    icon: BarChart3,
    id: 'SVC / 04',
    title: 'Alquiler de camiones, semis y maquinaria',
    desc: 'Flota versátil disponible para alquiler en proyectos de transporte o construcción. Tractores, semis, batea y maquinaria pesada.',
  },
  {
    icon: UtensilsCrossed,
    id: 'SVC / 05',
    title: 'Distribución de alimentos',
    desc: 'Cadena de frío garantizada y vehículos habilitados. Distribución capilar para industria alimenticia, retail y horeca.',
  },
  {
    icon: ShieldCheck,
    id: 'SVC / 06',
    title: 'Calidad ISO 9001:2015',
    desc: 'Certificación IRAM N° 9000-17473 para Transporte de Cargas Generales. Procesos auditados y mejora continua.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="px-7 py-[120px] border-t border-line">
      <div className="max-w-[1480px] mx-auto">
        <SectionHeader
          num="01 · SERVICIOS"
          title={<>Logística<br />integral.</>}
          lede="Una sola operación, todos los eslabones bajo control. Desde la carga del primer pallet hasta la entrega documentada en destino."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-[14px] overflow-hidden">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.id}
                className="group bg-bg px-7 pt-9 pb-8 flex flex-col cursor-pointer transition-colors hover:bg-bg-2 relative"
                style={{ minHeight: 340 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className="w-[54px] h-[54px] rounded-[10px] bg-bg-3 border border-line-2 grid place-items-center text-accent">
                  <Icon size={26} strokeWidth={1.6} />
                </div>
                <div className="mt-6 mb-0" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-ink-3)', letterSpacing: '.2em' }}>{s.id}</div>
                <h3 className="font-semibold mt-6 mb-[14px] leading-[1.1] tracking-[-0.01em]"
                    style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--color-ink)' }}>
                  {s.title}
                </h3>
                <p className="text-ink-2 text-[14px] leading-[1.6] mb-6">{s.desc}</p>
                <div className="mt-auto w-[42px] h-[42px] rounded-full border border-line-2 grid place-items-center text-ink-2 transition-all group-hover:bg-accent group-hover:border-accent group-hover:text-black group-hover:rotate-[-45deg]">
                  →
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

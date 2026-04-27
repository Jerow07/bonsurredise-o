import { motion } from 'framer-motion'

interface Props {
  num: string
  title: React.ReactNode
  lede: string
}

export default function SectionHeader({ num, title, lede }: Props) {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-[60px] items-end mb-[60px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="text-accent text-[12px] tracking-[.2em] mb-2" style={{ fontFamily: 'var(--font-mono)' }}>{num}</div>
        <h2 className="font-semibold leading-[1] tracking-[-0.02em] m-0"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,5vw,72px)', color: 'var(--color-ink)' }}>
          {title}
        </h2>
      </div>
      <p className="text-ink-2 text-[16px] leading-[1.6] lg:justify-self-end max-w-[520px]">{lede}</p>
    </motion.div>
  )
}

import { useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

const Truck3D = lazy(() => import('../ui/Truck3D'))

const contactInfo = [
  { k: 'Teléfono',   v: '11 3477-0102',                accent: true },
  { k: 'Email',      v: 'contacto@bonsur.com.ar',      accent: false },
  { k: 'Dirección',  v: 'Ruta 9 · Km 38,3 · Benavidez', accent: false },
  { k: 'Horario',    v: 'L–V 7:00–19:00 · 24/7 op.',  accent: false },
  { k: 'Estado',     v: '● ONLINE',                    accent: true },
]

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', empresa: '', origen: '', destino: '', carga: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="px-7 py-[120px] border-t border-line">
      <div className="max-w-[1480px] mx-auto">
        <SectionHeader
          num="04 · CONTACTO"
          title={<>Hablemos<br />de tu operación.</>}
          lede="Pedinos una cotización o una visita al depósito. Respondemos en menos de 24hs hábiles, con un coordinador asignado a tu cuenta."
        />

        <div className="rounded-[18px] p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[60px] items-start"
             style={{ border: '1px solid var(--color-line-2)', background: 'radial-gradient(ellipse at top right, rgba(43,127,214,.22), transparent 60%), var(--color-bg-2)' }}>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-semibold leading-[1.05] tracking-[-0.02em] mb-[18px]"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4vw,56px)', color: 'var(--color-ink)' }}>
              ¿Tenés una carga<br />que <em className="not-italic text-accent">no admite demoras?</em>
            </h2>
            <p className="text-ink-2 text-[16px] leading-[1.6] mb-7 max-w-[480px]">
              Contanos qué necesitás mover, desde dónde, hacia dónde y cuándo. Nosotros nos encargamos del resto.
            </p>

            {sent ? (
              <div className="rounded-[10px] p-6 border border-accent/30 bg-accent/5 text-accent"
                   style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.08em' }}>
                ✓ MENSAJE RECIBIDO — Te contactamos en menos de 24hs hábiles.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Nombre" value={form.nombre} onChange={v => setForm(f => ({...f, nombre: v}))} required />
                  <Field label="Empresa" value={form.empresa} onChange={v => setForm(f => ({...f, empresa: v}))} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Origen" value={form.origen} onChange={v => setForm(f => ({...f, origen: v}))} placeholder="Ciudad / provincia" />
                  <Field label="Destino" value={form.destino} onChange={v => setForm(f => ({...f, destino: v}))} placeholder="Ciudad / provincia" />
                </div>
                <Field label="Tipo de carga" value={form.carga} onChange={v => setForm(f => ({...f, carga: v}))} placeholder="Ej: paletizada, granel, contenedor…" />
                <div className="flex flex-col gap-1">
                  <label className="text-ink-3 text-[11px] uppercase tracking-[.15em]" style={{ fontFamily: 'var(--font-mono)' }}>Mensaje</label>
                  <textarea
                    rows={3}
                    value={form.mensaje}
                    onChange={e => setForm(f => ({...f, mensaje: e.target.value}))}
                    className="w-full rounded-lg px-4 py-3 text-[14px] text-ink bg-bg border border-line-2 outline-none resize-none focus:border-accent transition-colors placeholder:text-ink-3"
                    placeholder="Información adicional…"
                  />
                </div>
                <button type="submit"
                        className="bg-accent text-[#0b0c0e] px-[26px] py-4 rounded-lg font-semibold text-[14px] inline-flex items-center gap-[10px] transition-all hover:bg-white w-fit">
                  Solicitar cotización →
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact card */}
          <motion.div
            className="rounded-[12px] p-7"
            style={{ background: 'var(--color-bg)', border: '1px solid var(--color-line)' }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {contactInfo.map((r, i) => (
              <div key={r.k}
                   className={`flex justify-between items-center py-[14px] ${i < contactInfo.length - 1 ? 'border-b border-dashed border-line' : ''}`}>
                <span className="text-ink-3 text-[10px] uppercase tracking-[.2em]" style={{ fontFamily: 'var(--font-mono)' }}>{r.k}</span>
                <span className={`text-[14px] font-medium ${r.accent ? 'text-accent' : 'text-ink'}`}
                      style={r.accent ? { fontFamily: 'var(--font-mono)' } : {}}>
                  {r.v}
                </span>
              </div>
            ))}

            {/* 3D Truck */}
            <div className="mt-5 -mx-1">
              <div className="mb-2" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-ink-3)', letterSpacing: '.2em', textTransform: 'uppercase' }}>
                FLOTA · MODELO 3D
              </div>
              <Suspense fallback={
                <div className="w-full rounded-[12px] flex items-center justify-center"
                     style={{ height: 260, background: 'var(--color-bg)', border: '1px solid var(--color-line)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-ink-3)', letterSpacing: '.2em' }}>CARGANDO…</span>
                </div>
              }>
                <Truck3D />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, placeholder, required }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-ink-3 text-[11px] uppercase tracking-[.15em]" style={{ fontFamily: 'var(--font-mono)' }}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="rounded-lg px-4 py-3 text-[14px] text-ink bg-bg border border-line-2 outline-none focus:border-accent transition-colors placeholder:text-ink-3"
      />
    </div>
  )
}

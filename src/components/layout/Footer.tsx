const services = [
  'Transporte de contenedores',
  'Transporte de áridos',
  'Carga general',
  'Alquiler de unidades',
  'Distribución de alimentos',
]
const company = ['Quiénes somos', 'Unidades', 'Contacto', 'Quejas y reclamos']
const ops = ['+54 11 3477-0102', 'contacto@bonsur.com.ar', 'Ruta 9 · Km 38,3', 'Benavidez · Bs.As.']

export default function Footer() {
  return (
    <footer className="bg-black border-t border-line px-7 pt-[60px] pb-10">
      <div className="max-w-[1480px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-[60px]">
        <div>
          <a href="#" className="flex items-center gap-3" aria-label="Bonsur">
            <img src="/bonsur-logo.svg" alt="Bonsur" className="h-[52px] w-auto brightness-0 invert" />
          </a>
          <p className="text-ink-3 text-[13px] leading-[1.6] mt-[14px] max-w-[340px]">
            Bonsur S.A. — Transporte de cargas con enfoque en eficiencia y seguridad. Cargas generales, refrigeradas, contenedores, áridos y distribución de alimentos sobre la Panamericana, desde Benavidez al país.
          </p>
        </div>

        <div>
          <ColHead>Servicios</ColHead>
          {services.map(s => <FootLink key={s}>{s}</FootLink>)}
        </div>

        <div>
          <ColHead>Compañía</ColHead>
          {company.map(s => <FootLink key={s}>{s}</FootLink>)}
        </div>

        <div>
          <ColHead>Operaciones</ColHead>
          {ops.map(s => <FootLink key={s}>{s}</FootLink>)}
        </div>
      </div>

      <div className="max-w-[1480px] mx-auto mt-12 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-2"
           style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-ink-3)', letterSpacing: '.15em', textTransform: 'uppercase' }}>
        <span>© 2026 BONSUR · Logística Argentina</span>
        <span>REDISEÑO · v1.0 · BUILD 001</span>
      </div>
    </footer>
  )
}

function ColHead({ children }: { children: React.ReactNode }) {
  return (
    <h5 className="mb-[18px] text-ink-3 text-[11px] font-semibold uppercase tracking-[.2em]"
        style={{ fontFamily: 'var(--font-mono)', margin: '0 0 18px' }}>
      {children}
    </h5>
  )
}

function FootLink({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="block text-ink-2 text-[14px] py-[6px] transition-all hover:text-accent hover:pl-[6px]">
      {children}
    </a>
  )
}

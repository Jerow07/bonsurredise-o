import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#inicio',    label: 'Inicio' },
  { href: '#nosotros',  label: 'Quiénes somos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#unidades',  label: 'Unidades' },
  { href: '#contacto',  label: 'Contacto' },
  { href: '#quejas',    label: 'Quejas y Reclamos' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-line" style={{ background: 'rgba(11,12,14,.85)', backdropFilter: 'blur(12px)' }}>
      <div className="flex items-center justify-between px-7 py-[18px] max-w-[1480px] mx-auto">
        {/* Logo */}
        <a href="#" aria-label="Bonsur" className="flex items-center gap-3">
          <img src="/bonsur-logo.svg" alt="Bonsur" className="h-[42px] w-auto brightness-0 invert" />
          <div className="flex flex-col leading-none" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="font-bold text-2xl tracking-[.01em] text-ink">BONSUR</span>
            <small className="text-accent font-medium text-[9px] tracking-[.32em] mt-1 uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
              LOGÍSTICA
            </small>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex gap-1 text-[13px] font-medium">
          {links.map(l => (
            <a key={l.href} href={l.href}
               className="px-[14px] py-[10px] rounded-md text-ink-2 transition-colors hover:bg-bg-3 hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-[14px] text-[13px]">
          <span className="text-ink-2" style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>
            +54&nbsp;<b className="text-ink font-medium">11&nbsp;3477&nbsp;0102</b>
          </span>
          <a href="#contacto"
             className="bg-accent text-[#0b0c0e] px-4 py-[10px] rounded-full font-semibold inline-flex items-center gap-2 transition-colors hover:bg-white">
            Cotizar carga →
          </a>
        </div>

        {/* Hamburger */}
        <button className="lg:hidden text-ink-2 p-2" onClick={() => setOpen(o => !o)} aria-label="Menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-line bg-bg-2 px-7 pb-6 pt-4 flex flex-col gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href}
               className="py-3 px-2 text-ink-2 text-[15px] border-b border-line last:border-0 hover:text-accent transition-colors"
               onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto"
             className="mt-4 bg-accent text-[#0b0c0e] px-4 py-3 rounded-full font-semibold text-center"
             onClick={() => setOpen(false)}>
            Cotizar carga →
          </a>
        </div>
      )}
    </nav>
  )
}

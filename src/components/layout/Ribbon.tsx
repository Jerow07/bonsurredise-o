export default function Ribbon() {
  const text =
    'Ruta Nº9 Panamericana · Km 38,3 · Benavidez  //  Flota propia  //  Cargas generales · Refrigeradas · Peligrosas  //  Habilitación SeNaSa  //  Almacenaje 12.000 m²  //  Tracking en tiempo real  //  '

  return (
    <div className="bg-black border-b border-line flex items-center justify-between px-7 py-2 overflow-hidden">
      <span
        className="shrink-0 font-mono text-[11px] text-ink-3 uppercase tracking-[.18em] whitespace-nowrap pr-8"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        <b className="text-accent font-medium">●</b>&nbsp; OPERATIVO 24/7
      </span>

      <div className="flex-1 overflow-hidden">
        <div
          className="flex gap-0 animate-slide whitespace-nowrap"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-ink-2)', letterSpacing: '.18em', textTransform: 'uppercase' }}
        >
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>

      <span
        className="shrink-0 font-mono text-[11px] text-ink-3 uppercase tracking-[.18em] whitespace-nowrap pl-8"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        EST. 1998 · ARG
      </span>
    </div>
  )
}

/**
 * El elemento firma de ORBIS (Fase 2): un anillo y un punto que se mueven solos,
 * sin que nadie los empuje — la promesa de la marca vuelta forma. Puro CSS:
 * es la única animación continua del sitio, no necesita JS de scroll.
 * `prefers-reduced-motion` se resuelve de forma global en globals.css.
 */
export default function OrbitField({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden ${className}`}
    >
      <div className="relative h-[190px] w-[92%] max-w-[620px]">
        <div className="absolute left-1/2 top-1/2 h-[190px] w-full max-w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-bright/20" />
        <div className="absolute left-1/2 top-1/2 h-[120px] w-[60%] max-w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-bright/10" />
        <div className="orbit-path-a absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full bg-gold-bright shadow-[0_0_16px_2px_rgba(232,197,114,0.6)]" />
        <div className="orbit-path-b absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 animate-orbit-fast rounded-full bg-flux shadow-[0_0_10px_1px_rgba(44,191,149,0.55)]" />
      </div>
    </div>
  );
}

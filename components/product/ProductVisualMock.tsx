import { Dumbbell } from "lucide-react";

/**
 * FLUX todavía no tiene producto funcionando (confirmado). En vez de simular
 * un dashboard falso como si fuera real (el problema central de la Fase 1),
 * esto se declara abiertamente como lo que es: un concepto en construcción.
 */
export default function ProductVisualMock() {
  const rows = [5, 3, 6, 4, 2];

  return (
    <div className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#071e22] to-[#0a3030] p-8">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-flux/30 bg-flux/10 text-flux">
          <Dumbbell size={20} aria-hidden="true" />
        </div>
        <span className="rounded-full border border-flux/30 bg-flux/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-flux">
          En desarrollo
        </span>
      </div>

      <div aria-hidden="true" className="flex flex-col gap-2.5">
        {rows.map((cols, r) => (
          <div key={r} className="flex gap-2">
            {Array.from({ length: 7 }).map((_, c) => (
              <div
                key={c}
                className="h-6 flex-1 rounded"
                style={{
                  background: c < cols ? "rgba(44,191,149,0.18)" : "rgba(255,255,255,0.04)",
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <p className="max-w-[280px] text-sm leading-relaxed text-white/70">
        Booking con Handy y cobros con Mercado Pago, en el mismo lenguaje visual que Finanzy y PureMind — todavía
        no hay capturas reales para mostrar, así que no vamos a fingir que las hay.
      </p>
    </div>
  );
}

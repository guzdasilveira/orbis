import { TICKER_EVENTS } from "@/lib/content";

const DOT_CLASS: Record<string, string> = {
  finanzy: "bg-finanzy",
  flux: "bg-flux",
  puremind: "bg-puremind",
};

const TAG_CLASS: Record<string, string> = {
  finanzy: "text-finanzy",
  flux: "text-flux",
  puremind: "text-puremind",
};

const TAG_LABEL: Record<string, string> = {
  finanzy: "FINANZY",
  flux: "FLUX",
  puremind: "PUREMIND",
};

function TickerItem({ vertical, text }: { vertical: string; text: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 whitespace-nowrap font-mono text-xs text-mist">
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${DOT_CLASS[vertical]}`} />
      <span className={`font-semibold ${TAG_CLASS[vertical]}`}>{TAG_LABEL[vertical]}</span>
      {text}
    </div>
  );
}

/**
 * El thesis del hero, literalizado (Fase 2): actividad automática simulada
 * de los tres productos, corriendo en vivo antes de explicar una sola feature.
 */
export default function LiveTicker() {
  const items = [...TICKER_EVENTS, ...TICKER_EVENTS];

  return (
    <div className="relative mt-7 overflow-hidden border-y border-line py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-navy to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-navy to-transparent" />
      <div
        className="flex w-max animate-ticker gap-10"
        role="img"
        aria-label="Ejemplo de actividad automática simulada de los tres productos de ORBIS"
      >
        {items.map((item, i) => (
          <TickerItem key={i} vertical={item.vertical} text={item.text} />
        ))}
      </div>
    </div>
  );
}

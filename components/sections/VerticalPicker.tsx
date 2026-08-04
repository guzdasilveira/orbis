import { Car, Dumbbell, Brain } from "lucide-react";
import { VERTICALS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

const ICONS = { finanzy: Car, flux: Dumbbell, puremind: Brain };
const ACCENT_TEXT: Record<string, string> = {
  finanzy: "group-hover:text-finanzy",
  flux: "group-hover:text-flux",
  puremind: "group-hover:text-puremind",
};
const ACCENT_BORDER: Record<string, string> = {
  finanzy: "hover:border-finanzy/40",
  flux: "hover:border-flux/40",
  puremind: "hover:border-puremind/40",
};

/**
 * Reemplaza la franja de "logos de clientes" que en realidad listaba
 * categorías (Fase 1, hallazgo de confianza). Es navegación honesta:
 * tres pastillas reales que saltan directo a cada producto.
 */
export default function VerticalPicker() {
  return (
    <Reveal className="relative z-[1] mx-auto mt-16 max-w-[720px] border-t border-line px-6 pt-9 text-center md:px-16">
      <p className="mb-6 text-[11px] uppercase tracking-[0.12em] text-mist/70">Elegí tu industria</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {VERTICALS.map((v) => {
          const Icon = ICONS[v.id];
          return (
            <a
              key={v.id}
              href={`#${v.id}`}
              className={`group flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-mist transition-colors ${ACCENT_BORDER[v.id]}`}
            >
              <Icon size={15} aria-hidden="true" className={`text-mist/60 transition-colors ${ACCENT_TEXT[v.id]}`} />
              <span className={`transition-colors ${ACCENT_TEXT[v.id]} group-hover:text-cream`}>{v.label}</span>
            </a>
          );
        })}
      </div>
    </Reveal>
  );
}

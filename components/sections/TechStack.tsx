import { MessageCircle, CreditCard, Zap, RefreshCw } from "lucide-react";
import { TECH_STACK } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

const ICONS = { MessageCircle, CreditCard, Zap, RefreshCw };

export default function TechStack() {
  return (
    <section className="border-y border-line bg-navy-raised px-6 py-20 md:px-16">
      <div className="mx-auto grid max-w-[1100px] items-center gap-16 md:grid-cols-2">
        <Reveal>
          <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.14em] text-gold">Integraciones</div>
          <h2 className="text-balance font-display text-2xl font-extrabold leading-[1.1] text-cream md:text-3xl">
            Construido con
            <br />
            <span className="text-gold">las herramientas que ya usás</span>
          </h2>
          <p className="mt-4 max-w-[480px] text-base text-mist">
            No reinventamos la rueda. Combinamos integraciones probadas de forma inteligente para cada nicho.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {TECH_STACK.chips.map((chip) => (
              <span
                key={chip}
                className="flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-2 text-[13px] font-medium text-mist"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {chip}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3">
          {TECH_STACK.cards.map((card, i) => {
            const Icon = ICONS[card.icon];
            return (
              <Reveal key={card.name} delay={i * 0.05}>
                <div className="h-full rounded-xl border border-line bg-navy p-6 transition-colors hover:border-gold/30">
                  <Icon size={24} aria-hidden="true" className="mb-3 text-gold" />
                  <div className="mb-1.5 font-display text-base font-bold text-cream">{card.name}</div>
                  <p className="text-[13px] leading-relaxed text-mist">{card.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

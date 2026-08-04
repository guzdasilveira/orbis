import { Car, Dumbbell, Brain } from "lucide-react";
import { TESTIMONIAL } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * Solo Finanzy tiene cliente real hoy (confirmado por Guzmán). En vez de
 * rellenar FLUX y PureMind con testimonios inventados —el riesgo que
 * señalé en la Fase 1—, esta sección es honesta sobre qué es prueba social
 * verificable y qué es, todavía, solo producto.
 */
export default function SocialProof() {
  return (
    <section className="bg-navy px-6 py-24 md:px-16">
      <SectionHeading eyebrow="Resultados reales" light title="Lo que dicen los que ya automatizaron" />

      <div className="mx-auto mt-14 max-w-[720px]">
        <Reveal>
          <figure className="rounded-2xl border border-gold/20 bg-navy-raised p-10 text-center md:p-14">
            <div className="mb-6 flex justify-center gap-1 text-gold" aria-hidden="true">
              {"★★★★★".split("").map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <blockquote className="font-voice text-xl italic leading-relaxed text-cream md:text-2xl">
              &ldquo;{TESTIMONIAL.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-finanzy/30 bg-finanzy/15 font-display text-sm font-bold text-finanzy">
                  <Car size={16} aria-hidden="true" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-cream">{TESTIMONIAL.author}</div>
                  <div className="text-sm text-mist">{TESTIMONIAL.role}</div>
                </div>
              </div>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Reveal delay={0.06}>
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-navy-raised p-8 text-center">
              <Dumbbell size={22} aria-hidden="true" className="text-flux" />
              <p className="text-sm text-mist">
                FLUX todavía no tiene clientes activos — está en desarrollo, no en producción.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-navy-raised p-8 text-center">
              <Brain size={22} aria-hidden="true" className="text-puremind" />
              <p className="text-sm text-mist">
                PureMind ya funciona — así se ve por dentro. Todavía sin un testimonio para publicar.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

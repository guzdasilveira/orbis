import { Phone, Settings2, Rocket, TrendingUp } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import OrbitField from "@/components/ui/OrbitField";

const ICONS = { Phone, Settings2, Rocket, TrendingUp };

export default function HowItWorks() {
  return (
    <section id="como" className="relative overflow-hidden bg-navy px-6 py-24 md:px-16">
      <OrbitField className="-right-40 -top-40 h-[500px] w-[500px] opacity-30" />
      <div className="relative z-[1] mb-20">
        <SectionHeading
          eyebrow="Proceso"
          light
          title={
            <>
              Empezás a operar
              <br />
              <span className="text-gold">en menos de una semana</span>
            </>
          }
          description="Sin equipos de IT, sin meses de implementación, sin contratos anuales."
        />
      </div>

      <div className="relative z-[1] mx-auto grid max-w-[1100px] grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
        {HOW_IT_WORKS.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <Reveal key={item.step} delay={i * 0.06} className="bg-navy-raised p-8 transition-colors hover:bg-navy-raised2">
              <div className="mb-4 font-display text-5xl font-extrabold leading-none text-gold/15">
                {item.step}
              </div>
              <Icon size={26} aria-hidden="true" className="mb-4 text-gold" />
              <h3 className="mb-2.5 font-display text-base font-bold text-cream">{item.title}</h3>
              <p className="text-sm leading-relaxed text-mist">{item.description}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

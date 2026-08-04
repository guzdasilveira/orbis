import { SITE } from "@/lib/content";
import Button from "@/components/ui/Button";
import OrbitField from "@/components/ui/OrbitField";
import LiveTicker from "@/components/ui/LiveTicker";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-36 text-center md:px-16 md:pt-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(201,162,75,0.14)_0%,transparent_65%)]"
      />
      <OrbitField className="top-10 opacity-70 md:top-4" />

      <div className="relative z-[1] mx-auto max-w-[900px]">
        <Reveal>
          <div className="mx-auto mb-9 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-[18px] py-[7px] text-xs font-semibold uppercase tracking-[0.12em] text-gold-bright">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-gold" />
            Software hecho para tu industria — no para todas
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="text-balance font-display text-hero font-extrabold text-cream">
            Tu negocio corriendo
            <br />
            mientras vos <span className="font-voice font-normal italic text-gold">descansás.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-[620px] text-lg leading-relaxed text-mist">
            Construimos sistemas que hacen el trabajo pesado por vos. Cobranzas, agendas y gestión en piloto
            automático — diseñados para tu industria específica, no para todos.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#productos">Ver los sistemas →</Button>
            <Button href={SITE.whatsappLink} variant="ghost" external>
              Hablar por WhatsApp
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <LiveTicker />
          <p className="mt-3 text-center font-mono text-[11px] text-mist/50">
            así se ve el sistema trabajando — en vivo, antes de explicar una sola feature
          </p>
        </Reveal>
      </div>
    </section>
  );
}

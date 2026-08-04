import { SITE } from "@/lib/content";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import OrbitField from "@/components/ui/OrbitField";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-navy px-6 py-28 text-center md:px-16">
      <OrbitField className="opacity-50" />
      <div className="relative z-[1] mx-auto max-w-[560px]">
        <Reveal>
          <h2 className="text-balance font-display text-2xl font-extrabold leading-[1.1] text-cream md:text-3xl">
            Tu negocio puede
            <br />
            trabajar <span className="text-gold">sin vos mirarlo.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[440px] text-lg leading-relaxed text-mist">
            Agendá una demo de 30 minutos. Te mostramos en vivo cómo aplicamos el sistema exactamente a tu negocio.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-11">
          <ContactForm />
          <div className="my-7 flex items-center gap-4 text-sm text-mist">
            <span className="h-px flex-1 bg-line" />
            o escribinos directamente
            <span className="h-px flex-1 bg-line" />
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={SITE.whatsappLink} external>
              WhatsApp →
            </Button>
            <Button href={`mailto:${SITE.email}`} variant="ghost">
              {SITE.email}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

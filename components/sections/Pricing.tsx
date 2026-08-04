import { Check } from "lucide-react";
import clsx from "clsx";
import { PRODUCTS, SITE } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Pricing() {
  return (
    <section id="precios" className="bg-paper px-6 py-24 md:px-16">
      <SectionHeading
        eyebrow="Precios"
        title={
          <>
            Inversión clara.
            <br />
            <span className="text-gold-ink">El sistema se paga solo.</span>
          </>
        }
        description="Sin contratos largos. Sin sorpresas. Cancelás cuando querés."
      />

      <div className="mx-auto mt-14 grid max-w-[1020px] gap-6 md:grid-cols-3">
        {PRODUCTS.map((product, i) => (
          <Reveal key={product.id} delay={i * 0.06}>
            <div
              className={clsx(
                "flex h-full flex-col rounded-xl border p-9",
                product.pricing.featured
                  ? "border-navy bg-navy"
                  : "border-ink/10 bg-white"
              )}
            >
              <div
                className={clsx(
                  "mb-1.5 text-xs font-bold uppercase tracking-[0.1em]",
                  product.pricing.featured ? "text-mist" : "text-ink-soft"
                )}
              >
                {product.category.split(" · ")[0]} · {product.name}
              </div>
              <div className={clsx("font-display text-[52px] font-extrabold leading-none", product.pricing.featured ? "text-cream" : "text-ink")}>
                <span
                  className={clsx("align-super text-[22px] font-normal", product.pricing.featured && "text-gold-bright")}
                >
                  $
                </span>
                {product.pricing.amount}
              </div>
              <div className={clsx("mt-1 text-sm", product.pricing.featured ? "text-mist" : "text-ink-soft")}>
                {product.pricing.per}
              </div>

              <div className={clsx("my-6 h-px w-full", product.pricing.featured ? "bg-line" : "bg-ink/10")} />

              <p className={clsx("mb-6 text-sm leading-relaxed", product.pricing.featured ? "text-mist" : "text-ink-soft")}>
                {product.pricing.description}
              </p>

              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {product.pricing.features.map((feature) => (
                  <li
                    key={feature}
                    className={clsx("flex gap-2.5 text-sm leading-snug", product.pricing.featured ? "text-mist" : "text-[#4A5568]")}
                  >
                    <Check size={15} strokeWidth={3} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={SITE.whatsappLink}
                className={clsx(
                  "block rounded-lg py-3.5 text-center text-sm font-semibold transition-all",
                  product.pricing.featured
                    ? "bg-gold text-navy hover:bg-gold-bright hover:-translate-y-0.5"
                    : "border-[1.5px] border-ink/15 text-ink hover:bg-black/[0.03]"
                )}
              >
                Agendar demo →
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

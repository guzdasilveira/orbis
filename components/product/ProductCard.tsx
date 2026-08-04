import { Car, Dumbbell, Brain, Check, ArrowRight } from "lucide-react";
import clsx from "clsx";
import type { Product } from "@/lib/content";
import { SITE } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import ProductVisualReal from "./ProductVisualReal";
import ProductVisualMock from "./ProductVisualMock";

const CATEGORY_ICON = { Car, Dumbbell, Brain };

const ACCENT = {
  finanzy: {
    badgeBorder: "border-finanzy/25",
    badgeBg: "bg-finanzy/10",
    text: "text-finanzy",
    check: "text-finanzy",
    checkBg: "bg-finanzy/15",
  },
  flux: {
    badgeBorder: "border-flux/25",
    badgeBg: "bg-flux/10",
    text: "text-flux",
    check: "text-flux",
    checkBg: "bg-flux/15",
  },
  puremind: {
    badgeBorder: "border-puremind/25",
    badgeBg: "bg-puremind/10",
    text: "text-puremind",
    check: "text-puremind",
    checkBg: "bg-puremind/15",
  },
} as const;

export default function ProductCard({ product }: { product: Product }) {
  const Icon = CATEGORY_ICON[product.categoryIcon];
  const accent = ACCENT[product.id];

  return (
    <Reveal>
      <article
        id={product.id}
        className={clsx(
          "scroll-mt-24 grid overflow-hidden rounded-xl border border-line-soft bg-white shadow-[0_4px_32px_rgba(15,28,53,0.06)] transition-shadow hover:shadow-[0_12px_60px_rgba(15,28,53,0.12)] md:grid-cols-2",
          product.reversed && "md:[direction:rtl] [&>*]:[direction:ltr]"
        )}
      >
        <div className="flex flex-col justify-center p-8 md:p-14">
          <div
            className={clsx(
              "mb-6 flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5",
              accent.badgeBorder,
              accent.badgeBg
            )}
          >
            <Icon size={14} aria-hidden="true" className={accent.text} />
            <span className="text-xs font-semibold uppercase tracking-[0.05em] text-ink-soft">
              {product.category}
            </span>
          </div>

          <h3 className="font-display text-[32px] font-extrabold leading-[1.1] text-ink">
            {product.name.slice(0, product.nameAccentFrom)}
            <span className={accent.text}>{product.name.slice(product.nameAccentFrom)}</span>
          </h3>
          <p className="mt-2 font-voice text-lg italic text-ink-soft">{product.tagline}</p>
          <div className={clsx("my-5 h-0.5 w-10 rounded-full", accent.check === "text-finanzy" ? "bg-finanzy" : accent.check === "text-flux" ? "bg-flux" : "bg-puremind")} />

          <p className="mb-7 text-[15px] leading-relaxed text-ink-soft">{product.description}</p>

          <ul className="mb-9 flex flex-col gap-2.5">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#4A5568]">
                <span
                  className={clsx(
                    "mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full",
                    accent.checkBg,
                    accent.check
                  )}
                >
                  <Check size={11} strokeWidth={3} aria-hidden="true" />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href={SITE.whatsappLink}
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-cream transition-all hover:gap-3 hover:bg-navy-raised"
          >
            Ver {product.name} <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="min-h-[320px]">
          {product.hasRealScreenshots ? <ProductVisualReal product={product} /> : <ProductVisualMock />}
        </div>
      </article>
    </Reveal>
  );
}

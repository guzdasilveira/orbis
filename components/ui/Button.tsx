import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "gold" | "ghost" | "outline";

const VARIANT_CLASSES: Record<Variant, string> = {
  gold: "bg-gold text-navy hover:bg-gold-bright hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-cream border border-line hover:border-line-strong hover:bg-white/5",
  outline:
    "border-[1.5px] border-ink/15 text-ink hover:bg-black/[0.03]",
};

export default function Button({
  href,
  variant = "gold",
  children,
  className,
  external,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const classes = clsx(
    "inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200",
    VARIANT_CLASSES[variant],
    className
  );

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

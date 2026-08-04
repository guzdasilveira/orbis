import clsx from "clsx";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  as: Tag = "h2",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
  as?: "h2";
}) {
  return (
    <Reveal className={clsx(align === "center" && "text-center")}>
      <div
        className={clsx(
          "mb-3.5 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-gold",
          align === "center" && "justify-center"
        )}
      >
        {eyebrow}
      </div>
      <Tag
        className={clsx(
          "text-balance font-display text-2xl font-extrabold leading-[1.1] md:text-3xl",
          light ? "text-cream" : "text-ink"
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={clsx(
            "mx-auto mt-4 max-w-[520px] text-base",
            light ? "text-mist" : "text-ink-soft",
            align === "left" && "mx-0"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

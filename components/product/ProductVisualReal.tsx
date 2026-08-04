"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import type { Product } from "@/lib/content";

/**
 * Marco de ventana simple para las capturas reales del producto — sin fingir
 * ser lo que no es, a diferencia del mockup de CSS/emoji que reemplaza (Fase 1).
 */
export default function ProductVisualReal({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const shots = product.screenshots;

  return (
    <div className="relative flex h-full flex-col justify-center gap-3 bg-gradient-to-br from-navy-raised2 to-navy p-6 md:p-8">
      <div className="overflow-hidden rounded-xl border border-line-strong bg-navy-raised shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-2 font-mono text-[11px] text-mist/60">
            {product.name} · captura real
          </span>
        </div>
        <div className="relative aspect-[16/9] w-full bg-white">
          <Image
            src={shots[active].src}
            alt={shots[active].alt}
            fill
            className="object-cover object-top"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>

      {shots.length > 1 && (
        <div className="flex justify-center gap-2" role="tablist" aria-label={`Vistas de ${product.name}`}>
          {shots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={shot.alt}
              onClick={() => setActive(i)}
              className={clsx(
                "h-1.5 rounded-full transition-all",
                i === active ? "w-6 bg-gold-bright" : "w-1.5 bg-white/20 hover:bg-white/35"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

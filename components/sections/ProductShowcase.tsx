import { PRODUCTS } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/product/ProductCard";

export default function ProductShowcase() {
  return (
    <section id="productos" className="bg-paper px-6 pb-24 pt-4 md:px-16">
      <div className="mb-16">
        <SectionHeading
          eyebrow="Nuestros productos"
          title={
            <>
              Tres sistemas.
              <br />
              <span className="text-gold-ink">Tres problemas resueltos.</span>
            </>
          }
          description="Cada uno fue diseñado desde adentro del nicho. Por eso funcionan donde los genéricos fallan."
        />
      </div>

      <div className="mx-auto flex max-w-[1100px] flex-col gap-7">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

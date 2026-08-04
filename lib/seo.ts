import { SITE, PRODUCTS } from "./content";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ORBIS",
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "UY",
    },
    sameAs: [],
  };
}

export function softwareApplicationsJsonLd() {
  return PRODUCTS.map((product) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: product.description,
    offers: {
      "@type": "Offer",
      price: product.pricing.amount,
      priceCurrency: "USD",
      priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
    },
    provider: {
      "@type": "Organization",
      name: "ORBIS",
      url: SITE.url,
    },
  }));
}

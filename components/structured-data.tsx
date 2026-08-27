import { storeLocations } from "@/lib/store-locations";
import { contact } from "@/lib/contact";
import { siteUrl } from "@/lib/site";

// JSON-LD por local: ayuda a Google a mostrar la ficha del negocio (dirección, mapa, horarios) en resultados locales.
export function StructuredData() {
  const stores = storeLocations.map((location) => ({
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: `Hollywood — ${location.name}`,
    image: `${siteUrl}/opengraph-image.jpg`,
    url: siteUrl,
    telephone: `+${contact.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: "Córdoba",
      addressRegion: "Córdoba",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
    openingHoursSpecification: location.hours.map((period) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: period.dayOfWeek,
      opens: period.opens,
      closes: period.closes,
    })),
    sameAs: [contact.instagramUrl],
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(stores) }}
    />
  );
}

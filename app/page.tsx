import { HeroSection } from "@/components/hero-section";
import { CategoryHighlights } from "@/components/category-highlights";
import { StatsBanner } from "@/components/stats-banner";
import { LocationsSection } from "@/components/locations-section";
import { GallerySection } from "@/components/gallery-section";

// Tienda: sección de destacados pausada hasta que el catálogo esté listo para vender online.
// Historia: no forma parte del diseño actual, se puede reincorporar más adelante.

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategoryHighlights />
      <StatsBanner />
      <LocationsSection />
      <GallerySection />
    </div>
  );
}

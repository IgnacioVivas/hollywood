import { HeroSection } from "@/components/hero-section";
import { CategoryHighlights } from "@/components/category-highlights";
import { StyleShowcaseSection } from "@/components/style-showcase-section";
import { StatsBanner } from "@/components/stats-banner";
import { LocationsSection } from "@/components/locations-section";
import { PhotoWallSection } from "@/components/photo-wall-section";

// Tienda: sección de destacados pausada hasta que el catálogo esté listo para vender online.
// Historia: no forma parte del diseño actual, se puede reincorporar más adelante.

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategoryHighlights />
      <StyleShowcaseSection />
      <StatsBanner />
      <LocationsSection />
      <PhotoWallSection />
    </div>
  );
}

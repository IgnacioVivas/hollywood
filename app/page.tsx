import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { HeroSection } from "@/components/hero-section";
import { StatsBanner } from "@/components/stats-banner";
import { HistorySection } from "@/components/history-section";
import { LocationsSection } from "@/components/locations-section";
import { fetchFeaturedProducts } from "@/lib/api";

export default async function Home() {
  const featuredProducts = await fetchFeaturedProducts();

  return (
    <div className="flex flex-col">
      <HeroSection />

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-heading text-2xl tracking-wide">Destacados</h2>
          <Link
            href="/productos"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Ver todo →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <StatsBanner />
      <HistorySection />
      <LocationsSection />
    </div>
  );
}

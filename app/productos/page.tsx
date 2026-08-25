// Tienda: página pausada, no está enlazada desde el sitio hasta que Hollywood venda online.
import type { Metadata } from "next";
import { ProductGrid } from "@/components/product-grid";
import { ProductFilters } from "@/components/product-filters";
import { parseProductFilters } from "@/lib/product-filters";

export const metadata: Metadata = {
  title: "Productos",
};

export default async function ProductosPage(props: PageProps<"/productos">) {
  const searchParams = await props.searchParams;
  const filters = parseProductFilters(searchParams);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-heading mb-8 text-2xl tracking-wide">Productos</h1>
      <ProductFilters />
      <ProductGrid filters={filters} />
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductImagePlaceholder } from "@/components/product-image-placeholder";
import { AddToCartForm } from "@/components/add-to-cart-form";
import { fetchProductBySlug } from "@/lib/api";
import { formatPrice } from "@/lib/format";

export async function generateMetadata(
  props: PageProps<"/productos/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = await fetchProductBySlug(slug);
  return { title: product?.name ?? "Producto" };
}

export default async function ProductoPage(
  props: PageProps<"/productos/[slug]">,
) {
  const { slug } = await props.params;
  const product = await fetchProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2">
      <div className="aspect-square overflow-hidden rounded-xl">
        <ProductImagePlaceholder
          name={product.name}
          category={product.category}
        />
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold tracking-tight">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold">
            {formatPrice(product.price)}
          </p>
        </div>

        <p className="text-muted-foreground">{product.description}</p>

        <AddToCartForm product={product} />
      </div>
    </div>
  );
}

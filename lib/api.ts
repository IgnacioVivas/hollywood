import { mockProducts } from "@/lib/mock-products";
import type { Product } from "@/lib/types";

function delay<T>(data: T, ms = 350): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

export async function fetchProducts(): Promise<Product[]> {
  return delay(mockProducts);
}

export async function fetchFeaturedProducts(): Promise<Product[]> {
  return delay(mockProducts.filter((product) => product.featured));
}

export async function fetchProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  return delay(mockProducts.find((product) => product.slug === slug));
}

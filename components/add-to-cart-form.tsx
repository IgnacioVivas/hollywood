"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/use-cart-store";
import type { Product } from "@/lib/types";

export function AddToCartForm({ product }: { product: Product }) {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const [size, setSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);

  const outOfStock = product.stock === 0;

  function handleAddToCart() {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      size,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="space-y-6">
      {product.sizes.length > 1 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Talle</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSize(option)}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-sm transition-colors",
                  option === size
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-foreground/40",
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <Button
          size="lg"
          className="flex-1"
          disabled={outOfStock}
          onClick={handleAddToCart}
        >
          {outOfStock ? "Sin stock" : added ? "¡Agregado!" : "Agregar al carrito"}
        </Button>
      </div>

      {added && (
        <button
          type="button"
          onClick={() => router.push("/carrito")}
          className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Ver carrito →
        </button>
      )}
    </div>
  );
}

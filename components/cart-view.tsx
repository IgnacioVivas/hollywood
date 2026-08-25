"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ProductImagePlaceholder } from "@/components/product-image-placeholder";
import { useMounted } from "@/hooks/use-mounted";
import { formatPrice } from "@/lib/format";
import { mockProducts } from "@/lib/mock-products";
import { selectTotalPrice, useCartStore } from "@/store/use-cart-store";

export function CartView() {
  const mounted = useMounted();
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore(selectTotalPrice);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <p className="text-muted-foreground">Tu carrito está vacío.</p>
        <Link href="/productos" className={buttonVariants()}>
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_320px]">
      <ul className="divide-y divide-border">
        {items.map((item) => {
          const product = mockProducts.find((p) => p.id === item.productId);
          const category = product?.category ?? "gorras";

          return (
            <li
              key={`${item.productId}-${item.size}`}
              className="flex gap-4 py-6"
            >
              <div className="size-24 shrink-0 overflow-hidden rounded-lg">
                <ProductImagePlaceholder name={item.name} category={category} />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Talle: {item.size}
                  </p>
                  <p className="text-sm font-semibold">
                    {formatPrice(item.price)}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center rounded-md border border-border">
                    <button
                      type="button"
                      className="flex size-8 cursor-pointer items-center justify-center text-muted-foreground hover:text-foreground"
                      onClick={() =>
                        updateQuantity(item.productId, item.size, item.quantity - 1)
                      }
                      aria-label="Restar cantidad"
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="flex size-8 cursor-pointer items-center justify-center text-muted-foreground hover:text-foreground"
                      onClick={() =>
                        updateQuantity(item.productId, item.size, item.quantity + 1)
                      }
                      aria-label="Sumar cantidad"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(item.productId, item.size)}
                    className="cursor-pointer text-muted-foreground hover:text-destructive"
                    aria-label="Quitar del carrito"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="h-fit space-y-4 rounded-xl border border-border p-6">
        <div className="flex items-center justify-between text-lg font-semibold">
          <span>Total</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
        <Button size="lg" className="w-full" disabled>
          Ir a pagar (Mercado Pago próximamente)
        </Button>
      </div>
    </div>
  );
}

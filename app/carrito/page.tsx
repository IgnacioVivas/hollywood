// Tienda: página pausada, no está enlazada desde el sitio hasta que Hollywood venda online.
import type { Metadata } from "next";
import { CartView } from "@/components/cart-view";

export const metadata: Metadata = {
  title: "Carrito",
};

export default function CarritoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-heading mb-8 text-2xl tracking-wide">Tu carrito</h1>
      <CartView />
    </div>
  );
}

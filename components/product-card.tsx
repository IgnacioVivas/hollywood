import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductImagePlaceholder } from "@/components/product-image-placeholder";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/productos/${product.slug}`}>
      <Card className="h-full overflow-hidden py-0 transition-shadow hover:shadow-lg">
        <div className="relative aspect-square overflow-hidden">
          <ProductImagePlaceholder
            name={product.name}
            category={product.category}
          />
          {product.stock === 0 && (
            <Badge variant="secondary" className="absolute left-2 top-2">
              Sin stock
            </Badge>
          )}
        </div>
        <CardContent className="space-y-1 p-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            {product.category}
          </p>
          <h3 className="font-medium leading-tight">{product.name}</h3>
          <span className="block font-semibold">
            {formatPrice(product.price)}
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}

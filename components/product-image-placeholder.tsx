import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/lib/types";

const GRADIENTS: Record<ProductCategory, string> = {
  gorras: "from-zinc-800 to-zinc-600 dark:from-zinc-700 dark:to-zinc-500",
  sombreros: "from-amber-800 to-amber-600 dark:from-amber-700 dark:to-amber-500",
  boinas: "from-red-900 to-red-700 dark:from-red-800 dark:to-red-600",
};

export function ProductImagePlaceholder({
  name,
  category,
  className,
}: {
  name: string;
  category: ProductCategory;
  className?: string;
}) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <div
      className={cn(
        "flex size-full items-center justify-center bg-gradient-to-br text-4xl font-bold text-white/90",
        GRADIENTS[category],
        className,
      )}
      aria-hidden
    >
      {initial}
    </div>
  );
}

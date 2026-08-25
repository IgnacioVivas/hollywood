import { ThemeImage } from "@/components/theme-image";

type BrandLogoVariant = "algo-diferente" | "sombreros-gorras";

// Dimensiones reales de cada archivo recortado en public/logos (bounding box del texto).
const LOGO_DIMENSIONS: Record<BrandLogoVariant, { width: number; height: number }> = {
  "algo-diferente": { width: 4046, height: 862 },
  "sombreros-gorras": { width: 4046, height: 853 },
};

const LOGO_ALT: Record<BrandLogoVariant, string> = {
  "algo-diferente": "Hollywood — Algo diferente",
  "sombreros-gorras": "Hollywood — Sombreros & Gorras",
};

export function BrandLogo({
  variant,
  className,
  priority,
}: {
  variant: BrandLogoVariant;
  className?: string;
  priority?: boolean;
}) {
  const { width, height } = LOGO_DIMENSIONS[variant];

  return (
    <ThemeImage
      lightSrc={`/logos/hollywood-${variant}-black.png`}
      darkSrc={`/logos/hollywood-${variant}-white.png`}
      alt={LOGO_ALT[variant]}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}

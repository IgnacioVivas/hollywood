import type {
  Product,
  ProductAgeGroup,
  ProductAudience,
  ProductCategory,
} from "@/lib/types";

export type ProductFilters = {
  category?: ProductCategory;
  audience?: ProductAudience;
  ageGroup?: ProductAgeGroup;
};

export type FilterOption<T extends string> = {
  value: T;
  label: string;
};

export const CATEGORY_OPTIONS: FilterOption<ProductCategory>[] = [
  { value: "gorras", label: "Gorras" },
  { value: "sombreros", label: "Sombreros" },
  { value: "boinas", label: "Boinas" },
];

export const AUDIENCE_OPTIONS: FilterOption<ProductAudience>[] = [
  { value: "hombre", label: "Hombre" },
  { value: "mujer", label: "Mujer" },
  { value: "unisex", label: "Unisex" },
];

export const AGE_GROUP_OPTIONS: FilterOption<ProductAgeGroup>[] = [
  { value: "adulto", label: "Adultos" },
  { value: "nino", label: "Niños" },
];

// Las search params de Next pueden llegar como string o string[] (params repetidos).
function firstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function parseOption<T extends string>(
  value: string | string[] | undefined,
  options: FilterOption<T>[],
): T | undefined {
  const raw = firstValue(value);
  return options.find((option) => option.value === raw)?.value;
}

export function parseProductFilters(
  params: Record<string, string | string[] | undefined>,
): ProductFilters {
  return {
    category: parseOption(params.categoria, CATEGORY_OPTIONS),
    audience: parseOption(params.genero, AUDIENCE_OPTIONS),
    ageGroup: parseOption(params.edad, AGE_GROUP_OPTIONS),
  };
}

export function matchesFilters(
  product: Product,
  filters: ProductFilters,
): boolean {
  if (filters.category && product.category !== filters.category) {
    return false;
  }
  if (filters.audience && product.audience !== filters.audience) {
    return false;
  }
  if (filters.ageGroup && product.ageGroup !== filters.ageGroup) {
    return false;
  }
  return true;
}

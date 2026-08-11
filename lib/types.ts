export type ProductCategory = "gorras" | "sombreros" | "boinas";
export type ProductAudience = "hombre" | "mujer" | "unisex";
export type ProductAgeGroup = "adulto" | "nino";

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  audience: ProductAudience;
  ageGroup: ProductAgeGroup;
  sizes: string[];
  stock: number;
  featured: boolean;
};

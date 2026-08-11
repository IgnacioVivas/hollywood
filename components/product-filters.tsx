"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FilterPillGroup } from "@/components/filter-pill-group";
import {
  AGE_GROUP_OPTIONS,
  AUDIENCE_OPTIONS,
  CATEGORY_OPTIONS,
  parseProductFilters,
} from "@/lib/product-filters";

export function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filters = parseProductFilters(Object.fromEntries(searchParams));

  function setParam(key: string, value: string | undefined) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="mb-8 flex flex-col gap-6 border-b border-border/60 pb-8 sm:flex-row sm:flex-wrap sm:gap-10">
      <FilterPillGroup
        label="Categoría"
        options={CATEGORY_OPTIONS}
        value={filters.category}
        onChange={(value) => setParam("categoria", value)}
      />
      <FilterPillGroup
        label="Género"
        options={AUDIENCE_OPTIONS}
        value={filters.audience}
        onChange={(value) => setParam("genero", value)}
      />
      <FilterPillGroup
        label="Edad"
        options={AGE_GROUP_OPTIONS}
        value={filters.ageGroup}
        onChange={(value) => setParam("edad", value)}
      />
    </div>
  );
}

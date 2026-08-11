"use client";

import { cn } from "@/lib/utils";
import type { FilterOption } from "@/lib/product-filters";

export function FilterPillGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: FilterOption<T>[];
  value: T | undefined;
  onChange: (value: T | undefined) => void;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        <Pill active={value === undefined} onClick={() => onChange(undefined)}>
          Todos
        </Pill>
        {options.map((option) => (
          <Pill
            key={option.value}
            active={value === option.value}
            onClick={() =>
              onChange(value === option.value ? undefined : option.value)
            }
          >
            {option.label}
          </Pill>
        ))}
      </div>
    </div>
  );
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-md border px-3 py-1.5 text-sm transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border hover:border-foreground/40",
      )}
    >
      {children}
    </button>
  );
}

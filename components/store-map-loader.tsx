"use client";

import dynamic from "next/dynamic";

export const StoreMapLoader = dynamic(
  () => import("@/components/store-map").then((mod) => mod.StoreMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
        Cargando mapa…
      </div>
    ),
  },
);

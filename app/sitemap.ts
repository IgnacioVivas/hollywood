import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Tienda: /productos y /carrito quedan fuera del sitemap hasta que el catálogo esté online.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

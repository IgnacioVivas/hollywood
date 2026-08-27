import Link from "next/link";
import { ThemeImage } from "@/components/theme-image";
import { contact } from "@/lib/contact";

const CATEGORIES = [
  {
    id: "sombreros",
    label: "Sombreros",
    lightSrc: "/logos/icon-sombrero-black.png",
    darkSrc: "/logos/icon-sombrero-white.png",
    width: 2366,
    height: 1690,
  },
  {
    id: "gorras",
    label: "Gorras",
    lightSrc: "/logos/icon-gorra-black.png",
    darkSrc: "/logos/icon-gorra-white.png",
    width: 1838,
    height: 1377,
  },
];

export function CategoryHighlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="font-heading mb-8 text-center text-2xl tracking-wide sm:text-3xl">
        Lo que vas a encontrar
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {CATEGORIES.map((category) => (
          <Link
            key={category.id}
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-muted/30 px-8 py-10 transition-colors hover:border-primary/50 hover:bg-muted/50"
          >
            <ThemeImage
              lightSrc={category.lightSrc}
              darkSrc={category.darkSrc}
              alt={category.label}
              width={category.width}
              height={category.height}
              className="h-28 w-auto transition-transform group-hover:scale-105"
            />
            <span className="flex flex-col items-center gap-2">
              <span className="h-[3px] w-10 rounded-full bg-primary transition-all duration-300 group-hover:w-16" />
              <span className="font-heading text-2xl tracking-wide transition-colors group-hover:text-primary">
                {category.label}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Consultanos por WhatsApp
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

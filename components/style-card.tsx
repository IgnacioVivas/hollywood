import Image from "next/image";
import { cn } from "@/lib/utils";
import type { StyleHighlight } from "@/lib/style-showcase";

export function StyleCard({ style }: { style: StyleHighlight }) {
  return (
    <article
      className={cn(
        "group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted",
        style.wide ? "sm:col-span-2 sm:aspect-[21/9]" : "sm:aspect-[4/3]",
      )}
    >
      <Image
        src={style.image}
        alt={`${style.label}: ${style.phrase}`}
        fill
        unoptimized
        style={{ objectPosition: `${style.focalX}% 50%` }}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 sm:p-8">
        <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-white/80">
          <span className="h-[3px] w-8 rounded-full bg-primary transition-all duration-300 group-hover:w-12" />
          {style.label}
        </span>
        <h3
          className={cn(
            "font-heading max-w-md text-2xl tracking-wide text-white sm:text-3xl",
            style.wide && "sm:max-w-xl sm:text-4xl",
          )}
        >
          {style.phrase}
        </h3>
      </div>
    </article>
  );
}

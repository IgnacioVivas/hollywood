import Image from "next/image";
import { cn } from "@/lib/utils";
import type { WallPhoto } from "@/lib/photo-wall";

const SPAN_BY_SIZE = {
  large: "col-span-2 row-span-2",
  wide: "col-span-2",
} satisfies Record<NonNullable<WallPhoto["size"]>, string>;

export function PhotoWallTile({ photo }: { photo: WallPhoto }) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl bg-muted",
        photo.size && SPAN_BY_SIZE[photo.size],
      )}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={1080}
        height={1080}
        unoptimized
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
}

import { PhotoWallTile } from "@/components/photo-wall-tile";
import { wallPhotos } from "@/lib/photo-wall";

export function PhotoWallSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <h2 className="font-heading text-3xl tracking-wide">
          Pasá a conocernos
        </h2>
        <p className="mt-2 text-muted-foreground">
          Variedad, calidad y la atención de siempre.
        </p>
      </div>

      {/* Grilla de celdas cuadradas: 2×8 en mobile, 4×4 desde sm. */}
      <div className="grid aspect-[1/4] grid-cols-2 grid-rows-8 gap-2 sm:aspect-square sm:grid-cols-4 sm:grid-rows-4 sm:gap-3">
        {wallPhotos.map((photo) => (
          <PhotoWallTile key={photo.src} photo={photo} />
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";

const GALLERY_PHOTOS = [
  { src: "/photos/gallery-1.jpg", alt: "Gorras Hollywood en exhibición", focalX: 66 },
  { src: "/photos/gallery-2.jpg", alt: "Sombrero de paño gris Hollywood", focalX: 76 },
  { src: "/photos/gallery-3.jpg", alt: "Gorra estilo newsboy Hollywood", focalX: 68 },
];

export function GallerySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {GALLERY_PHOTOS.map((photo) => (
          <div
            key={photo.src}
            className="aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={800}
              unoptimized
              style={{ objectPosition: `${photo.focalX}% 50%` }}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

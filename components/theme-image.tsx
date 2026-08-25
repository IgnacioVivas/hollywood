import Image from "next/image";
import { cn } from "@/lib/utils";

// Muestra `lightSrc` en tema claro y `darkSrc` en tema oscuro sin JS (vía dark:),
// evitando el flash de contenido y el optimizador de imágenes de Next en dev.
export function ThemeImage({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className,
  priority,
}: {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <>
      <Image
        src={lightSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        unoptimized
        className={cn("object-contain", className, "dark:hidden")}
      />
      <Image
        src={darkSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        unoptimized
        className={cn("hidden object-contain", className, "dark:block")}
      />
    </>
  );
}

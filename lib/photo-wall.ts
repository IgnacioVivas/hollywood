export type WallPhoto = {
  src: string;
  alt: string;
  /** "large": ocupa 2×2 celdas · "wide": panorámica de 2×1 celdas. */
  size?: "large" | "wide";
};

const photo = (
  name: string,
  alt: string,
  size?: WallPhoto["size"],
): WallPhoto => ({ src: `/photos/local/${name}.jpg`, alt, size });

// El orden importa: con la grilla de 4 columnas (2 en mobile) arma el mosaico
// sin huecos — fachada grande arriba a la izquierda, las dos panorámicas abajo
// y la vidriera nocturna grande a la derecha, en espejo.
export const wallPhotos: WallPhoto[] = [
  photo("fachada", "Fachada del local Hollywood, Sombreros & Gorras", "large"),
  photo("vidriera-hollywood", "Vidriera con el cartel Hollywood"),
  photo("vidriera-gorras", "Vidriera con gorras de todos los colores"),
  photo("vidriera-sombreros", "Vidriera de sombreros y gorras"),
  photo("exhibidor-colgante", "Exhibidor colgante de sombreros de paja"),
  photo("salon-mostrador", "Salón con el mostrador y la pared de gorras", "wide"),
  photo("vidriera-noche", "Vidriera iluminada con gorras y sombreros", "large"),
  photo("salon-escalera", "Paredes de gorras y mostrador junto a la escalera", "wide"),
];

export type StyleHighlight = {
  id: string;
  label: string;
  phrase: string;
  image: string;
  /** Posición horizontal del producto en la foto (0-100), para no recortarlo. */
  focalX: number;
  /** Ocupa todo el ancho de la grilla en vez de media columna. */
  wide?: boolean;
};

// Orden del mosaico: ancho · dos a la par · ancho.
export const styleHighlights: StyleHighlight[] = [
  {
    id: "verano",
    label: "Verano",
    phrase: "Protegete del sol con el mejor estilo.",
    image: "/photos/estilos/verano.jpg",
    focalX: 60,
    wide: true,
  },
  {
    id: "viaje",
    label: "Viaje",
    phrase: "Diseñados para acompañarte en cada ruta.",
    image: "/photos/estilos/viaje.jpg",
    focalX: 65,
  },
  {
    id: "boinas",
    label: "Boinas",
    phrase: "El toque clásico que no pasa de moda.",
    image: "/photos/estilos/boinas.jpg",
    focalX: 66,
  },
  {
    id: "clasico",
    label: "Algo clásico",
    phrase: "Estilo y comodidad en un solo accesorio.",
    image: "/photos/estilos/clasico.jpg",
    focalX: 67,
    wide: true,
  },
];

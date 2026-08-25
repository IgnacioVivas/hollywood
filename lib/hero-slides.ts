import { contact } from "@/lib/contact";

export type HeroSlide = {
  id: string;
  title: string;
  image: string;
  /** Posición horizontal del producto en la foto (0-100), para no recortarlo en mobile. */
  focalX: number;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "bienvenida",
    title: "Hollywood, algo diferente",
    image: "/photos/hero-bienvenida.jpg",
    focalX: 65,
    ctaLabel: "Cómo llegar",
    ctaHref: "#ubicacion",
  },
  {
    id: "whatsapp",
    title: "Gorras, sombreros y boinas para toda la familia",
    image: "/photos/hero-gorras.jpg",
    focalX: 68,
    ctaLabel: "Escribinos por WhatsApp",
    ctaHref: contact.whatsappUrl,
    ctaExternal: true,
  },
  {
    id: "instagram",
    title: "30 años vistiendo Córdoba",
    image: "/photos/hero-historia.jpg",
    focalX: 72,
    ctaLabel: "Seguinos en Instagram",
    ctaHref: contact.instagramUrl,
    ctaExternal: true,
  },
];

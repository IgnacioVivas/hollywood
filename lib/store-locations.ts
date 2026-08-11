export type StoreLocation = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
};

export const storeLocations: StoreLocation[] = [
  {
    id: "gran-rex",
    name: "Galería Gran Rex",
    address: "Galería Gran Rex, Local 9 — Peatonal, Centro, Córdoba",
    lat: -31.4134374,
    lng: -64.1850999,
  },
  {
    id: "9-de-julio",
    name: "9 de Julio 190",
    address: "9 de Julio 190 — Peatonal, Centro, Córdoba",
    lat: -31.4140727,
    lng: -64.1860368,
  },
];

export type OpeningHours = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

export type StoreLocation = {
  id: string;
  name: string;
  address: string;
  hoursText: string;
  hours: OpeningHours[];
  lat: number;
  lng: number;
};

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const SATURDAY = ["Saturday"];

export const storeLocations: StoreLocation[] = [
  {
    id: "gran-rex",
    name: "Galería Gran Rex",
    address: "Galería Gran Rex, Local 9 — Peatonal, Centro, Córdoba",
    hoursText: "Lun a vie: 10:00 a 19:00 hs · Sáb: 10:00 a 14:00 hs",
    hours: [
      { dayOfWeek: WEEKDAYS, opens: "10:00", closes: "19:00" },
      { dayOfWeek: SATURDAY, opens: "10:00", closes: "14:00" },
    ],
    lat: -31.4134374,
    lng: -64.1850999,
  },
  {
    id: "9-de-julio",
    name: "9 de Julio 190",
    address: "9 de Julio 190 — Peatonal, Centro, Córdoba",
    hoursText: "Lun a vie: 10:00 a 19:30 hs · Sáb: 10:00 a 14:00 hs",
    hours: [
      { dayOfWeek: WEEKDAYS, opens: "10:00", closes: "19:30" },
      { dayOfWeek: SATURDAY, opens: "10:00", closes: "14:00" },
    ],
    lat: -31.4140727,
    lng: -64.1860368,
  },
];

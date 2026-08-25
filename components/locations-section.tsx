import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { StoreMapLoader } from "@/components/store-map-loader";
import { storeLocations } from "@/lib/store-locations";
import { contact } from "@/lib/contact";
import { buttonVariants } from "@/components/ui/button";

export function LocationsSection() {
  return (
    <section id="ubicacion" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-16">
      <h2 className="font-heading mb-8 text-3xl tracking-wide">
        Dónde encontrarnos
      </h2>

      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          {storeLocations.map((location) => (
            <div key={location.id} className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">{location.name}</p>
                <p className="text-sm text-muted-foreground">
                  {location.address}
                </p>
                <p className="text-sm text-muted-foreground">
                  {location.hoursText}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Cómo llegar →
                </a>
              </div>
            </div>
          ))}

          <Link
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ className: "gap-2" })}
          >
            <MessageCircle className="size-4" />
            Consultas por WhatsApp
          </Link>
        </div>

        <div className="isolate h-80 overflow-hidden rounded-xl border border-border md:h-auto">
          <StoreMapLoader />
        </div>
      </div>
    </section>
  );
}

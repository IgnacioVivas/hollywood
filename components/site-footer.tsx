import Link from "next/link";
import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import { contact } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-lg tracking-wide text-foreground">
            HOLLYWOOD
          </p>
          <p>Gorras, sombreros y boinas — Córdoba, Argentina</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <SiWhatsapp size={16} />
            WhatsApp
          </Link>
          <Link
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <SiInstagram size={16} />
            {contact.instagramHandle}
          </Link>
          <Link
            href={contact.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <SiFacebook size={16} />
            Facebook
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        Hollywood — 30 años vistiendo Córdoba
      </div>
    </footer>
  );
}

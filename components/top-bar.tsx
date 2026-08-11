import Link from "next/link";
import { SiFacebook, SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { contact } from "@/lib/contact";

const SOCIAL_LINKS = [
  { href: contact.whatsappUrl, label: "WhatsApp", Icon: SiWhatsapp },
  { href: contact.instagramUrl, label: "Instagram", Icon: SiInstagram },
  { href: contact.facebookUrl, label: "Facebook", Icon: SiFacebook },
];

export function TopBar() {
  return (
    <div className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto flex max-w-6xl items-center justify-end gap-4 px-4 py-1.5">
        {SOCIAL_LINKS.map(({ href, label, Icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon size={14} />
          </Link>
        ))}
      </div>
    </div>
  );
}

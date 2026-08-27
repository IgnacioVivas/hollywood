import Link from "next/link";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { contact } from "@/lib/contact";

const SOCIAL_LINKS = [
  { href: contact.whatsappUrl, label: "WhatsApp", Icon: SiWhatsapp },
  { href: contact.instagramUrl, label: "Instagram", Icon: SiInstagram },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-[var(--layout-header-height)] max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <BrandLogo variant="sombreros-gorras" priority className="h-8 w-auto" />
        </Link>

        <div className="flex items-center gap-1">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon size={16} />
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { contact } from "@/lib/contact";

const YEARS_HIGHLIGHT = { value: "30+", label: "Años en Córdoba" };

const SOCIAL_HIGHLIGHTS = [
  {
    href: contact.whatsappUrl,
    label: "Escribinos",
    Icon: SiWhatsapp,
  },
  {
    href: contact.instagramUrl,
    label: "Seguinos",
    Icon: SiInstagram,
  },
];

export function StatsBanner() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 text-center">
        <p className="font-heading text-2xl tracking-wide sm:text-3xl">
          Calidad y actitud en cada detalle
        </p>
        <div className="mt-10 grid grid-cols-3 gap-6">
          <div>
            <p className="font-heading text-4xl sm:text-5xl">
              {YEARS_HIGHLIGHT.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-primary-foreground/80">
              {YEARS_HIGHLIGHT.label}
            </p>
          </div>

          {SOCIAL_HIGHLIGHTS.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-primary-foreground/15 transition-colors group-hover:bg-primary-foreground/25">
                <Icon size={22} color="currentColor" />
              </span>
              <span className="text-xs uppercase tracking-wide text-primary-foreground/80">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

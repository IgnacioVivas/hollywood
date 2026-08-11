import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-zinc-950">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #d92b2b 0, #d92b2b 2px, transparent 2px, transparent 42px)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/70"
      />
      {/* TODO: cuando haya una foto real del local o los productos, reemplazar la textura de arriba por una <Image> de fondo */}

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-24 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
          30 años vistiendo Córdoba
        </span>
        <h1 className="font-heading text-5xl tracking-wide text-primary sm:text-7xl">
          HOLLYWOOD
        </h1>
        <p className="text-lg text-zinc-300">Algo diferente.</p>
        <p className="max-w-md text-sm text-zinc-400">
          Gorras, sombreros y boinas para toda la familia.
        </p>
        <Link
          href="/productos"
          className={buttonVariants({ size: "lg", className: "mt-4" })}
        >
          Ver productos
        </Link>
      </div>
    </section>
  );
}

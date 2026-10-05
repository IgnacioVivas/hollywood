import Link from "next/link";
import { StyleCard } from "@/components/style-card";
import { styleHighlights } from "@/lib/style-showcase";

export function StyleShowcaseSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <h2 className="font-heading mb-8 text-center text-2xl tracking-wide sm:text-3xl">
        Un estilo para cada ocasión
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {styleHighlights.map((style) => (
          <StyleCard key={style.id} style={style} />
        ))}
      </div>

      <p className="mt-8 text-center text-muted-foreground">
        Encontrá todo esto y más en nuestros locales.{" "}
        <Link
          href="#ubicacion"
          className="font-medium text-primary hover:underline"
        >
          Cómo llegar →
        </Link>
      </p>
    </section>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { heroSlides } from "@/lib/hero-slides";

const AUTOPLAY_MS = 6000;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  const goTo = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [index, goTo]);

  return (
    <section className="relative h-[calc(100vh-var(--layout-header-height))] w-full overflow-hidden">
      {heroSlides.map((s, i) => (
        <Image
          key={s.id}
          src={s.image}
          alt={s.title}
          fill
          priority={i === 0}
          unoptimized
          style={{ objectPosition: `${s.focalX}% 50%` }}
          className={cn(
            "object-cover transition-opacity duration-700",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      <div className="absolute inset-0 bg-black/45 sm:hidden" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-black/75 via-black/35 to-transparent sm:block" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center text-white sm:items-start sm:px-16 sm:text-left">
        <h1 className="font-heading max-w-xs text-4xl tracking-wide sm:max-w-2xl sm:text-6xl">
          {slide.title}
        </h1>
        <Link
          href={slide.ctaHref}
          target={slide.ctaExternal ? "_blank" : undefined}
          rel={slide.ctaExternal ? "noopener noreferrer" : undefined}
          className={cn(
            buttonVariants({ variant: "default" }),
            "h-11 px-6 text-base font-semibold sm:h-12 sm:px-8 sm:text-lg",
          )}
        >
          {slide.ctaLabel}
        </Link>
      </div>

      <button
        type="button"
        aria-label="Slide anterior"
        onClick={() => goTo(index - 1)}
        className="absolute top-1/2 left-4 hidden size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-black/50 sm:flex"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        aria-label="Slide siguiente"
        onClick={() => goTo(index + 1)}
        className="absolute top-1/2 right-4 hidden size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-black/50 sm:flex"
      >
        <ChevronRight className="size-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Ir al slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={cn(
              "size-2.5 cursor-pointer rounded-full transition-colors",
              i === index ? "bg-white" : "bg-white/40",
            )}
          />
        ))}
      </div>
    </section>
  );
}

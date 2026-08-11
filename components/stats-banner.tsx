const STATS = [
  { value: "30+", label: "Años en Córdoba" },
  { value: "2", label: "Locales en el centro" },
  { value: "3", label: "Gorras, sombreros y boinas" },
];

export function StatsBanner() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 text-center">
        <p className="font-heading text-2xl tracking-wide sm:text-3xl">
          Calidad y actitud en cada detalle
        </p>
        <div className="mt-10 grid grid-cols-3 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-4xl sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-primary-foreground/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

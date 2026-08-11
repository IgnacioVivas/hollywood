export function HistorySection() {
  return (
    <section className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            +30 años de historia
          </span>
          <h2 className="font-heading text-3xl tracking-wide">
            Nuestra Historia
          </h2>
          {/* TODO: reemplazar por el texto real que van a mandar los dueños del local */}
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-muted-foreground">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-border bg-background p-10 text-center">
          <span className="font-heading text-6xl text-primary">30+</span>
          <span className="text-sm uppercase tracking-wide text-muted-foreground">
            años en Córdoba
          </span>
        </div>
      </div>
    </section>
  );
}

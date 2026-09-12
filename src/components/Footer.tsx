import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">
          © {year} {site.name}
        </p>
        <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {site.location}
        </p>
      </div>
    </footer>
  );
}

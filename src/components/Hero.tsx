"use client";

import { site } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:pb-20 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(155,123,255,0.16),transparent_68%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <svg
        className="hero-lines pointer-events-none absolute inset-x-0 top-[12%] mx-auto h-[48%] w-[min(1100px,100%)] opacity-[0.28]"
        viewBox="0 0 1100 480"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="lineFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9b7bff" stopOpacity="0" />
            <stop offset="35%" stopColor="#9b7bff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#9b7bff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 18 }).map((_, i) => {
          const t = i / 17;
          const x = 550 + (t - 0.5) * 980;
          return (
            <path
              key={i}
              d={`M550 40 L${x} 460`}
              stroke="url(#lineFade)"
              strokeWidth="1"
              style={{ animationDelay: `${i * 55}ms` }}
            />
          );
        })}
        <rect
          className="hero-core"
          x="534"
          y="28"
          width="32"
          height="32"
          rx="6"
          stroke="#9b7bff"
          strokeOpacity="0.75"
          fill="rgba(155,123,255,0.12)"
        />
      </svg>

      <div className="section-pad relative z-10 mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="mono mb-5 text-[11px] uppercase tracking-[0.22em] text-accent-soft">
            {site.location} · Data systems · Backend
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="max-w-4xl text-[clamp(2.75rem,8vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-foreground">
            {site.name}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-4 text-[clamp(1.15rem,2.4vw,1.65rem)] font-medium tracking-tight text-accent-soft">
            {site.role}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-[17px]">
            {site.tagline}
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="btn-primary inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
            >
              View experience
              <span aria-hidden>→</span>
            </a>
            <a
              href={site.resume}
              download
              className="btn-ghost inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="btn-ghost inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground"
            >
              Get in touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent-soft"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent-soft"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent-soft"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

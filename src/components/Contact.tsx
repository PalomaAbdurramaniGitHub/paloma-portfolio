import { site } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionRule } from "./SectionRule";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden border-t border-border py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(91,63,212,0.18),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl text-center">
        <div className="mx-auto mb-8 max-w-xs">
          <SectionRule />
        </div>
        <Reveal>
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Have a system to build?
            <br />
            <span className="text-accent-soft">Let&apos;s talk.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted">
            Open to data engineering, backend, and software roles. Reach out by
            email or connect on LinkedIn.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="btn-primary inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost inline-flex items-center rounded-full border border-border-strong bg-surface/70 px-6 py-3 text-sm font-medium text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={site.resume}
              download
              className="btn-ghost inline-flex items-center rounded-full border border-border-strong bg-surface/70 px-6 py-3 text-sm font-medium text-foreground"
            >
              Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

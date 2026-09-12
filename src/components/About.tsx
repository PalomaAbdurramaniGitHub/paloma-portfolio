import { focusAreas, site } from "@/lib/content";
import { PipelineStrip } from "./PipelineStrip";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionRule";

export function About() {
  return (
    <section id="about" className="section-pad border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHead>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-accent-soft md:text-4xl">
                Systems that move data and serve products.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                {site.summary}
              </p>
            </Reveal>
          </div>
        </SectionHead>
      </div>

      <PipelineStrip />

      <div className="mx-auto mt-16 grid max-w-7xl border-y border-border md:grid-cols-3">
        {focusAreas.map((area, i) => (
          <Reveal key={area.index} delay={i * 80}>
            <article
              className={`border-border px-0 py-8 transition-colors duration-300 hover:bg-surface-elevated/30 md:px-8 md:py-10 ${
                i > 0 ? "md:border-l" : ""
              } ${i < focusAreas.length - 1 ? "border-b md:border-b-0" : ""}`}
            >
              <span className="mono text-[11px] text-accent">{area.index}</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-[15px]">
                {area.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

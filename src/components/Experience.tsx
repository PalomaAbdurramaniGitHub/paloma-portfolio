import { education, experience } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionRule";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHead>
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Experience
            </h2>
          </Reveal>
        </SectionHead>

        <div className="mt-12 border-t border-border">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 90}>
              <article
                className={`grid gap-4 border-b border-border py-8 transition-colors duration-300 hover:bg-surface-elevated/20 md:grid-cols-[200px_1fr] md:gap-10 md:py-10 ${
                  job.featured ? "" : "opacity-70"
                }`}
              >
                <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {job.period}
                </p>
                <div>
                  <h3
                    className={`font-semibold tracking-tight ${
                      job.featured ? "text-xl" : "text-lg"
                    }`}
                  >
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm text-accent-soft">{job.company}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className={`relative pl-4 leading-relaxed text-muted before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-accent/70 ${
                          job.featured ? "text-sm" : "text-[13px]"
                        }`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <SectionHead>
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Education
              </h2>
            </Reveal>
          </SectionHead>
          <div className="mt-8">
            {education.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article className="border border-border bg-surface/40 p-6 transition-colors duration-300 hover:border-accent/40 md:p-8">
                  <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-accent-soft">{item.place}</p>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

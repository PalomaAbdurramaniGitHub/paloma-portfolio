import { stack } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionRule";

const groups = [
  {
    label: "Frontend",
    title: "Interfaces that feel intentional",
    description:
      "Product surfaces built with modern React stacks — clear structure, responsive polish, and UI that stays maintainable as features grow.",
    items: stack.frontend,
  },
  {
    label: "Backend & Data",
    title: "Services and pipelines that hold",
    description:
      "APIs, data models, and processing flows across Python, Node.js, and SQL — from ingestion and transformation to reliable service delivery.",
    items: stack.backendData,
  },
  {
    label: "Cloud",
    title: "Infrastructure wired for production",
    description:
      "AWS-backed building blocks for storage, identity, events, and analytics — assembled into systems that run beyond the laptop.",
    items: stack.cloud,
  },
  {
    label: "AI",
    title: "Intelligence in the workflow",
    description:
      "Models used deliberately for exploration, scaffolding, review, and faster iteration — never as a substitute for judgment or ownership.",
    items: stack.ai,
  },
];

export function Stack() {
  return (
    <section id="stack" className="section-pad border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHead>
          <Reveal>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
              Tools used to ship real systems
            </h2>
          </Reveal>
        </SectionHead>

        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 50} className="h-full bg-background">
              <article
                className={`stack-card flex h-full flex-col bg-background p-6 md:p-8 ${
                  group.label === "AI"
                    ? "bg-[linear-gradient(135deg,rgba(91,63,212,0.12),transparent_60%)]"
                    : ""
                }`}
              >
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {group.label}
                </h3>
                <p className="mt-2 text-base font-medium tracking-tight text-accent-soft">
                  {group.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {group.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`chip rounded-full border px-3 py-1.5 text-sm ${
                        group.label === "AI"
                          ? "border-accent/35 bg-surface-elevated/80 text-accent-soft"
                          : "border-border-strong bg-surface-elevated text-foreground"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

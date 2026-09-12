"use client";

import { useEffect, useRef, useState } from "react";

const STAGES = [
  {
    label: "INGEST",
    log: "> connecting source streams…",
  },
  {
    label: "TRANSFORM",
    log: "> normalizing schema + cleaning records…",
  },
  {
    label: "SERVE",
    log: "> publishing API contracts…",
  },
  {
    label: "REPORT",
    log: "> generating analytics report…",
  },
] as const;

export function PipelineStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % STAGES.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    const current = STAGES[step].log;
    let i = 0;
    let cancelled = false;
    setTyped("");

    const typeNext = () => {
      if (cancelled) return;
      if (i <= current.length) {
        setTyped(current.slice(0, i));
        i += 1;
        window.setTimeout(typeNext, 24);
      }
    };

    typeNext();
    return () => {
      cancelled = true;
    };
  }, [visible, step]);

  const prevStep = (step - 1 + STAGES.length) % STAGES.length;

  return (
    <div ref={ref} className="mx-auto mt-14 max-w-7xl">
      <div className="overflow-hidden border border-border bg-surface/50">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-border px-4 py-3 md:px-6">
          {STAGES.map((stage, i) => (
            <div key={stage.label} className="flex items-center gap-3">
              <span
                className={`mono text-[11px] tracking-[0.16em] transition-colors ${
                  visible && i === step
                    ? "pipeline-step is-active"
                    : "text-muted"
                }`}
              >
                {stage.label}
              </span>
              {i < STAGES.length - 1 && (
                <span className="text-border-strong" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="px-4 py-4 md:px-6">
          <p className="mono min-h-[1.25rem] text-[12px] text-accent-soft md:text-[13px]">
            {typed}
            <span className="ml-0.5 inline-block w-1.5 animate-pulse bg-accent-soft align-middle">
              &nbsp;
            </span>
          </p>
          {visible && step > 0 && (
            <p className="mono mt-2 text-[11px] text-muted/70">
              {STAGES[prevStep].log}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

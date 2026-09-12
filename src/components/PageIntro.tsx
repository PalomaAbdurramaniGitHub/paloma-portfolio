"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

export function PageIntro() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase("done");
      return;
    }

    const outTimer = window.setTimeout(() => setPhase("out"), 700);
    const doneTimer = window.setTimeout(() => setPhase("done"), 1200);
    return () => {
      window.clearTimeout(outTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[70] flex items-center justify-center bg-background transition-opacity duration-500 ${
        phase === "out" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden
    >
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/50 bg-accent/10">
          <span className="text-lg font-semibold text-accent-soft">
            {site.name.charAt(0)}
          </span>
        </div>
        <p className="mono text-[11px] uppercase tracking-[0.28em] text-accent-soft">
          {site.name}
        </p>
      </div>
    </div>
  );
}

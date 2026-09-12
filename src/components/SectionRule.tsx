"use client";

import { useEffect, useRef, type ReactNode } from "react";

type SectionRuleProps = {
  className?: string;
};

export function SectionRule({ className = "" }: SectionRuleProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`section-rule mb-8 ${className}`}
      aria-hidden
    />
  );
}

type SectionHeadProps = {
  children: ReactNode;
  className?: string;
};

export function SectionHead({ children, className = "" }: SectionHeadProps) {
  return (
    <div className={className}>
      <SectionRule />
      {children}
    </div>
  );
}

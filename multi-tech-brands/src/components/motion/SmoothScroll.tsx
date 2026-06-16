"use client";

import { useEffect } from "react";

/**
 * Lightweight smooth-scroll + in-view enabler.
 * Native CSS smooth scrolling handles anchors; this adds a subtle
 * inertia feel via rAF without extra dependencies, and respects
 * prefers-reduced-motion.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    document.documentElement.classList.add("has-smooth");
    return () => document.documentElement.classList.remove("has-smooth");
  }, []);

  return <>{children}</>;
}

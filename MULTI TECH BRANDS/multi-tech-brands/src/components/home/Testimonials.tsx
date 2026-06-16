"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/content";
import { SectionHeader } from "@/components/ui/Section";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          eyebrow="Client voices"
          title={
            <>
              Trusted by founders who <span className="text-gradient">don&apos;t settle.</span>
            </>
          }
        />

        <div className="mt-14 glass rounded-4xl p-8 md:p-14">
          <div className="min-h-[210px] md:min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-2xl font-medium leading-snug text-white md:text-3xl">
                  “{t.quote}”
                </p>
                <footer className="mt-8">
                  <span className="block text-sm font-medium text-white">{t.name}</span>
                  <span className="block text-sm text-silver-400">{t.role}</span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-electric" : "w-3 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <NavBtn onClick={prev} label="Previous" dir="left" />
              <NavBtn onClick={next} label="Next" dir="right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NavBtn({ onClick, label, dir }: { onClick: () => void; label: string; dir: "left" | "right" }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      data-cursor="hover"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-electric/60 hover:text-electric"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={dir === "left" ? "rotate-180" : ""}>
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

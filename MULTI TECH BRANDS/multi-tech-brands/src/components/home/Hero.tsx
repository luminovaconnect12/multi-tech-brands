"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <div className="shell relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="inline-flex items-center gap-3 rounded-full glass px-4 py-2"
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse-glow rounded-full bg-neon" />
          <span className="text-xs tracking-wide text-silver-200">
            A group of companies. Four specialisms. One standard.
          </span>
        </motion.div>

        <h1 className="mt-8 max-w-5xl font-display text-display-xl font-bold text-white">
          <Line delay={0.05}>Build a brand</Line>
          <Line delay={0.13}>
            the world <span className="text-gradient">can&apos;t ignore.</span>
          </Line>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="mt-7 max-w-xl text-body-lg text-silver-400"
        >
          Multi Tech Brands unites trademark &amp; IP, eBook publishing, design,
          and digital marketing under one roof — so ambitious companies get
          enterprise-grade execution from a single, accountable partner.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link href="/contact" className="btn-primary" data-cursor="hover">
            <span>
              Start a project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
          <Link href="/portfolio" className="btn-ghost" data-cursor="hover">
            View our work
          </Link>
        </motion.div>

        {/* Floating service chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease }}
          className="mt-20 grid grid-cols-2 gap-3 sm:max-w-3xl md:grid-cols-4"
        >
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              data-cursor="hover"
              className="glass glass-hover group rounded-2xl p-4"
            >
              <span className="card-number">{s.index}</span>
              <span className="mt-3 block text-sm font-medium text-white">{s.name}</span>
              <span className="mt-1 block text-xs text-silver-400">{s.tagline}</span>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-silver-400"
      >
        <span className="flex flex-col items-center gap-2">
          Scroll
          <span className="h-10 w-px bg-gradient-to-b from-electric to-transparent" />
        </span>
      </motion.div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

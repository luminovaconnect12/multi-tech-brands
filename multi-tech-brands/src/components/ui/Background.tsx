"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Fixed cinematic backdrop: deep-black base, faint grid, drifting
 * electric-blue aurora glows that react subtly to scroll.
 */
export default function Background() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
        }}
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-40 top-[-10%] h-[640px] w-[640px] rounded-full opacity-40 blur-[120px]"
      >
        <div className="h-full w-full rounded-full bg-electric/40" />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[-12%] top-[40%] h-[560px] w-[560px] rounded-full opacity-30 blur-[130px]"
      >
        <div className="h-full w-full rounded-full bg-neon/30" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
    </div>
  );
}

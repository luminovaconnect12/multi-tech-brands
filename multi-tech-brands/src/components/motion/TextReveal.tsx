"use client";

import { motion } from "framer-motion";

/**
 * Word-by-word cinematic text reveal for headlines.
 */
export default function TextReveal({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
}) {
  const words = text.split(" ");
  const MotionTag = motion(Tag as any);

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              visible: {
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

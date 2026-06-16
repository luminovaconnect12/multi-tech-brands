import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export default function CTA({
  title = "Ready to build something the market can't ignore?",
  subtitle = "Tell us where you're headed. We'll show you the fastest, most defensible way to get there.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl glass px-6 py-16 text-center md:px-16 md:py-24">
            <div
              className="pointer-events-none absolute inset-x-0 -top-1/2 h-[140%] bg-radial-glow opacity-80"
              aria-hidden
            />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-display text-display-md font-bold text-white">
                {title}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-body-lg text-silver-400">
                {subtitle}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary" data-cursor="hover">
                  <span>
                    Start a project
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
                <Link href="/services" className="btn-ghost" data-cursor="hover">
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

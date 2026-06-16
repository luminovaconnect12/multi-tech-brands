import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/Section";
import { brands } from "@/data/content";

const tones: Record<string, string> = {
  a: "from-[#2E6BFF] to-[#19E0FF]",
  c: "from-[#19E0FF] to-[#6FA3FF]",
};

const ExternalArrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M5 11 11 5M11 5H6M11 5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
    <path d="M2 6.5 5 9l5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Brands() {
  return (
    <section id="group" className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          eyebrow="The group"
          title={
            <>
              Specialist companies, <span className="text-gradient">one group.</span>
            </>
          }
          intro="Multi Tech Brands operates a family of dedicated brands, each a leader in its field. Together they deliver the full range of services under one trusted group."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {brands.map((b, i) => (
            <Reveal key={b.name} delay={(i % 2) * 0.08}>
              <article className="glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-4xl p-8 md:p-10">
                <div
                  className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${tones[b.tone] ?? tones.a} opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-40`}
                  aria-hidden
                />

                <div className="relative flex items-center justify-between">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-eyebrow text-electric">
                    {b.category}
                  </span>
                  <span className="text-xs text-silver-400">{b.location}</span>
                </div>

                <h3 className="relative mt-6 font-display text-heading font-semibold text-white">
                  {b.name}
                </h3>
                <p className="relative mt-2 font-display text-title text-gradient">{b.tagline}</p>
                <p className="relative mt-4 text-silver-400">{b.description}</p>

                <ul className="relative mt-6 space-y-2.5">
                  {b.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-silver-200">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-premium-soft text-electric">
                        <Check />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-7">
                  <span className="text-eyebrow uppercase tracking-eyebrow text-silver-400">
                    What they do
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {b.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-silver-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-sm text-silver-400">{b.display}</span>
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 text-sm font-medium text-electric transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    Visit website
                    <ExternalArrow />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

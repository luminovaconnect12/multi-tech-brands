import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import CTA from "@/components/sections/CTA";
import { caseStudies } from "@/data/content";

export const metadata: Metadata = {
  title: "Case Studies — Proof in the numbers",
  description:
    "In-depth case studies from Multi Tech Brands: the challenge, our approach, and the measurable results across trademark, publishing, design, and marketing.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title={
          <>
            The challenge, the approach,{" "}
            <span className="text-gradient">the numbers.</span>
          </>
        }
        intro="No vague claims. Here's exactly how we created value for clients — and what it produced."
      />

      <Section className="pt-4">
        <div className="space-y-6">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 0.06}>
              <article className="glass glass-hover overflow-hidden rounded-4xl p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  {c.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-silver-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <h2 className="mt-6 max-w-3xl font-display text-heading font-semibold text-white">
                  {c.title}
                </h2>
                <p className="mt-2 text-sm uppercase tracking-eyebrow text-electric">
                  {c.client}
                </p>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-eyebrow uppercase tracking-eyebrow text-silver-400">
                      The challenge
                    </h3>
                    <p className="mt-3 text-silver-200">{c.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-eyebrow uppercase tracking-eyebrow text-silver-400">
                      Our approach
                    </h3>
                    <p className="mt-3 text-silver-200">{c.approach}</p>
                  </div>
                </div>

                <div className="hairline my-10" />

                <div className="grid grid-cols-3 gap-6">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <div className="font-display text-display-md font-bold text-gradient">
                        {r.value}
                      </div>
                      <div className="mt-2 text-xs text-silver-400">{r.label}</div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA title="Want results like these?" />
    </>
  );
}

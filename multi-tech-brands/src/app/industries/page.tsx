import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import CTA from "@/components/sections/CTA";
import { industries } from "@/data/content";

export const metadata: Metadata = {
  title: "Industries — Sectors we serve",
  description:
    "Multi Tech Brands serves technology, ecommerce, publishing, professional services, finance, health, real estate, and more — with tailored trademark, design, and growth expertise.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Tailored expertise for{" "}
            <span className="text-gradient">your sector.</span>
          </>
        }
        intro="We adapt our trademark, publishing, design, and marketing playbooks to the realities of your market — not the other way around."
      />

      <Section className="pt-4">
        <div className="grid gap-px overflow-hidden rounded-4xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 2) * 0.05}>
              <div className="group h-full bg-ink/60 p-10 transition-colors duration-500 hover:bg-white/[0.04]">
                <div className="flex items-center justify-between">
                  <span className="card-number">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-2 w-2 rounded-full bg-electric/40 transition-colors group-hover:bg-electric" />
                </div>
                <h2 className="mt-6 font-display text-heading font-semibold text-white">
                  {ind.name}
                </h2>
                <p className="mt-3 max-w-md text-silver-400">{ind.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA title="Don't see your industry? We've likely served it." subtitle="Tell us about your market and we'll show you exactly how we'd help." />
    </>
  );
}

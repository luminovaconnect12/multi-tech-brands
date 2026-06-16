import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import Metrics from "@/components/home/Metrics";
import CTA from "@/components/sections/CTA";
import { differentiators } from "@/data/content";

export const metadata: Metadata = {
  title: "About — A group built for ambitious brands",
  description:
    "Multi Tech Brands is a group of specialist companies in trademark & IP, eBook publishing, design, and digital marketing — built to give ambitious brands enterprise-grade execution from one partner.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Craft over volume", desc: "We'd rather do fewer things at an exceptional standard than everything at an average one." },
  { title: "Outcomes are the point", desc: "Beautiful work that doesn't move a number isn't finished. We measure what matters." },
  { title: "Senior by default", desc: "The people who win your trust are the people who do your work." },
  { title: "Radical clarity", desc: "Clear scopes, honest timelines, plain-language reporting. Always." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Multi Tech Brands"
        title={
          <>
            One group, assembled to give brands an{" "}
            <span className="text-gradient">unfair advantage.</span>
          </>
        }
        intro="We brought four specialist companies together so that ambitious founders and established enterprises could stop juggling vendors and start compounding results."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="font-display text-heading font-semibold text-white">
              Our story
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-body-lg text-silver-400">
              <p>
                Multi Tech Brands began with a simple frustration: great companies
                were losing time, money, and momentum stitching together a
                trademark lawyer, a designer, a publisher, and a marketing agency
                — none of whom talked to each other.
              </p>
              <p>
                So we built the alternative. Four specialisms, each led by senior
                experts, sharing one standard and one point of accountability.
                Whether you need to protect a name, launch a book, rebuild a
                brand, or scale demand, you get a partner who sees the whole
                board — not just one square of it.
              </p>
              <p>
                Today we serve startups, authors, ecommerce brands, and
                enterprises across more than thirty industries — and we measure
                ourselves on one thing: the results we create for them.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Metrics />

      <Section>
        <SectionHeader
          eyebrow="What we believe"
          title={
            <>
              The principles behind <span className="text-gradient">every engagement.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 4) * 0.07}>
              <div className="glass glass-hover h-full rounded-4xl p-8">
                <span className="card-number">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-display text-title font-semibold text-white">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-400">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="The difference"
          title={
            <>
              Why clients consolidate <span className="text-gradient">with us.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 0.06}>
              <div className="glass h-full rounded-4xl p-8">
                <h3 className="font-display text-title font-semibold text-white">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-400">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}

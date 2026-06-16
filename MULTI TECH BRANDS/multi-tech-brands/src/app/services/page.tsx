import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import ProcessSection from "@/components/home/ProcessSection";
import CTA from "@/components/sections/CTA";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Services — Trademark, Publishing, Design & Marketing",
  description:
    "Explore Multi Tech Brands' four specialisms: trademark & IP, eBook publishing, design, and digital marketing — delivered by senior experts under one roof.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Four specialisms, engineered to{" "}
            <span className="text-gradient">work as one.</span>
          </>
        }
        intro="Each service stands on its own — and quietly makes the others stronger. Start with what you need most; expand as you grow."
      />

      <Section>
        <div className="grid gap-5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.06}>
              <Link
                href={`/services/${s.slug}`}
                data-cursor="hover"
                className="glass glass-hover group grid items-center gap-6 rounded-4xl p-8 md:grid-cols-[auto_1fr_auto] md:p-10"
              >
                <span className="font-display text-display-md font-bold text-white/10 transition-colors group-hover:text-white/20">
                  {s.index}
                </span>
                <div>
                  <h2 className="font-display text-heading font-semibold text-white">
                    {s.name}
                  </h2>
                  <p className="mt-3 max-w-2xl text-silver-400">{s.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.deliverables.slice(0, 3).map((d) => (
                      <span
                        key={d.title}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-silver-200"
                      >
                        {d.title}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="flex items-center gap-2 text-sm font-medium text-electric transition-transform duration-300 group-hover:translate-x-1">
                  Explore
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <ProcessSection />
      <CTA />
    </>
  );
}

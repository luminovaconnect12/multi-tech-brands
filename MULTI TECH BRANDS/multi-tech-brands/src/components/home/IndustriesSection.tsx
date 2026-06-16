import Link from "next/link";
import { industries } from "@/data/content";
import Reveal from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/Section";

export default function IndustriesSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Industries"
            title={
              <>
                Trusted across <span className="text-gradient">30+ industries.</span>
              </>
            }
          />
          <Link href="/industries" className="btn-ghost" data-cursor="hover">
            All industries
          </Link>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-4xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 4) * 0.05}>
              <div className="group h-full bg-ink/60 p-8 transition-colors duration-500 hover:bg-white/[0.04]">
                <span className="card-number">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {ind.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-400">{ind.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

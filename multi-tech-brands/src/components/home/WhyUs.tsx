import { differentiators } from "@/data/content";
import Reveal from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/Section";

export default function WhyUs() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          eyebrow="Why Multi Tech Brands"
          title={
            <>
              The advantages of a network,{" "}
              <span className="text-gradient">the accountability of a partner.</span>
            </>
          }
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 0.07}>
              <div className="glass glass-hover h-full rounded-4xl p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-premium-soft text-electric">
                  <Dot index={i} />
                </div>
                <h3 className="mt-6 font-display text-title font-semibold text-white">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-400">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dot({ index }: { index: number }) {
  return (
    <span className="font-mono text-sm">{String(index + 1).padStart(2, "0")}</span>
  );
}

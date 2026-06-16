import { processSteps } from "@/data/content";
import Reveal from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/Section";

export default function ProcessSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          eyebrow="How we work"
          title={
            <>
              A process built for <span className="text-gradient">momentum.</span>
            </>
          }
          intro="No bloat, no black boxes. A clear path from first conversation to compounding results."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-0 top-[42px] hidden h-px w-full bg-gradient-to-r from-electric/0 via-electric/40 to-electric/0 md:block"
            aria-hidden
          />
          <div className="grid gap-8 md:grid-cols-4">
            {processSteps.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="relative">
                  <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full glass">
                    <span className="font-display text-2xl font-bold text-gradient">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-title font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver-400">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

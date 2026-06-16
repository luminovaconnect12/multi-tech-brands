import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";
import CTA from "@/components/sections/CTA";
import { type Service, services } from "@/data/content";

export default function ServiceTemplate({ service }: { service: Service }) {
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={service.short}
        title={
          <>
            {service.name}: <span className="text-gradient">{service.tagline}</span>
          </>
        }
        intro={service.description}
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary" data-cursor="hover">
            <span>Start a project</span>
          </Link>
          <Link href="/portfolio" className="btn-ghost" data-cursor="hover">
            See related work
          </Link>
        </div>
      </PageHero>

      {/* Outcomes + metric */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <SectionHeader eyebrow="The outcome" title="What you actually get" />
            <ul className="mt-10 space-y-5">
              {service.outcomes.map((o, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <li className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-premium-soft text-electric">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6.5 5 9l5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-body-lg text-silver-200">{o}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <div className="glass flex h-full flex-col justify-center rounded-4xl p-10 text-center">
              <span className="font-display text-display-lg font-bold text-gradient">
                <Counter value={service.metricValue} />
              </span>
              <span className="mt-4 text-sm uppercase tracking-eyebrow text-silver-400">
                {service.metricLabel}
              </span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Deliverables */}
      <Section>
        <SectionHeader
          eyebrow="What's included"
          title={
            <>
              Everything you need, <span className="text-gradient">nothing you don&apos;t.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {service.deliverables.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 0.06}>
              <div className="glass glass-hover h-full rounded-4xl p-8">
                <span className="card-number">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-display text-title font-semibold text-white">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-400">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader
          eyebrow="The process"
          title={
            <>
              How we deliver <span className="text-gradient">{service.name}.</span>
            </>
          }
        />
        <div className="relative mt-14">
          <div className="absolute left-0 top-[42px] hidden h-px w-full bg-gradient-to-r from-electric/0 via-electric/40 to-electric/0 md:block" aria-hidden />
          <div className="grid gap-8 md:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full glass">
                  <span className="font-display text-2xl font-bold text-gradient">{p.step}</span>
                </div>
                <h3 className="mt-6 font-display text-title font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-400">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Cross-sell */}
      <Section>
        <SectionHeader eyebrow="Goes well with" title="Pair it with" align="left" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              data-cursor="hover"
              className="glass glass-hover group rounded-4xl p-7"
            >
              <span className="card-number">{s.index}</span>
              <h3 className="mt-4 font-display text-title font-semibold text-white">{s.name}</h3>
              <p className="mt-2 text-sm text-silver-400">{s.tagline}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTA title={`Let's get started on your ${service.name.toLowerCase()}.`} />
    </>
  );
}

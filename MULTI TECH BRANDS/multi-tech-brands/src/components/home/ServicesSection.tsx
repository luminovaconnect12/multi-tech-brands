import Link from "next/link";
import { services } from "@/data/content";
import Reveal from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/Section";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          eyebrow="What we do"
          title={
            <>
              Four services. <span className="text-gradient">One strategy.</span>
            </>
          }
          intro="Engage one specialism or all four — each is run by senior experts and built to make the others stronger."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <Link
                href={`/services/${s.slug}`}
                data-cursor="hover"
                className="glass glass-hover group relative flex h-full flex-col justify-between overflow-hidden rounded-4xl p-8 md:p-10"
              >
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-electric/20 opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <div>
                  <div className="flex items-center justify-between">
                    <span className="card-number">{s.index}</span>
                    <span className="text-xs uppercase tracking-eyebrow text-silver-400">
                      {s.metricValue} · {s.metricLabel}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-heading font-semibold text-white">
                    {s.name}
                  </h3>
                  <p className="mt-3 max-w-md text-silver-400">{s.description}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-electric transition-transform duration-300 group-hover:translate-x-1">
                  Explore service
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

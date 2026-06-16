import Reveal from "@/components/motion/Reveal";
import { portfolio, type PortfolioItem } from "@/data/content";

const tones: Record<string, string> = {
  a: "from-[#2E6BFF] to-[#19E0FF]",
  b: "from-[#6F4BFF] to-[#2E6BFF]",
  c: "from-[#19E0FF] to-[#1FA2FF]",
  d: "from-[#3D7CFF] to-[#7A5CFF]",
  e: "from-[#1FB6FF] to-[#2E6BFF]",
  f: "from-[#2E6BFF] to-[#54E9FF]",
};

export default function PortfolioGrid({ items = portfolio }: { items?: PortfolioItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <Reveal key={p.title} delay={(i % 3) * 0.07}>
          <div
            data-cursor="hover"
            className="glass glass-hover group relative h-full overflow-hidden rounded-4xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tones[p.tone] ?? tones.a} opacity-90 transition-transform duration-700 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)] mix-blend-overlay" />
              <div className="absolute inset-0 grid-bg opacity-20" />
              <span className="absolute left-6 top-6 font-display text-2xl font-bold text-white/90">
                {p.title}
              </span>
              <span className="absolute bottom-6 left-6 rounded-full bg-ink/40 px-3 py-1 text-xs text-white backdrop-blur">
                {p.service}
              </span>
            </div>
            <div className="p-6">
              <span className="text-xs uppercase tracking-eyebrow text-silver-400">
                {p.category}
              </span>
              <p className="mt-2 font-display text-base font-medium text-white">
                {p.result}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

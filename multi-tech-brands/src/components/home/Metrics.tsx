import { metrics } from "@/data/content";
import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";

export default function Metrics() {
  return (
    <section className="relative py-20">
      <div className="shell">
        <div className="glass rounded-4xl px-6 py-12 md:px-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08} className="text-center md:text-left">
                <div className="font-display text-display-md font-bold text-gradient">
                  <Counter value={m.value} />
                </div>
                <div className="mt-3 text-sm text-silver-400">{m.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

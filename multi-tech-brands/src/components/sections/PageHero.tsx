import { Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";

export default function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-12 pt-40 md:pt-48">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-radial-glow opacity-70"
        aria-hidden
      />
      <div className="shell relative">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl font-display text-display-lg font-bold text-white">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-body-lg text-silver-400">{intro}</p>
          </Reveal>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

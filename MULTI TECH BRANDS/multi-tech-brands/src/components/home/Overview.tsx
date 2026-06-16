import Reveal from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Section";

const audiences = [
  "Startups",
  "Founders",
  "Ecommerce Brands",
  "Authors",
  "Enterprises",
  "Small Businesses",
];

export default function Overview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="shell">
        {/* Marquee of audiences */}
        <div className="relative overflow-hidden mask-fade-b py-2">
          <div className="flex w-max animate-[shimmer_22s_linear_infinite] gap-10 opacity-70">
            {[...audiences, ...audiences, ...audiences].map((a, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-2xl font-medium text-silver-400"
              >
                {a}
                <span className="ml-10 text-electric">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-5 font-display text-display-md font-semibold text-white">
              A group built to remove the trade-off between{" "}
              <span className="text-gradient">breadth and quality.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 text-body-lg text-silver-400">
              <p>
                Most companies are forced to choose: one boutique that does a
                single thing brilliantly, or a sprawling agency that does
                everything adequately. Multi Tech Brands was built to end that
                compromise.
              </p>
              <p>
                Under one roof, four specialist companies — trademark &amp; IP,
                eBook publishing, design, and digital marketing — operate with
                their own senior experts, shared standards, and a single point
                of accountability. The result is strategy that connects, work
                that compounds, and a partner that scales with you from your
                first filing to your fiftieth campaign.
              </p>
              <div className="hairline my-8" />
              <p className="text-sm text-silver-200">
                Trademark &amp; IP · eBook Publishing · Design · Digital Marketing
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

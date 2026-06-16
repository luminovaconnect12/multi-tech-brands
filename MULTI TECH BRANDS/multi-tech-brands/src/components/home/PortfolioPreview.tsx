import Link from "next/link";
import { SectionHeader } from "@/components/ui/Section";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import { portfolio } from "@/data/content";

export default function PortfolioPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Selected work"
            title={
              <>
                Outcomes we&apos;re <span className="text-gradient">proud of.</span>
              </>
            }
          />
          <Link href="/portfolio" className="btn-ghost" data-cursor="hover">
            View all work
          </Link>
        </div>
        <div className="mt-14">
          <PortfolioGrid items={portfolio.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
}

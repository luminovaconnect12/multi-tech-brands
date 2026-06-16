import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Work — Selected projects & results",
  description:
    "A selection of brands Multi Tech Brands has protected, published, designed, and grown — with the results to prove it.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Work we&apos;d put our <span className="text-gradient">name on.</span>
          </>
        }
        intro="Every engagement is measured by outcomes. Here's a snapshot of what that looks like across our four specialisms."
      />
      <Section className="pt-4">
        <PortfolioGrid />
      </Section>
      <CTA title="Your brand could be next." />
    </>
  );
}

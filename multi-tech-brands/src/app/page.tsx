import Hero from "@/components/home/Hero";
import Overview from "@/components/home/Overview";
import Metrics from "@/components/home/Metrics";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUs from "@/components/home/WhyUs";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import Testimonials from "@/components/home/Testimonials";
import ProcessSection from "@/components/home/ProcessSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Brands from "@/components/sections/Brands";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Overview />
      <Brands />
      <ServicesSection />
      <Metrics />
      <WhyUs />
      <PortfolioPreview />
      <Testimonials />
      <ProcessSection />
      <IndustriesSection />
      <FAQ />
      <CTA />
    </>
  );
}

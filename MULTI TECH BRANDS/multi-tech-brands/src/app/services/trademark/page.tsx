import type { Metadata } from "next";
import ServiceTemplate from "@/components/sections/ServiceTemplate";
import { services } from "@/data/content";

const service = services.find((s) => s.slug === "trademark")!;

export const metadata: Metadata = {
  title: "Trademark Registration & IP Services",
  description: "Protect your brand with expert trademark clearance, filing, office-action responses, and monitoring from Multi Tech Brands. Defensible IP, done right.",
  alternates: { canonical: "/services/trademark" },
};

export default function Page() {
  return <ServiceTemplate service={service} />;
}

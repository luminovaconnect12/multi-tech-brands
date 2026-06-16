import type { Metadata } from "next";
import ServiceTemplate from "@/components/sections/ServiceTemplate";
import { services } from "@/data/content";

const service = services.find((s) => s.slug === "digital-marketing")!;

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description: "Full-funnel SEO, paid media, conversion optimization, and lifecycle marketing measured against one metric: profitable, repeatable revenue.",
  alternates: { canonical: "/services/digital-marketing" },
};

export default function Page() {
  return <ServiceTemplate service={service} />;
}

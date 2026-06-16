import type { Metadata } from "next";
import ServiceTemplate from "@/components/sections/ServiceTemplate";
import { services } from "@/data/content";

const service = services.find((s) => s.slug === "design")!;

export const metadata: Metadata = {
  title: "Design Services — Brand, Web & UI/UX",
  description: "Premium brand identities, high-converting websites, and scalable design systems engineered to make your company look and sell like a market leader.",
  alternates: { canonical: "/services/design" },
};

export default function Page() {
  return <ServiceTemplate service={service} />;
}

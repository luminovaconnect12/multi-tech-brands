import type { Metadata } from "next";
import ServiceTemplate from "@/components/sections/ServiceTemplate";
import { services } from "@/data/content";

const service = services.find((s) => s.slug === "ebook-publishing")!;

export const metadata: Metadata = {
  title: "eBook Publishing Services",
  description: "From manuscript to bestseller. Editing, cover & interior design, formatting, distribution, and launch marketing that gets your book ranked and read.",
  alternates: { canonical: "/services/ebook-publishing" },
};

export default function Page() {
  return <ServiceTemplate service={service} />;
}

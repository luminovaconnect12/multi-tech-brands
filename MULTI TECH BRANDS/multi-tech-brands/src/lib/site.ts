export const site = {
  name: "Multi Tech Brands",
  shortName: "MTB",
  legalName: "Multi Tech Brands",
  tagline: "One group. Every advantage your brand needs to scale.",
  description:
    "Multi Tech Brands is a group of specialist companies in trademark & IP, eBook publishing, design, and digital marketing — delivering enterprise-grade outcomes for startups, founders, authors, and ecommerce brands.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://multitechbrands.com",
  wpApi:
    process.env.NEXT_PUBLIC_WP_API_URL ||
    "https://techgenbpo.com/multitechbrands/wp-json",
  email: "hello@multitechbrands.com",
  phone: "+1 (000) 000-0000",
  address: "Global — operating across North America, UK & APAC",
  social: {
    linkedin: "https://www.linkedin.com/company/multitechbrands",
    instagram: "https://instagram.com/multitechbrands",
    x: "https://x.com/multitechbrands",
  },
} as const;

export const nav: { label: string; href: string; children?: { label: string; href: string; desc: string }[] }[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Trademark & IP", href: "/services/trademark", desc: "Protect what makes you, you." },
      { label: "eBook Publishing", href: "/services/ebook-publishing", desc: "From manuscript to bestseller." },
      { label: "Design", href: "/services/design", desc: "Identity, web & product design." },
      { label: "Digital Marketing", href: "/services/digital-marketing", desc: "Demand, growth & performance." },
    ],
  },
  { label: "Work", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/blog" },
];

export type NavItem = (typeof nav)[number];

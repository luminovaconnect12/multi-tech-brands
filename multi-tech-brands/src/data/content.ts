/* Central copy + content model for Multi Tech Brands.
   Premium, persuasive, specific — written to convert. */

export interface Service {
  slug: string;
  index: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  outcomes: string[];
  deliverables: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  metricLabel: string;
  metricValue: string;
}

export const services: Service[] = [
  {
    slug: "trademark",
    index: "01",
    name: "Trademark & IP",
    short: "Trademark Registration & Intellectual Property",
    tagline: "Protect what makes you, you.",
    description:
      "Your name, your mark, your ideas — secured. We handle the full lifecycle of trademark registration and intellectual property protection, from clearance search to certificate, so your brand is defensible the day you scale.",
    outcomes: [
      "Comprehensive clearance searches that surface conflicts before they cost you",
      "Strategically drafted applications that survive examiner scrutiny",
      "Monitoring and enforcement that keeps copycats off your territory",
    ],
    deliverables: [
      { title: "Trademark Clearance Search", desc: "Knockout and full availability analysis across the relevant classes and jurisdictions." },
      { title: "Application & Filing", desc: "Strategic class selection and precise filing with the USPTO and international registries." },
      { title: "Office Action Response", desc: "Expert responses to examiner refusals to keep your application alive." },
      { title: "Brand Monitoring", desc: "Ongoing watch services that flag infringing filings the moment they appear." },
      { title: "IP Portfolio Strategy", desc: "Copyrights, design rights, and a roadmap that grows with your brand." },
    ],
    process: [
      { step: "01", title: "Search", desc: "We map the landscape and quantify your risk before a dollar is spent on filing." },
      { step: "02", title: "Strategy", desc: "We select classes and jurisdictions that match where you sell — and where you will." },
      { step: "03", title: "File", desc: "We draft and submit applications built to withstand examination." },
      { step: "04", title: "Protect", desc: "We monitor, renew, and enforce so your mark stays exclusively yours." },
    ],
    metricLabel: "Avg. filing accuracy",
    metricValue: "99%",
  },
  {
    slug: "ebook-publishing",
    index: "02",
    name: "E-Book Publishing",
    short: "E-Book Publishing Services",
    tagline: "From manuscript to bestseller.",
    description:
      "We turn manuscripts into market-ready books and authors into authorities. Editing, design, formatting, distribution, and launch marketing — a single team carrying your book from first draft to ranked release.",
    outcomes: [
      "Editorially polished manuscripts ready for serious readers",
      "Covers and interiors that compete with traditional publishing houses",
      "Distribution and launch plans engineered for category rankings",
    ],
    deliverables: [
      { title: "Developmental & Copy Editing", desc: "Structural and line-level editing that sharpens your argument and voice." },
      { title: "Cover & Interior Design", desc: "Genre-aware covers and typeset interiors that earn the click and the read." },
      { title: "Formatting & Conversion", desc: "Pixel-perfect EPUB, MOBI, and print-ready files for every platform." },
      { title: "Distribution Setup", desc: "Amazon KDP, Apple Books, and global retail placement done right." },
      { title: "Launch Marketing", desc: "Pricing, positioning, and a launch sequence built to chart in your category." },
    ],
    process: [
      { step: "01", title: "Refine", desc: "We edit for clarity, structure, and authority without losing your voice." },
      { step: "02", title: "Design", desc: "We craft a cover and interior that signal premium from the thumbnail." },
      { step: "03", title: "Publish", desc: "We format, convert, and distribute across every major retailer." },
      { step: "04", title: "Launch", desc: "We orchestrate a launch built to rank, sell, and build your platform." },
    ],
    metricLabel: "Titles published",
    metricValue: "250+",
  },
  {
    slug: "design",
    index: "03",
    name: "Design",
    short: "Design Services",
    tagline: "Identity, web & product design.",
    description:
      "Design that does commercial work. We build brand identities, websites, and product interfaces that look unmistakably premium and convert visitors into customers — from the first logo to the full design system.",
    outcomes: [
      "Distinct brand identities that command premium positioning",
      "High-converting websites engineered around your funnel",
      "Scalable design systems your team can build on for years",
    ],
    deliverables: [
      { title: "Brand Identity", desc: "Logo, palette, typography, and a guideline system that scales." },
      { title: "Web & UI/UX Design", desc: "Conversion-focused websites and product interfaces, fully responsive." },
      { title: "Design Systems", desc: "Reusable component libraries that keep every touchpoint consistent." },
      { title: "Marketing Creative", desc: "Decks, social, ads, and collateral that hold the brand standard." },
      { title: "Packaging & Print", desc: "Physical-world design that matches your digital polish." },
    ],
    process: [
      { step: "01", title: "Discover", desc: "We study your market, audience, and ambition before we sketch a thing." },
      { step: "02", title: "Define", desc: "We set the visual strategy — the look, feel, and rules of your brand." },
      { step: "03", title: "Design", desc: "We craft identity, screens, and systems with obsessive attention." },
      { step: "04", title: "Deliver", desc: "We hand off production-ready files and systems your team can run with." },
    ],
    metricLabel: "Avg. conversion lift",
    metricValue: "+42%",
  },
  {
    slug: "digital-marketing",
    index: "04",
    name: "Digital Marketing",
    short: "Digital Marketing Services",
    tagline: "Demand, growth & performance.",
    description:
      "Growth that compounds. We run full-funnel digital marketing — SEO, paid media, content, and conversion optimization — measured against the only metric that matters: profitable, repeatable revenue.",
    outcomes: [
      "Qualified pipeline from search, social, and paid channels",
      "Lower acquisition costs through relentless optimization",
      "Reporting that ties every dollar spent to revenue earned",
    ],
    deliverables: [
      { title: "SEO & Content", desc: "Technical SEO, authority content, and rankings that bring buyers, not just traffic." },
      { title: "Paid Media", desc: "Google, Meta, and LinkedIn campaigns managed to ROAS, not vanity metrics." },
      { title: "Conversion Optimization", desc: "Landing pages and funnels tested to turn clicks into customers." },
      { title: "Email & Lifecycle", desc: "Automated sequences that nurture, convert, and retain." },
      { title: "Analytics & Reporting", desc: "Clean attribution and dashboards you can actually make decisions from." },
    ],
    process: [
      { step: "01", title: "Audit", desc: "We benchmark your funnel and find the constraints holding back growth." },
      { step: "02", title: "Plan", desc: "We build a channel mix and roadmap tied to revenue targets." },
      { step: "03", title: "Execute", desc: "We launch, manage, and optimize campaigns across the funnel." },
      { step: "04", title: "Scale", desc: "We double down on what works and compound the returns." },
    ],
    metricLabel: "Avg. ROAS delivered",
    metricValue: "4.8x",
  },
];

export const metrics = [
  { value: "12+", label: "Years of combined expertise" },
  { value: "850+", label: "Projects delivered" },
  { value: "30+", label: "Industries served" },
  { value: "96%", label: "Client retention rate" },
];

export const differentiators = [
  {
    title: "One group, four specialisms",
    desc: "Trademark, publishing, design, and marketing under one roof — so your brand strategy is coherent, not stitched together from five vendors.",
  },
  {
    title: "Senior talent on every account",
    desc: "You work with specialists who have shipped at scale, not junior staff learning on your budget.",
  },
  {
    title: "Outcomes, not deliverables",
    desc: "We measure success in registrations secured, books ranked, conversions lifted, and revenue grown.",
  },
  {
    title: "Enterprise rigor, startup speed",
    desc: "Process and accountability of a large firm, with the velocity and access of a boutique partner.",
  },
  {
    title: "Transparent from day one",
    desc: "Clear scopes, honest timelines, and reporting you can actually act on. No black boxes.",
  },
  {
    title: "Built to scale with you",
    desc: "From your first trademark to a full growth engine — one partner that grows as you do.",
  },
];

export const processSteps = [
  { step: "01", title: "Discover", desc: "We learn your business, market, and goals in depth before recommending anything." },
  { step: "02", title: "Strategize", desc: "We design a clear, prioritized plan mapped to measurable outcomes." },
  { step: "03", title: "Execute", desc: "Our specialists deliver with precision, communication, and momentum." },
  { step: "04", title: "Optimize", desc: "We measure, refine, and compound results long after launch." },
];

export const testimonials = [
  {
    quote:
      "Multi Tech Brands secured our trademark in two classes and rebuilt our site in the same quarter. Having one team own both was the difference between scattered and strategic.",
    name: "Sarah Whitfield",
    role: "Founder, Aurelia Skincare",
  },
  {
    quote:
      "Our book hit #1 in its Amazon category within launch week. The editing, the cover, the launch plan — every piece was handled at a level we couldn't have reached alone.",
    name: "Daniel Osei",
    role: "Author & Speaker",
  },
  {
    quote:
      "They cut our cost per acquisition by 38% in 90 days while scaling spend. The reporting finally tied marketing to revenue in a way our board could trust.",
    name: "Priya Nair",
    role: "VP Growth, NorthLoop Commerce",
  },
  {
    quote:
      "The rebrand repositioned us upmarket overnight. We closed two enterprise deals that told us, directly, the new identity is why they took the meeting.",
    name: "Marcus Lindqvist",
    role: "CEO, Verda Systems",
  },
];

export const faqs = [
  {
    q: "What exactly is Multi Tech Brands?",
    a: "Multi Tech Brands is a group of specialist companies operating under one roof — covering trademark & IP, E-Book publishing, design, and digital marketing. You get the breadth of an agency network with the accountability of a single partner.",
  },
  {
    q: "Can I hire you for just one service?",
    a: "Absolutely. Most clients start with a single service — a trademark filing, a book launch, a rebrand, or a growth engagement — and expand as they see results. There's no obligation to bundle.",
  },
  {
    q: "How quickly can we start?",
    a: "Most engagements kick off within five business days of a signed scope. Time-sensitive trademark filings and book launches can be expedited — tell us your deadline and we'll build around it.",
  },
  {
    q: "Do you work with early-stage startups as well as enterprises?",
    a: "Yes. Our clients range from first-time founders and independent authors to ecommerce brands and established enterprises. We scope every engagement to the stage you're actually at.",
  },
  {
    q: "How do you price your work?",
    a: "Fixed-scope projects are quoted as flat fees; ongoing work (like marketing or brand monitoring) is retained monthly. Every proposal spells out exactly what's included before you commit.",
  },
  {
    q: "Will I have one point of contact across services?",
    a: "Yes. You're assigned a dedicated lead who coordinates every specialist on your account, so you never have to manage four vendors yourself.",
  },
];

export const industries = [
  { name: "Technology & SaaS", desc: "Protect IP, build category-defining brands, and grow pipeline." },
  { name: "Ecommerce & Retail", desc: "Trademark your name, convert more traffic, scale paid media profitably." },
  { name: "Authors & Publishing", desc: "Edit, publish, and launch books that rank and build authority." },
  { name: "Professional Services", desc: "Credible identities and demand generation for firms that sell trust." },
  { name: "Health & Wellness", desc: "Compliant branding and growth for regulated, trust-led markets." },
  { name: "Finance & Fintech", desc: "Enterprise-grade design and IP protection for high-stakes brands." },
  { name: "Real Estate", desc: "Premium positioning and lead generation that fills the pipeline." },
  { name: "Hospitality & Lifestyle", desc: "Brands and campaigns that feel as good as the experience." },
];

export interface PortfolioItem {
  title: string;
  category: string;
  service: string;
  result: string;
  tone: string; // gradient class key
}

export const portfolio: PortfolioItem[] = [
  { title: "Aurelia Skincare", category: "Brand + Trademark", service: "Design / IP", result: "Trademarked & rebranded in one quarter", tone: "a" },
  { title: "NorthLoop Commerce", category: "Performance Marketing", service: "Digital Marketing", result: "−38% CPA at 2x spend", tone: "b" },
  { title: "The Founder's Edge", category: "Book Launch", service: "E-Book Publishing", result: "#1 in category, launch week", tone: "c" },
  { title: "Verda Systems", category: "Rebrand", service: "Design", result: "Repositioned upmarket; 2 enterprise wins", tone: "d" },
  { title: "Lumen Health", category: "Web + Growth", service: "Design / Marketing", result: "+61% qualified demos", tone: "e" },
  { title: "Atlas Realty Group", category: "Identity + Lead Gen", service: "Design / Marketing", result: "Pipeline filled in 60 days", tone: "f" },
];

export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  services: string[];
  challenge: string;
  approach: string;
  results: { value: string; label: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "aurelia-skincare",
    client: "Aurelia Skincare",
    title: "From unprotected startup to premium, defensible brand",
    services: ["Trademark & IP", "Design"],
    challenge:
      "A fast-growing skincare startup was selling under a name they didn't legally own, with packaging and a site that undercut their premium price point.",
    approach:
      "We ran a full clearance search, filed in two classes, and rebuilt the identity, packaging, and ecommerce site around a luxury positioning — all inside a single quarter.",
    results: [
      { value: "2", label: "Trademark classes secured" },
      { value: "+54%", label: "Average order value" },
      { value: "1Q", label: "From filing to relaunch" },
    ],
  },
  {
    slug: "northloop-commerce",
    client: "NorthLoop Commerce",
    title: "Scaling paid media without scaling waste",
    services: ["Digital Marketing"],
    challenge:
      "An ecommerce brand was stuck — every increase in ad spend pushed acquisition costs higher and margins thinner.",
    approach:
      "We rebuilt their funnel, restructured paid campaigns around contribution margin, and ran a continuous testing program on landing pages and creative.",
    results: [
      { value: "−38%", label: "Cost per acquisition" },
      { value: "2x", label: "Ad spend, profitably" },
      { value: "4.8x", label: "Blended ROAS" },
    ],
  },
  {
    slug: "founders-edge",
    client: "The Founder's Edge",
    title: "A first-time author hits #1 in category",
    services: ["E-Book Publishing"],
    challenge:
      "A founder had a finished manuscript but no path to a credible, well-ranked launch that would build their platform.",
    approach:
      "We edited, designed the cover and interior, formatted for every platform, and orchestrated a launch sequence engineered for category ranking.",
    results: [
      { value: "#1", label: "Amazon category, launch week" },
      { value: "1,800+", label: "Copies in first 30 days" },
      { value: "12", label: "Podcast bookings from the launch" },
    ],
  },
];

export interface Brand {
  name: string;
  url: string;
  display: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  services: string[];
  location: string;
  relatedService: string;
  tone: string;
}

export const brands: Brand[] = [
  {
    name: "Legal Mark Experts",
    url: "https://legalmarkexperts.com",
    display: "legalmarkexperts.com",
    category: "Trademark & IP",
    tagline: "Secure your brand with expert trademark registration.",
    description:
      "Legal Mark Experts makes the U.S. trademark process simple, fast, and affordable — guiding founders from clearance search to USPTO filing and beyond. A dedicated team protects your name, logo, and identity at every step.",
    highlights: [
      "Trusted by 3,000+ founders nationwide",
      "Filings appear in the USPTO database within 24 hours",
      "Transparent packages from $99 + USPTO fees",
    ],
    services: [
      "Trademark Registration & USPTO Filing",
      "Free & Comprehensive Trademark Search",
      "Office Action Responses & Renewals",
      "Trademark Monitoring & Enforcement",
      "Cease & Desist & Litigation",
    ],
    location: "United States",
    relatedService: "trademark",
    tone: "a",
  },
  {
    name: "Author's Craft",
    url: "https://authorscraft.com",
    display: "authorscraft.com",
    category: "E-Book Publishing",
    tagline: "Your story deserves to be published.",
    description:
      "Author's Craft is a full-service book studio pairing master ghostwriters, editors, and publishing strategists to turn untold stories into published books — from first concept to bestseller, all under one roof.",
    highlights: [
      "America's premier book studio",
      "Based in Brooklyn, New York",
      "Concept-to-bestseller, handled end to end",
    ],
    services: [
      "Ghostwriting",
      "Editing & Proofreading",
      "Cover Design & Illustration",
      "Publishing & Distribution",
      "Audiobook Production",
    ],
    location: "Brooklyn, NY, USA",
    relatedService: "ebook-publishing",
    tone: "c",
  },
];

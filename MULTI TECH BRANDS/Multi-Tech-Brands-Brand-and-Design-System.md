# Multi Tech Brands — Brand Strategy, Design System & Specifications

This document covers the strategy and specifications behind the website. The production code lives in `/multi-tech-brands`.

---

## 0. Thinking like an Awwwards jury

An Awwwards-worthy site is judged on **Design (40%)**, **Usability/UX (30%)**, **Creativity (20%)**, and **Content (10%)**. To earn recognition, Multi Tech Brands needs:

- **A point of view, not a template.** A single ownable idea — *"one group, every advantage"* — expressed through a dark, cinematic, electric-blue world that no generic agency template shares.
- **Craft in the details.** Magnetic buttons, a custom cursor, word-by-word headline reveals, count-up metrics, glassmorphic surfaces with real depth, and an aurora background that reacts to scroll — restraint, not noise.
- **Performance as part of the aesthetic.** Motion that respects `prefers-reduced-motion`, fast loads, semantic HTML, and accessible contrast. Jurors penalize beauty that breaks on mobile or for keyboard users.
- **Content that sells.** Specific, confident copy with real numbers — not lorem ipsum energy.

The build prioritizes all four axes simultaneously.

---

## 1. Brand strategy

**Positioning:** A group of specialist companies — Trademark & IP, eBook Publishing, Design, and Digital Marketing — that gives ambitious brands enterprise-grade execution from one accountable partner.

**Core idea:** *One group. Every advantage your brand needs to scale.*

**Value proposition:** End the trade-off between breadth and quality. Instead of stitching together four vendors who never talk, clients get four senior specialisms under one roof, one standard, one point of contact.

**Brand personality:** Innovative · Premium · Professional · Intelligent · Future-focused · Trustworthy · Results-driven.

**Audience:** Startups, founders, small businesses, enterprises, authors, ecommerce brands, business owners.

**Voice & tone:** Confident, precise, results-led. Short declarative sentences. Numbers over adjectives. Never hype-y, never generic.

**Messaging pillars:**
1. One group, four specialisms (coherence)
2. Senior talent on every account (quality)
3. Outcomes, not deliverables (results)
4. Enterprise rigor, startup speed (trust + velocity)

---

## 2. Visual design system

### Color palette

| Role | Name | Hex |
|---|---|---|
| Primary bg | Deep Black (Ink) | `#05060A` |
| Surface | Graphite | `#16181F` |
| Accent | Electric Blue | `#2E6BFF` |
| Accent (bright) | Neon Blue | `#19E0FF` |
| Secondary | Silver | `#C7CCD6` |
| Secondary | White | `#FFFFFF` |
| Premium gradient | Electric → Neon → Periwinkle | `#2E6BFF → #19E0FF → #6FA3FF` |

Usage: deep black base for cinematic depth; graphite for raised surfaces; electric/neon blue strictly for emphasis, CTAs, and gradients; silver/white for text hierarchy.

### Typography

- **Display / Headings:** **Sora** (600–800) — modern, geometric, confident.
- **Body:** **Inter** — enterprise-grade readability at every size.
- **Mono / accents:** **JetBrains Mono** — index numbers, labels, technical detailing.

**Fluid type scale (clamp-based, responsive):**

| Token | Range |
|---|---|
| display-xl | 52 → 120px |
| display-lg | 44 → 88px |
| display-md | 36 → 60px |
| heading | 28 → 40px |
| title | 20 → 26px |
| body-lg | 17 → 20px |
| eyebrow | 12.5px / 0.22em tracking |

### Surfaces & effects

- **Glassmorphism:** translucent white gradient, 18px backdrop blur, hairline border, inset highlight.
- **Gradients:** premium electric→neon for CTAs and key headlines (`text-gradient`).
- **Depth:** soft glows, layered radial light, faint grid, aurora blobs.
- Spacing on an 8px rhythm; container max-width 1320px; corners up to 2rem (`rounded-4xl`).

---

## 3. Sitemap

```
Home
About
Services (hub)
 ├─ Trademark & IP
 ├─ eBook Publishing
 ├─ Design
 └─ Digital Marketing
Work (Portfolio)
Case Studies
Industries
Insights (Blog)  ← powered by headless WordPress
 └─ /blog/[slug]
Contact
+ system: 404, sitemap.xml, robots.txt
```

Structure improvement vs. the brief: service detail pages are nested under `/services/*` (cleaner IA + SEO siloing), "Portfolio" is surfaced as "Work", and "Blog" is branded "Insights".

---

## 4. Homepage wireframe (section order)

1. **Hero** — animated headline, value prop, dual CTA, floating service chips, scroll cue.
2. **Overview** — audience marquee + who-we-are narrative.
3. **Services** — 2×2 premium glass cards with per-service metric.
4. **Metrics** — count-up stat bar (years, projects, industries, retention).
5. **Why Us** — six differentiators.
6. **Portfolio preview** — six gradient project cards.
7. **Testimonials** — animated rotating quotes.
8. **Process** — 4-step connected timeline.
9. **Industries** — grid of 8 sectors.
10. **FAQ** — accordion.
11. **Final CTA** — high-conversion closer.

---

## 5. Animation specifications

| Element | Spec |
|---|---|
| Headline reveal | Word/line mask, `y: 110% → 0`, easing `[0.22,1,0.36,1]`, ~0.06s stagger |
| Section reveals | Fade + 32px rise on scroll into view, once, `-80px` margin |
| Metrics | rAF count-up with cubic ease-out, triggered in-view |
| Buttons / logo | Magnetic drift toward cursor (spring), scale 1.03 on hover |
| Cursor | Custom blended dot that expands over interactive targets (fine pointers only) |
| Background | Aurora blobs parallax on scroll; faint grid with radial mask |
| Cards | Lift + glow + border-color on hover (0.5s) |
| Testimonials/FAQ | Height + opacity transitions, `AnimatePresence` |
| Accessibility | All motion disabled under `prefers-reduced-motion` |

---

## 6. Mobile design strategy

- Mobile-first fluid type and spacing (clamp scales down gracefully).
- Full-screen animated nav overlay; magnetic/cursor effects auto-disable on coarse pointers.
- Single-column stacking for all grids; tap targets ≥ 44px.
- Heavy blurs and parallax kept lightweight; images lazy-loaded.

---

## 7. SEO strategy

**Implemented in code:**
- Per-page `title` + `description` via Next Metadata API; templated titles.
- Canonical URLs, robots, dynamic `sitemap.xml` (includes WP posts).
- JSON-LD: `Organization` (site-wide) + `Article` (blog posts).
- OpenGraph/Twitter cards; semantic headings; alt text on media.

**Meta examples:**
- Home — *Multi Tech Brands — Trademark, Publishing, Design & Marketing*
- Trademark — *Trademark Registration & IP Services* — "Protect your brand with expert clearance, filing, office-action responses, and monitoring…"

**Keyword themes:** trademark registration, IP services, ebook publishing services, brand/web design agency, digital marketing agency, full-funnel growth.

**Internal linking:** Home → all services; each service cross-links the other three; footer links every page; blog posts → CTA → contact.

---

## 8. Deliverables map

| # | Deliverable | Where |
|---|---|---|
| 1 | Brand strategy | this doc §1 |
| 2 | Design system | this doc §2 + `tailwind.config.ts`, `globals.css` |
| 3 | Sitemap | §3 + `app/` routes |
| 4 | Wireframes | §4 |
| 5–6 | Homepage + all pages | `src/app/**` |
| 7 | Website copy | `src/data/content.ts` |
| 8 | Design specs | §2 |
| 9 | Animation specs | §5 + `src/components/motion/**` |
| 10 | Mobile strategy | §6 |
| 11 | SEO strategy | §7 + `sitemap.ts`, `robots.ts`, schema |
| 12 | Production code | `/multi-tech-brands` |

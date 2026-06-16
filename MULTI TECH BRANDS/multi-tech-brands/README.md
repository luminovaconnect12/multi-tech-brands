# Multi Tech Brands — Premium Headless Website

A production-grade, Awwwards-tier marketing site for **Multi Tech Brands**, built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**, sourcing blog content from **headless WordPress**.

---

## What this is (and how it relates to your WordPress)

This is a **separate Next.js application** — the premium, animated front end. It is **not** a WordPress theme and does **not** appear inside `wp-admin`.

- **WordPress** (`techgenbpo.com/multitechbrands`) = the **content backend**. You write blog posts in wp-admin as usual.
- **This Next.js app** = the **website visitors see**. It pulls posts from WordPress through the REST API at build/runtime.

This is the "headless" architecture. To put it on the internet, the Next.js app is **deployed to a host** (Vercel recommended). Your WordPress can stay exactly where it is.

---

## Quick start (run it on your computer)

```bash
cd multi-tech-brands
cp .env.example .env.local      # values already point at your WP install
npm install
npm run dev                     # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

> Note: `npm install` pulls Next.js + Framer Motion and can take a couple of minutes the first time.

---

## Environment variables (`.env.local`)

```
NEXT_PUBLIC_WP_API_URL=https://techgenbpo.com/multitechbrands/wp-json
NEXT_PUBLIC_SITE_URL=https://multitechbrands.com
```

Change `NEXT_PUBLIC_SITE_URL` to your real production domain before launch (it drives canonical URLs, the sitemap, and OG tags).

---

## Deploying (making it live)

**Recommended: Vercel**

1. Push this folder to a GitHub repo.
2. In Vercel, "Add New Project" → import the repo.
3. Add the two environment variables above in Vercel's project settings.
4. Deploy. You'll get a live URL in ~1 minute.
5. Point your domain (or a subdomain) at Vercel.

Any Node host that runs `npm run build && npm start` also works.

---

## One optional WordPress-side step

The blog already works over the public REST API with no plugin needed. Two optional improvements:

1. **CORS** — if you call the API from a different domain in the browser, add allow-origin headers (the server here calls it server-side, so this is usually unnecessary).
2. **WPGraphQL** — if you later prefer GraphQL over REST, install the free *WPGraphQL* plugin; the data layer in `src/lib/wordpress.ts` can be swapped accordingly.

---

## Project structure

```
src/
├── app/                  # routes (App Router)
│   ├── page.tsx          # Home
│   ├── about/
│   ├── services/         # hub + trademark, ebook-publishing, design, digital-marketing
│   ├── portfolio/
│   ├── case-studies/
│   ├── industries/
│   ├── blog/             # list + [slug] (pulls from WordPress)
│   ├── contact/
│   ├── sitemap.ts | robots.ts | not-found.tsx
│   ├── layout.tsx        # fonts, metadata, Org schema, providers
│   └── globals.css       # design-system CSS
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── ui/               # Button, GlassCard, Section, Logo, Cursor, Background
│   ├── motion/           # Reveal, TextReveal, Magnetic, Parallax, Counter, SmoothScroll
│   ├── home/             # all homepage sections
│   └── sections/         # reusable: PageHero, ServiceTemplate, PortfolioGrid, FAQ, CTA, ContactForm
├── data/content.ts       # ALL marketing copy (services, metrics, testimonials, FAQ, case studies…)
└── lib/                  # site config + WordPress data layer
```

## Wiring the contact form

`src/components/sections/ContactForm.tsx` currently captures and confirms submission client-side. Connect it to your preferred destination (WordPress Contact Form 7 REST endpoint, a CRM, or an email service) where marked.

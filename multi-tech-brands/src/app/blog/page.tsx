import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import CTA from "@/components/sections/CTA";
import { getPosts } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Insights — Ideas on brand, IP, publishing & growth",
  description:
    "Practical insights from Multi Tech Brands on trademark protection, publishing, design, and digital marketing — for founders and teams who want to win.",
  alternates: { canonical: "/blog" },
};

export const revalidate = 1800;

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getPosts(24);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Ideas worth <span className="text-gradient">acting on.</span>
          </>
        }
        intro="Field-tested thinking on protecting, publishing, designing, and growing brands — straight from the specialists who do the work."
      />

      <Section className="pt-4">
        {posts.length === 0 ? (
          <div className="glass rounded-4xl p-12 text-center">
            <h2 className="font-display text-heading font-semibold text-white">
              Fresh insights are on the way.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-silver-400">
              We&apos;re publishing new articles from WordPress shortly. In the
              meantime, explore our work or start a conversation.
            </p>
            <Link href="/contact" className="btn-primary mt-8" data-cursor="hover">
              <span>Start a project</span>
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.06}>
                <Link
                  href={`/blog/${p.slug}`}
                  data-cursor="hover"
                  className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-4xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {p.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.image.src}
                        alt={p.image.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-electric/30 to-neon/20" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-silver-400">
                      <span className="text-electric">{p.category}</span>
                      <span>·</span>
                      <span>{p.readingTime} min read</span>
                    </div>
                    <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-white">
                      {p.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 flex-1 text-sm text-silver-400">
                      {p.excerpt}
                    </p>
                    <span className="mt-5 text-xs text-silver-400">{fmtDate(p.date)}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <CTA />
    </>
  );
}

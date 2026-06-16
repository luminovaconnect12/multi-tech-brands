import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import CTA from "@/components/sections/CTA";
import { getPost, getPostSlugs } from "@/lib/wordpress";
import { site } from "@/lib/site";

export const revalidate = 1800;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [{ url: post.image.src }] : undefined,
    },
  };
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: site.name },
    image: post.image?.src,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article>
        <header className="relative overflow-hidden pb-10 pt-40 md:pt-48">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-radial-glow opacity-70" aria-hidden />
          <div className="shell relative max-w-3xl">
            <Link
              href="/blog"
              className="text-sm text-silver-400 transition-colors hover:text-white"
              data-cursor="hover"
            >
              ← All insights
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs text-silver-400">
              <span className="text-electric">{post.category}</span>
              <span>·</span>
              <span>{post.readingTime} min read</span>
              <span>·</span>
              <span>{fmtDate(post.date)}</span>
            </div>
            <h1 className="mt-5 font-display text-display-md font-bold text-white">
              {post.title}
            </h1>
          </div>
        </header>

        {post.image && (
          <div className="shell">
            <div className="overflow-hidden rounded-4xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.image.src} alt={post.image.alt} className="w-full" />
            </div>
          </div>
        )}

        <Section className="pt-12">
          <div
            className="prose-invert mx-auto max-w-3xl space-y-6 text-body-lg leading-relaxed text-silver-200 [&_a]:text-electric [&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-electric [&_blockquote]:pl-5 [&_blockquote]:italic [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-heading [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-title [&_h3]:text-white [&_img]:rounded-2xl [&_ul]:list-disc [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Section>
      </article>

      <CTA />
    </>
  );
}

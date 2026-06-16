import { site } from "./site";

/**
 * Headless WordPress data layer.
 * Reads content from the WP REST API at NEXT_PUBLIC_WP_API_URL.
 * Built for the install at techgenbpo.com/multitechbrands.
 */

const API = site.wpApi;

export interface WPImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface WPPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: number;
  author: string;
  category: string;
  image?: WPImage;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&#8217;/g, "’")
    .replace(/&#8230;/g, "…")
    .replace(/&#8211;/g, "–")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function readingTime(html: string): number {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/* eslint-disable-next-line */
function mapPost(raw: any): WPPost {
  const embedded = raw._embedded || {};
  const media = embedded["wp:featuredmedia"]?.[0];
  const term = embedded["wp:term"]?.[0]?.[0];
  const author = embedded.author?.[0];

  return {
    id: raw.id,
    slug: raw.slug,
    title: stripHtml(raw.title?.rendered ?? ""),
    excerpt: stripHtml(raw.excerpt?.rendered ?? ""),
    content: raw.content?.rendered ?? "",
    date: raw.date,
    readingTime: readingTime(raw.content?.rendered ?? ""),
    author: author?.name ?? "Multi Tech Brands",
    category: term?.name ?? "Insights",
    image: media?.source_url
      ? {
          src: media.source_url,
          alt: media.alt_text || stripHtml(raw.title?.rendered ?? ""),
          width: media.media_details?.width,
          height: media.media_details?.height,
        }
      : undefined,
  };
}

async function wpFetch(path: string, revalidate = 1800): Promise<any> {
  const res = await fetch(`${API}${path}`, {
    next: { revalidate },
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`WP request failed: ${res.status} ${path}`);
  return res.json();
}

export async function getPosts(perPage = 12): Promise<WPPost[]> {
  try {
    const data = await wpFetch(
      `/wp/v2/posts?per_page=${perPage}&_embed=author,wp:featuredmedia,wp:term`
    );
    return Array.isArray(data) ? data.map(mapPost) : [];
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const data = await wpFetch(
      `/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=author,wp:featuredmedia,wp:term`
    );
    return Array.isArray(data) && data[0] ? mapPost(data[0]) : null;
  } catch {
    return null;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  try {
    const data = await wpFetch(`/wp/v2/posts?per_page=100&_fields=slug`);
    return Array.isArray(data) ? data.map((p: any) => p.slug) : [];
  } catch {
    return [];
  }
}

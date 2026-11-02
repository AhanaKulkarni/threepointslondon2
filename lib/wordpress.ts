import { Article, Club, Desk } from "@/lib/types";

/**
 * WordPress Headless CMS Integration Layer for Three Points London
 * 
 * Allows editorial writers to publish and edit articles in standard WordPress (wp-admin),
 * with Three Points London consuming posts via the WordPress REST API (or GraphQL).
 */

export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      slug: string;
      avatar_urls?: Record<string, string>;
    }>;
    "wp:featuredmedia"?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      caption?: { rendered: string };
    }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
        taxonomy: string;
      }>
    >;
  };
  acf?: {
    sub_desk?: string;
    is_exclusive?: boolean;
    is_lead?: boolean;
    read_time?: string;
    custom_caption?: string;
    club?: "arsenal" | "chelsea" | "tottenham";
  };
}

// Default WordPress instance URL (can be customized via env variable or admin setting)
const DEFAULT_WP_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_URL ||
  process.env.WORDPRESS_API_URL ||
  "https://cms.threepointslondon.com";

/**
 * Strips HTML tags from WordPress rendered strings
 */
export function cleanHtml(htmlStr: string): string {
  if (!htmlStr) return "";
  return htmlStr
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&amp;/g, "&")
    .trim();
}

/**
 * Estimates reading time from body text
 */
export function calculateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

/**
 * Transforms a raw WordPress REST API post into Three Points London's Article format
 */
export function mapWordPressPostToArticle(wp: WordPressPost): Article {
  const cleanTitle = cleanHtml(wp.title?.rendered || "Untitled Article");
  const cleanExcerpt = cleanHtml(wp.excerpt?.rendered || "");
  const cleanBody = wp.content?.rendered || "";

  // 1. Featured Media Extraction
  const featuredMedia = wp._embedded?.["wp:featuredmedia"]?.[0];
  const imageUrl =
    featuredMedia?.source_url ||
    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1600&q=80";
  const imageCaption =
    cleanHtml(featuredMedia?.caption?.rendered || "") ||
    featuredMedia?.alt_text ||
    "Three Points London Editorial Coverage.";

  // 2. Author Extraction
  const authorObj = wp._embedded?.author?.[0];
  const authorName = authorObj?.name || "Vayam Lahoti";
  const authorId = (authorObj?.slug || "vayam-lahoti").toLowerCase();

  // 3. Club & Desk Category Resolution from WordPress taxonomy
  const terms = wp._embedded?.["wp:term"]?.flat() || [];
  let detectedClub: Club = "arsenal";
  let detectedDesk: Desk = "features";
  let detectedSubDesk = "DATA ANALYSIS";

  // Check ACF or Category names
  if (wp.acf?.club) {
    detectedClub = wp.acf.club;
  } else {
    const termSlugs = terms.map((t) => t.slug.toLowerCase());
    if (termSlugs.includes("chelsea")) detectedClub = "chelsea";
    else if (termSlugs.includes("tottenham") || termSlugs.includes("spurs")) detectedClub = "tottenham";
    else if (termSlugs.includes("arsenal")) detectedClub = "arsenal";
  }

  // Check desk from tags or categories
  for (const t of terms) {
    const s = t.slug.toLowerCase();
    if (["transfers", "transfer", "signings"].includes(s)) detectedDesk = "transfers";
    else if (["matchday", "ratings", "fixtures"].includes(s)) detectedDesk = "matchday";
    else if (["news", "latest", "academy"].includes(s)) detectedDesk = "news";
    else if (["features", "tactics", "data"].includes(s)) detectedDesk = "features";
  }

  if (wp.acf?.sub_desk) {
    detectedSubDesk = wp.acf.sub_desk.toUpperCase();
  }

  return {
    id: `wp-${wp.id}`,
    slug: wp.slug,
    title: cleanTitle,
    excerpt: cleanExcerpt,
    body: cleanBody,
    club: detectedClub,
    desk: detectedDesk,
    subDesk: detectedSubDesk,
    authorId,
    authorName,
    publishedAt: wp.date || new Date().toISOString(),
    updatedAt: wp.modified || wp.date,
    readTime: wp.acf?.read_time || calculateReadTime(cleanBody),
    views: 1200,
    isLead: Boolean(wp.acf?.is_lead),
    isExclusive: Boolean(wp.acf?.is_exclusive),
    imageUrl,
    imageCaption,
  };
}

/**
 * Fetches published posts from WordPress REST API with embedded media and author
 */
export async function fetchWordPressPosts(options: {
  endpoint?: string;
  perPage?: number;
  page?: number;
  club?: string;
} = {}): Promise<Article[]> {
  const baseUrl = options.endpoint || DEFAULT_WP_URL;
  const perPage = options.perPage || 20;
  const page = options.page || 1;

  try {
    const url = `${baseUrl.replace(/\/$/, "")}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}&status=publish`;
    const res = await fetch(url, {
      next: { revalidate: 60 }, // Incremental Static Regeneration every 60 seconds
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.warn(`[WordPress Sync] Failed to fetch posts from ${url}: Status ${res.status}`);
      return [];
    }

    const rawPosts: WordPressPost[] = await res.json();
    return rawPosts.map(mapWordPressPostToArticle);
  } catch (err: any) {
    console.warn(`[WordPress Sync] Connection error to ${baseUrl}:`, err.message);
    return [];
  }
}

/**
 * Fetches a single post by slug from WordPress
 */
export async function fetchWordPressPostBySlug(
  slug: string,
  endpoint?: string
): Promise<Article | null> {
  const baseUrl = endpoint || DEFAULT_WP_URL;
  try {
    const url = `${baseUrl.replace(/\/$/, "")}/wp-json/wp/v2/posts?_embed&slug=${encodeURIComponent(slug)}`;
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    const posts: WordPressPost[] = await res.json();
    if (!posts || posts.length === 0) return null;

    return mapWordPressPostToArticle(posts[0]);
  } catch (err) {
    return null;
  }
}

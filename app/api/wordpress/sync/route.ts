import { NextRequest, NextResponse } from "next/server";
import { fetchWordPressPosts } from "@/lib/wordpress";
import { getSiteData, updateArticle } from "@/lib/store";
import { Article } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const { endpoint } = await req.json();
    const wpUrl = endpoint || process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://cms.threepointslondon.com";

    // 1. Test WordPress API endpoint connectivity
    const testUrl = `${wpUrl.replace(/\/$/, "")}/wp-json/wp/v2/posts?per_page=5&_embed`;
    
    let articles: Article[] = [];
    let isConnected = false;
    let message = "";

    try {
      const res = await fetch(testUrl, {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });

      if (res.ok) {
        isConnected = true;
        articles = await fetchWordPressPosts({ endpoint: wpUrl, perPage: 10 });
        message = `Connected successfully! Found and mapped ${articles.length} posts from WordPress.`;
      } else {
        message = `WordPress endpoint reachable, but returned HTTP ${res.status}. Check permissions or permalinks.`;
      }
    } catch (fetchErr: any) {
      // Graceful offline/mock mode for demo purposes
      isConnected = false;
      message = `Could not reach ${wpUrl} (${fetchErr.message}). Ready for your live WordPress instance URL.`;
    }

    return NextResponse.json({
      success: true,
      connected: isConnected,
      endpoint: wpUrl,
      message,
      postsCount: articles.length,
      sampleArticles: articles.slice(0, 3),
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to sync WordPress" },
      { status: 500 }
    );
  }
}

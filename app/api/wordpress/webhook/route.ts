import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * On-demand revalidation webhook for WordPress.
 * When writers publish or update articles in WordPress, WordPress webhook plugins
 * (e.g. WP Webhooks, Next.js Revalidation, or custom action hook in functions.php)
 * call this endpoint to immediately update Next.js cache with 0 build time.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const secret = req.nextUrl.searchParams.get("secret") || body.secret;

    // Optional secret check
    const expectedSecret = process.env.WORDPRESS_WEBHOOK_SECRET || "tpl_wp_secret_2026";
    if (secret && secret !== expectedSecret) {
      return NextResponse.json({ message: "Invalid webhook secret" }, { status: 401 });
    }

    const slug = body.post?.post_name || body.slug;
    const club = body.club || "arsenal";

    // Revalidate paths immediately
    revalidatePath("/");
    revalidatePath("/arsenal");
    revalidatePath("/chelsea");
    revalidatePath("/tottenham");
    revalidatePath("/search");

    if (slug) {
      revalidatePath(`/article/${slug}`);
    }

    return NextResponse.json({
      revalidated: true,
      slug: slug || "all",
      timestamp: new Date().toISOString(),
      message: "Cache invalidated. New WordPress content is immediately live!",
    });
  } catch (err: any) {
    return NextResponse.json(
      { revalidated: false, message: err.message },
      { status: 500 }
    );
  }
}

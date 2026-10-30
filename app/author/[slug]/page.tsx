import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticles, getSiteData } from "@/lib/store";
import AdSlot from "@/components/AdSlot";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 0;

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const siteData = getSiteData();
  const author = siteData.authors.find((a) => a.slug === slug);

  if (!author) {
    notFound();
  }

  const allArticles = getArticles();
  const authorArticles = allArticles.filter((a) => a.authorId === author.id);
  const featuredArticle = authorArticles[0] || allArticles[0];
  const listArticles = authorArticles.slice(1);

  // Fallback high-resolution football photography for articles without custom imageUrl
  const fallbackImages = [
    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
  ];

  const getClubDashColor = (club: string) => {
    if (club === "arsenal") return "bg-[#E8192C]";
    if (club === "chelsea") return "bg-[#1C6BB0]";
    return "bg-[#24376B]";
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 space-y-6">
      {/* ========================================================
          1. AUTHOR MASTHEAD CARD (Slate Navy #1D2B45)
         ======================================================== */}
      <div className="bg-[#1D2B45] text-white rounded-xs p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          {/* Left & Middle Info */}
          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 flex-1">
            {/* Circular Monogram Avatar */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#142036] border border-[#273859] text-white font-display font-black text-2xl sm:text-3xl flex items-center justify-center shrink-0">
              {author.initials}
            </div>

            <div className="space-y-2 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
                AUTHOR & JOURNALIST
              </span>
              <h1 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                {author.name}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-gray-300">
                {author.role} · {author.desk}
              </p>
              <p className="font-body text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl font-normal pt-1">
                {author.bio}
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-2 pt-3">
                {author.twitter && (
                  <a
                    href={author.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-gray-600 text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    @vayamlahoti
                  </a>
                )}
                {author.linkedin && (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-gray-600 text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {author.email && (
                  <a
                    href={`mailto:${author.email}`}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-gray-600 text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {author.email}
                  </a>
                )}
                <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#CE3426] text-white hover:bg-[#b02b1f] transition-colors cursor-pointer">
                  Follow
                </button>
              </div>
            </div>
          </div>

          {/* Right Stats Box: "ON THIS SITE" */}
          <div className="bg-[#142036] border border-[#273859] rounded-xs p-4 sm:p-5 w-full lg:w-64 shrink-0">
            <h3 className="text-[10px] font-mono font-bold uppercase text-gray-400 tracking-wider pb-3 border-b border-[#273859] mb-3">
              ON THIS SITE
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Pieces published</span>
                <span className="font-display font-black text-base text-white">
                  {author.piecesCount || 148}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Exclusives</span>
                <span className="font-display font-black text-base text-white">
                  {author.exclusivesCount || 22}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Writing since</span>
                <span className="font-display font-black text-base text-white">
                  {author.writingSince || "2022"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Main desk</span>
                <span className="font-display font-black text-base text-white">
                  Arsenal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. FILTER TABS
         ======================================================== */}
      <div className="border-b border-hairline flex items-center gap-6 overflow-x-auto whitespace-nowrap scrollbar-none text-xs font-bold text-gray-600">
        <button className="py-2.5 text-ink border-b-2 border-ink font-black">
          All {author.piecesCount || 148}
        </button>
        <button className="py-2.5 hover:text-ink transition-colors">
          Arsenal
        </button>
        <button className="py-2.5 hover:text-ink transition-colors">
          Chelsea
        </button>
        <button className="py-2.5 hover:text-ink transition-colors">
          Tottenham
        </button>
        <button className="py-2.5 hover:text-ink transition-colors">
          Exclusives
        </button>
      </div>

      {/* ========================================================
          3. MAIN CONTENT: Articles Feed (8 cols) + Sidebar (4 cols)
         ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Portfolio Feed with Relevant Images */}
        <div className="lg:col-span-8 space-y-6">
          {/* Lead Story Card with Relevant Image */}
          {featuredArticle && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center p-4 bg-surface/50 border border-hairline rounded-xs group">
              <div className="md:col-span-6 aspect-[16/10] w-full rounded-xs overflow-hidden relative bg-slate-100">
                <img
                  src={
                    featuredArticle.imageUrl ||
                    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80"
                  }
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:col-span-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#CE3426] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-xs tracking-wider">
                    EXCLUSIVE
                  </span>
                  <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-muted">
                    <span className={`w-2.5 h-[2px] ${getClubDashColor(featuredArticle.club)}`}></span>
                    <span>{featuredArticle.club.toUpperCase()} · {featuredArticle.subDesk || featuredArticle.desk.toUpperCase()}</span>
                  </div>
                </div>
                <Link
                  href={`/article/${featuredArticle.slug}`}
                  className="font-display font-black text-xl text-ink hover:text-indigo leading-tight block mb-2"
                >
                  {featuredArticle.title}
                </Link>
                <p className="font-body text-xs text-[#555] leading-relaxed mb-3 line-clamp-2">
                  {featuredArticle.excerpt}
                </p>
                <div className="text-[11px] text-muted font-medium">
                  {author.name} · {featuredArticle.readTime || "6 min read"} · 2 hours ago
                </div>
              </div>
            </div>
          )}

          {/* Listing Items with Relevant Portfolio Images */}
          <div className="divide-y divide-hairline">
            {listArticles.slice(0, 6).map((art, idx) => {
              const imageSrc =
                art.imageUrl || fallbackImages[idx % fallbackImages.length];

              return (
                <div key={art.id} className="py-4 flex gap-4 items-center group">
                  <Link
                    href={`/article/${art.slug}`}
                    className="w-28 sm:w-36 aspect-[16/10] shrink-0 rounded-xs overflow-hidden block relative bg-slate-100"
                  >
                    <img
                      src={imageSrc}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1 text-[9px] font-black uppercase tracking-wider text-muted">
                      <span className={`w-2.5 h-[2px] ${getClubDashColor(art.club)}`}></span>
                      <span>{art.club.toUpperCase()} · {art.subDesk || art.desk.toUpperCase()}</span>
                    </div>
                    <Link
                      href={`/article/${art.slug}`}
                      className="font-headline font-bold text-sm sm:text-base text-ink hover:text-indigo leading-snug block mb-1"
                    >
                      {art.title}
                    </Link>
                    <p className="text-xs text-muted font-normal line-clamp-1 mb-1">
                      {art.excerpt}
                    </p>
                    <div className="text-[10px] text-muted">
                      {author.name} · {art.readTime || "8 min read"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Row */}
          <div className="pt-6 flex items-center justify-center gap-1.5 text-xs font-bold text-ink">
            <span className="w-8 h-8 rounded-xs bg-[#1D2B45] text-white flex items-center justify-center">
              1
            </span>
            <span className="w-8 h-8 rounded-xs border border-hairline flex items-center justify-center hover:bg-surface cursor-pointer">
              2
            </span>
            <span className="w-8 h-8 rounded-xs border border-hairline flex items-center justify-center hover:bg-surface cursor-pointer">
              3
            </span>
            <span className="px-1 text-muted">...</span>
            <span className="w-8 h-8 rounded-xs border border-hairline flex items-center justify-center hover:bg-surface cursor-pointer">
              15
            </span>
            <button className="px-3 h-8 rounded-xs border border-hairline flex items-center justify-center hover:bg-surface cursor-pointer">
              Next ›
            </button>
          </div>
        </div>

        {/* Right Sidebar Rail (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Sticky 300x600 Half-Page Ad */}
          <AdSlot
            id="rail_300x600"
            label="AD — 300×600 HALF-PAGE · SEQUENTIAL · 30s VIEWABLE REFRESH"
          />

          {/* FOLLOW VAYAM Card (Slate Navy #1D2B45) */}
          <div className="bg-[#1D2B45] text-white rounded-xs p-5 space-y-3">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
              FOLLOW VAYAM
            </div>
            <h4 className="font-display font-black text-base text-white">
              Every piece, the moment it lands.
            </h4>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={author.twitter || "https://twitter.com/vayamlahoti"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#CE3426] hover:bg-[#b02b1f] text-white text-xs font-bold rounded-xs transition-colors cursor-pointer"
              >
                Follow on X
              </a>
              <a
                href={author.linkedin || "https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-600 hover:bg-white/10 text-white text-xs font-bold rounded-xs transition-colors cursor-pointer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

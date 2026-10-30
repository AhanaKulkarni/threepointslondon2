import React from "react";
import Link from "next/link";
import { getSiteData, getArticles } from "@/lib/store";
import AdSlot from "@/components/AdSlot";
import { ShieldCheck, BookOpen, BarChart3, Lock, ExternalLink, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us · Editorial & Administration | Three Points London",
  description: "One city. Three clubs. One newsroom that covers nothing else. Three Points London is an independent publication covering Arsenal, Chelsea, and Tottenham Hotspur.",
};

export default function AboutPage() {
  const siteData = getSiteData();
  const allArticles = getArticles();
  const portfolioPieces = allArticles.slice(0, 4);

  const founder = siteData.authors[0] || {
    name: "Vayam Lahoti",
    role: "Founder & Editor",
    desk: "Arsenal, data and recruitment",
    bio: "Founder and Editor of Three Points London. Journalism graduate of the University of Sheffield (BA Journalism Studies, 2023), previously editorial lead at a Premier League club brand with an audience of 2.5 million. Writes on tactics, recruitment and the numbers underneath both. Former semi-professional footballer.",
    initials: "VL",
    slug: "vayam-lahoti",
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 space-y-12">
      {/* Hero with Clickable Logo & Tagline */}
      <div className="max-w-4xl pb-8 border-b border-hairline">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
          <Link href="/" title="Three Points London - Return to Home" className="inline-block cursor-pointer">
            <img
              src="/logo.png"
              alt="Three Points London"
              className="h-8 sm:h-10 w-auto object-contain max-w-[280px] cursor-pointer"
            />
          </Link>
          <div className="hidden sm:block border-l border-hairline pl-4">
            <Link href="/" title="Three Points London - Return to Home" className="inline-block cursor-pointer">
              <img
                src="/tagline.png"
                alt="One City. Three Clubs. Endless Passion."
                className="h-4 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-muted block mt-2">
          ABOUT · WHO WE ARE & EDITORIAL GOVERNANCE
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-navy uppercase leading-tight mt-1 mb-4">
          One city. Three clubs. One newsroom that covers nothing else.
        </h1>
        <p className="font-body text-base sm:text-lg text-[#333] leading-relaxed max-w-3xl">
          Three Points London is an independent football journalism organization dedicated solely to covering Arsenal, Chelsea, and Tottenham Hotspur. We are not affiliated with, endorsed by, or beholden to any of the three clubs.
        </p>
      </div>

      {/* 3 Editorial Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface p-6 border border-hairline rounded-xs">
          <div className="font-display font-black text-4xl text-navy mb-2">15</div>
          <div className="font-headline font-bold text-sm text-navy uppercase mb-1">
            Pieces a day
          </div>
          <p className="text-xs text-muted leading-relaxed">
            Across all three London desks, seven days a week. Original reporting, tracking models, and tactical explainers.
          </p>
        </div>
        <div className="bg-surface p-6 border border-hairline rounded-xs">
          <div className="font-display font-black text-4xl text-ember mb-2">100%</div>
          <div className="font-headline font-bold text-sm text-navy uppercase mb-1">
            Human-edited
          </div>
          <p className="text-xs text-muted leading-relaxed">
            Every piece carries a named byline and a verified standard of reporting and data analysis.
          </p>
        </div>
        <div className="bg-surface p-6 border border-hairline rounded-xs">
          <div className="font-display font-black text-4xl text-indigo mb-2">0</div>
          <div className="font-headline font-bold text-sm text-navy uppercase mb-1">
            Club affiliations
          </div>
          <p className="text-xs text-muted leading-relaxed">
            No access deals, no approval rights, no soft questions. Completely independent London football journalism.
          </p>
        </div>
      </div>

      {/* Founder & Editor (Sole Lead - Team Removed) */}
      <section className="pt-4">
        <div className="pb-3 border-b border-hairline mb-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-muted block">
            EDITORIAL DIRECTION
          </span>
          <h2 className="font-display font-extrabold text-2xl text-navy uppercase">
            Founder & Editor
          </h2>
          <p className="text-xs text-muted">
            Independent coverage of Arsenal, Chelsea, and Tottenham Hotspur.
          </p>
        </div>

        <div className="max-w-2xl border border-hairline p-6 sm:p-8 rounded-xs bg-white shadow-2xs">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-[#1D2B45] text-white flex items-center justify-center font-display font-black text-xl shrink-0">
              {founder.initials || "VL"}
            </div>
            <div>
              <Link
                href={`/author/${founder.slug}`}
                className="font-headline font-bold text-2xl text-navy hover:text-indigo block"
              >
                {founder.name}
              </Link>
              <span className="text-xs font-semibold text-muted block">
                {founder.role} · {founder.desk}
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#444] leading-relaxed mb-6 font-body">
            {founder.bio}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-hairline">
            <Link
              href={`/author/${founder.slug}`}
              className="text-xs font-bold text-indigo hover:text-ember inline-flex items-center gap-1.5 transition-colors"
            >
              <span>View Editorial Profile & Full Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* DEDICATED ADMINISTRATION & GOVERNANCE SECTION (Replaced Founders & Advisors per item 6) */}
      <section id="admin-governance" className="bg-[#1D2B45] text-white rounded-xs p-8 sm:p-10 space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">
              DESK GOVERNANCE & OPERATIONS
            </span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
            Administration & Editorial Standards
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
            Three Points London operates under strict newsroom standards. All published work undergoes factual verification, statistical cross-referencing against verified Opta and StatsBomb data feeds, and editorial review.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-[#142036] border border-[#273859] p-5 rounded-xs space-y-2">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Editorial Independence</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Strict separation between commercial sponsors and editorial desks. Advertisers have zero advance preview or veto rights over coverage.
            </p>
          </div>

          <div className="bg-[#142036] border border-[#273859] p-5 rounded-xs space-y-2">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <BarChart3 className="w-4 h-4" />
              <span>Data Integrity</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Every xG, touch map, pass network, and wage figure is sourced from verified proprietary or industry-standard databases.
            </p>
          </div>

          <div className="bg-[#142036] border border-[#273859] p-5 rounded-xs space-y-2">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>Administrative Portal</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Centralized newsroom console for managing live rankings, article feeds, breaking tickers, and sponsor placements.
            </p>
            <div className="pt-2">
              <Link
                href="/admin"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#CE3426] hover:bg-[#b02b1f] text-white text-xs font-bold rounded-xs transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Open Admin Portal</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION WITH RELEVANT IMAGES (Item 3: Add relevant images to the portfolio section) */}
      <section id="portfolio" className="space-y-6 pt-4">
        <div className="pb-3 border-b border-hairline flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-muted block">
              PUBLISHED JOURNALISM & INVESTIGATIONS
            </span>
            <h2 className="font-display font-black text-2xl text-navy uppercase">
              Editorial Portfolio
            </h2>
            <p className="text-xs text-muted">
              Representative in-depth tactical, transfer, and investigative reporting across London's top three clubs.
            </p>
          </div>
          <Link
            href="/author/vayam-lahoti"
            className="text-xs font-bold text-indigo hover:text-ember inline-flex items-center gap-1 transition-colors"
          >
            <span>View all 148 pieces</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioPieces.map((piece) => {
            const clubColor =
              piece.club === "arsenal"
                ? "bg-[#E8192C]"
                : piece.club === "chelsea"
                ? "bg-[#1C6BB0]"
                : "bg-[#24376B]";

            return (
              <div
                key={piece.id}
                className="group flex flex-col justify-between border border-hairline rounded-xs overflow-hidden bg-white hover:shadow-md transition-shadow"
              >
                {/* Relevant Portfolio Photography Image */}
                <Link
                  href={`/article/${piece.slug}`}
                  className="aspect-[16/10] w-full overflow-hidden block relative bg-slate-100"
                >
                  <img
                    src={
                      piece.imageUrl ||
                      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
                    }
                    alt={piece.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-black/75 backdrop-blur-xs text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-xs tracking-wider">
                    <span className={`w-2 h-2 rounded-full ${clubColor}`}></span>
                    <span>{piece.club}</span>
                  </div>
                </Link>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted block mb-1">
                      {piece.desk} · {piece.subDesk || "ANALYSIS"}
                    </span>
                    <Link
                      href={`/article/${piece.slug}`}
                      className="font-headline font-bold text-sm sm:text-base text-navy group-hover:text-indigo leading-snug block line-clamp-2"
                    >
                      {piece.title}
                    </Link>
                    <p className="text-xs text-muted font-body line-clamp-2 mt-1.5 leading-relaxed">
                      {piece.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-hairline flex items-center justify-between text-[11px] text-muted font-medium">
                    <span>{piece.authorName || "Vayam Lahoti"}</span>
                    <span>{piece.readTime || "6 min read"}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <AdSlot id="billboard_970x250" label="AD — 970×250 BILLBOARD · TRUST TEMPLATE" />
    </div>
  );
}

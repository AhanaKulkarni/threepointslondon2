"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TrendingUp, BarChart3, Clock, ArrowRight, ShieldCheck, Activity, ChevronRight } from "lucide-react";

interface FeatureStory {
  id: string;
  club: "arsenal" | "chelsea" | "tottenham";
  clubName: string;
  themeColor: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  excerpt: string;
  slug: string;
  statNumber: string;
  statLabel: string;
  statContext: string;
  readTime: string;
  author: string;
  imageUrl: string;
  published: string;
}

export default function FeaturesPage() {
  const [selectedClub, setSelectedClub] = useState<"all" | "arsenal" | "chelsea" | "tottenham">("all");

  const features: FeatureStory[] = [
    {
      id: "feat-arsenal",
      club: "arsenal",
      clubName: "ARSENAL",
      themeColor: "border-[#E8192C] text-[#E8192C]",
      badgeBg: "bg-[#E8192C]",
      badgeText: "DATA ANALYSIS · EXCLUSIVE",
      title: "The press is working. The rest-defence is not.",
      excerpt:
        "Eleven games into the title defence, one phase of play accounts for almost all of Arsenal's rise in expected goals against — and it is not the one everyone is arguing about. We chart every turnover in transition.",
      slug: "the-press-is-working-the-rest-defence-is-not",
      statNumber: "1.42",
      statLabel: "xGA per 90 (up from 0.91)",
      statContext: "+56% rise concentrated in defensive transition",
      readTime: "6 min read",
      author: "Vayam Lahoti",
      imageUrl: "/articles/the-press-is-working.jpg",
      published: "2 hours ago",
    },
    {
      id: "feat-chelsea",
      club: "chelsea",
      clubName: "CHELSEA",
      themeColor: "border-[#1C6BB0] text-[#1C6BB0]",
      badgeBg: "bg-[#1C6BB0]",
      badgeText: "FINANCIAL TACTICS · REPORT",
      title: "The wage-structure question Chelsea must answer before January",
      excerpt:
        "Amortisation headroom is not the bottleneck everyone thinks it is. The real ceiling is the squad cost ratio under UEFA's new financial sustainability rules. How incentive-heavy wage packages are dictating targets.",
      slug: "chelsea-wage-structure-question-before-january",
      statNumber: "70%",
      statLabel: "UEFA Squad-Cost Ratio Ceiling",
      statContext: "How wage incentives define winter transfer targets",
      readTime: "7 min read",
      author: "Vayam Lahoti",
      imageUrl: "/articles/chelsea-wage-structure.jpg",
      published: "4 hours ago",
    },
    {
      id: "feat-tottenham",
      club: "tottenham",
      clubName: "TOTTENHAM",
      themeColor: "border-[#24376B] text-[#24376B]",
      badgeBg: "bg-[#24376B]",
      badgeText: "TACTICAL EVOLUTION · METRICS",
      title: "De Zerbi's rebuild in five numbers: progression up, control down",
      excerpt:
        "Spurs are moving the ball forward quicker than any side in the division — but the defensive transition numbers tell an entirely different story. Touch maps reveal extreme verticality at the cost of compactness.",
      slug: "de-zerbi-spurs-rebuild-in-five-numbers",
      statNumber: "+14",
      statLabel: "Progressive Passes / 90",
      statContext: "Deep build-up verticality vs counter vulnerability",
      readTime: "8 min read",
      author: "Vayam Lahoti",
      imageUrl: "/articles/de-zerbi-spurs.jpg",
      published: "6 hours ago",
    },
    {
      id: "feat-pivot",
      club: "arsenal",
      clubName: "ARSENAL",
      themeColor: "border-[#E8192C] text-[#E8192C]",
      badgeBg: "bg-[#E8192C]",
      badgeText: "POSITIONAL PLAY · DATA",
      title: "The single-pivot problem, explained with every touch map from the last six games",
      excerpt:
        "When opponents double the central passing lane, Arsenal's circulation slows by 2.4 seconds per possession sequence. Analyzing the structural difference with and without an auxiliary six.",
      slug: "single-pivot-problem-explained-touch-maps",
      statNumber: "2.4s",
      statLabel: "Circulation Delay per Sequence",
      statContext: "Central corridor congestion metrics",
      readTime: "9 min read",
      author: "Vayam Lahoti",
      imageUrl: "/articles/single-pivot-midfield.jpg",
      published: "Yesterday",
    },
    {
      id: "feat-alonso",
      club: "chelsea",
      clubName: "CHELSEA",
      themeColor: "border-[#1C6BB0] text-[#1C6BB0]",
      badgeBg: "bg-[#1C6BB0]",
      badgeText: "PHASE PLAY · TACTICAL BREAKDOWN",
      title: "Alonso's build-up has changed three times in six weeks — here is the pattern",
      excerpt:
        "From an asymmetric 3-2-5 to a 2-4-4 box midfield against high blocks: why Chelsea's possession efficiency jumps by 18% when inverted fullbacks dictate tempo.",
      slug: "alonsos-build-up-has-changed-three-times",
      statNumber: "+18%",
      statLabel: "Possession Efficiency Gain",
      statContext: "When fullbacks tuck inside half-spaces",
      readTime: "6 min read",
      author: "Vayam Lahoti",
      imageUrl: "/articles/chelsea-alonso-tactics.jpg",
      published: "Yesterday",
    },
    {
      id: "feat-spurs-recruit",
      club: "tottenham",
      clubName: "TOTTENHAM",
      themeColor: "border-[#24376B] text-[#24376B]",
      badgeBg: "bg-[#24376B]",
      badgeText: "SCOUTING & METRICS",
      title: "Inside the recruitment meeting that reshaped the Spurs shortlist",
      excerpt:
        "Data-led recruitment models have replaced traditional scouting hierarchies at Hotspur Way. How pass-completion under pressure became the non-negotiable metric.",
      slug: "inside-recruitment-meeting-reshaped-spurs-shortlist",
      statNumber: "88.4%",
      statLabel: "Target Retention Under Press",
      statContext: "Non-negotiable recruitment threshold",
      readTime: "7 min read",
      author: "Vayam Lahoti",
      imageUrl: "/articles/spurs-recruitment-shortlist.jpg",
      published: "2 days ago",
    },
  ];

  const filteredFeatures =
    selectedClub === "all" ? features : features.filter((f) => f.club === selectedClub);

  return (
    <div className="w-full">
      {/* ========================================================
          1. HERO HEADER: DATA-LED FEATURES
         ======================================================== */}
      <section className="bg-[#1D2B45] text-white pt-10 sm:pt-14 pb-10 sm:pb-14 px-4 sm:px-6 md:px-8 lg:px-10 border-b border-[#2B3C5C]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E8192C] animate-pulse"></span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-gray-300">
              EXCLUSIVE INVESTIGATIONS & TELEMETRY
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-tight">
              DATA-LED FEATURES
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
              Deep-dive dossiers, phase-by-phase tactical models, expected goals tracking, and financial reality checks across Arsenal, Chelsea, and Tottenham Hotspur.
            </p>
          </div>

          {/* Interactive Club Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#2B3C5C]">
            <span className="text-[10px] uppercase font-mono font-bold text-gray-400 tracking-wider mr-2">
              FILTER DOSSIERS:
            </span>
            {[
              { key: "all", label: "All Clubs" },
              { key: "arsenal", label: "Arsenal" },
              { key: "chelsea", label: "Chelsea" },
              { key: "tottenham", label: "Tottenham" },
            ].map((clubOption) => (
              <button
                key={clubOption.key}
                type="button"
                onClick={() => setSelectedClub(clubOption.key as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedClub === clubOption.key
                    ? "bg-white text-[#1D2B45] shadow-xs"
                    : "bg-[#142036] text-gray-300 hover:text-white border border-[#273859]"
                }`}
              >
                {clubOption.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          2. FEATURE ARTICLES GRID
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFeatures.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-hairline rounded-xs overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow group"
            >
              <div>
                {/* Photo Header with Category Badge */}
                <Link
                  href={`/article/${item.slug}`}
                  className="block aspect-[16/10] w-full overflow-hidden relative bg-slate-900 group/img"
                  title={item.title}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                    <span
                      className={`${item.badgeBg} text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-2xs tracking-wider shadow-xs`}
                    >
                      {item.clubName}
                    </span>
                    <span className="bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-2xs">
                      {item.badgeText}
                    </span>
                  </div>
                </Link>

                <div className="p-5 sm:p-6 space-y-4">
                  {/* Headline */}
                  <Link
                    href={`/article/${item.slug}`}
                    className="block font-headline font-bold text-lg sm:text-xl text-ink group-hover:text-indigo transition-colors leading-snug"
                  >
                    {item.title}
                  </Link>

                  {/* Excerpt */}
                  <p className="font-body text-xs sm:text-sm text-gray-600 leading-relaxed font-normal line-clamp-3">
                    {item.excerpt}
                  </p>

                  {/* Telemetry Highlight Box */}
                  <div className="p-3.5 bg-slate-50 border border-hairline rounded-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted">
                        KEY TELEMETRY METRIC
                      </span>
                      <TrendingUp className="w-3.5 h-3.5 text-indigo" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-black text-2xl text-navy">
                        {item.statNumber}
                      </span>
                      <span className="text-xs font-bold text-navy truncate">
                        {item.statLabel}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 font-medium">
                      {item.statContext}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer with Byline & Read Link with fixed inline arrow */}
              <div className="px-5 sm:px-6 py-4 bg-surface border-t border-hairline/80 flex items-center justify-between">
                <div className="text-[11px] text-muted font-medium">
                  <span>{item.author}</span> · <span>{item.readTime}</span>
                </div>
                <Link
                  href={`/article/${item.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-black text-indigo group-hover:text-ember uppercase tracking-wider"
                  title="Read full dossier"
                >
                  <span>Read Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

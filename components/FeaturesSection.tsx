"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TrendingUp, BarChart3, Clock, ArrowRight } from "lucide-react";

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
}

export default function FeaturesSection() {
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
        "Eleven games into the title defence, one phase of play accounts for almost all of Arsenal's rise in expected goals against — and it is not the one everyone is arguing about.",
      slug: "the-press-is-working-the-rest-defence-is-not",
      statNumber: "1.42",
      statLabel: "xGA per 90 (up from 0.91)",
      statContext: "+56% rise concentrated in defensive transition",
      readTime: "6 min read",
      author: "Vayam Lahoti",
      imageUrl: "/articles/the-press-is-working.jpg",
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
        "Amortisation headroom is not the bottleneck everyone thinks it is. The real ceiling is the squad cost ratio under UEFA's new financial sustainability rules.",
      slug: "chelsea-wage-structure-question-before-january",
      statNumber: "70%",
      statLabel: "UEFA Squad-Cost Ratio Ceiling",
      statContext: "How wage incentives define winter transfer targets",
      readTime: "7 min read",
      author: "Vayam Lahoti",
      imageUrl: "/articles/chelsea-wage-structure.jpg",
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
        "Spurs are moving the ball forward quicker than any side in the division — but the defensive transition numbers tell an entirely different story.",
      slug: "de-zerbi-spurs-rebuild-in-five-numbers",
      statNumber: "+14",
      statLabel: "Progressive Passes / 90",
      statContext: "Deep build-up verticality vs counter vulnerability",
      readTime: "8 min read",
      author: "Vayam Lahoti",
      imageUrl: "/articles/de-zerbi-spurs.jpg",
    },
  ];

  const filteredFeatures =
    selectedClub === "all" ? features : features.filter((f) => f.club === selectedClub);

  return (
    <section id="features" className="w-full scroll-mt-24 space-y-6 pt-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-3 border-b-2 border-navy gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 bg-ember rounded-xs"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted">
              EDITORIAL INVESTIGATIONS & DATA
            </span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-navy">
            DATA-LED FEATURES
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-1 max-w-2xl font-normal">
            Deep-dive dossiers, phase-by-phase tactical models, and financial reality checks across London's big three.
          </p>
        </div>

        {/* Club Filter Selector */}
        <div className="flex items-center gap-1.5 bg-surface border border-hairline p-1 rounded-xs text-xs font-bold shrink-0">
          {[
            { key: "all", label: "All Clubs" },
            { key: "arsenal", label: "Arsenal" },
            { key: "chelsea", label: "Chelsea" },
            { key: "tottenham", label: "Tottenham" },
          ].map((c) => (
            <button
              key={c.key}
              onClick={() => setSelectedClub(c.key as any)}
              className={`px-3 py-1 rounded-xs transition-colors cursor-pointer text-xs ${
                selectedClub === c.key
                  ? "bg-navy text-white font-black shadow-xs"
                  : "text-gray-600 hover:text-navy hover:bg-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Column Features Grid (All three clubs prominently represented) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {filteredFeatures.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between bg-white border border-hairline rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-shadow group"
          >
            <div>
              {/* Clickable Feature Artwork */}
              <Link
                href={`/article/${item.slug}`}
                className="block aspect-[16/9] w-full overflow-hidden bg-slate-100 relative group/img cursor-pointer"
                title={item.title}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span
                    className={`${item.badgeBg} text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-xs tracking-wider shadow-xs`}
                  >
                    {item.clubName}
                  </span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted">
                  {item.badgeText}
                </div>

                <Link
                  href={`/article/${item.slug}`}
                  className="font-headline font-bold text-base sm:text-lg text-ink group-hover:text-indigo transition-colors leading-snug block"
                >
                  {item.title}
                </Link>

                <p className="font-body text-xs text-gray-600 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Tactical Metric Badge */}
                <div className="bg-surface border border-hairline p-3 rounded-xs flex items-center justify-between gap-2 mt-4">
                  <div>
                    <span className="font-display font-black text-xl text-navy block leading-none">
                      {item.statNumber}
                    </span>
                    <span className="text-[10px] font-bold text-gray-700 block mt-0.5">
                      {item.statLabel}
                    </span>
                  </div>
                  <BarChart3 className="w-5 h-5 text-gray-400 shrink-0" />
                </div>
              </div>
            </div>

            {/* Footer Metadata & CTA */}
            <div className="px-5 pb-5 pt-3 border-t border-hairline flex items-center justify-between text-[11px] text-muted font-medium">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-gray-400" />
                <span>{item.readTime}</span>
                <span>·</span>
                <span>{item.author}</span>
              </div>
              <Link
                href={`/article/${item.slug}`}
                className="font-bold text-navy hover:text-indigo inline-flex items-center gap-1 group/btn"
              >
                <span>Read Feature</span>
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

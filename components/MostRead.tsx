"use client";

import React, { useState } from "react";
import Link from "next/link";
import EditorialGraphic from "@/components/EditorialGraphic";

interface MostReadStory {
  id: string;
  rank: number;
  club: "arsenal" | "chelsea" | "tottenham" | "all";
  desk: string;
  title: string;
  slug: string;
  author: string;
  readTime: string;
}

const defaultMostReadStories: MostReadStory[] = [
  {
    id: "mr-1",
    rank: 1,
    club: "arsenal",
    desk: "DATA",
    title: "The rest-defence problem, in every number that matters",
    slug: "the-press-is-working-the-rest-defence-is-not",
    author: "Vayam Lahoti",
    readTime: "6 min read",
  },
  {
    id: "mr-2",
    rank: 2,
    club: "arsenal",
    desk: "MATCHDAY",
    title: "Player ratings: three standouts and one real worry at Villa Park",
    slug: "player-ratings-three-standouts-villa-park",
    author: "Amelia Hart",
    readTime: "5 min read",
  },
  {
    id: "mr-3",
    rank: 3,
    club: "arsenal",
    desk: "TRANSFERS",
    title: "Why January is already decided at the Emirates",
    slug: "why-january-is-already-decided-at-emirates",
    author: "Nathan Reeves",
    readTime: "7 min read",
  },
  {
    id: "mr-4",
    rank: 4,
    club: "arsenal",
    desk: "ACADEMY",
    title: "The four Hale End teenagers who will train with the first team",
    slug: "four-hale-end-teenagers-train-first-team",
    author: "Priya Shah",
    readTime: "8 min read",
  },
];

export default function MostRead({ initialArticles }: { initialArticles?: any }) {
  const [activeTab, setActiveTab] = useState<"all" | "arsenal" | "chelsea" | "tottenham">("arsenal");

  const getClubLineColor = (club: string) => {
    if (club === "arsenal") return "bg-[#E8192C]";
    if (club === "chelsea") return "bg-[#1C6BB0]";
    if (club === "tottenham") return "bg-[#24376B]";
    return "bg-[#1D2B45]";
  };

  const getClubLabel = (club: string) => {
    if (club === "all") return "ALL THREE DESKS";
    return club.toUpperCase();
  };

  return (
    <div className="w-full">
      {/* Header with Title and Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-hairline gap-3 mb-4 sm:mb-6">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="font-display font-black text-sm uppercase tracking-wider text-navy shrink-0">
            MOST READ
          </h2>
          <div className="h-[1px] bg-hairline flex-1 hidden sm:block"></div>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center gap-1.5 text-xs font-semibold overflow-x-auto whitespace-nowrap scrollbar-none pb-1 sm:pb-0">
          {[
            { key: "all", label: "All three" },
            { key: "arsenal", label: "Arsenal" },
            { key: "chelsea", label: "Chelsea" },
            { key: "tottenham", label: "Tottenham" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-3 py-1 rounded-full text-[11px] transition-colors cursor-pointer ${
                activeTab === tab.key
                  ? "bg-[#CE3426] text-white font-bold"
                  : "bg-surface sm:bg-transparent text-muted hover:text-navy"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW: Exact Numbered List (Mockup Image 5)
         ======================================================== */}
      <div className="block md:hidden divide-y divide-hairline">
        {defaultMostReadStories.map((story) => (
          <div key={`mobile-${story.id}`} className="py-3.5 first:pt-1 flex items-start gap-3">
            <div className="w-5 h-5 bg-[#CE3426] text-white flex items-center justify-center font-display font-black text-xs rounded-2xs shrink-0 mt-0.5">
              {story.rank}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-0.5">
                {story.desk}
              </div>
              <Link
                href={`/article/${story.slug}`}
                className="font-headline font-bold text-sm text-ink hover:text-indigo leading-snug block"
              >
                {story.title}
              </Link>
            </div>
          </div>
        ))}

        {/* Subtitle note below list */}
        <div className="pt-3 text-[11px] text-muted italic font-normal">
          Filtered to the desk a reader arrived through. Cold traffic sees all three.
        </div>
      </div>

      {/* ========================================================
          DESKTOP VIEW: 2x2 Grid of Stories with Graphics (Mockup Image 2)
         ======================================================== */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {defaultMostReadStories.map((story) => (
          <div key={`desktop-${story.id}`} className="group flex flex-col justify-between">
            <div>
              {/* Graphic container with Red rank square badge */}
              <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden mb-3">
                <EditorialGraphic type="contour" />
                <div className="absolute top-2 left-2 w-6 h-6 bg-[#CE3426] text-white flex items-center justify-center font-display font-black text-xs rounded-2xs shadow-xs">
                  {story.rank}
                </div>
              </div>

              {/* Eyebrow */}
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className={`w-3 h-[2px] ${getClubLineColor(story.club)}`}></span>
                <span className="text-[10px] font-black uppercase tracking-wider text-muted">
                  {getClubLabel(story.club)} • {story.desk}
                </span>
              </div>

              {/* Title */}
              <Link
                href={`/article/${story.slug}`}
                className="font-headline font-bold text-sm sm:text-base text-ink group-hover:text-indigo transition-colors leading-snug block mb-2"
              >
                {story.title}
              </Link>
            </div>

            {/* Byline */}
            <div className="text-[11px] text-muted font-medium">
              {story.author} · {story.readTime}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

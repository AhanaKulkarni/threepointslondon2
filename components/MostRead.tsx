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
    club: "chelsea",
    desk: "INTERVIEW",
    title: '"We were told to stop playing out": a former Cobham coach on the academy\'s lost decade',
    slug: "former-cobham-coach-lost-decade-interview",
    author: "Vayam Lahoti",
    readTime: "12 min read",
  },
  {
    id: "mr-2",
    rank: 2,
    club: "arsenal",
    desk: "INVESTIGATION",
    title: "The scouting network Arsenal quietly rebuilt in South America",
    slug: "arsenal-quietly-rebuilt-scouting-south-america",
    author: "Nathan Reeves",
    readTime: "9 min read",
  },
  {
    id: "mr-3",
    rank: 3,
    club: "tottenham",
    desk: "REPORTING",
    title: "Inside the recruitment meeting that reshaped the Spurs shortlist",
    slug: "inside-recruitment-meeting-reshaped-spurs-shortlist",
    author: "Priya Shah",
    readTime: "10 min read",
  },
  {
    id: "mr-4",
    rank: 4,
    club: "all",
    desk: "INVESTIGATION",
    title: "The agent who has brokered deals at all three London clubs — and what he says about January",
    slug: "agent-brokered-deals-three-london-clubs-january",
    author: "Nathan Reeves",
    readTime: "14 min read",
  },
];

export default function MostRead({ initialArticles }: { initialArticles?: any }) {
  const [activeTab, setActiveTab] = useState<"all" | "arsenal" | "chelsea" | "tottenham">("all");

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-hairline gap-3 mb-6">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="font-display font-black text-sm uppercase tracking-wider text-navy shrink-0">
            MOST READ
          </h2>
          <div className="h-[1px] bg-hairline flex-1 hidden sm:block"></div>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center gap-1.5 text-xs font-semibold">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1 rounded-full text-[11px] transition-colors ${
              activeTab === "all"
                ? "bg-[#CE3426] text-white font-bold"
                : "text-muted hover:text-navy"
            }`}
          >
            All three
          </button>
          <button
            onClick={() => setActiveTab("arsenal")}
            className={`px-3 py-1 rounded-full text-[11px] transition-colors ${
              activeTab === "arsenal"
                ? "bg-[#CE3426] text-white font-bold"
                : "text-muted hover:text-navy"
            }`}
          >
            Arsenal
          </button>
          <button
            onClick={() => setActiveTab("chelsea")}
            className={`px-3 py-1 rounded-full text-[11px] transition-colors ${
              activeTab === "chelsea"
                ? "bg-[#CE3426] text-white font-bold"
                : "text-muted hover:text-navy"
            }`}
          >
            Chelsea
          </button>
          <button
            onClick={() => setActiveTab("tottenham")}
            className={`px-3 py-1 rounded-full text-[11px] transition-colors ${
              activeTab === "tottenham"
                ? "bg-[#CE3426] text-white font-bold"
                : "text-muted hover:text-navy"
            }`}
          >
            Tottenham
          </button>
        </div>
      </div>

      {/* 2x2 Grid of Stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {defaultMostReadStories.map((story) => (
          <div key={story.id} className="group flex flex-col justify-between">
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

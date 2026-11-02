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
  imageUrl?: string;
}

const mostReadByTab: Record<string, MostReadStory[]> = {
  all: [
    {
      id: "mr-all-1",
      rank: 1,
      club: "chelsea",
      desk: "INTERVIEW",
      title: '"We were told to stop playing out": a former Cobham coach on the academy\'s lost decade',
      slug: "former-cobham-coach-lost-decade-interview",
      author: "Vayam Lahoti",
      readTime: "12 min read",
      imageUrl: "/articles/cobham-coach-interview.jpg",
    },
    {
      id: "mr-all-2",
      rank: 2,
      club: "arsenal",
      desk: "INVESTIGATION",
      title: "The scouting network Arsenal quietly rebuilt in South America",
      slug: "arsenal-quietly-rebuilt-scouting-south-america",
      author: "Nathan Reeves",
      readTime: "9 min read",
      imageUrl: "/articles/scouting-south-america.jpg",
    },
    {
      id: "mr-all-3",
      rank: 3,
      club: "tottenham",
      desk: "REPORTING",
      title: "Inside the recruitment meeting that reshaped the Spurs shortlist",
      slug: "inside-recruitment-meeting-reshaped-spurs-shortlist",
      author: "Priya Shah",
      readTime: "10 min read",
      imageUrl: "/articles/spurs-recruitment-shortlist.jpg",
    },
    {
      id: "mr-all-4",
      rank: 4,
      club: "all",
      desk: "INVESTIGATION",
      title: "The agent who has brokered deals at all three London clubs — and what he says about January",
      slug: "agent-brokered-deals-three-london-clubs-january",
      author: "Nathan Reeves",
      readTime: "14 min read",
      imageUrl: "/articles/football-agent-deals.jpg",
    },
  ],
  arsenal: [
    {
      id: "mr-ars-1",
      rank: 1,
      club: "arsenal",
      desk: "INVESTIGATION",
      title: "The scouting network Arsenal quietly rebuilt in South America",
      slug: "arsenal-quietly-rebuilt-scouting-south-america",
      author: "Nathan Reeves",
      readTime: "9 min read",
      imageUrl: "/articles/scouting-south-america.jpg",
    },
    {
      id: "mr-ars-2",
      rank: 2,
      club: "arsenal",
      desk: "DATA",
      title: "The press is working. The rest-defence is not.",
      slug: "the-press-is-working-the-rest-defence-is-not",
      author: "Vayam Lahoti",
      readTime: "6 min read",
      imageUrl: "/articles/the-press-is-working.jpg",
    },
    {
      id: "mr-ars-3",
      rank: 3,
      club: "arsenal",
      desk: "MATCHDAY",
      title: "Player ratings: three standouts and one real worry at Villa Park",
      slug: "player-ratings-three-standouts-villa-park",
      author: "Vayam Lahoti",
      readTime: "5 min read",
      imageUrl: "/articles/villa-park-duel.jpg",
    },
    {
      id: "mr-ars-4",
      rank: 4,
      club: "arsenal",
      desk: "TRANSFERS",
      title: "Why the January window is already decided at the Emirates",
      slug: "why-january-is-already-decided-at-emirates",
      author: "Nathan Reeves",
      readTime: "7 min read",
      imageUrl: "/articles/emirates-transfer-plans.jpg",
    },
  ],
  chelsea: [
    {
      id: "mr-che-1",
      rank: 1,
      club: "chelsea",
      desk: "INTERVIEW",
      title: '"We were told to stop playing out": a former Cobham coach on the academy\'s lost decade',
      slug: "former-cobham-coach-lost-decade-interview",
      author: "Vayam Lahoti",
      readTime: "12 min read",
      imageUrl: "/articles/cobham-coach-interview.jpg",
    },
    {
      id: "mr-che-2",
      rank: 2,
      club: "chelsea",
      desk: "TRANSFERS",
      title: "The wage-structure question Chelsea must answer before January",
      slug: "chelsea-wage-structure-question-before-january",
      author: "Nathan Reeves",
      readTime: "7 min read",
      imageUrl: "/articles/chelsea-wage-structure.jpg",
    },
    {
      id: "mr-che-3",
      rank: 3,
      club: "chelsea",
      desk: "FEATURES",
      title: "Alonso's build-up has changed three times in six weeks — here is the pattern",
      slug: "alonsos-build-up-has-changed-three-times",
      author: "Vayam Lahoti",
      readTime: "6 min read",
      imageUrl: "/articles/chelsea-alonso-tactics.jpg",
    },
    {
      id: "mr-che-4",
      rank: 4,
      club: "chelsea",
      desk: "NEWS",
      title: "Cobham's class of 2026: six names the first team is tracking",
      slug: "cobhams-class-of-2026-six-names-tracking",
      author: "Vayam Lahoti",
      readTime: "8 min read",
      imageUrl: "/articles/cobham-class-2026.jpg",
    },
  ],
  tottenham: [
    {
      id: "mr-tot-1",
      rank: 1,
      club: "tottenham",
      desk: "REPORTING",
      title: "Inside the recruitment meeting that reshaped the Spurs shortlist",
      slug: "inside-recruitment-meeting-reshaped-spurs-shortlist",
      author: "Priya Shah",
      readTime: "10 min read",
      imageUrl: "/articles/spurs-recruitment-shortlist.jpg",
    },
    {
      id: "mr-tot-2",
      rank: 2,
      club: "tottenham",
      desk: "FEATURES",
      title: "De Zerbi's rebuild in five numbers: progression up, control down",
      slug: "de-zerbi-spurs-rebuild-in-five-numbers",
      author: "Amelia Hart",
      readTime: "8 min read",
      imageUrl: "/articles/de-zerbi-spurs.jpg",
    },
    {
      id: "mr-tot-3",
      rank: 3,
      club: "tottenham",
      desk: "NEWS",
      title: "Spurs confirm the Carabao Cup quarter-final date at the Lane",
      slug: "spurs-confirm-carabao-cup-quarter-final",
      author: "Amelia Hart",
      readTime: "4 min read",
      imageUrl: "/articles/spurs-carabao-cup-night.jpg",
    },
    {
      id: "mr-tot-4",
      rank: 4,
      club: "tottenham",
      desk: "TRANSFERS",
      title: "A trophy in February would change everything — and the draw says it is on",
      slug: "trophy-february-change-everything",
      author: "Amelia Hart",
      readTime: "6 min read",
      imageUrl: "/articles/spurs-trophy-celebration.jpg",
    },
  ],
};

export default function MostRead({ initialArticles }: { initialArticles?: any }) {
  const [activeTab, setActiveTab] = useState<"all" | "arsenal" | "chelsea" | "tottenham">("arsenal");

  const currentStories = mostReadByTab[activeTab] || mostReadByTab.arsenal;

  const getClubLineColor = (club: string) => {
    if (club === "arsenal") return "bg-[#E8192C]";
    if (club === "chelsea") return "bg-[#1C6BB0]";
    if (club === "tottenham") return "bg-[#24376B]";
    return "bg-[#E8192C]";
  };

  const getClubLabel = (club: string) => {
    if (club === "all") return "ALL THREE DESKS";
    return club.toUpperCase();
  };

  return (
    <div className="w-full space-y-4">
      {/* Header with Title and Tabs (matching Image 2) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-hairline gap-3 mb-2 sm:mb-4">
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
                  ? "bg-[#CE3426] text-white font-bold shadow-xs"
                  : "bg-surface sm:bg-transparent text-muted hover:text-navy"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW: Picture-Led Stories on Phone with Dropshadow
         ======================================================== */}
      <div className="block md:hidden space-y-4">
        {currentStories.map((story) => (
          <div
            key={`mobile-${story.id}`}
            className="group pb-4 border-b border-hairline/80 last:border-0 last:pb-0"
          >
            {/* Picture-Led Mobile Image with Dropshadow and Red Rank Badge */}
            <Link
              href={`/article/${story.slug}`}
              className="block relative aspect-[16/9] w-full rounded-xs overflow-hidden mb-2.5 shadow-lg drop-shadow-md border border-hairline/80 bg-slate-900 group/img"
              title={story.title}
            >
              {story.imageUrl ? (
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                />
              ) : (
                <EditorialGraphic type="contour" />
              )}
              {/* Rank square badge */}
              <div className="absolute top-2.5 left-2.5 w-6 h-6 bg-[#CE3426] text-white flex items-center justify-center font-display font-black text-xs rounded-2xs shadow-md z-10">
                {story.rank}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
            </Link>

            <div className="flex items-center gap-1.5 mb-1">
              <span className={`w-2.5 h-[2px] ${getClubLineColor(story.club)}`}></span>
              <span className="text-[9px] font-black uppercase tracking-wider text-muted">
                {getClubLabel(story.club)} • {story.desk}
              </span>
            </div>

            <Link
              href={`/article/${story.slug}`}
              className="font-headline font-bold text-sm text-ink group-hover:text-indigo transition-colors leading-snug block mb-1"
            >
              {story.title}
            </Link>

            <div className="text-[10px] text-muted font-medium">
              {story.author} · {story.readTime}
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================
          DESKTOP VIEW: 2x2 Grid with Dropshadow Placeholder Images (Image 2)
         ======================================================== */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {currentStories.map((story) => (
          <div key={`desktop-${story.id}`} className="group flex flex-col justify-between">
            <div>
              {/* Picture-led Photo with Dropshadow and Red rank square badge */}
              <Link
                href={`/article/${story.slug}`}
                className="block relative aspect-[16/9] w-full rounded-xs overflow-hidden mb-3 shadow-lg drop-shadow-md border border-hairline/80 bg-slate-900 group/img"
                title={story.title}
              >
                {story.imageUrl ? (
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <EditorialGraphic type="contour" />
                )}
                {/* Red rank square badge */}
                <div className="absolute top-2.5 left-2.5 w-6 h-6 bg-[#CE3426] text-white flex items-center justify-center font-display font-black text-xs rounded-2xs shadow-md z-10">
                  {story.rank}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
              </Link>

              {/* Eyebrow with colored rule matching Image 2 */}
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

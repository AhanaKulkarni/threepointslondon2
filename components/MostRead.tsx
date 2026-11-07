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
  publishedDate?: string;
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
      author: "Vyam Lahoti",
      readTime: "12 min read",
      publishedDate: "Yesterday",
      imageUrl: "/articles/cobham-coach-interview.jpg",
    },
    {
      id: "mr-all-2",
      rank: 2,
      club: "arsenal",
      desk: "INVESTIGATION · EXCLUSIVE",
      title: "The scouting network Arsenal quietly rebuilt in South America",
      slug: "arsenal-quietly-rebuilt-scouting-south-america",
      author: "Vyam Lahoti",
      readTime: "9 min read",
      publishedDate: "2 days ago",
      imageUrl: "/articles/scouting-south-america.jpg",
    },
    {
      id: "mr-all-3",
      rank: 3,
      club: "tottenham",
      desk: "REPORTING",
      title: "Inside the recruitment meeting that reshaped the Spurs shortlist",
      slug: "inside-recruitment-meeting-reshaped-spurs-shortlist",
      author: "Vyam Lahoti",
      readTime: "10 min read",
      publishedDate: "3 days ago",
      imageUrl: "/articles/spurs-recruitment-shortlist.jpg",
    },
    {
      id: "mr-all-4",
      rank: 4,
      club: "all",
      desk: "INVESTIGATION",
      title: "The agent who has brokered deals at all three London clubs — and what he says about January",
      slug: "agent-brokered-deals-three-london-clubs-january",
      author: "Vyam Lahoti",
      readTime: "14 min read",
      publishedDate: "4 days ago",
      imageUrl: "/articles/football-agent-deals.jpg",
    },
  ],
  arsenal: [
    {
      id: "mr-ars-1",
      rank: 1,
      club: "arsenal",
      desk: "INVESTIGATION · EXCLUSIVE",
      title: "The scouting network Arsenal quietly rebuilt in South America",
      slug: "arsenal-quietly-rebuilt-scouting-south-america",
      author: "Vyam Lahoti",
      readTime: "9 min read",
      publishedDate: "2 days ago",
      imageUrl: "/articles/scouting-south-america.jpg",
    },
    {
      id: "mr-ars-2",
      rank: 2,
      club: "arsenal",
      desk: "DATA · EXCLUSIVE",
      title: "The press is working. The rest-defence is not.",
      slug: "the-press-is-working-the-rest-defence-is-not",
      author: "Vyam Lahoti",
      readTime: "6 min read",
      publishedDate: "Today",
      imageUrl: "/articles/the-press-is-working.jpg",
    },
    {
      id: "mr-ars-3",
      rank: 3,
      club: "arsenal",
      desk: "MATCHDAY · EXCLUSIVE",
      title: "Player ratings: three standouts and one real worry at Villa Park",
      slug: "player-ratings-three-standouts-villa-park",
      author: "Vyam Lahoti",
      readTime: "5 min read",
      publishedDate: "Yesterday",
      imageUrl: "/articles/villa-park-duel.jpg",
    },
    {
      id: "mr-ars-4",
      rank: 4,
      club: "arsenal",
      desk: "TRANSFERS · EXCLUSIVE",
      title: "Why the January window is already decided at the Emirates",
      slug: "why-january-is-already-decided-at-emirates",
      author: "Vyam Lahoti",
      readTime: "7 min read",
      publishedDate: "3 days ago",
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
      author: "Vyam Lahoti",
      readTime: "12 min read",
      publishedDate: "Yesterday",
      imageUrl: "/articles/cobham-coach-interview.jpg",
    },
    {
      id: "mr-che-2",
      rank: 2,
      club: "chelsea",
      desk: "TRANSFERS",
      title: "The wage-structure question Chelsea must answer before January",
      slug: "chelsea-wage-structure-question-before-january",
      author: "Vyam Lahoti",
      readTime: "7 min read",
      publishedDate: "Today",
      imageUrl: "/articles/chelsea-wage-structure.jpg",
    },
    {
      id: "mr-che-3",
      rank: 3,
      club: "chelsea",
      desk: "FEATURES",
      title: "Alonso's build-up has changed three times in six weeks — here is the pattern",
      slug: "alonsos-build-up-has-changed-three-times",
      author: "Vyam Lahoti",
      readTime: "6 min read",
      publishedDate: "2 days ago",
      imageUrl: "/articles/chelsea-alonso-tactics.jpg",
    },
    {
      id: "mr-che-4",
      rank: 4,
      club: "chelsea",
      desk: "NEWS",
      title: "Cobham's class of 2026: six names the first team is tracking",
      slug: "cobhams-class-of-2026-six-names-tracking",
      author: "Vyam Lahoti",
      readTime: "8 min read",
      publishedDate: "3 days ago",
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
      author: "Vyam Lahoti",
      readTime: "10 min read",
      publishedDate: "Yesterday",
      imageUrl: "/articles/spurs-recruitment-shortlist.jpg",
    },
    {
      id: "mr-tot-2",
      rank: 2,
      club: "tottenham",
      desk: "FEATURES",
      title: "De Zerbi's rebuild in five numbers: progression up, control down",
      slug: "de-zerbi-spurs-rebuild-in-five-numbers",
      author: "Vyam Lahoti",
      readTime: "8 min read",
      publishedDate: "Today",
      imageUrl: "/articles/de-zerbi-spurs.jpg",
    },
    {
      id: "mr-tot-3",
      rank: 3,
      club: "tottenham",
      desk: "NEWS",
      title: "Spurs confirm the Carabao Cup quarter-final date at the Lane",
      slug: "spurs-confirm-carabao-cup-quarter-final",
      author: "Vyam Lahoti",
      readTime: "4 min read",
      publishedDate: "2 days ago",
      imageUrl: "/articles/spurs-carabao-cup-night.jpg",
    },
    {
      id: "mr-tot-4",
      rank: 4,
      club: "tottenham",
      desk: "TRANSFERS",
      title: "A trophy in February would change everything — and the draw says it is on",
      slug: "trophy-february-change-everything",
      author: "Vyam Lahoti",
      readTime: "6 min read",
      publishedDate: "3 days ago",
      imageUrl: "/articles/spurs-trophy-celebration.jpg",
    },
  ],
};

export default function MostRead({ initialArticles }: { initialArticles?: any }) {
  // Default active tab is "all"
  const [activeTab, setActiveTab] = useState<"all" | "chelsea" | "tottenham" | "arsenal">("all");
  // Per requirement 5: Arsenal tab appears ONLY when user selects exclusive content/filter
  const [exclusivesOnly, setExclusivesOnly] = useState<boolean>(false);

  const toggleExclusives = () => {
    if (!exclusivesOnly) {
      setExclusivesOnly(true);
      setActiveTab("arsenal"); // Display and activate Arsenal exclusives
    } else {
      setExclusivesOnly(false);
      setActiveTab("all"); // Hide Arsenal tab and return to all
    }
  };

  const currentStories = mostReadByTab[activeTab] || mostReadByTab.all;

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
    <div className="w-full space-y-5">
      {/* Header with Title and Tabs (Increased title by >30%) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="font-display font-black text-base sm:text-lg lg:text-xl uppercase tracking-wider text-navy shrink-0">
            MOST READ
          </h2>
          <div className="h-[1px] bg-hairline flex-1 hidden sm:block"></div>
        </div>

        {/* Tab Pills & Exclusives Filter */}
        <div className="flex items-center gap-2 text-xs font-semibold overflow-x-auto whitespace-nowrap scrollbar-none pb-1 sm:pb-0">
          <button
            onClick={() => {
              setActiveTab("all");
              setExclusivesOnly(false);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
              activeTab === "all" && !exclusivesOnly
                ? "bg-[#1D2B45] text-white font-bold shadow-xs"
                : "bg-surface sm:bg-transparent text-muted hover:text-navy"
            }`}
          >
            All three
          </button>

          <button
            onClick={() => {
              setActiveTab("chelsea");
              setExclusivesOnly(false);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
              activeTab === "chelsea" && !exclusivesOnly
                ? "bg-[#1C6BB0] text-white font-bold shadow-xs"
                : "bg-surface sm:bg-transparent text-muted hover:text-navy"
            }`}
          >
            Chelsea
          </button>

          <button
            onClick={() => {
              setActiveTab("tottenham");
              setExclusivesOnly(false);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
              activeTab === "tottenham" && !exclusivesOnly
                ? "bg-[#24376B] text-white font-bold shadow-xs"
                : "bg-surface sm:bg-transparent text-muted hover:text-navy"
            }`}
          >
            Tottenham
          </button>

          {/* Requirement 5: Arsenal Tab displayed ONLY when user selects exclusive filter */}
          {exclusivesOnly && (
            <button
              onClick={() => setActiveTab("arsenal")}
              className={`px-3.5 py-1.5 rounded-full text-xs transition-colors cursor-pointer flex items-center gap-1.5 animate-in fade-in duration-200 ${
                activeTab === "arsenal"
                  ? "bg-[#E8192C] text-white font-black shadow-xs ring-2 ring-[#E8192C]/30"
                  : "bg-red-50 text-[#E8192C] hover:bg-red-100"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              <span>Arsenal (Exclusives)</span>
            </button>
          )}

          {/* Exclusives Filter Toggle */}
          <button
            onClick={toggleExclusives}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
              exclusivesOnly
                ? "bg-[#CE3426] border-[#CE3426] text-white shadow-xs"
                : "border-[#CE3426]/50 text-[#CE3426] hover:bg-[#CE3426]/10"
            }`}
            title="Toggle Exclusive Arsenal & Club Investigations"
          >
            <span>{exclusivesOnly ? "✓" : "+"}</span>
            <span>EXCLUSIVES</span>
          </button>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW: Enlarged Picture-Led Cards with Rounded Corners
         ======================================================== */}
      <div className="block md:hidden space-y-4">
        {currentStories.map((story) => (
          <div
            key={`mobile-${story.id}`}
            className="bg-white border border-hairline/80 rounded-xl p-4 shadow-xs group"
          >
            {/* Picture-Led Mobile Image with Dropshadow and Red Rank Badge */}
            <Link
              href={`/article/${story.slug}`}
              className="block relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-3 shadow-md border border-hairline/60 bg-slate-900 group/img cursor-pointer"
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
              {/* Refined Rank badge */}
              <div className="absolute top-2.5 left-2.5 w-7 h-7 bg-[#CE3426] text-white flex items-center justify-center font-display font-black text-xs rounded-md shadow-md z-10">
                {story.rank}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
            </Link>

            <div className="flex items-center gap-1.5 mb-1.5">
              <span className={`w-3 h-[2px] ${getClubLineColor(story.club)}`}></span>
              <span className="text-[10px] font-black uppercase tracking-wider text-muted">
                {getClubLabel(story.club)} • {story.desk}
              </span>
            </div>

            <Link
              href={`/article/${story.slug}`}
              className="font-headline font-bold text-base text-ink group-hover:text-indigo transition-colors leading-snug block mb-2"
            >
              {story.title}
            </Link>

            {/* Clickable Date/Timestamp */}
            <div className="text-[11px] text-muted font-medium pt-2 border-t border-hairline/60 flex items-center justify-between">
              <span>{story.author}</span>
              <Link
                href={`/article/${story.slug}`}
                className="hover:text-indigo font-semibold underline underline-offset-2 transition-colors cursor-pointer"
                title="View story published date and details"
              >
                {story.publishedDate || "Yesterday"} · {story.readTime}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================
          DESKTOP VIEW: Enlarged 2x2 Cards with Consistent Rounded Corners
         ======================================================== */}
      <div className="hidden md:grid md:grid-cols-2 gap-5 lg:gap-6">
        {currentStories.map((story) => (
          <div
            key={`desktop-${story.id}`}
            className="bg-white border border-hairline rounded-xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-gray-300 transition-all group flex flex-col justify-between"
          >
            <div>
              {/* Picture-led Photo with Dropshadow and Red rank square badge */}
              <Link
                href={`/article/${story.slug}`}
                className="block relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-3.5 shadow-md border border-hairline/60 bg-slate-900 group/img cursor-pointer"
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
                <div className="absolute top-2.5 left-2.5 w-7 h-7 sm:w-8 sm:h-8 bg-[#CE3426] text-white flex items-center justify-center font-display font-black text-xs sm:text-sm rounded-md shadow-md z-10">
                  {story.rank}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
              </Link>

              {/* Eyebrow with colored rule */}
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-3.5 h-[2px] ${getClubLineColor(story.club)}`}></span>
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-muted">
                  {getClubLabel(story.club)} • {story.desk}
                </span>
              </div>

              {/* Title: enlarged for superior readability */}
              <Link
                href={`/article/${story.slug}`}
                className="font-headline font-bold text-base sm:text-lg lg:text-[18px] xl:text-[19px] text-ink group-hover:text-indigo transition-colors leading-snug block mb-2"
              >
                {story.title}
              </Link>
            </div>

            {/* Clickable Date and Author Byline */}
            <div className="text-xs text-muted font-medium pt-3 border-t border-hairline/60 flex items-center justify-between mt-2">
              <span>{story.author}</span>
              <Link
                href={`/article/${story.slug}`}
                className="hover:text-indigo font-semibold underline underline-offset-2 transition-colors cursor-pointer"
                title="View story published date and details"
              >
                {story.publishedDate || "Yesterday"} · {story.readTime}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

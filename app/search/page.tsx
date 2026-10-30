"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import AdSlot from "@/components/AdSlot";
import { getClubTextClass } from "@/lib/utils";

export default function SearchPage() {
  const [query, setQuery] = useState("arsenal xga");
  const [filter, setFilter] = useState("all");
  const [isPending, startTransition] = useTransition();

  const allArticles = [
    {
      id: "art-01",
      slug: "the-press-is-working-the-rest-defence-is-not",
      title: "The press is working. The rest-defence is not.",
      excerpt: "Eleven games into the title defence, one phase of play accounts for almost all of Arsenal's rise in expected goals against (xGA) — and it is not the one everyone is arguing about.",
      club: "arsenal",
      desk: "features",
      subDesk: "DATA",
      publishedAt: "2026-10-06T09:15:00Z",
    },
    {
      id: "art-08",
      slug: "single-pivot-problem-explained-touch-maps",
      title: "The single-pivot problem, explained with every touch map from the last six games",
      excerpt: "Two players used to share a channel. Now one covers it alone, and the data shows exactly where the defensive structure breaks under transition.",
      club: "arsenal",
      desk: "features",
      subDesk: "FEATURES",
      publishedAt: "2026-10-05T11:00:00Z",
    },
    {
      id: "art-03",
      slug: "de-zerbi-spurs-rebuild-in-five-numbers",
      title: "De Zerbi's rebuild in five numbers: progression up, control down",
      excerpt: "Deep progression has increased by 22% compared against Arsenal's defensive cohort, but field tilt and rest-defence metrics reveal high exposure in wide zones.",
      club: "tottenham",
      desk: "features",
      subDesk: "DATA",
      publishedAt: "2026-10-06T07:15:00Z",
    },
    {
      id: "art-02",
      slug: "chelsea-wage-structure-question-before-january",
      title: "The wage-structure question Chelsea must answer before January",
      excerpt: "Amortisation thresholds, incentive ladders, and tactical wage balance ahead of the London derby window.",
      club: "chelsea",
      desk: "transfers",
      subDesk: "TRANSFERS",
      publishedAt: "2026-10-06T08:30:00Z",
    },
    {
      id: "art-05",
      slug: "arsenal-quietly-rebuilt-scouting-south-america",
      title: "The scouting network Arsenal quietly rebuilt in South America",
      excerpt: "Four appointments in eighteen months, none announced. How Arsenal's scouting network identifies emerging talent before European market inflation.",
      club: "arsenal",
      desk: "exclusives",
      subDesk: "EXCLUSIVES",
      publishedAt: "2026-10-04T12:00:00Z",
    },
    {
      id: "art-06",
      slug: "former-cobham-coach-lost-decade-interview",
      title: "\"We were told to stop playing out\": a former Cobham coach on the academy's lost decade",
      excerpt: "Twelve years at the club, four academy directors, and one tactical directive that reshaped player progression across Cobham.",
      club: "chelsea",
      desk: "features",
      subDesk: "INTERVIEW",
      publishedAt: "2026-10-02T14:30:00Z",
    },
    {
      id: "art-07",
      slug: "trophy-february-change-everything",
      title: "Every London signing of the summer, graded by the data",
      excerpt: "Thirty-one arrivals across Arsenal, Chelsea, and Tottenham, scored on minutes, output, and tactical system fit.",
      club: "tottenham",
      desk: "features",
      subDesk: "DATA",
      publishedAt: "2026-09-30T10:00:00Z",
    },
  ];

  const handleQueryChange = (val: string) => {
    startTransition(() => {
      setQuery(val);
    });
  };

  const results = allArticles.filter((a) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    const matchesQuery =
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.club.toLowerCase().includes(q) ||
      (a.subDesk && a.subDesk.toLowerCase().includes(q));
    if (filter === "all") return matchesQuery;
    if (filter === "data") return matchesQuery && a.subDesk === "DATA";
    return matchesQuery && a.club === filter;
  });

  return (
    <div className="max-w-[1050px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      {/* Header with Clickable Logo */}
      <div className="pb-6 border-b border-hairline mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/" title="Three Points London - Return to Home" className="cursor-pointer">
            <img
              src="/logo.png"
              alt="Three Points London"
              className="h-8 w-auto object-contain cursor-pointer"
            />
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-muted">
            EDITORIAL ARCHIVE SEARCH
          </span>
        </div>
        <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-navy uppercase mb-2">
          Search Three Points London
        </h1>
        <p className="text-xs sm:text-sm text-muted">
          Query tactical dossiers, xGA breakdowns, transfer investigations, and club archives.
        </p>
      </div>

      {/* Search Input Bar with Prominent Magnifying Glass Icon (Replaced loading dots) */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy pointer-events-none">
            {/* Visual Magnifying Glass Icon - Distinct & high contrast */}
            <SearchIcon className="w-5 h-5 text-[#1D2B45]" strokeWidth={2.5} />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search players, clubs, tactics, xGA, writers, transfers..."
            className="w-full bg-surface border border-hairline pl-11 pr-4 py-3 text-sm rounded-xs font-semibold text-navy placeholder:text-gray-400 focus:outline-none focus:border-indigo transition-colors"
          />
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 bg-[#1D2B45] hover:bg-indigo text-white px-6 py-3 text-xs font-bold rounded-xs transition-colors cursor-pointer shrink-0"
        >
          <SearchIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
          <span>Search Newsroom</span>
        </button>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-hairline mb-6 text-xs font-bold">
        <span className="text-muted mr-2 font-semibold">
          {results.length} result{results.length === 1 ? "" : "s"}
        </span>
        {["all", "arsenal", "chelsea", "tottenham", "data"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3.5 py-1.5 rounded-xs uppercase text-[11px] font-black tracking-wider transition-colors cursor-pointer ${
              filter === f
                ? "bg-[#1D2B45] text-white"
                : "bg-surface text-muted hover:text-navy hover:bg-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Search Results */}
      <div className="divide-y divide-hairline">
        {results.map((item, idx) => (
          <React.Fragment key={item.id}>
            <div className="py-5 group">
              <div className="flex items-center gap-2 mb-1.5 text-[10px] font-extrabold uppercase tracking-wider">
                <span className={getClubTextClass(item.club)}>{item.club}</span>
                <span className="text-muted">•</span>
                <span className="text-muted">{item.subDesk || item.desk}</span>
              </div>
              <Link href={`/article/${item.slug}`}>
                <h3 className="font-headline font-bold text-base sm:text-lg text-navy group-hover:text-indigo transition-colors mb-1.5 leading-snug">
                  {item.title}
                </h3>
              </Link>
              <p className="text-xs sm:text-sm text-[#555] leading-relaxed font-body mb-2">
                {item.excerpt}
              </p>
              <Link
                href={`/article/${item.slug}`}
                className="text-xs font-bold text-indigo group-hover:text-ember inline-flex items-center gap-1 transition-colors"
              >
                <span>Read Full Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            {/* Spec: Ad below Result 3 */}
            {idx === 2 && (
              <div className="my-4">
                <AdSlot id="infeed_728x90" label="AD — 728×90 · BELOW RESULT 3 (SEARCH SPEC)" />
              </div>
            )}
          </React.Fragment>
        ))}

        {results.length === 0 && (
          <div className="py-16 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-[#1D2B45]">
              <SearchIcon className="w-6 h-6" strokeWidth={2} />
            </div>
            <h3 className="font-headline font-bold text-base text-navy">
              No matching pieces found
            </h3>
            <p className="text-xs text-muted max-w-sm mx-auto">
              We couldn't find any articles matching "{query}". Try searching for terms like "Arsenal", "Chelsea", "Spurs", "xGA", or "recruitment".
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

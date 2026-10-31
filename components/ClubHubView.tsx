"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Article, ClubStandings } from "@/lib/types";
import AdSlot from "@/components/AdSlot";
import EditorialGraphic from "@/components/EditorialGraphic";

interface ClubHubViewProps {
  club: "arsenal" | "chelsea" | "tottenham";
  clubTitle: string;
  tagline: string;
  themeColor?: string;
  borderColor?: string;
  standings?: ClubStandings;
  articles?: Article[];
}

export default function ClubHubView({
  club,
  clubTitle,
  tagline,
  standings,
  articles = [],
}: ClubHubViewProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [exclusivesOnly, setExclusivesOnly] = useState<boolean>(false);

  const clubNameCapitalized = club.charAt(0).toUpperCase() + club.slice(1);

  // Filter articles based on active tab and exclusives
  let displayedArticles = [...articles];
  if (activeFilter !== "all") {
    displayedArticles = displayedArticles.filter(
      (a) =>
        a.desk?.toLowerCase() === activeFilter.toLowerCase() ||
        a.subDesk?.toLowerCase() === activeFilter.toLowerCase()
    );
  }
  if (exclusivesOnly) {
    displayedArticles = displayedArticles.filter((a) => a.isExclusive);
  }

  // Ensure lead article matches mockup for Arsenal if unfiltered
  if (club === "arsenal" && !exclusivesOnly && activeFilter === "all") {
    const leadIndex = displayedArticles.findIndex(
      (a) => a.slug === "the-press-is-working-the-rest-defence-is-not"
    );
    if (leadIndex > 0) {
      const lead = displayedArticles[leadIndex];
      displayedArticles = [
        lead,
        ...displayedArticles.slice(0, leadIndex),
        ...displayedArticles.slice(leadIndex + 1),
      ];
    }
  }

  const leadArticle = displayedArticles[0];
  const secondaryArticles = displayedArticles.slice(1, 4);
  const moreArticles = displayedArticles.slice(4);

  return (
    <div className="w-full">
      {/* ========================================================
          1. TOP BLUE STRIP (#1D2B45):
             Club Title, Switcher, Centered Live Rankings & Scoreline,
             Recent Results & Upcoming Fixtures, and Desk Filter Tabs
         ======================================================== */}
      <div className="bg-[#1D2B45] text-white pt-6 sm:pt-8 pb-0 px-4 sm:px-6 md:px-8 lg:px-10 border-b border-[#2B3C5C]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pb-6">
          {/* LEFT: Desk Title, Club Switcher, Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            {/* Club Switcher Navigation Pills */}
            <div className="flex items-center gap-1.5 text-xs font-bold">
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-mono">
                DESK:
              </span>
              <Link
                href="/arsenal"
                className={`px-3 py-1 rounded-xs transition-colors text-xs font-black uppercase tracking-wider ${
                  club === "arsenal"
                    ? "bg-[#E8192C] text-white shadow-xs"
                    : "bg-[#142036] text-gray-300 hover:text-white border border-[#273859]"
                }`}
              >
                Arsenal
              </Link>
              <Link
                href="/chelsea"
                className={`px-3 py-1 rounded-xs transition-colors text-xs font-black uppercase tracking-wider ${
                  club === "chelsea"
                    ? "bg-[#1C6BB0] text-white shadow-xs"
                    : "bg-[#142036] text-gray-300 hover:text-white border border-[#273859]"
                }`}
              >
                Chelsea
              </Link>
              <Link
                href="/tottenham"
                className={`px-3 py-1 rounded-xs transition-colors text-xs font-black uppercase tracking-wider ${
                  club === "tottenham"
                    ? "bg-[#24376B] text-white border border-[#3B82F6] shadow-xs"
                    : "bg-[#142036] text-gray-300 hover:text-white border border-[#273859]"
                }`}
              >
                Tottenham
              </Link>
            </div>

            <div>
              <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mb-1">
                The {clubNameCapitalized} Desk
              </h1>
              <p className="text-xs text-gray-300 font-normal leading-relaxed">
                {tagline ||
                  `Tactics, data, recruitment, and academy reporting for ${clubNameCapitalized}.`}
              </p>
            </div>
          </div>

          {/* CENTER: Position & Points in Center + Live In-Game Match Scoreline (4 cols) */}
          <div className="lg:col-span-4 bg-[#142036]/80 border border-[#273859] rounded-xs p-3 flex flex-col items-center justify-center gap-2 text-center shadow-xs">
            {/* Position and Points centered */}
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <span className="text-[9px] font-mono font-bold uppercase text-gray-400 tracking-wider block">
                  POSITION
                </span>
                <span className="font-display font-black text-2xl text-white leading-none">
                  {standings?.position || "1st"}
                </span>
              </div>
              <div className="w-[1px] h-7 bg-[#273859]"></div>
              <div className="text-center">
                <span className="text-[9px] font-mono font-bold uppercase text-gray-400 tracking-wider block">
                  POINTS
                </span>
                <span className="font-display font-black text-2xl text-white leading-none">
                  {standings?.points || 26}
                </span>
              </div>
            </div>

            {/* In-Game Live Match Scoreline */}
            <div className="w-full pt-2 border-t border-[#273859] flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="bg-[#10B981] text-white text-[9px] font-black uppercase px-1.5 py-0.2 rounded-2xs tracking-wider">
                {standings?.liveMatch?.status || "LIVE"} {standings?.liveMatch?.minute || "68'"}
              </span>
              <span className="font-display font-black text-sm text-white tracking-tight">
                {standings?.liveMatch
                  ? `${standings.liveMatch.homeTeam} ${standings.liveMatch.homeScore} – ${standings.liveMatch.awayScore} ${standings.liveMatch.awayTeam}`
                  : club === "tottenham"
                  ? "Tottenham 3 – 1 Sporting CP"
                  : "Arsenal 2 – 1 Chelsea"}
              </span>
            </div>
          </div>

          {/* RIGHT: Recent Results & Upcoming Fixtures Applied in the Blue Strip (4 cols) */}
          <div className="lg:col-span-4 bg-[#142036]/60 border border-[#273859] p-3 rounded-xs text-xs space-y-2">
            {/* Last Result & Form */}
            <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-[#273859]">
              <div>
                <span className="text-[9px] font-mono font-bold uppercase text-gray-400 block">
                  LAST MATCH:
                </span>
                <span className="font-bold text-white text-xs">
                  {standings?.lastMatch
                    ? `${standings.lastMatch.score} vs ${standings.lastMatch.opponent}`
                    : "2–0 vs Everton"}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {(standings?.recentResults || []).slice(0, 5).map((r, i) => (
                  <span
                    key={i}
                    className={`w-5 h-5 rounded-2xs flex items-center justify-center text-[10px] font-black ${
                      r.result === "W"
                        ? "bg-[#10B981] text-white"
                        : r.result === "L"
                        ? "bg-[#CE3426] text-white"
                        : "bg-gray-400 text-white"
                    }`}
                    title={`${r.opponent} (${r.score})`}
                  >
                    {r.result}
                  </span>
                ))}
              </div>
            </div>

            {/* Upcoming Fixture */}
            <div className="flex items-center justify-between gap-2">
              <div>
                <span className="text-[9px] font-mono font-bold uppercase text-gray-400 block">
                  NEXT FIXTURE:
                </span>
                <span className="font-bold text-white text-xs">
                  vs {standings?.nextMatch?.opponent || "Hull City"}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-gray-200 font-semibold block">
                  {standings?.nextMatch?.date || "Sat 7 Feb · 15:00"}
                </span>
                <span className="text-[9px] text-gray-400">
                  {standings?.nextMatch?.venue || "Emirates Stadium"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tab Bar inside the Dark Banner (Strictly as Mockup Image 5) */}
        <div className="flex flex-wrap items-center justify-between border-t border-[#2B3C5C] pt-3 pb-3 gap-3">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none text-xs font-semibold">
            {[
              { key: "all", label: "All" },
              { key: "news", label: "News" },
              { key: "transfers", label: "Transfers" },
              { key: "matchday", label: "Matchday" },
              { key: "features", label: "Features" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-3.5 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                  activeFilter === tab.key && !exclusivesOnly
                    ? "bg-white text-navy font-bold shadow-xs"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Exclusives Only Button */}
          <button
            onClick={() => setExclusivesOnly(!exclusivesOnly)}
            className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-colors flex items-center gap-1.5 cursor-pointer ${
              exclusivesOnly
                ? "bg-[#CE3426] border-[#CE3426] text-white"
                : "border-[#CE3426] text-white bg-transparent hover:bg-[#CE3426]/20"
            }`}
          >
            <span>+</span>
            <span>EXCLUSIVES ONLY</span>
          </button>
        </div>
      </div>

      {/* ========================================================
          2. MAIN CONTENT (Padding container)
         ======================================================== */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 space-y-8">
        {displayedArticles.length === 0 ? (
          <div className="py-16 text-center text-muted font-body">
            <p className="text-sm">No articles found matching this filter.</p>
            <button
              onClick={() => {
                setActiveFilter("all");
                setExclusivesOnly(false);
              }}
              className="mt-4 px-4 py-2 bg-navy text-white text-xs font-bold rounded-xs"
            >
              Reset filters
            </button>
          </div>
        ) : (
          /* Split Grid: Left Main Stream (8 cols) + Right Sticky Rail (4 cols) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main 8-Column Area */}
            <div className="lg:col-span-8 space-y-8">
              {/* Lead Story: Relevant Photography / Graphic + Typography */}
              {leadArticle && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <Link
                    href={`/article/${leadArticle.slug}`}
                    className="md:col-span-6 aspect-[16/10] w-full rounded-xs overflow-hidden block relative bg-slate-100 group"
                  >
                    {leadArticle.imageUrl ? (
                      <img
                        src={leadArticle.imageUrl}
                        alt={leadArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <EditorialGraphic type="contour" label="1600 × 900" />
                    )}
                  </Link>
                  <div className="md:col-span-6">
                    <div className="flex items-center gap-2 mb-2">
                      {leadArticle.isExclusive && (
                        <span className="bg-[#CE3426] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-xs tracking-wider">
                          EXCLUSIVE
                        </span>
                      )}
                      <span className="text-[10px] font-black uppercase tracking-wider text-muted">
                        {leadArticle.subDesk || leadArticle.desk?.toUpperCase()}
                      </span>
                    </div>
                    <Link
                      href={`/article/${leadArticle.slug}`}
                      className="font-display font-black text-xl sm:text-2xl text-ink hover:text-indigo transition-colors leading-tight block mb-2"
                    >
                      {leadArticle.title}
                    </Link>
                    <p className="font-body text-xs sm:text-sm text-[#444] leading-relaxed mb-4 line-clamp-3">
                      {leadArticle.excerpt}
                    </p>
                    <div className="text-[11px] text-muted font-medium">
                      {leadArticle.authorName} · {leadArticle.readTime} · 2 hours ago
                    </div>
                  </div>
                </div>
              )}

              {/* 3 Secondary Cards Row */}
              {secondaryArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-hairline">
                  {secondaryArticles.map((article, idx) => (
                    <div key={article.id || article.slug} className="group">
                      <Link
                        href={`/article/${article.slug}`}
                        className="aspect-[16/9] w-full rounded-xs overflow-hidden mb-2 block relative bg-slate-100"
                      >
                        {article.imageUrl ? (
                          <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        ) : (
                          <EditorialGraphic type={idx === 2 ? "pitch" : "contour"} />
                        )}
                      </Link>
                      <div className="flex items-center gap-1.5 mb-1">
                        {article.isExclusive && (
                          <span className="bg-[#CE3426] text-white text-[8px] font-black uppercase px-1.5 py-0.2 rounded-2xs">
                            EXCLUSIVE
                          </span>
                        )}
                        <span className="text-[9px] font-black uppercase text-muted tracking-wider">
                          {article.subDesk || article.desk?.toUpperCase()}
                        </span>
                      </div>
                      <Link
                        href={`/article/${article.slug}`}
                        className="font-headline font-bold text-xs sm:text-[13px] text-ink hover:text-indigo leading-snug block mb-1.5"
                      >
                        {article.title}
                      </Link>
                      <div className="text-[10px] text-muted">
                        {article.authorName} · {idx + 4}h
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* In-Feed Ad Banner */}
              <AdSlot
                id="infeed_728x90"
                label="AD — 728×90 IN-FEED · UNIT 1 OF 2 · HEIGHT RESERVED"
              />

              {/* "MORE [CLUB]" Section */}
              {moreArticles.length > 0 && (
                <div className="space-y-6">
                  <h3 className="font-display font-black text-xs uppercase tracking-wider text-navy">
                    MORE {clubNameCapitalized.toUpperCase()}
                  </h3>

                  {moreArticles.slice(0, 2).map((article) => (
                    <div
                      key={article.id || article.slug}
                      className="flex gap-4 items-center pt-2 first:pt-0 group"
                    >
                      <Link
                        href={`/article/${article.slug}`}
                        className="w-32 sm:w-40 aspect-[16/9] shrink-0 rounded-xs overflow-hidden block relative bg-slate-100"
                      >
                        {article.imageUrl ? (
                          <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        ) : (
                          <EditorialGraphic type="contour" />
                        )}
                      </Link>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          {article.isExclusive && (
                            <span className="bg-[#CE3426] text-white text-[8px] font-black uppercase px-1.5 py-0.2 rounded-2xs">
                              EXCLUSIVE
                            </span>
                          )}
                          <span className="text-[9px] font-black uppercase text-muted tracking-wider">
                            {article.subDesk || article.desk?.toUpperCase()}
                          </span>
                        </div>
                        <Link
                          href={`/article/${article.slug}`}
                          className="font-headline font-bold text-sm sm:text-base text-ink hover:text-indigo leading-snug block mb-1"
                        >
                          {article.title}
                        </Link>
                        <p className="text-xs text-muted font-normal line-clamp-1 mb-1">
                          {article.excerpt}
                        </p>
                        <div className="text-[10px] text-muted">
                          {article.authorName} · {article.readTime} · Yesterday
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Mid-Feed Ad Unit 2 */}
                  <div className="pt-2 pb-2">
                    <AdSlot
                      id="infeed_336x280"
                      label="AD — 336×280 IN-FEED · UNIT 2 OF 2 · AFTER LISTING ITEM 2 · LAZY-LOADED"
                    />
                  </div>

                  {moreArticles.slice(2).map((article) => (
                    <div
                      key={article.id || article.slug}
                      className="flex gap-4 items-center pt-4 border-t border-hairline/60 group"
                    >
                      <Link
                        href={`/article/${article.slug}`}
                        className="w-32 sm:w-40 aspect-[16/9] shrink-0 rounded-xs overflow-hidden block relative bg-slate-100"
                      >
                        {article.imageUrl ? (
                          <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        ) : (
                          <EditorialGraphic type="contour" />
                        )}
                      </Link>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          {article.isExclusive && (
                            <span className="bg-[#CE3426] text-white text-[8px] font-black uppercase px-1.5 py-0.2 rounded-2xs">
                              EXCLUSIVE
                            </span>
                          )}
                          <span className="text-[9px] font-black uppercase text-muted tracking-wider">
                            {article.subDesk || article.desk?.toUpperCase()}
                          </span>
                        </div>
                        <Link
                          href={`/article/${article.slug}`}
                          className="font-headline font-bold text-sm sm:text-base text-ink hover:text-indigo leading-snug block mb-1"
                        >
                          {article.title}
                        </Link>
                        <p className="text-xs text-muted font-normal line-clamp-1 mb-1">
                          {article.excerpt}
                        </p>
                        <div className="text-[10px] text-muted">
                          {article.authorName} · {article.readTime} · 2 days ago
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Load More Button */}
                  <div className="pt-6 text-center">
                    <button className="px-6 py-2 bg-white border border-hairline text-ink text-xs font-bold rounded-xs hover:bg-surface transition-colors shadow-2xs cursor-pointer">
                      Load more {clubNameCapitalized}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Rail: 300x600 Sticky Ad (4 cols) */}
            <div className="lg:col-span-4 sticky top-20">
              <AdSlot
                id="rail_300x600"
                label="AD — 300×600 HALF-PAGE · STICKY · SEQUENTIAL · 30s VIEWABLE REFRESH"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ClubStandings, MatchResult, UpcomingFixture } from "@/lib/types";
import { Radio, Calendar, Trophy, ChevronRight, Activity } from "lucide-react";

interface LiveMatchDeskProps {
  club?: "arsenal" | "chelsea" | "tottenham" | "all";
  standings?: Record<string, ClubStandings> | ClubStandings;
  className?: string;
}

export default function LiveMatchDesk({
  club = "all",
  standings,
  className = "",
}: LiveMatchDeskProps) {
  const [selectedClub, setSelectedClub] = useState<"arsenal" | "chelsea" | "tottenham">(
    club !== "all" ? club : "arsenal"
  );
  const [venueFilter, setVenueFilter] = useState<"all" | "H" | "A">("all");

  // Format Club Data
  const getClubData = (c: "arsenal" | "chelsea" | "tottenham"): ClubStandings | undefined => {
    if (!standings) return undefined;
    if ("club" in standings) {
      return standings as ClubStandings;
    }
    return (standings as Record<string, ClubStandings>)[c];
  };

  const currentData = getClubData(selectedClub);

  // Result Badge Color: Green for Win, Red for Loss, Gray for Draw
  const getResultBadge = (res: "W" | "L" | "D") => {
    if (res === "W") {
      return {
        bg: "bg-[#10B981]",
        text: "text-white",
        label: "WIN",
      };
    }
    if (res === "L") {
      return {
        bg: "bg-[#CE3426]",
        text: "text-white",
        label: "LOSS",
      };
    }
    return {
      bg: "bg-gray-400",
      text: "text-white",
      label: "DRAW",
    };
  };

  const getClubColor = (c: string) => {
    if (c === "arsenal") return "text-[#E8192C]";
    if (c === "chelsea") return "text-[#1C6BB0]";
    return "text-[#24376B]";
  };

  const getClubBorder = (c: string) => {
    if (c === "arsenal") return "border-[#E8192C]";
    if (c === "chelsea") return "border-[#1C6BB0]";
    return "border-[#24376B]";
  };

  // Filter results and fixtures by venue if active
  const filteredResults: MatchResult[] = (currentData?.recentResults || []).filter((r) =>
    venueFilter === "all" ? true : r.venueType === venueFilter
  );

  const filteredFixtures: UpcomingFixture[] = (currentData?.upcomingFixtures || []).filter((f) =>
    venueFilter === "all" ? true : f.venueType === venueFilter
  );

  return (
    <div className={`w-full bg-white border border-hairline rounded-xs overflow-hidden ${className}`}>
      {/* Top Header Bar */}
      <div className="bg-[#1D2B45] text-white p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-300">
              PREMIER LEAGUE LIVE TELEMETRY
            </span>
          </div>
          <h2 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
            Live Rankings & Matchday Intelligence
          </h2>
        </div>

        {/* Club Switcher (if in multi-club mode) */}
        {club === "all" && (
          <div className="flex items-center gap-1.5 bg-[#142036] p-1 rounded-xs border border-[#273859]">
            {(["arsenal", "chelsea", "tottenham"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setSelectedClub(c)}
                className={`px-3 py-1 text-xs font-bold uppercase rounded-xs transition-colors cursor-pointer ${
                  selectedClub === c
                    ? "bg-white text-navy shadow-xs"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Grid: Position & Points Boxes + In-Game Updates */}
      <div className="p-4 sm:p-6 space-y-6">
        {/* Separate structured boxes for Team Position and Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Box 1: Team Position / Rank */}
          <div className="bg-surface border border-hairline rounded-xs p-4 flex flex-col justify-between">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted mb-1 flex items-center justify-between">
              <span>LEAGUE POSITION</span>
              <Trophy className="w-3.5 h-3.5 text-muted" />
            </div>
            <div className="font-display font-black text-3xl sm:text-4xl text-navy my-1">
              {currentData?.position || "—"}
            </div>
            <div className="text-[11px] font-bold text-muted">
              {selectedClub.toUpperCase()} · Top 5 Contender
            </div>
          </div>

          {/* Box 2: Points with in-game updates */}
          <div className="bg-surface border border-hairline rounded-xs p-4 flex flex-col justify-between">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted mb-1 flex items-center justify-between">
              <span>TOTAL POINTS</span>
              <Activity className="w-3.5 h-3.5 text-muted" />
            </div>
            <div className="flex items-baseline gap-2 my-1">
              <span className="font-display font-black text-3xl sm:text-4xl text-navy">
                {currentData?.points || 0}
              </span>
              <span className="text-xs font-bold text-muted uppercase">PTS</span>
            </div>
            <div className="text-[10px] font-bold text-[#CE3426] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CE3426] animate-pulse"></span>
              <span className="truncate">{currentData?.inGameUpdate || "Live table synced"}</span>
            </div>
          </div>

          {/* Box 3: Matches & Goal Difference */}
          <div className="bg-surface border border-hairline rounded-xs p-4 flex flex-col justify-between">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted mb-1">
              PLAYED & GOAL DIFF
            </div>
            <div className="font-display font-black text-3xl text-navy my-1">
              {currentData?.played || 11}{" "}
              <span className="text-lg font-bold text-muted">
                ({currentData?.goalDifference && currentData.goalDifference > 0 ? `+${currentData.goalDifference}` : currentData?.goalDifference || "+0"} GD)
              </span>
            </div>
            <div className="text-[11px] text-muted font-medium">
              Regular season campaign
            </div>
          </div>

          {/* Box 4: Next Fixture Preview */}
          <div className="bg-[#1D2B45] text-white rounded-xs p-4 flex flex-col justify-between">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1 flex items-center justify-between">
              <span>NEXT FIXTURE</span>
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <div className="my-1">
              <div className="font-display font-black text-lg text-white leading-snug">
                vs {currentData?.nextMatch?.opponent}
              </div>
              <div className="text-xs text-gray-300 font-medium">
                {currentData?.nextMatch?.date}
              </div>
            </div>
            <div className="text-[10px] text-gray-400 font-semibold truncate">
              {currentData?.nextMatch?.venue}
            </div>
          </div>
        </div>

        {/* Venue Filter Toggle: All / Home / Away */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-hairline">
          <div className="text-xs font-black uppercase tracking-wider text-navy">
            {selectedClub.toUpperCase()} FORM, FIXTURES & LONDON COMPARISON
          </div>

          <div className="flex items-center gap-1 text-xs font-bold bg-surface p-1 rounded-xs border border-hairline w-fit">
            <span className="text-[10px] font-mono uppercase text-muted px-2">VENUE:</span>
            {(["all", "H", "A"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setVenueFilter(v)}
                className={`px-2.5 py-0.5 rounded-xs text-[11px] font-bold uppercase transition-colors cursor-pointer ${
                  venueFilter === v
                    ? "bg-[#1D2B45] text-white shadow-2xs"
                    : "text-muted hover:text-navy"
                }`}
              >
                {v === "all" ? "All" : v === "H" ? "Home (H)" : "Away (A)"}
              </button>
            ))}
          </div>
        </div>

        {/* Results & Fixtures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Recent Results (Green for Win, Red for Loss) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-muted flex items-center justify-between pb-1 border-b border-hairline">
              <span>RECENT RESULTS</span>
              <span className="text-[10px] font-semibold text-muted">
                Green = Win · Red = Loss
              </span>
            </div>

            <div className="divide-y divide-hairline">
              {filteredResults.length === 0 ? (
                <div className="py-4 text-xs text-muted">No results matching this venue filter.</div>
              ) : (
                filteredResults.map((match) => {
                  const badge = getResultBadge(match.result);
                  return (
                    <div
                      key={match.id}
                      className="py-3 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Result Badge: Red for Loss, Green for Win */}
                        <span
                          className={`w-6 h-6 rounded-xs ${badge.bg} ${badge.text} font-display font-black text-xs flex items-center justify-center shrink-0 shadow-2xs`}
                          title={badge.label}
                        >
                          {match.result}
                        </span>

                        <div className="min-w-0">
                          <div className="font-headline font-bold text-sm text-ink truncate">
                            vs {match.opponent}
                          </div>
                          <div className="text-[10px] text-muted font-medium">
                            {match.date} · {match.competition || "Premier League"}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono font-black text-sm text-navy bg-surface px-2 py-0.5 rounded-xs border border-hairline">
                          {match.score}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded-2xs ${
                            match.venueType === "H"
                              ? "bg-blue-50 text-blue-700 border border-blue-200"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}
                        >
                          {match.venueType === "H" ? "Home" : "Away"}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Middle Column: Upcoming Fixtures */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-muted flex items-center justify-between pb-1 border-b border-hairline">
              <span>UPCOMING FIXTURES</span>
              <span className="text-[10px] font-semibold text-muted">
                H = Home · A = Away
              </span>
            </div>

            <div className="divide-y divide-hairline">
              {filteredFixtures.length === 0 ? (
                <div className="py-4 text-xs text-muted">No fixtures matching this venue filter.</div>
              ) : (
                filteredFixtures.map((fix) => (
                  <div
                    key={fix.id}
                    className="py-3 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`w-6 h-6 rounded-xs font-display font-black text-xs flex items-center justify-center shrink-0 border ${
                          fix.venueType === "H"
                            ? "bg-blue-50 text-blue-800 border-blue-200"
                            : "bg-amber-50 text-amber-800 border-amber-200"
                        }`}
                        title={fix.venueType === "H" ? "Home Match" : "Away Match"}
                      >
                        {fix.venueType}
                      </span>

                      <div className="min-w-0">
                        <div className="font-headline font-bold text-sm text-ink truncate">
                          vs {fix.opponent}
                        </div>
                        <div className="text-[10px] text-muted font-medium">
                          {fix.competition} · {fix.venue}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-mono font-bold text-xs text-navy">
                        {fix.time}
                      </div>
                      <div className="text-[10px] text-muted">{fix.date}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Scoreline Comparison Between London Rival Teams */}
        {currentData?.scorelineComparisons && currentData.scorelineComparisons.length > 0 && (
          <div className="pt-4 border-t border-hairline space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-navy flex items-center justify-between">
              <span>LONDON DERBY SCORELINE COMPARISONS</span>
              <span className="text-[11px] font-bold text-indigo">Head-to-head records</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentData.scorelineComparisons.map((derby) => {
                const badge = getResultBadge(derby.outcome);
                const opponentName = derby.vsClub.charAt(0).toUpperCase() + derby.vsClub.slice(1);
                return (
                  <div
                    key={derby.vsClub}
                    className="border border-hairline bg-surface/50 rounded-xs p-4 flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`w-2.5 h-[2px] ${getClubColor(selectedClub)}`}></span>
                        <span className="font-display font-bold text-xs text-navy uppercase">
                          {selectedClub.toUpperCase()} VS {opponentName.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-xs text-muted">
                        Venue: <strong>{derby.venue}</strong>
                      </div>
                      <div className="text-[10px] text-gray-500 mt-1">
                        Next: {derby.nextMeeting}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="flex items-center gap-1.5 justify-end mb-1">
                        <span
                          className={`w-5 h-5 rounded-2xs ${badge.bg} ${badge.text} font-bold text-[10px] flex items-center justify-center`}
                        >
                          {derby.outcome}
                        </span>
                        <span className="font-display font-black text-lg text-navy">
                          {derby.lastScore}
                        </span>
                      </div>
                      <span className="text-[9px] font-bold uppercase text-muted tracking-wider">
                        {derby.date}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

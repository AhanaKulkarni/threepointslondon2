"use client";

import React from "react";
import Link from "next/link";
import { TickerItem } from "@/lib/types";

interface NewsTickerProps {
  items: TickerItem[];
}

export default function NewsTicker({ items }: NewsTickerProps) {
  const activeItems = items.filter((i) => i.active);

  const getClubDashColor = (club?: string) => {
    if (club === "arsenal") return "bg-[#E8192C]";
    if (club === "chelsea") return "bg-[#1C6BB0]";
    return "bg-[#24376B]";
  };

  return (
    <div className="bg-white text-ink border-b border-hairline text-[11px] font-semibold select-none z-30">
      <div className="w-full flex items-center h-8 sm:h-9 px-3 sm:px-6 md:px-8 lg:px-10">
        {/* LATEST Chip with Red Dot (Blue text on mobile/desktop as in Mockup 3) */}
        <div className="flex items-center gap-1.5 pr-2.5 sm:pr-3 border-r border-hairline shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CE3426] animate-pulse"></span>
          <span className="text-[#2B4BC4] font-black uppercase text-[10px] tracking-wider">
            LATEST
          </span>
        </div>

        {/* Marquee viewport */}
        <div className="flex-1 overflow-hidden relative mx-2 sm:mx-3 h-full flex items-center">
          <div className="animate-ticker flex items-center whitespace-nowrap gap-5 text-gray-700">
            {activeItems.map((item, idx) => (
              <span key={`ticker-1-${item.id}-${idx}`} className="inline-flex items-center gap-2">
                <span className={`w-3 h-[2px] rounded-full ${getClubDashColor(item.club)} shrink-0`}></span>
                <Link
                  href={item.link || `/${item.club}`}
                  className="hover:text-indigo transition-colors cursor-pointer text-ink font-medium"
                >
                  {item.text}
                </Link>
                <span className="text-gray-400 font-bold ml-2">•</span>
              </span>
            ))}
            {/* Duplicate for seamless infinite loop */}
            {activeItems.map((item, idx) => (
              <span key={`ticker-2-${item.id}-${idx}`} className="inline-flex items-center gap-2">
                <span className={`w-3 h-[2px] rounded-full ${getClubDashColor(item.club)} shrink-0`}></span>
                <Link
                  href={item.link || `/${item.club}`}
                  className="hover:text-indigo transition-colors cursor-pointer text-ink font-medium"
                >
                  {item.text}
                </Link>
                <span className="text-gray-400 font-bold ml-2">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right utility links (Desktop only as in Mockup 1 & 2) */}
        <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-hairline shrink-0 text-[11px] text-muted">
          <Link href="/search" className="hover:text-navy transition-colors font-medium">
            Search
          </Link>
          <span className="text-gray-300">•</span>
          <Link
            href="/contact#feedback"
            className="flex items-center gap-1.5 hover:text-navy transition-colors font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#CE3426]"></span>
            <span>Report</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

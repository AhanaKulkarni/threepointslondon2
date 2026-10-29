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
    <div className="bg-[#111317] text-white border-b border-[#232731] text-[11px] font-semibold select-none z-30">
      <div className="w-full flex items-center h-8 px-4 sm:px-6 md:px-8 lg:px-10">
        {/* LATEST Chip with Red Dot */}
        <div className="flex items-center gap-1.5 pr-3 border-r border-gray-700/70 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse"></span>
          <span className="text-gray-200 font-extrabold uppercase text-[10px] tracking-wider">
            LATEST
          </span>
        </div>

        {/* Marquee viewport */}
        <div className="flex-1 overflow-hidden relative mx-3 h-full flex items-center">
          <div className="animate-ticker flex items-center whitespace-nowrap gap-5 text-gray-300">
            {activeItems.map((item, idx) => (
              <span key={`ticker-1-${item.id}-${idx}`} className="inline-flex items-center gap-2.5">
                <span className={`w-3 h-[2px] rounded-full ${getClubDashColor(item.club)} shrink-0`}></span>
                <Link
                  href={item.link || `/${item.club}`}
                  className="hover:text-white transition-colors cursor-pointer text-gray-200"
                >
                  {item.text}
                </Link>
                <span className="text-gray-600 font-bold ml-2">•</span>
              </span>
            ))}
            {/* Duplicate for seamless infinite loop */}
            {activeItems.map((item, idx) => (
              <span key={`ticker-2-${item.id}-${idx}`} className="inline-flex items-center gap-2.5">
                <span className={`w-3 h-[2px] rounded-full ${getClubDashColor(item.club)} shrink-0`}></span>
                <Link
                  href={item.link || `/${item.club}`}
                  className="hover:text-white transition-colors cursor-pointer text-gray-200"
                >
                  {item.text}
                </Link>
                <span className="text-gray-600 font-bold ml-2">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right Utility: Search & Report (with red dot next to Report) */}
        <div className="flex items-center gap-3 pl-3 border-l border-gray-700/70 shrink-0 text-gray-300 text-[11px] font-medium">
          <Link
            href="/search"
            className="hover:text-white transition-colors"
            title="Search Three Points London"
          >
            Search
          </Link>
          <span className="text-gray-600">•</span>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            title="Report an issue or correction"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ember"></span>
            <span>Report</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

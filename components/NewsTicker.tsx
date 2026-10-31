"use client";

import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { TickerItem } from "@/lib/types";

interface NewsTickerProps {
  items: TickerItem[];
}

export default function NewsTicker({ items }: NewsTickerProps) {
  const activeItems = items.filter((i) => i.active);

  const getClubDashColor = (club?: string) => {
    if (club === "arsenal") return "bg-[#E8192C]";
    if (club === "chelsea") return "bg-[#1C6BB0]";
    return "bg-[#3B82F6]";
  };

  return (
    <div className="bg-[#1D2B45] text-white border-b border-[#2B3C5C] text-[11px] font-semibold select-none z-30">
      <div className="w-full flex items-center h-8 sm:h-9 px-3 sm:px-6 md:px-8 lg:px-10">
        {/* LATEST Chip with Red Dot (Strictly as Mockup Image 2) */}
        <div className="flex items-center gap-1.5 pr-2.5 sm:pr-3 border-r border-[#2B3C5C] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CE3426] animate-pulse"></span>
          <span className="text-white font-black uppercase text-[10px] tracking-wider">
            LATEST
          </span>
        </div>

        {/* Marquee viewport */}
        <div className="flex-1 overflow-hidden relative mx-2 sm:mx-3 h-full flex items-center">
          <div className="animate-ticker flex items-center whitespace-nowrap gap-5 text-gray-200">
            {activeItems.map((item, idx) => (
              <span key={`ticker-1-${item.id}-${idx}`} className="inline-flex items-center gap-2">
                <span className={`w-3 h-[2px] rounded-full ${getClubDashColor(item.club)} shrink-0`}></span>
                <Link
                  href={item.link || `/${item.club}`}
                  className="hover:text-white transition-colors cursor-pointer text-gray-100 font-medium"
                >
                  {item.text}
                </Link>
                <span className="text-[#CE3426] font-bold ml-2">•</span>
              </span>
            ))}
            {/* Duplicate for seamless infinite loop */}
            {activeItems.map((item, idx) => (
              <span key={`ticker-2-${item.id}-${idx}`} className="inline-flex items-center gap-2">
                <span className={`w-3 h-[2px] rounded-full ${getClubDashColor(item.club)} shrink-0`}></span>
                <Link
                  href={item.link || `/${item.club}`}
                  className="hover:text-white transition-colors cursor-pointer text-gray-100 font-medium"
                >
                  {item.text}
                </Link>
                <span className="text-[#CE3426] font-bold ml-2">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right utility links (Search with Magnifying Glass Icon & Report, exactly matching marquee news font) */}
        <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-[#2B3C5C] shrink-0 text-[11px] font-semibold text-gray-200">
          <Link
            href="/search"
            className="inline-flex items-center gap-1.5 text-gray-200 hover:text-white transition-colors font-medium"
            title="Search newsroom"
          >
            <Search className="w-3.5 h-3.5 text-gray-300" strokeWidth={2.5} />
            <span>Search</span>
          </Link>
          <span className="text-gray-400 font-bold">•</span>
          <Link
            href="/contact#feedback"
            className="flex items-center gap-1.5 text-gray-200 hover:text-white transition-colors font-medium"
            title="Report an issue or correction"
          >
            <span>Report</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

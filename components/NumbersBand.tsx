import React from "react";
import Link from "next/link";
import { DataStat } from "@/lib/types";

interface NumbersBandProps {
  stats?: Record<string, DataStat>;
}

export default function NumbersBand({ stats }: NumbersBandProps) {
  const items = [
    {
      key: "arsenal",
      stat: "1.42",
      label: "Arsenal xGA per game",
      subtext: "Up from 0.91 at the same stage last season",
      linkText: "The press is working. The rest-defence is not.",
      slug: "the-press-is-working-the-rest-defence-is-not",
    },
    {
      key: "chelsea",
      stat: "68%",
      label: "Chelsea build-up success",
      subtext: "Third in the division under Alonso",
      linkText: "Alonso's build-up has changed three times in six weeks",
      slug: "alonsos-build-up-has-changed-three-times",
    },
    {
      key: "tottenham",
      stat: "+14",
      label: "Spurs progressive passes",
      subtext: "Per 90 since the De Zerbi switch",
      linkText: "De Zerbi's rebuild in five numbers",
      slug: "de-zerbi-spurs-rebuild-in-five-numbers",
    },
  ];

  return (
    <section className="bg-[#1D2B45] text-white p-5 sm:p-7 md:p-9 rounded-2xl my-6 sm:my-8 shadow-md">
      {/* Header Row: Increased title and arrow by >30% */}
      <div className="flex items-center justify-between pb-3.5 sm:pb-4.5 border-b border-[#2B3C5C] mb-5 sm:mb-7">
        <h2 className="font-display font-black text-sm sm:text-base lg:text-lg tracking-wider uppercase text-white">
          THE NUMBERS BEHIND THE FOOTBALL
        </h2>
        <Link
          href="/features"
          className="text-xs sm:text-sm font-bold text-gray-200 hover:text-white transition-colors flex items-center gap-1.5 group"
          title="Data led features"
        >
          <span>Data led features</span>
          <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Responsive Grid: Horizontal swipeable cards on mobile, 3-col on desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 gap-4 sm:gap-6 pb-2 md:pb-0">
        {items.map((item) => (
          <div
            key={item.key}
            className={`min-w-[260px] xs:min-w-[280px] sm:min-w-0 snap-start bg-[#142036] p-5 sm:p-6 lg:p-7 rounded-xl border border-[#23334F] flex flex-col justify-between flex-1 shadow-md hover:border-slate-500 transition-all ${
              item.key === "arsenal"
                ? "border-t-4 border-t-[#E8192C]"
                : item.key === "chelsea"
                ? "border-t-4 border-t-[#1C6BB0]"
                : "border-t-4 border-t-[#24376B]"
            }`}
          >
            <div>
              {/* Reduced decorative number by approximately 50% for optimal balance */}
              <div className="font-display font-black text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-white tracking-tight mb-2 sm:mb-2.5">
                {item.stat}
              </div>
              <div className="text-sm sm:text-base font-extrabold text-white mb-1 leading-snug">
                {item.label}
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 font-normal leading-relaxed">
                {item.subtext}
              </div>
            </div>

            <Link
              href={`/article/${item.slug}`}
              className="text-xs sm:text-sm font-bold text-[#FF7E67] hover:underline flex items-center gap-1.5 group"
            >
              <span>{item.linkText}</span>
              <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

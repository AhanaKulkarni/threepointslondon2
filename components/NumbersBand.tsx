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
      linkText: "The press is working. The rest-defence is not. →",
      slug: "the-press-is-working-the-rest-defence-is-not",
    },
    {
      key: "chelsea",
      stat: "68%",
      label: "Chelsea build-up success",
      subtext: "Third in the division under Alonso",
      linkText: "Alonso's build-up has changed three times in six weeks →",
      slug: "alonsos-build-up-has-changed-three-times",
    },
    {
      key: "tottenham",
      stat: "+14",
      label: "Spurs progressive passes",
      subtext: "Per 90 since the De Zerbi switch",
      linkText: "De Zerbi's rebuild in five numbers →",
      slug: "de-zerbi-spurs-rebuild-in-five-numbers",
    },
  ];

  return (
    <section className="bg-[#1D2B45] text-white p-4 sm:p-6 md:p-8 rounded-sm my-6 sm:my-8 shadow-sm">
      {/* Header Row (Image 2) */}
      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#2B3C5C] mb-4 sm:mb-6">
        <h2 className="font-display font-black text-xs sm:text-sm tracking-wider uppercase text-white">
          THE NUMBERS BEHIND THE FOOTBALL
        </h2>
        <Link
          href="/features"
          className="text-[11px] sm:text-xs font-bold text-gray-300 hover:text-white transition-colors"
          title="Explore Data-led features page"
        >
          Explore all features →
        </Link>
      </div>

      {/* Responsive Grid: Horizontal swipeable cards on mobile, 3-col on desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 gap-3 sm:gap-6 pb-2 md:pb-0">
        {items.map((item) => (
          <div
            key={item.key}
            className={`min-w-[250px] xs:min-w-[270px] sm:min-w-0 snap-start bg-[#142036] p-5 sm:p-6 lg:p-8 rounded-xs border border-[#23334F] flex flex-col justify-between flex-1 shadow-md hover:border-slate-500 transition-colors ${
              item.key === "arsenal"
                ? "border-t-4 border-t-[#E8192C]"
                : item.key === "chelsea"
                ? "border-t-4 border-t-[#1C6BB0]"
                : "border-t-4 border-t-[#24376B]"
            }`}
          >
            <div>
              <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight mb-2 sm:mb-3">
                {item.stat}
              </div>
              <div className="text-sm sm:text-base font-extrabold text-white mb-1 sm:mb-1.5 leading-snug">
                {item.label}
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 font-normal leading-relaxed">
                {item.subtext}
              </div>
            </div>

            <Link
              href={`/article/${item.slug}`}
              className="text-xs sm:text-sm font-bold text-[#FF7E67] hover:underline flex items-center gap-1"
            >
              <span>{item.linkText}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

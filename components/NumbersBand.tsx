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
    <section className="bg-[#1D2B45] text-white p-5 sm:p-8 rounded-sm my-8">
      {/* Header Row */}
      <div className="flex items-center justify-between pb-4 border-b border-[#2B3C5C] mb-6">
        <h2 className="font-display font-black text-xs sm:text-sm tracking-wider uppercase text-white">
          THE NUMBERS BEHIND THE FOOTBALL
        </h2>
        <Link
          href="/arsenal?desk=features"
          className="text-xs font-bold text-gray-300 hover:text-white transition-colors"
        >
          Data-led features →
        </Link>
      </div>

      {/* Responsive Grid: Horizontal swipeable cards on mobile, 3-col on desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 gap-4 sm:gap-6 pb-2 md:pb-0">
        {items.map((item) => (
          <div
            key={item.key}
            className="min-w-[270px] sm:min-w-0 snap-start bg-[#142036] p-5 sm:p-6 rounded-xs border border-[#23334F] flex flex-col justify-between flex-1"
          >
            <div>
              <div className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-2">
                {item.stat}
              </div>
              <div className="text-xs font-bold text-white mb-1">
                {item.label}
              </div>
              <div className="text-xs text-gray-400 mb-6 font-normal">
                {item.subtext}
              </div>
            </div>

            <Link
              href={`/article/${item.slug}`}
              className="text-xs font-semibold text-[#FF7E67] hover:underline"
            >
              {item.linkText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

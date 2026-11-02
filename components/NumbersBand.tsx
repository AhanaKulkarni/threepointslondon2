import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      subtext: "Up from 0.91 at the same stage last season · +56% rise concentrated in defensive transition",
      title: "The press is working. The rest-defence is not.",
      slug: "the-press-is-working-the-rest-defence-is-not",
      clubColor: "text-[#E8192C]",
      borderColor: "hover:border-[#E8192C]/60",
    },
    {
      key: "chelsea",
      stat: "68%",
      label: "Chelsea build-up success",
      subtext: "Third in the division under Alonso · Phase-one inverted fullback patterns",
      title: "Alonso's build-up has changed three times in six weeks",
      slug: "alonsos-build-up-has-changed-three-times",
      clubColor: "text-[#1C6BB0]",
      borderColor: "hover:border-[#1C6BB0]/60",
    },
    {
      key: "tottenham",
      stat: "+14",
      label: "Spurs progressive passes",
      subtext: "Per 90 since the De Zerbi switch · Vertical ball progression vs counter exposure",
      title: "De Zerbi's rebuild in five numbers",
      slug: "de-zerbi-spurs-rebuild-in-five-numbers",
      clubColor: "text-[#3B82F6]",
      borderColor: "hover:border-[#3B82F6]/60",
    },
  ];

  return (
    <section className="bg-[#1D2B45] text-white p-6 sm:p-9 lg:p-10 rounded-xs my-8 shadow-sm">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#2B3C5C] mb-6 sm:mb-8 gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E8192C] animate-pulse"></span>
          <h2 className="font-display font-black text-sm sm:text-base tracking-wider uppercase text-white">
            THE NUMBERS BEHIND THE FOOTBALL
          </h2>
        </div>
        <Link
          href="/features"
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-200 hover:text-white transition-colors"
          title="Open Data-led features page"
        >
          <span>Data-led features</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#FF7E67]" />
        </Link>
      </div>

      {/* Responsive Grid: Prominent, spacious key cards with enlarged numbers */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 pb-2 md:pb-0">
        {items.map((item) => (
          <div
            key={item.key}
            className={`min-w-[280px] sm:min-w-0 snap-start bg-[#142036] p-6 sm:p-8 lg:p-9 rounded-xs border border-[#23334F] ${item.borderColor} flex flex-col justify-between flex-1 transition-all shadow-xs group`}
          >
            <div>
              {/* Giant Key Stat Number (Significantly enlarged key size per feedback) */}
              <div className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight mb-3 leading-none group-hover:text-gray-100 transition-colors">
                {item.stat}
              </div>
              <div className="text-sm sm:text-base font-bold text-white mb-2 tracking-tight">
                {item.label}
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mb-8 font-normal leading-relaxed">
                {item.subtext}
              </div>
            </div>

            {/* Link with robust inline arrow (No wrapping or broken symbols) */}
            <Link
              href={`/article/${item.slug}`}
              className="pt-4 border-t border-[#23334F] flex items-center justify-between text-xs sm:text-sm font-bold text-[#FF7E67] hover:text-[#FFA08F] transition-colors group/link"
              title={item.title}
            >
              <span className="leading-snug pr-2">{item.title}</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

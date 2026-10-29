import React from "react";
import Link from "next/link";
import { getSiteData } from "@/lib/store";
import AdSlot from "@/components/AdSlot";

export const metadata = {
  title: "About Us · Founder & Editor | Three Points London",
  description: "One city. Three clubs. One newsroom that covers nothing else. Three Points London is an independent publication covering Arsenal, Chelsea, and Tottenham Hotspur.",
};

export default function AboutPage() {
  const siteData = getSiteData();
  const founder = siteData.authors[0] || {
    name: "Vayam Lahoti",
    role: "Founder & Editor",
    desk: "Arsenal, data and recruitment",
    bio: "Founder and Editor of Three Points London. Journalism graduate of the University of Sheffield (BA Journalism Studies, 2023), previously editorial lead at a Premier League club brand with an audience of 2.5 million. Writes on tactics, recruitment and the numbers underneath both. Former semi-professional footballer.",
    initials: "VL",
    slug: "vayam-lahoti",
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-10">
      {/* Hero with Clickable Logo */}
      <div className="max-w-3xl pb-8 border-b border-hairline mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
          <Link href="/" title="Three Points London - Return to Home" className="inline-block cursor-pointer">
            <img
              src="/logo.png"
              alt="Three Points London"
              className="h-8 sm:h-10 w-auto object-contain max-w-[280px] cursor-pointer"
            />
          </Link>
          <div className="hidden sm:block border-l border-hairline pl-4">
            <Link href="/" title="Three Points London - Return to Home" className="inline-block cursor-pointer">
              <img
                src="/tagline.png"
                alt="One City. Three Clubs. Endless Passion."
                className="h-4 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-muted block mt-2">
          ABOUT · WHO WE ARE
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-navy uppercase leading-tight mt-1 mb-4">
          One city. Three clubs. One newsroom that covers nothing else.
        </h1>
        <p className="font-body text-lg sm:text-xl text-[#333] leading-relaxed">
          Three Points London is an independent publication covering Arsenal, Chelsea and Tottenham Hotspur. We are not affiliated with, endorsed by, or connected to any of them — and that independence is the point.
        </p>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-surface p-6 border border-hairline rounded-xs">
          <div className="font-display font-black text-4xl text-navy mb-2">15</div>
          <div className="font-headline font-bold text-sm text-navy uppercase mb-1">
            Pieces a day
          </div>
          <p className="text-xs text-muted leading-relaxed">
            Across all three desks, seven days a week. Original reporting, data analysis, and tactical explainers.
          </p>
        </div>
        <div className="bg-surface p-6 border border-hairline rounded-xs">
          <div className="font-display font-black text-4xl text-ember mb-2">100%</div>
          <div className="font-headline font-bold text-sm text-navy uppercase mb-1">
            Human-edited
          </div>
          <p className="text-xs text-muted leading-relaxed">
            Every piece carries a named byline and a verified standard of reporting and data analysis.
          </p>
        </div>
        <div className="bg-surface p-6 border border-hairline rounded-xs">
          <div className="font-display font-black text-4xl text-indigo mb-2">0</div>
          <div className="font-headline font-bold text-sm text-navy uppercase mb-1">
            Club affiliations
          </div>
          <p className="text-xs text-muted leading-relaxed">
            No access deals, no approval rights, no soft questions. Independent London journalism.
          </p>
        </div>
      </div>

      {/* Founder's Vision */}
      <section id="founder-vision" className="my-12 p-8 bg-[#1D2B45] text-white rounded-xs">
        <div className="max-w-3xl">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
            FOUNDER'S VISION
          </span>
          <blockquote className="font-display font-extrabold text-xl sm:text-2xl text-gray-100 leading-snug my-4">
            "I spent five years writing about one club for an audience of two and a half million. The thing I kept running into was that the reader always wanted more than anyone had time to give them."
          </blockquote>
          <div className="flex items-center gap-3 mt-4">
            <span className="w-10 h-10 rounded-full bg-ember text-white flex items-center justify-center font-black text-xs">
              V
            </span>
            <div>
              <span className="font-headline font-bold text-sm text-white block">
                Vayam Lahoti
              </span>
              <span className="text-xs text-gray-400">Founder & Editor</span>
            </div>
          </div>
          <p className="font-body text-sm sm:text-base text-gray-300 leading-relaxed mt-6">
            Three Points London exists because the gap between what football supporters are offered and what they actually want has never been wider. The volume is there. The depth is not. Aggregation has flooded the market, and the honest version of this business is that most sites covering these clubs would be indistinguishable if you removed their logos.
          </p>
          <p className="font-body text-sm sm:text-base text-gray-300 leading-relaxed mt-4">
            The plan is narrow on purpose: Three clubs, one city, six sections each. Every desk run by someone who covers that club and nothing else. Data treated as reporting rather than decoration.
          </p>
        </div>
      </section>

      {/* Founder & Editor (Sole Writer - Team Removed) */}
      <section className="my-12">
        <div className="pb-3 border-b border-hairline mb-8">
          <h2 className="font-display font-extrabold text-xl text-navy uppercase">
            Founder & Editor
          </h2>
          <p className="text-xs text-muted">
            Independent coverage of Arsenal, Chelsea, and Tottenham Hotspur.
          </p>
        </div>

        <div className="max-w-xl border border-hairline p-6 sm:p-7 rounded-xs bg-white shadow-2xs">
          <div className="w-14 h-14 rounded-full bg-[#1D2B45] text-white flex items-center justify-center font-display font-black text-lg mb-4">
            {founder.initials || "VL"}
          </div>
          <Link
            href={`/author/${founder.slug}`}
            className="font-headline font-bold text-xl text-navy hover:text-indigo block"
          >
            {founder.name}
          </Link>
          <span className="text-xs font-semibold text-muted block mb-3">
            {founder.role} · {founder.desk}
          </span>
          <p className="text-xs sm:text-sm text-[#444] leading-relaxed mb-4">
            {founder.bio}
          </p>
          <Link
            href={`/author/${founder.slug}`}
            className="text-xs font-bold text-indigo hover:text-ember inline-flex items-center gap-1.5"
          >
            <span>View Profile & Archive</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      <AdSlot id="billboard_970x250" label="AD — 970×250 BILLBOARD · TRUST TEMPLATE" />
    </div>
  );
}

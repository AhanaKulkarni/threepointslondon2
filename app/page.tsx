import React from "react";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import MostRead from "@/components/MostRead";
import NumbersBand from "@/components/NumbersBand";
import CommunityTeaser from "@/components/CommunityTeaser";
import EditorialGraphic from "@/components/EditorialGraphic";
import { getSiteData } from "@/lib/store";

export const revalidate = 0;

export default function HomePage() {
  const siteData = getSiteData();

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 space-y-8">
      {/* ========================================================
          1. HERO MAGAZINE COVER: Lead Feature + 2 Priority Pieces
         ======================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Lead Feature Card with Dark Wave Graphic Background (7 cols) */}
        <div className="lg:col-span-7 bg-[#1D2B45] text-white rounded-xs p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
          {/* Subtle Abstract Wave / Sun Background */}
          <EditorialGraphic type="dark-hero" className="absolute inset-0 z-0" />

          {/* Foreground Content */}
          <div className="relative z-10">
            {/* Badges: EXCLUSIVE + — ARSENAL • DATA */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="bg-[#CE3426] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-xs tracking-wider">
                EXCLUSIVE
              </span>
              <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-gray-300">
                <span className="w-3 h-[2px] bg-[#E8192C]"></span>
                <span className="text-white">ARSENAL</span>
                <span className="text-gray-400">•</span>
                <span>DATA</span>
              </div>
            </div>

            {/* Headline */}
            <Link
              href="/article/the-press-is-working-the-rest-defence-is-not"
              className="block font-display font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-4 group-hover:text-gray-200 transition-colors"
            >
              Revealed: Why Three Points London will break the football media market and make £10,000 gross per month from month six
            </Link>

            {/* Excerpt */}
            <p className="font-body text-sm sm:text-base text-gray-300 leading-relaxed mb-6 max-w-2xl font-normal">
              Eleven games into the title defence, one phase of play accounts for almost all of
              Arsenal's rise in expected goals against — and it is not the one everyone is arguing
              about.
            </p>
          </div>

          {/* Byline */}
          <div className="relative z-10 pt-4 border-t border-[#2D3F63] text-xs text-gray-400 font-medium">
            Vayam Lahoti · 6 min read · 2 hours ago
          </div>
        </div>

        {/* Right: 2 Stacked Priority Pieces (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          {/* Card 1: Chelsea Transfers */}
          <div className="group flex flex-col justify-between">
            <Link
              href="/article/chelsea-wage-structure-question-before-january"
              className="block aspect-[16/7] w-full rounded-xs overflow-hidden mb-3"
            >
              <EditorialGraphic type="contour" />
            </Link>
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-3 h-[2px] bg-[#1C6BB0]"></span>
                <span className="text-[10px] font-black uppercase tracking-wider text-muted">
                  CHELSEA • TRANSFERS
                </span>
              </div>
              <Link
                href="/article/chelsea-wage-structure-question-before-january"
                className="font-headline font-bold text-base sm:text-lg text-ink group-hover:text-indigo transition-colors leading-snug block mb-2"
              >
                The wage-structure question Chelsea must answer before January
              </Link>
            </div>
            <div className="text-[11px] text-muted font-medium">
              Nathan Reeves · 4 hours ago
            </div>
          </div>

          {/* Card 2: Tottenham Features */}
          <div className="group flex flex-col justify-between pt-4 border-t border-hairline">
            <Link
              href="/article/de-zerbi-spurs-rebuild-in-five-numbers"
              className="block aspect-[16/7] w-full rounded-xs overflow-hidden mb-3"
            >
              <EditorialGraphic type="contour" />
            </Link>
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-3 h-[2px] bg-[#24376B]"></span>
                <span className="text-[10px] font-black uppercase tracking-wider text-muted">
                  TOTTENHAM • FEATURES
                </span>
              </div>
              <Link
                href="/article/de-zerbi-spurs-rebuild-in-five-numbers"
                className="font-headline font-bold text-base sm:text-lg text-ink group-hover:text-indigo transition-colors leading-snug block mb-2"
              >
                De Zerbi's rebuild in five numbers: progression up, control down
              </Link>
            </div>
            <div className="text-[11px] text-muted font-medium">
              Amelia Hart · 6 hours ago
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. AD — 970×250 BILLBOARD
         ======================================================== */}
      <AdSlot
        id="billboard_970x250"
        label="AD — 970×250 BILLBOARD · BELOW THE LEAD STORY, HEIGHT RESERVED"
      />

      {/* ========================================================
          3. THE THREE DESKS (Arsenal, Chelsea, Tottenham)
         ======================================================== */}
      <section className="w-full">
        {/* Section Header with Line */}
        <div className="flex items-center gap-4 pb-3 border-b border-hairline mb-6">
          <h2 className="font-display font-black text-sm uppercase tracking-wider text-navy shrink-0">
            THE THREE DESKS
          </h2>
          <div className="h-[1px] bg-hairline flex-1 hidden sm:block"></div>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. ARSENAL */}
          <div className="group flex flex-col justify-between">
            <div>
              {/* Header with Red Bar */}
              <div className="flex items-center justify-between pb-1.5 mb-3 border-b-2 border-b-[#E8192C]">
                <h3 className="font-display font-black text-xs uppercase tracking-wider text-navy">
                  ARSENAL
                </h3>
                <Link
                  href="/arsenal"
                  className="text-[11px] font-bold text-navy hover:text-[#E8192C] transition-colors"
                >
                  All Arsenal →
                </Link>
              </div>

              {/* Lead Story for Arsenal */}
              <div className="mb-4">
                <Link
                  href="/article/player-ratings-three-standouts-villa-park"
                  className="block aspect-[16/9] w-full rounded-xs overflow-hidden mb-2.5"
                >
                  <EditorialGraphic type="contour" />
                </Link>
                <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-1">
                  MATCHDAY
                </div>
                <Link
                  href="/article/player-ratings-three-standouts-villa-park"
                  className="font-headline font-bold text-sm sm:text-base text-ink group-hover:text-indigo transition-colors leading-snug block"
                >
                  Player ratings: three standouts and one real worry at Villa Park
                </Link>
              </div>

              {/* Sub-articles List */}
              <div className="space-y-3 pt-3 border-t border-hairline/60">
                <Link
                  href="/article/ranked-eight-champions-league-opponents"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug"
                >
                  Ranked: the eight Champions League opponents, easiest to hardest
                </Link>
                <Link
                  href="/article/single-pivot-problem-explained-touch-maps"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug pt-3 border-t border-hairline/60"
                >
                  The single-pivot problem, explained with every touch map
                </Link>
                <Link
                  href="/article/why-january-is-already-decided-at-emirates"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug pt-3 border-t border-hairline/60"
                >
                  Why the January window is already decided at the Emirates
                </Link>
              </div>
            </div>
          </div>

          {/* 2. CHELSEA */}
          <div className="group flex flex-col justify-between">
            <div>
              {/* Header with Blue Bar */}
              <div className="flex items-center justify-between pb-1.5 mb-3 border-b-2 border-b-[#1C6BB0]">
                <h3 className="font-display font-black text-xs uppercase tracking-wider text-navy">
                  CHELSEA
                </h3>
                <Link
                  href="/chelsea"
                  className="text-[11px] font-bold text-navy hover:text-[#1C6BB0] transition-colors"
                >
                  All Chelsea →
                </Link>
              </div>

              {/* Lead Story for Chelsea (Pitch Graphic) */}
              <div className="mb-4">
                <Link
                  href="/article/alonsos-build-up-has-changed-three-times"
                  className="block aspect-[16/9] w-full rounded-xs overflow-hidden mb-2.5"
                >
                  <EditorialGraphic type="pitch" />
                </Link>
                <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-1">
                  FEATURES
                </div>
                <Link
                  href="/article/alonsos-build-up-has-changed-three-times"
                  className="font-headline font-bold text-sm sm:text-base text-ink group-hover:text-indigo transition-colors leading-snug block"
                >
                  Alonso's build-up has changed three times in six weeks — here is the pattern
                </Link>
              </div>

              {/* Sub-articles List */}
              <div className="space-y-3 pt-3 border-t border-hairline/60">
                <Link
                  href="/article/cobhams-class-of-2026-six-names-tracking"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug"
                >
                  Cobham's class of 2026: six names the first team is tracking
                </Link>
                <Link
                  href="/article/what-registration-rules-permit-in-january"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug pt-3 border-t border-hairline/60"
                >
                  What the registration rules actually permit in January
                </Link>
                <Link
                  href="/article/stamford-bridge-redevelopment-where-plans-stand"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug pt-3 border-t border-hairline/60"
                >
                  Stamford Bridge redevelopment: where the plans stand
                </Link>
              </div>
            </div>
          </div>

          {/* 3. TOTTENHAM */}
          <div className="group flex flex-col justify-between">
            <div>
              {/* Header with Navy Bar */}
              <div className="flex items-center justify-between pb-1.5 mb-3 border-b-2 border-b-[#24376B]">
                <h3 className="font-display font-black text-xs uppercase tracking-wider text-navy">
                  TOTTENHAM
                </h3>
                <Link
                  href="/tottenham"
                  className="text-[11px] font-bold text-navy hover:text-[#24376B] transition-colors"
                >
                  All Tottenham →
                </Link>
              </div>

              {/* Lead Story for Spurs */}
              <div className="mb-4">
                <Link
                  href="/article/inside-recruitment-meeting-reshaped-spurs-shortlist"
                  className="block aspect-[16/9] w-full rounded-xs overflow-hidden mb-2.5"
                >
                  <EditorialGraphic type="contour" />
                </Link>
                <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-1">
                  EXCLUSIVES
                </div>
                <Link
                  href="/article/inside-recruitment-meeting-reshaped-spurs-shortlist"
                  className="font-headline font-bold text-sm sm:text-base text-ink group-hover:text-indigo transition-colors leading-snug block"
                >
                  Inside the recruitment meeting that reshaped the Spurs shortlist
                </Link>
              </div>

              {/* Sub-articles List */}
              <div className="space-y-3 pt-3 border-t border-hairline/60">
                <Link
                  href="/article/trophy-in-february-would-change-everything-spurs"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug"
                >
                  A trophy in February would change everything — and the draw says it is on
                </Link>
                <Link
                  href="/article/academy-graduate-quietly-outplaying-45m-signing"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug pt-3 border-t border-hairline/60"
                >
                  The academy graduate quietly outplaying a £45m signing
                </Link>
                <Link
                  href="/article/transfers-three-positions-spurs-will-not-leave-until-summer"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug pt-3 border-t border-hairline/60"
                >
                  Transfers: the three positions Spurs will not leave until summer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. THE NUMBERS BEHIND THE FOOTBALL
         ======================================================== */}
      <NumbersBand stats={siteData.dataStats} />

      {/* ========================================================
          5. MOST READ & STICKY HALF-PAGE AD (8 cols + 4 cols)
         ======================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <MostRead />
        </div>

        {/* Right Rail: 300x600 Half-Page Ad */}
        <div className="lg:col-span-4 sticky top-20">
          <AdSlot
            id="rail_300x600"
            label="AD — 300×600 HALF-PAGE · STICKY · SEQUENTIAL: 2–3 CREATIVES PER SCROLL · 30s VIEWABLE REFRESH"
          />
        </div>
      </section>

      {/* ========================================================
          6. COMMUNITY ROOMS
         ======================================================== */}
      <CommunityTeaser />
    </div>
  );
}

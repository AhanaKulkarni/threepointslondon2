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
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 py-5 sm:py-7 space-y-8 sm:space-y-12 overflow-x-hidden">
      {/* ========================================================
          1. HERO MAGAZINE COVER (Desktop & Mobile - Images 1 & 5)
         ======================================================== */}
      {/* DESKTOP HERO (Horizontally stretched, headline & text 100% visible above fold) */}
      <section className="hidden lg:grid grid-cols-12 gap-5 xl:gap-7 items-stretch">
        {/* Left: Lead Feature Card stretched horizontally with Text ON Image fully visible (7 or 8 cols) */}
        <Link
          href="/article/the-press-is-working-the-rest-defence-is-not"
          title="The press is working. The rest-defence is not."
          className="col-span-7 relative h-[440px] lg:h-[460px] xl:h-[480px] rounded-xl overflow-hidden group shadow-2xl drop-shadow-xl border border-white/10 flex flex-col justify-end bg-slate-900 block cursor-pointer"
        >
          {/* Action Image Background */}
          <img
            src="/articles/the-press-is-working.jpg"
            alt="The press is working. The rest-defence is not."
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Deep Dark Bottom Gradient Scrim for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/15 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#0e1626] via-[#0e1626]/85 to-transparent pointer-events-none" />

          {/* Text ON the Image with Dropshadow Widget Styling - 100% visible above fold */}
          <div className="relative z-10 p-5 sm:p-6 lg:p-7 flex flex-col justify-end pointer-events-none">
            <div className="flex items-center gap-2 mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              <span className="bg-[#CE3426] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-xl tracking-wider shadow-md">
                EXCLUSIVE
              </span>
              <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                <span className="w-3 h-[2px] bg-[#E8192C] shadow-sm"></span>
                <span className="text-white">ARSENAL</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-200">TACTICS</span>
              </div>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] text-white leading-tight mb-2 drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)] group-hover:text-gray-100 transition-colors">
              The press is working. The rest-defence is not.
            </h2>

            <p className="font-body text-xs sm:text-sm lg:text-[15px] text-gray-200 leading-snug mb-2.5 max-w-2xl font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] line-clamp-2">
              Eleven games into the title defence, one phase of play accounts for almost all of
              Arsenal's rise in expected goals against — and it is not the one everyone is arguing
              about.
            </p>

            {/* Below Line with Dropshadow and Byline */}
            <div className="pt-2 border-t border-white/25 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-xs text-gray-200 font-medium flex items-center justify-between">
              <span className="drop-shadow-md">Vayam Lahoti · 6 min read</span>
              <span className="text-gray-300 drop-shadow-md">2 hours ago</span>
            </div>
          </div>
        </Link>

        {/* Right: 2 Stacked Priority Pieces (5 cols on lg, 4 cols on xl) */}
        <div className="col-span-5 flex flex-col justify-between gap-3 sm:gap-4">
          {/* Card 1: Chelsea Transfers */}
          <div className="group flex flex-col justify-between">
            <Link
              href="/article/chelsea-wage-structure-question-before-january"
              className="block aspect-[16/8.5] w-full rounded-xl overflow-hidden mb-2 relative bg-slate-100 group/img shadow-md drop-shadow-xs border border-hairline/80 cursor-pointer"
              title="The wage-structure question Chelsea must answer before January"
            >
              <img
                src="/articles/chelsea-wage-structure.jpg"
                alt="Chelsea Transfers"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"></div>
            </Link>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-3 h-[2px] bg-[#1C6BB0]"></span>
                <span className="text-[10px] font-black uppercase tracking-wider text-muted">
                  CHELSEA • TRANSFERS
                </span>
              </div>
              <Link
                href="/article/chelsea-wage-structure-question-before-january"
                className="font-headline font-bold text-sm sm:text-base lg:text-[16px] text-ink group-hover:text-indigo transition-colors leading-snug block mb-1"
              >
                The wage-structure question Chelsea must answer before January
              </Link>
            </div>
            <div className="text-[11px] text-muted font-medium">
              Nathan Reeves · 4 hours ago
            </div>
          </div>

          {/* Card 2: Tottenham Features */}
          <div className="group flex flex-col justify-between pt-3 border-t border-hairline">
            <Link
              href="/article/de-zerbi-spurs-rebuild-in-five-numbers"
              className="block aspect-[16/8.5] w-full rounded-xl overflow-hidden mb-2 relative bg-slate-100 group/img shadow-md drop-shadow-xs border border-hairline/80 cursor-pointer"
              title="De Zerbi's rebuild in five numbers: progression up, control down"
            >
              <img
                src="/articles/de-zerbi-spurs.jpg"
                alt="Tottenham Features"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"></div>
            </Link>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-3 h-[2px] bg-[#24376B]"></span>
                <span className="text-[10px] font-black uppercase tracking-wider text-muted">
                  TOTTENHAM • FEATURES
                </span>
              </div>
              <Link
                href="/article/de-zerbi-spurs-rebuild-in-five-numbers"
                className="font-headline font-bold text-sm sm:text-base lg:text-[16px] text-ink group-hover:text-indigo transition-colors leading-snug block mb-1"
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

      {/* MOBILE HERO (Strictly matching Image 5) */}
      <section className="block lg:hidden space-y-4">
        {/* Mobile Lead Card with Direct Photo Link, Text ON Image, and Dropshadow */}
        <Link
          href="/article/the-press-is-working-the-rest-defence-is-not"
          title="The press is working. The rest-defence is not."
          className="relative min-h-[380px] sm:min-h-[440px] rounded-xs overflow-hidden shadow-2xl drop-shadow-xl p-5 sm:p-6 flex flex-col justify-end text-white group border border-white/10 bg-slate-900 block cursor-pointer"
        >
          <img
            src="/articles/the-press-is-working.jpg"
            alt="The press is working. The rest-defence is not."
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#0e1626] via-[#0e1626]/85 to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-2 pointer-events-none">
            <div className="flex items-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              <span className="bg-[#CE3426] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-xs tracking-wider shadow-md">
                EXCLUSIVE
              </span>
              <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-white">
                <span className="w-2.5 h-[2px] bg-[#E8192C]"></span>
                <span>ARSENAL · DATA</span>
              </div>
            </div>

            <h2 className="font-display font-black text-xl sm:text-2xl text-white leading-tight drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)] group-hover:text-gray-200 transition-colors">
              The press is working. The rest-defence is not.
            </h2>

            <p className="font-body text-xs sm:text-sm text-gray-200 leading-relaxed font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] line-clamp-2">
              Eleven games into the title defence, one phase of play accounts for almost all of
              Arsenal's rise in expected goals against — and it is not the one everyone is arguing
              about.
            </p>

            <div className="text-[11px] text-gray-200 font-medium pt-2.5 border-t border-white/25 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center justify-between">
              <span className="drop-shadow-md">Vayam Lahoti · 6 min read</span>
              <span className="text-gray-300 drop-shadow-md">2h ago</span>
            </div>
          </div>
        </Link>

        {/* 3 Secondary Stacked Stories with Right Dropshadow Thumbnail (Mockup Image 5) */}
        <div className="divide-y divide-hairline">
          {/* Story 1: Chelsea Transfers */}
          <div className="py-3.5 flex items-center justify-between gap-3 group">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2.5 h-[2px] bg-[#1C6BB0]"></span>
                <span className="text-[9px] font-black uppercase tracking-wider text-muted">
                  CHELSEA · TRANSFERS
                </span>
              </div>
              <Link
                href="/article/chelsea-wage-structure-question-before-january"
                className="font-headline font-bold text-sm text-ink leading-snug block mb-1 group-hover:text-indigo transition-colors"
              >
                The wage-structure question Chelsea must answer before January
              </Link>
              <div className="text-[10px] text-muted font-medium">Nathan Reeves · 4h</div>
            </div>
            <Link
              href="/article/chelsea-wage-structure-question-before-january"
              className="w-24 sm:w-28 aspect-[16/10] shrink-0 rounded-xs overflow-hidden block relative shadow-lg drop-shadow-sm border border-hairline/80 bg-slate-900"
              title="Chelsea Transfers"
            >
              <img
                src="/articles/chelsea-wage-structure.jpg"
                alt="Chelsea Transfers"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>

          {/* Story 2: Tottenham Features */}
          <div className="py-3.5 flex items-center justify-between gap-3 group">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2.5 h-[2px] bg-[#24376B]"></span>
                <span className="text-[9px] font-black uppercase tracking-wider text-muted">
                  TOTTENHAM · FEATURES
                </span>
              </div>
              <Link
                href="/article/de-zerbi-spurs-rebuild-in-five-numbers"
                className="font-headline font-bold text-sm text-ink leading-snug block mb-1 group-hover:text-indigo transition-colors"
              >
                De Zerbi's rebuild in five numbers
              </Link>
              <div className="text-[10px] text-muted font-medium">Amelia Hart · 6h</div>
            </div>
            <Link
              href="/article/de-zerbi-spurs-rebuild-in-five-numbers"
              className="w-24 sm:w-28 aspect-[16/10] shrink-0 rounded-xs overflow-hidden block relative shadow-lg drop-shadow-sm border border-hairline/80 bg-slate-900"
              title="Tottenham Features"
            >
              <img
                src="/articles/de-zerbi-spurs.jpg"
                alt="Tottenham Features"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>

          {/* Story 3: Arsenal Academy */}
          <div className="py-3.5 flex items-center justify-between gap-3 group">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2.5 h-[2px] bg-[#E8192C]"></span>
                <span className="text-[9px] font-black uppercase tracking-wider text-muted">
                  ARSENAL · ACADEMY
                </span>
              </div>
              <Link
                href="/article/four-hale-end-teenagers-train-first-team"
                className="font-headline font-bold text-sm text-ink leading-snug block mb-1 group-hover:text-indigo transition-colors"
              >
                The four Hale End teenagers who will train with the first team
              </Link>
              <div className="text-[10px] text-muted font-medium">Priya Shah · 9h</div>
            </div>
            <Link
              href="/article/four-hale-end-teenagers-train-first-team"
              className="w-24 sm:w-28 aspect-[16/10] shrink-0 rounded-xs overflow-hidden block relative shadow-lg drop-shadow-sm border border-hairline/80 bg-slate-900"
              title="Arsenal Academy"
            >
              <img
                src="/articles/hale-end-teenagers.jpg"
                alt="Arsenal Academy"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. AD — UNIT 1: 970×250 (Desktop) / 320×100 (Mobile)
         ======================================================== */}
      {/* Desktop Billboard (Image 1) */}
      <div className="hidden sm:block">
        <AdSlot
          id="billboard_970x250"
          label="AD — 970×250 BILLBOARD · BELOW THE LEAD STORY, HEIGHT RESERVED"
        />
      </div>
      {/* Mobile Ad 1 (Image 5) */}
      <div className="block sm:hidden">
        <AdSlot
          id="mobile_320x100"
          label={"AD — 320×100 · UNIT 1 OF 2\nFIRST AD, BELOW FOUR STORIES"}
        />
      </div>

      {/* ========================================================
          3. THE THREE DESKS (Desktop & Mobile - Images 1 & 5)
         ======================================================== */}
      {/* DESKTOP: 3 Columns Grid (Image 1) */}
      <section className="hidden md:block w-full">
        <div className="flex items-center gap-4 pb-3 border-b border-hairline mb-6">
          <h2 className="font-display font-black text-sm uppercase tracking-wider text-navy shrink-0">
            THE THREE DESKS
          </h2>
          <div className="h-[1px] bg-hairline flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          {/* 1. ARSENAL (Image 1) */}
          <div className="group flex flex-col justify-between">
            <div>
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

              {/* Lead Image with Dropshadow */}
              <div className="mb-4">
                <Link
                  href="/article/player-ratings-three-standouts-villa-park"
                  className="block aspect-[16/9] w-full rounded-xs overflow-hidden mb-2.5 relative shadow-lg drop-shadow-md border border-hairline/80 group/img bg-slate-900"
                  title="Player ratings: three standouts and one real worry at Villa Park"
                >
                  <img
                    src="/articles/villa-park-duel.jpg"
                    alt="Arsenal Matchday"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                  <span className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-white bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-xs tracking-wider uppercase border border-white/10 z-10">
                    MATCH ACTION
                  </span>
                </Link>
                <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-1">
                  MATCHDAY
                </div>
                <Link
                  href="/article/player-ratings-three-standouts-villa-park"
                  className="font-headline font-bold text-base sm:text-lg xl:text-xl text-ink group-hover:text-indigo transition-colors leading-snug block"
                >
                  Player ratings: three standouts and one real worry at Villa Park
                </Link>
              </div>

              {/* Secondary Stories matching Image 1 */}
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

          {/* 2. CHELSEA (Image 1: Tactical Pitch Lead Image!) */}
          <div className="group flex flex-col justify-between">
            <div>
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

              {/* Tactical Pitch Diagram Lead Image matching Image 1 */}
              <div className="mb-4">
                <Link
                  href="/article/alonsos-build-up-has-changed-three-times"
                  className="block aspect-[16/9] w-full rounded-xs overflow-hidden mb-2.5 relative shadow-lg drop-shadow-md border border-hairline/80 group/img bg-slate-900"
                  title="Alonso's build-up has changed three times in six weeks"
                >
                  <img
                    src="/articles/chelsea-alonso-tactics.jpg"
                    alt="Chelsea Tactics"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                  <span className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-white bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-xs tracking-wider uppercase border border-white/10 z-10">
                    TACTICAL MODEL
                  </span>
                </Link>
                <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-1">
                  FEATURES
                </div>
                <Link
                  href="/article/alonsos-build-up-has-changed-three-times"
                  className="font-headline font-bold text-base sm:text-lg xl:text-xl text-ink group-hover:text-indigo transition-colors leading-snug block"
                >
                  Alonso's build-up has changed three times in six weeks — here is the pattern
                </Link>
              </div>

              {/* Secondary Stories matching Image 1 */}
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
                  href="/article/stamford-bridge-redevelopment-plans"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug pt-3 border-t border-hairline/60"
                >
                  Stamford Bridge redevelopment: where the plans stand
                </Link>
              </div>
            </div>
          </div>

          {/* 3. TOTTENHAM (Image 1) */}
          <div className="group flex flex-col justify-between">
            <div>
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

              {/* Lead Image with Dropshadow */}
              <div className="mb-4">
                <Link
                  href="/article/inside-recruitment-meeting-reshaped-spurs-shortlist"
                  className="block aspect-[16/9] w-full rounded-xs overflow-hidden mb-2.5 relative shadow-lg drop-shadow-md border border-hairline/80 group/img bg-slate-900"
                  title="Inside the recruitment meeting that reshaped the Spurs shortlist"
                >
                  <img
                    src="/articles/spurs-recruitment-shortlist.jpg"
                    alt="Spurs Shortlist"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                  <span className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-white bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-xs tracking-wider uppercase border border-white/10 z-10">
                    SCOUTING REPORT
                  </span>
                </Link>
                <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-1">
                  EXCLUSIVES
                </div>
                <Link
                  href="/article/inside-recruitment-meeting-reshaped-spurs-shortlist"
                  className="font-headline font-bold text-base sm:text-lg xl:text-xl text-ink group-hover:text-indigo transition-colors leading-snug block"
                >
                  Inside the recruitment meeting that reshaped the Spurs shortlist
                </Link>
              </div>

              {/* Secondary Stories matching Image 1 */}
              <div className="space-y-3 pt-3 border-t border-hairline/60">
                <Link
                  href="/article/spurs-confirm-carabao-cup-quarter-final"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug"
                >
                  A trophy in February would change everything — and the draw says it is on
                </Link>
                <Link
                  href="/article/academy-graduate-outplaying-signing"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug pt-3 border-t border-hairline/60"
                >
                  The academy graduate quietly outplaying a £45m signing
                </Link>
                <Link
                  href="/article/inside-recruitment-meeting-reshaped-spurs-shortlist"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug pt-3 border-t border-hairline/60"
                >
                  Transfers: the three positions Spurs will not leave until summer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE: THE THREE DESKS (Image 5) */}
      <section className="block md:hidden space-y-6">
        <div className="flex items-center gap-4 pb-2 border-b border-hairline">
          <h2 className="font-display font-black text-sm uppercase tracking-wider text-navy shrink-0">
            THE THREE DESKS
          </h2>
          <div className="h-[1px] bg-hairline flex-1"></div>
        </div>

        {/* 1. ARSENAL (Image 5) */}
        <div>
          <div className="flex items-center justify-between pb-1.5 border-b-2 border-b-[#E8192C] mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-[2px] bg-[#E8192C]"></span>
              <h3 className="font-display font-black text-xs uppercase tracking-wider text-navy">
                ARSENAL
              </h3>
            </div>
            <Link
              href="/arsenal"
              className="text-[11px] font-bold text-[#2B4BC4] hover:underline"
            >
              MORE ARSENAL →
            </Link>
          </div>

          <div className="divide-y divide-hairline">
            <div className="py-2.5">
              <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-0.5">
                MATCHDAY
              </div>
              <Link
                href="/article/player-ratings-three-standouts-villa-park"
                className="font-headline font-bold text-sm text-ink hover:text-indigo leading-snug block mb-0.5"
              >
                Arteta confirms Saliba fit to face Hull after the Villa Park knock
              </Link>
              <div className="text-[10px] text-muted font-medium">Amelia Hart · 4h</div>
            </div>

            <div className="py-2.5">
              <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-0.5">
                DATA
              </div>
              <Link
                href="/article/single-pivot-problem-explained-touch-maps"
                className="font-headline font-bold text-sm text-ink hover:text-indigo leading-snug block mb-0.5"
              >
                The single-pivot problem, explained with every touch map
              </Link>
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · 8h</div>
            </div>

            <div className="py-2.5">
              <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-0.5">
                EXCLUSIVES
              </div>
              <Link
                href="/article/arsenal-quietly-rebuilt-scouting-south-america"
                className="font-headline font-bold text-sm text-ink hover:text-indigo leading-snug block mb-0.5"
              >
                The scouting network Arsenal quietly rebuilt in South America
              </Link>
              <div className="text-[10px] text-muted font-medium">Nathan Reeves · Yesterday</div>
            </div>

            <div className="py-2.5">
              <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-0.5">
                TRANSFERS
              </div>
              <Link
                href="/article/why-january-is-already-decided-at-emirates"
                className="font-headline font-bold text-sm text-ink hover:text-indigo leading-snug block mb-0.5"
              >
                Why the January window is already decided at the Emirates
              </Link>
              <div className="text-[10px] text-muted font-medium">Nathan Reeves · Yesterday</div>
            </div>
          </div>
        </div>

        {/* 2. CHELSEA (Image 5) */}
        <div>
          <div className="flex items-center justify-between pb-1.5 border-b-2 border-b-[#1C6BB0] mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-[2px] bg-[#1C6BB0]"></span>
              <h3 className="font-display font-black text-xs uppercase tracking-wider text-navy">
                CHELSEA
              </h3>
            </div>
            <Link
              href="/chelsea"
              className="text-[11px] font-bold text-[#2B4BC4] hover:underline"
            >
              MORE CHELSEA →
            </Link>
          </div>

          <div className="divide-y divide-hairline">
            <div className="py-2.5">
              <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-0.5">
                TRANSFERS
              </div>
              <Link
                href="/article/chelsea-wage-structure-question-before-january"
                className="font-headline font-bold text-sm text-ink hover:text-indigo leading-snug block mb-0.5"
              >
                Chelsea open talks over a January move for the Porto midfielder
              </Link>
              <div className="text-[10px] text-muted font-medium">Nathan Reeves · 2h</div>
            </div>

            <div className="py-2.5">
              <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-0.5">
                NEWS
              </div>
              <Link
                href="/article/cobhams-class-of-2026-six-names-tracking"
                className="font-headline font-bold text-sm text-ink hover:text-indigo leading-snug block mb-0.5"
              >
                Cobham graduate handed a first senior start at Sunderland
              </Link>
              <div className="text-[10px] text-muted font-medium">Nathan Reeves · 7h</div>
            </div>

            <div className="py-2.5">
              <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-0.5">
                FEATURES
              </div>
              <Link
                href="/article/former-cobham-coach-lost-decade-interview"
                className="font-headline font-bold text-sm text-ink hover:text-indigo leading-snug block mb-0.5"
              >
                “We were told to stop playing out”: a coach on the lost decade
              </Link>
              <div className="text-[10px] text-muted font-medium">Nathan Reeves · Yesterday</div>
            </div>

            <div className="py-2.5">
              <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-0.5">
                NEWS
              </div>
              <Link
                href="/article/stamford-bridge-redevelopment-plans"
                className="font-headline font-bold text-sm text-ink hover:text-indigo leading-snug block mb-0.5"
              >
                Stamford Bridge redevelopment: where the plans stand
              </Link>
              <div className="text-[10px] text-muted font-medium">Nathan Reeves · Yesterday</div>
            </div>
          </div>
        </div>

        {/* MOBILE MID-SCROLL AD UNIT 2 (Image 5) */}
        <div className="py-2">
          <AdSlot
            id="midscroll_320x480"
            label={"AD — 320×480 MID-SCROLL · UNIT 2 OF 2\nBetween CHELSEA and TOTTENHAM · 40% depth · lazy-loaded"}
          />
        </div>

        {/* 3. TOTTENHAM (Image 5) */}
        <div>
          <div className="flex items-center justify-between pb-1.5 border-b-2 border-b-[#24376B] mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-[2px] bg-[#24376B]"></span>
              <h3 className="font-display font-black text-xs uppercase tracking-wider text-navy">
                TOTTENHAM
              </h3>
            </div>
            <Link
              href="/tottenham"
              className="text-[11px] font-bold text-[#2B4BC4] hover:underline"
            >
              MORE TOTTENHAM →
            </Link>
          </div>

          <div className="divide-y divide-hairline">
            <div className="py-2.5">
              <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-0.5">
                NEWS
              </div>
              <Link
                href="/article/spurs-confirm-carabao-cup-quarter-final"
                className="font-headline font-bold text-sm text-ink hover:text-indigo leading-snug block mb-0.5"
              >
                Spurs confirm the Carabao Cup quarter-final date at the Lane
              </Link>
              <div className="text-[10px] text-muted font-medium">Amelia Hart · 3h</div>
            </div>

            <div className="py-2.5">
              <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-0.5">
                TRANSFERS
              </div>
              <Link
                href="/article/de-zerbi-spurs-rebuild-in-five-numbers"
                className="font-headline font-bold text-sm text-ink hover:text-indigo leading-snug block mb-0.5"
              >
                De Zerbi: “We are three signings from a title race”
              </Link>
              <div className="text-[10px] text-muted font-medium">Amelia Hart · 6h</div>
            </div>

            <div className="py-2.5">
              <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-0.5">
                EXCLUSIVES
              </div>
              <Link
                href="/article/inside-recruitment-meeting-reshaped-spurs-shortlist"
                className="font-headline font-bold text-sm text-ink hover:text-indigo leading-snug block mb-0.5"
              >
                Inside the recruitment meeting that reshaped the Spurs shortlist
              </Link>
              <div className="text-[10px] text-muted font-medium">Amelia Hart · Yesterday</div>
            </div>

            <div className="py-2.5">
              <div className="text-[9px] font-black uppercase text-muted tracking-wider mb-0.5">
                TRANSFERS
              </div>
              <Link
                href="/article/academy-graduate-outplaying-signing"
                className="font-headline font-bold text-sm text-ink hover:text-indigo leading-snug block mb-0.5"
              >
                The three positions Spurs will not leave until summer
              </Link>
              <div className="text-[10px] text-muted font-medium">Amelia Hart · Yesterday</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. THE NUMBERS BEHIND THE FOOTBALL (Image 2)
         ======================================================== */}
      <NumbersBand stats={siteData.dataStats} />

      {/* ========================================================
          5. MOST READ SECTION + 300x600 HALF-PAGE AD (Image 2)
         ======================================================== */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <MostRead />
        </div>
        <div className="hidden lg:block lg:col-span-4 sticky top-24">
          <AdSlot
            id="halfpage_300x600_1"
            label={"AD — 300×600 HALF-PAGE · STICKY\nSEQUENTIAL: 2-3 CREATIVES PER SCROLL\n30s VIEWABLE REFRESH"}
          />
        </div>
      </section>

      {/* ========================================================
          7. COMMUNITY SECTION + 300x600 HALF-PAGE AD (Image 2 & 3)
         ======================================================== */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <CommunityTeaser />
        </div>
        <div className="hidden lg:block lg:col-span-4 sticky top-24">
          <AdSlot
            id="halfpage_300x600_2"
            label={"AD — 300×600 HALF-PAGE · STICKY\nSEQUENTIAL: 2-3 CREATIVES PER SCROLL\n30s VIEWABLE REFRESH"}
          />
        </div>
      </section>
    </div>
  );
}

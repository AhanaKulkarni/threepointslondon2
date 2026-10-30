import React from "react";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import MostRead from "@/components/MostRead";
import NumbersBand from "@/components/NumbersBand";
import CommunityTeaser from "@/components/CommunityTeaser";
import EditorialGraphic from "@/components/EditorialGraphic";
import LiveMatchDesk from "@/components/LiveMatchDesk";
import { getSiteData } from "@/lib/store";

export const revalidate = 0;

export default function HomePage() {
  const siteData = getSiteData();

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-5 sm:py-6 space-y-8">
      {/* ========================================================
          1. HERO MAGAZINE COVER (Desktop & Mobile)
         ======================================================== */}
      {/* DESKTOP HERO (lg and up) */}
      <section className="hidden lg:grid grid-cols-12 gap-6 items-stretch">
        {/* Left: Lead Feature Card with Dark Wave Graphic Background (7 cols) */}
        <div className="col-span-7 bg-[#1D2B45] text-white rounded-xs p-8 flex flex-col justify-between relative overflow-hidden group">
          <EditorialGraphic type="dark-hero" className="absolute inset-0 z-0" />

          <div className="relative z-10">
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

            <Link
              href="/article/the-press-is-working-the-rest-defence-is-not"
              className="block font-display font-black text-3xl xl:text-4xl text-white leading-tight mb-4 group-hover:text-gray-200 transition-colors"
            >
              The press is working. The rest-defence is not.
            </Link>

            <p className="font-body text-sm sm:text-base text-gray-300 leading-relaxed mb-6 max-w-2xl font-normal">
              Eleven games into the title defence, one phase of play accounts for almost all of
              Arsenal's rise in expected goals against — and it is not the one everyone is arguing
              about.
            </p>
          </div>

          <div className="relative z-10 pt-4 border-t border-[#2D3F63] text-xs text-gray-400 font-medium">
            Vayam Lahoti · 6 min read · 2 hours ago
          </div>
        </div>

        {/* Right: 2 Stacked Priority Pieces (5 cols) */}
        <div className="col-span-5 flex flex-col justify-between gap-6">
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
              Vayam Lahoti · 4 hours ago
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
              Vayam Lahoti · 6 hours ago
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE HERO (Strictly responsive with prominent main image per feedback) */}
      <section className="block lg:hidden space-y-4">
        {/* Mobile Lead Dark Card with Prominent Hero Image */}
        <div className="bg-[#1D2B45] text-white rounded-xs overflow-hidden relative shadow-xs">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80"
              alt="The press is working. The rest-defence is not."
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D2B45] via-[#1D2B45]/75 to-transparent"></div>

            {/* Top Category Badges */}
            <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-10">
              <span className="bg-[#CE3426] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-xs tracking-wider shadow-xs">
                EXCLUSIVE
              </span>
              <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-white bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-xs">
                <span className="w-2.5 h-[2px] bg-[#E8192C]"></span>
                <span>ARSENAL · DATA</span>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 -mt-6 relative z-10">
            <Link
              href="/article/the-press-is-working-the-rest-defence-is-not"
              className="block font-display font-black text-xl sm:text-2xl text-white leading-tight mb-2 hover:text-gray-200 transition-colors"
            >
              The press is working. The rest-defence is not.
            </Link>

            <p className="font-body text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 line-clamp-2">
              Eleven games into the title defence, one phase of play accounts for almost all of Arsenal's rise in expected goals against.
            </p>

            <div className="text-[11px] text-gray-300 font-medium pt-2 border-t border-[#2D3F63] flex items-center justify-between">
              <span>Vayam Lahoti · 6 min read</span>
              <span>2 hours ago</span>
            </div>
          </div>
        </div>

        {/* 3 Secondary Stacked Stories with Right Thumbnail (Mockup Image 3) */}
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
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · 4h ago</div>
            </div>
            <Link
              href="/article/chelsea-wage-structure-question-before-january"
              className="w-24 sm:w-28 aspect-[16/10] shrink-0 rounded-xs overflow-hidden block relative bg-slate-100"
            >
              <img
                src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=400&q=80"
                alt="Chelsea"
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
                De Zerbi's rebuild in five numbers: progression up, control down
              </Link>
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · 6h ago</div>
            </div>
            <Link
              href="/article/de-zerbi-spurs-rebuild-in-five-numbers"
              className="w-24 sm:w-28 aspect-[16/10] shrink-0 rounded-xs overflow-hidden block relative bg-slate-100"
            >
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=400&q=80"
                alt="Tottenham"
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
                href="/article/arsenal-quietly-rebuilt-scouting-south-america"
                className="font-headline font-bold text-sm text-ink leading-snug block mb-1 group-hover:text-indigo transition-colors"
              >
                The four Hale End teenagers who will train with the first team
              </Link>
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · 9h ago</div>
            </div>
            <Link
              href="/article/arsenal-quietly-rebuilt-scouting-south-america"
              className="w-24 sm:w-28 aspect-[16/10] shrink-0 rounded-xs overflow-hidden block relative bg-slate-100"
            >
              <img
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=400&q=80"
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
      {/* Desktop Billboard */}
      <div className="hidden sm:block">
        <AdSlot
          id="billboard_970x250"
          label="AD — 970×250 BILLBOARD · BELOW THE LEAD STORY, HEIGHT RESERVED"
        />
      </div>
      {/* Mobile Ad 1 (Mockup Image 3) */}
      <div className="block sm:hidden">
        <AdSlot
          id="mobile_320x100"
          label={"AD — 320×100 · UNIT 1 OF 2\nFIRST AD, BELOW FOUR STORIES"}
        />
      </div>

      {/* ========================================================
          3. THE THREE DESKS (Desktop & Mobile)
         ======================================================== */}
      {/* DESKTOP: 3 Columns Grid */}
      <section className="hidden md:block w-full">
        <div className="flex items-center gap-4 pb-3 border-b border-hairline mb-6">
          <h2 className="font-display font-black text-sm uppercase tracking-wider text-navy shrink-0">
            THE THREE DESKS
          </h2>
          <div className="h-[1px] bg-hairline flex-1"></div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* 1. ARSENAL */}
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

          {/* 3. TOTTENHAM */}
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

              <div className="space-y-3 pt-3 border-t border-hairline/60">
                <Link
                  href="/article/spurs-confirm-carabao-cup-quarter-final"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug"
                >
                  Spurs confirm Carabao Cup quarter-final date at the Lane
                </Link>
                <Link
                  href="/article/trophy-february-change-everything"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug pt-3 border-t border-hairline/60"
                >
                  A trophy in February would change everything — and the draw says it is on
                </Link>
                <Link
                  href="/article/academy-graduate-outplaying-signing"
                  className="block font-headline font-semibold text-xs sm:text-sm text-ink hover:text-indigo transition-colors leading-snug pt-3 border-t border-hairline/60"
                >
                  The academy graduate quietly outplaying a £45m signing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE: THE THREE DESKS (Strictly matching Mockup Images 4 & 5) */}
      <section className="block md:hidden space-y-6">
        <div className="flex items-center gap-4 pb-2 border-b border-hairline">
          <h2 className="font-display font-black text-sm uppercase tracking-wider text-navy shrink-0">
            THE THREE DESKS
          </h2>
          <div className="h-[1px] bg-hairline flex-1"></div>
        </div>

        {/* 1. ARSENAL (Mockup Image 4) */}
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
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · 4h</div>
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
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · 6h</div>
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
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · Yesterday</div>
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
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · Yesterday</div>
            </div>
          </div>
        </div>

        {/* 2. CHELSEA (Mockup Image 4) */}
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
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · 2h</div>
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
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · 7h</div>
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
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · Yesterday</div>
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
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · Yesterday</div>
            </div>
          </div>
        </div>

        {/* MOBILE MID-SCROLL AD UNIT 2 (Mockup Image 5: Between Chelsea & Tottenham) */}
        <div className="py-2">
          <AdSlot
            id="midscroll_320x480"
            label={"AD — 320×480 MID-SCROLL · UNIT 2 OF 2\nBetween CHELSEA and TOTTENHAM · 40% depth · lazy-loaded"}
          />
        </div>

        {/* 3. TOTTENHAM (Mockup Image 5) */}
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
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · 3h</div>
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
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · 6h</div>
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
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · Yesterday</div>
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
              <div className="text-[10px] text-muted font-medium">Vayam Lahoti · Yesterday</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. LIVE RANKINGS, MATCH RESULTS & LONDON DERBY INTELLIGENCE
         ======================================================== */}
      <LiveMatchDesk standings={siteData.standings} className="my-8" />

      {/* ========================================================
          5. THE NUMBERS BEHIND THE FOOTBALL
         ======================================================== */}
      <NumbersBand stats={siteData.dataStats} />

      {/* ========================================================
          5. MOST READ SECTION
         ======================================================== */}
      <section className="w-full">
        <MostRead />
      </section>

      {/* ========================================================
          6. COMMUNITY SECTION
         ======================================================== */}
      <CommunityTeaser />
    </div>
  );
}

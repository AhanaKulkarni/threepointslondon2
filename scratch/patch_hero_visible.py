with open('app/page.tsx', 'r', encoding='utf-8') as f:
    page = f.read().replace('\r\n', '\n')

old_hero = """      {/* DESKTOP HERO (lg and up - Matching Mockup Screenshot) */}
      <section className="hidden lg:grid grid-cols-12 gap-6 items-stretch">
        {/* Left: Lead Feature Card with Dropshadow Widget and Text ON the Image (7 cols) */}
        <Link
          href="/article/the-press-is-working-the-rest-defence-is-not"
          title="The press is working. The rest-defence is not."
          className="col-span-7 relative min-h-[560px] xl:min-h-[640px] 2xl:min-h-[680px] rounded-xs overflow-hidden group shadow-2xl drop-shadow-xl border border-white/10 flex flex-col justify-end bg-slate-900 block cursor-pointer"
        >
          {/* Action Image Background */}
          <img
            src="/articles/the-press-is-working.jpg"
            alt="The press is working. The rest-defence is not."
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Deep Dark Bottom Gradient Scrim for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/15 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#0e1626] via-[#0e1626]/80 to-transparent pointer-events-none" />

          {/* Text ON the Image with Dropshadow Widget Styling */}
          <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end pointer-events-none">
            <div className="flex items-center gap-2.5 mb-3.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              <span className="bg-[#CE3426] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-xs tracking-wider shadow-md">
                EXCLUSIVE
              </span>
              <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                <span className="w-3 h-[2px] bg-[#E8192C] shadow-sm"></span>
                <span className="text-white">ARSENAL</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-200">TACTICS</span>
              </div>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] text-white leading-[1.12] mb-3.5 drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)] group-hover:text-gray-100 transition-colors">
              The press is working. The rest-defence is not.
            </h2>

            <p className="font-body text-sm sm:text-base xl:text-lg text-gray-200 leading-relaxed mb-4 max-w-2xl font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Eleven games into the title defence, one phase of play accounts for almost all of
              Arsenal's rise in expected goals against — and it is not the one everyone is arguing
              about.
            </p>

            {/* Below Line with Dropshadow and Byline */}
            <div className="pt-3.5 border-t border-white/25 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-xs text-gray-200 font-medium flex items-center justify-between">
              <span className="drop-shadow-md">Vayam Lahoti · 6 min read</span>
              <span className="text-gray-300 drop-shadow-md">2 hours ago</span>
            </div>
          </div>
        </Link>

        {/* Right: 2 Stacked Priority Pieces Strictly in the Format Pasted by User (Image on Top, Text Below) (5 cols) */}
        <div className="col-span-5 flex flex-col justify-between gap-6">
          {/* Card 1: Chelsea Transfers */}
          <div className="group flex flex-col justify-between">
            <Link
              href="/article/chelsea-wage-structure-question-before-january"
              className="block aspect-[16/9] w-full rounded-xs overflow-hidden mb-3 relative bg-slate-100 group/img shadow-md drop-shadow-xs border border-hairline/80 cursor-pointer"
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
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-3 h-[2px] bg-[#1C6BB0]"></span>
                <span className="text-[10px] font-black uppercase tracking-wider text-muted">
                  CHELSEA • TRANSFERS
                </span>
              </div>
              <Link
                href="/article/chelsea-wage-structure-question-before-january"
                className="font-headline font-bold text-lg sm:text-xl xl:text-2xl text-ink group-hover:text-indigo transition-colors leading-snug block mb-1.5"
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
              className="block aspect-[16/9] w-full rounded-xs overflow-hidden mb-3 relative bg-slate-100 group/img shadow-md drop-shadow-xs border border-hairline/80 cursor-pointer"
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
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-3 h-[2px] bg-[#24376B]"></span>
                <span className="text-[10px] font-black uppercase tracking-wider text-muted">
                  TOTTENHAM • FEATURES
                </span>
              </div>
              <Link
                href="/article/de-zerbi-spurs-rebuild-in-five-numbers"
                className="font-headline font-bold text-lg sm:text-xl xl:text-2xl text-ink group-hover:text-indigo transition-colors leading-snug block mb-1.5"
              >
                De Zerbi's rebuild in five numbers: progression up, control down
              </Link>
            </div>
            <div className="text-[11px] text-muted font-medium">
              Amelia Hart · 6 hours ago
            </div>
          </div>
        </div>
      </section>"""

new_hero = """      {/* DESKTOP HERO (Horizontally stretched, text & headline 100% visible above fold) */}
      <section className="hidden lg:grid grid-cols-12 gap-6 xl:gap-8 items-stretch">
        {/* Left: Lead Feature Card stretched horizontally with Text ON Image fully visible (7 or 8 cols) */}
        <Link
          href="/article/the-press-is-working-the-rest-defence-is-not"
          title="The press is working. The rest-defence is not."
          className="col-span-7 xl:col-span-8 relative min-h-[450px] lg:min-h-[470px] xl:min-h-[500px] rounded-xs overflow-hidden group shadow-2xl drop-shadow-xl border border-white/10 flex flex-col justify-end bg-slate-900 block cursor-pointer"
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

          {/* Text ON the Image with Dropshadow Widget Styling - 100% visible on screen */}
          <div className="relative z-10 p-5 sm:p-6 lg:p-7 xl:p-8 flex flex-col justify-end pointer-events-none">
            <div className="flex items-center gap-2 mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              <span className="bg-[#CE3426] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-xs tracking-wider shadow-md">
                EXCLUSIVE
              </span>
              <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                <span className="w-3 h-[2px] bg-[#E8192C] shadow-sm"></span>
                <span className="text-white">ARSENAL</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-200">TACTICS</span>
              </div>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] text-white leading-tight mb-2.5 drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)] group-hover:text-gray-100 transition-colors">
              The press is working. The rest-defence is not.
            </h2>

            <p className="font-body text-xs sm:text-sm lg:text-[15px] text-gray-200 leading-relaxed mb-3 max-w-2xl font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] line-clamp-2">
              Eleven games into the title defence, one phase of play accounts for almost all of
              Arsenal's rise in expected goals against — and it is not the one everyone is arguing
              about.
            </p>

            {/* Below Line with Dropshadow and Byline */}
            <div className="pt-2.5 border-t border-white/25 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-xs text-gray-200 font-medium flex items-center justify-between">
              <span className="drop-shadow-md">Vayam Lahoti · 6 min read</span>
              <span className="text-gray-300 drop-shadow-md">2 hours ago</span>
            </div>
          </div>
        </Link>

        {/* Right: 2 Stacked Priority Pieces (5 cols on lg, 4 cols on xl) */}
        <div className="col-span-5 xl:col-span-4 flex flex-col justify-between gap-4">
          {/* Card 1: Chelsea Transfers */}
          <div className="group flex flex-col justify-between">
            <Link
              href="/article/chelsea-wage-structure-question-before-january"
              className="block aspect-[16/8.5] w-full rounded-xs overflow-hidden mb-2 relative bg-slate-100 group/img shadow-md drop-shadow-xs border border-hairline/80 cursor-pointer"
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
                className="font-headline font-bold text-sm sm:text-base lg:text-[17px] text-ink group-hover:text-indigo transition-colors leading-snug block mb-1"
              >
                The wage-structure question Chelsea must answer before January
              </Link>
            </div>
            <div className="text-[11px] text-muted font-medium">
              Nathan Reeves · 4 hours ago
            </div>
          </div>

          {/* Card 2: Tottenham Features */}
          <div className="group flex flex-col justify-between pt-3.5 border-t border-hairline">
            <Link
              href="/article/de-zerbi-spurs-rebuild-in-five-numbers"
              className="block aspect-[16/8.5] w-full rounded-xs overflow-hidden mb-2 relative bg-slate-100 group/img shadow-md drop-shadow-xs border border-hairline/80 cursor-pointer"
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
                className="font-headline font-bold text-sm sm:text-base lg:text-[17px] text-ink group-hover:text-indigo transition-colors leading-snug block mb-1"
              >
                De Zerbi's rebuild in five numbers: progression up, control down
              </Link>
            </div>
            <div className="text-[11px] text-muted font-medium">
              Amelia Hart · 6 hours ago
            </div>
          </div>
        </div>
      </section>"""

assert old_hero in page, "old_hero not found"
page = page.replace(old_hero, new_hero)

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page)

print("SUCCESS: Hero section updated with horizontal stretch and fully visible headline & text!")

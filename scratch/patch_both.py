# Update Header.tsx
with open('components/Header.tsx', 'r', encoding='utf-8') as f:
    header = f.read().replace('\r\n', '\n')

old_header_block = """      {/* 2. Desktop Masthead (1280px and up with Mathematical Equal Spacing) */}
      <div className="hidden xl:flex w-full items-center justify-between min-h-[64px] border-b border-hairline/40">
        <div className="w-full max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 py-3 sm:py-3.5 flex items-center justify-between gap-4 xl:gap-6 2xl:gap-8">
          
          {/* 1. Main TPL Logo */}
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              className="inline-flex items-center cursor-pointer z-20 hover:opacity-95 transition-opacity"
              title="Three Points London - Go to Homepage"
              aria-label="Three Points London Homepage"
            >
              <img
                src="/logo.png"
                alt="Three Points London"
                className="h-7.5 md:h-8 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* 2. Nav Elements with Equal Spacings Between Each */}
          <nav className="hidden xl:flex items-center gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 font-bold text-xs lg:text-[13px] text-ink">"""

new_header_block = """      {/* 2. Desktop Masthead (Text elements close to each other, zero cutoff on socials) */}
      <div className="hidden xl:flex w-full items-center justify-between min-h-[58px] border-b border-hairline/40">
        <div className="w-full max-w-[1720px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 xl:px-10 py-2.5 flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo + Text Elements close to each other */}
          <div className="flex items-center gap-5 xl:gap-6 shrink-0">
            <Link
              href="/"
              className="inline-flex items-center cursor-pointer z-20 hover:opacity-95 transition-opacity shrink-0"
              title="Three Points London - Go to Homepage"
              aria-label="Three Points London Homepage"
            >
              <img
                src="/logo.png"
                alt="Three Points London"
                className="h-7.5 w-auto object-contain cursor-pointer"
              />
            </Link>

            {/* Nav text elements close to each other */}
            <nav className="hidden xl:flex items-center gap-1 sm:gap-1.5 font-bold text-xs lg:text-[13px] text-ink">"""

assert old_header_block in header, "old_header_block not found"
header = header.replace(old_header_block, new_header_block)

old_header_end = """                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* 3. Official Tagline (Equal Spacing between Nav and Socials) */}
          <div className="hidden xl:flex items-center text-[10.5px] 2xl:text-[11.5px] tracking-wider font-extrabold uppercase select-none whitespace-nowrap shrink-0">
            <span className="text-[#1C6BB0]">ONE CITY. </span>
            <span className="text-[#E8192C]">THREE CLUBS. </span>
            <span className="text-[#111317]">ENDLESS PASSION.</span>
          </div>

          {/* 4. Social Links (Equal Spacing from Tagline) */}
          <div className="hidden lg:flex items-center shrink-0">
            <SocialLinksBar iconSize={15} />
          </div>

        </div>
      </div>"""

new_header_end = """                  </Link>
                </div>
              )}
            </div>
          </nav>
          </div>

          {/* Right: Tagline + Social Icons (Complete with zero cutoff) */}
          <div className="flex items-center gap-3.5 xl:gap-4 shrink-0">
            {/* Official Tagline */}
            <div className="hidden xl:flex items-center text-[10px] 2xl:text-[11px] tracking-wider font-extrabold uppercase select-none whitespace-nowrap shrink-0">
              <span className="text-[#1C6BB0]">ONE CITY. </span>
              <span className="text-[#E8192C]">THREE CLUBS. </span>
              <span className="text-[#111317]">ENDLESS PASSION.</span>
            </div>

            {/* Social Links (All 4 icons completely visible) */}
            <div className="flex items-center shrink-0 pl-3 border-l border-hairline/80">
              <SocialLinksBar iconSize={14} className="flex items-center gap-1.5" />
            </div>
          </div>

        </div>
      </div>"""

assert old_header_end in header, "old_header_end not found"
header = header.replace(old_header_end, new_header_end)

with open('components/Header.tsx', 'w', encoding='utf-8') as f:
    f.write(header)

print("Updated components/Header.tsx successfully!")

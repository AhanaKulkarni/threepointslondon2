"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Search, ShieldCheck, Menu, X, Users } from "lucide-react";
import { SocialLinksBar } from "@/components/SocialIcons";

export default function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileClubAccordion, setMobileClubAccordion] = useState<string | null>(null);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  const toggleMobileClub = (club: string) => {
    setMobileClubAccordion(mobileClubAccordion === club ? null : club);
  };

  return (
    <header className="w-full bg-white border-b border-hairline sticky top-0 z-40 shadow-xs">
      {/* ========================================================
          MAIN MASTHEAD BAR (Desktop, Split-Screen & Mobile)
         ======================================================== */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3.5 sm:py-4 flex items-center justify-between gap-4 min-h-[64px] sm:min-h-[70px]">
        {/* Left: Logo (Homepage Button) */}
        <div className="flex items-center gap-4 lg:gap-6 shrink-0">
          <Link
            href="/"
            className="inline-flex items-center cursor-pointer z-20 hover:opacity-90 transition-opacity"
            title="Three Points London - Go to Homepage"
            aria-label="Three Points London Homepage"
          >
            <img
              src="/logo.png"
              alt="Three Points London"
              className="h-7 sm:h-8 md:h-8.5 w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation (visible on xl and up, collapses into hamburger on split-tab/mobile) */}
        <nav className="hidden xl:flex items-center space-x-1 font-bold text-xs lg:text-[13px] text-ink">
          {/* 1. About */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setOpenDropdown("about")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href="/about"
              className={`flex items-center gap-1 px-2.5 py-1.5 hover:text-indigo transition-colors rounded-xs ${
                isActive("/about") || isActive("/editorial-standards") ? "text-indigo font-black" : ""
              }`}
            >
              <span>About</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </Link>
            {openDropdown === "about" && (
              <div className="absolute top-8 left-0 w-44 bg-white shadow-xl border border-hairline py-1 z-50 rounded-b-xs animate-in fade-in duration-150">
                <Link
                  href="/about"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo border-b border-hairline/60"
                >
                  Who We Are
                </Link>
                <Link
                  href="/author/vayam-lahoti"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo border-b border-hairline/60"
                >
                  Founder & Editor
                </Link>
                <Link
                  href="/editorial-standards"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo border-b border-hairline/60"
                >
                  Editorial standards
                </Link>
                <Link
                  href="/admin"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo"
                >
                  Admin Portal
                </Link>
              </div>
            )}
          </div>

          {/* 2. Arsenal */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setOpenDropdown("arsenal")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href="/arsenal"
              className={`flex items-center gap-1 px-2.5 py-1.5 hover:text-[#E8192C] transition-colors rounded-xs ${
                isActive("/arsenal") ? "text-[#E8192C] font-black" : ""
              }`}
            >
              <span>Arsenal</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </Link>
            {openDropdown === "arsenal" && (
              <div className="absolute top-8 left-0 w-44 bg-white shadow-xl border-t-2 border-t-[#E8192C] border border-hairline py-1 z-50 rounded-b-xs animate-in fade-in duration-150">
                <Link
                  href="/arsenal?desk=news"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#E8192C] border-b border-hairline/60"
                >
                  News
                </Link>
                <Link
                  href="/arsenal?desk=transfers"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#E8192C] border-b border-hairline/60"
                >
                  Transfers
                </Link>
                <Link
                  href="/arsenal?desk=matchday"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#E8192C] border-b border-hairline/60"
                >
                  Matchday
                </Link>
                <Link
                  href="/arsenal?desk=features"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#E8192C] border-b border-hairline/60"
                >
                  Features
                </Link>
                {/* Community button in Arsenal dropdown */}
                <Link
                  href="/community?club=arsenal"
                  className="block px-3.5 py-2 text-xs font-bold text-[#E8192C] hover:bg-red-50 flex items-center justify-between"
                  title="Open Arsenal Community Room"
                >
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-[#E8192C]" />
                    <span>Community</span>
                  </span>
                  <span className="text-[9px] font-mono uppercase bg-[#E8192C]/10 text-[#E8192C] px-1.5 py-0.2 rounded-2xs font-extrabold">
                    ROOM
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* 3. Chelsea */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setOpenDropdown("chelsea")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href="/chelsea"
              className={`flex items-center gap-1 px-2.5 py-1.5 hover:text-[#1C6BB0] transition-colors rounded-xs ${
                isActive("/chelsea") ? "text-[#1C6BB0] font-black" : ""
              }`}
            >
              <span>Chelsea</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </Link>
            {openDropdown === "chelsea" && (
              <div className="absolute top-8 left-0 w-44 bg-white shadow-xl border-t-2 border-t-[#1C6BB0] border border-hairline py-1 z-50 rounded-b-xs animate-in fade-in duration-150">
                <Link
                  href="/chelsea?desk=news"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#1C6BB0] border-b border-hairline/60"
                >
                  News
                </Link>
                <Link
                  href="/chelsea?desk=transfers"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#1C6BB0] border-b border-hairline/60"
                >
                  Transfers
                </Link>
                <Link
                  href="/chelsea?desk=matchday"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#1C6BB0] border-b border-hairline/60"
                >
                  Matchday
                </Link>
                <Link
                  href="/chelsea?desk=features"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#1C6BB0] border-b border-hairline/60"
                >
                  Features
                </Link>
                {/* Community button in Chelsea dropdown */}
                <Link
                  href="/community?club=chelsea"
                  className="block px-3.5 py-2 text-xs font-bold text-[#1C6BB0] hover:bg-blue-50 flex items-center justify-between"
                  title="Open Chelsea Community Room"
                >
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-[#1C6BB0]" />
                    <span>Community</span>
                  </span>
                  <span className="text-[9px] font-mono uppercase bg-[#1C6BB0]/10 text-[#1C6BB0] px-1.5 py-0.2 rounded-2xs font-extrabold">
                    ROOM
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* 4. Tottenham */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setOpenDropdown("tottenham")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href="/tottenham"
              className={`flex items-center gap-1 px-2.5 py-1.5 hover:text-[#24376B] transition-colors rounded-xs ${
                isActive("/tottenham") ? "text-[#24376B] font-black" : ""
              }`}
            >
              <span>Tottenham</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </Link>
            {openDropdown === "tottenham" && (
              <div className="absolute top-8 left-0 w-44 bg-white shadow-xl border-t-2 border-t-[#24376B] border border-hairline py-1 z-50 rounded-b-xs animate-in fade-in duration-150">
                <Link
                  href="/tottenham?desk=news"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#24376B] border-b border-hairline/60"
                >
                  News
                </Link>
                <Link
                  href="/tottenham?desk=transfers"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#24376B] border-b border-hairline/60"
                >
                  Transfers
                </Link>
                <Link
                  href="/tottenham?desk=matchday"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#24376B] border-b border-hairline/60"
                >
                  Matchday
                </Link>
                <Link
                  href="/tottenham?desk=features"
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#24376B] border-b border-hairline/60"
                >
                  Features
                </Link>
                {/* Community button in Tottenham dropdown */}
                <Link
                  href="/community?club=tottenham"
                  className="block px-3.5 py-2 text-xs font-bold text-[#24376B] hover:bg-slate-100 flex items-center justify-between"
                  title="Open Tottenham Community Room"
                >
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-[#24376B]" />
                    <span>Community</span>
                  </span>
                  <span className="text-[9px] font-mono uppercase bg-[#24376B]/10 text-[#24376B] px-1.5 py-0.2 rounded-2xs font-extrabold">
                    ROOM
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* 5. Community */}
          <Link
            href="/community"
            className={`px-2.5 py-1.5 hover:text-indigo transition-colors rounded-xs ${
              isActive("/community") ? "text-indigo font-black" : ""
            }`}
          >
            Community
          </Link>

          {/* 6. Contact */}
          <Link
            href="/contact"
            className={`px-2.5 py-1.5 hover:text-indigo transition-colors rounded-xs ${
              isActive("/contact") ? "text-indigo font-black" : ""
            }`}
          >
            Contact
          </Link>

          {/* 7. Dedicated Admin Link */}
          <Link
            href="/admin"
            className={`px-2.5 py-1.5 hover:text-indigo transition-colors rounded-xs flex items-center gap-1 ${
              isActive("/admin") ? "text-indigo font-black" : "text-gray-600"
            }`}
            title="Dedicated Admin Section"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-indigo" />
            <span>Admin</span>
          </Link>
        </nav>

        {/* Right Area: Tagline + Actual Social Logos + Search + Three-Hyphen Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3 lg:gap-4 shrink-0">
          {/* Tagline (Protected from overlapping in split-screen) */}
          <div className="hidden 2xl:flex items-center text-[10px] tracking-wide font-extrabold uppercase select-none whitespace-nowrap">
            <span className="text-[#1C6BB0]">ONE CITY. </span>
            <span className="text-[#E8192C]">THREE CLUBS. </span>
            <span className="text-[#111317]">ENDLESS PASSION.</span>
          </div>

          {/* Actual Social Media Logos (Authentic Instagram, X, LinkedIn, Facebook SVGs) */}
          <div className="hidden sm:block">
            <SocialLinksBar iconSize={14} />
          </div>

          {/* Search Button */}
          <Link
            href="/search"
            className="w-8 h-8 sm:w-8.5 sm:h-8.5 border border-[#D2D6DC] rounded-xs flex items-center justify-center text-navy hover:bg-indigo hover:text-white hover:border-indigo transition-all shadow-2xs cursor-pointer"
            title="Search Three Points London"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </Link>

          {/* Three-Hyphen Menu Toggle Button (Visible on Phone, Split-Tab, Quarter-Tab where navbar cannot be shown) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-8.5 h-8.5 border border-[#D2D6DC] rounded-xs flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors cursor-pointer shadow-2xs"
            title={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" strokeWidth={2.5} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* ========================================================
          MOBILE & SPLIT-SCREEN TAGLINE SUB-BAR
         ======================================================== */}
      <div className="xl:hidden bg-surface border-t border-hairline py-1.5 px-4 text-center">
        <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider select-none inline-flex flex-wrap items-center justify-center gap-1.5 leading-normal">
          <span className="text-[#1C6BB0]">ONE CITY.</span>
          <span className="text-gray-300">•</span>
          <span className="text-[#E8192C]">THREE CLUBS.</span>
          <span className="text-gray-300">•</span>
          <span className="text-[#111317]">ENDLESS PASSION.</span>
        </div>
      </div>

      {/* ========================================================
          RESPONSIVE THREE-HYPHEN DRAWER (Mobile, Split-Tab & Quarter-Tab)
          Contains all navigation, club dropdowns, and Socials in there itself
         ======================================================== */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-hairline shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-5 py-4 max-h-[80vh] overflow-y-auto space-y-5">
            {/* Socials inside the mobile menu drawer */}
            <div className="p-3 bg-surface rounded-xs border border-hairline flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted">
                Follow Three Points London:
              </span>
              <SocialLinksBar iconSize={16} />
            </div>

            {/* Club Links Accordions */}
            <div className="space-y-2 border-b border-hairline pb-4">
              <div className="text-[10px] font-mono font-bold uppercase text-muted tracking-widest mb-1.5">
                CLUB DESKS
              </div>

              {/* Arsenal Accordion */}
              <div className="border border-hairline rounded-xs overflow-hidden">
                <div className="flex items-center justify-between p-2.5 bg-slate-50">
                  <Link
                    href="/arsenal"
                    className="font-display font-black text-sm uppercase text-navy hover:text-[#E8192C] flex items-center gap-2"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8192C]"></span>
                    <span>The Arsenal Desk</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleMobileClub("arsenal")}
                    className="p-1 text-gray-500 hover:text-navy cursor-pointer"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileClubAccordion === "arsenal" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {mobileClubAccordion === "arsenal" && (
                  <div className="bg-white px-3 py-2 space-y-1.5 text-xs font-semibold border-t border-hairline">
                    <Link href="/arsenal?desk=news" className="block py-1 hover:text-[#E8192C]">
                      News
                    </Link>
                    <Link href="/arsenal?desk=transfers" className="block py-1 hover:text-[#E8192C]">
                      Transfers
                    </Link>
                    <Link href="/arsenal?desk=matchday" className="block py-1 hover:text-[#E8192C]">
                      Matchday
                    </Link>
                    <Link href="/arsenal?desk=features" className="block py-1 hover:text-[#E8192C]">
                      Features
                    </Link>
                    {/* Arsenal Community Button */}
                    <Link
                      href="/community?club=arsenal"
                      className="block py-1.5 text-[#E8192C] font-bold border-t border-hairline/60 flex items-center justify-between"
                    >
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>Arsenal Community Room</span>
                      </span>
                      <span>→</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Chelsea Accordion */}
              <div className="border border-hairline rounded-xs overflow-hidden">
                <div className="flex items-center justify-between p-2.5 bg-slate-50">
                  <Link
                    href="/chelsea"
                    className="font-display font-black text-sm uppercase text-navy hover:text-[#1C6BB0] flex items-center gap-2"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1C6BB0]"></span>
                    <span>The Chelsea Desk</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleMobileClub("chelsea")}
                    className="p-1 text-gray-500 hover:text-navy cursor-pointer"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileClubAccordion === "chelsea" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {mobileClubAccordion === "chelsea" && (
                  <div className="bg-white px-3 py-2 space-y-1.5 text-xs font-semibold border-t border-hairline">
                    <Link href="/chelsea?desk=news" className="block py-1 hover:text-[#1C6BB0]">
                      News
                    </Link>
                    <Link href="/chelsea?desk=transfers" className="block py-1 hover:text-[#1C6BB0]">
                      Transfers
                    </Link>
                    <Link href="/chelsea?desk=matchday" className="block py-1 hover:text-[#1C6BB0]">
                      Matchday
                    </Link>
                    <Link href="/chelsea?desk=features" className="block py-1 hover:text-[#1C6BB0]">
                      Features
                    </Link>
                    {/* Chelsea Community Button */}
                    <Link
                      href="/community?club=chelsea"
                      className="block py-1.5 text-[#1C6BB0] font-bold border-t border-hairline/60 flex items-center justify-between"
                    >
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>Chelsea Community Room</span>
                      </span>
                      <span>→</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Tottenham Accordion */}
              <div className="border border-hairline rounded-xs overflow-hidden">
                <div className="flex items-center justify-between p-2.5 bg-slate-50">
                  <Link
                    href="/tottenham"
                    className="font-display font-black text-sm uppercase text-navy hover:text-[#24376B] flex items-center gap-2"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#24376B]"></span>
                    <span>The Tottenham Desk</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleMobileClub("tottenham")}
                    className="p-1 text-gray-500 hover:text-navy cursor-pointer"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileClubAccordion === "tottenham" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {mobileClubAccordion === "tottenham" && (
                  <div className="bg-white px-3 py-2 space-y-1.5 text-xs font-semibold border-t border-hairline">
                    <Link href="/tottenham?desk=news" className="block py-1 hover:text-[#24376B]">
                      News
                    </Link>
                    <Link href="/tottenham?desk=transfers" className="block py-1 hover:text-[#24376B]">
                      Transfers
                    </Link>
                    <Link href="/tottenham?desk=matchday" className="block py-1 hover:text-[#24376B]">
                      Matchday
                    </Link>
                    <Link href="/tottenham?desk=features" className="block py-1 hover:text-[#24376B]">
                      Features
                    </Link>
                    {/* Tottenham Community Button */}
                    <Link
                      href="/community?club=tottenham"
                      className="block py-1.5 text-[#24376B] font-bold border-t border-hairline/60 flex items-center justify-between"
                    >
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>Tottenham Community Room</span>
                      </span>
                      <span>→</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Direct Section Links */}
            <div className="space-y-2 text-sm font-bold text-navy">
              <Link
                href="/community"
                className="flex items-center justify-between p-2 rounded hover:bg-surface"
              >
                <span>Community Hub</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-between p-2 rounded hover:bg-surface"
              >
                <span>About & Mission</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
              <Link
                href="/editorial-standards"
                className="flex items-center justify-between p-2 rounded hover:bg-surface"
              >
                <span>Editorial Standards</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-between p-2 rounded hover:bg-surface"
              >
                <span>Contact & Pitch</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
              <Link
                href="/admin"
                className="flex items-center justify-between p-2 rounded hover:bg-surface text-indigo font-black"
              >
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo" />
                  <span>Admin Portal</span>
                </span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

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

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <header className="w-full bg-white border-b border-hairline sticky top-0 z-40 shadow-xs">
      {/* ========================================================
          MAIN MASTHEAD BAR (Desktop, Split-Screen & Mobile)
         ======================================================== */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-3.5 sm:py-4 flex items-center justify-between min-h-[64px] sm:min-h-[70px]">
        {/* Left Side: Three-Hyphen Hamburger Menu Toggle Button (Phone/Split-Tab with Equal Spacing & No Border) */}
        <div className="flex items-center shrink-0 xl:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-[#1D2B45] hover:text-indigo transition-colors cursor-pointer shrink-0"
            title={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={2.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2.5} />
            )}
          </button>
        </div>

        {/* Center on Phone (Equal Spacing to Nav & Search), Left-docked on Desktop */}
        <div className="flex-1 flex items-center justify-center xl:justify-start xl:flex-initial">
          <Link
            href="/"
            className="inline-flex items-center cursor-pointer z-20 hover:opacity-90 transition-opacity"
            title="Three Points London - Go to Homepage"
            aria-label="Three Points London Homepage"
          >
            <img
              src="/logo.png"
              alt="Three Points London"
              className="h-7.5 sm:h-8.5 md:h-9 w-auto object-contain cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation (visible on xl and up, anchored into the logo area on the left) */}
          <nav className="hidden xl:flex items-center space-x-1.5 font-bold text-xs lg:text-[13px] text-ink ml-7 lg:ml-8">
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
      </div>

        {/* Right Area: Tagline + Actual Social Logos + Clearly Visible Search Magnifying Glass */}
        <div className="flex items-center justify-end gap-3 sm:gap-4 lg:gap-5 shrink-0 pl-6 lg:pl-10">
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

          {/* Search Button (Clean, borderless, prominent magnifying glass with equal spacing) */}
          <Link
            href="/search"
            className="w-10 h-10 flex items-center justify-center text-[#1D2B45] hover:text-indigo transition-colors cursor-pointer shrink-0"
            title="Search Three Points London"
            aria-label="Search Three Points London"
          >
            <Search className="w-5.5 h-5.5 text-[#1D2B45] hover:text-indigo transition-colors" strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      {/* ========================================================
          MOBILE & SPLIT-SCREEN CLUBS SUB-BAR
          Instantly displays Arsenal, Chelsea, and Tottenham right in the navbar
         ======================================================== */}
      <div className="xl:hidden bg-[#1D2B45] text-white py-2 px-3 sm:px-4 border-t border-[#2B3C5C]">
        <div className="flex items-center justify-between gap-1.5 sm:gap-2">
          <Link
            href="/arsenal"
            className={`flex-1 py-1.5 px-2 rounded-xs text-center text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
              isActive("/arsenal")
                ? "bg-[#E8192C] text-white shadow-xs"
                : "bg-[#142036] text-gray-200 hover:text-white hover:bg-[#E8192C] border border-[#273859]"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#E8192C] shrink-0 border border-white/40"></span>
            <span>Arsenal</span>
          </Link>

          <Link
            href="/chelsea"
            className={`flex-1 py-1.5 px-2 rounded-xs text-center text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
              isActive("/chelsea")
                ? "bg-[#1C6BB0] text-white shadow-xs"
                : "bg-[#142036] text-gray-200 hover:text-white hover:bg-[#1C6BB0] border border-[#273859]"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#1C6BB0] shrink-0 border border-white/40"></span>
            <span>Chelsea</span>
          </Link>

          <Link
            href="/tottenham"
            className={`flex-1 py-1.5 px-2 rounded-xs text-center text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
              isActive("/tottenham")
                ? "bg-[#24376B] text-white border border-[#3B82F6] shadow-xs"
                : "bg-[#142036] text-gray-200 hover:text-white hover:bg-[#24376B] border border-[#273859]"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] shrink-0 border border-white/40"></span>
            <span>Tottenham</span>
          </Link>
        </div>
      </div>

      {/* ========================================================
          RESPONSIVE THREE-HYPHEN DRAWER (Mobile, Split-Tab & Quarter-Tab)
          Contains Arsenal, Chelsea, Tottenham, navigation and Socials
         ======================================================== */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-hairline shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-5 py-4 max-h-[80vh] overflow-y-auto space-y-4">
            {/* Socials inside the mobile menu drawer */}
            <div className="p-3 bg-surface rounded-xs border border-hairline flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted">
                Follow Three Points London:
              </span>
              <SocialLinksBar iconSize={16} />
            </div>

            {/* The Three Clubs: Arsenal, Chelsea, Tottenham */}
            <div className="space-y-1.5 pt-1 border-b border-hairline/80 pb-3">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted mb-2 px-1">
                CLUBS
              </div>

              {/* Arsenal */}
              <Link
                href="/arsenal"
                className={`flex items-center justify-between p-2.5 rounded-xs transition-colors border ${
                  isActive("/arsenal")
                    ? "bg-red-50/80 border-[#E8192C] text-[#E8192C] font-black"
                    : "bg-surface/50 border-hairline hover:bg-red-50/50 hover:border-[#E8192C] text-ink font-bold"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#E8192C] shadow-xs shrink-0"></span>
                  <span className="text-sm uppercase tracking-wide">Arsenal</span>
                </div>
                <span className="text-[11px] text-[#E8192C] font-bold font-mono">VISIT CLUB →</span>
              </Link>

              {/* Chelsea */}
              <Link
                href="/chelsea"
                className={`flex items-center justify-between p-2.5 rounded-xs transition-colors border ${
                  isActive("/chelsea")
                    ? "bg-blue-50/80 border-[#1C6BB0] text-[#1C6BB0] font-black"
                    : "bg-surface/50 border-hairline hover:bg-blue-50/50 hover:border-[#1C6BB0] text-ink font-bold"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#1C6BB0] shadow-xs shrink-0"></span>
                  <span className="text-sm uppercase tracking-wide">Chelsea</span>
                </div>
                <span className="text-[11px] text-[#1C6BB0] font-bold font-mono">VISIT CLUB →</span>
              </Link>

              {/* Tottenham */}
              <Link
                href="/tottenham"
                className={`flex items-center justify-between p-2.5 rounded-xs transition-colors border ${
                  isActive("/tottenham")
                    ? "bg-slate-100 border-[#24376B] text-[#24376B] font-black"
                    : "bg-surface/50 border-hairline hover:bg-slate-100/50 hover:border-[#24376B] text-ink font-bold"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#24376B] shadow-xs shrink-0"></span>
                  <span className="text-sm uppercase tracking-wide">Tottenham</span>
                </div>
                <span className="text-[11px] text-[#24376B] font-bold font-mono">VISIT CLUB →</span>
              </Link>
            </div>

            {/* Direct Section Links */}
            <div className="space-y-1.5 text-sm font-bold text-navy pt-1">
              <Link
                href="/community"
                className="flex items-center justify-between p-2.5 rounded hover:bg-surface border-b border-hairline/60"
              >
                <span>Community Hub</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-between p-2.5 rounded hover:bg-surface border-b border-hairline/60"
              >
                <span>About & Mission</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
              <Link
                href="/editorial-standards"
                className="flex items-center justify-between p-2.5 rounded hover:bg-surface border-b border-hairline/60"
              >
                <span>Editorial Standards</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-between p-2.5 rounded hover:bg-surface border-b border-hairline/60"
              >
                <span>Contact & Pitch</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
              <Link
                href="/admin"
                className="flex items-center justify-between p-2.5 rounded hover:bg-surface text-indigo font-black"
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

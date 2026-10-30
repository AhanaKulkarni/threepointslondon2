"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Search, ShieldCheck } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <header className="w-full bg-white border-b border-hairline sticky top-0 z-40 shadow-xs">
      {/* ========================================================
          MAIN MASTHEAD BAR (Desktop, Split-Screen & Mobile)
          Balanced breathing room up and down (Requirement 1)
         ======================================================== */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-4.5 flex items-center justify-between gap-4 min-h-[64px] sm:min-h-[72px]">
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
              className="h-7 sm:h-8 md:h-9 w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop & Tablet Navigation (hidden on mobile, flexible on split-screen) */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 font-bold text-xs lg:text-[13px] text-ink">
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
              <div className="absolute top-8 left-0 w-40 bg-white shadow-xl border-t-2 border-t-[#E8192C] border border-hairline py-1 z-50 rounded-b-xs animate-in fade-in duration-150">
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
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#E8192C]"
                >
                  Features
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
              <div className="absolute top-8 left-0 w-40 bg-white shadow-xl border-t-2 border-t-[#1C6BB0] border border-hairline py-1 z-50 rounded-b-xs animate-in fade-in duration-150">
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
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#1C6BB0]"
                >
                  Features
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
              <div className="absolute top-8 left-0 w-40 bg-white shadow-xl border-t-2 border-t-[#24376B] border border-hairline py-1 z-50 rounded-b-xs animate-in fade-in duration-150">
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
                  className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#24376B]"
                >
                  Features
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

        {/* Right Area: Tagline (Responsive & Non-overlapping) + Prominent Socials + Search */}
        <div className="flex items-center gap-3 lg:gap-4 shrink-0">
          {/* Tagline for medium/large displays (Protected from overlapping in split-screen) */}
          <div className="hidden xl:flex items-center text-[10px] xl:text-[11px] tracking-wide font-extrabold uppercase select-none whitespace-nowrap">
            <span className="text-[#1C6BB0]">ONE CITY. </span>
            <span className="text-[#E8192C]">THREE CLUBS. </span>
            <span className="text-[#111317]">ENDLESS PASSION.</span>
          </div>

          {/* Prominent Social Media Icons (Increased size as per Requirement 2) */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-gray-700">
            <a
              href="https://x.com/3pointslondon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-[#D2D6DC] rounded-xs flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy cursor-pointer transition-all shadow-2xs font-display font-black text-xs"
              title="Follow Three Points London on X"
              aria-label="Follow on X"
            >
              X
            </a>
            <a
              href="https://instagram.com/3pointslondon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-[#D2D6DC] rounded-xs flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy cursor-pointer transition-all shadow-2xs font-display font-black text-[11px]"
              title="Follow Three Points London on Instagram"
              aria-label="Follow on Instagram"
            >
              IG
            </a>
            <a
              href="https://facebook.com/3pointslondon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-[#D2D6DC] rounded-xs flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy cursor-pointer transition-all shadow-2xs font-display font-black text-xs"
              title="Follow Three Points London on Facebook"
              aria-label="Follow on Facebook"
            >
              F
            </a>
          </div>

          {/* Search Button (with prominent magnifying glass icon) */}
          <Link
            href="/search"
            className="w-8 h-8 sm:w-8.5 sm:h-8.5 border border-[#D2D6DC] rounded-xs flex items-center justify-center text-navy hover:bg-indigo hover:text-white hover:border-indigo transition-all shadow-2xs"
            title="Search Three Points London"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ========================================================
          MOBILE & SPLIT-SCREEN TAGLINE SUB-BAR
          Accommodates the tagline properly without clipping,
          overlapping, or unwanted line breaks (Requirement 1 & 8).
          No hamburger menu, no cluttered drawer (Requirement 8).
         ======================================================== */}
      <div className="xl:hidden bg-surface border-t border-hairline py-2 px-4 text-center">
        <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider select-none inline-flex flex-wrap items-center justify-center gap-1.5 leading-normal">
          <span className="text-[#1C6BB0]">ONE CITY.</span>
          <span className="text-gray-300">•</span>
          <span className="text-[#E8192C]">THREE CLUBS.</span>
          <span className="text-gray-300">•</span>
          <span className="text-[#111317]">ENDLESS PASSION.</span>
        </div>
      </div>
    </header>
  );
}

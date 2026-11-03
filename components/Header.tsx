"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Search, Menu, X, Plus, Minus } from "lucide-react";
import { SocialLinksBar } from "@/components/SocialIcons";

export default function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 250); // 250ms smooth grace period so mouse can easily move onto dropdown
    setDropdownTimeout(timeout);
  };

  // Close mobile drawer and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileAccordion(null);
  }, [pathname]);

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  const toggleMobileAccordion = (key: string) => {
    setMobileAccordion(mobileAccordion === key ? null : key);
  };

  return (
    <header className="w-full bg-white border-b border-hairline sticky top-0 z-40 shadow-xs">
      {/* ========================================================
          MAIN MASTHEAD BAR (Desktop & Mobile with Perfect Equal Spacing)
         ======================================================== */}
      {/* 1. Mobile & Split-Tab Masthead (below 1280px / phone / half-screen / split tab) */}
      <div className="xl:hidden w-full px-4 sm:px-6 py-2 flex items-center justify-between min-h-[60px] bg-[#1D2B45] text-white border-b border-[#2B3C5C] shadow-sm">
        {/* Left: Prominent Three-Hyphen Hamburger Button in Marquee Dark Navy Theme */}
        <div className="w-10 flex items-center justify-start shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 active:scale-95 transition-all cursor-pointer rounded-xs"
            title={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" strokeWidth={2.5} />
            ) : (
              /* High-contrast, authentic three-hyphen icon in crisp pure white */
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2.5" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2.5" />
                <line x1="3" y1="18" x2="21" y2="18" stroke="white" strokeWidth="2.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Center: Mathematically Centered TPL Logo with Tagline Incorporated */}
        <div className="flex-1 flex flex-col items-center justify-center px-2">
          <Link
            href="/"
            className="inline-flex flex-col items-center justify-center cursor-pointer hover:opacity-95 transition-opacity"
            title="Three Points London - Go to Homepage"
            aria-label="Three Points London Homepage"
          >
            <div className="bg-white px-2.5 py-1 rounded-xs shadow-xs inline-flex items-center">
              <img
                src="/logo.png"
                alt="Three Points London"
                className="h-6 sm:h-7 w-auto object-contain cursor-pointer"
              />
            </div>
            {/* Tagline incorporated directly into the main logo */}
            <span className="text-[10px] sm:text-[11.5px] tracking-wider font-extrabold uppercase mt-1 whitespace-nowrap select-none text-white">
              <span className="text-[#38BDF8]">ONE CITY. </span>
              <span className="text-[#F87171]">THREE CLUBS. </span>
              <span className="text-gray-200">ENDLESS PASSION.</span>
            </span>
          </Link>
        </div>

        {/* Right: Search Icon in matching Marquee Dark Navy Theme */}
        <div className="w-10 flex items-center justify-end shrink-0">
          <Link
            href="/search"
            className="w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 active:scale-95 transition-all cursor-pointer rounded-xs"
            title="Search newsroom"
            aria-label="Search Three Points London"
          >
            <Search className="w-6 h-6 text-white" strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      {/* 2. Desktop Masthead (Text elements close, arrows clearly visible, zero social cutoff) */}
      <div className="hidden xl:flex w-full items-center justify-between min-h-[58px] border-b border-hairline/40 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo + Nav Links (Close to each other) */}
          <div className="flex items-center gap-5 xl:gap-7 shrink-0">
            <Link
              href="/"
              className="inline-flex items-center cursor-pointer z-20 hover:opacity-95 transition-opacity shrink-0"
              title="Three Points London - Go to Homepage"
              aria-label="Three Points London Homepage"
            >
              <img
                src="/logo.png"
                alt="Three Points London"
                className="h-7 md:h-7.5 w-auto object-contain cursor-pointer"
              />
            </Link>

            {/* Desktop Navigation (Centered under names, zero crossover, smooth reliable hover) */}
            <nav className="flex items-center gap-1.5 xl:gap-2.5 font-bold text-xs lg:text-[13px] text-ink">
              {/* 1. About */}
              <div
                className="relative flex items-center py-2"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/about"
                  className={`flex items-center gap-1 px-2 py-1 hover:text-indigo transition-colors rounded-xs ${
                    isActive("/about") || isActive("/editorial-standards") ? "text-indigo font-black" : ""
                  }`}
                >
                  <span>About</span>
                  <ChevronDown className="w-3 h-3 text-gray-500 stroke-[2] shrink-0" />
                </Link>
                {openDropdown === "about" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-1.5 z-50 w-44 animate-in fade-in duration-150"
                    onMouseEnter={() => handleMouseEnter("about")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white shadow-xl border border-hairline py-1 rounded-b-xs">
                      <Link
                        href="/about"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo border-b border-hairline/60"
                      >
                        Who We Are
                      </Link>
                      <Link
                        href="/about/team"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo border-b border-hairline/60"
                      >
                        The Team
                      </Link>
                      <Link
                        href="/about/vision"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo border-b border-hairline/60"
                      >
                        Founder's Vision
                      </Link>
                      <Link
                        href="/editorial-standards"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo"
                      >
                        Editorial standards
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Arsenal */}
              <div
                className="relative flex items-center py-2"
                onMouseEnter={() => handleMouseEnter("arsenal")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/arsenal"
                  className={`flex items-center gap-1 px-2 py-1 hover:text-[#E8192C] transition-colors rounded-xs ${
                    isActive("/arsenal") ? "text-[#E8192C] font-black" : ""
                  }`}
                >
                  <span>Arsenal</span>
                  <ChevronDown className="w-3 h-3 text-[#E8192C] stroke-[2] shrink-0" />
                </Link>
                {openDropdown === "arsenal" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-1.5 z-50 w-36 animate-in fade-in duration-150"
                    onMouseEnter={() => handleMouseEnter("arsenal")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white shadow-xl border-t-2 border-t-[#E8192C] border border-hairline py-1 rounded-b-xs">
                      <Link
                        href="/arsenal/news"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#E8192C] border-b border-hairline/60"
                      >
                        News
                      </Link>
                      <Link
                        href="/arsenal/transfers"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#E8192C] border-b border-hairline/60"
                      >
                        Transfers
                      </Link>
                      <Link
                        href="/arsenal/matchday"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#E8192C] border-b border-hairline/60"
                      >
                        Matchday
                      </Link>
                      <Link
                        href="/arsenal/features"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#E8192C] border-b border-hairline/60"
                      >
                        Features
                      </Link>
                      <Link
                        href="/community/arsenal"
                        className="block px-3.5 py-2 text-xs font-bold text-[#E8192C] hover:bg-red-50 flex items-center justify-between"
                      >
                        <span>Community</span>
                        <span className="text-[10px] font-mono opacity-80">Room →</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Chelsea */}
              <div
                className="relative flex items-center py-2"
                onMouseEnter={() => handleMouseEnter("chelsea")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/chelsea"
                  className={`flex items-center gap-1 px-2 py-1 hover:text-[#1C6BB0] transition-colors rounded-xs ${
                    isActive("/chelsea") ? "text-[#1C6BB0] font-black" : ""
                  }`}
                >
                  <span>Chelsea</span>
                  <ChevronDown className="w-3 h-3 text-[#1C6BB0] stroke-[2] shrink-0" />
                </Link>
                {openDropdown === "chelsea" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-1.5 z-50 w-36 animate-in fade-in duration-150"
                    onMouseEnter={() => handleMouseEnter("chelsea")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white shadow-xl border-t-2 border-t-[#1C6BB0] border border-hairline py-1 rounded-b-xs">
                      <Link
                        href="/chelsea/news"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#1C6BB0] border-b border-hairline/60"
                      >
                        News
                      </Link>
                      <Link
                        href="/chelsea/transfers"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#1C6BB0] border-b border-hairline/60"
                      >
                        Transfers
                      </Link>
                      <Link
                        href="/chelsea/matchday"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#1C6BB0] border-b border-hairline/60"
                      >
                        Matchday
                      </Link>
                      <Link
                        href="/chelsea/features"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#1C6BB0] border-b border-hairline/60"
                      >
                        Features
                      </Link>
                      <Link
                        href="/community/chelsea"
                        className="block px-3.5 py-2 text-xs font-bold text-[#1C6BB0] hover:bg-blue-50 flex items-center justify-between"
                      >
                        <span>Community</span>
                        <span className="text-[10px] font-mono opacity-80">Room →</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Tottenham */}
              <div
                className="relative flex items-center py-2"
                onMouseEnter={() => handleMouseEnter("tottenham")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/tottenham"
                  className={`flex items-center gap-1 px-2 py-1 hover:text-[#24376B] transition-colors rounded-xs ${
                    isActive("/tottenham") ? "text-[#24376B] font-black" : ""
                  }`}
                >
                  <span>Tottenham</span>
                  <ChevronDown className="w-3 h-3 text-[#24376B] stroke-[2] shrink-0" />
                </Link>
                {openDropdown === "tottenham" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-1.5 z-50 w-36 animate-in fade-in duration-150"
                    onMouseEnter={() => handleMouseEnter("tottenham")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white shadow-xl border-t-2 border-t-[#24376B] border border-hairline py-1 rounded-b-xs">
                      <Link
                        href="/tottenham/news"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#24376B] border-b border-hairline/60"
                      >
                        News
                      </Link>
                      <Link
                        href="/tottenham/transfers"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#24376B] border-b border-hairline/60"
                      >
                        Transfers
                      </Link>
                      <Link
                        href="/tottenham/matchday"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#24376B] border-b border-hairline/60"
                      >
                        Matchday
                      </Link>
                      <Link
                        href="/tottenham/features"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#24376B] border-b border-hairline/60"
                      >
                        Features
                      </Link>
                      <Link
                        href="/community/tottenham"
                        className="block px-3.5 py-2 text-xs font-bold text-[#24376B] hover:bg-indigo-50 flex items-center justify-between"
                      >
                        <span>Community</span>
                        <span className="text-[10px] font-mono opacity-80">Room →</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 5. Community */}
              <div
                className="relative flex items-center py-2"
                onMouseEnter={() => handleMouseEnter("community")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/community"
                  className={`flex items-center gap-1 px-2 py-1 hover:text-indigo transition-colors rounded-xs ${
                    isActive("/community") ? "text-indigo font-black" : ""
                  }`}
                >
                  <span>Community</span>
                  <ChevronDown className="w-3 h-3 text-gray-500 stroke-[2] shrink-0" />
                </Link>
                {openDropdown === "community" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-1.5 z-50 w-44 animate-in fade-in duration-150"
                    onMouseEnter={() => handleMouseEnter("community")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white shadow-xl border border-hairline py-1 rounded-b-xs">
                      <Link
                        href="/community/arsenal"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#E8192C] border-b border-hairline/60"
                      >
                        Arsenal Room
                      </Link>
                      <Link
                        href="/community/chelsea"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#1C6BB0] border-b border-hairline/60"
                      >
                        Chelsea Room
                      </Link>
                      <Link
                        href="/community/tottenham"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-[#24376B]"
                      >
                        Tottenham Room
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 6. Contact */}
              <div
                className="relative flex items-center py-2"
                onMouseEnter={() => handleMouseEnter("contact")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/contact"
                  className={`flex items-center gap-1 px-2 py-1 hover:text-indigo transition-colors rounded-xs ${
                    isActive("/contact") ? "text-indigo font-black" : ""
                  }`}
                >
                  <span>Contact</span>
                  <ChevronDown className="w-3 h-3 text-gray-500 stroke-[2] shrink-0" />
                </Link>
                {openDropdown === "contact" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-1.5 z-50 w-48 animate-in fade-in duration-150"
                    onMouseEnter={() => handleMouseEnter("contact")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white shadow-xl border border-hairline py-1 rounded-b-xs">
                      <Link
                        href="/contact/advertise"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo border-b border-hairline/60"
                      >
                        Advertise / Guest Posting
                      </Link>
                      <Link
                        href="/contact/write"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo border-b border-hairline/60"
                      >
                        Write for us
                      </Link>
                      <Link
                        href="/contact/feedback"
                        className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo"
                      >
                        Feedback / Report an issue
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right: Tagline + Social Icons (Complete with zero cutoff) */}
          <div className="flex items-center gap-3 xl:gap-4 shrink-0">
            {/* Official Tagline */}
            <div className="hidden xl:flex items-center text-[10px] 2xl:text-[11px] tracking-wide font-extrabold uppercase select-none whitespace-nowrap shrink-0">
              <span className="text-[#1C6BB0]">ONE CITY. </span>
              <span className="text-[#E8192C]">THREE CLUBS. </span>
              <span className="text-[#111317]">ENDLESS PASSION.</span>
            </div>

            {/* Social Links (All 4 icons completely visible with safe border and spacing) */}
            <div className="flex items-center shrink-0 ">
              <SocialLinksBar iconSize={14} className="flex items-center gap-1.5" />
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================
          MOBILE DRAWER (Matching Image 4 Bottom-Left Exactly)
         ======================================================== */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-hairline shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {/* Drawer Header: Menu ✕ */}
          <div className="bg-[#1D2B45] text-white px-5 py-3 flex items-center justify-between">
            <span className="font-display font-black text-sm uppercase tracking-wider">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 hover:text-gray-300 cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Accordion List */}
          <div className="divide-y divide-hairline">
            {/* 1. About */}
            <div>
              <div
                onClick={() => toggleMobileAccordion("about")}
                className="flex items-center justify-between p-3.5 bg-white hover:bg-surface cursor-pointer"
              >
                <span className="font-headline font-bold text-sm text-navy">About</span>
                {mobileAccordion === "about" ? (
                  <Minus className="w-4 h-4 text-gray-500" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-500" />
                )}
              </div>
              {mobileAccordion === "about" && (
                <div className="bg-surface/50 px-5 py-2 space-y-2 text-xs font-semibold border-t border-hairline/60">
                  <Link href="/about" className="block py-1 hover:text-indigo">
                    Who We Are
                  </Link>
                  <Link href="/about/team" className="block py-1 hover:text-indigo">
                    The Team
                  </Link>
                  <Link href="/about/vision" className="block py-1 hover:text-indigo">
                    Founder's Vision
                  </Link>
                  <Link href="/editorial-standards" className="block py-1 hover:text-indigo">
                    Editorial standards
                  </Link>
                </div>
              )}
            </div>

            {/* 2. Arsenal */}
            <div>
              <div
                onClick={() => toggleMobileAccordion("arsenal")}
                className={`flex items-center justify-between p-3.5 bg-white hover:bg-surface cursor-pointer ${
                  mobileAccordion === "arsenal" ? "border-l-4 border-l-[#E8192C]" : ""
                }`}
              >
                <span className="font-headline font-bold text-sm text-navy">Arsenal</span>
                {mobileAccordion === "arsenal" ? (
                  <Minus className="w-4 h-4 text-[#E8192C]" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-500" />
                )}
              </div>
              {mobileAccordion === "arsenal" && (
                <div className="bg-surface/50 px-5 py-2 space-y-2 text-xs font-semibold border-t border-hairline/60">
                  <Link href="/arsenal/news" className="block py-1 hover:text-[#E8192C]">
                    News
                  </Link>
                  <Link href="/arsenal/transfers" className="block py-1 hover:text-[#E8192C]">
                    Transfers
                  </Link>
                  <Link href="/arsenal/matchday" className="block py-1 hover:text-[#E8192C]">
                    Matchday
                  </Link>
                  <Link href="/arsenal/features" className="block py-1 hover:text-[#E8192C]">
                    Features
                  </Link>
                  <Link href="/community/arsenal" className="block py-1 text-[#E8192C] font-bold">
                    Arsenal Community Room →
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Chelsea */}
            <div>
              <div
                onClick={() => toggleMobileAccordion("chelsea")}
                className={`flex items-center justify-between p-3.5 bg-white hover:bg-surface cursor-pointer ${
                  mobileAccordion === "chelsea" ? "border-l-4 border-l-[#1C6BB0]" : ""
                }`}
              >
                <span className="font-headline font-bold text-sm text-navy">Chelsea</span>
                {mobileAccordion === "chelsea" ? (
                  <Minus className="w-4 h-4 text-[#1C6BB0]" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-500" />
                )}
              </div>
              {mobileAccordion === "chelsea" && (
                <div className="bg-surface/50 px-5 py-2 space-y-2 text-xs font-semibold border-t border-hairline/60">
                  <Link href="/chelsea/news" className="block py-1 hover:text-[#1C6BB0]">
                    News
                  </Link>
                  <Link href="/chelsea/transfers" className="block py-1 hover:text-[#1C6BB0]">
                    Transfers
                  </Link>
                  <Link href="/chelsea/matchday" className="block py-1 hover:text-[#1C6BB0]">
                    Matchday
                  </Link>
                  <Link href="/chelsea/features" className="block py-1 hover:text-[#1C6BB0]">
                    Features
                  </Link>
                  <Link href="/community/chelsea" className="block py-1 text-[#1C6BB0] font-bold">
                    Chelsea Community Room →
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Tottenham */}
            <div>
              <div
                onClick={() => toggleMobileAccordion("tottenham")}
                className={`flex items-center justify-between p-3.5 bg-white hover:bg-surface cursor-pointer ${
                  mobileAccordion === "tottenham" ? "border-l-4 border-l-[#24376B]" : ""
                }`}
              >
                <span className="font-headline font-bold text-sm text-navy">Tottenham</span>
                {mobileAccordion === "tottenham" ? (
                  <Minus className="w-4 h-4 text-[#24376B]" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-500" />
                )}
              </div>
              {mobileAccordion === "tottenham" && (
                <div className="bg-surface/50 px-5 py-2 space-y-2 text-xs font-semibold border-t border-hairline/60">
                  <Link href="/tottenham/news" className="block py-1 hover:text-[#24376B]">
                    News
                  </Link>
                  <Link href="/tottenham/transfers" className="block py-1 hover:text-[#24376B]">
                    Transfers
                  </Link>
                  <Link href="/tottenham/matchday" className="block py-1 hover:text-[#24376B]">
                    Matchday
                  </Link>
                  <Link href="/tottenham/features" className="block py-1 hover:text-[#24376B]">
                    Features
                  </Link>
                  <Link href="/community/tottenham" className="block py-1 text-[#24376B] font-bold">
                    Tottenham Community Room →
                  </Link>
                </div>
              )}
            </div>

            {/* 5. Community */}
            <div>
              <div
                onClick={() => toggleMobileAccordion("community")}
                className="flex items-center justify-between p-3.5 bg-white hover:bg-surface cursor-pointer"
              >
                <span className="font-headline font-bold text-sm text-navy">Community</span>
                {mobileAccordion === "community" ? (
                  <Minus className="w-4 h-4 text-gray-500" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-500" />
                )}
              </div>
              {mobileAccordion === "community" && (
                <div className="bg-surface/50 px-5 py-2 space-y-2 text-xs font-semibold border-t border-hairline/60">
                  <Link href="/community" className="block py-1 hover:text-indigo">
                    All Community Rooms
                  </Link>
                  <Link href="/community/arsenal" className="block py-1 hover:text-[#E8192C]">
                    Arsenal Room
                  </Link>
                  <Link href="/community/chelsea" className="block py-1 hover:text-[#1C6BB0]">
                    Chelsea Room
                  </Link>
                  <Link href="/community/tottenham" className="block py-1 hover:text-[#24376B]">
                    Tottenham Room
                  </Link>
                </div>
              )}
            </div>

            {/* 6. Contact */}
            <div>
              <div
                onClick={() => toggleMobileAccordion("contact")}
                className="flex items-center justify-between p-3.5 bg-white hover:bg-surface cursor-pointer"
              >
                <span className="font-headline font-bold text-sm text-navy">Contact</span>
                {mobileAccordion === "contact" ? (
                  <Minus className="w-4 h-4 text-gray-500" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-500" />
                )}
              </div>
              {mobileAccordion === "contact" && (
                <div className="bg-surface/50 px-5 py-2 space-y-2 text-xs font-semibold border-t border-hairline/60">
                  <Link href="/contact/advertise" className="block py-1 hover:text-indigo">
                    Advertise / Guest Posting
                  </Link>
                  <Link href="/contact/write" className="block py-1 hover:text-indigo">
                    Write for us
                  </Link>
                  <Link href="/contact/feedback" className="block py-1 hover:text-indigo">
                    Feedback / Report an issue
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Socials at bottom of drawer */}
          <div className="p-4 bg-surface border-t border-hairline flex flex-col gap-2.5">
            <span className="text-[11px] font-mono font-bold uppercase text-muted tracking-wide">
              Follow Us on Social Media:
            </span>
            <SocialLinksBar iconSize={18} />
          </div>
        </div>
      )}
    </header>
  );
}

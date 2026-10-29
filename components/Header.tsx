"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Plus, Minus, Search } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedClub, setMobileExpandedClub] = useState<string | null>("arsenal");

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <header className="w-full bg-white border-b border-hairline sticky top-0 z-40">
      {/* ========================================================
          1. MAIN MASTHEAD BAR (Desktop & Mobile)
         ======================================================== */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 h-14 sm:h-16 flex items-center justify-between gap-4">
        {/* Mobile Left: Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-navy hover:text-indigo focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Center (Mobile) / Left (Desktop): Logo */}
        <div className="flex items-center gap-6 lg:gap-8 h-full justify-center md:justify-start flex-1 md:flex-initial">
          <Link href="/" className="inline-flex items-center shrink-0" title="Three Points London - Home">
            <img
              src="/logo.png"
              alt="Three Points London"
              className="h-6 sm:h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Tabs with Dropdown arrows */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 h-full font-bold text-[13px] text-ink">
            {/* 1. About */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/about"
                className={`flex items-center gap-1 px-2.5 py-1.5 hover:text-indigo transition-colors ${
                  isActive("/about") || isActive("/editorial-standards") ? "text-indigo font-black" : ""
                }`}
              >
                <span>About</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>
              {openDropdown === "about" && (
                <div className="absolute top-[52px] left-0 w-44 bg-white shadow-xl border border-hairline py-1 z-50 rounded-b-xs">
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
                    The Team
                  </Link>
                  <Link
                    href="/about#founder-vision"
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
                className={`flex items-center gap-1 px-2.5 py-1.5 hover:text-[#E8192C] transition-colors ${
                  isActive("/arsenal") ? "text-[#E8192C] font-black" : ""
                }`}
              >
                <span>Arsenal</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>
              {openDropdown === "arsenal" && (
                <div className="absolute top-[52px] left-0 w-40 bg-white shadow-xl border-t-2 border-t-[#E8192C] border border-hairline py-1 z-50 rounded-b-xs">
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
                className={`flex items-center gap-1 px-2.5 py-1.5 hover:text-[#1C6BB0] transition-colors ${
                  isActive("/chelsea") ? "text-[#1C6BB0] font-black" : ""
                }`}
              >
                <span>Chelsea</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>
              {openDropdown === "chelsea" && (
                <div className="absolute top-[52px] left-0 w-40 bg-white shadow-xl border-t-2 border-t-[#1C6BB0] border border-hairline py-1 z-50 rounded-b-xs">
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
                className={`flex items-center gap-1 px-2.5 py-1.5 hover:text-[#24376B] transition-colors ${
                  isActive("/tottenham") ? "text-[#24376B] font-black" : ""
                }`}
              >
                <span>Tottenham</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>
              {openDropdown === "tottenham" && (
                <div className="absolute top-[52px] left-0 w-40 bg-white shadow-xl border-t-2 border-t-[#24376B] border border-hairline py-1 z-50 rounded-b-xs">
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
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setOpenDropdown("community")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/community"
                className={`flex items-center gap-1 px-2.5 py-1.5 hover:text-indigo transition-colors ${
                  isActive("/community") ? "text-indigo font-black" : ""
                }`}
              >
                <span>Community</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>
              {openDropdown === "community" && (
                <div className="absolute top-[52px] left-0 w-36 bg-white shadow-xl border border-hairline py-1 z-50 rounded-b-xs">
                  <Link
                    href="/community"
                    className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo border-b border-hairline/60"
                  >
                    Arsenal
                  </Link>
                  <Link
                    href="/community"
                    className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo border-b border-hairline/60"
                  >
                    Chelsea
                  </Link>
                  <Link
                    href="/community"
                    className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo"
                  >
                    Tottenham
                  </Link>
                </div>
              )}
            </div>

            {/* 6. Contact */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setOpenDropdown("contact")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/contact"
                className={`flex items-center gap-1 px-2.5 py-1.5 hover:text-indigo transition-colors ${
                  isActive("/contact") ? "text-indigo font-black" : ""
                }`}
              >
                <span>Contact</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>
              {openDropdown === "contact" && (
                <div className="absolute top-[52px] left-0 w-48 bg-white shadow-xl border-t-2 border-t-ember border border-hairline py-1 z-50 rounded-b-xs">
                  <Link
                    href="/contact#advertise"
                    className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo border-b border-hairline/60"
                  >
                    Advertise / Guest Posting
                  </Link>
                  <Link
                    href="/contact#write"
                    className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo border-b border-hairline/60"
                  >
                    Write for us
                  </Link>
                  <Link
                    href="/contact#feedback"
                    className="block px-3.5 py-2 text-xs font-semibold hover:bg-surface hover:text-indigo"
                  >
                    Feedback / Report an issue
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Desktop Right: Tagline & Social Icons (Strictly as Mockup Image 1 & 4) */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="text-[11px] tracking-wide font-extrabold uppercase select-none">
            <span className="text-[#1C6BB0]">ONE CITY. </span>
            <span className="text-[#E8192C]">THREE CLUBS. </span>
            <span className="text-[#111317]">ENDLESS PASSION.</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-bold text-gray-700">
            <span className="w-6 h-6 border border-hairline rounded-xs flex items-center justify-center hover:bg-surface cursor-pointer transition-colors">
              X
            </span>
            <span className="w-6 h-6 border border-hairline rounded-xs flex items-center justify-center hover:bg-surface cursor-pointer transition-colors text-[10px]">
              IG
            </span>
            <span className="w-6 h-6 border border-hairline rounded-xs flex items-center justify-center hover:bg-surface cursor-pointer transition-colors">
              F
            </span>
          </div>
        </div>

        {/* Mobile Right: Search Icon (Mockup Image 3) */}
        <div className="flex md:hidden items-center">
          <Link
            href="/search"
            className="p-1.5 text-navy hover:text-indigo"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* ========================================================
          2. MOBILE HORIZONTAL SUB-NAVIGATION BAR (Mockup Image 3)
         ======================================================== */}
      <div className="md:hidden border-t border-hairline bg-white px-3 overflow-x-auto whitespace-nowrap scrollbar-none flex items-center gap-4 text-xs font-bold text-ink h-10">
        <Link
          href="/about"
          className={`flex items-center gap-0.5 py-2 hover:text-indigo ${
            isActive("/about") ? "text-indigo border-b-2 border-indigo" : "text-gray-700"
          }`}
        >
          <span>About</span>
          <ChevronDown className="w-3 h-3 opacity-60" />
        </Link>

        {/* Arsenal with Red underline if active or default (as in Mockup 3) */}
        <Link
          href="/arsenal"
          className={`flex items-center gap-0.5 py-2 hover:text-[#E8192C] ${
            isActive("/arsenal") || pathname === "/"
              ? "text-[#E8192C] border-b-2 border-[#E8192C] font-black"
              : "text-gray-700"
          }`}
        >
          <span>Arsenal</span>
          <ChevronDown className="w-3 h-3 opacity-60" />
        </Link>

        <Link
          href="/chelsea"
          className={`flex items-center gap-0.5 py-2 hover:text-[#1C6BB0] ${
            isActive("/chelsea")
              ? "text-[#1C6BB0] border-b-2 border-[#1C6BB0] font-black"
              : "text-gray-700"
          }`}
        >
          <span>Chelsea</span>
          <ChevronDown className="w-3 h-3 opacity-60" />
        </Link>

        <Link
          href="/tottenham"
          className={`flex items-center gap-0.5 py-2 hover:text-[#24376B] ${
            isActive("/tottenham")
              ? "text-[#24376B] border-b-2 border-[#24376B] font-black"
              : "text-gray-700"
          }`}
        >
          <span>Tottenham</span>
          <ChevronDown className="w-3 h-3 opacity-60" />
        </Link>

        <Link
          href="/community"
          className={`flex items-center gap-0.5 py-2 hover:text-indigo ${
            isActive("/community") ? "text-indigo border-b-2 border-indigo font-black" : "text-gray-700"
          }`}
        >
          <span>Community</span>
          <ChevronDown className="w-3 h-3 opacity-60" />
        </Link>

        <Link
          href="/contact"
          className={`flex items-center gap-0.5 py-2 hover:text-indigo ${
            isActive("/contact") ? "text-indigo border-b-2 border-indigo font-black" : "text-gray-700"
          }`}
        >
          <span>Contact</span>
          <ChevronDown className="w-3 h-3 opacity-60" />
        </Link>
      </div>

      {/* ========================================================
          3. MOBILE DRAWER ACCORDION (Mockup Image 4)
         ======================================================== */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-hairline bg-white shadow-xl animate-in fade-in duration-200">
          <div className="bg-[#1D2B45] text-white px-4 py-3 flex items-center justify-between font-extrabold text-sm">
            <span>Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-gray-300"
            >
              ✕
            </button>
          </div>

          <div className="divide-y divide-hairline text-xs font-bold text-ink">
            {/* About */}
            <div className="px-4 py-3 flex items-center justify-between hover:bg-surface">
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Plus className="w-3.5 h-3.5 text-muted" />
            </div>

            {/* Arsenal with red indicator bar */}
            <div>
              <div
                className="px-4 py-3 flex items-center justify-between hover:bg-surface cursor-pointer border-l-4 border-l-[#E8192C]"
                onClick={() =>
                  setMobileExpandedClub(mobileExpandedClub === "arsenal" ? null : "arsenal")
                }
              >
                <Link
                  href="/arsenal"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen(false);
                  }}
                  className="font-black text-[#E8192C]"
                >
                  Arsenal
                </Link>
                {mobileExpandedClub === "arsenal" ? (
                  <Minus className="w-3.5 h-3.5 text-[#E8192C]" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-muted" />
                )}
              </div>
              {mobileExpandedClub === "arsenal" && (
                <div className="bg-[#F8F9FA] pl-8 pr-4 py-2 space-y-2 text-muted font-semibold border-l-4 border-l-[#E8192C]">
                  <Link
                    href="/arsenal?desk=news"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#E8192C]"
                  >
                    News
                  </Link>
                  <Link
                    href="/arsenal?desk=transfers"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#E8192C]"
                  >
                    Transfers
                  </Link>
                  <Link
                    href="/arsenal?desk=matchday"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#E8192C]"
                  >
                    Matchday
                  </Link>
                  <Link
                    href="/arsenal?desk=features"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#E8192C]"
                  >
                    Features
                  </Link>
                </div>
              )}
            </div>

            {/* Chelsea with blue indicator bar */}
            <div>
              <div
                className="px-4 py-3 flex items-center justify-between hover:bg-surface cursor-pointer border-l-4 border-l-[#1C6BB0]"
                onClick={() =>
                  setMobileExpandedClub(mobileExpandedClub === "chelsea" ? null : "chelsea")
                }
              >
                <Link
                  href="/chelsea"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen(false);
                  }}
                  className="font-black text-[#1C6BB0]"
                >
                  Chelsea
                </Link>
                {mobileExpandedClub === "chelsea" ? (
                  <Minus className="w-3.5 h-3.5 text-[#1C6BB0]" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-muted" />
                )}
              </div>
              {mobileExpandedClub === "chelsea" && (
                <div className="bg-[#F8F9FA] pl-8 pr-4 py-2 space-y-2 text-muted font-semibold border-l-4 border-l-[#1C6BB0]">
                  <Link
                    href="/chelsea?desk=news"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#1C6BB0]"
                  >
                    News
                  </Link>
                  <Link
                    href="/chelsea?desk=transfers"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#1C6BB0]"
                  >
                    Transfers
                  </Link>
                  <Link
                    href="/chelsea?desk=matchday"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#1C6BB0]"
                  >
                    Matchday
                  </Link>
                  <Link
                    href="/chelsea?desk=features"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#1C6BB0]"
                  >
                    Features
                  </Link>
                </div>
              )}
            </div>

            {/* Tottenham with navy indicator bar */}
            <div>
              <div
                className="px-4 py-3 flex items-center justify-between hover:bg-surface cursor-pointer border-l-4 border-l-[#24376B]"
                onClick={() =>
                  setMobileExpandedClub(mobileExpandedClub === "tottenham" ? null : "tottenham")
                }
              >
                <Link
                  href="/tottenham"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen(false);
                  }}
                  className="font-black text-[#24376B]"
                >
                  Tottenham
                </Link>
                {mobileExpandedClub === "tottenham" ? (
                  <Minus className="w-3.5 h-3.5 text-[#24376B]" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-muted" />
                )}
              </div>
              {mobileExpandedClub === "tottenham" && (
                <div className="bg-[#F8F9FA] pl-8 pr-4 py-2 space-y-2 text-muted font-semibold border-l-4 border-l-[#24376B]">
                  <Link
                    href="/tottenham?desk=news"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#24376B]"
                  >
                    News
                  </Link>
                  <Link
                    href="/tottenham?desk=transfers"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#24376B]"
                  >
                    Transfers
                  </Link>
                  <Link
                    href="/tottenham?desk=matchday"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#24376B]"
                  >
                    Matchday
                  </Link>
                  <Link
                    href="/tottenham?desk=features"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#24376B]"
                  >
                    Features
                  </Link>
                </div>
              )}
            </div>

            {/* Community */}
            <div className="px-4 py-3 flex items-center justify-between hover:bg-surface">
              <Link href="/community" onClick={() => setMobileMenuOpen(false)}>
                Community
              </Link>
              <Plus className="w-3.5 h-3.5 text-muted" />
            </div>

            {/* Contact */}
            <div className="px-4 py-3 flex items-center justify-between hover:bg-surface">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Plus className="w-3.5 h-3.5 text-muted" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

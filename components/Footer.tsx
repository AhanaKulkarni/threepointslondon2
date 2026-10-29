import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1D2B45] text-white pt-12 pb-16">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#2B3C5C]">
          {/* Left Column: Brand & Disclaimer (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="bg-white px-3 py-1.5 rounded-xs inline-flex items-center shadow-xs hover:opacity-95 transition-opacity"
              title="Three Points London"
            >
              <img
                src="/logo.png"
                alt="Three Points London"
                className="h-6 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-gray-300 leading-relaxed max-w-sm font-normal">
              Independent coverage of Arsenal, Chelsea and Tottenham. Not
              affiliated with, endorsed by, or connected to any football club.
            </p>

            {/* Square social pills */}
            <div className="flex items-center gap-2 pt-2">
              {["X", "IG", "YT", "TT"].map((net) => (
                <span
                  key={net}
                  className="w-7 h-7 border border-gray-600 rounded-xs flex items-center justify-center text-[10px] font-bold text-gray-300 hover:text-white hover:border-gray-400 cursor-pointer transition-colors"
                >
                  {net}
                </span>
              ))}
            </div>
          </div>

          {/* Right Columns: Desks & Trust (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-5 gap-6 text-xs">
            {/* 1. ARSENAL */}
            <div>
              <h3 className="font-extrabold uppercase tracking-wider text-white mb-3 text-[11px]">
                ARSENAL
              </h3>
              <ul className="space-y-2 text-gray-300 font-medium">
                <li>
                  <Link href="/arsenal?desk=news" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/arsenal?desk=transfers" className="hover:text-white transition-colors">
                    Transfers
                  </Link>
                </li>
                <li>
                  <Link href="/arsenal?desk=matchday" className="hover:text-white transition-colors">
                    Matchday
                  </Link>
                </li>
                <li>
                  <Link href="/arsenal?desk=features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            {/* 2. CHELSEA */}
            <div>
              <h3 className="font-extrabold uppercase tracking-wider text-white mb-3 text-[11px]">
                CHELSEA
              </h3>
              <ul className="space-y-2 text-gray-300 font-medium">
                <li>
                  <Link href="/chelsea?desk=news" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/chelsea?desk=transfers" className="hover:text-white transition-colors">
                    Transfers
                  </Link>
                </li>
                <li>
                  <Link href="/chelsea?desk=matchday" className="hover:text-white transition-colors">
                    Matchday
                  </Link>
                </li>
                <li>
                  <Link href="/chelsea?desk=features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3. TOTTENHAM */}
            <div>
              <h3 className="font-extrabold uppercase tracking-wider text-white mb-3 text-[11px]">
                TOTTENHAM
              </h3>
              <ul className="space-y-2 text-gray-300 font-medium">
                <li>
                  <Link href="/tottenham?desk=news" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/tottenham?desk=transfers" className="hover:text-white transition-colors">
                    Transfers
                  </Link>
                </li>
                <li>
                  <Link href="/tottenham?desk=matchday" className="hover:text-white transition-colors">
                    Matchday
                  </Link>
                </li>
                <li>
                  <Link href="/tottenham?desk=features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4. ABOUT */}
            <div>
              <h3 className="font-extrabold uppercase tracking-wider text-white mb-3 text-[11px]">
                ABOUT
              </h3>
              <ul className="space-y-2 text-gray-300 font-medium">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link href="/author/vayam-lahoti" className="hover:text-white transition-colors">
                    The Team
                  </Link>
                </li>
                <li>
                  <Link href="/about#founder-vision" className="hover:text-white transition-colors">
                    Founder's Vision
                  </Link>
                </li>
                <li>
                  <Link href="/editorial-standards" className="hover:text-white transition-colors">
                    Editorial standards
                  </Link>
                </li>
                <li>
                  <Link href="/corrections" className="hover:text-white transition-colors">
                    Corrections
                  </Link>
                </li>
              </ul>
            </div>

            {/* 5. CONTACT */}
            <div>
              <h3 className="font-extrabold uppercase tracking-wider text-white mb-3 text-[11px]">
                CONTACT
              </h3>
              <ul className="space-y-2 text-gray-300 font-medium">
                <li>
                  <Link href="/contact#advertise" className="hover:text-white transition-colors">
                    Advertise / Guest Posting
                  </Link>
                </li>
                <li>
                  <Link href="/contact#write" className="hover:text-white transition-colors">
                    Write for us
                  </Link>
                </li>
                <li>
                  <Link href="/contact#feedback" className="hover:text-white transition-colors">
                    Feedback / Report an issue
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-gray-400">
          <div>
            <p>© 2026 Three Points London Ltd. Registered in England & Wales.</p>
            <p className="text-gray-500 mt-0.5">Built in London. Written for everywhere.</p>
          </div>

          <div className="flex items-center gap-5 font-semibold">
            <Link href="/editorial-standards" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/editorial-standards" className="hover:text-white transition-colors">
              Cookies
            </Link>
            <Link href="/editorial-standards" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/editorial-standards" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

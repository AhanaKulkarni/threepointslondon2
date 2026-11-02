import React from "react";
import Link from "next/link";
import { ShieldCheck, Users } from "lucide-react";
import { InstagramIcon, XTwitterIcon, FacebookIcon, LinkedInIcon } from "@/components/SocialIcons";

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
              className="bg-white px-3 py-1.5 rounded-xs inline-flex items-center shadow-xs hover:opacity-95 transition-opacity cursor-pointer"
              title="Three Points London - Return to Home"
            >
              <img
                src="/logo.png"
                alt="Three Points London"
                className="h-6 w-auto object-contain cursor-pointer"
              />
            </Link>

            <p className="text-xs text-gray-300 leading-relaxed max-w-sm font-normal">
              Independent coverage of Arsenal, Chelsea and Tottenham. Not
              affiliated with, endorsed by, or connected to any football club.
            </p>

            {/* Social Media Links with Genuine SVGs */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://x.com/3pointslondon"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on X"
                className="w-9 h-9 border border-gray-600 rounded-xs flex items-center justify-center text-gray-300 hover:text-white hover:border-white hover:bg-black transition-all shadow-xs"
              >
                <XTwitterIcon size={15} />
              </a>
              <a
                href="https://instagram.com/3pointslondon"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Instagram"
                className="w-9 h-9 border border-gray-600 rounded-xs flex items-center justify-center text-gray-300 hover:text-white hover:border-transparent hover:bg-gradient-to-tr hover:from-[#fdf497] hover:via-[#d6249f] hover:to-[#285AEB] transition-all shadow-xs"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://linkedin.com/company/threepointslondon"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on LinkedIn"
                className="w-9 h-9 border border-gray-600 rounded-xs flex items-center justify-center text-gray-300 hover:text-white hover:border-[#0077B5] hover:bg-[#0077B5] transition-all shadow-xs"
              >
                <LinkedInIcon size={15} />
              </a>
              <a
                href="https://facebook.com/3pointslondon"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Facebook"
                className="w-9 h-9 border border-gray-600 rounded-xs flex items-center justify-center text-gray-300 hover:text-white hover:border-[#1877F2] hover:bg-[#1877F2] transition-all shadow-xs"
              >
                <FacebookIcon size={15} />
              </a>
            </div>
          </div>

          {/* Right Columns: Desks & Trust (8 cols - exactly matching Mockup Image 3 & 4) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-xs">
            {/* 1. ARSENAL */}
            <div>
              <h3 className="font-extrabold uppercase tracking-wider text-white mb-3 text-[11px] flex items-center gap-1.5">
                <span className="w-2 h-[2px] bg-[#E8192C]"></span>
                <span>ARSENAL</span>
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
              <h3 className="font-extrabold uppercase tracking-wider text-white mb-3 text-[11px] flex items-center gap-1.5">
                <span className="w-2 h-[2px] bg-[#1C6BB0]"></span>
                <span>CHELSEA</span>
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
              <h3 className="font-extrabold uppercase tracking-wider text-white mb-3 text-[11px] flex items-center gap-1.5">
                <span className="w-2 h-[2px] bg-[#24376B]"></span>
                <span>TOTTENHAM</span>
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

            {/* 4. ABOUT (Matching Mockup Image 3 & 4) */}
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
                  <Link href="/about#vision" className="hover:text-white transition-colors">
                    Founder's Vision
                  </Link>
                </li>
                <li>
                  <Link href="/editorial-standards" className="hover:text-white transition-colors">
                    Editorial standards
                  </Link>
                </li>
                <li>
                  <Link href="/contact#feedback" className="hover:text-white transition-colors">
                    Corrections
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-[11px] pt-1">
                    <ShieldCheck className="w-3 h-3 text-indigo-400" />
                    <span>Admin</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* 5. CONTACT (Matching Mockup Image 3 & 4) */}
            <div>
              <h3 className="font-extrabold uppercase tracking-wider text-white mb-3 text-[11px]">
                CONTACT
              </h3>
              <ul className="space-y-2 text-gray-300 font-medium">
                <li>
                  <Link href="/contact?topic=ads" className="hover:text-white transition-colors">
                    Advertise / Guest Posting
                  </Link>
                </li>
                <li>
                  <Link href="/contact?topic=pitch" className="hover:text-white transition-colors">
                    Write for us
                  </Link>
                </li>
                <li>
                  <Link href="/contact?topic=feedback" className="hover:text-white transition-colors">
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

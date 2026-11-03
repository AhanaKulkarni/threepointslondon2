import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, ArrowRight, Award, BookOpen } from "lucide-react";

export const metadata = {
  title: "The Editorial Team | Three Points London",
  description: "Meet the journalists, tacticians, and data analysts powering Three Points London's independent coverage of Arsenal, Chelsea, and Tottenham Hotspur.",
};

export default function TeamPage() {
  return (
    <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="max-w-4xl pb-6 border-b border-hairline">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#E8192C] mb-2">
          <span>ABOUT</span>
          <span>•</span>
          <span>THE EDITORIAL DESK</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-navy uppercase leading-tight mb-4">
          The Editorial Team
        </h1>
        <p className="font-body text-base sm:text-lg text-[#333] leading-relaxed max-w-3xl">
          Three Points London operates dedicated desks for Arsenal, Chelsea, and Tottenham Hotspur. Our newsroom produces original reporting, deep-dive tactical breakdowns, and empirical data analysis seven days a week.
        </p>
      </div>

      {/* Founder Profile */}
      <div className="bg-surface border border-hairline rounded-xl p-6 sm:p-8 lg:p-10 shadow-sm max-w-4xl">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-navy text-white flex items-center justify-center font-display font-black text-2xl sm:text-3xl shrink-0 shadow-md">
            VL
          </div>
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-display font-black text-2xl text-navy">Vayam Lahoti</h2>
              <span className="bg-[#1D2B45] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-xs tracking-wider">
                Founder & Editor-in-Chief
              </span>
            </div>
            <p className="text-xs font-semibold text-muted">
              Desk Lead: Arsenal Tactics, Recruitment Models & Financial Governance
            </p>
            <p className="font-body text-sm text-[#444] leading-relaxed">
              Founder and Editor of Three Points London. Journalism graduate of the University of Sheffield (BA Journalism Studies), previously editorial lead at a Premier League club brand with an audience of over 2.5 million readers. Writes extensively on tactical structures, data modeling, recruitment strategy, and regulatory economics. Former semi-professional footballer.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold">
              <Link
                href="/author/vayam-lahoti"
                className="text-indigo hover:text-ember transition-colors inline-flex items-center gap-1"
              >
                <span>Read Vyam's Author Archive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="text-muted hover:text-navy transition-colors inline-flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Editor Directly</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Three Club Desks */}
      <div className="max-w-4xl space-y-6">
        <h2 className="font-display font-black text-xl text-navy uppercase tracking-wide">
          Our Three Specialist Desks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-t-4 border-t-[#E8192C] border border-hairline p-5 rounded-xs shadow-xs space-y-2">
            <h3 className="font-headline font-bold text-base text-navy">Arsenal Desk</h3>
            <p className="text-xs text-muted leading-relaxed font-body">
              London Colney reporting, Colney-to-Emirates academy pipelines, data scouting, and Mikel Arteta's tactical phase transitions.
            </p>
            <Link href="/arsenal" className="text-xs font-bold text-[#E8192C] hover:underline block pt-2">
              Explore Arsenal Desk →
            </Link>
          </div>

          <div className="bg-white border-t-4 border-t-[#1C6BB0] border border-hairline p-5 rounded-xs shadow-xs space-y-2">
            <h3 className="font-headline font-bold text-base text-navy">Chelsea Desk</h3>
            <p className="text-xs text-muted leading-relaxed font-body">
              Cobham academy tracking, amortization accounting, multi-club network logistics, and Xabi Alonso's possession architecture.
            </p>
            <Link href="/chelsea" className="text-xs font-bold text-[#1C6BB0] hover:underline block pt-2">
              Explore Chelsea Desk →
            </Link>
          </div>

          <div className="bg-white border-t-4 border-t-[#24376B] border border-hairline p-5 rounded-xs shadow-xs space-y-2">
            <h3 className="font-headline font-bold text-base text-navy">Tottenham Desk</h3>
            <p className="text-xs text-muted leading-relaxed font-body">
              Hotspur Way intelligence, recruitment analytics, Roberto De Zerbi's build-up mechanics, and Tottenham stadium financial metrics.
            </p>
            <Link href="/tottenham" className="text-xs font-bold text-[#24376B] hover:underline block pt-2">
              Explore Tottenham Desk →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

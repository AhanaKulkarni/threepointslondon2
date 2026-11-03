import React from "react";
import Link from "next/link";
import { PenTool, Mail, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Write For Us · Pitching Guidelines | Three Points London",
  description: "Pitch the Three Points London newsdesk. We commission original tactical reporting, data investigations, and deep features across Arsenal, Chelsea, and Tottenham Hotspur.",
};

export default function WriteForUsPage() {
  return (
    <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 space-y-10">
      <div className="max-w-4xl pb-6 border-b border-hairline">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#E8192C] mb-2">
          <span>EDITORIAL</span>
          <span>•</span>
          <span>COMMISSIONS & PITCHES</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-navy uppercase leading-tight mb-4">
          Write For Us
        </h1>
        <p className="font-body text-base sm:text-lg text-[#333] leading-relaxed max-w-3xl">
          Three Points London pays competitive rates for original, empirical football journalism. We are actively looking for writers, analysts, and reporters who bring distinct insight into Arsenal, Chelsea, or Tottenham Hotspur.
        </p>
      </div>

      <div className="max-w-3xl space-y-6 font-body text-sm text-[#333] leading-relaxed">
        <h2 className="font-display font-black text-xl text-navy uppercase">What We Look For</h2>
        <ul className="space-y-3 list-disc pl-5 text-xs text-muted font-normal">
          <li><strong>Tactical Deep Dives:</strong> Explain the structural why behind a team's performance, supported by optical tracking, video clips, and tactical diagrams.</li>
          <li><strong>Financial & Regulatory Analytics:</strong> Clear, forensic explainers on PSR, amortisation, squad cost ratios, and commercial stadium revenues.</li>
          <li><strong>Academy & Scouting Intelligence:</strong> Detailed reporting on academy pipelines at Hale End, Cobham, or Hotspur Way.</li>
          <li><strong>Original Investigations:</strong> Exclusive reporting that breaks news rather than aggregates it.</li>
        </ul>

        <div className="p-6 bg-surface border border-hairline rounded-xs space-y-3">
          <h3 className="font-headline font-bold text-sm text-navy uppercase">How to Pitch</h3>
          <p className="text-xs text-muted leading-relaxed">
            Send a brief (2-3 paragraphs) outline of your proposed piece, why it matters now, what data or sources you will use, and links to your previous work. Address pitches directly to Founder & Editor Vyam Lahoti:
          </p>
          <a
            href="mailto:pitches@threepointslondon.com?subject=Pitch%20-%20Three%20Points%20London"
            className="text-xs font-bold text-indigo hover:text-ember transition-colors inline-flex items-center gap-1 pt-1"
          >
            <span>pitches@threepointslondon.com</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Corrections & Feedback | Three Points London",
  description: "Report an issue, request a correction, or provide editorial feedback to the Three Points London newsroom.",
};

export default function FeedbackPage() {
  return (
    <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 space-y-10">
      <div className="max-w-4xl pb-6 border-b border-hairline">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#CE3426] mb-2">
          <span>GOVERNANCE</span>
          <span>•</span>
          <span>ACCURACY & CORRECTIONS</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-navy uppercase leading-tight mb-4">
          Corrections & Editorial Feedback
        </h1>
        <p className="font-body text-base sm:text-lg text-[#333] leading-relaxed max-w-3xl">
          Three Points London is committed to complete factual and statistical accuracy. When an error occurs, we correct it transparently and rapidly.
        </p>
      </div>

      <div className="max-w-3xl space-y-6 font-body text-sm text-[#333] leading-relaxed">
        <p>
          We welcome thoughtful editorial feedback, critique of our tactical analysis, commentary on our data methodologies, and direct notes to our editor.
        </p>

        <div className="p-6 bg-surface border border-hairline rounded-xs space-y-3">
          <h3 className="font-headline font-bold text-sm text-navy uppercase">Write to the Editor</h3>
          <p className="text-xs text-muted leading-relaxed">
            Have thoughts on our coverage, ideas for future investigations, or feedback on our reporting? You can write directly to our Editor-in-Chief.
          </p>
          <a
            href="mailto:editor@threepointslondon.com?subject=Editorial%20Feedback%20-%20Three%20Points%20London"
            className="text-xs font-bold text-indigo hover:text-ember transition-colors inline-flex items-center gap-1 pt-1"
          >
            <span>editor@threepointslondon.com</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="p-6 bg-surface border border-hairline rounded-xs space-y-3">
          <h3 className="font-headline font-bold text-sm text-navy uppercase">Direct Corrections Dispatch</h3>
          <p className="text-xs text-muted leading-relaxed">
            Please include the article URL, the specific sentence or data point in question, and the verifiable source or correction. All requests are reviewed within 24 hours.
          </p>
          <a
            href="mailto:corrections@threepointslondon.com?subject=Correction%20Request%20-%20Three%20Points%20London"
            className="text-xs font-bold text-indigo hover:text-ember transition-colors inline-flex items-center gap-1 pt-1"
          >
            <span>corrections@threepointslondon.com</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="pt-4 flex items-center gap-4 text-xs font-bold">
          <Link href="/editorial-standards" className="text-indigo hover:underline">
            Read Our Full Editorial Standards →
          </Link>
          <Link href="/corrections" className="text-muted hover:underline">
            View Public Corrections Log →
          </Link>
        </div>
      </div>
    </div>
  );
}

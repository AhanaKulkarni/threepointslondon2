import React from "react";
import Link from "next/link";
import { Megaphone, Mail, ArrowRight, BarChart3, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Advertise & Partnerships | Three Points London",
  description: "Reach an engaged, high-income audience of dedicated London football supporters through high-impact sponsorships and commercial partnerships.",
};

export default function AdvertisePage() {
  return (
    <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 space-y-10">
      <div className="max-w-4xl pb-6 border-b border-hairline">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo mb-2">
          <span>COMMERCIAL</span>
          <span>•</span>
          <span>SPONSORSHIPS & GUEST POSTING</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-navy uppercase leading-tight mb-4">
          Advertise With Three Points London
        </h1>
        <p className="font-body text-base sm:text-lg text-[#333] leading-relaxed max-w-3xl">
          Three Points London connects forward-thinking brands with our highly engaged readership across London, the UK, and international Premier League fanbases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <div className="bg-surface p-6 border border-hairline rounded-xs space-y-2">
          <div className="font-display font-black text-3xl text-navy">2.5M+</div>
          <h3 className="font-headline font-bold text-sm text-navy uppercase">Targeted Monthly Impressions</h3>
          <p className="text-xs text-muted font-body">Direct exposure on premium above-the-fold units, marquee placements, and dedicated club desks.</p>
        </div>
        <div className="bg-surface p-6 border border-hairline rounded-xs space-y-2">
          <div className="font-display font-black text-3xl text-navy">88%</div>
          <h3 className="font-headline font-bold text-sm text-navy uppercase">London & UK Metro Core</h3>
          <p className="text-xs text-muted font-body">Concentrated audience of London professionals, season-ticket holders, and dedicated matchgoers.</p>
        </div>
        <div className="bg-surface p-6 border border-hairline rounded-xs space-y-2">
          <div className="font-display font-black text-3xl text-navy">100%</div>
          <h3 className="font-headline font-bold text-sm text-navy uppercase">Independent Clutter-Free Space</h3>
          <p className="text-xs text-muted font-body">Strict viewability guidelines with zero invasive pop-ups, ensuring premium brand safety.</p>
        </div>
      </div>

      <div className="bg-white border border-hairline rounded-xl p-6 sm:p-8 max-w-3xl space-y-4">
        <h2 className="font-headline font-bold text-lg text-navy">Inquire About Rates & Media Kit</h2>
        <p className="text-xs text-muted leading-relaxed font-body">
          To receive our commercial rate card, audience demographic breakdown, or to discuss custom brand partnerships and newsletter sponsorships, contact our partnerships desk directly:
        </p>
        <div className="pt-2">
          <a
            href="mailto:partnerships@threepointslondon.com?subject=Advertising%20Inquiry%20-%20Three%20Points%20London"
            className="px-5 py-2.5 bg-navy text-white text-xs font-bold rounded-xs hover:bg-navy/90 transition-colors inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>partnerships@threepointslondon.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

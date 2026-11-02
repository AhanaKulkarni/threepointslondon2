import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FeaturesSection from "@/components/FeaturesSection";
import AdSlot from "@/components/AdSlot";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Data-Led Features | Three Points London",
  description:
    "Tactical analytics, financial sustainability breakdowns, and proprietary metrics for Arsenal, Chelsea, and Tottenham Hotspur.",
};

export default function FeaturesPage() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 space-y-8">
      {/* Top Breadcrumb & Return to Home */}
      <div className="flex items-center justify-between pb-3 border-b border-hairline">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-indigo transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Homepage</span>
        </Link>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted">
          Proprietary Intelligence · Three Points London
        </span>
      </div>

      {/* Main Features Content */}
      <FeaturesSection />

      {/* Billboard Ad Slot */}
      <div className="pt-6">
        <AdSlot
          id="features_billboard_970x250"
          label="AD — 970×250 BILLBOARD · DATA-LED FEATURES SPONSORSHIP"
        />
      </div>
    </div>
  );
}

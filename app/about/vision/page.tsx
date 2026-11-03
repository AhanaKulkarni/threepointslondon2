import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Founder's Vision | Three Points London",
  description: "The founding manifesto and editorial philosophy behind Three Points London, by Founder & Editor Vyam Lahoti.",
};

export default function VisionPage() {
  return (
    <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="max-w-4xl pb-6 border-b border-hairline">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#CE3426] mb-2">
          <span>ABOUT</span>
          <span>•</span>
          <span>FOUNDING MANIFESTO</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-navy uppercase leading-tight mb-4">
          Founder's Vision
        </h1>
        <p className="font-headline font-semibold text-lg sm:text-xl text-muted">
          By Vyam Lahoti · Founder & Editor-in-Chief
        </p>
      </div>

      {/* Main Manifesto */}
      <div className="max-w-3xl space-y-6 font-body text-base text-[#222] leading-relaxed">
        <p className="text-lg font-medium text-navy leading-normal">
          Three Points London was conceived around a simple observation: modern football media is broken by aggregated gossip, social-media baiting, and partisan sensationalism.
        </p>

        <p>
          London is the undisputed capital of world football. In Arsenal, Chelsea, and Tottenham Hotspur, the city hosts three global institutions with contrasting identities, immense resources, and shared rivalries. Yet supporters of all three clubs have long suffered from identical editorial neglect: surface-level match reaction and unverified transfer rumors engineered for social clicks rather than illumination.
        </p>

        <h2 className="font-display font-black text-2xl text-navy uppercase pt-4">
          Our Four Commitments
        </h2>

        <div className="space-y-4 pt-2">
          <div className="p-4 bg-surface border border-hairline rounded-xs">
            <h3 className="font-headline font-bold text-sm text-navy uppercase mb-1">
              1. 15 Pieces a Day. No Clickbait.
            </h3>
            <p className="text-xs text-muted font-normal">
              Every day across our three club desks, we publish 15 deliberate, rigorously verified pieces of original reporting, tactical explanation, and tracking models.
            </p>
          </div>

          <div className="p-4 bg-surface border border-hairline rounded-xs">
            <h3 className="font-headline font-bold text-sm text-navy uppercase mb-1">
              2. Data and Tactics in Equal Measure
            </h3>
            <p className="text-xs text-muted font-normal">
              We do not treat data as decoration. Every statistical metric is tied to tactical choices on the pitch, verified by optical tracking and coaching principles.
            </p>
          </div>

          <div className="p-4 bg-surface border border-hairline rounded-xs">
            <h3 className="font-headline font-bold text-sm text-navy uppercase mb-1">
              3. Independent & Uncompromised
            </h3>
            <p className="text-xs text-muted font-normal">
              We accept no club access that trades independence for privileged seating. We write what the numbers and sources show, without fear or favor.
            </p>
          </div>

          <div className="p-4 bg-surface border border-hairline rounded-xs">
            <h3 className="font-headline font-bold text-sm text-navy uppercase mb-1">
              4. Built for Supporters Who Value Intelligence
            </h3>
            <p className="text-xs text-muted font-normal">
              Our readers understand the game. We write for people who want to understand why their team won or lost, how their wage bill functions, and who their academy is actually developing.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-hairline flex flex-wrap items-center gap-4">
          <Link
            href="/editorial-standards"
            className="px-5 py-2.5 bg-navy text-white text-xs font-bold rounded-xs hover:bg-navy/90 transition-colors"
          >
            Read Our Editorial Standards
          </Link>
          <Link
            href="/author/vayam-lahoti"
            className="text-xs font-bold text-indigo hover:text-ember transition-colors inline-flex items-center gap-1"
          >
            <span>Learn More About Vyam Lahoti</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

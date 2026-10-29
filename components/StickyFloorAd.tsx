"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

export default function StickyFloorAd() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Advertising slot"
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-2 pointer-events-none"
    >
      <div className="w-full max-w-[728px] mx-4 bg-[#F8F9FA]/95 backdrop-blur-xs border border-dashed border-[#D2D6DC] rounded-xs shadow-lg py-2 px-4 flex items-center justify-between pointer-events-auto text-center relative">
        <div className="flex-1 select-none">
          <div className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest">
            AD
          </div>
          <div className="text-[11px] font-extrabold uppercase tracking-wider text-muted">
            728×90 STICKY FLOOR
          </div>
          <div className="text-[9px] text-gray-400 font-medium tracking-tight">
            320×50 ON MOBILE · 30s VIEWABLE REFRESH
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-navy rounded transition-colors shrink-0"
          aria-label="Close ad slot"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}

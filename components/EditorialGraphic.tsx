import React from "react";

interface EditorialGraphicProps {
  type?: "contour" | "pitch" | "dark-hero" | "square-contour";
  className?: string;
  label?: string;
  imageUrl?: string;
}

export default function EditorialGraphic({
  type = "contour",
  className = "",
  label,
  imageUrl,
}: EditorialGraphicProps) {
  // For dark-hero telemetry background on the lead card
  if (type === "dark-hero") {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#162238] via-[#1D2B45] to-[#10192A] shadow-xl drop-shadow-md ${className}`}>
        <svg
          viewBox="0 0 800 500"
          className="absolute inset-0 w-full h-full object-cover opacity-45 pointer-events-none"
          preserveAspectRatio="none"
        >
          {/* Subtle concentric rings / radar telemetry */}
          <circle cx="390" cy="180" r="140" fill="none" stroke="#2B4BC4" strokeWidth="1.5" opacity="0.3" />
          <circle cx="390" cy="180" r="100" fill="#2B4BC4" opacity="0.15" />
          <circle cx="390" cy="180" r="60" fill="#CE3426" opacity="0.1" />
          {/* Layered landscape curves matching mockup */}
          <path
            d="M-50,360 Q180,220 400,320 T850,270 L850,550 L-50,550 Z"
            fill="#CE3426"
            opacity="0.25"
          />
          <path
            d="M-50,410 Q220,310 460,390 T850,360 L850,550 L-50,550 Z"
            fill="#142036"
            opacity="0.85"
          />
          <path
            d="M-50,460 Q300,380 550,440 T850,420 L850,550 L-50,550 Z"
            fill="#0B101B"
            opacity="0.95"
          />
        </svg>
      </div>
    );
  }

  // Authentic football imagery mapping for all editorial graphics
  const effectiveImageUrl =
    imageUrl ||
    (type === "pitch"
      ? "/articles/tactical-analysis-pitch.jpg"
      : label?.includes("CHELSEA")
      ? "/articles/chelsea-alonso-tactics.jpg"
      : label?.includes("SPURS") || label?.includes("TOTTENHAM")
      ? "/articles/spurs-recruitment-shortlist.jpg"
      : "/articles/arsenal-emirates-match.jpg");

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-slate-900 group/img shadow-md drop-shadow-sm ${className}`}
    >
      <img
        src={effectiveImageUrl}
        alt={label || "Football match action"}
        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
      />
      {/* Subtle gradient vignette for readability and depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
      {label && (
        <span className="absolute bottom-2.5 right-2.5 text-[9px] font-mono font-bold text-white bg-black/75 backdrop-blur-xs px-2 py-0.5 rounded-xs tracking-wider uppercase border border-white/15 z-10 shadow-sm">
          {label}
        </span>
      )}
    </div>
  );
}

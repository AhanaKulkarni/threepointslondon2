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
  // If a photo imageUrl is supplied and valid, render the photo with drop-shadow styling
  if (imageUrl) {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-slate-900 group/img shadow-md drop-shadow-sm ${className}`}>
        <img
          src={imageUrl}
          alt={label || "Editorial imagery"}
          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
        />
        {/* Subtle gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
      </div>
    );
  }

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

  if (type === "pitch") {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-[#D8DCE5] flex items-center justify-center shadow-md drop-shadow-sm ${className}`}>
        <svg
          viewBox="0 0 400 225"
          className="w-full h-full object-cover opacity-75"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="400" height="225" fill="#D8DCE5" />
          {/* Pitch outline */}
          <rect x="20" y="15" width="360" height="195" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* Halfway line */}
          <line x1="200" y1="15" x2="200" y2="210" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* Centre circle */}
          <circle cx="200" cy="112.5" r="45" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* Centre spot */}
          <circle cx="200" cy="112.5" r="3.5" fill="#FFFFFF" />
          {/* Penalty areas */}
          <rect x="20" y="55" width="65" height="115" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <rect x="315" y="55" width="65" height="115" fill="none" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
        {label && (
          <span className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-gray-600 bg-white/80 px-1.5 py-0.5 rounded-xs shadow-2xs">
            {label}
          </span>
        )}
      </div>
    );
  }

  // Default: Sleek contour landscape matching PDF mockups exactly with soft dropshadow
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#E1E4EC] flex items-center justify-center shadow-md drop-shadow-sm ${className}`}>
      <svg
        viewBox="0 0 400 225"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <rect width="400" height="225" fill="#E1E4EC" />
        {/* Soft sun */}
        <circle cx="290" cy="65" r="42" fill="#ECEFF5" opacity="0.85" />
        {/* Soft mountains / contour waves matching PDF */}
        <path
          d="M-20,165 Q110,95 240,150 T430,130 L430,230 L-20,230 Z"
          fill="#D3D7E3"
          opacity="0.8"
        />
        <path
          d="M-20,185 Q130,140 280,180 T430,165 L430,230 L-20,230 Z"
          fill="#C4C9D8"
          opacity="0.85"
        />
        <path
          d="M-20,205 Q170,175 320,200 T430,195 L430,230 L-20,230 Z"
          fill="#B5BACB"
          opacity="0.9"
        />
      </svg>
      {label && (
        <span className="absolute text-[10px] font-mono font-bold text-gray-500 select-none">
          {label}
        </span>
      )}
    </div>
  );
}

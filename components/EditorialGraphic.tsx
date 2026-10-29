import React from "react";

interface EditorialGraphicProps {
  type?: "contour" | "pitch" | "dark-hero" | "square-contour";
  className?: string;
  label?: string;
}

export default function EditorialGraphic({
  type = "contour",
  className = "",
  label,
}: EditorialGraphicProps) {
  if (type === "dark-hero") {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#162238] via-[#1D2B45] to-[#10192A] ${className}`}>
        <svg
          viewBox="0 0 800 500"
          className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
          preserveAspectRatio="none"
        >
          {/* Subtle sun / moon circle */}
          <circle cx="390" cy="180" r="110" fill="#2B4BC4" opacity="0.25" />
          {/* Layered landscape curves */}
          <path
            d="M-50,380 Q180,240 400,340 T850,290 L850,550 L-50,550 Z"
            fill="#CE3426"
            opacity="0.2"
          />
          <path
            d="M-50,420 Q220,320 460,400 T850,370 L850,550 L-50,550 Z"
            fill="#10192A"
            opacity="0.8"
          />
          <path
            d="M-50,460 Q300,380 550,440 T850,420 L850,550 L-50,550 Z"
            fill="#0B101B"
            opacity="0.9"
          />
        </svg>
      </div>
    );
  }

  if (type === "pitch") {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-[#D8DCE5] flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 400 225"
          className="w-full h-full object-cover opacity-60"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Pitch outline */}
          <rect x="20" y="15" width="360" height="195" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* Halfway line */}
          <line x1="200" y1="15" x2="200" y2="210" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* Centre circle */}
          <circle cx="200" cy="112.5" r="45" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* Centre spot */}
          <circle cx="200" cy="112.5" r="3" fill="#FFFFFF" />
          {/* Penalty areas */}
          <rect x="20" y="55" width="65" height="115" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <rect x="315" y="55" width="65" height="115" fill="none" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
        {label && (
          <span className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-gray-500 bg-white/70 px-1.5 py-0.5 rounded-xs">
            {label}
          </span>
        )}
      </div>
    );
  }

  // Default: Sleek contour landscape matching PDF mockups exactly
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#E1E4EC] flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 225"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <rect width="400" height="225" fill="#E1E4EC" />
        {/* Soft sun */}
        <circle cx="290" cy="65" r="42" fill="#ECEFF5" opacity="0.8" />
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
        <span className="absolute text-[10px] font-mono font-bold text-gray-400 select-none">
          {label}
        </span>
      )}
    </div>
  );
}

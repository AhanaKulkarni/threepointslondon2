import React from "react";

interface SocialIconProps {
  className?: string;
  size?: number;
}

/**
 * Authentic, custom-crafted SVG graphics for social channels
 * Designed per Requirement: "actual logos or properly made graphic of that particular social.
 * Instagram ka graphic I want properly of Instagram but just made by you."
 */

export function InstagramIcon({ className = "w-4 h-4", size = 16 }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Instagram"
    >
      <defs>
        <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </linearGradient>
      </defs>
      {/* Outer rounded squircle */}
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center camera lens */}
      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Flash dot */}
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function XTwitterIcon({ className = "w-4 h-4", size = 16 }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="X (formerly Twitter)"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4", size = 16 }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Facebook"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-4 h-4", size = 16 }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LinkedIn"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

/**
 * Reusable Social Bar with proper hover states and brand identities
 */
export function SocialLinksBar({
  className = "flex items-center gap-2",
  iconSize = 16,
  variant = "badge",
}: {
  className?: string;
  iconSize?: number;
  variant?: "badge" | "minimal";
}) {
  const badgeClasses =
    "w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-md border border-[#D2D6DC] bg-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs hover:border-gray-400";

  return (
    <div className={className}>
      <a
        href="https://x.com/3pointslondon"
        target="_blank"
        rel="noopener noreferrer"
        className={`${badgeClasses} text-gray-800 hover:text-white hover:bg-black hover:border-black`}
        title="Follow Three Points London on X"
        aria-label="Follow on X"
      >
        <XTwitterIcon size={iconSize} />
      </a>

      <a
        href="https://instagram.com/3pointslondon"
        target="_blank"
        rel="noopener noreferrer"
        className={`${badgeClasses} text-gray-800 hover:text-white hover:bg-gradient-to-tr hover:from-[#fdf497] hover:via-[#d6249f] hover:to-[#285AEB] hover:border-transparent`}
        title="Follow Three Points London on Instagram"
        aria-label="Follow on Instagram"
      >
        <InstagramIcon size={iconSize} />
      </a>

      <a
        href="https://facebook.com/3pointslondon"
        target="_blank"
        rel="noopener noreferrer"
        className={`${badgeClasses} text-gray-800 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2]`}
        title="Follow Three Points London on Facebook"
        aria-label="Follow on Facebook"
      >
        <FacebookIcon size={iconSize} />
      </a>

      <a
        href="https://linkedin.com/company/threepointslondon"
        target="_blank"
        rel="noopener noreferrer"
        className={`${badgeClasses} text-gray-800 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2]`}
        title="Follow Three Points London on LinkedIn"
        aria-label="Follow on LinkedIn"
      >
        <LinkedInIcon size={iconSize} />
      </a>
    </div>
  );
}

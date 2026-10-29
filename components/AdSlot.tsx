import React from "react";

interface AdSlotProps {
  id: string;
  label?: string;
  className?: string;
}

export default function AdSlot({ id, label, className = "" }: AdSlotProps) {
  let maxWidth = "100%";
  let minHeight = "90px";

  if (id.includes("970x250")) {
    maxWidth = "970px";
    minHeight = "160px";
  } else if (id.includes("728x90")) {
    maxWidth = "728px";
    minHeight = "80px";
  } else if (id.includes("300x600")) {
    maxWidth = "300px";
    minHeight = "480px";
  } else if (id.includes("300x250") || id.includes("336x280")) {
    maxWidth = "336px";
    minHeight = "220px";
  } else if (id.includes("320x100")) {
    maxWidth = "320px";
    minHeight = "100px";
  } else if (id.includes("320x480")) {
    maxWidth = "320px";
    minHeight = "400px";
  }

  return (
    <aside
      aria-label="Advertising slot"
      className={`w-full flex flex-col items-center justify-center my-6 select-none max-w-full px-2 sm:px-0 ${className}`}
    >
      <div
        className="w-full bg-[#F6F7F9] border border-dashed border-[#D2D6DC] rounded-xs flex flex-col items-center justify-center text-center p-4 relative"
        style={{ maxWidth, minHeight }}
      >
        {label ? (
          <div className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-muted max-w-xs leading-relaxed whitespace-pre-line">
            {label}
          </div>
        ) : (
          <>
            <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1">
              AD
            </div>
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted">
              {id.replace(/_/g, " ").toUpperCase()}
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

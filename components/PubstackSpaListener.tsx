"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function PubstackSpaListenerContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip firing on initial page mount (initial ad bids run automatically via the loader script)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Trigger Pubstack's manual SPA reload on internal route / navigation change
    if (typeof window !== "undefined") {
      try {
        window.dispatchEvent(new CustomEvent("admSPAReload"));
      } catch {
        const evt = document.createEvent("Event");
        evt.initEvent("admSPAReload", true, true);
        window.dispatchEvent(evt);
      }
    }
  }, [pathname, searchParams]);

  return null;
}

export default function PubstackSpaListener() {
  return (
    <Suspense fallback={null}>
      <PubstackSpaListenerContent />
    </Suspense>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function BackButton() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Only show back button if there's history to go back to
    setCanGoBack(window.history.length > 1);
  }, []);

  if (!canGoBack) return null;

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground-muted hover:text-brand-green transition-colors"
      aria-label="Go back"
    >
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
        <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back
    </button>
  );
}

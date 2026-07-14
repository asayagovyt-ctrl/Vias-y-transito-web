"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Calls `callback` on a repeating interval, pausable via the returned
 * handlers (used to stop auto-advance while the user hovers a carousel).
 */
export function useAutoAdvance(callback: () => void, intervalMs: number) {
  const [paused, setPaused] = useState(false);
  const savedCallback = useRef(callback);
  savedCallback.current = callback;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => savedCallback.current(), intervalMs);
    return () => clearInterval(id);
  }, [paused, intervalMs]);

  return {
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  };
}

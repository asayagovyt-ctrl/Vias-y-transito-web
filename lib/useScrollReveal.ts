"use client";

import { useEffect, useRef } from "react";

type RevealVariant = "slide-up" | "scale-in" | "slide-side";

function hiddenTransform(variant: RevealVariant, index: number): string {
  if (variant === "slide-up") return "translateY(32px)";
  if (variant === "scale-in") return "scale(0.94)";
  return index % 2 === 0 ? "translateX(-48px)" : "translateX(48px)";
}

const VISIBLE_TRANSFORM: Record<RevealVariant, string> = {
  "slide-up": "translateY(0)",
  "scale-in": "scale(1)",
  "slide-side": "translateX(0)",
};

/**
 * Reveals the direct children of the container as it scrolls into view,
 * staggered in order. Runs once per mount.
 *
 * Uses IntersectionObserver instead of a scroll-position calculation
 * so children already in view on mount (e.g. right after a page
 * navigation) reveal immediately, instead of depending on a cached
 * pixel threshold that can end up stale after a route change.
 */
export function useScrollReveal<T extends HTMLElement>(variant: RevealVariant = "slide-up") {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];

    children.forEach((child, index) => {
      child.style.opacity = "0";
      child.style.transform = hiddenTransform(variant, index);
      child.style.transition = `opacity 0.7s ease-out ${index * 0.1}s, transform 0.7s ease-out ${index * 0.1}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = VISIBLE_TRANSFORM[variant];
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [variant]);

  return containerRef;
}

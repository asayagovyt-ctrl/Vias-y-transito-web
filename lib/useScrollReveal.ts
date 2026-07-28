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
 * IntersectionObserver's callback can be delayed or dropped entirely on
 * some GPU/driver setups (e.g. a laptop's dedicated GPU driving an
 * external monitor), leaving content stuck at opacity 0 forever. Rather
 * than relying on it and patching around its failures, visibility here
 * is driven by plain scroll/resize checks against getBoundingClientRect,
 * which don't depend on the compositor thread at all. A short hard
 * fallback still guarantees everything reveals no matter what.
 */
export function useScrollReveal<T extends HTMLElement>(variant: RevealVariant = "slide-up") {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    const pending = new Set(children);

    children.forEach((child, index) => {
      child.style.opacity = "0";
      child.style.transform = hiddenTransform(variant, index);
      child.style.transition = `opacity 0.7s ease-out ${index * 0.1}s, transform 0.7s ease-out ${index * 0.1}s`;
    });

    function reveal(el: HTMLElement) {
      el.style.opacity = "1";
      el.style.transform = VISIBLE_TRANSFORM[variant];
      pending.delete(el);
    }

    function checkVisible() {
      if (pending.size === 0) return;
      for (const child of Array.from(pending)) {
        const rect = child.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
          reveal(child);
        }
      }
      if (pending.size === 0) detachListeners();
    }

    let ticking = false;
    function onScrollOrResize() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        checkVisible();
      });
    }

    function detachListeners() {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    // Reveal whatever is already on screen right away, don't wait on a
    // scroll or resize event that may never come (e.g. a page that's
    // shorter than the viewport).
    checkVisible();

    const hardFallback = window.setTimeout(() => {
      children.forEach((child) => reveal(child));
      detachListeners();
    }, 2000);

    return () => {
      detachListeners();
      window.clearTimeout(hardFallback);
    };
  }, [variant]);

  return containerRef;
}

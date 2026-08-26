"use client";

import { useEffect, useRef } from "react";

type RevealVariant = "slide-up" | "scale-in" | "slide-side";

function hiddenTransform(variant: RevealVariant, index: number): string {
  if (variant === "slide-up") return "translateY(80px) scale(0.96)";
  if (variant === "scale-in") return "scale(0.85)";
  return index % 2 === 0 ? "translateX(-110px)" : "translateX(110px)";
}

const VISIBLE_TRANSFORM: Record<RevealVariant, string> = {
  "slide-up": "translateY(0) scale(1)",
  "scale-in": "scale(1)",
  "slide-side": "translateX(0)",
};

const DURATION = 0.85;
const STAGGER = 0.16;
// Overshoots very slightly at the end so each card visibly settles into
// place instead of just fading in.
const EASING = "cubic-bezier(0.18, 1.12, 0.36, 1)";

/**
 * Reveals the direct children of the container as it scrolls into view,
 * staggered in order. Runs once per mount.
 *
 * IntersectionObserver's callback can be delayed or dropped entirely on
 * some GPU/driver setups (e.g. a laptop's dedicated GPU driving an
 * external monitor), leaving content stuck at opacity 0 forever. Rather
 * than relying on it and patching around its failures, visibility here
 * is driven by plain scroll/resize checks against getBoundingClientRect,
 * which don't depend on the compositor thread at all. A slow polling
 * interval backs the scroll listener up without ever force-revealing
 * offscreen content — an unconditional timed reveal would skip the
 * animation entirely for any section the reader reaches later.
 */
export function useScrollReveal<T extends HTMLElement>(variant: RevealVariant = "slide-up") {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    if (children.length === 0) return;

    const pending = new Set(children);
    const settleTimers = new Set<number>();

    children.forEach((child, index) => {
      child.style.opacity = "0";
      child.style.transform = hiddenTransform(variant, index);
      child.style.willChange = "opacity, transform";
      child.style.transition =
        `opacity ${DURATION}s ${EASING} ${index * STAGGER}s, ` +
        `transform ${DURATION}s ${EASING} ${index * STAGGER}s`;
    });

    function reveal(el: HTMLElement) {
      el.style.opacity = "1";
      el.style.transform = VISIBLE_TRANSFORM[variant];
      pending.delete(el);
      const timer = window.setTimeout(() => {
        el.style.willChange = "auto";
        settleTimers.delete(timer);
      }, (DURATION + children.length * STAGGER) * 1000);
      settleTimers.add(timer);
    }

    function checkVisible() {
      if (pending.size === 0) return;
      for (const child of Array.from(pending)) {
        const rect = child.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          reveal(child);
        }
      }
      if (pending.size === 0) stop();
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

    function stop() {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.clearInterval(pollId);
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    // Safety net for setups where scroll events arrive late or not at all.
    // Unlike a timed force-reveal, this still waits for the element to
    // actually be on screen, so the animation is never skipped.
    const pollId = window.setInterval(checkVisible, 400);

    // Let the hidden state paint before revealing whatever is already on
    // screen; without the extra frame the browser can batch both style
    // writes together and skip the transition.
    const initialFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(checkVisible);
    });

    return () => {
      stop();
      window.cancelAnimationFrame(initialFrame);
      settleTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [variant]);

  return containerRef;
}

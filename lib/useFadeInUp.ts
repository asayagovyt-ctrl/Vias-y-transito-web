"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Fades in and slides up a group of elements on mount, staggered in order.
 * Attach the returned ref to the container; direct children are animated.
 */
export function useFadeInUp<T extends HTMLElement>(deps: unknown[] = []) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = Array.from(container.children);
    const tween = gsap.fromTo(
      targets,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out" }
    );

    return () => {
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}

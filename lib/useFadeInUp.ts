"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Fades in and slides up a group of elements when `deps` change, staggered in
 * order. Attach the returned ref to the container; direct children are animated.
 *
 * La primera pasada (el montaje) se omite a propósito: correr la animación de
 * entrada desde aquí obliga a esperar a que cargue y se hidrate el JavaScript,
 * y hasta entonces el contenido queda invisible. En móvil eso retrasaba el
 * titular del hero ~4.4s y disparaba el LCP a 5.1s. La entrada inicial ahora la
 * hace CSS puro (clase `.animate-hero-enter`), que arranca con el primer
 * pintado; este hook solo anima los cambios posteriores.
 */
export function useFadeInUp<T extends HTMLElement>(deps: unknown[] = []) {
  const containerRef = useRef<T>(null);
  const skipFirstRun = useRef(true);

  useEffect(() => {
    if (skipFirstRun.current) {
      skipFirstRun.current = false;
      return;
    }

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

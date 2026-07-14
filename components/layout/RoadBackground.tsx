"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Tree {
  top: string;
  left: string;
  size: number;
}

interface RoadBackgroundProps {
  trees?: Tree[];
}

/**
 * Shared illustrated backdrop (sky/grass, road strip, lane dashes, crosswalk)
 * used across sections after the Hero to keep one continuous visual thread.
 * Positions are percentage-based so the diagonal strip lines up the same way
 * regardless of each section's actual height.
 */
export function RoadBackground({ trees = [] }: RoadBackgroundProps) {
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const decor = decorRef.current;
    if (!decor) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        decor,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: { trigger: decor, start: "top 85%" },
        }
      );
    }, decor);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={decorRef} className="absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #C3E6D0 0%, #D2E7D6 55%, #C7D8C9 100%)",
        }}
      />
      {trees.map((tree, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: tree.top,
            left: tree.left,
            width: tree.size,
            height: tree.size,
            background: "#5F9A6C",
            boxShadow: "0 0 0 8px rgba(95,154,108,0.28)",
          }}
        />
      ))}
      <div
        className="absolute left-1/2 -top-[10%] h-[130%] w-[46%] -translate-x-1/2 rotate-6"
        style={{ background: "#8B95A0", boxShadow: "0 0 0 1px rgba(255,255,255,0.15)" }}
      />
      <div
        className="absolute left-1/2 -top-[10%] h-[130%] w-2.5 -translate-x-1/2 rotate-6 opacity-90"
        style={{
          background: "repeating-linear-gradient(180deg, #FFC107 0 42px, transparent 42px 78px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0.35) 100%)",
        }}
      />
    </div>
  );
}

"use client";

import { useEffect, useId, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const YELLOW = "#F5B400";
const DARK = "#333333";
const MID = "#6F7782";
const LIGHT = "#A7AFB7";

const TILE = 720;

interface RoadBackgroundProps {
  // kept for backwards compatibility with existing page callers; unused now
  // that the background is a single repeating intersection pattern.
  trees?: unknown[];
}

function Tree({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const s = scale;
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <line x1={0} y1={14} x2={0} y2={27} stroke={DARK} strokeWidth={1.4} />
      <g fill="none" stroke={MID} strokeWidth={1.3}>
        {/* organic scalloped canopy: several overlapping bumps, not a plain circle */}
        <circle cx={0} cy={-2} r={12} />
        <circle cx={-9} cy={2} r={8.5} />
        <circle cx={9} cy={2} r={8.5} />
        <circle cx={-5} cy={-11} r={7.5} />
        <circle cx={6} cy={-10} r={7} />
        <circle cx={0} cy={7} r={7} />
      </g>
      {/* light inner texture strokes to suggest foliage */}
      <g fill="none" stroke={LIGHT} strokeWidth={1}>
        <path d="M -6 -4 Q -2 -8 3 -5" />
        <path d="M -4 4 Q 0 1 5 4" />
      </g>
    </g>
  );
}

function TreeCluster({ cx, cy }: { cx: number; cy: number }) {
  const layout: [number, number, number][] = [
    [-24, 8, 1.15],
    [15, 12, 0.95],
    [-3, -18, 1],
    [24, -8, 0.8],
  ];
  return (
    <g>
      {layout.map(([dx, dy, s], i) => (
        <Tree key={i} x={cx + dx} y={cy + dy} scale={s} />
      ))}
    </g>
  );
}

function IntersectionTileContent() {
  const roadHalf = 32;
  const c = TILE / 2;
  return (
    <>
      {/* horizontal road */}
      <line x1={0} y1={c - roadHalf} x2={TILE} y2={c - roadHalf} stroke={LIGHT} strokeWidth={1.5} />
      <line x1={0} y1={c + roadHalf} x2={TILE} y2={c + roadHalf} stroke={LIGHT} strokeWidth={1.5} />
      <line x1={0} y1={c} x2={TILE} y2={c} stroke={MID} strokeWidth={1.5} strokeDasharray="14 12" />
      {/* vertical road */}
      <line x1={c - roadHalf} y1={0} x2={c - roadHalf} y2={TILE} stroke={LIGHT} strokeWidth={1.5} />
      <line x1={c + roadHalf} y1={0} x2={c + roadHalf} y2={TILE} stroke={LIGHT} strokeWidth={1.5} />
      <line x1={c} y1={0} x2={c} y2={TILE} stroke={MID} strokeWidth={1.5} strokeDasharray="14 12" />

      {/* crosswalk marks at the intersection, on all four sides */}
      <g stroke={DARK} strokeWidth={2}>
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={`n${i}`}
            x1={c - roadHalf + 8 + i * 12}
            y1={c - roadHalf - 14}
            x2={c - roadHalf + 8 + i * 12}
            y2={c - roadHalf - 2}
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={`s${i}`}
            x1={c - roadHalf + 8 + i * 12}
            y1={c + roadHalf + 2}
            x2={c - roadHalf + 8 + i * 12}
            y2={c + roadHalf + 14}
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={`w${i}`}
            x1={c - roadHalf - 14}
            y1={c - roadHalf + 8 + i * 12}
            x2={c - roadHalf - 2}
            y2={c - roadHalf + 8 + i * 12}
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={`e${i}`}
            x1={c + roadHalf + 2}
            y1={c - roadHalf + 8 + i * 12}
            x2={c + roadHalf + 14}
            y2={c - roadHalf + 8 + i * 12}
          />
        ))}
      </g>

      {/* yellow accent lines tracing the road edges, plus a curved merge in one corner */}
      <path
        d={`M 0 ${c - roadHalf} H ${c - roadHalf - 60} Q ${c - roadHalf - 20} ${c - roadHalf}, ${c - roadHalf} ${c - roadHalf + 40} V ${TILE}`}
        fill="none"
        stroke={YELLOW}
        strokeWidth={3}
        strokeLinecap="round"
      />
      <circle cx={c - roadHalf - 60} cy={c - roadHalf} r={5} fill="none" stroke={YELLOW} strokeWidth={2.5} />
      <circle cx={c - roadHalf} cy={c - roadHalf + 40} r={5} fill="none" stroke={YELLOW} strokeWidth={2.5} />

      <line x1={c + roadHalf} y1={0} x2={c + roadHalf} y2={c - roadHalf} stroke={YELLOW} strokeWidth={3} strokeLinecap="round" />
      <line x1={c + roadHalf} y1={c + roadHalf} x2={c + roadHalf} y2={TILE} stroke={YELLOW} strokeWidth={3} strokeLinecap="round" />
      <line x1={c + roadHalf} y1={TILE} x2={TILE} y2={TILE} stroke={YELLOW} strokeWidth={3} strokeLinecap="round" />

      {/* tree clusters in each quadrant */}
      <TreeCluster cx={c - roadHalf - 105} cy={c - roadHalf - 100} />
      <TreeCluster cx={c + roadHalf + 105} cy={c - roadHalf - 100} />
      <TreeCluster cx={c - roadHalf - 105} cy={c + roadHalf + 100} />
      <TreeCluster cx={c + roadHalf + 105} cy={c + roadHalf + 100} />

      {/* car on the vertical road */}
      <g transform={`translate(${c - 14}, ${c + roadHalf + 130})`}>
        <rect x={-13} y={-24} width={26} height={44} rx={6} fill="#fff" stroke={DARK} strokeWidth={1.6} />
        <rect x={-9} y={-18} width={18} height={12} rx={2} fill="none" stroke={DARK} strokeWidth={1.2} />
      </g>

      {/* bus on the horizontal road */}
      <g transform={`translate(${c - roadHalf - 150}, ${c - 13})`}>
        <rect x={-24} y={-13} width={48} height={26} rx={6} fill={YELLOW} stroke={DARK} strokeWidth={1.6} />
        <line x1={-8} y1={-13} x2={-8} y2={13} stroke={DARK} strokeWidth={1} />
        <line x1={8} y1={-13} x2={8} y2={13} stroke={DARK} strokeWidth={1} />
      </g>

      {/* dotted pattern accent, bottom-right corner of the tile */}
      <g fill={LIGHT}>
        {Array.from({ length: 3 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={TILE - 60 + col * 14} cy={TILE - 46 + row * 14} r={2} />
          ))
        )}
      </g>
    </>
  );
}

/**
 * Shared line-art backdrop: a repeating intersection scene (curved merge
 * lane, crosswalk, yellow accent lines, tree clusters, car/bus) inspired by
 * the client's approved "Opción 4" reference, tiled across the full page.
 */
export function RoadBackground(props: RoadBackgroundProps = {}) {
  void props;
  const decorRef = useRef<HTMLDivElement>(null);
  const patternId = useId().replace(/:/g, "");

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
    <div ref={decorRef} className="absolute inset-0 bg-white" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id={patternId}
            width={TILE}
            height={TILE}
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-12)"
          >
            <IntersectionTileContent />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}

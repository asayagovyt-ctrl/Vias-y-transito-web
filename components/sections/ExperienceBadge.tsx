"use client";

import { useEffect, useState } from "react";
import { Award } from "lucide-react";

export function ExperienceBadge({ value, label }: { value: number; label: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 1100;

    function tick(timestamp: number) {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-brand-ink/10 bg-white/90 px-5 py-3 shadow-[0_14px_30px_-14px_rgba(23,27,31,0.4)] backdrop-blur-sm">
      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-yellow/20">
        <Award className="h-5 w-5 text-brand-yellow" strokeWidth={2.25} />
      </span>
      <div className="flex flex-col leading-none">
        <span className="font-heading text-3xl font-extrabold tabular-nums text-brand-ink">
          {display}
        </span>
        <span className="mt-1 text-[11px] font-medium uppercase tracking-wide text-brand-grey">
          {label}
        </span>
      </div>
    </div>
  );
}

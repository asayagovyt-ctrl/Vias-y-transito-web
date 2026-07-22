"use client";

import { useState } from "react";
import { company } from "@/constants/company";
import { useAutoAdvance } from "@/lib/useAutoAdvance";

export function DifferentiatorCarousel({ className = "" }: { className?: string }) {
  const phrases = company.differentiators;
  const [index, setIndex] = useState(0);

  const goNext = () => setIndex((i) => (i + 1) % phrases.length);
  const { pause, resume } = useAutoAdvance(goNext, 4500);

  return (
    <div
      onMouseEnter={pause}
      onMouseLeave={resume}
      className={`relative flex flex-col items-center justify-center ${className}`}
    >
      <p
        key={index}
        className="animate-fade-in-carousel text-balance px-2 text-center font-heading text-xl font-semibold leading-snug text-brand-ink sm:text-2xl"
      >
        “{phrases[index]}”
      </p>

      <div className="mt-6 flex gap-2">
        {phrases.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ver frase ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-5 bg-brand-yellow" : "w-1.5 bg-brand-ink/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

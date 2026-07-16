"use client";

import { useState } from "react";
import Link from "next/link";
import { heroSlides } from "@/constants/heroSlides";
import { company } from "@/constants/company";
import { useFadeInUp } from "@/lib/useFadeInUp";
import { useAutoAdvance } from "@/lib/useAutoAdvance";

export function Hero() {
  const [current, setCurrent] = useState(0);
  const slide = heroSlides[current];
  const contentRef = useFadeInUp<HTMLDivElement>([current]);

  const goTo = (index: number) => setCurrent(index);
  const goPrev = () =>
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  const goNext = () => setCurrent((c) => (c + 1) % heroSlides.length);

  const { pause, resume } = useAutoAdvance(goNext, 6000);

  return (
    <section
      id="inicio"
      onMouseEnter={pause}
      onMouseLeave={resume}
      className="relative min-h-screen overflow-hidden bg-brand-paper sm:min-h-[720px]"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-road-2.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(0deg, rgba(195,230,208,0.97) 0%, rgba(250,250,248,0.8) 35%, rgba(250,250,248,0.4) 60%, rgba(250,250,248,0.5) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-40 sm:h-36"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,15,10,0.6) 0%, rgba(10,15,10,0.28) 55%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-16 pt-28 sm:min-h-[720px] sm:px-10 sm:pb-14 sm:pt-24">
        <div ref={contentRef} className="max-w-2xl">
          <p
            className="mb-4 font-sans text-base font-bold uppercase tracking-wide text-brand-yellow sm:text-lg"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.6)" }}
          >
            {slide.eyebrow}
          </p>
          <h1 className="mb-4 text-balance font-heading text-4xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-5xl">
            {slide.headline}
          </h1>
          <p className="mb-7 max-w-md text-base leading-relaxed text-slate-700 sm:text-[17px]">
            {slide.sub}
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/contacto"
              className="rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-brand-ink"
            >
              Cotiza tu proyecto
            </Link>
            <Link
              href="/servicios"
              className="rounded-full border border-brand-ink/30 px-5 py-3.5 text-sm font-semibold text-brand-ink"
            >
              Ver servicios
            </Link>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-8">
            <Stat value={String(company.yearsOfExperience)} label="Años de experiencia" />
            <Stat value={company.projectsCompleted} label="Proyectos realizados" />
            <Stat value="Nacional" label="e internacional" />
          </div>

          <div className="flex items-center gap-3.5">
            <CarouselArrow direction="prev" onClick={goPrev} />
            <div className="flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir a la diapositiva ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current ? "w-5 bg-brand-yellow" : "w-1.5 bg-brand-ink/20"
                  }`}
                />
              ))}
            </div>
            <CarouselArrow direction="next" onClick={goNext} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-mono text-xl font-semibold tabular-nums text-brand-ink">
        {value}
      </div>
      <div className="text-[11px] uppercase tracking-wide text-brand-grey">
        {label}
      </div>
    </div>
  );
}

function CarouselArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Anterior" : "Siguiente"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-ink/20 bg-white/70 text-brand-ink transition-colors hover:bg-white"
    >
      {direction === "prev" ? "‹" : "›"}
    </button>
  );
}

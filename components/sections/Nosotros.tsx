"use client";

import { company } from "@/constants/company";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function Nosotros() {
  const contentRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="nosotros" className="relative px-6 py-20 sm:px-10 sm:py-28">
      <div
        ref={contentRef}
        className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-md sm:p-9">
          <p className="mb-10 max-w-lg text-base leading-relaxed text-slate-700">
            {company.aboutIntro}
          </p>

          <div className="flex flex-wrap gap-10">
            <Stat value={String(company.yearsOfExperience)} label="Años de experiencia" />
            <Stat value={company.projectsCompleted} label="Proyectos realizados" />
            <Stat value="Nacional" label="e internacional" />
          </div>
        </div>

        <div className="relative flex min-h-[340px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 shadow-md sm:p-12">
          <p className="text-balance px-6 text-center font-heading text-xl font-semibold leading-snug text-brand-ink sm:text-2xl">
            “{company.differentiator}”
          </p>
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

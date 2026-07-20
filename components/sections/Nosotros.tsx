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
        <div className="rounded-2xl bg-white p-7 shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] sm:p-9">
          <p className="mb-10 max-w-lg text-base leading-relaxed text-slate-700">
            {company.aboutIntro}
          </p>

          <div className="flex flex-wrap gap-10">
            <Stat value={String(company.yearsOfExperience)} label="Años de experiencia" />
            <Stat value={company.projectsCompleted} label="Proyectos realizados" />
            <Stat value="Nacional" label="e internacional" />
          </div>
        </div>

        <div className="relative flex min-h-[340px] items-center justify-center rounded-2xl bg-white p-10 shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] sm:p-12">
          <p className="text-balance px-6 text-center font-heading text-xl font-semibold leading-snug text-brand-ink sm:text-2xl">
            “{company.differentiator}”
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl">
        <p className="mb-3 font-sans text-base font-bold uppercase tracking-wide text-brand-yellow sm:text-lg">
          Visítanos
        </p>
        <h3 className="mb-6 max-w-xl text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
          {company.address}
        </h3>

        <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] sm:h-[520px]">
          <iframe
            title="Ubicación de Vías y Tránsito SAS"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              company.address
            )}&output=embed`}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              company.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-6 inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-brand-ink shadow-lg transition-colors hover:bg-[#E0A800]"
          >
            Cómo llegar
            <span aria-hidden="true">→</span>
          </a>
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

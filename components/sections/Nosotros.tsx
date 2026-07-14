"use client";

import Image from "next/image";
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
          <p className="mb-3 font-sans text-sm font-bold uppercase tracking-wide text-brand-yellow">
            Quiénes somos
          </p>
          <h2 className="mb-6 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
            {company.yearsOfExperience} años acompañando la movilidad del país
          </h2>
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
          <Image
            src="/images/sign-stop.png"
            alt="Señal de PARE"
            width={609}
            height={600}
            className="absolute left-4 top-4 h-11 w-auto -rotate-6 drop-shadow-md sm:h-12"
          />
          <Image
            src="/images/sign-semaforo.png"
            alt="Señal de semáforo"
            width={365}
            height={365}
            className="absolute right-4 top-4 h-11 w-auto rotate-3 drop-shadow-md sm:h-12"
          />
          <Image
            src="/images/sign-flechas.png"
            alt="Señal de doble vía"
            width={366}
            height={365}
            className="absolute bottom-4 left-4 h-11 w-auto rotate-6 drop-shadow-md sm:h-12"
          />
          <Image
            src="/images/sign-no-giro-u.png"
            alt="Señal de prohibido giro en U"
            width={430}
            height={429}
            className="absolute bottom-4 right-4 h-11 w-auto -rotate-3 drop-shadow-md sm:h-12"
          />

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

"use client";

import { MapPin } from "lucide-react";
import { projectsHistory } from "@/constants/projectsHistory";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function HistorialProyectos() {
  const gridRef = useScrollReveal<HTMLDivElement>("slide-up");

  return (
    <section className="relative px-6 py-10 sm:px-10 sm:py-16">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <span className="mb-3 inline-block w-fit rounded-full bg-brand-yellow px-5 py-2 font-sans text-sm font-bold uppercase tracking-wide text-brand-ink">
            Trayectoria
          </span>
          <h2 className="text-balance font-heading text-2xl font-bold leading-tight tracking-tight text-brand-ink sm:text-3xl">
            Más proyectos que hemos desarrollado
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projectsHistory.map((category) => (
            <div
              key={category.name}
              className={`rounded-2xl border border-black/10 bg-white p-6 shadow-[0_14px_30px_-18px_rgba(23,27,31,0.3)] sm:p-7 ${
                category.items.length > 10 ? "lg:col-span-2" : ""
              }`}
            >
              <h3 className="mb-4 font-heading text-lg font-bold text-brand-ink">
                {category.name}
              </h3>
              <ul
                className={`grid grid-cols-1 gap-x-8 divide-y divide-black/5 ${
                  category.items.length > 10 ? "sm:grid-cols-2" : ""
                }`}
              >
                {category.items.map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5 py-2.5 first:pt-0">
                    <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-yellow" strokeWidth={2} />
                    <span className="text-sm leading-snug text-slate-700">
                      {item.title}
                      <span className="ml-1.5 text-brand-ink/75">({item.location})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

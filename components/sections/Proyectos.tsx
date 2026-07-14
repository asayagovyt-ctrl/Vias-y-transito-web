"use client";

import Image from "next/image";
import { projects } from "@/constants/projects";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function Proyectos() {
  const listRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="proyectos" className="relative px-6 py-20 sm:px-10 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-3 font-sans text-sm font-bold uppercase tracking-wide text-brand-yellow">
          Nuestro trabajo
        </p>
        <h2 className="mb-4 max-w-xl text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
          Proyectos destacados
        </h2>
        <p className="mb-14 max-w-xl text-base leading-relaxed text-slate-600">
          Así resolvimos la movilidad en proyectos reales.
        </p>

        <div ref={listRef} className="flex flex-col gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
            >
              <div className="p-7 sm:p-9">
                <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-brand-grey">
                  {project.location}
                </p>
                <h3 className="mb-2 font-heading text-xl font-bold text-brand-ink">
                  {project.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
                {project.planPdf && (
                  <a
                    href={project.planPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink hover:text-brand-yellow"
                  >
                    Ver plano completo (PDF) →
                  </a>
                )}
              </div>
              <div
                className={`grid gap-1 ${project.images.length > 1 ? "sm:grid-cols-2" : ""}`}
              >
                {project.images.map((src, i) => (
                  <div
                    key={src}
                    className={`relative aspect-[16/10] ${
                      project.planPdf ? "bg-slate-100" : ""
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${project.title} — vista ${i + 1}`}
                      fill
                      className={project.planPdf ? "object-contain p-3" : "object-cover"}
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

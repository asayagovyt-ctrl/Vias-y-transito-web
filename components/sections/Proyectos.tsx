"use client";

import Image from "next/image";
import { projects } from "@/constants/projects";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function Proyectos() {
  const listRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="proyectos" className="relative px-6 py-10 sm:px-10 sm:py-16">
      <div className="relative mx-auto max-w-6xl">
        <div ref={listRef} className="flex flex-col gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)]"
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
              {project.video ? (
                <div className="relative aspect-[16/10] bg-black">
                  <video
                    src={project.video}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
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
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

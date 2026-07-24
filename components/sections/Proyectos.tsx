"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { projects } from "@/constants/projects";
import { company } from "@/constants/company";
import type { Project } from "@/types/project";

const categories = Array.from(new Set(projects.map((p) => p.category)));

const stats = [
  { value: String(projects.length), label: "Proyectos documentados" },
  { value: String(categories.length), label: "Tipos de servicio" },
  { value: String(company.yearsOfExperience), label: "Años de experiencia" },
];

export function Proyectos() {
  const [filter, setFilter] = useState<string>("Todos");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="relative px-6 py-10 sm:px-10 sm:py-16">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 grid grid-cols-2 divide-x divide-black/10 border-y border-black/10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 px-5 py-5 first:pl-0">
              <span className="font-heading text-2xl font-extrabold tabular-nums text-brand-ink sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-[11px] font-medium text-brand-grey">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <FilterPill active={filter === "Todos"} onClick={() => setFilter("Todos")}>
            Todos <span className="opacity-60">({projects.length})</span>
          </FilterPill>
          {categories.map((category) => (
            <FilterPill key={category} active={filter === category} onClick={() => setFilter(category)}>
              {category}{" "}
              <span className="opacity-60">
                ({projects.filter((p) => p.category === category).length})
              </span>
            </FilterPill>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isWide = Boolean(project.featured) && !project.pending && project.images.length > 0;
            const isVisible = filter === "Todos" || project.category === filter;
            return (
              <ProjectTile
                key={project.id}
                project={project}
                wide={isWide}
                hidden={!isVisible}
                delayMs={index * 60}
                onOpen={() => setOpenProject(project)}
              />
            );
          })}
        </div>
      </div>

      {openProject && <ProjectLightbox project={openProject} onClose={() => setOpenProject(null)} />}
    </section>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "border-brand-ink bg-brand-ink text-white"
          : "border-black/10 bg-brand-paper text-brand-grey hover:border-brand-ink/40"
      }`}
    >
      {children}
    </button>
  );
}

function ProjectTile({
  project,
  wide,
  hidden,
  delayMs,
  onOpen,
}: {
  project: Project;
  wide: boolean;
  hidden: boolean;
  delayMs: number;
  onOpen: () => void;
}) {
  const coverImage = project.images[0];

  return (
    <button
      type="button"
      onClick={onOpen}
      style={{ animationDelay: `${delayMs}ms` }}
      className={`group relative animate-fade-in-tile overflow-hidden rounded-2xl border border-black/10 bg-brand-ink text-left shadow-[0_14px_30px_-18px_rgba(23,27,31,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_22px_40px_-16px_rgba(23,27,31,0.45)] ${
        wide ? "aspect-[16/10] sm:col-span-2" : "aspect-[4/5]"
      } ${hidden ? "hidden" : ""}`}
    >
      <div className="absolute inset-0">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-700 to-slate-900 text-white/70">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/10">
              <Play className="h-4 w-4 fill-current" />
            </span>
            <span className="text-[11px] tracking-wide">Video del proyecto</span>
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/10 to-transparent" />

      {project.pending && (
        <span className="absolute right-3 top-3 rounded-full bg-brand-yellow px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-ink">
          Pendiente
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-white/75">
          {project.category}
        </span>
        <h3 className="mt-1 font-heading text-base font-bold leading-snug text-white">
          {project.title}
        </h3>
        <span className="mt-1 block text-[11px] text-white/70">
          {project.pending ? "Ubicación por confirmar" : project.location}
        </span>
      </div>
    </button>
  );
}

function ProjectLightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-ink/80 p-4"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-paper text-brand-ink hover:bg-black/10"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-grey">
          {project.category}
        </span>
        <h3 className="mt-1 font-heading text-xl font-bold text-brand-ink">{project.title}</h3>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-brand-grey">
          {project.pending ? "Ubicación por confirmar" : project.location}
        </p>

        <div className="mt-5">
          {project.video ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black">
              <video src={project.video} controls playsInline preload="metadata" className="h-full w-full object-cover" />
            </div>
          ) : (
            <div className={`grid gap-1 overflow-hidden rounded-xl ${project.images.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {project.images.map((src, i) => (
                <div key={src} className={`relative aspect-[16/10] ${project.planPdf ? "bg-slate-100" : ""}`}>
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
        </div>

        {project.pending ? (
          <div className="mt-5 rounded-xl border border-dashed border-brand-yellow bg-brand-yellow/10 p-4">
            <span className="text-[11px] font-bold uppercase tracking-wide text-brand-ink">
              Nos falta
            </span>
            <ul className="mt-1.5 list-disc pl-4 text-sm leading-relaxed text-brand-ink">
              <li>Ciudad / municipio exacto</li>
              <li>2–3 frases: qué problema resolvió este proyecto</li>
            </ul>
          </div>
        ) : (
          <p className="mt-5 text-sm leading-relaxed text-slate-600">{project.description}</p>
        )}

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
    </div>
  );
}

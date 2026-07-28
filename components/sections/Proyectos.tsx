"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { projects } from "@/constants/projects";
import type { Project } from "@/types/project";

// En producción no se publican proyectos marcados como pendientes; en
// desarrollo se muestran igual (con el badge de aviso) para poder revisarlos.
const visibleProjects =
  process.env.NODE_ENV === "development" ? projects : projects.filter((p) => !p.pending);

const categories = Array.from(new Set(visibleProjects.map((p) => p.category)));

export function Proyectos() {
  const [filter, setFilter] = useState<string>("Todos");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const visibleCount =
    filter === "Todos"
      ? visibleProjects.length
      : visibleProjects.filter((p) => p.category === filter).length;

  return (
    <section id="proyectos" className="relative px-6 py-10 sm:px-10 sm:py-16">
      <div className="relative mx-auto max-w-6xl">
        <h2 className="mb-6 font-heading text-3xl font-extrabold text-brand-ink">
          Proyectos destacados
        </h2>
        <div
          role="group"
          aria-label="Filtrar proyectos por categoría"
          className="mb-6 flex flex-wrap gap-2"
        >
          <FilterPill active={filter === "Todos"} onClick={() => setFilter("Todos")}>
            Todos <span>({visibleProjects.length})</span>
          </FilterPill>
          {categories.map((category) => (
            <FilterPill key={category} active={filter === category} onClick={() => setFilter(category)}>
              {category}{" "}
              <span>({visibleProjects.filter((p) => p.category === category).length})</span>
            </FilterPill>
          ))}
        </div>
        <p aria-live="polite" className="sr-only">
          Mostrando {visibleCount} de {visibleProjects.length} proyectos
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => {
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
      aria-pressed={active}
      className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors sm:text-base ${
        active
          ? "border-brand-yellow bg-brand-yellow text-brand-ink"
          : "border-black/10 bg-brand-paper text-brand-ink/75 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-ink"
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
            <span className="text-xs tracking-wide">Video del proyecto</span>
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/10 to-transparent" />

      {process.env.NODE_ENV === "development" && project.pending && (
        <span className="absolute right-3 top-3 rounded-full bg-slate-800/80 px-2.5 py-1 text-xs font-semibold text-white">
          Pendiente (dev)
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-white/75">
          {project.category}
        </span>
        <h3 className="mt-1 font-heading text-base font-bold leading-snug text-white">
          {project.title}
        </h3>
        {project.location && (
          <span className="mt-1 block text-sm text-white/70">{project.location}</span>
        )}
      </div>
    </button>
  );
}

function ProjectLightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

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

  useEffect(() => {
    triggerRef.current = document.activeElement as HTMLElement;
    dialogRef.current?.querySelector("button")?.focus();
    return () => triggerRef.current?.focus();
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-ink/80 p-4"
    >
      <div
        ref={dialogRef}
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

        <span className="text-xs font-semibold uppercase tracking-wide text-brand-ink/75">
          {project.category}
        </span>
        <h3 className="mt-1 font-heading text-xl font-bold text-brand-ink">{project.title}</h3>
        {project.location && (
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-brand-ink/75">
            {project.location}
          </p>
        )}

        <div className="mt-5">
          {project.video ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black">
              <video
                src={project.video}
                poster={project.images[0]}
                controls
                muted
                playsInline
                preload="none"
                className="h-full w-full object-cover"
              />
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
            <span className="text-xs font-bold uppercase tracking-wide text-brand-ink">
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

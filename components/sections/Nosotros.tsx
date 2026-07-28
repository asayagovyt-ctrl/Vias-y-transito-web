"use client";

import { Calendar, Building2, Globe2, type LucideIcon } from "lucide-react";
import { company } from "@/constants/company";
import { technologies } from "@/constants/technologies";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { DifferentiatorCarousel } from "@/components/sections/DifferentiatorCarousel";

const differentiatorItems = [
  {
    title: "Acompañamiento en todas las etapas",
    body: "No entregamos un informe y desaparecemos. Estamos desde la viabilidad hasta que el proyecto entra en operación.",
  },
  {
    title: "Un solo equipo, todas las especialidades",
    body: "Tránsito, movilidad, diseño geométrico y señalización coordinados internamente. Sin contratar tres firmas ni conciliar tres criterios distintos.",
  },
  {
    title: "Experiencia pública y privada",
    body: "Trabajamos tanto con entidades como con constructoras. Sabemos qué exige cada una y cómo hablarle a ambas.",
  },
];

export function Nosotros() {
  const contentRef = useScrollReveal<HTMLDivElement>("slide-side");

  return (
    <section id="nosotros" className="relative px-6 py-10 sm:px-10 sm:py-16">
      <div
        ref={contentRef}
        className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
      >
        <div className="rounded-2xl border border-brand-ink/8 bg-white p-7 shadow-card sm:p-9">
          <h2 className="mb-4 text-balance font-heading text-2xl font-bold leading-tight tracking-tight text-brand-ink sm:text-3xl">
            {company.yearsOfExperience} años acompañando la movilidad del país
          </h2>
          <p className="mb-10 max-w-lg text-base font-normal leading-relaxed text-brand-ink/75">
            {company.aboutIntro}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-6">
            <Stat icon={Calendar} value={String(company.yearsOfExperience)} label="Años de experiencia" />
            <Stat
              icon={Building2}
              value={company.projectsCompleted}
              label="Proyectos realizados"
              divider
            />
            <Stat icon={Globe2} value="Nacional" label="e internacional" divider />
          </div>
        </div>

        <DifferentiatorCarousel className="min-h-[340px] overflow-hidden rounded-2xl border border-brand-ink/8 bg-gradient-to-b from-[#FFF8E6] to-white p-10 shadow-card sm:p-12" />
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl rounded-2xl border border-brand-ink/8 bg-white p-7 shadow-card sm:p-9">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-10">
          <div>
            <h3 className="mb-4 text-balance font-heading text-2xl font-bold leading-tight tracking-tight text-brand-ink sm:text-3xl">
              Un estudio de movilidad puede frenar tu proyecto o destrabarlo
            </h3>
            <p className="text-base font-normal leading-relaxed text-brand-ink/75">
              Un proyecto inmobiliario o de infraestructura no avanza sin sustento técnico de
              movilidad. Y cuando ese estudio llega tarde, incompleto o sin respaldo, el cronograma
              se para.
            </p>
          </div>
          <div className="rounded-r-xl rounded-l-sm border-l-4 border-brand-yellow bg-gradient-to-br from-[#FFF8E3] to-white p-6">
            <p className="text-sm font-semibold leading-relaxed text-brand-ink">
              Llevamos {company.yearsOfExperience} años entregando estudios que las entidades
              aprueban y que los constructores pueden ejecutar. Conocemos la norma, conocemos al
              revisor y conocemos los errores que retrasan un proyecto — porque ya los vimos antes.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl">
        <h3 className="mb-4 max-w-2xl text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
          Qué nos distingue
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {differentiatorItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border-2 border-transparent bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:shadow-card-hover"
            >
              <h4 className="font-heading text-lg font-bold text-brand-ink">{item.title}</h4>
              <p className="mt-1.5 text-sm font-normal leading-relaxed text-brand-ink/75">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl">
        <p className="mb-3 inline-block w-fit rounded-full bg-brand-yellow px-5 py-2 font-sans text-sm font-bold uppercase tracking-wide text-brand-ink sm:text-base">
          Nuestra tecnología
        </p>
        <h3 className="mb-4 max-w-2xl text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
          Ingeniería con las herramientas que usa la industria
        </h3>
        <p className="mb-8 max-w-2xl text-base font-normal leading-relaxed text-brand-ink/75">
          Modelamos, simulamos y diseñamos con el mismo software que exigen las entidades
          revisoras. Nuestros entregables llegan en el formato que esperan recibir.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="rounded-2xl border-2 border-transparent bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:shadow-card-hover"
            >
              <h4 className="font-heading text-lg font-bold text-brand-ink">{tech.name}</h4>
              <p className="mt-1.5 text-sm font-normal leading-relaxed text-brand-ink/75">{tech.application}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl">
        <p className="mb-3 inline-block w-fit rounded-full bg-brand-yellow px-5 py-2 font-sans text-sm font-bold uppercase tracking-wide text-brand-ink sm:text-base">
          Visítanos
        </p>
        <h3 className="mb-6 max-w-xl text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
          {company.address}
        </h3>

        <div className="relative h-[420px] overflow-hidden rounded-2xl border border-brand-ink/8 shadow-card sm:h-[520px]">
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
            className="absolute bottom-6 left-6 inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-brand-ink shadow-card-hover transition-colors hover:bg-[#E0A800]"
          >
            Cómo llegar
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
  divider = false,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  divider?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 ${
        divider ? "border-l border-black/10 pl-6" : ""
      }`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/15 text-brand-ink">
        <Icon className="h-4 w-4" strokeWidth={2.25} />
      </div>
      <div>
        <div className="font-mono text-xl font-extrabold tabular-nums text-brand-ink sm:text-2xl">
          {value}
        </div>
        <div className="text-xs font-semibold text-brand-ink/75">
          {label}
        </div>
      </div>
    </div>
  );
}

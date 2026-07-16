"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RoadBackground } from "@/components/layout/RoadBackground";
import { Hero } from "@/components/sections/Hero";
import { Clientes } from "@/components/sections/Clientes";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { services } from "@/constants/services";
import { projects } from "@/constants/projects";
import { company } from "@/constants/company";

// Posiciones en % de la altura combinada de las secciones resumen + Clientes + Footer,
// para que el fondo de vía sea uno solo y continuo (sin cortes entre secciones).
const roadTrees = [
  { top: "1%", left: "4%", size: 26 },
  { top: "2%", left: "94%", size: 30 },
  { top: "10%", left: "3%", size: 20 },
  { top: "18%", left: "6%", size: 32 },
  { top: "16%", left: "96%", size: 24 },
  { top: "30%", left: "3%", size: 22 },
  { top: "38%", left: "93%", size: 20 },
  { top: "50%", left: "5%", size: 28 },
  { top: "48%", left: "96%", size: 30 },
  { top: "62%", left: "3%", size: 20 },
  { top: "70%", left: "92%", size: 22 },
  { top: "80%", left: "4%", size: 22 },
  { top: "88%", left: "96%", size: 26 },
  { top: "95%", left: "5%", size: 20 },
];

export default function Home() {
  const featuredProject = projects[0];

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <div className="relative overflow-hidden">
        <RoadBackground trees={roadTrees} />

        {/* Servicios — resumen */}
        <section className="relative px-6 py-20 sm:px-10 sm:py-28">
          <div className="relative mx-auto max-w-6xl">
            <p className="mb-3 font-sans text-sm font-bold uppercase tracking-wide text-brand-yellow">
              Lo que hacemos
            </p>
            <h2 className="mb-4 max-w-xl text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
              Nuestros servicios
            </h2>
            <p className="mb-14 max-w-xl text-base leading-relaxed text-slate-600">
              Cubrimos tu proyecto vial de punta a punta, desde el diseño hasta que entra en operación.
            </p>

            <ServiceCards services={services} />

            <Link
              href="/servicios"
              className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-brand-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-black"
            >
              Ver todos los servicios →
            </Link>
          </div>
        </section>

        <Clientes />

        {/* Proyectos — resumen */}
        <section className="relative px-6 py-20 sm:px-10 sm:py-28">
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

            {featuredProject && (
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
                <div className="p-7 sm:p-9">
                  <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-brand-grey">
                    {featuredProject.location}
                  </p>
                  <h3 className="mb-2 font-heading text-xl font-bold text-brand-ink">
                    {featuredProject.title}
                  </h3>
                  <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
                    {featuredProject.description}
                  </p>
                </div>
                <div className="relative aspect-[16/8]">
                  <Image
                    src={featuredProject.images[0]}
                    alt={featuredProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </article>
            )}

            <Link
              href="/proyectos"
              className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-brand-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-black"
            >
              Ver todos los proyectos →
            </Link>
          </div>
        </section>

        {/* Nosotros — resumen */}
        <section className="relative px-6 py-20 sm:px-10 sm:py-28">
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
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

              <div className="mb-8 flex flex-wrap gap-10">
                <Stat value={String(company.yearsOfExperience)} label="Años de experiencia" />
                <Stat value={company.projectsCompleted} label="Proyectos realizados" />
                <Stat value="Nacional" label="e internacional" />
              </div>

              <Link
                href="/nosotros"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-black"
              >
                Conócenos →
              </Link>
            </div>

            <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 shadow-md sm:p-12">
              <p className="text-balance px-2 text-center font-heading text-xl font-semibold leading-snug text-brand-ink sm:text-2xl">
                “{company.differentiator}”
              </p>
            </div>
          </div>
        </section>

        {/* Contacto — llamado a la acción */}
        <section className="relative px-6 py-20 sm:px-10 sm:py-28">
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-md sm:p-14">
            <p className="mb-3 font-sans text-sm font-bold uppercase tracking-wide text-brand-yellow">
              Contacto
            </p>
            <h2 className="mb-4 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-slate-700">
              Cuéntanos qué necesitas y te respondemos con una propuesta técnica, no con un formulario genérico.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-brand-ink transition-colors hover:bg-[#E0A800]"
            >
              Contáctanos →
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-mono text-xl font-semibold tabular-nums text-brand-ink">{value}</div>
      <div className="text-[11px] uppercase tracking-wide text-brand-grey">{label}</div>
    </div>
  );
}

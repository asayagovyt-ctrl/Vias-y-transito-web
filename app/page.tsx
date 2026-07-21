"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Clientes } from "@/components/sections/Clientes";
import { ServiceBento } from "@/components/sections/ServiceBento";
import { ContactoForm } from "@/components/sections/Contacto";
import { services } from "@/constants/services";
import { projects } from "@/constants/projects";
import { company } from "@/constants/company";

export default function Home() {
  const featuredProject = projects[0];

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <div className="relative overflow-hidden bg-brand-cream">
        {/* Servicios — resumen */}
        <section className="relative px-6 py-20 sm:px-10 sm:py-28">
          <div className="relative mx-auto max-w-6xl">
            <p className="mb-4 inline-block w-fit rounded-full bg-brand-yellow px-4 py-1.5 font-sans text-xs font-extrabold uppercase tracking-wide text-brand-ink sm:text-sm">
              Lo que hacemos
            </p>
            <h2 className="mb-4 max-w-xl text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
              Nuestros servicios
            </h2>
            <p className="mb-14 max-w-xl text-base leading-relaxed text-slate-600">
              Cubrimos tu proyecto vial de punta a punta, desde el diseño hasta que entra en operación.
            </p>

            <ServiceBento services={services} />

            <Link
              href="/servicios"
              className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-brand-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-yellow hover:text-brand-ink"
            >
              Ver todos los servicios →
            </Link>
          </div>
        </section>

        <Clientes />

        {/* Proyectos — resumen */}
        <section className="relative px-6 py-20 sm:px-10 sm:py-28">
          <div className="relative mx-auto max-w-6xl">
            <p className="mb-4 inline-block w-fit rounded-full bg-brand-yellow px-4 py-1.5 font-sans text-xs font-extrabold uppercase tracking-wide text-brand-ink sm:text-sm">
              Nuestro trabajo
            </p>
            <h2 className="mb-4 max-w-xl text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
              Proyectos destacados
            </h2>
            <p className="mb-14 max-w-xl text-base leading-relaxed text-slate-600">
              Así resolvimos la movilidad en proyectos reales.
            </p>

            {featuredProject && (
              <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)]">
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
              className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-brand-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-yellow hover:text-brand-ink"
            >
              Ver todos los proyectos →
            </Link>
          </div>
        </section>

        {/* Nosotros — resumen */}
        <section className="relative px-6 pb-20 pt-6 sm:px-10 sm:pb-28 sm:pt-10">
          <div className="relative mx-auto max-w-6xl rounded-2xl border border-black/10 bg-white p-7 shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] sm:p-10">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <p className="mb-4 inline-block w-fit rounded-full bg-brand-yellow px-4 py-1.5 font-sans text-xs font-extrabold uppercase tracking-wide text-brand-ink sm:text-sm">
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
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-ink px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-yellow hover:text-brand-ink"
                >
                  Conócenos →
                </Link>
              </div>

              <div className="flex min-h-[220px] items-center justify-center rounded-xl bg-brand-paper p-10 sm:p-12">
                <p className="text-balance px-2 text-center font-heading text-xl font-semibold leading-snug text-brand-ink sm:text-2xl">
                  “{company.differentiator}”
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-6 max-w-6xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)]">
            <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="p-7 sm:p-9">
                <p className="mb-4 inline-block w-fit rounded-full bg-brand-yellow px-4 py-1.5 font-sans text-xs font-extrabold uppercase tracking-wide text-brand-ink sm:text-sm">
                  Visítanos
                </p>
                <h3 className="mb-4 font-heading text-2xl font-bold text-brand-ink">
                  {company.address}
                </h3>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    company.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink hover:text-brand-yellow"
                >
                  Cómo llegar (Google Maps)
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="relative h-[280px] lg:h-auto lg:min-h-[280px]">
                <iframe
                  title="Ubicación de Vías y Tránsito SAS"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    company.address
                  )}&output=embed`}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="relative px-6 py-20 sm:px-10 sm:py-28">
          <div className="relative mx-auto max-w-6xl">
            <p className="mb-4 inline-block w-fit rounded-full bg-brand-yellow px-4 py-1.5 font-sans text-xs font-extrabold uppercase tracking-wide text-brand-ink sm:text-sm">
              Contacto
            </p>
            <h2 className="mb-4 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mb-14 max-w-md text-base leading-relaxed text-slate-700">
              Cuéntanos qué necesitas y te respondemos con una propuesta técnica, no con un formulario genérico.
            </p>
            <ContactoForm />
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

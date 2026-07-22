import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageVideoBanner } from "@/components/layout/PageVideoBanner";
import { Servicios } from "@/components/sections/Servicios";
import { company } from "@/constants/company";
import { services } from "@/constants/services";

export const metadata: Metadata = {
  title: "Servicios | Vías y Tránsito SAS",
  description:
    "Cobertura técnica completa para proyectos viales: diseño geométrico, señalización, estudios de tránsito y movilidad, modelaciones y más.",
};

export default function ServiciosPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageVideoBanner
        eyebrow="Lo que hacemos"
        title="Nuestros servicios"
        description="Cubrimos tu proyecto vial de punta a punta, desde el diseño hasta que entra en operación. Con 18 años de experiencia y más de 1.000 proyectos ejecutados a nivel nacional e internacional, respaldamos cada etapa con soluciones técnicas rigurosas y ajustadas a la normativa INVIAS vigente."
        videoSrc="/videos/servicios-banner.mp4"
        strongOverlay
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge>{company.yearsOfExperience} años de experiencia</Badge>
          <Badge>{company.projectsCompleted} proyectos</Badge>
          <Badge>Nacional e internacional</Badge>
          <Badge>{services.length} especialidades técnicas</Badge>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3.5">
          <Link
            href="/contacto"
            className="rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-brand-ink transition-colors hover:bg-[#E0A800]"
          >
            Cotiza tu proyecto
          </Link>
          <a
            href="#servicios"
            className="rounded-full border border-brand-ink/30 px-5 py-3.5 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-yellow hover:bg-brand-yellow"
          >
            Ver servicios ↓
          </a>
        </div>
      </PageVideoBanner>
      <div className="relative bg-brand-cream">
        <Servicios />
        <Footer />
      </div>
    </main>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-ink/15 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-ink backdrop-blur-sm">
      <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-yellow" aria-hidden="true" />
      {children}
    </span>
  );
}

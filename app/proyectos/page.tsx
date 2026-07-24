import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageVideoBanner } from "@/components/layout/PageVideoBanner";
import { Proyectos } from "@/components/sections/Proyectos";
import { ExperienceBadge } from "@/components/sections/ExperienceBadge";
import { company } from "@/constants/company";

export const metadata: Metadata = {
  title: "Proyectos | Vías y Tránsito SAS",
  description:
    "Proyectos reales donde hemos aportado nuestra experiencia técnica en diseño vial, señalización y planes de manejo de tránsito.",
};

export default function ProyectosPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageVideoBanner
        eyebrow="Nuestro trabajo"
        title="Proyectos destacados"
        description="Diseño geométrico, señalización y planes de manejo de tránsito aplicados en intersecciones reales, desde el primer estudio hasta el plano final."
        videoSrc="/videos/proyectos-banner.mp4"
        strongOverlay
        contentAlign="center"
      >
        <ExperienceBadge value={company.yearsOfExperience} label="Años de experiencia" />
      </PageVideoBanner>
      <div className="relative overflow-hidden bg-brand-cream">
        <Proyectos />
        <Footer />
      </div>
    </main>
  );
}

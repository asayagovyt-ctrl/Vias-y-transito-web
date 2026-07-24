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
        title="Proyectos como el tuyo, ya resueltos"
        description="Intercambios viales, planes de manejo de tránsito y estudios de movilidad. Estos son algunos de los más de 1.000 que hemos entregado."
        videoSrc="/videos/proyectos-banner.mp4"
        strongOverlay
        overlayBoost
        contentAlign="center"
      >
        <ExperienceBadge
          value={parseInt(company.projectsCompleted, 10)}
          suffix={company.projectsCompleted.replace(/[0-9]/g, "")}
          label="Proyectos realizados"
        />
      </PageVideoBanner>
      <div className="relative overflow-hidden bg-brand-cream">
        <Proyectos />
        <Footer />
      </div>
    </main>
  );
}

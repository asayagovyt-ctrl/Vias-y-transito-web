import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageVideoBanner } from "@/components/layout/PageVideoBanner";
import { Proyectos } from "@/components/sections/Proyectos";

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
        description="Así resolvimos la movilidad en proyectos reales."
      />
      <div className="relative overflow-hidden bg-brand-cream">
        <Proyectos />
        <Footer />
      </div>
    </main>
  );
}

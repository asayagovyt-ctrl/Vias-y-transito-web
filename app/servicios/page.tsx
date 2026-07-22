import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageVideoBanner } from "@/components/layout/PageVideoBanner";
import { Servicios } from "@/components/sections/Servicios";

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
        focusOverlayOnText
      />
      <div className="relative overflow-hidden bg-brand-cream">
        <Servicios />
        <Footer />
      </div>
    </main>
  );
}

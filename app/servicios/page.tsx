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
        videoSrc="/videos/servicios-banner.mp4"
      />
      <div className="relative bg-brand-cream">
        <Servicios />
        <Footer />
      </div>
    </main>
  );
}

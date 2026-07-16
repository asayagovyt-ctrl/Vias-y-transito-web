import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RoadBackground } from "@/components/layout/RoadBackground";
import { PageVideoBanner } from "@/components/layout/PageVideoBanner";
import { Servicios } from "@/components/sections/Servicios";

export const metadata: Metadata = {
  title: "Servicios | Vías y Tránsito SAS",
  description:
    "Cobertura técnica completa para proyectos viales: diseño geométrico, señalización, estudios de tránsito y movilidad, modelaciones y más.",
};

const roadTrees = [
  { top: "3%", left: "4%", size: 26 },
  { top: "8%", left: "94%", size: 30 },
  { top: "20%", left: "3%", size: 20 },
  { top: "34%", left: "6%", size: 32 },
  { top: "50%", left: "3%", size: 22 },
  { top: "66%", left: "5%", size: 28 },
  { top: "82%", left: "3%", size: 20 },
  { top: "26%", left: "96%", size: 24 },
  { top: "44%", left: "93%", size: 20 },
  { top: "62%", left: "96%", size: 30 },
  { top: "80%", left: "92%", size: 22 },
  { top: "95%", left: "97%", size: 20 },
];

export default function ServiciosPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageVideoBanner
        eyebrow="Lo que hacemos"
        title="Nuestros servicios"
        description="Cubrimos tu proyecto vial de punta a punta, desde el diseño hasta que entra en operación."
      />
      <div className="relative overflow-hidden">
        <RoadBackground trees={roadTrees} />
        <Servicios />
        <Footer />
      </div>
    </main>
  );
}

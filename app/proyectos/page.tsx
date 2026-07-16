import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RoadBackground } from "@/components/layout/RoadBackground";
import { PageVideoBanner } from "@/components/layout/PageVideoBanner";
import { Proyectos } from "@/components/sections/Proyectos";

export const metadata: Metadata = {
  title: "Proyectos | Vías y Tránsito SAS",
  description:
    "Proyectos reales donde hemos aportado nuestra experiencia técnica en diseño vial, señalización y planes de manejo de tránsito.",
};

const roadTrees = [
  { top: "3%", left: "4%", size: 26 },
  { top: "10%", left: "94%", size: 30 },
  { top: "25%", left: "3%", size: 20 },
  { top: "40%", left: "6%", size: 32 },
  { top: "58%", left: "3%", size: 22 },
  { top: "75%", left: "5%", size: 28 },
  { top: "90%", left: "3%", size: 20 },
  { top: "30%", left: "96%", size: 24 },
  { top: "50%", left: "93%", size: 20 },
  { top: "70%", left: "96%", size: 30 },
  { top: "88%", left: "92%", size: 22 },
];

export default function ProyectosPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageVideoBanner />
      <div className="relative overflow-hidden">
        <RoadBackground trees={roadTrees} />
        <Proyectos />
        <Footer />
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RoadBackground } from "@/components/layout/RoadBackground";
import { PageVideoBanner } from "@/components/layout/PageVideoBanner";
import { Nosotros } from "@/components/sections/Nosotros";
import { company } from "@/constants/company";

export const metadata: Metadata = {
  title: "Nosotros | Vías y Tránsito SAS",
  description:
    "18 años acompañando la movilidad del país. Conoce quiénes somos y qué nos distingue en cada proyecto.",
};

const roadTrees = [
  { top: "4%", left: "4%", size: 26 },
  { top: "14%", left: "94%", size: 30 },
  { top: "35%", left: "3%", size: 22 },
  { top: "60%", left: "5%", size: 28 },
  { top: "45%", left: "96%", size: 24 },
  { top: "80%", left: "93%", size: 20 },
  { top: "92%", left: "5%", size: 20 },
];

export default function NosotrosPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageVideoBanner
        eyebrow="Quiénes somos"
        title={`${company.yearsOfExperience} años acompañando la movilidad del país`}
      />
      <div className="relative overflow-hidden">
        <RoadBackground trees={roadTrees} />
        <Nosotros />
        <Footer />
      </div>
    </main>
  );
}

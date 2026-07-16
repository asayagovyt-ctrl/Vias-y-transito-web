import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RoadBackground } from "@/components/layout/RoadBackground";
import { PageVideoBanner } from "@/components/layout/PageVideoBanner";
import { Contacto } from "@/components/sections/Contacto";

export const metadata: Metadata = {
  title: "Contacto | Vías y Tránsito SAS",
  description:
    "Escríbenos o llámanos directamente y te contactamos a la brevedad para hablar de tu proyecto.",
};

const roadTrees = [
  { top: "5%", left: "4%", size: 26 },
  { top: "20%", left: "94%", size: 30 },
  { top: "50%", left: "3%", size: 22 },
  { top: "75%", left: "96%", size: 24 },
  { top: "92%", left: "5%", size: 20 },
];

export default function ContactoPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageVideoBanner
        eyebrow="Contacto"
        title="Hablemos de tu proyecto"
        description="Cuéntanos qué necesitas y te respondemos con una propuesta técnica, no con un formulario genérico."
      />
      <div className="relative overflow-hidden">
        <RoadBackground trees={roadTrees} />
        <Contacto />
        <Footer />
      </div>
    </main>
  );
}

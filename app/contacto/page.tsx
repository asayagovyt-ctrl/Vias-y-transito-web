import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RoadBackground } from "@/components/layout/RoadBackground";
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
      <div className="relative overflow-hidden pt-24 sm:pt-28">
        <RoadBackground trees={roadTrees} />
        <Contacto />
        <Footer />
      </div>
    </main>
  );
}

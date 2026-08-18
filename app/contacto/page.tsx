import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageVideoBanner } from "@/components/layout/PageVideoBanner";
import { Contacto } from "@/components/sections/Contacto";

export const metadata: Metadata = {
  title: "Contacto y cotizaciones | Vías y Tránsito SAS",
  description:
    "Escríbenos o llámanos directamente y te contactamos a la brevedad para hablar de tu proyecto.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageVideoBanner
        eyebrow="Contacto"
        title="Hablemos de tu proyecto"
        description="Cuéntanos las características de tu proyecto y el acompañamiento que requieres. Prepararemos una propuesta técnica acorde con sus necesidades y requerimientos."
        strongOverlay
        overlayBoost
      />
      <div className="relative overflow-hidden bg-brand-cream">
        <Contacto />
        <Footer />
      </div>
    </main>
  );
}

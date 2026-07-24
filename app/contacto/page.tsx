import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageVideoBanner } from "@/components/layout/PageVideoBanner";
import { Contacto } from "@/components/sections/Contacto";

export const metadata: Metadata = {
  title: "Contacto | Vías y Tránsito SAS",
  description:
    "Escríbenos o llámanos directamente y te contactamos a la brevedad para hablar de tu proyecto.",
};

export default function ContactoPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageVideoBanner
        eyebrow="Contacto"
        title="Hablemos de tu proyecto"
        description="Cuéntanos qué necesitas y te respondemos con una propuesta técnica, no con un correo automático."
        microcopy="Respondemos en menos de 24 horas hábiles."
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

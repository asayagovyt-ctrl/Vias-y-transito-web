import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageVideoBanner } from "@/components/layout/PageVideoBanner";
import { Nosotros } from "@/components/sections/Nosotros";

export const metadata: Metadata = {
  title: "Nosotros | Vías y Tránsito SAS",
  description:
    "18 años acompañando la movilidad del país. Conoce quiénes somos y qué nos distingue en cada proyecto.",
};

export default function NosotrosPage() {
  return (
    <main className="relative">
      <Navbar />
      <PageVideoBanner
        eyebrow="Quiénes somos"
        emphasizeEyebrow
        videoSrc="/videos/nosotros-banner.mp4"
      />
      <div className="relative overflow-hidden bg-brand-cream">
        <Nosotros />
        <Footer />
      </div>
    </main>
  );
}

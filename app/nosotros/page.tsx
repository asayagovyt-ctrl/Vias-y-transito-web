import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageVideoBanner } from "@/components/layout/PageVideoBanner";
import { Nosotros } from "@/components/sections/Nosotros";
import { ExperienceBadge } from "@/components/sections/ExperienceBadge";
import { company } from "@/constants/company";

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
        title="Quién firma los estudios de tu proyecto"
        description="Una firma de ingeniería de Medellín especializada en tránsito, movilidad e infraestructura vial. Desde 2008 resolvemos cómo se va a mover un proyecto antes de que se construya, para entidades públicas y constructoras privadas."
        videoSrc="/videos/nosotros-banner.mp4"
        strongOverlay
        overlayBoost
        videoPlaybackRate={0.6}
      >
        <ExperienceBadge value={company.foundedYear} label="Año de fundación" />
      </PageVideoBanner>
      <div className="relative overflow-hidden bg-brand-cream">
        <Nosotros />
        <Footer />
      </div>
    </main>
  );
}

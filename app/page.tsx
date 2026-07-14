import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RoadBackground } from "@/components/layout/RoadBackground";
import { Hero } from "@/components/sections/Hero";
import { Servicios } from "@/components/sections/Servicios";
import { Proyectos } from "@/components/sections/Proyectos";
import { Clientes } from "@/components/sections/Clientes";
import { Nosotros } from "@/components/sections/Nosotros";
import { Contacto } from "@/components/sections/Contacto";

// Posiciones en % de la altura combinada de Servicios+Nosotros+Contacto+Footer,
// para que el fondo de vía sea uno solo y continuo (sin cortes entre secciones).
const roadTrees = [
  { top: "1%", left: "4%", size: 26 },
  { top: "2%", left: "94%", size: 30 },
  { top: "6%", left: "3%", size: 20 },
  { top: "12%", left: "6%", size: 32 },
  { top: "18%", left: "3%", size: 22 },
  { top: "25%", left: "5%", size: 28 },
  { top: "31%", left: "3%", size: 20 },
  { top: "8%", left: "96%", size: 24 },
  { top: "14%", left: "93%", size: 20 },
  { top: "20%", left: "96%", size: 30 },
  { top: "27%", left: "92%", size: 22 },
  { top: "37%", left: "3%", size: 22 },
  { top: "57%", left: "5%", size: 26 },
  { top: "38%", left: "97%", size: 20 },
  { top: "62%", left: "4%", size: 22 },
  { top: "83%", left: "96%", size: 26 },
  { top: "88%", left: "97%", size: 20 },
];

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <div className="relative overflow-hidden">
        <RoadBackground trees={roadTrees} />
        <Servicios />
        <Clientes />
        <Proyectos />
        <Nosotros />
        <Contacto />
        <Footer />
      </div>
    </main>
  );
}

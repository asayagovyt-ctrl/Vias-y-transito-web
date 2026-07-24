import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "intercambio-vial-el-campestre",
    title: "Intercambio vial TV. Inferior x El Campestre",
    location: "Medellín, Antioquia",
    description:
      "Diseñamos un intercambio vial con puente peatonal y ciclorruta para un sector de alta densidad urbana, integrando vehículos, peatones y ciclistas en una sola solución.",
    images: [
      "/images/proyecto-intercambio-vial-1.jpeg",
      "/images/proyecto-intercambio-vial-2.jpeg",
    ],
    featured: true,
  },
  {
    id: "intercambio-vial-glorieta-aeropuerto-jmc",
    title: "Intercambio vial Glorieta Aeropuerto JMC",
    location: "Pendiente: agregar ubicación",
    description: "Pendiente: agregar descripción del proyecto.",
    images: [],
    video: "/images/proyecto-intercambio-glorieta-aeropuerto-jmc.mp4",
    featured: true,
  },
  {
    id: "intercambio-vial-mayorca-sabaneta-envigado",
    title: "Intercambio vial Mayorca (Sabaneta-Envigado)",
    location: "Pendiente: agregar ubicación",
    description: "Pendiente: agregar descripción del proyecto.",
    images: [],
    video: "/images/proyecto-intercambio-mayorca-sabaneta-envigado.mp4",
    featured: true,
  },
  {
    id: "analisis-conflicto-vehiculo-peaton",
    title: "Análisis de conflicto vehículo - peatón",
    location: "Pendiente: agregar ubicación",
    description: "Pendiente: agregar descripción del proyecto.",
    images: [],
    video: "/images/proyecto-analisis-conflicto-vehiculo-peaton.mp4",
  },
  {
    id: "pmt-glorieta-san-nicolas",
    title: "Plan de Manejo de Tránsito — C.C. San Nicolás",
    location: "Medellín, Antioquia",
    description:
      "Diseñamos la señalización y el manejo temporal del tránsito durante la construcción de un intercambio tipo glorieta sobre la calle 41C, sin comprometer la seguridad de vehículos, peatones y ciclistas.",
    images: ["/images/pmt-glorieta.jpg"],
    planPdf: "/docs/pmt-glorieta-san-nicolas.pdf",
  },
  {
    id: "mejoramiento-carrera-34",
    title: "Mejoramiento vial Carrera 34 (Transversal Inferior) x Calle 16A Sur",
    location: "Medellín, Antioquia",
    description:
      "Desarrollamos el diseño geométrico en planta y perfil para la maduración de estudios de mejoramiento de la intersección, en convenio con la Secretaría de Infraestructura Física de la Alcaldía de Medellín.",
    images: ["/images/planta-perfil.jpg"],
    planPdf: "/docs/planta-perfil-carrera-34.pdf",
  },
];

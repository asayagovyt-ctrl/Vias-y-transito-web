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
    category: "Diseño geométrico",
  },
  {
    id: "intercambio-vial-glorieta-aeropuerto-jmc",
    title: "Intercambio vial Glorieta Aeropuerto JMC",
    location: "Rionegro, Antioquia",
    description:
      "Diseñamos el intercambio tipo glorieta que ordena los cruces entre el corredor de acceso al Aeropuerto José María Córdova y las vías urbanas de Rionegro, mejorando la capacidad y seguridad en un punto de alto flujo vehicular.",
    images: ["/images/proyecto-intercambio-glorieta-aeropuerto-jmc-poster.jpg"],
    video: "/images/proyecto-intercambio-glorieta-aeropuerto-jmc.mp4",
    featured: true,
    category: "Diseño geométrico",
  },
  {
    id: "intercambio-vial-mayorca-sabaneta-envigado",
    title: "Intercambio vial Mayorca (Sabaneta-Envigado)",
    location: "Sabaneta - Envigado, Antioquia",
    description:
      "Diseñamos el intercambio vial en el límite entre Sabaneta y Envigado, junto al Centro Comercial Mayorca, para ordenar los giros y reducir la congestión en uno de los puntos de mayor tráfico entre los dos municipios.",
    images: ["/images/proyecto-intercambio-mayorca-sabaneta-envigado-poster.jpg"],
    video: "/images/proyecto-intercambio-mayorca-sabaneta-envigado.mp4",
    featured: true,
    category: "Diseño geométrico",
  },
  {
    id: "analisis-conflicto-vehiculo-peaton",
    title: "Análisis de conflicto vehículo - peatón",
    description:
      "Analizamos los puntos de conflicto entre vehículos y peatones en una intersección de alto flujo, identificando cruces inseguros y proponiendo medidas de mitigación como demarcación, señalización y ajuste de tiempos semafóricos para reducir el riesgo de accidentalidad.",
    images: ["/images/proyecto-analisis-conflicto-vehiculo-peaton-poster.jpg"],
    video: "/images/proyecto-analisis-conflicto-vehiculo-peaton.mp4",
    category: "Estudios de movilidad",
  },
  {
    id: "modulacion-estacionamientos",
    title: "Simulación estacionamiento",
    description:
      "Diseñamos la modulación de un parqueadero, definiendo la disposición de celdas, circulaciones y accesos para maximizar la capacidad de parqueo sin afectar la fluidez del tránsito interno ni las zonas de cargue y descargue.",
    images: ["/images/proyecto-modulacion-estacionamientos-poster.jpg"],
    video: "/images/proyecto-modulacion-estacionamientos.mp4",
    category: "Estudios de movilidad",
  },
  {
    id: "pmt-glorieta-san-nicolas",
    title: "Plan de Manejo de Tránsito — C.C. San Nicolás",
    location: "Medellín, Antioquia",
    description:
      "Diseñamos la señalización y el manejo temporal del tránsito durante la construcción de un intercambio tipo glorieta sobre la calle 41C, sin comprometer la seguridad de vehículos, peatones y ciclistas.",
    images: ["/images/pmt-glorieta.jpg"],
    planPdf: "/docs/pmt-glorieta-san-nicolas.pdf",
    category: "Plan de Manejo de Tránsito",
  },
  {
    id: "mejoramiento-carrera-34",
    title: "Mejoramiento vial Carrera 34 (Transversal Inferior) x Calle 16A Sur",
    location: "Medellín, Antioquia",
    description:
      "Desarrollamos el diseño geométrico en planta y perfil para la maduración de estudios de mejoramiento de la intersección, en convenio con la Secretaría de Infraestructura Física de la Alcaldía de Medellín.",
    images: ["/images/planta-perfil.jpg"],
    planPdf: "/docs/planta-perfil-carrera-34.pdf",
    category: "Diseño geométrico",
  },
];

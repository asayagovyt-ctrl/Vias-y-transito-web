import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "intercambio-vial-el-campestre",
    title: "Intercambio vial TV. Inferior x El Campestre",
    location: "Medellín, Antioquia",
    description:
      "Diseñamos un intercambio vial con puente peatonal y ciclorruta para un sector de alta densidad urbana, integrando vehículos, peatones y ciclistas en una sola solución.",
    images: [
      "/images/PROYECTOS/proyecto-intercambio-vial-1.jpeg",
      "/images/PROYECTOS/proyecto-intercambio-vial-2.jpeg",
    ],
    featured: true,
    category: "Diseño geométrico",
  },
  {
    id: "intercambio-vial-glorieta-aeropuerto-jmc",
    title: "Intersección tipo Trébol Aeropuerto JMC",
    location: "Rionegro, Antioquia",
    description:
      "Diseñamos la intersección tipo trébol que ordena los cruces entre el corredor de acceso al Aeropuerto José María Córdova y las vías urbanas de Rionegro, mejorando la capacidad y seguridad en un punto de alto flujo vehicular.",
    images: ["/images/PROYECTOS/proyecto-intercambio-glorieta-aeropuerto-jmc-poster.webp"],
    video: "/images/PROYECTOS/proyecto-intercambio-glorieta-aeropuerto-jmc.mp4",
    featured: true,
    category: "Diseño geométrico",
  },
  {
    id: "intercambio-vial-mayorca-sabaneta-envigado",
    title: "Intercambio vial Mayorca (Sabaneta-Envigado)",
    location: "Sabaneta - Envigado, Antioquia",
    description:
      "Diseñamos el intercambio vial en el límite entre Sabaneta y Envigado, junto al Centro Comercial Mayorca, para ordenar los giros y reducir la congestión en uno de los puntos de mayor tráfico entre los dos municipios.",
    images: ["/images/PROYECTOS/proyecto-intercambio-mayorca-sabaneta-envigado-poster.webp"],
    video: "/images/PROYECTOS/proyecto-intercambio-mayorca-sabaneta-envigado.mp4",
    featured: true,
    category: "Diseño geométrico",
  },
  {
    id: "analisis-conflicto-vehiculo-peaton",
    title: "Análisis de conflicto vehículo - peatón",
    description:
      "Analizamos los puntos de conflicto entre vehículos y peatones en una intersección de alto flujo, identificando cruces inseguros y proponiendo medidas de mitigación como demarcación, señalización y ajuste de tiempos semafóricos para reducir el riesgo de accidentalidad.",
    images: ["/images/PROYECTOS/proyecto-analisis-conflicto-vehiculo-peaton-poster.jpg"],
    video: "/images/PROYECTOS/proyecto-analisis-conflicto-vehiculo-peaton.mp4",
    category: "Estudios de movilidad",
  },
  {
    id: "modulacion-estacionamientos",
    title: "Simulación estacionamiento",
    description:
      "Diseñamos la modulación de un parqueadero, definiendo la disposición de celdas, circulaciones y accesos para maximizar la capacidad de parqueo sin afectar la fluidez del tránsito interno ni las zonas de cargue y descargue.",
    images: ["/images/PROYECTOS/proyecto-modulacion-estacionamientos-poster.jpg"],
    video: "/images/PROYECTOS/proyecto-modulacion-estacionamientos.mp4",
    category: "Estudios de movilidad",
  },
  {
    id: "pmt-glorieta-san-nicolas",
    title: "Plan de Manejo de Tránsito — C.C. San Nicolás",
    location: "Medellín, Antioquia",
    description:
      "Diseñamos la señalización y el manejo temporal del tránsito durante la construcción de un intercambio tipo glorieta sobre la calle 41C, sin comprometer la seguridad de vehículos, peatones y ciclistas.",
    images: ["/images/PROYECTOS/pmt-glorieta.jpg"],
    planPdf: "/docs/pmt-glorieta-san-nicolas.pdf",
    category: "Modelaciones",
  },
  {
    id: "modelacion-intercambio-desnivel-1",
    title: "Modelación intercambio a desnivel 1",
    description:
      "Modelamos en 3D un intercambio vial a desnivel para visualizar la geometría de los ramales y la interacción entre los distintos niveles de circulación antes de construirlo.",
    images: ["/images/PROYECTOS/proyecto-modelacion-intercambio-desnivel-1-poster.jpg"],
    video: "/images/PROYECTOS/proyecto-modelacion-intercambio-desnivel-1.mp4",
    category: "Modelaciones",
  },
  {
    id: "modelacion-intercambio-desnivel-2",
    title: "Modelación intercambio a desnivel 2",
    description:
      "Modelamos en 3D un intercambio vial a desnivel para visualizar la geometría de los ramales y la interacción entre los distintos niveles de circulación antes de construirlo.",
    images: ["/images/PROYECTOS/proyecto-modelacion-intercambio-desnivel-2-poster.jpg"],
    video: "/images/PROYECTOS/proyecto-modelacion-intercambio-desnivel-2.mp4",
    category: "Modelaciones",
  },
  {
    id: "modelacion-intercambio-desnivel-3",
    title: "Modelación intercambio a desnivel 3",
    description:
      "Modelamos en 3D un intercambio vial a desnivel para visualizar la geometría de los ramales y la interacción entre los distintos niveles de circulación antes de construirlo.",
    images: ["/images/PROYECTOS/proyecto-modelacion-intercambio-desnivel-3-poster.jpg"],
    video: "/images/PROYECTOS/proyecto-modelacion-intercambio-desnivel-3.mp4",
    category: "Modelaciones",
  },
  {
    id: "analisis-movilidad-triadas-medellin",
    title: "Análisis de movilidad TRIADAS Medellín",
    location: "Medellín, Antioquia",
    description:
      "Analizamos la movilidad del sector TRIADAS en Medellín para identificar puntos críticos de circulación vehicular y peatonal, sirviendo de base para futuras propuestas de mejoramiento.",
    images: ["/images/PROYECTOS/proyecto-analisis-movilidad-triadas-medellin.jpeg"],
    category: "Modelaciones",
  },
  {
    id: "mejoramiento-carrera-34",
    title: "Mejoramiento vial Carrera 34 (Transversal Inferior) x Calle 16A Sur",
    location: "Medellín, Antioquia",
    description:
      "Desarrollamos el diseño geométrico en planta y perfil para la maduración de estudios de mejoramiento de la intersección, en convenio con la Secretaría de Infraestructura Física de la Alcaldía de Medellín.",
    images: ["/images/PROYECTOS/planta-perfil.jpg"],
    planPdf: "/docs/planta-perfil-carrera-34.pdf",
    category: "Diseño geométrico",
  },
];

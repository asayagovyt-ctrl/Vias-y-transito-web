export interface Technology {
  name: string;
  application: string;
}

export const technologies: Technology[] = [
  { name: "PTV Vissim", application: "Microsimulación de tránsito y evaluación operacional." },
  { name: "PTV Vistro", application: "Modelación de redes y optimización semafórica." },
  { name: "SIDRA Intersection", application: "Capacidad y niveles de servicio de intersecciones." },
  { name: "AutoCAD Civil 3D", application: "Diseño geométrico e infraestructura vial." },
  { name: "ArcGIS / QGIS", application: "Análisis espacial y gestión geográfica." },
  { name: "AutoCAD", application: "Elaboración de planos técnicos." },
  { name: "Vehicle Tracking", application: "Análisis de trayectorias vehiculares." },
  { name: "Metodología BIM", application: "Modelado coordinado e integrado de proyectos de infraestructura." },
];

export interface HistoryProject {
  title: string;
  location: string;
}

export interface HistoryCategory {
  name: string;
  items: HistoryProject[];
}

export const projectsHistory: HistoryCategory[] = [
  {
    name: "Estudios de movilidad",
    items: [
      { title: "Estudio de Movilidad Pretroncal Sur Metroplús Tramo 1", location: "Envigado" },
      { title: "Estudio de Movilidad Troncal Sur Metroplús Tramo 6", location: "Medellín" },
      { title: "Plan de Movilidad Girardota", location: "Girardota" },
      { title: "Estudio de Movilidad Municipio de Envigado", location: "Envigado" },
    ],
  },
  {
    name: "Estudios de tránsito",
    items: [
      { title: "Estudio de tránsito Parques del Río desde Ancón Sur - Ancón Norte", location: "Medellín" },
      { title: "Estudio de tránsito Intercambio vial Ayurá", location: "Envigado" },
      { title: "Estudio de tránsito Intercambio Carrera 65 x calle 50", location: "Medellín" },
      { title: "Estudio de tránsito Avenida Las Palmas", location: "Medellín" },
      { title: "Estudio de tránsito Corredor Vial La Nevera - Guanapalo", location: "Yopal" },
    ],
  },
  {
    name: "Diseño vial e intercambios",
    items: [
      { title: "Estudio y Diseño vial Intercambio Av. Ochenta x calle 33", location: "Medellín" },
      { title: "Estudio y Diseño vial Intercambio Tv. Inferior x calle 16A Sur", location: "Medellín" },
      { title: "Estudio y Diseño vial Intercambio Mayorca", location: "Envigado-Sabaneta" },
      { title: "Estudio y Diseño vial Intercambio glorieta Aeropuerto JMC", location: "Rionegro" },
      { title: "Diseño Vial Doble Calzada Ancón - Bolombolo", location: "Antioquia" },
    ],
  },
  {
    name: "Señalización y Plan de Manejo de Tránsito",
    items: [
      { title: "Estudio, Diseño vial, Señalización y PMT Intercambio Autopista Sur x calle 50-51", location: "Itagüí" },
      { title: "Estudio, Diseño vial, Señalización y PMT Intercambio Autopista Sur x Av. Pilsen", location: "Itagüí" },
      { title: "Estudio, Diseño vial, Señalización y PMT Intercambio Autopista Sur x Puente Simón Bolívar", location: "Itagüí" },
      { title: "Estudio, Diseño vial y PMT Intercambio Alto Palmas", location: "Medellín" },
      { title: "Estudio, Señalización y PMT Metroplús Av. Oriental", location: "Medellín" },
      { title: "Señalización Vial Metroplús Tramo 4", location: "Medellín" },
    ],
  },
  {
    name: "Estudios de tránsito en centros comerciales",
    items: [
      { title: "Centro Comercial Mayorca Etapas I y II", location: "Sabaneta" },
      { title: "Centro Comercial Fabricato", location: "Bello" },
      { title: "Centro Comercial El Tesoro", location: "Medellín" },
      { title: "Centro Comercial Los Molinos", location: "Medellín" },
      { title: "Centro Comercial Santa Fé", location: "Medellín" },
      { title: "Centro Comercial Viva Envigado", location: "Envigado" },
      { title: "Centro Comercial Arkadia", location: "Medellín" },
      { title: "Centro Comercial Punto Clave", location: "Medellín" },
      { title: "Centro Comercial Aventura", location: "Medellín" },
      { title: "Centro Comercial La Central", location: "Medellín" },
      { title: "Centro Comercial La Florida", location: "Medellín" },
      { title: "Centro Comercial Guacarí", location: "Sincelejo" },
      { title: "Centro Comercial Plaza Del Río", location: "Apartadó" },
      { title: "Centro Comercial Ventura Plaza", location: "Cúcuta" },
    ],
  },
];

import type { Client } from "@/types/client";

// Falta el logo de Constructora Altos de la Abadía (el archivo recibido para
// esta última corresponde a otra empresa — Vértice Ingeniería y Construcción
// — así que se omite hasta recibir el logo correcto). Mientras tanto se
// muestra el nombre.
export const clients: Client[] = [
  { name: "Almacenes Éxito S.A.", logo: "/images/grupo-exito-logo-png.png" },
  { name: "Hitos Urbanos S.A.S", logo: "/images/logo_hitos_urbanos.svg" },
  {
    name: "Caja de Compensación Familiar de Antioquia — Comfama",
    logo: "/images/logo_comfama.svg",
  },
  { name: "Integral S.A.", logo: "/images/logo_integral_sa.svg" },
  { name: "Colpatria", logo: "/images/logo_colpatria.svg" },
  { name: "Constructora Altos de la Abadía S.A.S." },
  { name: "Inversiones Proal S.A.S.", logo: "/images/logo_inversiones_proal.svg" },
  { name: "Ménsula S.A.S", logo: "/images/logo_mensula.png" },
  { name: "Amarilo S.A.S.", logo: "/images/logo_amarilo.svg" },
  { name: "Coninsa S.A.S", logo: "/images/logo_coninsa.svg" },
  {
    name: "Crearcimientos Propiedad Raíz S.A.S.",
    logo: "/images/logo_crearcimientos.svg",
  },
  { name: "Londoño Gómez S.A.S.", logo: "/images/logo_londono_gomez.png" },
  {
    name: "Constructora Conconcreto S.A.",
    logo: "/images/logo_constructora_conconcreto.svg",
  },
  {
    name: "Constructora Capital Medellín S.A.S.",
    logo: "/images/logo_constructora_capital_medellin.svg",
  },
  {
    name: "Arquitectura y Concreto S.A.S",
    logo: "/images/logo_arquitectura_y_concreto.jpg",
  },
];

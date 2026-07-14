import type { Client } from "@/types/client";

// Falta el logo de Constructora Altos de la Abadía (el archivo recibido para
// esta última corresponde a otra empresa — Vértice Ingeniería y Construcción
// — así que se omite hasta recibir el logo correcto). Mientras tanto se
// muestra el nombre.
//
// Orden: de mayor a menor número de proyectos realizados en conjunto.
export const clients: Client[] = [
  {
    name: "Arquitectura y Concreto S.A.S",
    logo: "/images/logo_arquitectura_y_concreto.jpg",
  }, // 114
  {
    name: "Constructora Capital Medellín S.A.S.",
    logo: "/images/logo_constructora_capital_medellin.svg",
  }, // 18
  {
    name: "Constructora Conconcreto S.A.",
    logo: "/images/logo_constructora_conconcreto.svg",
  }, // 17
  { name: "Ménsula S.A.S", logo: "/images/logo_mensula.png" }, // 13
  { name: "Londoño Gómez S.A.S.", logo: "/images/logo_londono_gomez.png" }, // 12
  { name: "Amarilo S.A.S.", logo: "/images/logo_amarilo.svg" }, // 11
  { name: "Coninsa S.A.S", logo: "/images/logo_coninsa.svg" }, // 11
  {
    name: "Crearcimientos Propiedad Raíz S.A.S.",
    logo: "/images/logo_crearcimientos.svg",
  }, // 11
  { name: "Inversiones Proal S.A.S.", logo: "/images/logo_inversiones_proal.svg" }, // 7
  { name: "Constructora Altos de la Abadía S.A.S." }, // 5
  { name: "Colpatria", logo: "/images/logo_colpatria.svg" }, // 4
  {
    name: "Caja de Compensación Familiar de Antioquia — Comfama",
    logo: "/images/logo_comfama.svg",
  }, // 3
  { name: "Integral S.A.", logo: "/images/logo_integral_sa.svg" }, // 3
  { name: "Almacenes Éxito S.A.", logo: "/images/grupo-exito-logo-png.png" }, // 2
  { name: "Hitos Urbanos S.A.S", logo: "/images/logo_hitos_urbanos.svg" }, // 2
];

export type ProjectCategory =
  | "Diseño geométrico"
  | "Plan de Manejo de Tránsito"
  | "Estudios de movilidad";

export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  images: string[];
  video?: string;
  planPdf?: string;
  featured?: boolean;
  category: ProjectCategory;
  /** true while location/description are still placeholder text, pending client input */
  pending?: boolean;
}

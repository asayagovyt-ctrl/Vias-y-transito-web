import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  highlights: string[];
  icon: LucideIcon;
  image?: string;
  homeImage: string;
}

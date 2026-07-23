import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  highlights: string[];
  icon: LucideIcon;
  image?: string;
  /** CSS object-position for the image crop; defaults to "center" when omitted. */
  imagePosition?: string;
  /** "contain" shows the full image with no cropping; defaults to "cover" when omitted. */
  imageFit?: "cover" | "contain";
}

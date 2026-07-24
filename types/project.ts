export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  images: string[];
  video?: string;
  planPdf?: string;
  featured?: boolean;
}

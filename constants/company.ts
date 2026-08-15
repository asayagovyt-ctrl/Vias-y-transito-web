// Dominio propio pendiente: mientras no exista, el sitio vive en el
// subdominio de Vercel. Si se configura NEXT_PUBLIC_SITE_URL (al conectar
// un dominio propio), sitemap/canonical/OG lo usan automáticamente.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vias-y-transito-web.vercel.app";

export const company = {
  name: "Vías y Tránsito",
  legalName: "Vías y Tránsito SAS",
  tagline: "Especialistas en vías y transporte",
  foundedYear: 2008,
  yearsOfExperience: new Date().getFullYear() - 2008,
  projectsCompleted: "1000+",
  coverage: "Nacional e internacional",
  differentiators: [
    "Te acompañamos de principio a fin.",
    "Varias especialidades, una sola solución.",
  ],
  aboutIntro:
    "Desde 2008 hemos desarrollado estudios y diseños de tránsito, movilidad e infraestructura vial para proyectos públicos y privados en Colombia. Nuestra trayectoria nos ha permitido participar en iniciativas de diferentes escalas, aportando soluciones técnicas y gestionando con éxito los procesos de evaluación y aprobación ante entidades municipales, departamentales y nacionales.",
  phones: ["3184586533", "3162885102"],
  // Pendiente de confirmar por el cliente cuál número usar para el botón de WhatsApp.
  whatsappNumber: "573184586533",
  emails: ["a.velez.vyt@gmail.com", "a.sayago.vyt@gmail.com"],
  address: "Carrera 43A #14-27, Oficina 702, Medellín, Colombia",
  locationDirections:
    "Estamos ubicados sobre la Carrera 43A (Avenida El Poblado), en el sector de El Poblado, cerca del Centro Comercial Monterrey. Quedamos a pocos minutos caminando de las estaciones de bus/MetroPlus de Castropol y Colinas del Poblado, con fácil acceso desde toda la ciudad.",
};

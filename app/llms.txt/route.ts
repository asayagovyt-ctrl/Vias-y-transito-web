import { company, siteUrl } from "@/constants/company";
import { services } from "@/constants/services";

// llms.txt: resumen del sitio en texto plano para asistentes de IA
// (ChatGPT, Claude, Gemini, etc.), análogo a lo que robots.txt es para
// buscadores. Se genera como ruta (y no como archivo estático en public/)
// para que las URLs sigan a siteUrl cuando se conecte el dominio propio.
export function GET() {
  const body = `# ${company.legalName}

> ${company.tagline}. Estudios y diseños de tránsito, movilidad e
> infraestructura vial para proyectos públicos y privados en Colombia,
> desde ${company.foundedYear}. Más de 1000 proyectos a nivel nacional e
> internacional.

Empresa de ingeniería con sede en Medellín, Colombia. Acompaña proyectos
viales de principio a fin: desde los estudios iniciales hasta la
aprobación ante entidades municipales, departamentales y nacionales.

## Servicios

${services.map((service) => `- ${service.title}`).join("\n")}

## Páginas

- [Inicio](${siteUrl}/): presentación de la empresa y sus servicios
- [Servicios](${siteUrl}/servicios): detalle de cada servicio de ingeniería vial
- [Proyectos](${siteUrl}/proyectos): proyectos representativos ya ejecutados
- [Nosotros](${siteUrl}/nosotros): trayectoria y equipo de la empresa
- [Contacto](${siteUrl}/contacto): formulario de contacto y cotizaciones

## Contacto

- Dirección: ${company.address}
- Teléfonos: ${company.phones.map((phone) => `+57 ${phone}`).join(", ")}
- Correo: ${company.emails[0]}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

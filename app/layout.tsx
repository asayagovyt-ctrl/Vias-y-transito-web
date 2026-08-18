import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@/components/layout/Analytics";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { company, siteUrl } from "@/constants/company";
import "../styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-sora",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vías y Tránsito SAS | Especialistas en vías y transporte",
  description:
    "Diseño geométrico de vías, planes de manejo de tránsito, señalización vial, estudios de movilidad y más. 18 años de experiencia, más de 1000 proyectos a nivel nacional e internacional.",
  // El home (app/page.tsx) es un client component y no puede exportar su
  // propio `metadata`, así que su canonical vive aquí; las demás páginas
  // lo sobrescriben con el suyo.
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.legalName,
  description: company.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressCountry: "CO",
  },
  telephone: company.phones.map((phone) => `+57${phone}`),
  email: company.emails[0],
  areaServed: "CO",
  foundingDate: String(company.foundedYear),
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${sora.variable} ${plexSans.variable} ${plexMono.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppButton />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

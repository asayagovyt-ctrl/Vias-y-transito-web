import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
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
  title: "Vías y Tránsito SAS | Especialistas en vías y transporte",
  description:
    "Diseño geométrico de vías, planes de manejo de tránsito, señalización vial, estudios de movilidad y más. 18 años de experiencia, más de 1000 proyectos a nivel nacional e internacional.",
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
      </body>
    </html>
  );
}

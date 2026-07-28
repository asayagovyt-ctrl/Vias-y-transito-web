import { ImageResponse } from "next/og";
import { company } from "@/constants/company";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// @vercel/og intenta resolver su fuente por defecto a partir de la ruta
// del proyecto en disco; en Windows, con espacios/acentos en la ruta local
// (repo checkout), esa resolución revienta en build time. Generarla bajo
// demanda evita el prerender local; en Vercel (ruta sin esos caracteres)
// funcionaría igual estática o dinámica.
export const dynamic = "force-dynamic";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#111827",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 64,
            height: 8,
            borderRadius: 4,
            backgroundColor: "#FFC107",
            marginBottom: 32,
          }}
        />
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
          {company.legalName}
        </div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 24, color: "#FFC107" }}>
          {company.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 24, marginTop: 40, color: "#E5E7EB" }}>
          {company.yearsOfExperience} años de experiencia · {company.projectsCompleted} proyectos
        </div>
      </div>
    ),
    { ...size }
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFC107",
          // El amarillo de marca nunca va como color de texto legible (falla
          // contraste WCAG en la mayoría de fondos claros del sitio). Este
          // tono oscurecido sí cumple AA si en algún caso puntual hace falta
          // texto en amarillo.
          "yellow-text": "#8A6100",
          paper: "#F1F5F9",
          cream: "#FBF7ED",
          grey: "#64748B",
          ink: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "sans-serif"],
        heading: ["var(--font-sora)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(17,24,39,0.04), 0 8px 24px -12px rgba(17,24,39,0.10)",
        "card-hover": "0 2px 6px rgba(17,24,39,0.05), 0 16px 32px -16px rgba(17,24,39,0.14)",
      },
    },
  },
  plugins: [],
};
export default config;

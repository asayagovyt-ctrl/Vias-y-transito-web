import type { ReactNode } from "react";

interface PageVideoBannerProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Muestra el eyebrow como título grande en amarillo, en vez del título estándar. */
  emphasizeEyebrow?: boolean;
  videoSrc?: string;
  /** Intensifica el velo blanco donde va el texto, para videos más contrastados. */
  strongOverlay?: boolean;
  /** Refuerza aún más el velo (opacidad y alcance) sobre la zona del texto, para esta instancia únicamente. */
  overlayBoost?: boolean;
  /** Posición vertical del bloque de texto dentro del banner. Por defecto va abajo. */
  contentAlign?: "end" | "center";
  /** Reduce el alto del banner (padding y min-height) solo para esta instancia. */
  compact?: boolean;
  /** Línea corta subordinada a la descripción (ej. plazo de respuesta). */
  microcopy?: string;
  /** Contenido extra (cifras, botones) debajo de la descripción. */
  children?: ReactNode;
}

export function PageVideoBanner({
  eyebrow,
  title,
  description,
  emphasizeEyebrow = false,
  videoSrc = "/videos/hero-road-2.mp4",
  strongOverlay = false,
  overlayBoost = false,
  contentAlign = "end",
  compact = false,
  microcopy,
  children,
}: PageVideoBannerProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      {/* En móvil el bloque de texto ocupa casi todo el ancho, así que el fade
          horizontal (pensado para pantallas anchas) deja el final de cada
          línea sobre video transparente. Se usa un velo vertical de ancho
          completo solo en móvil; desde sm: se conserva el fade original. */}
      <div
        className="absolute inset-0 sm:hidden"
        aria-hidden="true"
        style={{
          background: overlayBoost
            ? "linear-gradient(180deg, rgba(250,250,248,0.5) 0%, rgba(250,250,248,0.9) 20%, rgba(250,250,248,0.98) 38%, rgba(250,250,248,1) 100%)"
            : "linear-gradient(180deg, rgba(250,250,248,0.3) 0%, rgba(250,250,248,0.82) 22%, rgba(250,250,248,0.95) 42%, rgba(250,250,248,0.97) 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden sm:block"
        aria-hidden="true"
        style={{
          background: overlayBoost
            ? "linear-gradient(90deg, rgba(250,250,248,1) 0%, rgba(250,250,248,0.97) 45%, rgba(250,250,248,0.75) 60%, rgba(250,250,248,0.15) 75%, transparent 85%)"
            : strongOverlay
            ? "linear-gradient(90deg, rgba(250,250,248,0.97) 0%, rgba(250,250,248,0.9) 40%, rgba(250,250,248,0.55) 55%, transparent 68%)"
            : "linear-gradient(90deg, rgba(250,250,248,0.8) 0%, rgba(250,250,248,0.6) 38%, rgba(250,250,248,0.2) 58%, transparent 68%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-40 sm:h-36"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,15,10,0.6) 0%, rgba(10,15,10,0.28) 55%, transparent 100%)",
        }}
      />
      {(eyebrow || title) && (
        <div
          className={`relative z-10 flex flex-col px-6 sm:px-10 ${
            compact
              ? "min-h-[300px] pb-10 pt-28 sm:min-h-[360px] sm:pb-12 sm:pt-36"
              : "min-h-[400px] pb-16 pt-44 sm:min-h-[500px] sm:pb-20 sm:pt-56"
          } ${contentAlign === "center" ? "justify-center" : "justify-end"}`}
        >
          <div className="max-w-2xl">
            {eyebrow && (
              <p
                className={
                  emphasizeEyebrow
                    ? "mb-3 text-balance font-heading text-4xl font-extrabold uppercase leading-tight tracking-tight text-brand-yellow sm:text-5xl"
                    : "mb-3 font-sans text-lg font-bold uppercase tracking-wide text-brand-yellow sm:text-xl"
                }
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h1
                className="mb-3 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl"
                style={{ textShadow: "0 1px 2px rgba(250,250,248,0.9), 0 2px 16px rgba(250,250,248,0.9)" }}
              >
                {title}
              </h1>
            )}
            {description && (
              <p
                className="max-w-xl text-base leading-relaxed text-slate-700 sm:text-[17px]"
                style={{ textShadow: "0 1px 2px rgba(250,250,248,0.9), 0 2px 14px rgba(250,250,248,0.85)" }}
              >
                {description}
              </p>
            )}
            {microcopy && (
              <p
                className="mt-2 text-xs text-slate-500 sm:text-sm"
                style={{ textShadow: "0 1px 2px rgba(250,250,248,0.9), 0 2px 14px rgba(250,250,248,0.85)" }}
              >
                {microcopy}
              </p>
            )}
            {children && <div className="mt-6">{children}</div>}
          </div>
        </div>
      )}
    </div>
  );
}

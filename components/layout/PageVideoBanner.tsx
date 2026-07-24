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
  /** Posición vertical del bloque de texto dentro del banner. Por defecto va abajo. */
  contentAlign?: "end" | "center";
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
  contentAlign = "end",
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
          background:
            "linear-gradient(180deg, rgba(250,250,248,0.3) 0%, rgba(250,250,248,0.82) 22%, rgba(250,250,248,0.95) 42%, rgba(250,250,248,0.97) 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden sm:block"
        aria-hidden="true"
        style={{
          background: strongOverlay
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
          className={`relative z-10 flex min-h-[400px] flex-col px-6 pb-16 pt-44 sm:min-h-[500px] sm:px-10 sm:pb-20 sm:pt-56 ${
            contentAlign === "center" ? "justify-center" : "justify-end"
          }`}
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
            {children && <div className="mt-6">{children}</div>}
          </div>
        </div>
      )}
    </div>
  );
}

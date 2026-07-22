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
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: strongOverlay
            ? "linear-gradient(90deg, rgba(250,250,248,0.96) 0%, rgba(250,250,248,0.85) 35%, rgba(250,250,248,0.4) 46%, transparent 58%)"
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
        <div className="relative z-10 flex min-h-[400px] flex-col justify-end px-6 pb-16 pt-32 sm:min-h-[500px] sm:px-10 sm:pb-20 sm:pt-40">
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
              <h1 className="mb-3 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
                {title}
              </h1>
            )}
            {description && (
              <p className="max-w-xl text-base leading-relaxed text-slate-700 sm:text-[17px]">
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

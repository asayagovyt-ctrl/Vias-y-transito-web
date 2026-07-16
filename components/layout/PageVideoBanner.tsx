interface PageVideoBannerProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function PageVideoBanner({ eyebrow, title, description }: PageVideoBannerProps) {
  return (
    <div className="relative h-[360px] w-full overflow-hidden sm:h-[440px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-road-2.mp4"
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
          background:
            "linear-gradient(180deg, rgba(10,15,10,0.55) 0%, rgba(10,15,10,0.15) 40%, rgba(195,230,208,0.85) 85%, rgba(195,230,208,1) 100%)",
        }}
      />
      {(eyebrow || title) && (
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-10 sm:pb-20">
          <div className="max-w-2xl">
            {eyebrow && (
              <p
                className="mb-3 font-sans text-base font-bold uppercase tracking-wide text-brand-yellow sm:text-lg"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.6)" }}
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
              <p className="max-w-md text-base leading-relaxed text-slate-700 sm:text-[17px]">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

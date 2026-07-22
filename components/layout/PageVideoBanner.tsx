interface PageVideoBannerProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function PageVideoBanner({ eyebrow, title, description }: PageVideoBannerProps) {
  return (
    <div className="relative h-[400px] w-full overflow-hidden sm:h-[500px]">
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
            "linear-gradient(90deg, rgba(250,250,248,0.94) 0%, rgba(250,250,248,0.8) 38%, rgba(250,250,248,0.32) 58%, transparent 74%), linear-gradient(0deg, rgba(250,250,248,0.92) 0%, rgba(250,250,248,0.55) 26%, transparent 44%)",
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
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-10 sm:pb-20">
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="mb-3 font-sans text-lg font-bold uppercase tracking-wide text-brand-yellow sm:text-xl">
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
          </div>
        </div>
      )}
    </div>
  );
}

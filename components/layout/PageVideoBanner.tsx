export function PageVideoBanner() {
  return (
    <div className="relative h-[360px] w-full overflow-hidden sm:h-[440px]" aria-hidden="true">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-road-2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,15,10,0.55) 0%, rgba(10,15,10,0.15) 40%, rgba(195,230,208,0.85) 85%, rgba(195,230,208,1) 100%)",
        }}
      />
    </div>
  );
}

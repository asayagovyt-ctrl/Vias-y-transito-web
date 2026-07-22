"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { clients } from "@/constants/clients";
import { useAutoAdvance } from "@/lib/useAutoAdvance";

const PAGE_SIZE = 4;

export function Clientes() {
  const [page, setPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);

  const pageCount = Math.ceil(clients.length / PAGE_SIZE);
  const visible = clients.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const goToPage = (compute: (p: number) => number) => {
    const container = containerRef.current;
    if (!container || isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    gsap.to(container, {
      opacity: 0,
      y: -8,
      duration: 0.4,
      ease: "power1.inOut",
      onComplete: () => setPage(compute),
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.set(container, { opacity: 1, y: 0 });
    const tween = gsap.fromTo(
      Array.from(container.children),
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      }
    );

    return () => {
      tween.kill();
    };
  }, [page]);

  const goPrev = () => goToPage((p) => (p - 1 + pageCount) % pageCount);
  const goNext = () => goToPage((p) => (p + 1) % pageCount);

  const { pause, resume } = useAutoAdvance(goNext, 2600);

  return (
    <section
      id="clientes"
      onMouseEnter={pause}
      onMouseLeave={resume}
      className="relative px-6 py-10 sm:px-10 sm:py-16"
    >
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-4 inline-block w-fit rounded-full bg-brand-yellow px-7 py-3 font-sans text-lg font-extrabold uppercase tracking-wide text-brand-ink sm:text-xl">
          Confían en nosotros
        </p>
        <h2 className="mb-10 max-w-xl text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
          Clientes destacados
        </h2>

        <div ref={containerRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {visible.map((client) => (
            <div
              key={client.name}
              className="flex min-h-[220px] items-center justify-center rounded-2xl border border-black/10 bg-white p-6 text-center shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)]"
            >
              {client.logo ? (
                <div className="relative h-32 w-full max-w-[260px]">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="260px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="text-lg font-semibold leading-snug text-brand-ink">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3.5">
          <CarouselArrow direction="prev" onClick={goPrev} />
          <div className="flex gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                aria-label={`Ir a la página ${i + 1}`}
                onClick={() => goToPage(() => i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === page ? "w-5 bg-brand-yellow" : "w-1.5 bg-brand-ink/20"
                }`}
              />
            ))}
          </div>
          <CarouselArrow direction="next" onClick={goNext} />
        </div>
      </div>
    </section>
  );
}

function CarouselArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Anterior" : "Siguiente"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-ink transition-colors hover:bg-slate-50"
    >
      {direction === "prev" ? "‹" : "›"}
    </button>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { clients } from "@/constants/clients";
import { useFadeInUp } from "@/lib/useFadeInUp";
import { useAutoAdvance } from "@/lib/useAutoAdvance";

const PAGE_SIZE = 4;

export function Clientes() {
  const [page, setPage] = useState(0);
  const containerRef = useFadeInUp<HTMLDivElement>([page]);

  const pageCount = Math.ceil(clients.length / PAGE_SIZE);
  const visible = clients.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const goPrev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const goNext = () => setPage((p) => (p + 1) % pageCount);

  const { pause, resume } = useAutoAdvance(goNext, 4000);

  return (
    <section
      id="clientes"
      onMouseEnter={pause}
      onMouseLeave={resume}
      className="relative px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-3 font-sans text-base font-bold uppercase tracking-wide text-brand-yellow sm:text-lg">
          Confían en nosotros
        </p>
        <h2 className="mb-14 max-w-xl text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
          Clientes destacados
        </h2>

        <div ref={containerRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {visible.map((client) => (
            <div
              key={client.name}
              className="flex min-h-[220px] items-center justify-center rounded-2xl bg-white p-6 text-center shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)]"
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
                onClick={() => setPage(i)}
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

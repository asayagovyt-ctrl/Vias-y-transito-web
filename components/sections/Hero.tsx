"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { heroSlides } from "@/constants/heroSlides";
import { company } from "@/constants/company";
import { useFadeInUp } from "@/lib/useFadeInUp";
import { useAutoAdvance } from "@/lib/useAutoAdvance";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function Hero() {
  const [current, setCurrent] = useState(0);
  const slide = heroSlides[current];
  const contentRef = useFadeInUp<HTMLDivElement>([current]);
  const prefersReducedMotion = useReducedMotion();

  const goTo = (index: number) => setCurrent(index);
  const goPrev = () =>
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  const goNext = () => setCurrent((c) => (c + 1) % heroSlides.length);

  const { pause, resume } = useAutoAdvance(goNext, 9000);

  return (
    <section
      id="inicio"
      onMouseEnter={pause}
      onMouseLeave={resume}
      className="relative min-h-screen overflow-hidden bg-brand-paper sm:min-h-[720px]"
    >
      {prefersReducedMotion ? (
        <Image
          src="/videos/hero-road-2-poster.webp"
          alt=""
          fill
          priority
          className="object-cover"
        />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero-road-2.mp4"
          poster="/videos/hero-road-2-poster.webp"
          preload="none"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      )}
      {/* En móvil el bloque de texto ocupa casi todo el ancho, así que el fade
          horizontal (pensado para pantallas anchas) deja el final de cada
          línea sobre video transparente. Se usa un velo vertical de ancho
          completo solo en móvil; desde sm: se conserva el fade original. */}
      <div
        className="absolute inset-0 sm:hidden"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(0deg, rgba(250,250,248,0.97) 0%, rgba(250,250,248,0.95) 42%, rgba(250,250,248,0.8) 62%, rgba(250,250,248,0.3) 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden sm:block"
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

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-16 pt-44 sm:min-h-[720px] sm:px-10 sm:pb-14 sm:pt-24">
        <div ref={contentRef} className="max-w-2xl">
          <p className="mb-5 inline-block w-fit rounded-full bg-brand-yellow px-6 py-2.5 font-sans text-base font-semibold uppercase tracking-wider text-brand-ink sm:text-xl">
            {slide.eyebrow}
          </p>
          {/* H1 semántico fijo: el titular visible rota con el carrusel,
              pero la página necesita un único <h1> estable para SEO y
              lectores de pantalla, no uno que cambie según qué diapositiva
              esté activa en el momento en que el servidor renderiza. */}
          <h1 className="sr-only">Viabilizamos la obra sin detener la movilidad</h1>
          <div
            aria-hidden="true"
            className="mb-4 text-balance font-heading text-4xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-5xl"
            style={{ textShadow: "0 1px 2px rgba(250,250,248,0.9), 0 2px 16px rgba(250,250,248,0.9)" }}
          >
            {slide.headline}
          </div>
          <p
            className="mb-7 max-w-md text-base font-normal leading-relaxed text-brand-ink/75 sm:text-[17px]"
            style={{ textShadow: "0 1px 2px rgba(250,250,248,0.9), 0 2px 14px rgba(250,250,248,0.85)" }}
          >
            {slide.sub}
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/contacto"
              className="rounded-full bg-brand-yellow px-9 py-4 text-base font-semibold uppercase tracking-wide text-brand-ink"
            >
              Cotiza tu proyecto
            </Link>
            <Link
              href="/servicios"
              className="rounded-full border border-brand-ink/30 px-7 py-4 text-base font-semibold text-brand-ink transition-colors hover:border-brand-yellow hover:bg-brand-yellow"
            >
              Ver servicios
            </Link>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-8">
            <Stat value={String(company.yearsOfExperience)} label="Años de experiencia" />
            <Stat value={company.projectsCompleted} label="Proyectos realizados" />
            <Stat value="Nacional" label="e internacional" />
          </div>

          <div className="flex items-center gap-3.5">
            <CarouselArrow direction="prev" onClick={goPrev} />
            <div className="flex gap-1">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir a la diapositiva ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="grid h-11 w-11 place-items-center"
                >
                  <span
                    className={`h-1.5 rounded-full transition-all ${
                      i === current ? "w-5 bg-brand-yellow" : "w-1.5 bg-brand-ink/20"
                    }`}
                  />
                </button>
              ))}
            </div>
            <CarouselArrow direction="next" onClick={goNext} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-mono text-xl font-semibold tabular-nums text-brand-ink">
        {value}
      </div>
      <div className="text-xs tracking-wide text-brand-ink/75">
        {label}
      </div>
    </div>
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
      className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-ink/20 bg-white/70 text-brand-ink transition-colors hover:bg-white"
    >
      {direction === "prev" ? "‹" : "›"}
    </button>
  );
}

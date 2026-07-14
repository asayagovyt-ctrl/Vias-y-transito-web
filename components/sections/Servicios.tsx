"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { services } from "@/constants/services";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function Servicios() {
  const gridRef = useScrollReveal<HTMLDivElement>();
  const [selected, setSelected] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selected === null) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  return (
    <section id="servicios" className="relative px-6 py-20 sm:px-10 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-3 font-sans text-sm font-bold uppercase tracking-wide text-brand-yellow">
          Lo que hacemos
        </p>
        <h2 className="mb-4 max-w-xl text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
          Nuestros servicios
        </h2>
        <p className="mb-14 max-w-xl text-base leading-relaxed text-slate-600">
          Cubrimos tu proyecto vial de punta a punta, desde el diseño hasta que entra en operación.
        </p>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setSelected(index)}
              className="group rounded-2xl border-2 border-transparent bg-white p-7 text-left shadow-sm outline-none transition-all hover:border-brand-yellow hover:shadow-md focus-visible:border-brand-yellow"
            >
              <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow font-mono text-sm font-semibold text-brand-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 font-heading text-lg font-bold text-brand-ink">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink transition-colors group-hover:text-brand-yellow">
                Ver más
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {mounted &&
        selected !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-ink/60 p-6"
            onClick={() => setSelected(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="servicio-modal-title"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl bg-white p-8 sm:p-10"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Cerrar"
                className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-brand-ink"
              >
                ✕
              </button>
              <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow font-mono text-sm font-semibold text-brand-ink">
                {String(selected + 1).padStart(2, "0")}
              </span>
              <h3
                id="servicio-modal-title"
                className="mb-4 font-heading text-2xl font-bold text-brand-ink"
              >
                {services[selected].title}
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                {services[selected].details}
              </p>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

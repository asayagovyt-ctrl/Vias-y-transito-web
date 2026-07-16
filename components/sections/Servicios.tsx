"use client";

import { services } from "@/constants/services";
import { ServiceCards } from "@/components/sections/ServiceCards";

export function Servicios() {
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

        <ServiceCards services={services} />
      </div>
    </section>
  );
}

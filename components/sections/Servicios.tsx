"use client";

import { services } from "@/constants/services";
import { ServiceCards } from "@/components/sections/ServiceCards";

export function Servicios() {
  return (
    <section id="servicios" className="relative px-6 py-20 sm:px-10 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <ServiceCards services={services} />
      </div>
    </section>
  );
}

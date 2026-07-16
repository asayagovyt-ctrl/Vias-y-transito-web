"use client";

import Link from "next/link";
import { services } from "@/constants/services";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function Servicios() {
  const listRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="servicios" className="relative px-6 py-20 sm:px-10 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <div ref={listRef} className="flex flex-col divide-y divide-slate-200">
          {services.map((service, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                className={`grid items-center gap-10 py-14 first:pt-0 last:pb-0 sm:gap-16 ${
                  reversed ? "sm:grid-cols-[1fr_240px]" : "sm:grid-cols-[240px_1fr]"
                }`}
              >
                <div
                  className={`flex justify-center ${reversed ? "sm:order-2" : "sm:order-1"}`}
                >
                  <span className="flex h-24 w-24 flex-none items-center justify-center rounded-2xl bg-brand-yellow text-brand-ink sm:h-28 sm:w-28">
                    <service.icon className="h-12 w-12 sm:h-14 sm:w-14" strokeWidth={1.6} />
                  </span>
                </div>

                <div className={reversed ? "sm:order-1" : "sm:order-2"}>
                  <span className="mb-2 block font-mono text-sm font-semibold text-brand-grey">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 text-balance font-heading text-2xl font-bold text-brand-ink sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mb-6 max-w-2xl text-base leading-relaxed text-slate-600">
                    {service.details}
                  </p>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink hover:text-brand-yellow"
                  >
                    Cotizar este servicio
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

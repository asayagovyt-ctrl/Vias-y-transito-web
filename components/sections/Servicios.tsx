"use client";

import Link from "next/link";
import { services } from "@/constants/services";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function Servicios() {
  const listRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="servicios" className="relative px-6 py-20 sm:px-10 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <div ref={listRef} className="flex flex-col gap-6">
          {services.map((service, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                className={`grid items-center gap-10 rounded-2xl bg-white p-8 shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)] sm:gap-16 sm:p-10 ${
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
                  <span className="mb-3 block font-sans text-sm font-bold uppercase tracking-wide text-brand-yellow">
                    Servicio {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 text-balance font-heading text-2xl font-bold text-brand-ink sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mb-6 max-w-2xl text-base leading-relaxed text-slate-600">
                    {service.details}
                  </p>
                  <div className="max-w-2xl border-t border-slate-200 pt-6">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-ink/30 px-5 py-3 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-yellow hover:bg-brand-yellow"
                    >
                      Cotizar este servicio
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

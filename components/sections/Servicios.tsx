"use client";

import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
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
                id={service.id}
                className={`grid scroll-mt-24 items-center gap-10 rounded-2xl bg-white p-8 shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)] sm:grid-cols-[280px_1fr] sm:gap-16 sm:p-10`}
              >
                <div
                  className={`flex justify-center ${reversed ? "sm:order-2" : "sm:order-1"}`}
                >
                  <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-xl bg-brand-paper">
                    <Image
                      src={service.pageImage}
                      alt={service.title}
                      fill
                      className="object-contain p-8"
                      sizes="(min-width: 640px) 220px, 55vw"
                    />
                  </div>
                </div>

                <div className={reversed ? "sm:order-1" : "sm:order-2"}>
                  <span className="mb-3 block font-sans text-base font-bold uppercase tracking-wide text-brand-yellow sm:text-lg">
                    Servicio {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 text-balance font-heading text-2xl font-bold text-brand-ink sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mb-5 max-w-2xl text-base leading-relaxed text-slate-600">
                    {service.details}
                  </p>
                  <ul className="mb-6 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-brand-yellow" strokeWidth={2.5} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="max-w-2xl border-t border-slate-200 pt-6">
                    <Link
                      href={`/contacto?servicio=${service.id}`}
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

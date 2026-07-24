"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { services } from "@/constants/services";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function Servicios() {
  const listRef = useScrollReveal<HTMLDivElement>();
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pillRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [activeId, setActiveId] = useState(services[0]?.id ?? "");
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    function onScroll() {
      hasScrolledRef.current = true;
    }
    window.addEventListener("scroll", onScroll, { once: true, passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    Object.values(cardRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasScrolledRef.current) return;
    pillRefs.current[activeId]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeId]);

  const activeIndex = Math.max(
    0,
    services.findIndex((service) => service.id === activeId)
  );

  function scrollToService(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="servicios" className="relative scroll-mt-20 px-6 py-10 sm:scroll-mt-24 sm:px-10 sm:py-16">
      <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[300px_1fr] lg:gap-16 lg:items-start">
        <nav className="sticky top-28 z-10 -mx-6 flex gap-2 overflow-x-auto border-b border-black/5 bg-brand-cream px-6 py-3 shadow-[0_8px_20px_-12px_rgba(23,27,31,0.3)] sm:top-28 sm:-mx-10 sm:px-10 lg:hidden [&::-webkit-scrollbar]:hidden">
          {services.map((service, index) => (
            <button
              key={service.id}
              ref={(el) => {
                pillRefs.current[service.id] = el;
              }}
              type="button"
              onClick={() => scrollToService(service.id)}
              className={`flex-none whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                activeId === service.id
                  ? "border-brand-yellow bg-brand-yellow text-brand-ink"
                  : "border-black/10 bg-white text-brand-grey"
              }`}
            >
              {String(index + 1).padStart(2, "0")} · {service.title}
            </button>
          ))}
        </nav>

        <aside className="hidden lg:sticky lg:top-28 lg:block">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-yellow">
            Explora nuestros servicios
          </p>
          <nav className="flex flex-col gap-1 border-l border-black/10">
            {services.map((service, index) => {
              const isActive = activeId === service.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => scrollToService(service.id)}
                  className={`group -ml-px flex items-baseline gap-3 border-l-2 py-3.5 pl-5 text-left transition-all duration-200 hover:translate-x-1.5 ${
                    isActive
                      ? "border-brand-yellow text-brand-ink"
                      : "border-transparent text-brand-grey hover:border-brand-yellow hover:text-brand-yellow"
                  }`}
                >
                  <span
                    className={`font-mono text-sm ${
                      isActive ? "text-brand-yellow" : "text-slate-400 group-hover:text-brand-yellow"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`text-base leading-snug ${isActive ? "font-semibold" : "font-medium"}`}>
                    {service.title}
                  </span>
                </button>
              );
            })}
          </nav>
          <div className="mt-5 border-t border-black/10 pt-4 font-mono text-xs text-brand-grey">
            <span className="text-base font-semibold text-brand-ink">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {services.length} especialidades
          </div>
        </aside>

        <div ref={listRef} className="flex min-w-0 flex-col gap-6 lg:col-start-2">
          {services.map((service, index) => {
            const hasImage = Boolean(service.image);
            const reversed = hasImage ? false : index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                ref={(el) => {
                  cardRefs.current[service.id] = el;
                }}
                className={`grid scroll-mt-40 items-center gap-10 rounded-2xl border border-black/10 bg-white p-8 shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)] sm:gap-16 sm:p-10 lg:scroll-mt-28 ${
                  hasImage
                    ? "sm:grid-cols-[1.05fr_1fr]"
                    : reversed
                      ? "sm:grid-cols-[1fr_240px]"
                      : "sm:grid-cols-[240px_1fr]"
                }`}
              >
                <div
                  className={`flex justify-center ${hasImage ? "sm:self-stretch" : ""} ${reversed ? "sm:order-2" : "sm:order-1"}`}
                >
                  {hasImage ? (
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-brand-paper sm:aspect-auto sm:h-full sm:min-h-[300px]">
                      <Image
                        src={service.image as string}
                        alt={service.title}
                        fill
                        className={service.imageFit === "contain" ? "object-contain" : "object-cover"}
                        style={{ objectPosition: service.imagePosition ?? "center" }}
                        sizes="(min-width: 640px) 45vw, 100vw"
                      />
                      {service.imageFit !== "contain" && (
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/35 via-transparent to-transparent" />
                      )}
                    </div>
                  ) : (
                    <span className="flex h-24 w-24 flex-none items-center justify-center rounded-2xl bg-brand-yellow text-brand-ink sm:h-28 sm:w-28">
                      <service.icon className="h-12 w-12 sm:h-14 sm:w-14" strokeWidth={1.6} />
                    </span>
                  )}
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

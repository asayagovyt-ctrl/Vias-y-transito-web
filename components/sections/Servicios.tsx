"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Search, X } from "lucide-react";
import { services } from "@/constants/services";
import { useScrollReveal } from "@/lib/useScrollReveal";

function normalize(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

export function Servicios() {
  const listRef = useScrollReveal<HTMLDivElement>();
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pillRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [activeId, setActiveId] = useState(services[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const hasScrolledRef = useRef(false);

  const filteredServices = useMemo(() => {
    const normalizedQuery = normalize(query.trim());
    if (!normalizedQuery) return services;
    return services.filter((service) => {
      const haystack = normalize(
        [service.title, service.description, service.details, ...service.highlights].join(" ")
      );
      return haystack.includes(normalizedQuery);
    });
  }, [query]);

  useEffect(() => {
    function onScroll() {
      hasScrolledRef.current = true;
    }
    window.addEventListener("scroll", onScroll, { once: true, passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (filteredServices.length > 0 && !filteredServices.some((service) => service.id === activeId)) {
      setActiveId(filteredServices[0].id);
    }
  }, [filteredServices, activeId]);

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
  }, [filteredServices]);

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
      <h2 className="mx-auto mb-8 max-w-[1800px] font-heading text-3xl font-extrabold text-brand-ink">
        Todos nuestros servicios
      </h2>
      <div className="relative mx-auto grid w-full max-w-[1800px] gap-6 lg:grid-cols-[300px_1fr] lg:gap-16 lg:items-start">
        <div className="sticky top-28 z-10 -mx-6 border-b border-black/5 bg-brand-cream px-6 py-3 shadow-card sm:top-36 sm:-mx-10 sm:px-10 lg:hidden">
          <ServiceSearchInput value={query} onChange={setQuery} className="mb-3" />
          {filteredServices.length > 0 ? (
            <nav className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {filteredServices.map((service) => {
                const index = services.findIndex((s) => s.id === service.id);
                return (
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
                        : "border-black/10 bg-white text-brand-ink/75"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")} · {service.title}
                  </button>
                );
              })}
            </nav>
          ) : (
            <p className="py-1.5 text-xs text-brand-ink/50">No encontramos servicios con esas palabras.</p>
          )}
        </div>

        <aside className="hidden lg:sticky lg:top-36 lg:block">
          <p className="mb-4 inline-block w-fit rounded-full bg-brand-yellow px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-ink">
            Explora nuestros servicios
          </p>
          <ServiceSearchInput value={query} onChange={setQuery} className="mb-4" />
          {filteredServices.length > 0 ? (
            <nav className="flex flex-col gap-1 border-l border-black/10">
              {filteredServices.map((service) => {
                const index = services.findIndex((s) => s.id === service.id);
                const isActive = activeId === service.id;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => scrollToService(service.id)}
                    className={`group -ml-px flex items-baseline gap-3 border-l-2 py-3.5 pl-5 text-left transition-all duration-200 hover:translate-x-1.5 ${
                      isActive
                        ? "border-brand-yellow text-brand-ink"
                        : "border-transparent text-brand-ink/75 hover:border-brand-yellow hover:text-brand-yellow"
                    }`}
                  >
                    <span
                      className={`font-mono text-sm ${
                        isActive ? "text-brand-ink" : "text-brand-ink/75 group-hover:text-brand-yellow"
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
          ) : (
            <p className="border-l border-black/10 py-3.5 pl-5 text-sm text-brand-ink/50">
              No encontramos servicios con esas palabras.
            </p>
          )}
          <div className="mt-5 border-t border-black/10 pt-4 font-mono text-xs text-brand-ink/75">
            <span className="text-base font-semibold text-brand-ink">
              {String(query.trim() ? filteredServices.length : activeIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {services.length} {query.trim() ? "coincidencias" : "especialidades"}
          </div>
        </aside>

        <div ref={listRef} className="flex min-w-0 flex-col gap-6 lg:col-start-2">
          {filteredServices.length === 0 && (
            <div className="rounded-2xl border border-dashed border-brand-ink/15 bg-white p-10 text-center">
              <p className="text-base font-medium text-brand-ink/75">
                No encontramos servicios que coincidan con &ldquo;{query}&rdquo;.
              </p>
              <p className="mt-2 text-sm text-brand-ink/60">
                Prueba con otra palabra o{" "}
                <Link href="/contacto" className="font-semibold text-brand-ink underline underline-offset-2">
                  cuéntanos qué necesitas
                </Link>
                .
              </p>
            </div>
          )}
          {filteredServices.map((service) => {
            const index = services.findIndex((s) => s.id === service.id);
            const hasImage = Boolean(service.image);
            const reversed = hasImage ? false : index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                ref={(el) => {
                  cardRefs.current[service.id] = el;
                }}
                className={`grid scroll-mt-40 items-center gap-10 rounded-2xl border border-brand-ink/8 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:gap-16 sm:p-10 lg:scroll-mt-28 ${
                  hasImage
                    ? "sm:grid-cols-[minmax(0,380px)_1fr]"
                    : reversed
                      ? "sm:grid-cols-[1fr_240px]"
                      : "sm:grid-cols-[240px_1fr]"
                }`}
              >
                <div
                  className={`flex justify-center ${hasImage ? "sm:self-stretch" : ""} ${reversed ? "sm:order-2" : "sm:order-1"}`}
                >
                  {hasImage ? (
                    <div
                      className="relative w-full max-w-md overflow-hidden rounded-2xl bg-brand-paper sm:h-full sm:min-h-[420px] sm:w-auto sm:max-w-full"
                      style={{
                        aspectRatio:
                          service.imageWidth && service.imageHeight
                            ? `${service.imageWidth} / ${service.imageHeight}`
                            : "4 / 3",
                      }}
                    >
                      <Image
                        src={service.image as string}
                        alt={service.title}
                        fill
                        className={service.imageFit === "contain" ? "object-contain" : "object-cover"}
                        style={{ objectPosition: service.imagePosition ?? "center" }}
                        sizes="(min-width: 640px) 45vw, 100vw"
                        quality={90}
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
                  <span className="mb-3 block font-sans text-base font-bold uppercase tracking-wide text-brand-yellow-text sm:text-lg">
                    Servicio {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 text-balance font-heading text-2xl font-bold text-brand-ink sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mb-5 max-w-2xl text-base font-normal leading-relaxed text-brand-ink/75">
                    {service.details}
                  </p>
                  <ul className="mb-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm font-normal text-brand-ink/75 sm:text-base">
                        <Check className="mt-0.5 h-5 w-5 flex-none text-brand-yellow sm:h-6 sm:w-6" strokeWidth={2.5} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-slate-200 pt-6">
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

function ServiceSearchInput({
  value,
  onChange,
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-ink/40"
        strokeWidth={2}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar un servicio..."
        aria-label="Buscar un servicio"
        className="w-full rounded-full border border-brand-ink/15 bg-white py-2.5 pl-10 pr-9 text-sm text-brand-ink placeholder:text-brand-ink/40 outline-none transition-colors focus:border-brand-yellow"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Limpiar búsqueda"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-ink/40 transition-colors hover:text-brand-ink"
        >
          <X className="h-4 w-4" strokeWidth={2} />
        </button>
      )}
    </div>
  );
}

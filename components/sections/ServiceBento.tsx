"use client";

import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/types/service";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface ServiceBentoProps {
  services: Service[];
}

export function ServiceBento({ services }: ServiceBentoProps) {
  const gridRef = useScrollReveal<HTMLDivElement>();

  const photoServices = services.filter((service) => Boolean(service.image));
  const featured = photoServices[0];
  const tall = photoServices[1];
  const wide = photoServices.slice(2, 4);
  const spotlightIds = new Set([featured, tall, ...wide].filter(Boolean).map((s) => s!.id));
  const compact = services.filter((service) => !spotlightIds.has(service.id));

  return (
    <div
      ref={gridRef}
      className="flex flex-col gap-4 sm:grid sm:grid-cols-6 sm:auto-rows-[110px] sm:gap-4"
    >
      {featured && <PhotoTile service={featured} variant="featured" />}
      {tall && <PhotoTile service={tall} variant="tall" />}
      {wide.map((service) => (
        <PhotoTile key={service.id} service={service} variant="wide" />
      ))}
      {compact.map((service) => (
        <CompactTile key={service.id} service={service} />
      ))}
    </div>
  );
}

const VARIANT_CLASSES: Record<"featured" | "tall" | "wide", string> = {
  featured: "sm:col-span-4 sm:row-span-3",
  tall: "sm:col-span-2 sm:row-span-3",
  wide: "sm:col-span-3 sm:row-span-2",
};

const VARIANT_ASPECT: Record<"featured" | "tall" | "wide", string> = {
  featured: "aspect-[4/3]",
  tall: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

function PhotoTile({
  service,
  variant,
}: {
  service: Service;
  variant: "featured" | "tall" | "wide";
}) {
  return (
    <Link
      href={`/servicios#${service.id}`}
      className={`group relative block overflow-hidden rounded-2xl ${VARIANT_ASPECT[variant]} sm:aspect-auto ${VARIANT_CLASSES[variant]}`}
    >
      <Image
        src={service.image as string}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(min-width: 640px) 55vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {variant === "featured" && (
          <span className="mb-2 w-fit rounded-full bg-brand-yellow px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-ink">
            Servicio destacado
          </span>
        )}
        <h3
          className={`font-heading font-bold text-white ${
            variant === "featured" ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          {service.title}
        </h3>
        {variant !== "tall" && (
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-200">
            {service.description}
          </p>
        )}
        {variant === "featured" && (
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
            {service.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="text-xs font-medium text-slate-200">
                • {highlight}
              </li>
            ))}
          </ul>
        )}
        <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-brand-yellow">
          Ver más
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

function CompactTile({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicios#${service.id}`}
      className="group rounded-2xl border-2 border-transparent bg-white p-6 shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1 hover:border-brand-yellow hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)] sm:col-span-3 sm:row-span-1 sm:flex sm:items-center sm:gap-4"
    >
      <span className="mb-3 flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand-yellow text-brand-ink sm:mb-0">
        <service.icon className="h-5 w-5" strokeWidth={2.25} />
      </span>
      <div>
        <h3 className="mb-1 font-heading text-base font-bold text-brand-ink">{service.title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
      </div>
    </Link>
  );
}

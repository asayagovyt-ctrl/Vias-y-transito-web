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
  const mediumServices = [
    ...photoServices.slice(2),
    ...services.filter((service) => !service.image),
  ];

  return (
    <div
      ref={gridRef}
      className="flex flex-col gap-4 sm:grid sm:grid-cols-6 sm:auto-rows-[110px] sm:gap-4"
    >
      {featured && <Tile service={featured} variant="featured" />}
      {tall && <Tile service={tall} variant="tall" />}
      {mediumServices.map((service) => (
        <Tile key={service.id} service={service} variant="medium" />
      ))}
    </div>
  );
}

type Variant = "featured" | "tall" | "medium";

const VARIANT_CLASSES: Record<Variant, string> = {
  featured: "aspect-[4/3] sm:aspect-auto sm:col-span-4 sm:row-span-3",
  tall: "aspect-[4/3] sm:aspect-auto sm:col-span-2 sm:row-span-3",
  medium: "aspect-[4/3] sm:aspect-auto sm:col-span-2 sm:row-span-2",
};

function Tile({ service, variant }: { service: Service; variant: Variant }) {
  const isFeatured = variant === "featured";

  if (!service.image) {
    return (
      <Link
        href={`/servicios#${service.id}`}
        className={`group flex flex-col justify-center rounded-2xl border-2 border-transparent bg-brand-ink p-5 shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1 hover:border-brand-yellow hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)] ${VARIANT_CLASSES[variant]}`}
      >
        <span className="mb-2 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-yellow text-brand-ink">
          <service.icon className="h-4 w-4" strokeWidth={2.25} />
        </span>
        <h3 className="mb-1 font-heading text-lg font-extrabold text-brand-yellow">{service.title}</h3>
        <p className="text-xs leading-relaxed text-slate-300">{service.description}</p>
        <span className="mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-brand-yellow">
          Ver más
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/servicios#${service.id}`}
      className={`group relative block overflow-hidden rounded-2xl shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)] ${VARIANT_CLASSES[variant]}`}
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes={isFeatured ? "(min-width: 640px) 55vw, 100vw" : "(min-width: 640px) 30vw, 100vw"}
      />

      {isFeatured && (
        <span className="absolute left-4 top-4 w-fit rounded-full bg-brand-yellow px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-ink">
          Servicio destacado
        </span>
      )}

      <span
        className={`absolute flex items-center justify-center rounded-full bg-white/85 text-brand-ink backdrop-blur-sm transition-colors group-hover:bg-brand-yellow ${
          isFeatured ? "right-4 top-4 h-10 w-10 text-base" : "right-3 top-3 h-8 w-8 text-sm"
        }`}
        aria-hidden="true"
      >
        →
      </span>

      <div
        className={`absolute rounded-xl bg-white/92 backdrop-blur-sm ${
          isFeatured
            ? "bottom-4 left-4 max-w-[65%] p-4"
            : "bottom-3 left-3 right-3 p-3"
        }`}
      >
        <h3
          className={`font-heading font-bold text-brand-ink ${
            isFeatured ? "text-lg sm:text-xl" : "text-sm sm:text-base"
          }`}
        >
          {service.title}
        </h3>
        <p className={`text-slate-600 ${isFeatured ? "mt-1 text-sm" : "mt-0.5 text-xs"}`}>
          {service.description}
        </p>
      </div>
    </Link>
  );
}

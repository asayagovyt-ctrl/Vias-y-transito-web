"use client";

import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import type { Service } from "@/types/service";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface ServiceBentoProps {
  services: Service[];
}

export function ServiceBento({ services }: ServiceBentoProps) {
  const gridRef = useScrollReveal<HTMLDivElement>();

  const [featured, tall, wide1, wide2, small1, small2, small3, small4] = services;

  return (
    <div
      ref={gridRef}
      className="flex flex-col gap-4 sm:grid sm:grid-cols-6 sm:auto-rows-[110px] sm:gap-4"
    >
      {featured && <Tile service={featured} variant="featured" />}
      {tall && <Tile service={tall} variant="tall" />}
      {[wide1, wide2].filter(Boolean).map((service) => (
        <Tile key={service!.id} service={service!} variant="wide" />
      ))}
      {[small1, small2, small3, small4].filter(Boolean).map((service) => (
        <Tile key={service!.id} service={service!} variant="small" />
      ))}
    </div>
  );
}

type Variant = "featured" | "tall" | "wide" | "small";

const VARIANT_CLASSES: Record<Variant, string> = {
  featured: "sm:col-span-4 sm:row-span-4",
  tall: "sm:col-span-2 sm:row-span-4",
  wide: "sm:col-span-3 sm:row-span-3",
  small: "sm:col-span-2 sm:row-span-2",
};

const BULLET_COUNT: Record<Variant, number> = {
  featured: 3,
  tall: 0,
  wide: 0,
  small: 0,
};

function Tile({ service, variant }: { service: Service; variant: Variant }) {
  const bulletCount = BULLET_COUNT[variant];
  const isFeatured = variant === "featured";
  const isSmall = variant === "small";

  return (
    <Link
      href={`/servicios#${service.id}`}
      className={`group flex aspect-[4/3] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)] sm:aspect-auto ${VARIANT_CLASSES[variant]}`}
    >
      {service.image ? (
        <div className="relative min-h-0 flex-1 bg-brand-paper">
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
        </div>
      ) : (
        <span className="m-5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-yellow text-brand-ink">
          <service.icon className="h-4 w-4" strokeWidth={2.25} />
        </span>
      )}

      <div className={`flex-none ${isSmall ? "p-4" : "p-5"}`}>
        <h3
          className={`font-heading font-bold text-brand-yellow ${
            isFeatured ? "text-xl sm:text-2xl" : isSmall ? "text-base" : "text-lg"
          }`}
        >
          {service.title}
        </h3>
        <p
          className={`text-slate-600 ${
            isFeatured ? "mt-1.5 text-base" : "mt-1 text-sm"
          }`}
        >
          {service.description}
        </p>
        {bulletCount > 0 && (
          <ul className="mt-3 flex flex-col gap-1.5">
            {service.highlights.slice(0, bulletCount).map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-sm text-slate-600">
                <Check className="mt-0.5 h-4 w-4 flex-none text-brand-yellow" strokeWidth={2.5} />
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-ink transition-colors group-hover:text-brand-yellow">
          Ver más
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

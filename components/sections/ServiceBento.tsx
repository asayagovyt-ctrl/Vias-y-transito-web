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
  featured: "sm:col-span-4 sm:row-span-3",
  tall: "sm:col-span-2 sm:row-span-3",
  medium: "sm:col-span-2 sm:row-span-2",
};

const BULLET_COUNT: Record<Variant, number> = {
  featured: 4,
  tall: 3,
  medium: 0,
};

function Tile({ service, variant }: { service: Service; variant: Variant }) {
  const isSideBySide = variant === "featured" || variant === "tall";
  const bulletCount = BULLET_COUNT[variant];

  return (
    <Link
      href={`/servicios#${service.id}`}
      className={`group flex overflow-hidden rounded-2xl bg-brand-ink shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)] ${
        isSideBySide ? "flex-row" : "aspect-[4/3] flex-col sm:aspect-auto"
      } ${VARIANT_CLASSES[variant]}`}
    >
      {service.image ? (
        <div
          className={`relative flex-none bg-brand-paper ${
            isSideBySide ? "w-[42%]" : "h-[45%] w-full"
          }`}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={variant === "featured" ? "(min-width: 640px) 30vw, 100vw" : "(min-width: 640px) 20vw, 100vw"}
          />
        </div>
      ) : (
        <span className="m-5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-yellow text-brand-ink">
          <service.icon className="h-4 w-4" strokeWidth={2.25} />
        </span>
      )}

      <div className="flex min-w-0 flex-1 flex-col justify-center p-5">
        {variant === "featured" && (
          <span className="mb-2 w-fit rounded-full bg-brand-yellow px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-ink">
            Servicio destacado
          </span>
        )}
        <h3
          className={`font-heading font-extrabold text-brand-yellow ${
            variant === "featured" ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
          }`}
        >
          {service.title}
        </h3>
        <p className={`text-slate-300 ${variant === "featured" ? "mt-1.5 text-sm" : "mt-1 text-xs"}`}>
          {service.description}
        </p>
        {bulletCount > 0 && (
          <ul className="mt-3 flex flex-col gap-1.5">
            {service.highlights.slice(0, bulletCount).map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-xs font-medium text-slate-300">
                <span className="mt-1 h-1 w-1 flex-none rounded-full bg-brand-yellow" />
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <span className="mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-brand-yellow">
          Ver más
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

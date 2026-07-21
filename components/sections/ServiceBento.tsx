"use client";

import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/types/service";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface ServiceBentoProps {
  services: Service[];
}

const PANEL = "bg-[#212B38]";

export function ServiceBento({ services }: ServiceBentoProps) {
  const gridRef = useScrollReveal<HTMLDivElement>();

  const photoServices = services.filter((service) => Boolean(service.image));
  const [featured, tall, wide1, wide2] = photoServices;
  const wideServices = [wide1, wide2].filter(Boolean) as Service[];
  const bigIds = new Set([featured, tall, ...wideServices].filter(Boolean).map((s) => s!.id));
  const smallServices = services.filter((service) => !bigIds.has(service.id));

  return (
    <div
      ref={gridRef}
      className="flex flex-col gap-4 sm:grid sm:grid-cols-6 sm:auto-rows-[110px] sm:gap-4"
    >
      {featured && <PhotoTile service={featured} variant="featured" />}
      {tall && <PhotoTile service={tall} variant="tall" />}
      {wideServices.map((service) => (
        <PhotoTile key={service.id} service={service} variant="wide" />
      ))}
      {smallServices.map((service) => (
        <SmallTile key={service.id} service={service} />
      ))}
    </div>
  );
}

type PhotoVariant = "featured" | "tall" | "wide";

const VARIANT_CLASSES: Record<PhotoVariant, string> = {
  featured: "sm:col-span-4 sm:row-span-4",
  tall: "sm:col-span-2 sm:row-span-4",
  wide: "sm:col-span-3 sm:row-span-3",
};

const BULLET_COUNT: Record<PhotoVariant, number> = {
  featured: 3,
  tall: 0,
  wide: 0,
};

function PhotoTile({ service, variant }: { service: Service; variant: PhotoVariant }) {
  const bulletCount = BULLET_COUNT[variant];

  return (
    <Link
      href={`/servicios#${service.id}`}
      className={`group flex aspect-[4/3] flex-col overflow-hidden rounded-2xl ${PANEL} shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)] sm:aspect-auto ${VARIANT_CLASSES[variant]}`}
    >
      <div className="relative min-h-0 flex-1 bg-brand-paper">
        <Image
          src={service.image as string}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={variant === "featured" ? "(min-width: 640px) 55vw, 100vw" : "(min-width: 640px) 30vw, 100vw"}
        />
      </div>

      <div className="flex-none p-5">
        {variant === "featured" && (
          <span className="mb-2 w-fit rounded-full bg-brand-yellow px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-ink">
            Servicio destacado
          </span>
        )}
        <h3
          className={`font-heading font-extrabold text-brand-yellow ${
            variant === "featured" ? "text-xl sm:text-2xl" : "text-lg"
          }`}
        >
          {service.title}
        </h3>
        <p className={`text-slate-200 ${variant === "featured" ? "mt-1.5 text-base" : "mt-1 text-sm"}`}>
          {service.description}
        </p>
        {bulletCount > 0 && (
          <ul className="mt-3 flex flex-col gap-1.5">
            {service.highlights.slice(0, bulletCount).map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-sm font-medium text-slate-200">
                <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-brand-yellow" />
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

function SmallTile({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicios#${service.id}`}
      className={`group flex flex-col justify-center rounded-2xl border-2 border-transparent ${PANEL} p-5 shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1 hover:border-brand-yellow hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)] sm:col-span-2 sm:row-span-2`}
    >
      <span className="mb-2 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-yellow text-brand-ink">
        <service.icon className="h-4 w-4" strokeWidth={2.25} />
      </span>
      <h3 className="mb-1 font-heading text-lg font-extrabold text-brand-yellow">{service.title}</h3>
      <p className="text-sm leading-relaxed text-slate-200">{service.description}</p>
      <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-brand-yellow">
        Ver más
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}

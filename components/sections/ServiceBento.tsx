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
  const mediumServices = [...photoServices.slice(2), ...services.filter((service) => !service.image)];

  return (
    <div
      ref={gridRef}
      className="flex flex-col gap-4 sm:grid sm:grid-cols-6 sm:auto-rows-[110px] sm:gap-4"
    >
      {featured && <HeroTile service={featured} variant="featured" />}
      {tall && <HeroTile service={tall} variant="tall" />}
      {mediumServices.map((service) => (
        <MediumTile key={service.id} service={service} />
      ))}
    </div>
  );
}

const VARIANT_CLASSES: Record<"featured" | "tall", string> = {
  featured: "sm:col-span-4 sm:row-span-3",
  tall: "sm:col-span-2 sm:row-span-3",
};

const VARIANT_ASPECT: Record<"featured" | "tall", string> = {
  featured: "aspect-[4/3]",
  tall: "aspect-[3/4]",
};

function HeroTile({ service, variant }: { service: Service; variant: "featured" | "tall" }) {
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
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink from-25% via-brand-ink/60 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {variant === "featured" && (
          <span className="mb-2 w-fit rounded-full bg-brand-yellow px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-ink">
            Servicio destacado
          </span>
        )}
        <h3
          className={`font-heading font-extrabold text-brand-yellow ${
            variant === "featured" ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {service.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-200">
          {service.description}
        </p>
        <ul className="mt-4 flex flex-col gap-1.5">
          {service.highlights.slice(0, 4).map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-xs font-medium text-slate-200">
              <span className="mt-1 h-1 w-1 flex-none rounded-full bg-brand-yellow" />
              {highlight}
            </li>
          ))}
        </ul>
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

function MediumTile({ service }: { service: Service }) {
  if (service.image) {
    return (
      <Link
        href={`/servicios#${service.id}`}
        className="group relative block aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-auto sm:col-span-2 sm:row-span-2"
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 640px) 30vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink from-25% via-brand-ink/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <h3 className="font-heading text-lg font-extrabold text-brand-yellow">{service.title}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-200">{service.description}</p>
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

  return (
    <Link
      href={`/servicios#${service.id}`}
      className="group flex flex-col rounded-2xl border-2 border-transparent bg-brand-ink p-5 shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1 hover:border-brand-yellow hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)] sm:col-span-2 sm:row-span-2"
    >
      <span className="mb-2 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-yellow text-brand-ink">
        <service.icon className="h-4 w-4" strokeWidth={2.25} />
      </span>
      <h3 className="mb-1 font-heading text-lg font-extrabold text-brand-yellow">{service.title}</h3>
      <p className="text-xs leading-relaxed text-slate-300">{service.description}</p>
      <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-3 text-sm font-semibold text-white transition-colors group-hover:text-brand-yellow">
        Ver más
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}

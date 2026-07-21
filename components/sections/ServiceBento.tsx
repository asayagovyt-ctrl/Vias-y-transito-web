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

  const featured = services[0];
  const tall = services[1];
  const mediumServices = services.slice(2);

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

function HeroTile({ service, variant }: { service: Service; variant: "featured" | "tall" }) {
  return (
    <Link
      href={`/servicios#${service.id}`}
      className={`group flex flex-col overflow-hidden rounded-2xl bg-brand-ink shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)] ${VARIANT_CLASSES[variant]}`}
    >
      <div className="relative min-h-0 flex-1 bg-brand-paper">
        <Image
          src={service.homeImage}
          alt={service.title}
          fill
          className="object-contain p-10 transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 640px) 55vw, 100vw"
        />
        {variant === "featured" && (
          <span className="absolute left-4 top-4 w-fit rounded-full bg-brand-yellow px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-ink">
            Servicio destacado
          </span>
        )}
      </div>
      <div className="flex-none p-5">
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
  return (
    <Link
      href={`/servicios#${service.id}`}
      className="group flex aspect-[4/3] flex-col overflow-hidden rounded-2xl bg-brand-ink shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)] sm:aspect-auto sm:col-span-2 sm:row-span-2"
    >
      <div className="relative min-h-0 flex-1 bg-brand-paper">
        <Image
          src={service.homeImage}
          alt={service.title}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 640px) 30vw, 100vw"
        />
      </div>
      <div className="flex-none p-4">
        <h3 className="font-heading text-lg font-extrabold text-brand-yellow">{service.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-slate-200">{service.description}</p>
        <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-brand-yellow">
          Ver más
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

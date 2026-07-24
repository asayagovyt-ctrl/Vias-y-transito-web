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

  return (
    <div ref={gridRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Tile key={service.id} service={service} />
      ))}
    </div>
  );
}

function Tile({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicios#${service.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-12px_rgba(23,27,31,0.38)]"
    >
      {service.image ? (
        <div className="relative h-48 w-full bg-brand-paper">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
        </div>
      ) : (
        <div className="flex h-48 w-full items-center justify-center bg-brand-paper">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-yellow text-brand-ink">
            <service.icon className="h-7 w-7" strokeWidth={1.8} />
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-bold text-brand-yellow">{service.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{service.description}</p>
        <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-ink transition-colors group-hover:text-brand-yellow">
          Qué incluye
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

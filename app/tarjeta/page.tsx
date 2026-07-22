import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { company } from "@/constants/company";

export const metadata: Metadata = {
  title: "Contacto | Vías y Tránsito SAS",
  description: "Información de contacto de Vías y Tránsito SAS.",
};

export default function TarjetaPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-cream px-6 py-12">
      <div className="w-full max-w-sm rounded-2xl border border-black/10 bg-white p-8 text-center shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] sm:p-10">
        <Image
          src="/images/logo-mark.png"
          alt={company.legalName}
          width={1195}
          height={482}
          className="mx-auto h-20 w-auto sm:h-24"
        />
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-brand-grey">
          {company.tagline}
        </p>

        <div className="mt-8 flex flex-col gap-4 text-left">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              company.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3"
          >
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-yellow">
              <MapPin className="h-4 w-4 text-brand-ink" strokeWidth={2} />
            </span>
            <span className="pt-1.5 text-sm font-medium text-brand-ink group-hover:text-brand-yellow">
              {company.address}
            </span>
          </a>

          {company.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:+57${phone}`}
              className="group flex items-center gap-3"
            >
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-yellow">
                <Phone className="h-4 w-4 text-brand-ink" strokeWidth={2} />
              </span>
              <span className="font-mono text-base font-semibold text-brand-ink group-hover:text-brand-yellow">
                {phone}
              </span>
            </a>
          ))}

          {company.emails.map((email) => (
            <a key={email} href={`mailto:${email}`} className="group flex items-center gap-3">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-yellow">
                <Mail className="h-4 w-4 text-brand-ink" strokeWidth={2} />
              </span>
              <span className="break-all text-sm font-medium text-brand-ink group-hover:text-brand-yellow">
                {email}
              </span>
            </a>
          ))}
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-brand-ink px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-yellow hover:text-brand-ink"
        >
          Visitar sitio web
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { company } from "@/constants/company";

export const metadata: Metadata = {
  title: "Página no encontrada | Vías y Tránsito SAS",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-cream px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border border-brand-ink/8 bg-white p-8 text-center shadow-card sm:p-10">
        <Link href="/">
          <Image
            src="/images/LOGO VIAS Y TRANSITO/logo-mark.png"
            alt={company.legalName}
            width={1195}
            height={482}
            className="mx-auto h-16 w-auto sm:h-20"
          />
        </Link>

        <p className="mt-8 font-mono text-6xl font-semibold text-brand-yellow sm:text-7xl">
          404
        </p>
        <h1 className="mt-4 text-balance font-heading text-2xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-3xl">
          Esta página no existe
        </h1>
        <p className="mt-3 text-base font-normal leading-relaxed text-brand-ink/75">
          Puede que la dirección esté mal escrita o que la página se haya
          movido. Vuelve al inicio o escríbenos y te ayudamos.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-ink px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-yellow hover:text-brand-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-ink/15 px-6 py-3 text-sm font-bold text-brand-ink transition-colors hover:border-brand-yellow hover:bg-brand-yellow"
          >
            <Phone className="h-4 w-4" />
            Contáctanos
          </Link>
        </div>
      </div>
    </main>
  );
}

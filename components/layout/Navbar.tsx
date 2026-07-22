"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/nav";
import { company } from "@/constants/company";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-3 top-3 z-30 sm:inset-x-6 sm:top-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-black/5 bg-brand-cream/95 py-2.5 pl-4 pr-2.5 shadow-[0_20px_45px_-15px_rgba(23,27,31,0.35)] backdrop-blur-md sm:py-3 sm:pl-6 sm:pr-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-mark.png"
            alt={company.legalName}
            width={1195}
            height={482}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full bg-brand-ink/[0.04] p-1.5 text-sm font-semibold md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 transition-colors ${
                  active
                    ? "bg-brand-yellow text-brand-ink"
                    : "text-brand-ink/60 hover:bg-white hover:text-brand-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contacto"
          className="rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold text-brand-ink transition-all hover:-translate-y-0.5 hover:bg-[#E0A800] hover:shadow-[0_10px_25px_-8px_rgba(255,193,7,0.6)] sm:px-6"
        >
          Cotizar
        </Link>
      </div>
    </div>
  );
}

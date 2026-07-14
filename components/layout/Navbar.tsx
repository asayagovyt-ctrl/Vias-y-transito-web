"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/nav";
import { company } from "@/constants/company";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 sm:px-10">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo-mark.png"
          alt={company.legalName}
          width={1195}
          height={482}
          priority
          className="h-16 w-auto sm:h-20"
        />
      </Link>

      <nav className="hidden items-center gap-9 rounded-full bg-black/30 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm md:flex">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-brand-yellow ${
                active ? "border-b-2 border-brand-yellow pb-1" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/contacto"
        className="rounded-full bg-brand-yellow px-6 py-3 text-base font-bold text-brand-ink transition-colors hover:bg-[#E0A800]"
      >
        Cotizar
      </Link>
    </div>
  );
}

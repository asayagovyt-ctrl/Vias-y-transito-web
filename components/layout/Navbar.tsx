"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/nav";
import { company } from "@/constants/company";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 140);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-mark.png"
            alt={company.legalName}
            width={1195}
            height={482}
            priority
            className="h-20 w-auto sm:h-28"
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

      <div
        aria-hidden={!scrolled}
        className={`fixed inset-x-0 top-0 z-30 flex items-center justify-between border-b border-black/5 bg-white/95 px-6 py-3.5 shadow-[0_10px_30px_-15px_rgba(23,27,31,0.35)] backdrop-blur-sm transition-all duration-300 ease-out sm:px-10 ${
          scrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-mark.png"
            alt={company.legalName}
            width={1195}
            height={482}
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-9 text-base font-semibold text-brand-ink md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-[#B98600] ${
                  active ? "border-b-2 border-brand-yellow pb-1" : "text-brand-ink/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contacto"
          className="rounded-full bg-brand-yellow px-6 py-2.5 text-sm font-bold text-brand-ink transition-colors hover:bg-[#E0A800]"
        >
          Cotizar
        </Link>
      </div>
    </>
  );
}

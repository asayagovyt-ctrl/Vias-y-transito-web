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
    const onScroll = () => setScrolled(window.scrollY > 24);

    // On client-side route changes the browser hasn't necessarily
    // finished restoring/resetting the scroll position for the new
    // page yet when this effect runs, so reading window.scrollY here
    // can catch a stale value. Wait a frame for it to settle first.
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/" className="flex flex-col items-start">
          <Image
            src="/images/logo-mark.png"
            alt={company.legalName}
            width={1195}
            height={482}
            priority
            className="h-20 w-auto sm:h-28"
          />
          <span className="mt-1 text-[10px] font-medium uppercase tracking-wide text-white/90 sm:text-xs">
            {company.tagline}
          </span>
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
        className={`fixed inset-x-3 top-3 z-30 transition-all duration-300 ease-out sm:inset-x-6 sm:top-4 ${
          scrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-black/5 bg-brand-cream/95 py-2.5 pl-4 pr-2.5 shadow-[0_20px_45px_-15px_rgba(23,27,31,0.35)] backdrop-blur-md sm:py-3 sm:pl-6 sm:pr-3">
          <Link href="/" className="flex flex-col items-start">
            <Image
              src="/images/logo-mark.png"
              alt={company.legalName}
              width={1195}
              height={482}
              className="h-14 w-auto sm:h-16"
            />
            <span className="mt-0.5 text-[9px] font-medium uppercase tracking-wide text-brand-grey">
              {company.tagline}
            </span>
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
    </>
  );
}

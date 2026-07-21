import Image from "next/image";
import { navLinks } from "@/constants/nav";
import { company } from "@/constants/company";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200 px-6 py-12 sm:px-10">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Image
            src="/images/logo-mark.png"
            alt={company.legalName}
            width={1195}
            height={482}
            className="h-20 w-auto sm:h-28"
          />
          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-brand-grey">
            {company.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-brand-ink">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="opacity-75 hover:opacity-100">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="relative mx-auto mt-10 max-w-6xl border-t border-slate-200 pt-6 text-xs text-brand-grey">
        © {new Date().getFullYear()} {company.legalName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}

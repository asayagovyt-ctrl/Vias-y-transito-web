import Image from "next/image";
import Link from "next/link";
import { company } from "@/constants/company";
import { navLinks } from "@/constants/nav";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200 px-6 py-12 sm:px-10">
      <div className="relative mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
        <div className="flex flex-col items-start">
          <Image
            src="/images/LOGO VIAS Y TRANSITO/logo-mark.png"
            alt={company.legalName}
            width={1195}
            height={482}
            className="h-20 w-auto sm:h-24"
          />
          <p className="mt-3 text-xs font-medium text-brand-ink/75">
            {company.tagline}
          </p>
          <Link
            href="/contacto"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-brand-ink px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-yellow hover:text-brand-ink"
          >
            Cotiza tu proyecto →
          </Link>
        </div>

        <nav aria-label="Navegación del pie de página">
          <p className="mb-3 text-xs font-semibold text-brand-ink/75">
            Navegación
          </p>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-brand-ink hover:text-brand-yellow-text"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/politica-de-datos"
                className="text-sm font-medium text-brand-ink hover:text-brand-yellow-text"
              >
                Política de Tratamiento de Datos
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-xs font-semibold text-brand-ink/75">
            Contacto
          </p>
          <ul className="flex flex-col gap-2.5 text-sm">
            {company.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:+57${phone}`} className="font-medium text-brand-ink hover:text-brand-yellow-text">
                  +57 {phone}
                </a>
              </li>
            ))}
            {company.emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`} className="font-medium text-brand-ink hover:text-brand-yellow-text">
                  {email}
                </a>
              </li>
            ))}
            <li className="pt-1 text-brand-ink/75">{company.address}</li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-6xl border-t border-slate-200 pt-6 text-xs text-brand-ink/75">
        © {new Date().getFullYear()} {company.legalName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}

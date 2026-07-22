import Image from "next/image";
import { company } from "@/constants/company";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200 px-6 py-12 sm:px-10">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        <Image
          src="/images/logo-mark.png"
          alt={company.legalName}
          width={1195}
          height={482}
          className="h-32 w-auto sm:h-44"
        />
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-brand-grey">
          {company.tagline}
        </p>
      </div>

      <div className="relative mx-auto mt-10 max-w-6xl border-t border-slate-200 pt-6 text-xs text-brand-grey">
        © {new Date().getFullYear()} {company.legalName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/constants/company";

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos | Vías y Tránsito SAS",
  description:
    "Política de tratamiento de datos personales de Vías y Tránsito SAS, conforme a la Ley 1581 de 2012.",
  alternates: { canonical: "/politica-de-datos" },
};

export default function PoliticaDeDatosPage() {
  return (
    <main className="relative">
      <Navbar />
      <div className="relative overflow-hidden bg-brand-cream pt-32 sm:pt-40">
        <section className="relative px-6 py-10 sm:px-10 sm:py-16">
          <div className="relative mx-auto max-w-3xl">
            <p className="mb-4 inline-block w-fit rounded-full bg-brand-yellow px-5 py-2 font-sans text-sm font-bold uppercase tracking-wide text-brand-ink">
              Datos personales
            </p>
            <h1 className="mb-8 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
              Política de Tratamiento de Datos Personales
            </h1>

            <div className="flex flex-col gap-8 rounded-2xl border border-black/10 bg-white p-7 shadow-[0_20px_45px_-10px_rgba(23,27,31,0.28)] sm:p-10">
              <div>
                <h2 className="mb-2 font-heading text-lg font-bold text-brand-ink">
                  Responsable del tratamiento
                </h2>
                <p className="text-base leading-relaxed text-slate-600">
                  {company.legalName}, con domicilio en {company.address}. Correo de contacto:{" "}
                  {company.emails[0]}.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-heading text-lg font-bold text-brand-ink">Finalidades</h2>
                <p className="mb-2 text-base leading-relaxed text-slate-600">
                  Los datos personales recolectados a través del formulario de contacto de este
                  sitio (nombre, correo electrónico y teléfono) se utilizan para:
                </p>
                <ul className="list-disc pl-5 text-base leading-relaxed text-slate-600">
                  <li>Responder solicitudes de información y cotización.</li>
                  <li>Dar seguimiento comercial a los proyectos consultados.</li>
                  <li>[POR VALIDAR CON JURÍDICA] Otras finalidades específicas del tratamiento.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 font-heading text-lg font-bold text-brand-ink">
                  Derechos del titular
                </h2>
                <p className="mb-2 text-base leading-relaxed text-slate-600">
                  Conforme a la Ley 1581 de 2012 y sus decretos reglamentarios, el titular de los
                  datos personales tiene derecho a:
                </p>
                <ul className="list-disc pl-5 text-base leading-relaxed text-slate-600">
                  <li>Conocer, actualizar y rectificar sus datos personales.</li>
                  <li>Solicitar prueba de la autorización otorgada para el tratamiento.</li>
                  <li>
                    Ser informado sobre el uso que se le ha dado a sus datos personales, previa
                    solicitud.
                  </li>
                  <li>
                    Solicitar la supresión de sus datos y/o revocar la autorización, cuando no exista
                    un deber legal o contractual que impida su eliminación.
                  </li>
                  <li>Acceder de forma gratuita a sus datos personales.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 font-heading text-lg font-bold text-brand-ink">
                  Cómo ejercer estos derechos
                </h2>
                <p className="text-base leading-relaxed text-slate-600">
                  El titular puede ejercer sus derechos escribiendo a {company.emails[0]} o a{" "}
                  {company.emails[1]}, indicando su nombre completo y la solicitud puntual.
                  [POR VALIDAR CON JURÍDICA] Plazo y procedimiento exacto de respuesta.
                </p>
              </div>

              <div>
                <h2 className="mb-2 font-heading text-lg font-bold text-brand-ink">
                  [POR VALIDAR CON JURÍDICA] Tratamiento y seguridad de la información
                </h2>
                <p className="text-base leading-relaxed text-slate-600">
                  [POR VALIDAR CON JURÍDICA] Descripción de las medidas de seguridad, tiempo de
                  conservación de los datos y si existe transferencia o transmisión a terceros.
                </p>
              </div>

              <div className="border-t border-slate-200 pt-6 text-sm text-brand-ink/75">
                Última actualización: [POR VALIDAR CON JURÍDICA — fecha de entrada en vigencia].
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}

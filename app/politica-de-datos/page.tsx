import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { company, siteUrl } from "@/constants/company";

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos | Vías y Tránsito SAS",
  description:
    "Política de tratamiento de datos personales de Vías y Tránsito SAS, conforme a la Ley 1581 de 2012.",
  alternates: { canonical: "/politica-de-datos" },
};

// Fecha de entrada en vigencia de esta política. Al publicar una versión nueva
// se actualiza aquí y se menciona el cambio en la sección "Cambios".
const vigenciaDesde = "26 de agosto de 2026";

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
            <h1 className="mb-3 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
              Política de Tratamiento de Datos Personales
            </h1>
            <p className="mb-8 text-base font-normal leading-relaxed text-brand-ink/75">
              En vigencia desde el {vigenciaDesde}.
            </p>

            <div className="flex flex-col gap-8 rounded-2xl border border-brand-ink/8 bg-white p-7 shadow-card sm:p-10">
              <Seccion titulo="1. Alcance">
                <P>
                  Esta política explica cómo {company.legalName} recolecta, usa, almacena y protege
                  los datos personales de quienes nos contactan a través de este sitio web, y aplica
                  a la información que recibimos por el formulario de contacto, por correo
                  electrónico, por teléfono o por WhatsApp. Se adopta en cumplimiento de la Ley 1581
                  de 2012, el Decreto 1074 de 2015 y demás normas colombianas sobre protección de
                  datos personales.
                </P>
              </Seccion>

              <Seccion titulo="2. Responsable del tratamiento">
                <P>
                  {company.legalName}
                  {company.nit ? `, NIT ${company.nit},` : ","} con domicilio en {company.address}.
                </P>
                <Lista>
                  <li>
                    Correo electrónico: {company.emails[0]} y {company.emails[1]}
                  </li>
                  <li>Teléfonos: {company.phones.map((phone) => `+57 ${phone}`).join(" y ")}</li>
                  <li>Sitio web: {siteUrl.replace("https://", "")}</li>
                </Lista>
              </Seccion>

              <Seccion titulo="3. Datos que recolectamos">
                <P>
                  Solo pedimos la información necesaria para poder responderte. A través del
                  formulario de contacto recolectamos:
                </P>
                <Lista>
                  <li>Nombre.</li>
                  <li>Correo electrónico.</li>
                  <li>Teléfono (opcional).</li>
                  <li>Servicios sobre los que quieres información.</li>
                  <li>El mensaje que nos escribes.</li>
                </Lista>
                <P>
                  Adicionalmente, cuando navegas por el sitio se generan datos técnicos y
                  estadísticos de uso (páginas visitadas, tipo de dispositivo, ciudad aproximada),
                  tal como se explica en la sección 9. No recolectamos datos sensibles —como datos de
                  salud, biométricos, religiosos o políticos— ni datos de niñas, niños y
                  adolescentes. Si por error nos envías información de este tipo dentro de un
                  mensaje, la eliminaremos.
                </P>
              </Seccion>

              <Seccion titulo="4. Finalidades del tratamiento">
                <P>Usamos tus datos personales únicamente para:</P>
                <Lista>
                  <li>Responder solicitudes de información, asesoría y cotización.</li>
                  <li>Elaborar y enviar propuestas técnicas y económicas.</li>
                  <li>Dar seguimiento comercial a los proyectos consultados.</li>
                  <li>
                    Ejecutar, administrar y hacer seguimiento a los contratos o servicios que
                    lleguen a acordarse.
                  </li>
                  <li>
                    Enviar información sobre nuestros servicios cuando el titular lo haya
                    autorizado, con la opción de dejar de recibirla en cualquier momento.
                  </li>
                  <li>
                    Cumplir obligaciones legales, contables y tributarias, y atender requerimientos
                    de autoridades competentes.
                  </li>
                </Lista>
                <P>
                  No vendemos, arrendamos ni cedemos datos personales a terceros con fines
                  publicitarios.
                </P>
              </Seccion>

              <Seccion titulo="5. Autorización del titular">
                <P>
                  Antes de enviar el formulario, el titular debe marcar la casilla en la que autoriza
                  de forma previa, expresa e informada el tratamiento de sus datos conforme a esta
                  política. Esa autorización, junto con la fecha y los datos enviados, queda
                  registrada como prueba del consentimiento. También entendemos otorgada la
                  autorización cuando el titular nos contacta directamente por correo, teléfono o
                  WhatsApp para solicitar información sobre nuestros servicios.
                </P>
                <P>
                  La autorización puede revocarse en cualquier momento por los canales indicados en
                  la sección 7, salvo que exista un deber legal o contractual que nos obligue a
                  conservar la información.
                </P>
              </Seccion>

              <Seccion titulo="6. Derechos del titular">
                <P>
                  Conforme a la Ley 1581 de 2012 y sus decretos reglamentarios, el titular de los
                  datos personales tiene derecho a:
                </P>
                <Lista>
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
                  <li>
                    Presentar quejas ante la Superintendencia de Industria y Comercio por
                    infracciones a la ley, una vez agotado el trámite de consulta o reclamo ante
                    nosotros.
                  </li>
                </Lista>
              </Seccion>

              <Seccion titulo="7. Cómo ejercer estos derechos">
                <P>
                  El área administrativa de {company.legalName} es la encargada de atender las
                  peticiones, consultas y reclamos sobre datos personales. Para ejercer tus derechos
                  escribe a {company.emails[0]} o a {company.emails[1]}, indicando:
                </P>
                <Lista>
                  <li>Tu nombre completo y número de documento.</li>
                  <li>Un correo o teléfono de contacto para responderte.</li>
                  <li>
                    La solicitud puntual (conocer, actualizar, rectificar, suprimir o revocar).
                  </li>
                  <li>Los documentos que quieras hacer valer, si aplica.</li>
                </Lista>
                <P>
                  Las consultas se responden en un plazo máximo de diez (10) días hábiles,
                  prorrogable hasta por cinco (5) días hábiles más, informándote los motivos de la
                  prórroga. Los reclamos se atienden en un plazo máximo de quince (15) días hábiles,
                  prorrogable hasta por ocho (8) días hábiles más. Si un reclamo llega incompleto,
                  te pediremos la información faltante dentro de los cinco (5) días siguientes; si no
                  la recibimos en dos (2) meses, se entenderá que desististe del reclamo.
                </P>
              </Seccion>

              <Seccion titulo="8. Seguridad de la información">
                <P>
                  Adoptamos medidas técnicas, humanas y administrativas razonables para proteger los
                  datos personales frente a pérdida, acceso no autorizado, uso indebido o
                  alteración: el sitio se sirve siempre con conexión cifrada (HTTPS), la información
                  del formulario se almacena en cuentas corporativas protegidas con contraseña y con
                  acceso restringido al personal que necesita conocerla, y las credenciales de los
                  sistemas no se comparten fuera de la empresa. Ningún sistema es infalible, pero
                  mantenemos estas medidas actualizadas y atendemos cualquier incidente que se
                  presente.
                </P>
              </Seccion>

              <Seccion titulo="9. Encargados, terceros y transferencias internacionales">
                <P>
                  Para operar el sitio nos apoyamos en proveedores de tecnología que actúan como
                  encargados del tratamiento y que pueden almacenar la información en servidores
                  ubicados fuera de Colombia, bajo estándares de seguridad equivalentes o superiores
                  a los exigidos por la normativa colombiana:
                </P>
                <Lista>
                  <li>
                    Vercel Inc., que aloja y publica el sitio web y procesa el envío del formulario.
                  </li>
                  <li>
                    Google LLC, cuyos servicios de correo y hojas de cálculo usamos para recibir y
                    organizar las solicitudes de contacto.
                  </li>
                  <li>
                    Google Analytics, que nos entrega estadísticas agregadas de visitas al sitio.
                    Estas estadísticas usan cookies y no permiten identificarte por nombre.
                  </li>
                </Lista>
                <P>
                  Al aceptar esta política, el titular autoriza dichas transmisiones y
                  transferencias, que se realizan exclusivamente para las finalidades descritas en
                  la sección 4. Puedes bloquear o eliminar las cookies desde la configuración de tu
                  navegador; el sitio sigue funcionando normalmente si lo haces.
                </P>
              </Seccion>

              <Seccion titulo="10. Conservación de los datos y vigencia de la base de datos">
                <P>
                  Conservamos los datos personales mientras se mantenga la relación comercial y
                  durante los plazos necesarios para cumplir las finalidades autorizadas y las
                  obligaciones legales, contables y tributarias aplicables. Vencidos esos plazos, y
                  si no existe un deber de conservación, los datos se eliminan o se anonimizan. La
                  base de datos de contactos del sitio permanecerá vigente mientras{" "}
                  {company.legalName} desarrolle su objeto social.
                </P>
              </Seccion>

              <Seccion titulo="11. Cambios en esta política">
                <P>
                  Podemos actualizar esta política cuando cambien nuestros procesos o la normativa
                  aplicable. La versión vigente será siempre la publicada en esta página, con su
                  fecha de entrada en vigencia visible al inicio.
                </P>
              </Seccion>

              <div className="border-t border-slate-200 pt-6 text-sm text-brand-ink/75">
                Última actualización: {vigenciaDesde}.
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}

function Seccion({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-heading text-lg font-bold text-brand-ink">{titulo}</h2>
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-base font-normal leading-relaxed text-brand-ink/75">{children}</p>;
}

function Lista({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex list-disc flex-col gap-1 pl-5 text-base font-normal leading-relaxed text-brand-ink/75">
      {children}
    </ul>
  );
}

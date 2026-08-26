"use client";

import { useEffect, useState, type FormEvent } from "react";
import { QRCodeSVG } from "qrcode.react";
import { company, siteUrl } from "@/constants/company";
import { services } from "@/constants/services";
import { useScrollReveal } from "@/lib/useScrollReveal";

const whatsappLink = `https://wa.me/${company.whatsappNumber}`;
const tarjetaLink = `${siteUrl}/tarjeta`;

export function Contacto() {
  return (
    <section id="contacto" className="relative px-6 py-10 sm:px-10 sm:py-16">
      <ContactoForm />
    </section>
  );
}

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
  autorizacionDatos?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactoForm() {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [servicios, setServicios] = useState<string[]>([]);
  const [errors, setErrors] = useState<FieldErrors>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const servicioParam = params.get("servicio");
    if (servicioParam && services.some((service) => service.id === servicioParam)) {
      setServicios([servicioParam]);
    }
  }, []);

  function toggleServicio(id: string) {
    setServicios((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  const allServiceIds = services.map((service) => service.id);
  const allSelected = allServiceIds.every((id) => servicios.includes(id));

  function toggleAllServicios() {
    setServicios((prev) =>
      allSelected
        ? prev.filter((id) => !allServiceIds.includes(id))
        : Array.from(new Set([...prev, ...allServiceIds]))
    );
  }

  function validate(formData: FormData): FieldErrors {
    const nextErrors: FieldErrors = {};
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name) nextErrors.name = "Cuéntanos tu nombre.";
    if (!email) nextErrors.email = "Necesitamos un correo para responderte.";
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = "Revisa el formato del correo.";
    if (!message) nextErrors.message = "Cuéntanos brevemente qué necesitas.";
    if (!formData.get("autorizacionDatos")) {
      nextErrors.autorizacionDatos = "Debes autorizar el tratamiento de datos para continuar.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstInvalidField = Object.keys(validationErrors)[0];
      form.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)?.focus();
      return;
    }
    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          servicio: servicios.join(", "),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) throw new Error("request_failed");

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      ref={contentRef}
      className="relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
    >
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-brand-ink/8 bg-white p-8 shadow-card sm:p-10">
            <div className="flex flex-col gap-6">
              <div>
                <div className="mb-2 text-xs font-medium text-brand-ink/75">
                  Teléfonos
                </div>
                <div className="flex flex-col gap-2">
                  {company.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:+57${phone}`}
                      className="group flex items-center gap-3 font-mono text-lg font-semibold text-brand-ink hover:text-brand-yellow"
                    >
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-yellow">
                        <PhoneIcon />
                      </span>
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 text-xs font-medium text-brand-ink/75">
                  Correo
                </div>
                <div className="flex flex-col gap-2">
                  {company.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="group flex items-center gap-3 text-base font-medium text-brand-ink hover:text-brand-yellow"
                    >
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-yellow">
                        <MailIcon />
                      </span>
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-2xl border border-brand-ink/8 bg-white p-8 text-center shadow-card sm:p-10">
            <p className="font-heading text-xl font-bold text-brand-ink">
              Escanéame
            </p>
            <p className="max-w-xs text-sm font-normal text-brand-ink/75">
              Escanea el código con la cámara de tu celular para ver nuestra información de contacto.
            </p>
            <a
              href={tarjetaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-black/10 p-3"
              aria-label="Escanear código QR con la información de contacto"
            >
              <QRCodeSVG value={tarjetaLink} size={160} fgColor="#171B1F" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#0E7A46] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#0B6B3A]"
            >
              Escríbenos por WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-brand-ink/8 bg-white p-8 shadow-card sm:p-10">
          {status === "sent" ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <p className="mb-2 font-heading text-xl font-bold text-brand-ink">
                ¡Listo!
              </p>
              <p className="max-w-xs text-sm font-normal text-brand-ink/75">
                Ya recibimos tu mensaje. Te contactamos en menos de 24 horas hábiles.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {status === "error" ? (
                <p className="rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
                  No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.
                </p>
              ) : null}
              <Field label="Nombre" name="name" type="text" required error={errors.name} />
              <Field label="Correo" name="email" type="email" required error={errors.email} />
              <Field label="Teléfono" name="phone" type="tel" />
              <div>
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <label className="block text-sm font-medium text-brand-ink">
                    Servicios de interés
                  </label>
                  <button
                    type="button"
                    onClick={toggleAllServicios}
                    className="text-xs font-semibold text-brand-ink underline decoration-brand-yellow decoration-2 underline-offset-2 hover:text-brand-yellow"
                  >
                    {allSelected ? "Deseleccionar todos" : "Seleccionar todos"}
                  </button>
                </div>
                <p className="mb-2 text-xs text-brand-ink/75">
                  Puedes seleccionar más de uno si necesitas varios servicios.
                </p>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <ServicioChip
                      key={service.id}
                      label={service.title}
                      active={servicios.includes(service.id)}
                      onToggle={() => toggleServicio(service.id)}
                    />
                  ))}
                  <ServicioChip
                    label="Otro / no estoy seguro"
                    active={servicios.includes("otro")}
                    onToggle={() => toggleServicio("otro")}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-brand-ink"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full rounded-lg border bg-white px-3.5 py-3 text-base text-brand-ink outline-none focus:border-brand-ink ${
                    errors.message ? "border-red-400" : "border-slate-300"
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-sm text-red-700">
                    {errors.message}
                  </p>
                )}
              </div>
              <div>
                <label className="flex items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    name="autorizacionDatos"
                    required
                    aria-invalid={Boolean(errors.autorizacionDatos)}
                    aria-describedby={errors.autorizacionDatos ? "autorizacion-error" : undefined}
                    className="mt-1 h-5 w-5 flex-none accent-brand-yellow"
                  />
                  <span className="text-brand-ink/75">
                    Autorizo el tratamiento de mis datos personales conforme a la{" "}
                    <a
                      href="/politica-de-datos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-ink underline underline-offset-2"
                    >
                      Política de Tratamiento de Datos
                    </a>{" "}
                    de {company.legalName}.
                  </span>
                </label>
                {errors.autorizacionDatos && (
                  <p id="autorizacion-error" className="mt-1.5 text-sm text-red-700">
                    {errors.autorizacionDatos}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-brand-ink disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Solicitar cotización"}
              </button>
            </form>
          )}
        </div>
      </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand-ink">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand-ink">
      <path
        d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm1.4 2L12 12.5 19.6 7H4.4zM20 8.4l-7.4 5.3a1 1 0 01-1.2 0L4 8.4V17h16V8.4z"
        fill="currentColor"
      />
    </svg>
  );
}

function ServicioChip({
  label,
  active,
  onToggle,
}: {
  label: string;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <label
      className={`cursor-pointer rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors sm:text-sm ${
        active
          ? "border-brand-ink bg-brand-yellow text-brand-ink"
          : "border-slate-300 bg-white text-brand-ink/75 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-ink"
      }`}
    >
      <input type="checkbox" className="sr-only" checked={active} onChange={onToggle} />
      {label}
    </label>
  );
}

const AUTOCOMPLETE_BY_NAME: Record<string, string> = {
  name: "name",
  email: "email",
  phone: "tel",
};

function Field({
  label,
  name,
  type,
  required,
  error,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-brand-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={AUTOCOMPLETE_BY_NAME[name]}
        inputMode={type === "tel" ? "tel" : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-lg border bg-white px-3.5 py-3 text-base text-brand-ink outline-none focus:border-brand-ink ${
          error ? "border-red-400" : "border-slate-300"
        }`}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Monta el mapa de Google solo cuando está a punto de entrar en pantalla.
 *
 * `loading="lazy"` no bastaba: en conexiones lentas Chrome usa un margen muy
 * amplio y acababa cargando el mapa durante el arranque de la página, trayendo
 * ~400 KB de JavaScript de terceros que compiten por el hilo principal justo
 * mientras se pinta el hero. Al montarlo bajo demanda el mapa se ve igual —
 * aparece antes de que el usuario llegue a él — pero deja de competir con el
 * contenido que sí se ve de entrada.
 */
export function LazyMapEmbed({ query }: { query: string }) {
  const holderRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const holder = holderRef.current;
    if (!holder) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      // Se adelanta media pantalla para que el mapa ya esté cargado cuando el
      // usuario termine de desplazarse hasta él.
      { rootMargin: "400px" }
    );

    observer.observe(holder);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={holderRef} className="absolute inset-0">
      {shouldLoad ? (
        <iframe
          title="Ubicación de Vías y Tránsito SAS"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            query
          )}&output=embed`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="absolute inset-0 bg-brand-ink/5" aria-hidden="true" />
      )}
    </div>
  );
}

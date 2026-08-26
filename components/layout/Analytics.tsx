import Script from "next/script";

// Google Analytics 4 de la cuenta de la empresa. El ID de medición es
// público —viaja en el HTML de cualquier página que lo use—, así que vive
// aquí y no en un secreto. NEXT_PUBLIC_GA_ID lo sobrescribe si algún día
// se cambia de propiedad.
const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "G-Z92Q9PJY2S";

export function Analytics() {
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}

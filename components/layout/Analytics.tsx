import Script from "next/script";

// Google Analytics 4. Queda inactivo hasta que exista el ID de medición
// (G-XXXXXXX): se configura como NEXT_PUBLIC_GA_ID en Vercel cuando el
// cliente cree la cuenta de Analytics, sin tocar código.
const gaId = process.env.NEXT_PUBLIC_GA_ID;

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

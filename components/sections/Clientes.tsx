import Image from "next/image";
import { clients } from "@/constants/clients";

export function Clientes() {
  const track = [...clients, ...clients];

  return (
    <section id="clientes" className="relative overflow-hidden px-6 py-10 sm:px-10 sm:py-16">
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <p className="mb-4 inline-block w-fit rounded-full bg-brand-yellow px-7 py-3 font-sans text-lg font-extrabold uppercase tracking-wide text-brand-ink sm:text-xl">
            Confían en nosotros
          </p>
          <h2 className="mb-10 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
            Clientes destacados
          </h2>
        </div>
      </div>

      <div className="group relative w-full [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max gap-5 group-hover:[animation-play-state:paused]">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex h-[140px] w-[240px] shrink-0 items-center justify-center rounded-2xl border border-brand-ink/8 bg-white p-6 text-center shadow-card"
            >
              {client.logo ? (
                <div className="relative h-24 w-full max-w-[190px]">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="190px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="text-lg font-semibold leading-snug text-brand-ink">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

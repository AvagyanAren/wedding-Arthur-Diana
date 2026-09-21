import Image from "next/image";
import {
  ArrowTopRightOnSquareIcon,
  MapOutlineIcon,
  PinIcon,
} from "@/components/Icons";
import { INVITATION } from "@/lib/invitation";

export function Venue() {
  const { venue } = INVITATION;

  return (
    <section
      aria-labelledby="venue-heading"
      className="relative overflow-hidden bg-white px-8 pb-16 pt-10"
    >
      <Image
        src="/images/olive-branch.png"
        alt=""
        width={564}
        height={388}
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-auto w-52 select-none mix-blend-multiply"
      />

      <h2
        id="venue-heading"
        className="font-sans text-[11px] font-normal uppercase tracking-[0.42em] text-charcoal"
      >
        {venue.title}
      </h2>

      <div className="mt-8 flex items-start gap-2.5">
        <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-olive" />
        <div>
          <p className="font-sans text-base font-medium text-charcoal">
            {venue.name}
          </p>
          <p className="mt-0.5 font-sans text-sm font-light text-stone">
            {venue.region}
          </p>
        </div>
      </div>

      <a
        href={venue.openMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-8 flex min-h-11 w-full items-center justify-center rounded-full bg-leaf px-12 py-2.5 font-sans text-sm text-white transition-colors hover:bg-leaf/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
      >
        <span className="inline-flex items-center gap-2">
          <MapOutlineIcon />
          {venue.openMapLabel}
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-50"
        >
          <ArrowTopRightOnSquareIcon />
        </span>
      </a>

      <a
        href={venue.openMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={venue.mapImage.alt}
        className="mt-10 block overflow-hidden rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
      >
        <Image
          src={venue.mapImage.src}
          alt={venue.mapImage.alt}
          width={1024}
          height={572}
          className="h-auto w-full"
        />
      </a>
    </section>
  );
}

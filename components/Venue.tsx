import { INVITATION, type MapPin } from "@/lib/invitation";
import {
  ArrowIcon,
  OliveBranch,
  PinIcon,
  PinSolidIcon,
  UtensilsIcon,
} from "@/components/Icons";

function VenuePin({ pin }: { pin: MapPin }) {
  return (
    <a
      href={pin.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={pin.ariaLabel}
      className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-start gap-1 outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2"
      style={{ top: pin.top, left: pin.left }}
    >
      {pin.icon === "utensils" ? (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-leaf shadow-sm">
          <UtensilsIcon className="h-4 w-4" />
        </span>
      ) : (
        <PinSolidIcon className="h-8 w-8 shrink-0 text-leaf drop-shadow-sm" />
      )}
      <span className="mt-1 whitespace-pre-line font-sans text-[10px] leading-tight text-charcoal">
        {pin.label}
      </span>
    </a>
  );
}

export function Venue() {
  const { venue } = INVITATION;

  return (
    <section
      aria-labelledby="venue-heading"
      className="relative overflow-hidden bg-white px-8 pb-16 pt-10"
    >
      <OliveBranch className="pointer-events-none absolute -right-4 top-4 h-28 w-44 text-olive/60" />

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
        className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-leaf px-6 py-2.5 font-sans text-sm text-white transition-colors hover:bg-leaf/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
      >
        {venue.openMapLabel}
        <ArrowIcon className="h-4 w-4" />
      </a>

      <div className="map-panel relative mt-10 h-56 overflow-hidden rounded-md">
        <svg
          className="absolute inset-0 h-full w-full text-leaf/25"
          viewBox="0 0 400 240"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M255 0c-10 44-8 78 8 122 14 36 6 56-24 118"
            fill="none"
            stroke="currentColor"
            strokeWidth="22"
            opacity="0.32"
          />
          <path
            d="M278 0c-12 50-6 86 12 128 16 36 2 56-34 112"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            d="M0 164c46-10 86-32 138-28 64 4 96 30 148 22 52-8 82-26 114-16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            opacity="0.4"
          />
          <path
            d="M18 86c54 12 96-18 156-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            opacity="0.28"
          />
        </svg>

        {venue.pins.map((pin) => (
          <VenuePin key={pin.id} pin={pin} />
        ))}
      </div>
    </section>
  );
}

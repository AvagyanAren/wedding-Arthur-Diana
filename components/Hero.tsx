import Image from "next/image";
import { INVITATION } from "@/lib/invitation";

export function Hero() {
  const { couple, hero } = INVITATION;

  return (
    <header className="relative isolate min-h-[100svh] overflow-hidden">
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="(max-width: 480px) 100vw, 480px"
        className="object-cover object-[72%_center]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/35"
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center px-8 pb-10 pt-14 text-center">
        <p className="font-sans text-[10px] font-normal uppercase tracking-[0.38em] text-charcoal/80">
          {hero.kicker}
        </p>

        <h1 className="mt-8 flex flex-col items-center font-serif font-normal leading-none text-charcoal">
          <span className="text-[3.35rem] tracking-wide">{couple.groom}</span>
          <span className="my-2 font-serif text-2xl font-light italic text-charcoal/80">
            {couple.conjunction}
          </span>
          <span className="text-[3.35rem] tracking-wide">{couple.bride}</span>
        </h1>

        <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.32em] text-charcoal/85">
          {hero.date}
        </p>
        <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.32em] text-charcoal/75">
          {hero.place}
        </p>

        <p className="mt-auto font-sans text-[10px] uppercase tracking-[0.38em] text-white/90">
          {hero.closing}
        </p>
      </div>
    </header>
  );
}

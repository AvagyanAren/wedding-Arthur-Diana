import Image from "next/image";
import { HeartIcon } from "@/components/Icons";
import { INVITATION } from "@/lib/invitation";

export function Farewell() {
  const { farewell } = INVITATION;

  return (
    <section className="relative isolate min-h-[52svh] overflow-hidden">
      <Image
        src={farewell.image.src}
        alt={farewell.image.alt}
        fill
        sizes="(max-width: 480px) 100vw, 480px"
        className="object-cover object-[center_42%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-black/10"
      />

      <div className="relative z-10 flex min-h-[52svh] flex-col items-center justify-center px-8 py-16 text-center text-white">
        <p className="font-serif text-[1.65rem] font-light italic leading-snug tracking-wide">
          {farewell.message}
        </p>
        <HeartIcon className="mt-3 h-5 w-5 text-white/90" />
        <p className="mt-4 font-sans text-[11px] uppercase tracking-[0.32em] text-white/90">
          {farewell.names}
        </p>
      </div>
    </section>
  );
}

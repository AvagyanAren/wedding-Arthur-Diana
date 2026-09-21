"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Countdown } from "@/components/Countdown";
import { INVITATION } from "@/lib/invitation";
import { revealProps, useMotionReady } from "@/lib/motion";

export function Hero() {
  const { couple, hero } = INVITATION;
  const reduceMotion = useReducedMotion();
  const ready = useMotionReady();

  return (
    <header className="relative isolate min-h-[100svh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={reduceMotion || !ready ? { scale: 1 } : { scale: 1.04 }}
        transition={
          reduceMotion || !ready
            ? { duration: 0 }
            : {
                duration: 18,
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror",
              }
        }
      >
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="(max-width: 480px) 100vw, 480px"
          className="object-cover object-[72%_center]"
        />
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/35"
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center px-8 pb-10 pt-14 text-center text-white/90">
        <motion.p
          className="font-sans text-[10px] font-normal uppercase tracking-[0.38em]"
          {...revealProps(reduceMotion, 0)}
        >
          {hero.kicker}
        </motion.p>

        <motion.h1
          className="mt-8 flex flex-col items-center font-serif font-normal leading-none"
          {...revealProps(reduceMotion, 0.1)}
        >
          <span className="text-[3.35rem] tracking-wide">{couple.groom}</span>
          <span className="my-2 font-serif text-2xl font-light italic">
            {couple.conjunction}
          </span>
          <span className="text-[3.35rem] tracking-wide">{couple.bride}</span>
        </motion.h1>

        <motion.div {...revealProps(reduceMotion, 0.2)}>
          <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.32em]">
            {hero.date}
          </p>
          <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.32em]">
            {hero.place}
          </p>
        </motion.div>

        <motion.div className="mt-auto" {...revealProps(reduceMotion, 0.25)}>
          <Countdown />
        </motion.div>

        <motion.p
          className="mt-8 font-sans text-[10px] uppercase tracking-[0.38em]"
          {...revealProps(reduceMotion, 0.3)}
        >
          {hero.closing}
        </motion.p>
      </div>
    </header>
  );
}

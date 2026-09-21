"use client";

import { useEffect, useState } from "react";
import type { Transition } from "framer-motion";

export const revealTransition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

export const viewportReplay = {
  once: false,
  amount: 0.25,
} as const;

export function useMotionReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return ready;
}

export function revealProps(reduceMotion: boolean | null, delay = 0) {
  const hidden = { opacity: 0, y: reduceMotion ? 0 : 12 };
  const visible = { opacity: 1, y: 0 };

  return {
    initial: hidden,
    whileInView: {
      ...visible,
      transition: {
        duration: reduceMotion ? 0.4 : 0.6,
        ease: "easeOut" as const,
        delay: reduceMotion ? 0 : delay,
      },
    },
    viewport: viewportReplay,
    transition: {
      duration: reduceMotion ? 0.25 : 0.4,
      ease: "easeOut" as const,
    },
  };
}

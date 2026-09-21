"use client";

import { useEffect, useState } from "react";
import type { Transition } from "framer-motion";

export const revealTransition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

export const viewportOnce = {
  once: true,
  margin: "-80px",
} as const;

export function useMotionReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return ready;
}

export function enterProps(
  reduceMotion: boolean | null,
  delay = 0,
  ready = true,
) {
  const hidden = { opacity: 0, y: reduceMotion ? 0 : 10 };
  const visible = { opacity: 1, y: 0 };

  return {
    initial: hidden,
    animate: ready ? visible : hidden,
    transition: {
      duration: reduceMotion ? 0.4 : 0.6,
      ease: "easeOut" as const,
      delay: reduceMotion ? 0 : delay,
    },
  };
}

export function revealProps(reduceMotion: boolean | null, delay = 0) {
  const hidden = { opacity: 0, y: reduceMotion ? 0 : 12 };
  const visible = { opacity: 1, y: 0 };

  return {
    initial: hidden,
    whileInView: visible,
    viewport: viewportOnce,
    transition: {
      duration: reduceMotion ? 0.4 : 0.6,
      ease: "easeOut" as const,
      delay: reduceMotion ? 0 : delay,
    },
  };
}

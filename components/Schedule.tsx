"use client";

import { motion, useReducedMotion } from "framer-motion";
import { INVITATION, type ScheduleIcon } from "@/lib/invitation";
import {
  CameraIcon,
  CarIcon,
  GlassesIcon,
  RingsIcon,
} from "@/components/Icons";
import { revealTransition, viewportOnce } from "@/lib/motion";

function ScheduleGlyph({
  name,
  className,
}: {
  name: ScheduleIcon;
  className?: string;
}) {
  switch (name) {
    case "car":
      return <CarIcon className={className} />;
    case "rings":
      return <RingsIcon className={className} />;
    case "camera":
      return <CameraIcon className={className} />;
    case "glasses":
      return <GlassesIcon className={className} />;
  }
}

export function Schedule() {
  const { schedule } = INVITATION;
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="schedule-heading"
      className="bg-white px-8 pb-6 pt-16"
    >
      <h2
        id="schedule-heading"
        className="text-center font-sans text-[11px] font-normal uppercase tracking-[0.42em] text-charcoal"
      >
        {schedule.title}
      </h2>

      <ol className="relative mt-12">
        <motion.span
          aria-hidden="true"
          className="absolute bottom-6 left-5 top-6 w-px bg-sage/50"
          style={{ originY: 0 }}
          initial={{ scaleY: reduceMotion ? 1 : 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={viewportOnce}
          transition={reduceMotion ? { duration: 0 } : revealTransition}
        />

        {schedule.items.map((item, index) => {
          const isLast = index === schedule.items.length - 1;

          return (
            <motion.li
              key={item.time}
              className={`relative flex items-center gap-5 ${isLast ? "pb-4" : "pb-10"}`}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: reduceMotion ? 0.4 : 0.6,
                ease: "easeOut",
                delay: reduceMotion ? 0 : index * 0.08,
              }}
            >
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-olive/45 bg-white text-leaf">
                <ScheduleGlyph name={item.icon} className="h-[22px] w-[22px]" />
              </span>

              <div className="flex min-w-0 flex-col gap-1">
                <time
                  dateTime={item.time}
                  className="font-sans text-sm leading-none tabular-nums text-olive"
                >
                  {item.time}
                </time>
                <h3 className="font-sans text-[15px] font-medium leading-snug text-charcoal">
                  {item.title}
                </h3>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}

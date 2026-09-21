"use client";

import { useEffect, useState } from "react";
import { INVITATION } from "@/lib/invitation";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const EMPTY: Remaining = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function remainingUntil(iso: string, now: number): Remaining {
  const diff = Math.max(0, new Date(iso).getTime() - now);
  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function Countdown() {
  const { countdown, eventDateISO } = INVITATION;
  const [remaining, setRemaining] = useState<Remaining>(EMPTY);

  useEffect(() => {
    const tick = () => setRemaining(remainingUntil(eventDateISO, Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [eventDateISO]);

  const units = [
    { value: remaining.days, label: countdown.days },
    { value: remaining.hours, label: countdown.hours },
    { value: remaining.minutes, label: countdown.minutes },
    { value: remaining.seconds, label: countdown.seconds },
  ];

  return (
    <div
      role="group"
      aria-label={countdown.ariaLabel}
      className="flex items-center justify-center text-white/90"
    >
      {units.map((unit, index) => (
        <div key={unit.label} className="flex items-center">
          {index > 0 ? (
            <span
              aria-hidden="true"
              className="mx-3 h-10 w-px bg-white/30 sm:mx-4"
            />
          ) : null}
          <div className="flex min-w-[2.75rem] flex-col items-center">
            <span className="font-serif text-[2.65rem] font-normal leading-none tabular-nums">
              {pad(unit.value)}
            </span>
            <span className="mt-2 font-sans text-[11px] font-light leading-none tracking-[0.06em] text-white/80">
              {unit.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

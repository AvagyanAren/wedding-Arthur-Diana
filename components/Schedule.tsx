import { INVITATION, type ScheduleIcon } from "@/lib/invitation";
import {
  CameraIcon,
  CarIcon,
  GlassesIcon,
  RingsIcon,
} from "@/components/Icons";

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
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-5 top-6 w-px bg-sage/50"
        />

        {schedule.items.map((item, index) => {
          const isLast = index === schedule.items.length - 1;

          return (
            <li
              key={item.time}
              className={`relative flex gap-5 ${isLast ? "pb-4" : "pb-10"}`}
            >
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-olive/45 bg-white text-leaf">
                <ScheduleGlyph name={item.icon} className="h-[22px] w-[22px]" />
              </span>

              <div className="min-w-0 pt-0.5">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <time
                    dateTime={item.time}
                    className="font-sans text-sm tabular-nums text-olive"
                  >
                    {item.time}
                  </time>
                  <h3 className="font-sans text-[15px] font-medium leading-snug text-charcoal">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-1 max-w-[16.5rem] font-sans text-[13px] font-light leading-relaxed text-stone">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

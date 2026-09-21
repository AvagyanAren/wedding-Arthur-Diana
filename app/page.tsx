import { Farewell } from "@/components/Farewell";
import { Hero } from "@/components/Hero";
import { Schedule } from "@/components/Schedule";
import { Venue } from "@/components/Venue";

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[460px] bg-white shadow-invitation">
      <Hero />
      <Schedule />
      <Venue />
      <Farewell />
    </main>
  );
}

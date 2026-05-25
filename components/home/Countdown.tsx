"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-02T09:00:00+13:00").getTime();

function calc() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
  };
}

export function Countdown() {
  const [time, setTime] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-orange-500 text-white section-compact text-center">
      <div className="container-site">
        <div className="text-eyebrow uppercase tracking-[0.12em] opacity-85 mb-2">
          Gates open in
        </div>
        <div className="flex justify-center items-center gap-3 md:gap-6 font-heading">
          <Unit value={time.days} label="Days" />
          <span className="text-[40px] md:text-[48px] opacity-40 font-light">·</span>
          <Unit value={time.hours} label="Hours" />
          <span className="text-[40px] md:text-[48px] opacity-40 font-light">·</span>
          <Unit value={String(time.minutes).padStart(2, "0")} label="Minutes" />
        </div>
      </div>
    </section>
  );
}

function Unit({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-[44px] md:text-[64px] font-bold leading-none text-white">
        {value}
      </div>
      <div className="font-sans text-eyebrow uppercase tracking-[0.08em] opacity-80 mt-1">
        {label}
      </div>
    </div>
  );
}

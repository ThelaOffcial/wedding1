"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wedding } from "@/lib/data";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function diff() {
  const ms = Math.max(0, new Date(wedding.date).getTime() - Date.now());
  const s = Math.floor(ms / 1000);
  return {
    Days: Math.floor(s / 86400),
    Hours: Math.floor((s % 86400) / 3600),
    Minutes: Math.floor((s % 3600) / 60),
    Seconds: s % 60,
  };
}

export default function Countdown() {
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = t ? Object.entries(t) : (["Days", "Hours", "Minutes", "Seconds"] as const).map((k) => [k, 0] as const);

  return (
    <section id="countdown" className="px-5 py-24 sm:py-32">
      <SectionTitle title="Counting down to forever" subtitle="Every second brings us closer to the day we say yes." />
      <Reveal className="mx-auto grid max-w-3xl grid-cols-4 gap-3 sm:gap-6">
        {items.map(([label, value]) => (
          <div key={label} className="glass flex flex-col items-center px-1 py-6 sm:py-10">
            <div className="relative h-12 overflow-hidden sm:h-20">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={`${label}-${value}`}
                  initial={{ y: -24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 24, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="gold-text block font-serif text-4xl tabular-nums sm:text-7xl"
                >
                  {String(value).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="mt-3 text-xs tracking-widest text-emerald/60 sm:text-sm">{label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

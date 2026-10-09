"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { wedding } from "@/lib/data";

const doorEase = [0.76, 0, 0.24, 1] as const;

export default function Intro({ onOpen }: { onOpen: () => void }) {
  const [phase, setPhase] = useState<"closed" | "opening" | "gone">("closed");

  useEffect(() => {
    if (phase === "gone") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  function open() {
    if (phase !== "closed") return;
    setPhase("opening");
    window.dispatchEvent(new Event("invite:open"));
    onOpen();
  }

  if (phase === "gone") return null;
  const opening = phase === "opening";

  const doorBg = "linear-gradient(135deg,#0A3328 0%,#0F4A3A 55%,#0A3328 100%)";

  return (
    <motion.div
      className="fixed inset-0 z-[100]"
      style={{ perspective: 1800 }}
      animate={{ opacity: opening ? 0 : 1 }}
      transition={{ delay: opening ? 1.9 : 0, duration: 0.4 }}
    >
      <motion.div
        className="absolute left-0 top-0 h-full w-1/2"
        style={{ background: doorBg, transformOrigin: "left center", backfaceVisibility: "hidden" }}
        animate={{ rotateY: opening ? 112 : 0 }}
        transition={{ duration: 1.8, delay: 0.35, ease: doorEase }}
      >
        <div className="absolute inset-4 border border-r-0 border-gold/40 sm:inset-8" />
        <div className="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-champagne shadow-[0_0_14px_rgba(217,192,140,0.8)]" />
      </motion.div>

      <motion.div
        className="absolute right-0 top-0 h-full w-1/2"
        style={{ background: doorBg, transformOrigin: "right center", backfaceVisibility: "hidden" }}
        animate={{ rotateY: opening ? -112 : 0 }}
        transition={{ duration: 1.8, delay: 0.35, ease: doorEase }}
        onAnimationComplete={() => {
          if (phase === "opening") setPhase("gone");
        }}
      >
        <div className="absolute inset-4 border border-l-0 border-gold/40 sm:inset-8" />
        <div className="absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-champagne shadow-[0_0_14px_rgba(217,192,140,0.8)]" />
      </motion.div>

      <div className="pointer-events-none absolute left-1/2 top-[12%] h-[76%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-champagne/60 to-transparent" />

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        animate={opening ? { scale: 2, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: opening ? 1 : 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <motion.p
            className="gold-text font-serif text-7xl sm:text-9xl"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {wedding.bride[0]} &amp; {wedding.groom[0]}
          </motion.p>
          <p className="mt-6 font-serif text-xl italic text-ivory sm:text-2xl">
            {wedding.bride} &amp; {wedding.groom}
          </p>
          <p className="mt-2 text-sm tracking-widest text-champagne">{wedding.dateLabel}</p>
          <button
            onClick={open}
            autoFocus
            className="btn-gold mt-10 !bg-champagne !text-emerald-deep hover:!bg-ivory"
          >
            Open invitation
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

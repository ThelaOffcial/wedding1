"use client";
import { motion } from "framer-motion";
import { CalendarPlus, ChevronDown } from "lucide-react";
import { wedding, heroImage } from "@/lib/data";
import { downloadIcs } from "@/lib/calendar";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden text-center text-ivory">
      <motion.img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/80 via-emerald-deep/55 to-emerald-deep/90" />

      <div className="relative z-10 px-6">
        <motion.p
          className="mb-8 text-sm tracking-[0.3em] text-champagne"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          Together with their families
        </motion.p>

        <h1 className="font-serif leading-[1.05]">
          <motion.span
            className="block text-6xl sm:text-8xl md:text-9xl"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.6, ease }}
          >
            {wedding.bride}
          </motion.span>
          <motion.span
            className="gold-text my-2 block text-4xl italic sm:text-5xl"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.1, ease }}
          >
            &amp;
          </motion.span>
          <motion.span
            className="block text-6xl sm:text-8xl md:text-9xl"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 1.3, ease }}
          >
            {wedding.groom}
          </motion.span>
        </h1>

        <motion.div
          className="mx-auto mt-10 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2 }}
        >
          <div className="mx-auto mb-6 h-px w-28 bg-gradient-to-r from-transparent via-champagne to-transparent" />
          <p className="font-serif text-2xl sm:text-3xl">{wedding.dateLabel}</p>
          <p className="mt-2 text-sm tracking-wide text-ivory/80">
            {wedding.hall} · {wedding.venue}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#rsvp" className="btn-gold !bg-champagne !text-emerald-deep hover:!bg-ivory">
              Reserve your seat
            </a>
            <button onClick={downloadIcs} className="btn-ghost !border-champagne/60 !text-ivory hover:!bg-white/15">
              <CalendarPlus size={18} /> Add to calendar
            </button>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#countdown"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-champagne"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}

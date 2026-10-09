"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { CalendarPlus, ChevronDown } from "lucide-react";
import { wedding, heroImage } from "@/lib/data";
import { downloadIcs } from "@/lib/calendar";
import { useOpened } from "./Stage";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hide: {},
  show: { transition: { delayChildren: 0.9, staggerChildren: 0.35 } },
};

const item: Variants = {
  hide: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.3, ease } },
};

const amp: Variants = {
  hide: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.1, ease } },
};

export default function Hero() {
  const opened = useOpened();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden text-center text-ivory"
    >
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <motion.img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover"
          initial={{ scale: 1.3 }}
          animate={{ scale: opened ? 1 : 1.3 }}
          transition={{ duration: 3.5, ease: "easeOut" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/80 via-emerald-deep/55 to-emerald-deep/90" />

      <motion.div className="relative z-10 px-6" style={{ y: textY, opacity: textOpacity, scale: textScale }}>
        <motion.div variants={container} initial="hide" animate={opened ? "show" : "hide"}>
          <motion.p variants={item} className="mb-8 text-sm tracking-[0.3em] text-champagne">
            Together with their families
          </motion.p>

          <h1 className="font-serif leading-[1.05]">
            <motion.span variants={item} className="block text-6xl sm:text-8xl md:text-9xl">
              {wedding.bride}
            </motion.span>
            <motion.span variants={amp} className="gold-text my-2 block text-4xl italic sm:text-5xl">
              &amp;
            </motion.span>
            <motion.span variants={item} className="block text-6xl sm:text-8xl md:text-9xl">
              {wedding.groom}
            </motion.span>
          </h1>

          <motion.div variants={item} className="mx-auto mt-10 max-w-md">
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
        </motion.div>
      </motion.div>

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

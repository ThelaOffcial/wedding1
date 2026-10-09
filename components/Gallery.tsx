"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { photos } from "@/lib/data";
import SectionTitle from "./SectionTitle";

function Shot({ p, i }: { p: (typeof photos)[number]; i: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const dir = i % 2 === 0 ? -1 : 1;

  return (
    <motion.figure
      ref={ref}
      className="mb-3 overflow-hidden rounded-2xl border border-white/70 shadow-[0_10px_40px_rgba(15,74,58,0.1)] sm:mb-5"
      style={{ transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 70, rotateY: 18 * dir, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`${p.ratio} overflow-hidden`}>
        <motion.img
          src={p.src}
          alt={p.alt}
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ y, scale: 1.25 }}
        />
      </div>
    </motion.figure>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="px-5 py-24 sm:py-32">
      <SectionTitle title="Our story so far" subtitle="A few moments from the journey that led us here." />
      <div className="mx-auto max-w-6xl columns-2 gap-3 sm:gap-5 md:columns-3">
        {photos.map((p, i) => (
          <Shot key={p.src} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}

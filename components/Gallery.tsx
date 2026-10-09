"use client";
import { motion } from "framer-motion";
import { photos } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Gallery() {
  return (
    <section id="gallery" className="px-5 py-24 sm:py-32">
      <SectionTitle title="Our story so far" subtitle="A few moments from the journey that led us here." />
      <div className="mx-auto max-w-6xl columns-2 gap-3 sm:gap-5 md:columns-3">
        {photos.map((p, i) => (
          <motion.figure
            key={p.src}
            className="group mb-3 overflow-hidden rounded-2xl border border-white/70 shadow-[0_10px_40px_rgba(15,74,58,0.1)] sm:mb-5"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
          >
            <div className={`${p.ratio} overflow-hidden`}>
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

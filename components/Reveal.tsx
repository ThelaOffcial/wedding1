"use client";
import { motion } from "framer-motion";

type Variant = "rise" | "left" | "right" | "zoom";

const from: Record<Variant, Record<string, number>> = {
  rise: { opacity: 0, y: 50, rotateX: 22 },
  left: { opacity: 0, x: -90, rotateY: 28 },
  right: { opacity: 0, x: 90, rotateY: -28 },
  zoom: { opacity: 0, scale: 0.82 },
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "rise",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: Variant;
}) {
  return (
    <motion.div
      className={className}
      style={{ transformPerspective: 1200 }}
      initial={from[variant]}
      whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

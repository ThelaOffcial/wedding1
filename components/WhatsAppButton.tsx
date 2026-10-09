"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { wedding } from "@/lib/data";

export default function WhatsAppButton() {
  function share() {
    const text = `You are invited to the wedding of ${wedding.bride} & ${wedding.groom} on ${wedding.dateLabel} at ${wedding.hall}, ${wedding.venue}.\n\n${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <motion.button
      onClick={share}
      aria-label="Share on WhatsApp"
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.04 }}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.7, type: "spring" }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-emerald px-5 py-4 text-sm text-ivory shadow-[0_10px_30px_rgba(10,51,40,0.35)]"
    >
      <MessageCircle size={20} className="text-champagne" />
      <span className="hidden sm:inline">Share on WhatsApp</span>
    </motion.button>
  );
}

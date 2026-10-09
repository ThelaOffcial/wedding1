"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { wedding } from "@/lib/data";

export default function MusicPlayer() {
  const audio = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);

  async function toggle() {
    const a = audio.current;
    if (!a) return;
    if (on) {
      a.pause();
      setOn(false);
    } else {
      try {
        await a.play();
        setOn(true);
      } catch {
        setOn(false);
      }
    }
  }

  return (
    <>
      <audio ref={audio} src={wedding.music} loop preload="none" />
      <motion.button
        onClick={toggle}
        aria-label={on ? "Pause music" : "Play music"}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5 }}
        className="glass fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center !rounded-full text-emerald"
      >
        {on && (
          <motion.span
            className="absolute inset-0 rounded-full border border-gold"
            animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        )}
        {on ? <Pause size={20} /> : <Play size={20} className="translate-x-0.5" />}
      </motion.button>
    </>
  );
}

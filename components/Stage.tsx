"use client";
import { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
import Intro from "./Intro";

const OpenContext = createContext(false);
export const useOpened = () => useContext(OpenContext);

export default function Stage({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);
  return (
    <OpenContext.Provider value={opened}>
      <Intro onOpen={() => setOpened(true)} />
      <motion.main
        className="relative z-10"
        initial={{ scale: 1.12 }}
        animate={{ scale: opened ? 1 : 1.12 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "50% 20%" }}
      >
        {children}
      </motion.main>
    </OpenContext.Provider>
  );
}

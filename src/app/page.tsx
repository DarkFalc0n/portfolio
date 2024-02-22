"use client";
import { motion } from "framer-motion";
import { Hero, About } from "../sections";
import {
  initialCursorProps,
  useMouseCursor,
} from "../context/mouseCursorProvider";
import { useEffect } from "react";

export default function Home() {
  const { cursorProps, setCursorProps } = useMouseCursor();
  return (
    <main
      className={`font-heading bg-charcoal-black cursor-none overflow-x-hidden`}
    >
      {/* cursor */}
      <motion.div
        initial={{
          ...initialCursorProps,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          ...cursorProps,
          translateX: "-50%",
          translateY: "-50%",
          top: 0,
          left: 0,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
        }}
        className="absolute w-[12vh] h-[12vh] mix-blend-difference z-10 bg-white rounded-full"
      />
      <Hero />
      <About />
    </main>
  );
}

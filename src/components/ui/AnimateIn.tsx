"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimateInProps) {
  const shouldReduceMotion = useReducedMotion();

  const hidden = {
    opacity: 0,
    y: !shouldReduceMotion && direction === "up" ? 24 : 0,
    x:
      !shouldReduceMotion && direction === "left"
        ? -24
        : !shouldReduceMotion && direction === "right"
          ? 24
          : 0,
  };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

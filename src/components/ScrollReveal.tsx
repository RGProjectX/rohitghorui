import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const getInitial = (direction: Direction): Variant => {
  switch (direction) {
    case "up": return { opacity: 0, y: 40 };
    case "down": return { opacity: 0, y: -40 };
    case "left": return { opacity: 0, x: -40 };
    case "right": return { opacity: 0, x: 40 };
    case "scale": return { opacity: 0, scale: 0.92 };
  }
};

const getAnimate = (direction: Direction): Variant => {
  switch (direction) {
    case "up":
    case "down": return { opacity: 1, y: 0 };
    case "left":
    case "right": return { opacity: 1, x: 0 };
    case "scale": return { opacity: 1, scale: 1 };
  }
};

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: ScrollRevealProps) => (
  <motion.div
    initial={getInitial(direction)}
    whileInView={getAnimate(direction)}
    viewport={{ once, margin: "-60px" }}
    transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default ScrollReveal;

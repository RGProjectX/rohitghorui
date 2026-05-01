import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Direction = "up" | "down" | "left" | "right" | "zoom-in";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const directionMap: Record<Direction, string> = {
  up: "fade-up",
  down: "fade-down",
  left: "fade-left",
  right: "fade-right",
  "zoom-in": "zoom-in",
};

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  className = "",
  once = true,
}: ScrollRevealProps) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out-cubic",
      once: true,
      mirror: false,
      offset: 120,
    });
  }, []);

  const aosDirection = directionMap[direction];
  const delayMs = Math.round(delay * 1000);

  return (
    <div
      className={className}
      data-aos={aosDirection}
      data-aos-duration={duration}
      data-aos-delay={delayMs}
      data-aos-once={once}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

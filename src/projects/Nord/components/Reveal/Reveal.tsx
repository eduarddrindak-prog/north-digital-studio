import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

import "./Reveal.css";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

function Reveal({
  children,
  delay = 0,
  className = "",
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`nord-reveal ${className}`}
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileInView={
        prefersReducedMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
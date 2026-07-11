import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}